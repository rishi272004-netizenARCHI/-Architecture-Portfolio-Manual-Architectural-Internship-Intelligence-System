# 🏗️ AI-Powered Architectural Internship Intelligence Platform
# Complete Website Flowchart & Structure

```
═══════════════════════════════════════════════════════════════════════════════
                          🏠 HOME PAGE (/)
═══════════════════════════════════════════════════════════════════════════════
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    │                               │                               │
    ▼                               ▼                               ▼
┌─────────┐                   ┌─────────┐                    ┌──────────┐
│  NAV    │                   │  HERO   │                    │ SECTIONS │
└────┬────┘                   └────┬────┘                    └────┬─────┘
     │                             │                              │
     │    ┌────────────────────────┼────────────────────────┐     │
     │    │                        │                        │     │
     ▼    ▼                        ▼                        ▼     ▼
┌──────────────┐           ┌──────────────┐         ┌──────────────┐
│ • Book       │           │ • Title      │         │ • Stats Bar  │
│ • Firms      │           │ • Subtitle   │         │ • 791+ Firms │
│ • Tools      │           │ • CTA Buttons│         │ • 128 Chaps  │
│ • Feedback   │           │              │         │ • 10 Volumes │
│              │           │ [Enter Book] │         │ • 600+ AI    │
│ [Firm DB]    │           │ [Firm DB]    │         │   Prompts    │
│ [Enter Book] │           └──────────────┘         └──────────────┘
└──────────────┘
```

---

## 📊 COMPLETE PAGE HIERARCHY

```
                                    HOME (/)
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         │                             │                             │
         ▼                             ▼                             ▼
    📖 BOOK (/book)              🏢 FIRMS (/firms)            ⚙️ ADMIN (/admin)
         │                             │                             │
         │                             │                             │
    ┌────┴────┐                   ┌────┴────┐                   ┌────┴────┐
    │         │                   │         │                   │         │
    ▼         ▼                   ▼         ▼                   ▼         ▼
 VOLUMES   CHAPTERS            FILTER    FIRM                 FIRMS     DASHBOARD
 LIST      [chapter]           PANEL     DETAIL               CRUD      STATS
           │                    │        [id]                  │
           │                    │         │                    │
           │                    │         ▼                    │
           │                    │    FIRM PROFILE              │
           │                    │    • Details                 │
           │                    │    • Stats                   │
           │                    │    • Contact                 │
           │                    │                              │
           ▼                    ▼                              ▼
    ┌──────────────────────────────────────────────────────────────────┐
    │                    🤖 AI INTELLIGENCE PANEL                      │
    │                    (Floating on Chapter Pages)                   │
    │                                                                  │
    │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                │
    │  │Examples │ │Failures │ │Improve  │ │Firm     │                │
    │  │         │ │         │ │         │ │Match    │                │
    │  └─────────┘ └─────────┘ └─────────┘ └─────────┘                │
    │                                                                  │
    │  + Self Assessment (3 sliders)                                   │
    │  + Cross-Chapter Intelligence                                    │
    │  + Firm Context Selection                                        │
    └──────────────────────────────────────────────────────────────────┘
```

---

## 🛤️ USER NAVIGATION FLOWS

### FLOW 1: Book Reading Flow

```
┌─────────┐     ┌─────────┐     ┌──────────────┐     ┌─────────────────┐
│  HOME   │────▶│  BOOK   │────▶│   VOLUME     │────▶│    CHAPTER      │
│         │     │  PAGE   │     │   LIST       │     │    [chapter]    │
└─────────┘     └─────────┘     └──────────────┘     └────────┬────────┘
                                                           │
                                              ┌────────────┼────────────┐
                                              │            │            │
                                              ▼            ▼            ▼
                                        ┌──────────┐ ┌──────────┐ ┌──────────┐
                                        │  READ    │ │    AI    │ │  SELF    │
                                        │  CONTENT │ │  PANEL   │ │ASSESS    │
                                        └──────────┘ └──────────┘ └──────────┘
                                              │            │            │
                                              │            │            │
                                              ▼            ▼            ▼
                                        ┌──────────────────────────────────┐
                                        │  • Progress Saved to LocalStorage│
                                        │  • Skill Profile Updated         │
                                        │  • Chapter Visited Tracked       │
                                        │  • References Viewed Logged      │
                                        └──────────────────────────────────┘
```

