/* =====================================================
   EXPERIENCE PAGE — Experience.jsx
   Route: "/experience"

   SECTIONS ON THIS PAGE:
   1. Page header banner
   2. Work experience timeline
   3. Featured projects grid

   REACT CONCEPTS USED:
   - Static data arrays (EXPERIENCES, PROJECTS)
   - .map() to render lists
   - Conditional styles with ternary operator (? :)

   📝 REACT TASKS (implement these as you learn):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. Fetch experience from API:
      import { useState, useEffect } from 'react'
      const [experiences, setExperiences] = useState([])
      useEffect(() => {
        fetch('/api/experience')
          .then(res => res.json())
          .then(data => setExperiences(data))
      }, [])

   2. "Show More / Less" toggle for long descriptions:
      const [expanded, setExpanded] = useState(null)  ← stores ID of expanded card
      Then: onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
      Render full text if expanded === exp.id, else truncate

   3. Filter by type (Full-time / Intern / Freelance):
      const [filter, setFilter] = useState('All')
      const filtered = EXPERIENCES.filter(e => filter === 'All' || e.type === filter)
      Add filter buttons that call setFilter(type)

   📝 NODE.JS TASKS:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   - Create server/routes/experience.js
     → GET /api/experience → return JSON array of work experience
     → GET /api/projects   → return JSON array of projects
   ===================================================== */

import { Briefcase, Code2, Calendar, MapPin, Github, Globe } from "lucide-react";

/* -------------------------------------------------------
   EXPERIENCE DATA
   📝 TODO: Replace ALL placeholder data with your real experience
   ------------------------------------------------------- */
const EXPERIENCES = [
  {
    id: 1,
    role:        "Freelance Web Developer",
    company:     "Self-Employed",
    type:        "Freelancer",
    location:    "Remote",
    period:      "Jan 2026 – Present",
    description: "Learning Node.js and React.js From Scratch with Creating a Small Projects for Clients and Learning Purpose.",
    responsibilities: [
      "Clients projects — portfolio site",
      "Used HTML, CSS, Node.js and later React for development",
      "Deployed projects using Cursor and AntiGravity",
      "Learning Github Push-Pull-Commit Projects",
    ],
    tech: ["HTML5", "Tailwind CSS", "Node JS", "React.JS", "Cursor", "AntiGravity", "Github"],
  },
  {
    id: 2,
    role:        "Php Laravel Intern",
    company:     "B M Coder",     /* 📝 TODO: Replace */
    type:        "Internship",
    location:    "Remote",
    period:      "June 2025 – April 2025",
    description: "Worked on the Project of Ecommerse site named of `Goku's Store`. Its an Ecommerce site to customer/user can see Items and buy it using Affiliate Links! ",
    responsibilities: [
      "Built responsible website using Php Laravel from scratch.",
      "Login, Homepage, Contact, Profile and Products for buy items",
      "Learning about XAMPP & UWAMP database",
      "Affiliate links that clicking to direct official site & earn commision",
    ],
    tech: ["Prompt AI", "Php", "Laravel", "XAMPP", "UWAMP"],
  },
  {
    id: 3,
    role:        "ASP.NET Design & Database",
    company:     "MCA Sem-3 Project",
    type:        "Designer",
    location:    "Remote",
    period:      "2024 – Present",
    description: "Create Designing of The Name Of Project `Car Selling System` Using SqlServer Database!",
    responsibilities: [
      "Sliding Cars Logo To Choosing Car Page",
      "Sql Server Database Using CRUD Operation",
      "Participated Group of 3 Students",
    ],
    tech: ["HTML5-CSS", "Javascript", "ASP.NET", "SQL Server"],
  },
];

/* -------------------------------------------------------
   PROJECTS DATA
   📝 TODO: Replace with your real projects
   ------------------------------------------------------- */
