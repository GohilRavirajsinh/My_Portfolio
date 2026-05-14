import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Instagram, Mail, Menu, X } from "lucide-react";
import profileImg from "../assets/profile-avatar.jpg";

// DO NOT CHANGE CONTENT
const MARQUEE_SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git & GitHub", "UI/UX Design", "REST APIs", "Figma"];

const SKILLS_DATA = [
  { cat: "Frontend", icon: "💻", color: "var(--accent)", tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"] },
  { cat: "Backend", icon: "⚙️", color: "var(--accent2)", tags: ["Node.js", "Express.js", "REST APIs", "PHP", "Python"] },
  { cat: "Database", icon: "🗄️", color: "var(--accent3)", tags: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"] },
  { cat: "Tools & Design", icon: "🛠️", color: "#fbbf24", tags: ["Git & GitHub", "VS Code", "Figma", "Canva", "Postman", "Linux"] }
];

const PROJECTS = [
  { title: "Studio PhotoGraphy", tech: "React • Node • Tailwind", icon: "📸", grad: "linear-gradient(135deg,#1e3a8a,#111827)", desc: "Designed a professional photography portfolio with immersive gallery and responsive layout.", live: "https://jd-photo-studio.vercel.app/", gh: "https://github.com/GohilRavirajsinh/jd-photo-studio" },
  { title: "Pauva House", tech: "React • Node • Tailwind", icon: "🍜", grad: "linear-gradient(135deg,#312e81,#111827)", desc: "Modern responsive business website for a local food brand with clean design.", live: "https://shivanand-pauva-house.vercel.app/", gh: "https://github.com/GohilRavirajsinh/Shivanand-pauva-house" },
  { title: "Portfolio Website", tech: "React • Router • Tailwind", icon: "💼", grad: "linear-gradient(135deg,#4c1d95,#111827)", desc: "Personal portfolio built with React.js and Tailwind CSS with smooth animations.", live: "https://gohilravirajsinh.github.io/My_Portfolio/", gh: "https://github.com/GohilRavirajsinh/My_Portfolio" },
  { title: "Musical System", tech: "Node • MongoDB • Socket.io", icon: "🎵", grad: "linear-gradient(135deg,#1e40af,#111827)", desc: "Full-stack music app with playlists, song listing, and admin panel.", live: "https://github.com/GohilRavirajsinh/Musical_System", gh: "https://github.com/GohilRavirajsinh/Musical_System" }
];

const TIMELINE = [
  { year: "2026 – Present", role: "Freelance Web Developer", company: "Self-Employed | Vallabh Vidhyanagar", desc: "Building modern web solutions using Node.js, React.js, and AI-driven design for clients." },
  { year: "Jan – Apr 2025", role: "Web Developer Intern", company: "B M Coder | Ahmedabad", desc: "Built 'Goku's Store' e-commerce site using PHP Laravel with affiliate link integration." },
  { year: "2023 – 2025", role: "MCA Graduate", company: "G H Patel Dept of CS & Tech | SP University", desc: "CGPA: 6.6/10. Focused on DS, Algorithms, DBMS, OS, and Web Technologies." },
  { year: "2022 – 2023", role: "PGDCA", company: "G H Patel Dept of CS & Tech", desc: "CGPA: 7.0/10. Foundations in programming and application logic." },
  { year: "2019 – 2022", role: "BCom (Accounting)", company: "Anand Commerce College | Anand", desc: "CGPA: 6.6/10. Foundation in accounting and mathematics. Includes CCC Certification." }
];

// Utility for SplitText equivalent
const splitText = (text) => {
  return text.split("").map((char, i) => (
    <span key={i} className="split-word" style={{ display: char === " " ? "inline" : "inline-block" }}>
      {char}
    </span>
  ));
};

const splitWords = (text) => {
  return text.split(" ").map((word, i) => (
    <span key={i} className="split-line">
      <span className="split-word">{word}</span>&nbsp;
    </span>
  ));
};

const Index = () => {
  const containerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsTransitioning(true);
    setIsMenuOpen(false);

    // Snappier transition timing
    setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    // 1. Lenis Smooth Scroll
    let lenis;
    if (window.Lenis) {
      lenis = new window.Lenis({
        duration: 1.2, // Slightly faster for responsiveness
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.0,
      });
      lenisRef.current = lenis;
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Wait for GSAP & Three to be available
    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const THREE = window.THREE;
      if (!gsap || !ScrollTrigger || !THREE) return;
      gsap.registerPlugin(ScrollTrigger);

      // --- Custom Cursor ---
      const dot = document.querySelector(".cursor-dot");
      const ring = document.querySelector(".cursor-ring");
      // --- Optimized Ultra-Smooth Cursor (144 FPS Feel) ---
      let targetX = 0, targetY = 0;
      let dotX = 0, dotY = 0;
      let ringX = 0, ringY = 0;

      window.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
      });

      const updateCursor = () => {
        // Linear Interpolation (Lerp) for ultra-smooth movement
        // Dot follows faster (0.3), Ring follows with delay (0.15)
        dotX += (targetX - dotX) * 0.35;
        dotY += (targetY - dotY) * 0.35;
        ringX += (targetX - ringX) * 0.15;
        ringY += (targetY - ringY) * 0.15;

        gsap.set(dot, { x: dotX, y: dotY, xPercent: -50, yPercent: -50 });
        gsap.set(ring, { x: ringX, y: ringY, xPercent: -50, yPercent: -50 });

        requestAnimationFrame(updateCursor);
      };
      requestAnimationFrame(updateCursor);

      const cursorText = document.querySelector(".cursor-text");
      const hackerMessages = ["> EXECUTING...", "> ACCESS_GRANTED", "> COMPILED", "> BYPASSING...", "> ENCRYPTING...", "> OK"];

      window.addEventListener("mousedown", () => {
        gsap.to(dot, { scale: 0.5, duration: 0.2 });
        gsap.to(ring, { scale: 1.5, duration: 0.2 });
        
        // Remove existing class to restart animation if needed
        document.body.classList.remove("cursor-clicking");
        void document.body.offsetWidth; // Trigger reflow
        document.body.classList.add("cursor-clicking");
        
        // Pick random message
        if (cursorText) {
          cursorText.innerText = hackerMessages[Math.floor(Math.random() * hackerMessages.length)];
        }

        // Auto-remove after animation duration
        setTimeout(() => {
          document.body.classList.remove("cursor-clicking");
        }, 1200);
      });

      window.addEventListener("mouseup", () => {
        gsap.to(dot, { scale: 1, duration: 0.6, ease: "power2.out", delay: 0.2 });
        gsap.to(ring, { scale: 1, duration: 0.6, ease: "power2.out", delay: 0.2 });
      });

      // Cursor hover states
      document.querySelectorAll("a, button, .magnetic-btn, .skill-orb").forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });

      // Magnetic Buttons
      document.querySelectorAll(".magnetic-btn").forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
        });
      });

      // Skills 3D Tilt on Hover
      document.querySelectorAll(".skill-orb").forEach(card => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -15;
          const rotateY = ((x - centerX) / centerX) * 15;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: "power1.out",
            duration: 0.3
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: "power3.out",
            duration: 0.8
          });
        });
      });


      // --- Three.js Hero Background ---
      const canvasContainer = document.getElementById('webgl-container');
      if (canvasContainer && canvasContainer.children.length === 0) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasContainer.appendChild(renderer.domElement);

        // High-Impact 3D Orbital System
        const orbitalGroup = new THREE.Group();
        scene.add(orbitalGroup);

        // Inner Shell
        const sphereGeom = new THREE.IcosahedronGeometry(5, 1);
        const sphereMat = new THREE.MeshBasicMaterial({
          color: 0x00f3ff,
          wireframe: true,
          transparent: true,
          opacity: 0.1
        });
        const sphereMesh = new THREE.Mesh(sphereGeom, sphereMat);
        orbitalGroup.add(sphereMesh);

        // Outer Shell (Rotating opposite)
        const outerSphereGeom = new THREE.IcosahedronGeometry(7, 1);
        const outerSphereMat = new THREE.MeshBasicMaterial({
          color: 0xbd00ff,
          wireframe: true,
          transparent: true,
          opacity: 0.05
        });
        const outerSphereMesh = new THREE.Mesh(outerSphereGeom, outerSphereMat);
        orbitalGroup.add(outerSphereMesh);

        // Pulsing Energy Core
        const coreGeom = new THREE.SphereGeometry(2, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({
          color: 0xbd00ff,
          wireframe: true,
          transparent: true,
          opacity: 0.4
        });
        const coreMesh = new THREE.Mesh(coreGeom, coreMat);
        orbitalGroup.add(coreMesh);

        // Double Celestial Rings
        const ring1Geom = new THREE.TorusGeometry(8, 0.02, 16, 100);
        const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.15 });
        const ring1Mesh = new THREE.Mesh(ring1Geom, ring1Mat);
        ring1Mesh.rotation.x = Math.PI / 2.5;
        orbitalGroup.add(ring1Mesh);

        const ring2Geom = new THREE.TorusGeometry(9, 0.015, 16, 100);
        const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xbd00ff, transparent: true, opacity: 0.1 });
        const ring2Mesh = new THREE.Mesh(ring2Geom, ring2Mat);
        ring2Mesh.rotation.x = -Math.PI / 3;
        ring2Mesh.rotation.y = Math.PI / 4;
        orbitalGroup.add(ring2Mesh);

        // Dense Particle Field
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 4000; /* Doubled density */
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 40;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.03,
          color: 0xffffff,
          transparent: true,
          opacity: 0.3
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 12;

        const animate3D = () => {
          requestAnimationFrame(animate3D);
          
          sphereMesh.rotation.y += 0.004;
          outerSphereMesh.rotation.y -= 0.002;
          outerSphereMesh.rotation.z += 0.001;
          
          coreMesh.rotation.y -= 0.01;
          coreMesh.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.2); /* More dramatic pulse */
          
          ring1Mesh.rotation.z += 0.005;
          ring2Mesh.rotation.z -= 0.003;
          
          particlesMesh.rotation.y += 0.0002;

          // High-Sensitivity Parallax using global targetX and targetY
          const parallaxX = (targetX / window.innerWidth - 0.5) * 8;
          const parallaxY = (targetY / window.innerHeight - 0.5) * 8;
          
          gsap.to(orbitalGroup.rotation, {
            y: parallaxX * 0.12,
            x: parallaxY * 0.12,
            duration: 2.5,
            ease: "power2.out"
          });

          renderer.render(scene, camera);
        };
        animate3D();

        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      }

      // Name Scroll Color Shift
      gsap.to(".hero-name", {
        "--name-hue": "280deg", /* Shift towards Purple */
        scrollTrigger: {
          trigger: ".hero-scene",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Hero Intro Scramble Reveal
      const heroTl = gsap.timeline();
      heroTl.to(".hero-name .split-word", {
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        delay: 0.5
      })
        .fromTo(".hero-role", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .fromTo(".nav", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8");

      // Section Titles Reveal
      document.querySelectorAll(".scene-title").forEach(title => {
        gsap.to(title.querySelectorAll(".split-word"), {
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
          }
        });
      });

      // About Split Layout
      gsap.fromTo(".about-text p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, scrollTrigger: { trigger: ".about-split", start: "top 70%" } }
      );

      // Stats Counter Animation
      document.querySelectorAll(".stat-num[data-target]").forEach(stat => {
        const target = parseFloat(stat.getAttribute("data-target"));
        gsap.to(stat, {
          innerHTML: target,
          duration: 2.5,
          snap: { innerHTML: 1 },
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%"
          }
        });
      });

      // Skills 3D Orbs
      gsap.fromTo(".skill-orb",
        { opacity: 0, scale: 0, rotationY: 90 },
        { opacity: 1, scale: 1, rotationY: 0, stagger: 0.1, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: ".skills-cluster", start: "top 75%" } }
      );

      // Projects Parallax Stack & 3D Glassmorphism
      document.querySelectorAll(".layer-card-container").forEach((cardContainer) => {
        gsap.fromTo(cardContainer,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: cardContainer, start: "top 85%" } }
        );

        const card = cardContainer.querySelector('.layer-card');
        const bg = cardContainer.querySelector('.layer-bg');
        
        if (card && bg) {
          cardContainer.addEventListener('mousemove', (e) => {
            const rect = cardContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            
            // Calculate rotation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -12; // Max rotation 12deg
            const rotateY = ((x - centerX) / centerX) * 12;

            // Apply 3D tilt via GSAP
            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 2000,
              ease: "power2.out",
              duration: 0.4
            });

            // Update CSS variables for dynamic spotlight
            bg.style.setProperty('--mouse-x', `${x}px`);
            bg.style.setProperty('--mouse-y', `${y}px`);
          });

          cardContainer.addEventListener('mouseleave', () => {
            // Reset rotation
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              ease: "power3.out",
              duration: 0.8
            });
            // Fade out spotlight smoothly
            bg.style.setProperty('--mouse-x', `50%`);
            bg.style.setProperty('--mouse-y', `50%`);
          });
        }
      });

      // Global Normal Text Animation
      document.querySelectorAll("p:not(.project-desc):not(.about-text p), .exp-desc, .contact-info p, .contact-link, .footer span").forEach((textEl) => {
        gsap.fromTo(textEl,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: textEl, start: "top 95%" } }
        );
      });

      // Timeline Parallax
      gsap.to(".timeline-line-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });

      document.querySelectorAll(".exp-item").forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, x: -100, rotationY: -45, rotationX: 20 },
          { opacity: 1, x: 0, rotationY: 0, rotationX: 0, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%" } }
        );

        // 3D hover tilt for timeline items
        const box = item.querySelector(".exp-content-box");
        if (box) {
          item.addEventListener("mousemove", (e) => {
            const rect = item.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            gsap.to(box, {
              rotationX: ((y - centerY) / centerY) * -10,
              rotationY: ((x - centerX) / centerX) * 10,
              transformPerspective: 1000,
              ease: "power1.out",
              duration: 0.3
            });
          });
          item.addEventListener("mouseleave", () => {
            gsap.to(box, { rotationX: 0, rotationY: 0, ease: "power3.out", duration: 0.8 });
          });
        }
      });

      // Text Scramble Effect on Nav
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("mouseenter", (e) => {
          let iteration = 0;
          const original = e.target.dataset.value;
          clearInterval(link.scrambleInterval);
          link.scrambleInterval = setInterval(() => {
            e.target.innerText = original.split("").map((letter, index) => {
              if (index < iteration) return original[index];
              return letters[Math.floor(Math.random() * 42)];
            }).join("");
            if (iteration >= original.length) clearInterval(link.scrambleInterval);
            iteration += 1 / 3;
          }, 30);
        });
      });
    };

    setTimeout(initAnimations, 500);

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="app-container">
      {/* GLOBAL NOISE & CURSOR */}
      <div className="noise"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-ring">
        <div className="cursor-ripple"></div>
        <div className="cursor-text"></div>
      </div>

      {/* CINEMATIC PRELOADER */}
      <div className={`preloader ${!isLoading ? 'hidden' : ''}`}>
        <div className="preloader-content">
          <div className="preloader-logo">RG</div>
          <div className="preloader-bar">
            <div className="preloader-progress"></div>
          </div>
        </div>
      </div>

      <div className="scroll-progress"><div className="scroll-progress-fill"></div></div>

      {/* CINEMATIC TRANSITION OVERLAY */}
      <div className={`transition-overlay ${isTransitioning ? "active" : ""}`}>
        <div className="wipe-part part-1"></div>
        <div className="wipe-part part-2"></div>
        <div className="wipe-logo">RAVIRAJSINH</div>
      </div>

      {/* NAV */}
      {/* NAV */}
      <nav className="nav desktop-nav">
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, "#about")} data-value="ABOUT">ABOUT</a>
        <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, "#skills")} data-value="SKILLS">SKILLS</a>
        <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, "#projects")} data-value="WORK">WORK</a>
        <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, "#experience")} data-value="JOURNEY">JOURNEY</a>
        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, "#contact")} data-value="CONTACT">CONTACT</a>
      </nav>

      {/* MOBILE HAMBURGER BUTTON */}
      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={32} color="#00f3ff" /> : <Menu size={32} color="#00f3ff" />}
      </button>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
          <a href="#skills" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#skills")}>SKILLS</a>
          <a href="#projects" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#projects")}>WORK</a>
          <a href="#experience" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#experience")}>JOURNEY</a>
          <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#contact")}>CONTACT</a>
        </div>
      </div>

      {/* HERO SCENE */}
      <section className="hero-scene">
        <div id="webgl-container"></div>
        <div className="hero-content">
          <h1 className="hero-name heading-display">
            <span className="split-line">{splitText("RAVIRAJSINH")}</span>
            <br />
            <span className="split-line">{splitText("GOHIL")}</span>
          </h1>
          <h2 className="hero-role">Web Developer & AI Designer</h2>
        </div>
        <div className="hero-contact">
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span>Available to hire</span>
          </div>
          <div className="hero-contact-details">
            <span>Vallabh Vidhyanagar, Gujarat, India</span>
            <span className="separator">•</span>
            <span>+91 72840 88382</span>
          </div>
        </div>
      </section>

      {/* ABOUT SCENE */}
      <section id="about" className="scene-section about-scene">
        <div className="ghost-text">ABOUT</div>
        <div className="about-split">
          <div className="about-content">
            <h2 className="scene-title heading-display" style={{ marginBottom: "3rem" }}>
              <span className="split-line">{splitText("BEYOND THE CODE")}</span>
            </h2>
            <div className="about-text">
              <p>
                I am <strong>Ravirajsinh Gohil</strong>, a tech enthusiast who transitioned from BCom in Accounting to MCA in 2024. My coding journey started with ASP.NET, leading to internships in PHP-Laravel, and now a deep dive into the MERN stack.
              </p>
              <p>
                I believe in building digital products that aren't just functional, but also visually engaging. Beyond code, I'm a lifelong experimenter—always looking for new ways to blend technology with real-world impact.
              </p>
            </div>
            <div className="about-stats">
              {[{ n: 3, l: "Projects Built" }, { n: 8, l: "Technologies" }, { n: 2, l: "Certificates" }, { n: 11, l: "GitHub Repos" }].map(s => (
                <div key={s.l} className="stat-item">
                  <div>
                    <span className="stat-num" data-target={s.n}>0</span>
                    <span className="stat-num">+</span>
                  </div>
                  <span className="stat-label">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-3d">
            <div className="about-visual-container">
              <div className="profile-card-3d">
                <div className="profile-card-inner">
                  <div className="profile-card-front">
                    <img src={profileImg} alt="Ravirajsinh Gohil" className="profile-img-tag" />
                    <div className="profile-img-overlay"></div>
                  </div>
                  <div className="profile-card-back">
                    <img src={profileImg} alt="Ravirajsinh Gohil" className="profile-img-tag" />
                    <div className="profile-img-overlay back"></div>
                    <div className="profile-back-content">
                      <span className="profile-title">MCA 2024</span>
                    </div>
                  </div>
                </div>
                <div className="profile-card-glow"></div>
              </div>
              <div className="abstract-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SCENE */}
      <section id="skills" className="scene-section skills-scene">
        <div className="ghost-text" style={{ right: 0, left: "auto", transform: "translateY(-50%)" }}>SKILLS</div>
        <div className="skills-wrapper">
          <h2 className="scene-title heading-display text-center">
            <span className="split-line">{splitText("TECHNICAL ARSENAL")}</span>
          </h2>
          <div className="skills-cluster">
            {SKILLS_DATA.map(sk => (
              <div key={sk.cat} className="skill-orb">
                <div className="skill-icon">{sk.icon}</div>
                <div className="skill-cat">{sk.cat}</div>
                <div className="skill-tags">{sk.tags.join(" • ")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SCENE */}
      <section id="projects" className="scene-section projects-scene">
        <div className="ghost-text" style={{ top: "30%" }}>WORK</div>
        <div className="projects-wrapper" style={{ width: "100%", zIndex: 2 }}>
          <h2 className="scene-title heading-display text-center" style={{ margin: "0 auto" }}>
            <span className="split-line">{splitText("FEATURED PROJECTS")}</span>
          </h2>

          <div className="projects-stack">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className="layer-card-container">
                <div className="layer-card">
                  <div className="layer-bg"></div>
                  <div className="layer-content">
                    <span className="project-tech">{p.tech}</span>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-icon" style={{ fontSize: "5rem", margin: "1rem 0" }}>{p.icon}</div>
                  </div>
                  <div className="layer-actions">
                    <a href={p.live} target="_blank" rel="noreferrer" className="action-link">LIVE DEMO</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SCENE */}
      <section id="experience" className="scene-section exp-scene">
        <div className="ghost-text" style={{ left: "70%", fontSize: "20vw" }}>PATH</div>
        <h2 className="scene-title heading-display text-center" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span className="split-line">{splitText("EXPERIENCE & EDUCATION")}</span>
        </h2>

        <div className="timeline-wrapper">
          <div className="timeline-line"><div className="timeline-line-fill"></div></div>
          {TIMELINE.map((t, i) => (
            <div key={i} className="exp-item">
              <div className="exp-dot"></div>
              <div className="exp-content-box">
                <h3 className="exp-role">{t.role}</h3>
                <p className="exp-company">{t.company}</p>
                <p className="exp-desc">{t.desc}</p>
                <div className="exp-year">{t.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SCENE */}
      <section id="contact" className="scene-section contact-scene">
        <div className="ghost-text">CONNECT</div>
        <div style={{ width: "100%", zIndex: 2 }}>
          <h2 className="scene-title heading-display">
            <span className="split-line">{splitText("LET'S BUILD SOMETHING GREAT")}</span>
          </h2>

          <div className="contact-content">
            <div>
              <p className="contact-info">Available for freelance projects and full-time collaborations. Let's turn your vision into a digital masterpiece.</p>
              <div className="contact-links">
                <a href="mailto:freelancingservicebyravi@gmail.com" className="contact-link">Email ↗</a>
                <a href="https://github.com/GohilRavirajsinh" target="_blank" rel="noreferrer" className="contact-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/ravirajsinh-gohil-90b29b336" target="_blank" rel="noreferrer" className="contact-link">LinkedIn ↗</a>
                <a href="https://wa.me/917284088382" target="_blank" rel="noreferrer" className="contact-link">WhatsApp ↗</a>
                <a href="https://instagram.com/ravirajsinhgohil._" target="_blank" rel="noreferrer" className="contact-link">Instagram ↗</a>
              </div>
            </div>

            <div className="contact-card-wrapper">
              <div className="contact-card-3d">
                <img src="/card.png" alt="Business Card" className="contact-card-img" />
              </div>
            </div>
          </div>

          <footer className="footer">
            <span>© 2026 Ravirajsinh Gohil. All rights reserved.</span>
            <span>RG.</span>
          </footer>
        </div>
      </section>

    </div>
  );
};

export default Index;