### FLOW 2: Firm Discovery Flow

```
┌─────────┐     ┌─────────┐     ┌──────────────┐     ┌─────────────────┐
│  HOME   │────▶│  FIRMS  │────▶│   FILTER     │────▶│   RESULTS       │
│         │     │  PAGE   │     │   PANEL      │     │   GRID          │
└─────────┘     └─────────┘     └──────────────┘     └────────┬────────┘
                                                           │
                                              ┌────────────┼────────────┐
                                              │            │            │
                                              ▼            ▼            ▼
                                        ┌──────────┐ ┌──────────┐ ┌──────────┐
                                        │  CITY    │ │  SCALE   │ │  FIRM    │
                                        │  FILTER  │ │  FILTER  │ │  CARD    │
                                        └──────────┘ └──────────┘ └────┬─────┘
                                                                           │
                                                                           ▼
                                                                    ┌──────────────┐
                                                                    │  FIRM DETAIL │
                                                                    │  PAGE [id]   │
                                                                    │              │
                                                                    │ • Name       │
                                                                    │ • Location   │
                                                                    │ • Scale      │
                                                                    │ • Typology   │
                                                                    │ • BIM Level  │
                                                                    │ • Contact    │
                                                                    └──────────────┘
```

### FLOW 3: AI Intelligence Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐
│   CHAPTER    │────▶│   CLICK AI   │────▶│   AI PANEL OPENS     │
│   PAGE       │     │   BUTTON     │     │   (Modal Overlay)    │
└──────────────┘     └──────────────┘     └───────────┬──────────┘
                                                       │
         ┌─────────────────────────────────────────────┼─────────────────┐
         │                       │                     │                 │
         ▼                       ▼                     ▼                 ▼
   ┌───────────┐          ┌───────────┐        ┌───────────┐     ┌───────────┐
   │  EXAMPLES │          │  FAILURES │        │  IMPROVE  │     │FIRM MATCH │
   │  MODE     │          │  MODE     │        │  MODE     │     │  MODE     │
   │           │          │           │        │           │     │           │
   │ • ArchDaily│         │ • Mistakes│        │ • Tools   │     │ • Skill   │
   │ • Behance  │         │ • Warnings│        │ • Tutorials│    │   Match   │
   │ • Issuu    │         │ • Fixes   │        │ • Resources│    │ • Emphasis│
   │           │          │           │        │           │     │ • Avoid   │
   └─────┬─────┘          └─────┬─────┘        └─────┬─────┘     └─────┬─────┘
         │                      │                    │                 │
         └──────────────────────┴────────────────────┴─────────────────┘
                                          │
                                          ▼
                                   ┌──────────────┐
                                   │ SELF         │
                                   │ ASSESSMENT   │
                                   │              │
                                   │ • Clarity    │
                                   │ • Skill      │
                                   │ • Apply      │
                                   │              │
                                   │ [Save]       │
                                   └──────┬───────┘
                                          │
                                          ▼
                                   ┌──────────────┐
                                   │ ZUSTAND      │
                                   │ STORE        │
                                   │              │
                                   │ • SkillProf  │
                                   │ • Visited    │
                                   │ • FirmType   │
                                   │ • MatchScore │
                                   └──────────────┘
