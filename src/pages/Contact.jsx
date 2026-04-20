

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Globe, Instagram } from "lucide-react";


const CONTACT_INFO = [
  {
    icon:        Mail,
    label:       "Email",
    value:       "ravi.empowergrowth@gmail.com",        
    href:        "mailto:ravi.empowergrowth@email.com", 
    description: "Best way to reach me",
  },
  {
    icon:        Phone,
    label:       "Phone",
    value:       "+91 70969 336936",           
    href:        "tel:+917096933693",         
    description: "Mon–Fri, 10am–6pm IST",
  },
  {
    icon:        MapPin,
    label:       "Location",
    value:       "Vallabh Vidhyanagar, Gujarat, India", 
    href:        "#",
    description: "Available For Working",
  },
  {
    icon:        Globe,
    label:       "Portfolio",
    value:       "Ravirajsinh.dev",              
    href:        "#",
    description: "Live website",
  },
];


const SOCIAL_LINKS = [
  { icon: Github,   href: "https://github.com/GohilRavirajsinh", label: "GitHub",   color: "hsl(210 15% 70%)"  },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ravirajsinh-gohil-90b29b336", label: "LinkedIn",  color: "hsl(210 80% 60%)"  },
  { icon: Instagram,  href: "https://www.instagram.com/ravirajsinhgohil._", label: "Twitter",   color: "hsl(200 80% 55%)"  },
  { icon: Mail,     href: "mailto:ravi.empowergrowth@email.com", label: "Email",     color: "hsl(var(--primary))" },
];


const Contact = () => {
  

  return (
    <div className="page-enter">

      {}
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
            <Mail size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Let's Connect</span>
          </div>
          <h1 className="section-heading text-gradient-gold">Contact Me</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to hire me? I'd love to hear from you!
          </p>
        </div>
      </div>

      {}
      <section className="section-container">
        {}
        <div className="grid lg:grid-cols-2 gap-12">

          {}
          <div className="space-y-6">

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
              <div className="section-underline" />
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to freelance projects, internship opportunities, and
                full-time developer roles. Feel free to reach out through any channel below.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, description }) => (
                /* Each card is an <a> link — clickable */
                <a
                  key={label}
                  href={href}
                  className="portfolio-card p-4 flex items-center gap-4 block"
                  style={{ textDecoration: "none" }} /* Remove default link underline */
                >
                  {/* Gold icon circle */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--primary) / 0.15)" }}
                  >
                    <Icon size={20} className="text-primary" />
                  </div>
                  {/* Info text */}
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-semibold text-foreground text-sm">{value}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* "Currently Available" green badge */}
            <div
              className="p-4 rounded-xl flex items-center gap-3"
              style={{ background: "hsl(140 70% 45% / 0.1)", border: "1px solid hsl(140 70% 45% / 0.3)" }}
            >
              <Clock size={18} style={{ color: "hsl(140 70% 55%)" }} />
              <div>
                <p className="font-semibold text-sm" style={{ color: "hsl(140 70% 60%)" }}>
                  Currently Available
                </p>
                <p className="text-xs text-muted-foreground">Response time: within 24 hours</p>
              </div>
            </div>

            {/* Social links row */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                    style={{
                      background: "hsl(var(--surface))",
                      border: "1px solid hsl(var(--border))",
                      color,   /* Each icon has its own brand color */
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* -----------------------------------------------
              RIGHT COLUMN — CONTACT FORM
              
              📝 REACT TODO — Wire up this form:
              1. Add onSubmit={handleSubmit} to <form>
              2. Add value={formData.name} to each input
              3. Add onChange={handleChange} to each input
              4. Add disabled={isLoading} to the button
              5. Show success message if submitted === true
              6. Show error message if error !== ''
              
              📝 NODE.JS TODO:
              The form POSTs to: POST /api/contact
              Body format: { name, email, subject, message }
              ----------------------------------------------- */}
          <div className="portfolio-card p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>

            {/* CONTACT FORM — add onSubmit={handleSubmit} when ready */}
            <form className="space-y-5">

              {/* Name + Email — 2 columns on small+ screens */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  {/* portfolio-input = dark styled input (from index.css) */}
                  {/* 📝 TODO: Add value={formData.name} onChange={handleChange} */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="portfolio-input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  {/* 📝 TODO: Add value={formData.email} onChange={handleChange} */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="portfolio-input"
                    required
                  />
                </div>

              </div>

              {/* Subject field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                {/* 📝 TODO: Add value={formData.subject} onChange={handleChange} */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Job Opportunity / Collaboration"
                  className="portfolio-input"
                  required
                />
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                {/* 📝 TODO: Add value={formData.message} onChange={handleChange} */}
                {/* resize-none → disables manual resizing of the textarea */}
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="portfolio-input resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              {/* 📝 TODO: Add disabled={isLoading} when using state */}
              {/* 📝 TODO: Change button text to "Sending..." when isLoading is true */}
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} />
                Send Message
              </button>

              {/* Helper text */}
              <p className="text-xs text-muted-foreground text-center">
                * Required fields. I'll reply within 24 hours.
              </p>

              {}

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