const PROJECTS = [
  {
    id: 1,
    name:        "Portfolio Website",
    description: "This portfolio site — built with React.js, Tailwind CSS, and React Router. Designed as a learning project for React and later Node.js integration.",
    tech:        ["React.js-Vite", "Tailwind CSS", "Node.js", "Cursor"],
    github:      "#",
    live:        "#",
    status:      "In Progress",
  },
  {
    id: 2,
    name:        "Musical System",
    description: "Full-stack Music Listening app with React frontend, Node.js backend, and MongoDB database. Features: Songs Listing, Playlists, Whislists, and Admin Panel.",
    tech:        ["React.js-Vite", "Node.js", "MongoDB/Postgre SQL", "Tailwind CSS"],
    github:      "#",   /* 📝 TODO: Add your GitHub repo URL */
    live:        "#",   /* 📝 TODO: Add live demo URL */
    status:      "Pending",
  },
  
  {
    id: 3,
    name:        "Affiliate Site",
    description: "A Site to Buy Items. When user cliick buy button than the link is Affiliate to Open Official Site to by Item! & Earn Commision",
    tech:        ["Javascript", "CSS", "HTML5", "Php", "Laravel", "VS Code"],
    github:      "#",
    live:        "#",
    status:      "Completed",
  },
  {
    id: 4,
    name:        "Car Selling System",
    description: "ASP.NET Simple Application to Selling Car of Customer. Home, Cars, About, Contact Pages. Customer can buy car like Ecommerce Site",
    tech:        ["HTML5-CSS", "Prompt AI", "ASP.Net", "Microsoft Sql Server"],
    github:      "#",
    live:        "#",
    status:      "Completed",
  },
];

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const Experience = () => {
  return (
    <div className="page-enter">

      {/* ===================================================
          PAGE HEADER BANNER
          ================================================== */}
      <div
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "hsl(var(--surface))", borderBottom: "1px solid hsl(var(--border))" }}
      >
        <div className="glow-orb glow-orb-gold w-80 h-80 -top-20 left-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)" }}
          >
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Professional Journey</span>
          </div>
          <h1 className="section-heading text-gradient-gold">Experience</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Where I've worked, what I've built, and what I've learned along the way.
          </p>
        </div>
      </div>

      {/* ===================================================
          SECTION 1: WORK EXPERIENCE TIMELINE
          Same timeline pattern as Education page
          ================================================== */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-foreground mb-8">Work History</h2>

        {/* Timeline wrapper */}
        <div className="relative pl-8">
          <div className="timeline-line" />   {/* Vertical gold line (from index.css) */}

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex gap-6 page-enter"
                style={{ animationDelay: `${index * 0.15}s` }}  /* Stagger each card */
              >
                {/* Gold dot on the timeline line */}
                <div className="timeline-dot absolute -left-[5px]" style={{ top: "0.5rem" }} />

                {/* Experience card */}
                <div className="portfolio-card p-6 flex-1 ml-4">

                  {/* Header: role + date range */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {/* Company name in gold */}
                        <span className="text-primary font-semibold text-sm">{exp.company}</span>
                        {/* Type badge (Internship / Freelance / Volunteer) */}
                        <span className="gold-tag">{exp.type}</span>
                      </div>
                    </div>
                    {/* Date range pill */}
                    <div
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-primary flex-shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Location */}
                  <p className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin size={13} className="text-primary" />
                    {exp.location}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-1 mb-4">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        {/* Gold arrow bullet */}
                        <span className="text-primary mt-1 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="gold-tag">{t}</span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 2: PROJECTS GRID
          ================================================== */}
      <section
        className="py-16"
        style={{ background: "hsl(var(--surface))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="section-container py-0">
          <div className="flex items-center gap-3 mb-2">
            <Code2 size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
          </div>
          <div className="section-underline" />

          {/* 2-column grid on medium+ screens */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card p-6 page-enter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project header: name + status badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg">{project.name}</h3>

                  {/* Status badge — gold for Completed, blue for In Progress */}
                  <span
                    className="text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2"
                    style={{
                      /* Ternary operator: condition ? valueIfTrue : valueIfFalse */
                      background: project.status === "Completed"
                        ? "hsl(var(--primary) / 0.15)"     /* Gold background */
                        : "hsl(220 80% 60% / 0.15)",        /* Blue background */
                      color: project.status === "Completed"
                        ? "hsl(var(--primary))"             /* Gold text */
                        : "hsl(220 80% 70%)",               /* Blue text */
                      border: `1px solid ${project.status === "Completed"
                        ? "hsl(var(--primary) / 0.3)"
                        : "hsl(220 80% 60% / 0.3)"}`
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="gold-tag">{t}</span>
                  ))}
                </div>

                {/* GitHub + Live Demo links */}
                {/*<div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe size={15} /> Live Demo
                  </a>
                </div>*/}

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Experience;
