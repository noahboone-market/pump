# Pump — TODOS

Last updated: 2026-03-14

---

## P1 — Build Before Any Users Touch The App

### Security Rules Unit Tests
**What:** Firebase Firestore Security Rules unit tests using the local Rules Emulator + `@firebase/rules-unit-testing` SDK.
**Why:** A silent rules bug could expose users' private/draft workouts or let clients write directly to protected collections (e.g. `/feeds`, `/personalRecords`). This is not a "nice to have" — it's a launch prerequisite.
**Pros:** Catches regressions when rules change, documents access intent, builds trust.
**Cons:** Requires Node.js test environment alongside iOS Xcode project.
**Context:** Key rules to test: (1) User A cannot read User B's unpublished workouts, (2) clients cannot write to `/feeds/{uid}`, (3) clients cannot write to `/personalRecords`, (4) a user can only create a follow where `followerId == auth.uid`.
**Effort:** S
**Priority:** P1
**Depends on:** Security rules must be written first (write rules + tests together)

---

### Exercise Library Seed (wger.de import)
**What:** One-time script or Cloud Function that fetches all exercises from `wger.de` REST API and imports them into Firestore `/exercises/{id}` collection.
**Why:** Without a pre-seeded database, users have to manually type every exercise name. This makes the app unusable for first-time users. wger.de has 500+ exercises with muscle group tags, equipment, and descriptions — free, no API key required.
**Pros:** Instant usable exercise library on day 1. Includes muscle group tags (needed for body part heatmap). No licensing cost.
**Cons:** wger.de data quality varies — some exercises have poor descriptions or missing GIFs. May need curation pass.
**Context:** Endpoint: `https://wger.de/api/v2/exercise/?format=json&language=2&limit=100`. Map `muscles` array to our `muscleGroups` field. Store as Firestore docs so they're editable later. Run the import script during Firebase project setup, before TestFlight.
**Effort:** S
**Priority:** P1
**Depends on:** Firebase project must be set up with Firestore

---

### Fan-out Idempotency
**What:** Ensure `onWorkoutPublished` Cloud Function uses `set()` instead of `addDocument()` when writing to `/feeds/{followerId}/{workoutId}`.
**Why:** Firebase Cloud Functions can execute twice on retry after a transient error. Using `set()` with the workout doc ID as the document key makes the operation idempotent — the second execution is a harmless no-op. Using `addDocument()` creates duplicate feed entries.
**Pros:** Eliminates duplicate feed entries. Zero behavior change on the happy path.
**Cons:** None.
**Context:** Pattern: `feedRef.doc(workoutId).set(feedItem, { merge: false })` — not `feedRef.add(feedItem)`. Apply the same pattern to the follow-backfill function.
**Effort:** XS
**Priority:** P1
**Depends on:** Cloud Functions scaffolding

---

## P2 — Ship Shortly After Launch

### Body Part Heatmap
**What:** A human silhouette on the user's profile that lights up with color based on which muscle groups were trained in the past 7 days. Chest = red (trained today), orange (2-3 days ago), grey (not trained).
**Why:** Instantly communicates training balance and consistency at a glance. Gamifies the "train everything" mindset. Differentiating visual feature for profiles.
**Pros:** Very high visual impact. Drives balanced training behavior. Screenshot-worthy.
**Cons:** ~3-4 hours of custom SwiftUI Shape drawing. Requires muscle group data to be tagged on all exercises (wger.de import provides this).
**Context:** Build as a SwiftUI `Canvas` or `Path`-based view. Color = interpolated from last-trained date. Muscle groups to cover: chest, shoulders, back (upper/lower), biceps, triceps, core, quads, hamstrings, glutes, calves. Start from: muscle group → days since last trained → color gradient.
**Effort:** M
**Priority:** P2
**Depends on:** Exercise library must have muscle group tags; workout logging must be working

---

### Shareable Workout Card
**What:** After finishing a workout, generate a beautiful branded image card (exercises list, PRs broken, total volume, duration, Pump logo) that can be shared to Instagram Stories, iMessage, etc. via the iOS share sheet.
**Why:** Every share is a Pump impression to a non-user. The word-of-mouth growth loop. Strava's "activity" screenshots are how most people discover Strava.
**Pros:** Viral growth. Zero CAC. Users love showing off PRs.
**Cons:** ~3-4 hours. Needs workout summary design to be final first. `ImageRenderer` (iOS 16+) makes this straightforward.
**Context:** Use SwiftUI's `ImageRenderer` to render a `WorkoutSummaryCardView` to `UIImage`, then pass to `UIActivityViewController`. Card should include: user avatar + name, workout title, exercises with top sets, PRs broken (highlighted), total volume, Pump branding at bottom.
**Effort:** M
**Priority:** P2
**Depends on:** Workout completion flow must be finalized; branding/design must be set

---

### Achievement Badge System
**What:** A badge system for milestone achievements: first workout, 10-workout streak, 100 workouts logged, 10,000kg total volume lifted, "First time at this gym" (gym explorer), "PR Machine" (5 PRs in a week), etc.
**Why:** Achievement systems are the single strongest driver of long-term retention in fitness apps. Each badge is a moment of delight + a shareable moment.
**Pros:** High retention impact. Content-generates itself as users hit milestones.
**Cons:** ~4-6 hours to design + implement the detection logic and badge display UI. Badge artwork needs design work.
**Context:** Store earned badges in `/users/{uid}/badges/{badgeId}`. Detection via Cloud Functions triggered on relevant events (workout completed, follow created, PR set). Design holistically — don't implement one badge type in isolation. Start with: first_workout, streak_7, streak_30, workouts_100, pr_5_in_week, gym_explorer.
**Effort:** L
**Priority:** P2
**Depends on:** Workout logging, gym check-in, PR detection must all be working

---

## P3 — Phase 2 (Post-PMF)

### Apple Watch Companion App
**What:** A watchOS app target that lets users log sets directly from their Apple Watch during workouts — no phone needed on the gym floor.
**Why:** This is the #1 quality-of-life request from serious gym goers. Phone is in the bag; they want to quickly tap to log a set. Massive differentiator vs. Hevy/Strong.
**Pros:** Removes biggest friction point in workout logging. Deepens HealthKit integration.
**Cons:** Separate watchOS Xcode target. WatchConnectivity framework for phone↔watch sync. ~2-3 weeks of dedicated work. Needs the iOS app to be stable first.
**Context:** watchOS app scope: (1) show current workout exercises, (2) add a set with Digital Crown for weight, (3) sync to iOS app via WatchConnectivity. HealthKit workout session for heart rate data. ComplicationProvider for active workout ring on watch face.
**Effort:** XL
**Priority:** P3
**Depends on:** iOS app must be in App Store and stable; Apple Developer account required

---

### Algolia Exercise Search
**What:** Replace client-side fuzzy search of the exercise library with Algolia (or Typesense) for proper full-text search with typo tolerance.
**Why:** Client-side fuzzy search of 500+ exercises is fine at MVP scale but gets slow and imprecise as the library grows. "Benchpress" vs "Bench Press" vs "bench press" — all should match.
**Pros:** Instant, typo-tolerant search. Supports filtering by muscle group + equipment simultaneously.
**Cons:** Algolia free tier (10k searches/month) may hit limits. $29/mo for Grow plan. Adds external dependency.
**Context:** Use Algolia Firebase Extension for automatic sync from Firestore `/exercises` → Algolia index. iOS SDK: `InstantSearch iOS`. Only needed when exercise library > 500 items or search UX feels slow.
**Effort:** M
**Priority:** P3
**Depends on:** Exercise library seeded; app in production with real users experiencing search friction