```

---

## 📁 COMPLETE FILE STRUCTURE

```
src/
├── app/
│   ├── page.tsx                    # HOME PAGE
│   ├── layout.tsx                  # Root Layout
│   ├── globals.css                 # Global Styles
│   │
│   ├── book/
│   │   ├── page.tsx                # BOOK LANDING (Volume List)
│   │   └── chapter/
│   │       └── [chapter]/
│   │           └── page.tsx        # CHAPTER PAGE + AI PANEL
│   │
│   ├── firms/
│   │   ├── page.tsx                # FIRM DATABASE (Filter + Grid)
│   │   └── [id]/
│   │       └── page.tsx            # FIRM DETAIL PAGE
│   │
│   ├── admin/
│   │   └── firms/
│   │       └── page.tsx            # ADMIN PORTAL (Hidden)
│   │
│   ├── dashboard/
│   │   └── page.tsx                # DASHBOARD (Stats)
│   │
│   └── api/
│       ├── firms/
│       │   ├── route.ts            # GET firms, POST firm
│       │   ├── filters/
│       │   │   └── route.ts        # Filter options API
│       │   └── stats/
│       │       └── route.ts        # Statistics API
│       ├── feedback/
│       │   └── route.ts            # Feedback submission
│       └── ai-context/
│           └── route.ts            # AI Intelligence API
│
├── components/
│   ├── ui/                         # Shadcn UI Components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── select.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   ├── scroll-area.tsx
│   │   └── ... (40+ components)
│   │
│   ├── ai-intelligence-panel.tsx   # ⭐ AI PANEL COMPONENT
│   └── chapter-blocks.tsx          # Chapter Layout Blocks
│
├── lib/
│   ├── db.ts                       # Prisma Client
│   ├── utils.ts                    # Utility Functions
│   ├── book-data.ts                # Volume/Chapter Data
│   ├── chapter-images.ts           # Image Mapping
│   ├── presentation-architecture.ts# Visual Design System
│   └── ai-store.ts                 # ⭐ ZUSTAND AI STATE STORE
│
└── hooks/                          # Custom React Hooks
```

---

## 🎯 KEY FEATURES BY PAGE

### HOME PAGE (/)
```
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURE                    │  DESCRIPTION                             │
├────────────────────────────────────────────────────────────────────────┤
│  Navigation                 │  Book, Firms, Tools, Feedback links      │
│  Hero Section               │  AI-Powered Platform intro + CTAs        │
│  Stats Bar                  │  791+ Firms, 128 Chapters, 10 Volumes    │
│  Firm Intelligence Section  │  Dark themed showcase of firm DB         │
│  How It Works               │  5-step process visualization            │
│  Volume Grid                │  All 10 volumes with chapter counts      │
│  Admin Portal Preview       │  Dashboard preview + stats               │
│  Tools & Templates          │  8 downloadable resources               │
│  AI Question Engine         │  Structured prompts showcase             │
│  Feedback Form              │  Multi-type feedback submission          │
│  Footer                     │  Quick links + copyright                 │
└────────────────────────────────────────────────────────────────────────┘
```

### BOOK PAGE (/book)
```
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURE                    │  DESCRIPTION                             │
├────────────────────────────────────────────────────────────────────────┤
│  Volume Cards               │  10 volumes with descriptions            │
│  Chapter Progress           │  Reading progress per volume             │
│  Quick Navigation           │  Jump to any chapter                     │
│  Search                     │  Find chapters by topic                  │
│  Last Read                  │  Resume from last position               │
└────────────────────────────────────────────────────────────────────────┘
```

### CHAPTER PAGE (/book/chapter/[chapter])
```
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURE                    │  DESCRIPTION                             │
├────────────────────────────────────────────────────────────────────────┤
│  Reading Progress Bar       │  Fixed top progress indicator            │
│  Navigation                 │  Prev/Next chapter buttons               │
│  Hero Image                 │  Full-bleed chapter header               │
│  Content Sections           │  Parsed markdown with frames             │
│  AI Intelligence Panel      │  ⭐ Floating button (right bottom)       │
│  Cross-Chapter Links        │  Related chapters suggestions            │
│  Self Assessment            │  3-slider rating system                  │
└────────────────────────────────────────────────────────────────────────┘
```

### FIRMS PAGE (/firms)
```
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURE                    │  DESCRIPTION                             │
├────────────────────────────────────────────────────────────────────────┤
│  Filter Panel               │  Multi-dimension filtering               │
│  - State Filter             │  State selection with city coordination  │
│  - City Filter              │  Dynamic based on selected state         │
│  - Scale Filter             │  Solo/Small/Mid/Large/Corporate          │
│  - Tier Filter              │  Metro/Regional/Emerging                 │
│  - Typology Filter          │  Residential/Institutional/etc.          │
│  - BIM Filter               │  Heavy/Moderate/Partial/None             │
│  - Category Filter          │  Corporate/Boutique/Sustainable/etc.     │
│  Results Grid               │  Card-based firm display                 │
│  Sort Options               │  Name/City/Scale sorting                 │
│  Pagination                 │  Load more / Infinite scroll             │
│  Firm Cards                 │  Quick preview with key info             │
└────────────────────────────────────────────────────────────────────────┘
```

### FIRM DETAIL PAGE (/firms/[id])
```
┌────────────────────────────────────────────────────────────────────────┐
│  FEATURE                    │  DESCRIPTION                             │
├────────────────────────────────────────────────────────────────────────┤
│  Firm Header                │  Name, Location, Category badge          │
│  Classification Grid        │  Scale, Tier, Typology info              │
│  Technical Profile          │  BIM usage, Design orientation           │
│  Internship Info            │  Potential, Offer status                 │
│  Contact Section            │  Website, Email, Application method      │
│  Portfolio Emphasis         │  What to emphasize for this firm         │
│  Back Navigation            │  Return to firms list                    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🤖 AI INTELLIGENCE SYSTEM COMPONENTS

