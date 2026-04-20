


import heroBg      from "@/Assets/hero-bg.jpg";        
import profileAvatar from "@/Assets/profile-avatar3.jpg"; 


import { Github, Linkedin, Twitter, Mail, ArrowRight, MapPin, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";


const SKILLS = [
  { name: "HTML5",   level: 80 }, 
  { name: "CSS & Tailwind  CSS",   level: 50 }, 
  { name: "JavaScript & Node.js",   level: 80 },
  { name: "React.js Continue....",     level: 40 },
  { name: "Git & GitHub", level: 70 },
];


const STATS = [
  { label: "Projects Done",  value: "3+" },
  { label: "Technologies",   value: "8+"  },
  { label: "Certifications", value: "2+"  },
  { label: "GitHub Repos",   value: "11+" },
];


const SOCIAL_LINKS = [
  { icon: Github,   href: "https://github.com/GohilRavirajsinh", label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ravirajsinh-gohil-90b29b336", label: "LinkedIn" },
  { icon: Instagram,  href: "https://www.instagram.com/ravirajsinhgohil._", label: "Twitter"  },
  { icon: Mail,     href: "mailto:ravi.empowergrowth@gmail.com", label: "Email"    },
];


const Index = () => {
  

  return (
    
    <div className="page-enter">

      {}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, hsl(222 47% 6% / 0.95) 40%, hsl(222 47% 6% / 0.7) 100%)",
          }}
        />

        {}
        <div className="glow-orb glow-orb-gold w-96 h-96 -top-20 -right-20" />
        <div className="glow-orb glow-orb-blue w-80 h-80 bottom-10 left-10" />

        {}
        <div className="relative z-10 section-container w-full">
          {}
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {}
            <div className="flex-1 text-center lg:text-left">

              {}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)" }}
              >
                {}
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-primary font-medium">Available for hire</span>
              </div>

              {}
              <h1 className="text-5xl md:text-display font-bold text-foreground mb-4 leading-tight">
                Hi, I'm{" "}
                {/* 📝 TODO: Replace "Your Name" with your actual name */}
                <span className="text-gradient-gold">Ravirajsinh Gohil</span>
              </h1>

              {/* Subtitle / role */}
              {/* 📝 REACT TODO: Wrap this text in a typing animation component */}
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
                Web Developer &amp;{" "}
                <span className="text-primary">Quick Lerner</span>
              </h2>

              {/* Location + Phone info row */}
              <div className="flex flex-wrap items-center gap-4 mb-6 justify-center lg:justify-start text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-primary" />
                  {/* 📝 TODO: Replace with your city */}
                  Anand, Gujarat, India
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} className="text-primary" />
                  {/* 📝 TODO: Replace with your phone number */}
                  +91 70969 33693
                </span>
              </div>

              {/* Bio paragraph */}
              {/* 📝 TODO (Node.js + React): Replace this with data from GET /api/profile */}
              <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
                Passionate developer building modern web experiences. I love turning ideas
                into reality with clean code and thoughtful design. Currently learning
                React.js and Node.js through Video Tutorials & AI.
              </p>

              {/* CTA (Call To Action) BUTTONS */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* Primary button — links to contact page */}
                <Link to="/contact" className="btn-primary">
                  Hire Me <ArrowRight size={16} />
                </Link>
                {/* Outline button */}
                <a href="https://github.com/GohilRavirajsinh?tab=repositories" className="btn-outline">
                  View Projects
                </a>
              </div>

              {/* SOCIAL LINKS ROW */}
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  /* -------------------------------------------------------
                     Key prop is required by React when rendering lists
                     It helps React track which items changed
                     ------------------------------------------------------- */
                  <a
                    key={label}
                    href={href}
                    aria-label={label} /* Accessibility — screen readers read this */
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    style={{ background: "hsl(var(--surface))", border: "1px solid hsl(var(--border))" }}
                  >
                    {/* Icon rendered as a React component with size prop */}
                    <Icon size={18} />
                  </a>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Profile photo */}
            <div className="relative flex-shrink-0">

              {/* Avatar ring — animated gold pulsing glow */}
              {/* animate-pulse-gold → custom animation from tailwind.config.js */}
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full p-1 animate-pulse-gold"
                style={{ background: "var(--gradient-gold)" }} /* Gold ring */
              >
                {/* Inner dark ring (padding layer) */}
                <div className="w-full h-full rounded-full p-2 bg-background">
                  {/* Actual profile image */}
                  <img
                    src={profileAvatar}
                    alt="Profile Photo"
                    className="w-full h-full rounded-full object-cover object-top"
                    /* 📝 TODO: Replace with your real photo
                       Option 1: Put your photo in src/assets/ and import it
                       Option 2: Use a URL: src="https://..." */
                  />
                </div>
              </div>

              {/* Floating badge — overlays bottom-right of photo */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                {/* 📝 TODO: Update "2+ Years" to reflect your actual experience */}
                1+ Year
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 2: QUICK STATS ROW
          Four cards showing key numbers about you
          ================================================== */}
      <section
        className="py-16"
        style={{ background: "hsl(var(--surface))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="section-container py-0">
          {/* grid-cols-2 on mobile, grid-cols-4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ label, value }) => (
              <div key={label} className="portfolio-card p-6 text-center">
                {/* Gold gradient number */}
                <div className="text-4xl font-bold text-gradient-gold mb-1">{value}</div>
                <div className="text-muted-foreground text-sm">{label}</div>
                {/* 📝 REACT TODO: Add count-up animation here
                    Use useEffect + setInterval to count from 0 to value */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 3: ABOUT ME
          Two columns: bio text (left) + skill bars (right)
          ================================================== */}
      <section className="section-container">
        <h2 className="section-heading text-gradient-gold">About Me</h2>
        <div className="section-underline" />  {/* Gold decorative underline */}

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Bio text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {/* 📝 TODO (Node.js + React): Replace hardcoded text with API data */}
            <p>
            I am Ravirajsinh Gohil, a tech enthusiast who transitioned from a BCom in Accounting to Learning an MCA in 2024. I started with ASP.NET in Sem-3(Designing and databases)! Than interned with PHP-Laravel in Ahmedabad, and now focus on learning Node.js and React.js to further grow my skills.
            
            </p>
            <p>
              When I'm not coding, , I am deeply committed to learning new skills across various fields. in-childhood time, i would like to Experiments in any field Like Technology or Real-life! 
            </p>
            <p>
              Currently looking for opportunities where I can contribute, grow, and continue
              building amazing things!
            </p>
          </div>

          {}
          <div className="space-y-5">
            {}
            {SKILLS.map(({ name, level }) => (
              <div key={name}>
                {}
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{name}</span>
                  <span className="text-sm text-primary font-semibold">{level}%</span>
                </div>
                {}
                <div className="skill-bar-track">
                  {}
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${level}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Index;
