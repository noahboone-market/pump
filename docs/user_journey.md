# Pump — User Journey & Experience Map

> **Tagline:** Train together.
> **Platform:** iOS (SwiftUI + Firebase)
> **Core loop:** Log → Break PR → Share → Get kudos → Come back.

---

## Table of Contents

1. [User Personas](#1-user-personas)
2. [The Core Loop](#2-the-core-loop)
3. [Journey 1 — Onboarding](#3-journey-1--onboarding)
4. [Journey 2 — First Workout](#4-journey-2--first-workout)
5. [Journey 3 — Breaking a PR](#5-journey-3--breaking-a-pr)
6. [Journey 4 — Social Feed & Discovery](#6-journey-4--social-feed--discovery)
7. [Journey 5 — Returning User (Retention Loop)](#7-journey-5--returning-user-retention-loop)
8. [Full App Screen Flow](#8-full-app-screen-flow)
9. [Emotion Map](#9-emotion-map)
10. [Brand Tokens Quick Reference](#10-brand-tokens-quick-reference)

---

## 1. User Personas

### The Consistent Gym Goer — *"Marcus"*
> 28 · Software engineer · Trains 4x/week · Uses Hevy to log but nobody sees it

**Goals:** Track progress, see if he's improving, feel part of a gym community.
**Frustrations:** His gym friends don't use the same apps. PRs go unnoticed. No shared space.
**How Pump helps:** Feed shows his PRs to people who get it. Kudos actually mean something.

---

### The Social Fitness Person — *"Priya"*
> 24 · Nurse · Trains 3x/week · Posts gym content to Instagram

**Goals:** Accountability, seeing what her gym crew is doing, celebrating milestones.
**Frustrations:** Instagram isn't built for workout data. Tracking feels disconnected from sharing.
**How Pump helps:** One place for logging and sharing. Her streak drives her to show up.

---

### The Newcomer — *"Jake"*
> 21 · Student · Just started going to the gym · Feels lost

**Goals:** Learn exercises, build consistency, not feel alone.
**Frustrations:** Intimidating. Doesn't know what to track. No accountability.
**How Pump helps:** Exercise library to guide him. Following more experienced gym goers to learn. Streaks give him a reason to come back.

---

## 2. The Core Loop

```mermaid
flowchart LR
    A([🏋️ Goes to Gym]) --> B[Logs Workout]
    B --> C{PR Broken?}
    C -- Yes --> D[🏆 Celebration\nHaptic + Confetti]
    C -- No --> E[Workout Summary]
    D --> E
    E --> F[Posts to Feed]
    F --> G[Friends see it\nin real time]
    G --> H[💪 Kudos + Comments]
    H --> I([🔥 Motivation\nto Come Back])
    I --> A

    style A fill:#FF5C28,color:#fff,stroke:none
    style D fill:#FFB800,color:#0A0B0D,stroke:none
    style H fill:#FF5C28,color:#fff,stroke:none
    style I fill:#FF5C28,color:#fff,stroke:none
```

---

## 3. Journey 1 — Onboarding

**Entry point:** App Store → Download → Open for the first time.
**Goal:** Get the user to their first workout logged in under 3 minutes.

```mermaid
journey
    title Onboarding — First Time Open
    section Download & Open
      See Pump on App Store: 5: Marcus
      Tap Get: 5: Marcus
      Open app — see bold dark screen: 5: Marcus
    section Sign Up
      Tap "Continue with Apple": 5: Marcus
      Face ID prompt: 5: Marcus
      Account created instantly: 5: Marcus
    section Quick Setup
      Enter username: 4: Marcus
      Choose goals (strength / community / both): 5: Marcus
      Import exercises from library: 5: Marcus
    section Find Friends
      See suggested gym goers: 4: Marcus
      Follow 3 people: 5: Marcus
      Feed populates immediately: 5: Marcus
    section First Moment
      See Marcus's first feed with real workouts: 5: Marcus
      Tap "Start Workout" — feels ready: 5: Marcus
```

### Onboarding Screen Flow

```mermaid
flowchart TD
    A[Splash Screen\n— PUMP wordmark] --> B[Sign in with Apple\nor Continue with Email]
    B --> C{Auth Success?}
    C -- No --> B
    C -- Yes --> D[Welcome Screen\n— "Your gym, connected."]
    D --> E[Choose Username\n— auto-suggested from name]
    E --> F[Select Goals\n— Strength · Community · Consistency]
    F --> G[Find Your Gym\n— CoreLocation permission prompt]
    G --> H{Location granted?}
    H -- Yes --> I[Nearby gyms listed\n— tap to set home gym]
    H -- No --> I2[Skip — can set later]
    I --> J
    I2 --> J
    J[Find Friends\n— search by username\nor see suggested from contacts]
    J --> K[Follow 1+ person]
    K --> L[🎉 You're in!\n— Feed with real content\n— "Start your first workout" CTA]
    L --> M([Home — Feed Tab])

    style A fill:#0A0B0D,color:#FF5C28,stroke:#FF5C28
    style L fill:#FF5C28,color:#fff,stroke:none
    style M fill:#FF5C28,color:#fff,stroke:none
```

---

## 4. Journey 2 — First Workout

**Trigger:** User arrives at the gym, opens Pump.
**Goal:** Log a full workout in under 5 minutes of total interaction time.

```mermaid
journey
    title First Workout at the Gym
    section Arriving at Gym
      Open Pump: 5: Marcus
      Tap "Start Workout": 5: Marcus
      Check in at gym — one tap: 5: Marcus
    section Logging
      Search "Bench Press" — instant results: 5: Marcus
      Add to workout: 5: Marcus
      Log Set 1 — weight + reps: 4: Marcus
      Log Set 2 — previous values pre-filled: 5: Marcus
      Log Set 3 — taps + quickly: 5: Marcus
      Add next exercise — Squat: 5: Marcus
    section Finishing
      Tap "Finish Workout": 5: Marcus
      See workout summary screen: 5: Marcus
      PR detected — confetti animation: 5: Marcus
      Tap "Share to Feed": 5: Marcus
    section Social Response
      Workout appears in friends' feeds: 5: Priya, Jake
      Priya gives kudos: 5: Priya
      Jake leaves a comment: 4: Jake
      Marcus gets push notification: 5: Marcus
```

### Active Workout Screen Flow

```mermaid
flowchart TD
    START([Tap "Start Workout"\non Home or Feed]) --> GYM[Gym Check-in Prompt\n— show nearby gyms]
    GYM --> MAIN[Active Workout Screen]
    MAIN --> SEARCH[Search Exercise Library\n— 500+ exercises]
    SEARCH --> ADD[Add Exercise to Workout]
    ADD --> SETVIEW[Exercise Card\n— shows previous best]
    SETVIEW --> LOGSET[Log Set\n— weight / reps / type]
    LOGSET --> PR{PR Detected?}
    PR -- Yes --> CELEBRATE[🏆 Haptic + PR badge\non the set row]
    PR -- No --> NEXTSET
    CELEBRATE --> NEXTSET{More sets?}
    NEXTSET -- Yes --> LOGSET
    NEXTSET -- No, next exercise --> SEARCH
    NEXTSET -- Done --> FINISH[Tap "Finish Workout"]
    FINISH --> SUMMARY[Workout Summary\n— duration, volume, PRs]
    SUMMARY --> CONFETTI{Any PRs?}
    CONFETTI -- Yes --> BOOM[🎊 Full-screen confetti\n+ haptic burst]
    CONFETTI -- No --> PUBLISH
    BOOM --> PUBLISH[Tap "Share to Feed"\nor "Keep Private"]
    PUBLISH --> FEED([Feed — workout visible\nto followers in real time])

    style CELEBRATE fill:#FFB800,color:#0A0B0D,stroke:none
    style BOOM fill:#FFB800,color:#0A0B0D,stroke:none
    style FEED fill:#FF5C28,color:#fff,stroke:none
```

---

## 5. Journey 3 — Breaking a PR

**The magic moment.** This is the most emotionally significant event in the app.

```mermaid
flowchart LR
    A[User logs set\n100kg × 5 reps] --> B{Epley 1RM\n> existing PR?}
    B -- No --> C[Set saved\nno fanfare]
    B -- Yes --> D[PR flag set\non set row]
    D --> E[Workout completes]
    E --> F[Summary screen\nshows PR badge]
    F --> G[🎊 Confetti burst\n+ success haptic]
    G --> H[Share to feed\n— PR highlighted]
    H --> I[Followers see\n"Marcus broke\nhis Bench Press PR!"]
    I --> J[💪 Kudos flood in]
    J --> K[Push notification\nto Marcus]

    style D fill:#FFB800,color:#0A0B0D,stroke:none
    style G fill:#FFB800,color:#0A0B0D,stroke:none
    style J fill:#FF5C28,color:#fff,stroke:none
```

### PR Detection Logic

```mermaid
flowchart TD
    SET[Set logged\nweight W, reps R] --> VALID{W > 0\nR > 0\nR ≤ 30?}
    VALID -- No --> SKIP[Skip PR check\nlog warning]
    VALID -- Yes --> CALC["estimated1RM = W × (1 + R/30)\nEpley formula"]
    CALC --> FETCH[Fetch existing PR\nfor this exercise]
    FETCH --> EXISTS{PR exists?}
    EXISTS -- No --> NEW[Create new PR record\nfirst time doing this exercise]
    EXISTS -- Yes --> COMPARE{new1RM\n> existing1RM?}
    COMPARE -- No --> DONE[No PR — done]
    COMPARE -- Yes --> UPDATE[Update PR doc\nin Firestore]
    UPDATE --> FLAG[Flag set row\nwith PR badge]
    FLAG --> CELEBRATE[Trigger celebration\non workout complete]

    style NEW fill:#22C55E,color:#fff,stroke:none
    style UPDATE fill:#22C55E,color:#fff,stroke:none
    style CELEBRATE fill:#FFB800,color:#0A0B0D,stroke:none
```

---

## 6. Journey 4 — Social Feed & Discovery

**Daily behaviour:** User opens Pump to see what their gym crew is up to.

```mermaid
journey
    title Morning Feed Check
    section Wake Up
      Phone notification: 4: Priya
      "Marcus broke his squat PR": 5: Priya
      Open Pump from notification: 5: Priya
    section Feed
      See Marcus's workout in feed: 5: Priya
      See detailed sets and PRs: 5: Priya
      Tap 💪 Kudos: 5: Priya
      Leave comment "Beast!": 5: Priya
    section Discovery
      See Jake's first workout: 5: Priya
      Follow Jake: 5: Priya
      Jake gets notification: 5: Jake
    section Motivation
      Priya opens own profile: 4: Priya
      Sees streak — Day 12: 5: Priya
      Decides to go to gym today: 5: Priya
```

### Feed Interaction Flow

```mermaid
flowchart TD
    OPEN([Open Pump\n— Feed tab]) --> LOAD[Load /feeds/userId\n— real-time Firestore listener]
    LOAD --> FEED[Feed renders\n— 20 most recent\nfrom people you follow]
    FEED --> SCROLL[User scrolls]
    SCROLL --> ITEM[Tap workout card]
    ITEM --> DETAIL[Workout Detail Screen\n— all exercises, all sets, PRs]
    DETAIL --> KUDOS[Tap 💪 Kudos]
    KUDOS --> LIKE_WRITE[Write to /workouts/id/likes\n— increment counter]
    LIKE_WRITE --> NOTIF[Push notification\nto workout author]

    FEED --> PROFILE[Tap user avatar]
    PROFILE --> USER_PROFILE[User Profile\n— streak, PRs, workout history]
    USER_PROFILE --> FOLLOW{Following?}
    FOLLOW -- No --> FOLLOW_BTN[Tap Follow]
    FOLLOW_BTN --> FOLLOW_WRITE[Write to /follows\n— trigger backfill function\n30 days of their workouts]
    FOLLOW_WRITE --> FEED2[Their posts\nappear in your feed]

    FEED --> NEWPOST{New workout\nposted while scrolling?}
    NEWPOST -- Yes --> PILL["'2 new workouts' pill\n— tap to scroll up"]

    style KUDOS fill:#FF5C28,color:#fff,stroke:none
    style FOLLOW_BTN fill:#FF5C28,color:#fff,stroke:none
```

---

## 7. Journey 5 — Returning User (Retention Loop)

**The 30-day arc:** How Pump keeps users coming back.

```mermaid
flowchart TD
    D1[Day 1\n— First workout logged\nStreak starts] --> D3
    D3[Day 3\n— See friends' PRs\nGive first kudos\nFeed feels alive] --> D7
    D7[Day 7\n— 🔥 7-day streak milestone\nBadge earned\nFeed = daily habit] --> D14
    D14[Day 14\n— First follower gain\nSomeone discovered your profile\nStreak = identity] --> D30
    D30[Day 30\n— 💪 30-day streak badge\nProfile shows consistent gym goer\nApp is now essential] --> RETAINED
    RETAINED([Retained —\nPump = the app\nyou open at the gym])

    style D1 fill:#1C1D24,color:#F0F1F5,stroke:#FF5C28
    style D7 fill:#1C1D24,color:#F0F1F5,stroke:#FFB800
    style D30 fill:#FF5C28,color:#fff,stroke:none
    style RETAINED fill:#FF5C28,color:#fff,stroke:none
```

### Streak Mechanic (Retention Engine)

```mermaid
stateDiagram-v2
    [*] --> NoStreak : First open
    NoStreak --> Day1 : Log first workout
    Day1 --> Day2 : Log workout next day
    Day2 --> DayN : Log workout every day
    DayN --> Milestone : Hit 7 / 30 / 100 days
    Milestone --> DayN : Continue
    DayN --> Broken : Miss a day
    Broken --> NoStreak : Streak resets to 0
    NoStreak --> Day1 : Start again

    note right of Milestone
        Milestone badges:
        🔥 7 days
        💪 30 days
        👑 100 days
    end note
```

---

## 8. Full App Screen Flow

```mermaid
flowchart TD
    LAUNCH([App Launch]) --> AUTH{Authenticated?}
    AUTH -- No --> ONBOARD[Onboarding Flow\n→ See Journey 1]
    AUTH -- Yes --> RESUME{Active workout\nin progress?}
    RESUME -- Yes --> BANNER[Show resume banner\n'Continuing Chest Day →']
    RESUME -- No --> HOME

    HOME([🏠 Feed Tab]) --> FEED_SCREEN[Feed Screen\n— real-time]
    FEED_SCREEN --> WORKOUT_DETAIL[Workout Detail]
    FEED_SCREEN --> USER_PROFILE[User Profile]

    HOME --> WORKOUT_TAB[🏋️ Workout Tab]
    WORKOUT_TAB --> START_WORKOUT[Active Workout\n→ See Journey 2]
    WORKOUT_TAB --> HISTORY[Workout History\n— past sessions]
    HISTORY --> PAST_DETAIL[Past Workout Detail]

    HOME --> DISCOVER[🔍 Discover Tab]
    DISCOVER --> SEARCH_USERS[Search Users]
    DISCOVER --> GYM_LEADERBOARD[Gym Leaderboards\nPhase 2]

    HOME --> PROFILE_TAB[👤 Profile Tab]
    PROFILE_TAB --> MY_PROFILE[My Profile\n— streak, PRs, stats]
    MY_PROFILE --> PR_LIST[All PRs by Exercise]
    MY_PROFILE --> FOLLOWERS[Followers / Following]
    MY_PROFILE --> EDIT_PROFILE[Edit Profile]

    HOME --> NOTIF_BELL[🔔 Notifications]
    NOTIF_BELL --> NOTIF_FEED[Kudos, Comments,\nNew Followers, PR Milestones]

    style HOME fill:#FF5C28,color:#fff,stroke:none
    style LAUNCH fill:#0A0B0D,color:#FF5C28,stroke:#FF5C28
```

---

## 9. Emotion Map

How the user feels at each stage of the Pump experience.

| Stage | Moment | Emotion | Design Response |
|---|---|---|---|
| First open | Sees bold dark landing screen | **Intrigued** | Strong brand moment — wordmark + tagline |
| Sign in | Face ID → instant auth | **Smooth** | No friction, no forms |
| Feed loads | Sees real workouts from gym goers | **FOMO / inspired** | Feed must have content from day 1 (seed users) |
| First workout | Logging first set | **Slightly uncertain** | Pre-fill previous values, gentle guidance |
| First PR | Confetti + haptic | **ELATED** | This moment must be disproportionately celebrated |
| First kudos received | Push notification lights up | **Validated, seen** | Notification copy is warm and specific |
| Day 7 streak | Sees "7 days" on profile | **Proud** | Badge animation, milestone acknowledgement |
| Losing streak | Missed a day | **Disappointed** | No guilt — just "start again" energy |
| Follower gained | Someone found their profile | **Social proof moment** | "X started following you" — simple, satisfying |
| 100 workouts | Century milestone | **Identity level** | Big badge, shareable card (Phase 2) |

---

## 10. Brand Tokens Quick Reference

### Colors

| Token | Hex | Usage |
|---|---|---|
| `pump-black` | `#0A0B0D` | App background |
| `pump-charcoal` | `#13141A` | Cards, elevated surfaces |
| `pump-surface` | `#1C1D24` | Input fields |
| `pump-border` | `rgba(255,255,255,0.07)` | All borders |
| `pump-muted` | `#545763` | Secondary text |
| `pump-white` | `#F0F1F5` | Primary text |
| `pump-orange` | `#FF5C28` | Primary CTA, highlights |
| `pump-orange2` | `#FF8A00` | Gradient end |
| `pump-gold` | `#FFB800` | PR celebrations |
| `pump-green` | `#22C55E` | Success states |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display | Inter | 900 | 56–80px |
| H1 | Inter | 900 | 40px |
| H2 | Inter | 800 | 28px |
| Body | Inter | 400 | 16px |
| Numbers | JetBrains Mono | 500 | contextual |

### Voice Rules

| ✅ Do | ❌ Don't |
|---|---|
| Short, declarative sentences | Long explanatory copy |
| Active voice | Passive voice |
| Celebrate PRs loudly | Mention weight loss |
| "Day 12." (no explanation) | "You've been on a 12-day streak! Keep it up!" |
| Lowercase in UI labels | ALL CAPS except the wordmark |

### Key Interactions

| Moment | Haptic | Animation |
|---|---|---|
| PR broken | `.success` (strong) | Confetti burst, 400ms |
| Set logged | `.light` impact | Row slide-in, 200ms |
| Kudos sent | `.medium` impact | Heart pop, 150ms |
| Streak milestone | `.success` | Badge pulse, 500ms |
| Error | `.error` | Shake, 300ms |

---

*Last updated: 2026-03-14 · Pump v0.1 · [github.com/noahboone-market/pump](https://github.com/noahboone-market/pump)*