### 4 AI MODES

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         AI INTELLIGENCE PANEL                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│  │ 🔵 EXAMPLES     │  │ 🔴 FAILURES     │  │ 🟢 IMPROVE      │        │
│  │                 │  │                 │  │                 │        │
│  │ Show Strong     │  │ Show Common     │  │ Improve This    │        │
│  │ Examples        │  │ Failures        │  │ Skill           │        │
│  │                 │  │                 │  │                 │        │
│  │ • ArchDaily     │  │ • Overcrowded   │  │ • Tutorials     │        │
│  │ • Behance       │  │ • Inconsistent  │  │ • Software      │        │
│  │ • Issuu         │  │ • Poor Hierarchy│  │ • Resources     │        │
│  │ • Pinterest     │  │ • Missing Info  │  │ • Practice      │        │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘        │
│                                                                        │
│  ┌─────────────────┐  ┌─────────────────────────────────────────┐     │
│  │ 🟣 FIRM MATCH   │  │         FIRM TYPE SELECTOR              │     │
│  │                 │  │                                         │     │
│  │ Match to        │  │  [Corporate] [Boutique] [Sustainable]   │     │
│  │ Firm Type       │  │  [Interior] [Urban]                     │     │
│  │                 │  │                                         │     │
│  │ • Primary Skills│  └─────────────────────────────────────────┘     │
│  │ • Portfolio Emph│                                                  │
│  │ • Avoid in Port │  ┌─────────────────────────────────────────┐     │
│  │ • Skill Match   │  │         SELF ASSESSMENT                 │     │
│  └─────────────────┘  │                                         │     │
│                       │  Concept Clarity:  ●━━━━━━━●  [3/5]     │     │
│                       │  Current Skill:    ●━━━━━━━━● [4/5]     │     │
│                       │  Ability to Apply: ●━━━━●   [2/5]       │     │
│                       │                                         │     │
│                       │  [Save Assessment]                      │     │
│                       └─────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

### SKILL AREAS MAPPING

