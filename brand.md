# Pump — Brand Identity Guide

> "Train together."

---

## 1. Brand Foundation

### Mission
Make gym culture social. Give gym goers the community layer that every other sport already has.

### Vision
A world where going to the gym is as socially connected as going for a run. Where your deadlift PR gets the same celebration as a marathon finish line.

### Positioning
Pump is the social fitness OS for gym goers. Not a workout logger. Not a calorie tracker. The app that makes you show up because your community is watching.

### The One Thing
**Strava for the gym.** Every person we show this to should immediately get it.

### Audience
- Primary: 18–35 year olds who go to the gym 3–5x per week
- They already track workouts (Notes, Hevy, Strong, a notebook)
- They post gym content on Instagram but have no dedicated gym social platform
- They're motivated by community, competition, and visible progress
- Secondary: Personal trainers, gym-goers who want accountability partners

### Personality
- **Bold** — confident, never timid. Big type. Strong opinions.
- **Human** — gym culture is warm and encouraging, not cold and data-obsessed
- **Focused** — no bloat. Every feature earns its place.
- **Grounded** — earned confidence, not hype. Real reps, real results.

### Voice & Tone
| DO | DON'T |
|---|---|
| "You broke your bench PR." | "Congratulations! You've achieved a new personal record!" |
| "See what your gym crew is lifting." | "Connect with your fitness community!" |
| "Log it. Share it. Crush it." | "Track your workouts and share your progress with friends." |
| "Day 12." (streak, no explanation needed) | "You're on a 12-day streak! Keep it up!" |
| Short. Punchy. Declarative. | Long sentences, exclamation marks, corporate warmth. |

---

## 2. Visual Identity

### Color Palette

#### Primary Colors
| Name | Hex | Usage |
|---|---|---|
| **Pump Black** | `#0D0E10` | App background, dark sections |
| **Pump Orange** | `#FF5C28` | Primary CTA, PR celebrations, highlights |
| **Pure White** | `#FFFFFF` | Headlines on dark, primary text |

#### Secondary Colors
| Name | Hex | Usage |
|---|---|---|
| **Charcoal** | `#1A1B1E` | Cards, elevated surfaces |
| **Surface** | `#242528` | Input fields, secondary cards |
| **Muted** | `#6B6C70` | Secondary text, placeholders |
| **Subtle** | `#3A3B3F` | Borders, dividers |

#### Accent / State Colors
| Name | Hex | Usage |
|---|---|---|
| **PR Gold** | `#FFB800` | Personal record celebrations |
| **Success Green** | `#22C55E` | Completed sets, positive states |
| **Error Red** | `#EF4444` | Errors only |

#### Gradients
```
Primary gradient (CTAs, hero elements):
  from: #FF5C28  to: #FF8A00
  direction: 135deg

Dark gradient (backgrounds):
  from: #0D0E10  to: #1A1B1E
```

### Typography

#### Fonts
| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display** | Inter | 900 (Black) | Hero headlines, app titles |
| **Heading** | Inter | 700 (Bold) | Section titles, feature names |
| **Body** | Inter | 400 (Regular) | Descriptions, copy |
| **Caption** | Inter | 500 (Medium) | Labels, metadata, stats |
| **Mono** | JetBrains Mono | 400 | Numbers (weights, reps, volume) |

> Use Inter from Google Fonts. Numbers (weights, reps, PRs) use JetBrains Mono for that precise, data-driven feel.

#### Type Scale
```
Display:  56–80px / line-height 1.0 / letter-spacing -0.03em
H1:       40px    / line-height 1.1 / letter-spacing -0.02em
H2:       28px    / line-height 1.2 / letter-spacing -0.01em
H3:       20px    / line-height 1.3
Body:     16px    / line-height 1.6
Caption:  13px    / line-height 1.4
```

### Logo

#### Wordmark
- **PUMP** in Inter Black (weight 900), all caps
- Letter-spacing: -0.04em (tight, confident)
- Color: White on dark, Pump Black on light

#### Logo Mark (icon)
- A stylized "P" formed by a barbell shape — the vertical stroke is the bar, the bowl is a weight plate
- Used as app icon, favicon, and small-context usage
- Monochrome only: white on dark, black on light, or orange on any background

#### Usage Rules
- Minimum size: 24px height for wordmark, 16px for icon
- Never stretch, rotate, or recolor outside the approved palette
- Clear space: equal to the cap-height of the "P" on all sides
- On photos: use white wordmark only, ensure sufficient contrast

