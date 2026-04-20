

import { Trophy, Star, Zap, Users, Award, Target,} from "lucide-react";


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
    highlight:   false,   
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


const IMPACT_STATS = [
  { icon: Trophy, label: "Awards Won",        value: "6+"   },
  { icon: Users,  label: "Students Mentored", value: "60+"  },
  { icon: Star,   label: "GitHub Stars",      value: "120+" },
  { icon: Zap,    label: "Hackathons",        value: "5+"   },
];


const getBadgeStyle = (badge) => {
  switch (badge) {
    case "Gold":
      return {
        background: "hsl(var(--primary) / 0.2)",        
        color:      "hsl(var(--primary))",               
        border:     "1px solid hsl(var(--primary) / 0.4)",
      };
    case "Silver":
      return {
        background: "hsl(210 15% 60% / 0.2)",
        color:      "hsl(210 15% 70%)",                  
        border:     "1px solid hsl(210 15% 60% / 0.4)",
      };
    default:
      
      return {
        background: "hsl(220 80% 60% / 0.2)",
        color:      "hsl(220 80% 70%)",                  
        border:     "1px solid hsl(220 80% 60% / 0.3)",
      };
  }
};


const Achievements = () => {
  return (
    <div className="page-enter">

      {}
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

      {}
      <section className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Award size={24} className="text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Awards &amp; Recognition</h2>
        </div>
        <div className="section-underline" />

        {}
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <div
              key={achievement.id}
              className="portfolio-card p-6 page-enter relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                
                borderLeft: achievement.highlight
                  ? "3px solid hsl(var(--primary))"    
                  : "1px solid hsl(var(--border))",     
              }}
            >
              {}
              {achievement.highlight && (
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                  style={{ background: "var(--gradient-gold)" }}
                />
              )}

              {}
              <div className="relative z-10">

                {}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{achievement.icon}</span>   {}
                    <div>
                      <h3 className="font-bold text-foreground leading-tight">{achievement.title}</h3>
                      <span className="text-xs text-primary">{achievement.category}</span>
                    </div>
                  </div>
                  {}
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium flex-shrink-0"
                    style={getBadgeStyle(achievement.badge)}
                  >
                    {achievement.badge}
                  </span>
                </div>

                {}
                <p className="text-xs text-muted-foreground mb-3">{achievement.date}</p>

                {}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {}
          {}
                {}
                {}
                {}
                {}
                {}
                {}
                {}
              {}
            {}
          {}
        {}
      {}

    </div>
  );
};

export default Achievements;
