/* =====================================================
   EDUCATION PAGE — Education.jsx
   Route: "/education"

   SECTIONS ON THIS PAGE:
   1. Page header banner
   2. Education timeline (degree cards with vertical line)
   3. Certifications grid

   REACT CONCEPTS USED:
   - Static data arrays (EDUCATION, CERTIFICATIONS)
   - .map() to render list items
   - Conditional styling with ternary operators

   📝 REACT TASKS (implement these as you learn):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. Fetch education data from API:
      import { useState, useEffect } from 'react'
      const [education, setEducation] = useState([])
      useEffect(() => {
        fetch('/api/education')
          .then(res => res.json())
          .then(data => setEducation(data))
      }, [])

   2. Add filter tabs (All / Degree / Certification):
      const [filter, setFilter] = useState('All')
      Then filter the array before rendering:
      const filtered = EDUCATION.filter(e => filter === 'All' || e.type === filter)

   📝 NODE.JS TASKS:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   - Create server/routes/education.js
     → GET /api/education      → return array of education objects
     → GET /api/certifications → return array of cert objects
   ===================================================== */

/* -------------------------------------------------------
   ICON IMPORTS from lucide-react
   ------------------------------------------------------- */
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Trophy } from "lucide-react";

/* -------------------------------------------------------
   EDUCATION DATA ARRAY
   Each object represents one degree/school.
   
   📝 TODO: Replace ALL placeholder data with your real info
   Fields to update: degree, institution, location, year, grade, description, highlights[]
   ------------------------------------------------------- */
const EDUCATION = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "G H Patel Department Of Computer Science & technology",   /* 📝 TODO: Replace with your university */
    location: "Vallabh Vidhyanagar, Gujarat, India",
    year: "2023 – 2025",
    grade: "CGPA: 6.6 / 10",
    description: "Studied core CS subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Web Technologies. Final year project: Full-stack e-commerce platform.",
    highlights: ["Data Structures", "Web Development", "Database", "Linux/OS", "ASP.NET", "Android Studio", "JAVA"],
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Post Graduate Department of Computer Applications",
    institution: "G H Patel Department Of Computer Science & technology",      /* 📝 TODO: Replace */
    location: "Vallabh Vidhyanagar, Gujarat, India",
    year: "2022 – 2023",
    grade: "CGPA: 7 / 10",
    description: "Lerning about basic of Programing, How to create, behind logic of Websites & Applications etc.",
    highlights: ["Python", "ASP.NET", "HTML5-CSS-JS", "DBMS", "Computer Networks"],
    icon: "🎓",
  },
  {
    id: 3,
    degree: "Bachoral of Commerce (BCom)",
    institution: "Anand Commerce Collage",       /* 📝 TODO: Replace */
    location: "Anand, Gujart, India",
    year: "2019 – 2022",
    grade: "CGPA: 6.6 / 10",
    description: "foundation in Accounting and mathematics! CCC Certification of Gov-SPUnivercity",
    highlights: ["Accounting", "Mathematics", "Computer Basics"],
    icon: "🎓",
  },
];

/* -------------------------------------------------------
   CERTIFICATIONS DATA ARRAY
   📝 TODO: Replace with your real certifications + links
   ------------------------------------------------------- */
const CERTIFICATIONS = [
  {
    id: 1,
    name: "Internship Certificate",
    issuer: "B M Coder Ahmedabad",
    year: "2025",
    link: "#",  /* 📝 TODO: Add your actual certificate URL */
  },
  {
    id: 2,
    name: "BGMI Esports Tournament",
    issuer: "Sigma ESports",
    year: "2024",
    link: "#",  /* 📝 TODO: Add your actual certificate URL */
  },
  {
    id: 3,
    name: "Ethical Hacking & Cyber Security(Workshop)",
    issuer: "Cyber Security India",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    name: "Digital Marketing(Workshop)",
    issuer: "Cyber Security India",
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    name: "Cyber Awareness(Workshop)",
    issuer: "Cyber Security India",
    year: "2022",
    link: "#",
  },
  {
    id: 6,
    name: "Cource on Computer Certificate",
    issuer: "S P University (Gov)",
    year: "2022",
    link: "#",
  },
];