### Iconography
- Use SF Symbols (iOS native) for in-app icons — they adapt to system accessibility settings
- For marketing / web: Lucide icons (open source, clean, consistent stroke weight 1.5px)
- Style: Outlined, 1.5px stroke, rounded caps. No filled icons except for active/selected states.

### Spacing System
Based on 4px grid.
```
4px   — micro (icon gaps)
8px   — tight (within components)
12px  — small
16px  — base
24px  — medium
32px  — large
48px  — section gap (mobile)
64px  — section gap (desktop)
96px  — hero spacing
```

### Border Radius
```
4px  — tags, chips
8px  — inputs, small cards
12px — cards
16px — modals, sheets
999px — pills, buttons
```

### Shadows (for light contexts)
```
Subtle:  0 1px 3px rgba(0,0,0,0.12)
Card:    0 4px 12px rgba(0,0,0,0.15)
Lifted:  0 8px 24px rgba(0,0,0,0.20)
```

---

## 3. UI Design Principles

### Dark-First
The app lives in the gym — bright fluorescent lights, phone in sweaty hands. Dark UI reduces eye strain and looks premium. All screens default to dark. No light mode at launch.

### Numbers Are Sacred
Weights, reps, PRs, streaks — these are the data people care about. Always use monospace font for numbers. Always show the unit (kg or lbs). Never truncate a PR.

### Celebrate the Moment
A PR is a big deal. An animation, a haptic, a moment of pause. Don't let it slide by with a text label. The app should feel alive when something good happens.

### Zero-Friction Logging
In the gym, people have 60 seconds between sets. The logging UX must be fast enough to use between reps. Default values from previous sets. One tap to add a set. Never require more than 3 taps to log a set.

### Feed is the Hook
People open Pump for the same reason they open Instagram — to see what their people are doing. Feed must load fast, feel alive (real-time updates), and give easy reactions (kudos).

---

## 4. Motion & Animation

### Principles
- Purposeful: animation communicates state, not decoration
- Fast: 200–300ms for transitions, 150ms for micro-interactions
- Springy: use spring physics (not linear) for elements that move into place

### Key Animations
| Moment | Animation |
|---|---|
| PR broken | Confetti burst + scale up of PR badge, 0.4s |
| Set logged | Checkmark draw + row slide in, 0.2s |
| Kudos (like) | Heart fill + scale pop, 0.15s |
| Workout complete | Full-screen summary slides up, 0.3s spring |
| Streak milestone | Flame pulse + number count-up, 0.5s |

### Haptics (iOS)
| Event | Haptic Type |
|---|---|
| PR broken | `.notificationFeedbackGenerator(.success)` — strong |
| Set logged | `.impactFeedbackGenerator(.light)` |
| Kudos sent | `.impactFeedbackGenerator(.medium)` |
| Error | `.notificationFeedbackGenerator(.error)` |

---

## 5. Photography & Imagery Style

### Real People, Real Gyms
- Authentic gym photography — iron, chalk, sweat. Not stock photo studio setups.
- People mid-lift, not posing. Action > pose.
- Diverse: age, body type, gender, gym style (powerlifting, bodybuilding, CrossFit)
- Lighting: dramatic, high-contrast. Gym lighting is part of the aesthetic.

### No Stock Photos
Never use generic stock fitness imagery (woman laughing with a salad, man pointing at protein powder). If you can't afford real photography at launch, use solid color blocks with bold type.

### Product Screenshots
- Always shown on iPhone 15 Pro (graphite) in dark mode
- Surrounded by a subtle dark gradient, never stark white background
- Show real data — real exercise names, real weights

---

## 6. App Store & Marketing Copy

### App Name
Pump: Gym Social & Workout Log

### Tagline (App Store subtitle)
Train with your gym crew.

### Short Description (one sentence pitch)
Log your workouts, track PRs, and see what your gym community is lifting — in real time.

### Long Description Opening
> Your gym has a community. Now it has an app.
>
> Pump is the social fitness platform built for gym goers. Log every set, break PRs, and share your progress with the people who get it — the ones who show up early, stay late, and actually understand why you're celebrating a 5kg bench press increase.

### Key Phrases (use across all marketing)
- "Your gym, connected."
- "Train together."
- "Log it. Share it. Crush it."
- "Every rep. Every PR. Every gain."
- "The gym feed you've been missing."
- "Strava for the gym." (for press/investor context only — don't use in consumer marketing)

---

## 7. Do Not

- Use the word "journey" or "transformation" in marketing copy
- Use progress-before/after photos that focus on weight loss — Pump is about strength and community
- Use the colour red except for error states
- Show the app in light mode
- Use more than 2 font weights on a single screen
- Add exclamation marks to UI copy
- Use gradients on text (except display headlines in specific hero contexts)