```
┌─────────────────────────────────────────────────────────────────────────┐
│  CHAPTERS     │  SKILL AREA    │  DIFFICULTY                           │
├─────────────────────────────────────────────────────────────────────────┤
│  1-5          │  concept       │  Beginner → Intermediate              │
│  6-10         │  layout        │  Beginner → Intermediate              │
│  11-15        │  drafting      │  Intermediate                         │
│  16-20        │  technical     │  Intermediate → Advanced              │
│  21-25        │  detailing     │  Intermediate → Advanced              │
│  26-30        │  rendering     │  Intermediate                         │
│  31-35        │  environment   │  Advanced                             │
│  36-40        │  layout        │  Advanced                             │
│  41-45        │  drafting      │  Advanced                             │
│  46-50        │  technical     │  Advanced                             │
│  51-55        │  detailing     │  Advanced                             │
│  56-60        │  rendering     │  Advanced                             │
│  61-65        │  environment   │  Advanced                             │
│  66-70        │  layout        │  Expert                               │
│  71-75        │  drafting      │  Expert                               │
│  76-80        │  technical     │  Expert                               │
│  81-85        │  detailing     │  Expert                               │
│  86-90        │  rendering     │  Expert                               │
│  91-95        │  concept       │  Expert                               │
│  96-100       │  layout        │  Expert                               │
│  101-105      │  drafting      │  Expert                               │
│  106-110      │  technical     │  Expert                               │
│  111-115      │  detailing     │  Expert                               │
│  116-120      │  rendering     │  Expert                               │
│  121-125      │  environment   │  Expert                               │
│  126-128      │  concept       │  Master                               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🗄️ DATABASE MODELS

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           DATABASE SCHEMA                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌───────────────────┐    ┌───────────────────┐                       │
│  │      FIRM         │    │     VOLUME        │                       │
│  ├───────────────────┤    ├───────────────────┤                       │
│  │ id                │    │ id                │                       │
│  │ name              │    │ volumeNumber      │                       │
│  │ normalizedName    │    │ title             │                       │
│  │ city              │    │ description       │                       │
│  │ state             │    └─────────┬─────────┘                       │
│  │ country           │              │                                  │
│  │ category          │              │ 1:N                             │
│  │ scaleCategory     │              ▼                                  │
│  │ tierCategory      │    ┌───────────────────┐                       │
│  │ primaryTypology   │    │     CHAPTER       │                       │
│  │ designOrientation │    ├───────────────────┤                       │
│  │ technicalOrient.  │    │ id                │                       │
│  │ bimIntensity      │    │ volumeId          │◄──────┐               │
│  │ internshipPotent. │    │ chapterNumber     │       │               │
│  │ internshipOffered │    │ title             │       │               │
│  │ website           │    │ content           │       │               │
│  │ officialEmail     │    │ skillArea         │       │               │
│  │ applicationMethod │    │ difficulty        │       │               │
│  │ portfolioEmphasis │    │ relatedChapters   │       │               │
│  │ dataSource        │    └─────────┬─────────┘       │               │
│  └───────────────────┘              │                 │               │
│                                     │ 1:N            │ 1:N           │
│                                     ▼                 │               │
│  ┌───────────────────┐    ┌───────────────────┐     │               │
│  │ CHAPTERREFERENCE  │    │ USERASSESSMENT    │     │               │
│  ├───────────────────┤    ├───────────────────┤     │               │
│  │ id                │    │ id                │     │               │
│  │ chapterId         │◄───│ chapterId         │─────┘               │
│  │ title             │    │ sessionId         │                       │
│  │ summary           │    │ clarityRating     │                       │
│  │ url               │    │ skillRating       │                       │
│  │ category          │    │ applicationRating │                       │
│  │ skillArea         │    │ userNotes         │                       │
│  │ firmRelevance     │    └───────────────────┘                       │
│  │ chapterTags       │                                                │
│  └───────────────────┘                                                │
│                                                                        │
│  ┌───────────────────┐                                                │
│  │   USERAIPROFILE   │                                                │
│  ├───────────────────┤                                                │
│  │ sessionId         │  (Zustand Persisted State)                     │
│  │ selectedFirmType  │                                                │
│  │ skillProfile      │  JSON: { drafting, layout, ... }              │
│  │ chaptersVisited   │  JSON: [1, 5, 12, 28, ...]                    │
│  │ weakAreas         │  JSON: ["rendering", "detailing"]             │
│  │ strongAreas       │  JSON: ["concept", "layout"]                  │
│  │ matchScore        │  Float: 0-100                                 │
│  └───────────────────┘                                                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 API ENDPOINTS

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ENDPOINT                    │  METHOD  │  DESCRIPTION                 │
├─────────────────────────────────────────────────────────────────────────┤
│  /api/firms                  │  GET     │  List firms with filters     │
│  /api/firms                  │  POST    │  Create new firm             │
│  /api/firms/[id]             │  GET     │  Get firm details            │
│  /api/firms/[id]             │  PUT     │  Update firm                 │
│  /api/firms/[id]             │  DELETE  │  Delete firm                 │
│  /api/firms/filters          │  GET     │  Get filter options          │
│  /api/firms/stats            │  GET     │  Get statistics              │
│  /api/feedback               │  POST    │  Submit feedback             │
│  /api/ai-context             │  GET     │  Get AI references           │
│  /api/ai-context             │  POST    │  Save assessment             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 DESIGN SYSTEM

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        APPLE-STYLE DESIGN TOKENS                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  COLORS                                                                │
│  ├── Background:    #FFFFFF (white) / #F8F8F8 (off-white)             │
│  ├── Text Primary:  #111111 (near black)                              │
│  ├── Text Secondary:#6B6B6B (gray)                                    │
│  ├── Accent:        Volume-based (10 unique colors)                   │
│  │   Vol 1: #6366F1 (Indigo)                                          │
│  │   Vol 2: #10B981 (Emerald)                                         │
│  │   Vol 3: #F59E0B (Amber)                                           │
│  │   Vol 4: #EF4444 (Red)                                             │
│  │   Vol 5: #8B5CF6 (Purple)                                          │
│  │   Vol 6: #06B6D4 (Cyan)                                            │
│  │   Vol 7: #EC4899 (Pink)                                            │
│  │   Vol 8: #84CC16 (Lime)                                            │
│  │   Vol 9: #F97316 (Orange)                                          │
│  │   Vol 10: #64748B (Slate)                                          │
│                                                                        │
│  TYPOGRAPHY                                                            │
│  ├── Font Family:   Inter / System                                    │
│  ├── H1:            36-44px / Semibold                                │
│  ├── H2:            24-28px / Semibold                                │
│  ├── H3:            18-20px / Semibold                                │
│  ├── Body:          15-16px / Regular                                 │
│  ├── Caption:       12-13px / Regular                                 │
│  └── Line Height:   1.6-1.8 (breathing room)                          │
│                                                                        │
│  SPACING                                                               │
│  ├── Container Max:  900px (reading comfort)                          │
│  ├── Section Padding: 80px vertical                                   │
│  ├── Card Padding:   24px                                             │
│  └── Gap:            16-24px                                          │
│                                                                        │
│  MOTION                                                                │
│  ├── Page Transition:  0.6s ease [0.25, 0.1, 0.25, 1]                 │
│  ├── Hover Transform:  translateY(-4px)                               │
│  ├── Card Shadow:      0 20px 40px rgba(0,0,0,0.06)                   │
│  └── Stagger Delay:    index * 0.05s                                  │
│                                                                        │
│  COMPONENTS                                                            │
│  ├── Border Radius:    14px (cards, buttons)                          │
│  ├── Border Radius SM: 8px (badges, chips)                            │
│  ├── Shadow Level 1:   Subtle elevation                               │
│  ├── Shadow Level 2:   Card hover                                     │
│  └── Shadow Level 3:   Modal                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
┌─────────────────────────────────────────────────────────────────────────┐
│  BREAKPOINT  │  WIDTH        │  LAYOUT CHANGES                        │
├─────────────────────────────────────────────────────────────────────────┤
│  Mobile      │  < 640px      │  Single column, stacked nav            │
│  Tablet      │  640-1024px   │  2-column grids, collapsible filters   │
│  Desktop     │  > 1024px     │  Full layout, side panels              │
│  Large       │  > 1280px     │  Max-width containers                  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🔐 STATE MANAGEMENT

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         ZUSTAND STORE (ai-store.ts)                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  STATE:                                                                │
│  ├── selectedFirmType: FirmType (Corporate/Boutique/Sustainable/...)  │
│  ├── selectedFirmId: string | null                                    │
│  ├── skillProfile: { drafting, layout, environment, ... } (1-5)       │
│  ├── chaptersVisited: number[] (last 50)                              │
│  ├── referencesViewed: string[] (last 100)                            │
│  ├── weakAreas: string[]                                              │
│  ├── strongAreas: string[]                                            │
│  ├── matchScore: number (0-100)                                       │
│  └── sessionId: string (unique)                                       │
│                                                                        │
│  ACTIONS:                                                              │
│  ├── setFirmType(type)                                                │
│  ├── setFirmId(id)                                                    │
│  ├── updateSkill(skill, value)                                        │
│  ├── addVisitedChapter(chapter)                                       │
│  ├── addViewedReference(refId)                                        │
│  ├── updateWeakAreas(areas)                                           │
│  ├── updateStrongAreas(areas)                                         │
│  ├── updateMatchScore(score)                                          │
│  └── reset()                                                          │
│                                                                        │
│  PERSISTENCE:                                                          │
│  └── localStorage (via zustand/middleware)                            │
└─────────────────────────────────────────────────────────────────────────┘
```

---

This flowchart provides a complete overview of the AI-Powered Architectural Internship Intelligence Platform structure, navigation flows, and component relationships.
