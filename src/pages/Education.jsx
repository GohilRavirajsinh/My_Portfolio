


import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Trophy } from "lucide-react";


const EDUCATION = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "G H Patel Department Of Computer Science & technology",   
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
    institution: "G H Patel Department Of Computer Science & technology",      
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
    institution: "Anand Commerce Collage",       
    location: "Anand, Gujart, India",
    year: "2019 – 2022",
    grade: "CGPA: 6.6 / 10",
    description: "foundation in Accounting and mathematics! CCC Certification of Gov-SPUnivercity",
    highlights: ["Accounting", "Mathematics", "Computer Basics"],
    icon: "🎓",
  },
];


const CERTIFICATIONS = [
  {
    id: 1,
    name: "Internship Certificate",
    issuer: "B M Coder Ahmedabad",
    year: "2025",
    link: "src/Assets/certificates/Internship.png",
  },
  {
    id: 2,
    name: "BGMI Esports Tournament",
    issuer: "Sigma ESports",
    year: "2024",
    link: "src/Assets/certificates/Sigma-Esports-Certificate.jpg",  
  },
  {
    id: 3,
    name: "Ethical Hacking & Cyber Security(Workshop)",
    issuer: "Cyber Security India",
    year: "2023",
    link: "src/Assets/certificates/Ethical-Hacking-2023.jpg",
  },
  {
    id: 4,
    name: "Digital Marketing(Workshop)",
    issuer: "Cyber Security India",
    year: "2023",
    link: "src/Assets/certificates/Digital-Marketing-workshop-2023.jpg",
  },
  {
    id: 5,
    name: "Cyber Awareness(Workshop)",
    issuer: "Cyber Security India",
    year: "2022",
    link: "src/Assets/certificates/CyberAwareness.jpg",
  },
  {
    id: 6,
    name: "Cource on Computer Certificate",
    issuer: "S P University (Gov)",
    year: "2022",
    link: "src/Assets/certificates/ccc.jpg",
  },
];

const TrophyIcon = <Trophy size={24} className="text-primary" />


const Education = () => {
  return (
    
    <div className="page-enter">

      {}
      <div
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "hsl(var(--surface))", borderBottom: "1px solid hsl(var(--border))" }}
      >
        {}
        <div className="glow-orb glow-orb-gold w-80 h-80 -top-20 left-1/2 -translate-x-1/2" />

        {}
        <div className="relative z-10">
          {}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)" }}
          >
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Academic Journey</span>
          </div>
          {}
          <h1 className="section-heading text-gradient-gold">Education</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My academic background and the institutions that shaped my thinking.
          </p>
        </div>
      </div>

      {}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-foreground mb-8">Academic Qualifications</h2>

        {}
        <div className="relative pl-8">

          {}
          <div className="timeline-line" />

          {}
          <div className="space-y-10">
            {EDUCATION.map((edu, index) => (
              <div
                key={edu.id}
                className="relative flex gap-6 page-enter"
                
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {}
                <div
                  className="timeline-dot absolute -left-[5px]"
                  style={{ top: "0.5rem" }}
                />

                {}
                <div className="portfolio-card p-6 flex-1 ml-4">

                  {}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    {}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl">{edu.icon}</span>   {}
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      </div>
                      {}
                      <p className="text-primary font-semibold text-sm ml-9">{edu.institution}</p>
                    </div>

                    {}
                    <div
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-primary shrink-0"
                      style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
                    >
                      <Calendar size={12} />
                      {edu.year}
                    </div>
                  </div>

                  {}
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

                  {}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {}
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

      {}
      <section
        className="py-16"
        style={{ background: "hsl(var(--surface))", borderTop: "1px solid hsl(var(--border))" }}
      >
        <div className="section-container py-0">
          <h2 className="text-2xl font-bold text-foreground mb-2 inline-flex items-center gap-2">
            Certifications &amp; Archivements {TrophyIcon}
          </h2>

          <div className="section-underline" />   {}

          {}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="portfolio-card p-5 flex items-start gap-4">

                {}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                >
                  <Award size={20} className="text-primary" />
                </div>

                {}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>

                {}
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