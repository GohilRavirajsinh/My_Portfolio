/* =====================================================
   CONTACT PAGE — Contact.jsx
   Route: "/contact"

   SECTIONS ON THIS PAGE:
   1. Page header banner
   2. Two-column layout:
      LEFT  → Contact info cards + social links
      RIGHT → Contact form

   REACT CONCEPTS USED:
   - Static data arrays (CONTACT_INFO, SOCIAL_LINKS)
   - Comment placeholders for future useState + form logic

   📝 REACT TASKS (implement these as you learn):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Step 1 — Add form state using useState:
     import { useState } from 'react'
     const [formData, setFormData] = useState({
       name: '', email: '', subject: '', message: ''
     })
     const [isLoading, setIsLoading] = useState(false)   ← true while sending
     const [submitted, setSubmitted] = useState(false)   ← true after success

   Step 2 — Handle input changes:
     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value })
       // [e.target.name] = computed property: "name", "email", etc.
       // ...formData = spread: copies all existing values first
     }

   Step 3 — Handle form submit:
     const handleSubmit = async (e) => {
       e.preventDefault()              ← stops page from reloading
       setIsLoading(true)
       const res = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       })
       const data = await res.json()
       setIsLoading(false)
       if (data.success) setSubmitted(true)
     }

   Step 4 — Add to JSX:
     <form onSubmit={handleSubmit}>
     <input value={formData.name} onChange={handleChange} />
     <button disabled={isLoading}>{isLoading ? 'Sending...' : 'Send'}</button>

   Step 5 — Validate before submit:
     if (!formData.name || !formData.email) { alert('Fill required fields') return }
     Check email format: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

   📝 NODE.JS TASKS:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   - Create server/routes/contact.js
     → POST /api/contact
       Body: { name, email, subject, message }
       1. Validate all fields are not empty
       2. Use nodemailer to send email to yourself
       3. Save to MongoDB (optional for record keeping)
       4. Return: res.json({ success: true, message: 'Email sent!' })
   - npm install nodemailer
   - Add to .env: EMAIL_USER=your@gmail.com, EMAIL_PASS=yourpassword
   - Create server/services/emailService.js with a sendEmail(to, subject, body) function
   ===================================================== */

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Globe, Instagram } from "lucide-react";

/* -------------------------------------------------------
   CONTACT INFO DATA
   📝 TODO: Replace ALL placeholder values with your real info
   ------------------------------------------------------- */
const CONTACT_INFO = [
  {
    icon:        Mail,
    label:       "Email",
    value:       "ravi.empowergrowth@gmail.com",        /* 📝 TODO: Replace with your email */
    href:        "mailto:ravi.empowergrowth@email.com", /* mailto: opens the user's email app */
    description: "Best way to reach me",
  },
  {
    icon:        Phone,
    label:       "Phone",
    value:       "+91 70969 336936",           /* 📝 TODO: Replace with your phone */
    href:        "tel:+917096933693",         /* tel: opens phone dialer on mobile */
    description: "Mon–Fri, 10am–6pm IST",
  },
  {
    icon:        MapPin,
    label:       "Location",
    value:       "Vallabh Vidhyanagar, Gujarat, India", /* 📝 TODO: Replace with your location */
    href:        "#",
    description: "Available For Working",
  },
  {
    icon:        Globe,
    label:       "Portfolio",
    value:       "Ravirajsinh.dev",              /* 📝 TODO: Replace with your domain */
    href:        "#",
    description: "Live website",
  },
];

/* -------------------------------------------------------
   SOCIAL LINKS
   📝 TODO: Replace "#" with your real profile URLs
   ------------------------------------------------------- */
const SOCIAL_LINKS = [
  { icon: Github,   href: "https://github.com/GohilRavirajsinh", label: "GitHub",   color: "hsl(210 15% 70%)"  },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ravirajsinh-gohil-90b29b336", label: "LinkedIn",  color: "hsl(210 80% 60%)"  },
  { icon: Instagram,  href: "https://www.instagram.com/ravirajsinhgohil._", label: "Twitter",   color: "hsl(200 80% 55%)"  },
  { icon: Mail,     href: "mailto:ravi.empowergrowth@email.com", label: "Email",     color: "hsl(var(--primary))" },
];

/* =====================================================
   MAIN COMPONENT
   ===================================================== */
const Contact = () => {
  /* -------------------------------------------------------
     📝 REACT TODO — Add these state variables here:
     
     import { useState } from 'react'
     
     const [formData, setFormData] = useState({
       name: '', email: '', subject: '', message: ''
     })
     const [isLoading, setIsLoading] = useState(false)
     const [submitted, setSubmitted] = useState(false)
     const [error, setError] = useState('')
     
     Then create:
     const handleChange = (e) => { ... }
     const handleSubmit = async (e) => { ... }
     ------------------------------------------------------- */

  return (
    <div className="page-enter">

      {/* ===================================================
          PAGE HEADER
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
            <Mail size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Let's Connect</span>
          </div>
          <h1 className="section-heading text-gradient-gold">Contact Me</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to hire me? I'd love to hear from you!
          </p>
        </div>
      </div>

      {/* ===================================================
          MAIN SECTION — Two Column Layout
          Left: info cards | Right: form
          ================================================== */}
      <section className="section-container">
        {/* lg:grid-cols-2 → two equal columns on large screens */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* -----------------------------------------------
              LEFT COLUMN — Contact Info + Social Links
              ----------------------------------------------- */}
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

              {/* -----------------------------------------------
                  📝 REACT TODO: Add success/error messages here:
                  
                  {submitted && (
                    <p className="text-green-400 text-center text-sm">
                      ✅ Message sent! I'll reply soon.
                    </p>
                  )}
                  {error && (
                    <p className="text-red-400 text-center text-sm">
                      ❌ {error}
                    </p>
                  )}
                  ----------------------------------------------- */}

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