const TrophyIcon = <Trophy size={24} className="text-primary" />

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const Education = () => {
  return (
    /* page-enter → fade-in animation on page load (from index.css) */
    <div className="page-enter">

      {/* ===================================================
          PAGE HEADER BANNER
          Dark surface background with glow orb + text
          ================================================== */}
      <div
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "hsl(var(--surface))", borderBottom: "1px solid hsl(var(--border))" }}
      >
        {/* Decorative glow orb — purely visual, no functionality */}
        <div className="glow-orb glow-orb-gold w-80 h-80 -top-20 left-1/2 -translate-x-1/2" />

        {/* Content — z-10 so it sits above the glow orb */}
        <div className="relative z-10">
          {/* Small pill badge above the title */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)" }}
          >
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Academic Journey</span>
          </div>
          {/* Page title — gold gradient text */}
          <h1 className="section-heading text-gradient-gold">Education</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My academic background and the institutions that shaped my thinking.
          </p>
        </div>
      </div>

      {/* ===================================================
          SECTION 1: EDUCATION TIMELINE
          
          HOW THE TIMELINE WORKS:
          - Parent div: position: relative (for the absolute line)
          - .timeline-line: absolute line on the left (from index.css)
          - .timeline-dot: gold circle positioned on the line
          - Cards are offset with margin-left
          ================================================== */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-foreground mb-8">Academic Qualifications</h2>

        {/* Timeline wrapper — relative so the absolute line is positioned inside it */}
        <div className="relative pl-8">

          {/* The vertical gold line — defined in index.css as .timeline-line */}
          <div className="timeline-line" />

          {/* List of education cards */}
          <div className="space-y-10">
            {EDUCATION.map((edu, index) => (
              <div
                key={edu.id}
                className="relative flex gap-6 page-enter"
                /* animationDelay staggers each card's entrance:
                   1st card: 0s, 2nd card: 0.15s, 3rd card: 0.30s */
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* -------------------------------------------------------
                    TIMELINE DOT — gold circle on the vertical line
                    absolute → positioned relative to parent div
                    -left-[5px] → moves it to sit ON the line (line is 2px wide)
                    ------------------------------------------------------- */}
                <div
                  className="timeline-dot absolute -left-[5px]"
                  style={{ top: "0.5rem" }}
                />

                {/* -------------------------------------------------------
                    EDUCATION CARD
                    portfolio-card → dark glass card (from index.css)
                    flex-1 → takes up all remaining horizontal space
                    ml-4 → small gap between dot and card
                    ------------------------------------------------------- */}
                <div className="portfolio-card p-6 flex-1 ml-4">

                  {/* Card header — degree + year badge */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    {/* Left side: icon + degree name + institution */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl">{edu.icon}</span>   {/* Emoji icon */}
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      </div>
                      {/* Institution name in gold */}
                      <p className="text-primary font-semibold text-sm ml-9">{edu.institution}</p>
                    </div>

                    {/* Right side: Year range badge */}
                    <div
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-primary shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
                    >
                      <Calendar size={12} />
                      {edu.year}
                    </div>
                  </div>

                  {/* Location + Grade row */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-primary" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={13} className="text-primary" />
                      {edu.grade}
                    </span>
                  </div>

                  {/* Description paragraph */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Subject/topic tags — gold-tag class from index.css */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((tag) => (
                      <span key={tag} className="gold-tag">{tag}</span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================
          SECTION 2: CERTIFICATIONS GRID
          ================================================== */}
      <section
        className="py-16"
        style={{ background: "hsl(var(--surface))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="section-container py-0">
          <h2 className="text-2xl font-bold text-foreground mb-2 inline-flex items-center gap-2">
            Certifications &amp; Archivements {TrophyIcon}
          </h2>

          <div className="section-underline" />   {/* Gold decorative underline */}

          {/* Grid: 2 cols on small screens, 3 cols on large screens */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="portfolio-card p-5 flex items-start gap-4">

                {/* Gold icon box */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                >
                  <Award size={20} className="text-primary" />
                </div>

                {/* Certificate name + issuer */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>

                {/* External link icon — opens certificate in new tab */}
                <a
                  href={cert.link}
                  aria-label="View certificate"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <ExternalLink size={14} />
                </a>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Education;