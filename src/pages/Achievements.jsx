/* =====================================================
   ACHIEVEMENTS PAGE — Achievements.jsx
   Route: "/achievements"

   SECTIONS ON THIS PAGE:
   1. Page header banner
   2. Achievement cards grid (bento layout)
   3. Impact in Numbers stats row

   REACT CONCEPTS USED:
   - Static data arrays (ACHIEVEMENTS, IMPACT_STATS)
   - .map() to render cards
   - Helper function getBadgeStyle() for conditional styles

   📝 REACT TASKS (implement these as you learn):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. Fetch achievements from API:
      import { useState, useEffect } from 'react'
      const [achievements, setAchievements] = useState([])
      useEffect(() => {
        fetch('/api/achievements')
          .then(res => res.json())
          .then(data => setAchievements(data))
      }, [])

   2. Add category filter tabs:
      const [filter, setFilter] = useState('All')
      const categories = ['All', 'Hackathon', 'Academic', 'Community', 'Certification']
      const filtered = ACHIEVEMENTS.filter(a => filter === 'All' || a.category === filter)
      Render <button onClick={() => setFilter(cat)}> for each category

   3. Count-up animation for stats numbers:
      → Use useEffect + setInterval to increment numbers from 0
      → Stop when the target value is reached
      → clearInterval when done (cleanup)

   📝 NODE.JS TASKS:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   - Create server/routes/achievements.js
     → GET /api/achievements → return array of achievement objects
     → GET /api/stats        → return counts for stats bar
   ===================================================== */

import { Trophy, Star, Zap, Users, Award, Target,} from "lucide-react";

/* -------------------------------------------------------
   ACHIEVEMENTS DATA
   highlight: true → card gets gold left border + glow
   badge: "Gold" | "Silver" | other → different badge colors
   
   📝 TODO: Replace ALL placeholder data with your real achievements
   ------------------------------------------------------- */
const ACHIEVEMENTS = [
  {
    id: 1,
    title:       "BGMI ESports Tournament",
    category:    "Sigma Esports",
    date:        "November 2024",
    description: "Competed in data structures and algorithm challenges at the state level. Ranked in the top 10 out of 200+ participants.",
    icon:        "🏆",
    badge:       "Winner",
    highlight:   true,
  },
  {
    id: 2,
    title:       "Chess Participating ",
    category:    "Sports Compitition",
    date:        "Sep 2023",
    description: "Sardar Patel University 2023 Participating in a Sport Compitition in Chess",
    icon:        "♚",
    badge:       "3rd place",
    highlight:   false,   /* Featured card — gets gold border + background glow */
  },
  {
    id: 3,
    title:       "Wrokshops",
    category:    "Cyber Security India V V Nagar",
    date:        "2022-2023",
    description: "1.Cyber Awareness, 2.Digital Marketing, 3.Ethical Hacking & Cyber Security.",
    icon:        "👥",
    badge:       "Learning",
    highlight:   false,
  },
  {
    id: 3,
    title:       "Teaching & Guilding",
    category:    "Online Guilding",
    date:        "2024 to present",
    description: "Teaching using my knowledges & Experiences to helps who don't know about Technologies, Career-line,...",
    icon:        "🎖️",
    badge:       "Helping",
    highlight:   false,
  },
];

/* -------------------------------------------------------
   IMPACT STATS
   icon  → Lucide icon component (used as <Icon size={24} />)
   value → displayed as large number
   label → description below the number
   ------------------------------------------------------- */
const IMPACT_STATS = [
  { icon: Trophy, label: "Awards Won",        value: "6+"   },
  { icon: Users,  label: "Students Mentored", value: "60+"  },
  { icon: Star,   label: "GitHub Stars",      value: "120+" },
  { icon: Zap,    label: "Hackathons",        value: "5+"   },
];

/* -------------------------------------------------------
   HELPER FUNCTION: getBadgeStyle
   
   Takes a badge string and returns an inline style object.
   This is a PURE FUNCTION — same input always gives same output.
   
   HOW IT WORKS:
   switch (badge) checks the value:
   "Gold"   → gold styling
   "Silver" → grey styling
   default  → blue styling (for any other badge type)
   
   Usage: style={getBadgeStyle(achievement.badge)}
   ------------------------------------------------------- */
const getBadgeStyle = (badge) => {
  switch (badge) {
    case "Gold":
      return {
        background: "hsl(var(--primary) / 0.2)",        /* Transparent gold */
        color:      "hsl(var(--primary))",               /* Gold text */
        border:     "1px solid hsl(var(--primary) / 0.4)",
      };
    case "Silver":
      return {
        background: "hsl(210 15% 60% / 0.2)",
        color:      "hsl(210 15% 70%)",                  /* Grey text */
        border:     "1px solid hsl(210 15% 60% / 0.4)",
      };
    default:
      /* Any badge that isn't Gold or Silver gets blue styling */
      return {
        background: "hsl(220 80% 60% / 0.2)",
        color:      "hsl(220 80% 70%)",                  /* Blue text */
        border:     "1px solid hsl(220 80% 60% / 0.3)",
      };
  }
};

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const Achievements = () => {
  return (
    <div className="page-enter">

      {/* ===================================================
          PAGE HEADER
          ================================================== */}
      <div
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "hsl(var(--surface))", borderBottom: "1px solid hsl(var(--border))" }}
      >
        <div className="glow-orb glow-orb-gold w-96 h-96 -top-24 left-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)" }}
          >
            <Trophy size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Milestones &amp; Wins</span>
          </div>
          <h1 className="section-heading text-gradient-gold">Achievements</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recognition, awards, and milestones from my developer journey.
          </p>
        </div>
      </div>

      {/* ===================================================
          SECTION 1: ACHIEVEMENT CARDS GRID
          2-column bento grid on desktop
          ================================================== */}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Award size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Awards &amp; Recognition</h2>
        </div>
        <div className="section-underline" />

        {/* Grid: 1 col on mobile, 2 cols on desktop */}
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={achievement.id}
              className="portfolio-card p-6 page-enter relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                /* Highlighted cards get a solid gold left border */
                borderLeft: achievement.highlight
                  ? "3px solid hsl(var(--primary))"    /* Gold border for featured */
                  : "1px solid hsl(var(--border))",     /* Normal border for others */
              }}
            >
              {/* Subtle gold background glow — only on highlight cards */}
              {achievement.highlight && (
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                  style={{ background: "var(--gradient-gold)" }}
                />
              )}

              {/* Card content — z-10 to sit above the background glow */}
              <div className="relative z-10">

                {/* Card header: icon + title + badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{achievement.icon}</span>   {/* Emoji */}
                    <div>
                      <h3 className="font-bold text-foreground leading-tight">{achievement.title}</h3>
                      <span className="text-xs text-primary">{achievement.category}</span>
                    </div>
                  </div>
                  {/* Badge pill — style comes from getBadgeStyle() helper above */}
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium flex-shrink-0"
                    style={getBadgeStyle(achievement.badge)}
                  >
                    {achievement.badge}
                  </span>
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground mb-3">{achievement.date}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================
          SECTION 2: IMPACT IN NUMBERS
          4 stats cards in a row
          ================================================== */}
      {/* <section
        className="py-16"
        style={{ background: "hsl(var(--surface))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="section-container py-0">
          <div className="flex items-center gap-3 mb-2">
            <Target size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Impact in Numbers</h2>
          </div>
          <div className="section-underline" />

          {/* Stats grid: 2 cols mobile, 4 cols desktop */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="portfolio-card p-6 text-center"> */}
                {/* Gold icon circle */}
                {/* <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                >
                  <Icon size={24} className="text-primary" />
                </div> */}
                {/* Large gold number */}
                {/* <div className="text-4xl font-bold text-gradient-gold mb-1">{value}</div> */}
                {/* Label below the number */}
                {/* <div className="text-muted-foreground text-sm">{label}</div> */}
                {/* 📝 REACT TODO: Add count-up animation to the {value} above
                    Use useState(0) + useEffect with setInterval to count up */}
              {/* </div> */}
            {/* ))} */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */} */}

    </div>
  );
};

export default Achievements;
