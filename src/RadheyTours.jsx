import { useState, useEffect, useRef } from "react";
import logoImg from '/public/logo.jpeg'
import erticaImg from '/public/ertica.jpeg'
import marutiImg from '/public/maruti.jpeg'
// ─── DATA ────────────────────────────────────────────────
const VEHICLES = [
  {
    id: 1,
    name: "Maruti Ertiga",
    seats: "6+1 Seater",
    type: "MPV",
    image: erticaImg,
    erticaImg: erticaImg,
    features: ["AC", "Music System", "GPS", "Spacious Boot"],
    desc: "Perfect for families & groups. Spacious, comfortable and fuel-efficient.",
    ideal: "Family / Group Travel",
    color: "#e67e22",
  },
  {
    id: 2,
    name: "Swift Dzire",
    seats: "4+1 Seater",
    type: "Sedan",
    image: marutiImg,
    erticaImg: marutiImg,
    features: ["AC", "Music System", "GPS", "Comfortable Seats"],
    desc: "Compact and elegant sedan for solo travellers and small families.",
    ideal: "Solo / Couple Travel",
    color: "#2980b9",
  },
  {
    id: 3,
    name: "Hyundai Aura",
    seats: "4+1 Seater",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    erticaImg: "https://imgd.aeplcdn.com/664x374/n/cw/ec/108545/aura-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    features: ["AC", "Music System", "GPS", "Premium Interior"],
    desc: "Feature-rich premium sedan offering luxury at an affordable price.",
    ideal: "Business / Airport Trips",
    color: "#8e44ad",
  },
];

const ROUTES = [
  { from: "Aurangabad", to: "Pune", dist: "235 km", time: "4.5 hrs", price: "₹2,800", shared: "₹700/seat", icon: "🏙️" },
  { from: "Aurangabad", to: "Mumbai", dist: "335 km", time: "6 hrs", price: "₹3,800", shared: "₹950/seat", icon: "🌆" },
  { from: "Aurangabad", to: "Nashik", dist: "190 km", time: "3.5 hrs", price: "₹2,200", shared: "₹550/seat", icon: "🌄" },
];

const TOURIST_PLACES = [
  { name: "Ajanta Caves", icon: "🏛️", type: "UNESCO Heritage" },
  { name: "Ellora Caves", icon: "⛩️", type: "UNESCO Heritage" },
  { name: "Bibi Ka Maqbara", icon: "🕌", type: "Historical" },
  { name: "Grishneshwar Temple", icon: "🙏", type: "Jyotirlinga" },
  { name: "Daulatabad Fort", icon: "🏰", type: "Historical" },
  { name: "Shirdi", icon: "✨", type: "Pilgrimage" },
  { name: "Shani Shingnapur", icon: "🛕", type: "Pilgrimage" },
  { name: "Mhaismal Hill Station", icon: "⛰️", type: "Nature" },
  { name: "Panchakki", icon: "💧", type: "Historical" },
  { name: "Aurangabad Caves", icon: "🗿", type: "Historical" },
];

const SERVICES = [
  { icon: "🚗", title: "Daily Cab Service", desc: "Daily rides from Aurangabad to Pune, Mumbai & Nashik with return facility." },
  { icon: "🤝", title: "Seat Sharing", desc: "Budget-friendly shared rides with fellow travellers on fixed daily routes." },
  { icon: "🚘", title: "Full Car Booking", desc: "Private vehicle booking for personal, family and corporate travel." },
  { icon: "✈️", title: "Airport Transfer", desc: "Reliable pick-up & drop to all major airports with flight tracking." },
  { icon: "🏛️", title: "Tourist Sightseeing", desc: "Full-day & half-day tour packages to all major tourist spots." },
  { icon: "🏢", title: "Corporate Service", desc: "Professional corporate pickup & drop facility with invoicing." },
];

const WHY_US = [
  { icon: "📍", label: "On-Time Service" },
  { icon: "💰", label: "Transparent Pricing" },
  { icon: "🛡️", label: "Safe Vehicles" },
  { icon: "👨‍✈️", label: "Pro Drivers" },
  { icon: "🏠", label: "Home Pickup" },
  { icon: "📞", label: "24/7 Support" },
  { icon: "✅", label: "Clean Cabs" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Friendly" },
];

const CONTACTS = [
  { name: "Yash Dinesh Basaiye", phone: "9762018264", initials: "YB", color: "#e67e22" },
  { name: "Palash Anil Mittal", phone: "7249076375", initials: "PM", color: "#2980b9" },
];

// ─── MAIN COMPONENT ──────────────────────────────────────
export default function RadheyTours() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [bookingType, setBookingType] = useState("full");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", from: "", to: "", date: "", passengers: 1, notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = { home: homeRef, about: aboutRef, services: servicesRef, contact: contactRef };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["home", "about", "services", "contact"];
      for (const s of sections) {
        const el = sectionRefs[s].current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
    setMobileMenu(false);
  };

  const openWhatsApp = (phone, msg = "") => {
    const text = encodeURIComponent(msg || "Hello! I would like to book a cab with Radhey Tours and Travels.");
    window.open(`https://wa.me/91${phone}?text=${text}`, "_blank");
  };

  const openCall = (phone) => { window.open(`tel:+91${phone}`); };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    const msg = `Hello! I want to book a cab.\nName: ${formData.name}\nPhone: ${formData.phone}\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\nType: ${bookingType === "full" ? "Full Car Booking" : "Seat Sharing"}\nNotes: ${formData.notes}`;
    openWhatsApp("9762018264", msg);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Cab Services" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", background: "#f8f9fa", color: "#1a1a2e", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --orange: #e67e22;
          --orange-dark: #ca6f1e;
          --orange-light: #fef0e6;
          --navy: #1a1a2e;
          --blue: #16213e;
          --white: #ffffff;
          --gray: #6c757d;
          --light: #f8f9fa;
          --border: #dee2e6;
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 3px; }
        .nav-link {
          background: none; border: none; font-size: 14px; font-weight: 500;
          cursor: pointer; padding: 8px 4px; transition: color 0.2s;
          color: #444; letter-spacing: 0.3px; text-decoration: none;
        }
        .nav-link:hover, .nav-link.active { color: var(--orange); }
        .nav-link.active { border-bottom: 2px solid var(--orange); }
        .btn-orange {
          background: var(--orange); color: #fff; border: none;
          padding: 13px 28px; border-radius: 8px; font-size: 14px;
          font-weight: 600; cursor: pointer; transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .btn-orange:hover { background: var(--orange-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(230,126,34,0.35); }
        .btn-outline-orange {
          background: transparent; color: var(--orange);
          border: 2px solid var(--orange); padding: 11px 24px;
          border-radius: 8px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-outline-orange:hover { background: var(--orange-light); transform: translateY(-1px); }
        .btn-green {
          background: #25D366; color: #fff; border: none;
          padding: 13px 24px; border-radius: 8px; font-size: 14px;
          font-weight: 600; cursor: pointer; transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-green:hover { background: #128C7E; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,211,102,0.35); }
        .card { background: #fff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; overflow: hidden; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.14); }
        .section-tag { font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--orange); }
        .section-title { font-size: clamp(26px, 4vw, 40px); font-weight: 700; color: var(--navy); line-height: 1.2; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; }
        input, select, textarea {
          width: 100%; padding: 12px 16px; border: 2px solid var(--border);
          border-radius: 8px; font-size: 14px; color: var(--navy);
          outline: none; transition: border 0.2s; font-family: inherit;
          background: #fff;
        }
        input:focus, select:focus, textarea:focus { border-color: var(--orange); }
        label { font-size: 13px; font-weight: 600; color: #555; display: block; margin-bottom: 6px; }
        .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease both; }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .pulse-badge { animation: pulse 2s infinite; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-text { order: 1; }
          .hero-car { order: 0; display: none !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .route-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        .mobile-nav-menu {
          position: fixed; top: 68px; left: 0; right: 0; background: #fff;
          z-index: 200; padding: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          display: flex; flex-direction: column; gap: 4px; border-top: 3px solid var(--orange);
        }
        .mobile-nav-link {
          padding: 14px 16px; border-radius: 8px; font-size: 15px;
          font-weight: 600; cursor: pointer; color: var(--navy);
          background: none; border: none; text-align: left;
          transition: background 0.2s;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active { background: var(--orange-light); color: var(--orange); }
        .vehicle-tab { padding: 10px 20px; border-radius: 8px; border: 2px solid var(--border); background: #fff; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s; color: #666; }
        .vehicle-tab.active { border-color: var(--orange); background: var(--orange); color: #fff; }
        .floating-wa {
          position: fixed; bottom: 24px; right: 24px; z-index: 500;
          width: 58px; height: 58px; border-radius: 50%;
          background: #25D366; display: flex; align-items: center;
          justify-content: center; font-size: 28px; box-shadow: 0 4px 20px rgba(37,211,102,0.5);
          cursor: pointer; transition: transform 0.2s; border: none; text-decoration: none;
          animation: pulse 2.5s infinite;
        }
        .floating-wa:hover { transform: scale(1.1); }
        .star { color: #f39c12; }
        .divider { height: 3px; background: linear-gradient(90deg, var(--orange), #f39c12); border-radius: 3px; width: 60px; }
      `}</style>

      {/* ── FLOATING WHATSAPP ── */}
      <a href="https://wa.me/919762018264" target="_blank" rel="noreferrer" className="floating-wa" title="Chat on WhatsApp">💬</a>

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "#fff" : "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "0 1px 0 rgba(0,0,0,0.06)", transition: "all 0.3s", height: 68, display: "flex", alignItems: "center", padding: "0 5%" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <img src={logoImg} alt="Radhey Tours" style={{ height: 56, width: "auto", objectFit: "contain" }} />

        </div>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {nav.map((n) => (
            <button key={n.id} className={`nav-link${activeSection === n.id ? " active" : ""}`} onClick={() => scrollTo(n.id)}>{n.label}</button>
          ))}
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: 10, marginLeft: 32 }}>
          <button className="btn-green" style={{ padding: "9px 18px", fontSize: 13 }} onClick={() => openWhatsApp("9762018264")}>💬 WhatsApp</button>
          <button className="btn-orange" style={{ padding: "9px 18px", fontSize: 13 }} onClick={() => scrollTo("contact")}>Book Now</button>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)} style={{ background: "none", border: "none", fontSize: 26, cursor: "pointer", color: "#e67e22", display: "none" }}>
          {mobileMenu ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile nav menu */}
      {mobileMenu && (
        <div className="mobile-nav-menu">
          {nav.map((n) => (
            <button key={n.id} className={`mobile-nav-link${activeSection === n.id ? " active" : ""}`} onClick={() => scrollTo(n.id)}>{n.label}</button>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button className="btn-green" style={{ flex: 1, justifyContent: "center" }} onClick={() => openWhatsApp("9762018264")}>💬 WhatsApp</button>
            <button className="btn-orange" style={{ flex: 1, justifyContent: "center" }} onClick={() => scrollTo("contact")}>Book Now</button>
          </div>
        </div>
      )}

      {/* ─────────────────── HOME ─────────────────── */}
      <section ref={homeRef} id="home" style={{ paddingTop: 68, minHeight: "100vh", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", position: "relative", overflow: "hidden" }}>
        {/* BG pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,126,34,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", padding: "60px 6% 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", minHeight: "calc(100vh - 68px)", maxWidth: 1200, margin: "0 auto" }} className="hero-grid">
          {/* LEFT */}
          <div className="hero-text fade-up">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,126,34,0.15)", border: "1px solid rgba(230,126,34,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 16 }}>🚕</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#f39c12", letterSpacing: 1.5, textTransform: "uppercase" }}>Aurangabad's Trusted Cab Service</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              Travel <span style={{ color: "#f39c12" }}>Safe</span>,<br />Travel <span style={{ color: "#e67e22" }}>Smart</span>!
            </h1>
            <p style={{ fontSize: 16, color: "#b0b8d0", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
              Daily cab services from <strong style={{ color: "#fff" }}>Aurangabad → Pune, Mumbai & Nashik</strong>. Seat-sharing or full car booking — your journey, our responsibility!
            </p>

            {/* Quick contact strip */}
            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "16px 20px", marginBottom: 32, backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 11, color: "#f39c12", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>📞 Quick Contact</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {CONTACTS.map((c) => (
                  <div key={c.phone} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: c.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>{c.initials}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>+91 {c.phone}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button onClick={() => openCall(c.phone)} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>📞 Call</button>
                      <button onClick={() => openWhatsApp(c.phone)} style={{ background: "#25D366", border: "none", color: "#fff", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>💬 WA</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-orange" onClick={() => scrollTo("contact")}>🚗 Book a Cab</button>
              <button className="btn-outline-orange" style={{ color: "#f39c12", borderColor: "#f39c12" }} onClick={() => scrollTo("services")}>View Services</button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
              {[["500+", "Happy Customers"], ["3", "Routes Daily"], ["5★", "Avg Rating"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#e67e22" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#7a8099", letterSpacing: 0.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Ertiga showcase */}
          <div className="hero-car" style={{ position: "relative" }}>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 24, padding: 28, border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", position: "relative" }}>
              <div className="pulse-badge" style={{ position: "absolute", top: -12, right: 20, background: "#e67e22", color: "#fff", borderRadius: 50, padding: "6px 16px", fontSize: 12, fontWeight: 700 }}>🌟 Most Popular</div>
              <div style={{ fontSize: 11, color: "#f39c12", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Featured Vehicle</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 4 }}>Maruti Ertiga</div>
              <div style={{ fontSize: 13, color: "#b0b8d0", marginBottom: 20 }}>6+1 Seater MPV • AC • GPS • Music</div>
              <div style={{ borderRadius: 16, overflow: "hidden", height: 200, background: "#0f3460" }}>
                <img src={marutiImg}
                  alt="Maruti Ertiga"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = marutiImg; }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
                {[["Pune", "₹2,800"], ["Mumbai", "₹3,800"]].map(([dest, price]) => (
                  <div key={dest} style={{ background: "rgba(230,126,34,0.12)", border: "1px solid rgba(230,126,34,0.2)", borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ fontSize: 11, color: "#aaa" }}>To {dest}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#f39c12" }}>{price}</div>
                    <div style={{ fontSize: 10, color: "#888" }}>Full Car</div>
                  </div>
                ))}
              </div>
              <button className="btn-orange" style={{ width: "100%", justifyContent: "center", marginTop: 16 }} onClick={() => scrollTo("contact")}>Book This Vehicle</button>
            </div>
          </div>
        </div>

        {/* Route pills */}
        <div style={{ background: "#fff", padding: "20px 6%", borderTop: "1px solid #eee" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#888" }}>Popular Routes:</span>
            {ROUTES.map((r) => (
              <button key={r.to} onClick={() => scrollTo("contact")} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", border: "1.5px solid #e67e22", color: "#e67e22", borderRadius: 50, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#e67e22"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#e67e22"; }}>
                {r.icon} {r.from} → {r.to} <span style={{ opacity: 0.7, fontSize: 11 }}>{r.shared}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── ABOUT ─────────────────── */}
      <section ref={aboutRef} id="about" style={{ padding: "90px 6%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Image collage */}
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ borderRadius: 16, overflow: "hidden", height: 220 }}>
                  <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/ertiga-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" alt="Ertiga" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.src = "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80"} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", height: 220, marginTop: 24 }}>
                  <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/swift-dzire-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80" alt="Dzire" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", height: 180 }}>
                  <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/108545/aura-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80" alt="Aura" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => e.target.src = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"} />
                </div>
                <div style={{ borderRadius: 16, overflow: "hidden", height: 180, marginTop: -24 }}>
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Travel" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              {/* badge */}
              <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", background: "#e67e22", color: "#fff", borderRadius: 12, padding: "12px 24px", textAlign: "center", boxShadow: "0 6px 20px rgba(230,126,34,0.5)", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: 22, fontWeight: 800 }}>Since 2020</div>
                <div style={{ fontSize: 11, opacity: 0.85 }}>Serving Aurangabad & Beyond</div>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="section-tag" style={{ marginBottom: 12 }}>About Us</p>
              <div className="divider" style={{ marginBottom: 20 }} />
              <h2 className="section-title" style={{ marginBottom: 20 }}>Welcome to<br /><span style={{ color: "#e67e22" }}>Radhey Tours & Travels</span></h2>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
                Your trusted partner for <strong>comfortable, safe, and reliable cab services</strong> in Aurangabad. We specialize in providing affordable and convenient travel solutions for local rides, outstation trips, airport transfers, family travel, and tourist sightseeing services.
              </p>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 24 }}>
                We proudly offer <strong>daily cab services from Chhatrapati Sambhaji Nagar (Aurangabad) to Pune, Mumbai, and Nashik</strong> with return travel facilities. Choose between <strong>seat-sharing rides</strong> for budget-friendly travel or <strong>Full Car Booking</strong> for private journeys.
              </p>
              {/* Why us grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                {WHY_US.map((w) => (
                  <div key={w.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "#fef9f5", borderRadius: 8, border: "1px solid #fde8d0" }}>
                    <span style={{ fontSize: 18 }}>{w.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{w.label}</span>
                  </div>
                ))}
              </div>
              <button className="btn-orange" onClick={() => scrollTo("contact")}>Get in Touch →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── VEHICLES ─────────────────── */}
      <section style={{ padding: "80px 6%", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p className="section-tag" style={{ marginBottom: 12 }}>Our Fleet</p>
            <div className="divider" style={{ margin: "0 auto 20px" }} />
            <h2 className="section-title">Exotic Vehicles for Every Trip</h2>
            <p style={{ fontSize: 15, color: "#777", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>All vehicles are regularly cleaned and maintained for maximum safety, hygiene, and comfort.</p>
          </div>

          {/* Vehicle tabs */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
            {VEHICLES.map((v, i) => (
              <button key={v.id} className={`vehicle-tab${selectedVehicle === i ? " active" : ""}`} onClick={() => setSelectedVehicle(i)}>{v.name}</button>
            ))}
          </div>

          {/* Vehicle showcase */}
          {(() => {
            const v = VEHICLES[selectedVehicle];
            return (
              <div style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", display: "grid", gridTemplateColumns: "1.2fr 1fr" }} className="hero-grid">
                <div style={{ position: "relative" }}>
                  <img src={v.erticaImg} alt={v.name} style={{ width: "100%", height: 340, objectFit: "cover" }} onError={e => e.target.src = v.image} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(255,255,255,0.8) 100%)" }} />
                  <div style={{ position: "absolute", top: 20, left: 20 }}>
                    <span className="badge" style={{ background: v.color, color: "#fff" }}>{v.type}</span>
                  </div>
                </div>
                <div style={{ padding: "36px 36px 36px 24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>{v.ideal}</div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>{v.name}</h3>
                  <div style={{ fontSize: 14, color: "#e67e22", fontWeight: 700, marginBottom: 16 }}>👥 {v.seats}</div>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>{v.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {v.features.map((f) => (
                      <span key={f} style={{ background: "#fef9f5", border: "1.5px solid #fde8d0", color: "#e67e22", borderRadius: 50, padding: "5px 14px", fontSize: 12, fontWeight: 600 }}>✓ {f}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button className="btn-orange" onClick={() => scrollTo("contact")}>Book {v.name}</button>
                    <button className="btn-green" onClick={() => openWhatsApp("9762018264", `Hi! I want to book a ${v.name}.`)}>💬 WhatsApp</button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─────────────────── SERVICES ─────────────────── */}
      <section ref={servicesRef} id="services" style={{ padding: "80px 6%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p className="section-tag" style={{ marginBottom: 12 }}>What We Offer</p>
            <div className="divider" style={{ margin: "0 auto 20px" }} />
            <h2 className="section-title">Our Cab Services</h2>
          </div>
          <div className="grid-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="card" style={{ padding: "28px 24px", borderTop: "4px solid #e67e22" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ROUTES */}
          <div style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 8, textAlign: "center" }}>Daily Route Pricing</h3>
            <p style={{ textAlign: "center", color: "#888", fontSize: 14, marginBottom: 36 }}>Transparent pricing — no hidden charges</p>
            <div className="route-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {ROUTES.map((r) => (
                <div key={r.to} style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: 20, padding: "28px 24px", color: "#fff", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, fontSize: 80, opacity: 0.06 }}>{r.icon}</div>
                  <div style={{ fontSize: 30, marginBottom: 12 }}>{r.icon}</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>AURANGABAD TO</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#f39c12", marginBottom: 12 }}>{r.to}</div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                    <div><div style={{ fontSize: 11, color: "#aaa" }}>Distance</div><div style={{ fontSize: 14, fontWeight: 600 }}>{r.dist}</div></div>
                    <div><div style={{ fontSize: 11, color: "#aaa" }}>Duration</div><div style={{ fontSize: 14, fontWeight: 600 }}>{r.time}</div></div>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ flex: 1, background: "rgba(230,126,34,0.15)", border: "1px solid rgba(230,126,34,0.3)", borderRadius: 10, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, color: "#aaa" }}>Full Car</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#e67e22" }}>{r.price}</div>
                    </div>
                    <div style={{ flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, color: "#aaa" }}>Per Seat</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#4ecdc4" }}>{r.shared}</div>
                    </div>
                  </div>
                  <button className="btn-orange" style={{ width: "100%", justifyContent: "center", marginTop: 14, fontSize: 13 }} onClick={() => scrollTo("contact")}>Book Now →</button>
                </div>
              ))}
            </div>
          </div>

          {/* TOURIST PLACES */}
          <div style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 8, textAlign: "center" }}>Local Sightseeing & Tourism</h3>
            <p style={{ textAlign: "center", color: "#888", fontSize: 14, marginBottom: 36 }}>Explore Aurangabad & nearby destinations with our experienced local drivers</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
              {TOURIST_PLACES.map((p) => (
                <div key={p.name} style={{ background: "#fff", border: "1.5px solid #f0f0f0", borderRadius: 14, padding: "18px 14px", textAlign: "center", transition: "all 0.2s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#e67e22"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(230,126,34,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{p.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e" }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#e67e22", fontWeight: 600, marginTop: 4 }}>{p.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTACT ─────────────────── */}
      <section ref={contactRef} id="contact" style={{ padding: "80px 6%", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p className="section-tag" style={{ marginBottom: 12 }}>Get In Touch</p>
            <div className="divider" style={{ margin: "0 auto 20px" }} />
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Book Your Ride Today</h2>
            <p style={{ fontSize: 15, color: "#b0b8d0" }}>Fill the form or reach us directly — we're available on call & WhatsApp!</p>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36 }}>
            {/* Contact info */}
            <div>
              {/* Contact persons */}
              {CONTACTS.map((c) => (
                <div key={c.phone} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "22px 22px", marginBottom: 16, backdropFilter: "blur(8px)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: c.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff" }}>{c.initials}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{c.name}</div>
                      <div style={{ fontSize: 13, color: "#aaa" }}>+91 {c.phone}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button className="btn-orange" style={{ flex: 1, justifyContent: "center", padding: "10px 12px", fontSize: 13 }} onClick={() => openCall(c.phone)}>📞 Call Now</button>
                    <button className="btn-green" style={{ flex: 1, justifyContent: "center", padding: "10px 12px", fontSize: 13 }} onClick={() => openWhatsApp(c.phone)}>💬 WhatsApp</button>
                  </div>
                </div>
              ))}

              {/* Email */}
              <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 22px", marginBottom: 16, backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: 11, color: "#f39c12", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>📧 Email Us</div>
                <a href="mailto:radheytoursandtravels26@gmail.com" style={{ fontSize: 14, color: "#fff", textDecoration: "none", wordBreak: "break-all" }}>radheytoursandtravels26@gmail.com</a>
              </div>

              {/* Address */}
              <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 22px", backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: 11, color: "#f39c12", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>📍 Base Location</div>
                <div style={{ fontSize: 14, color: "#d0d8e8", lineHeight: 1.7 }}>Chhatrapati Sambhaji Nagar<br />(Aurangabad), Maharashtra</div>
                <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["Pune", "Mumbai", "Nashik"].map((city) => (
                    <span key={city} style={{ background: "rgba(230,126,34,0.2)", border: "1px solid rgba(230,126,34,0.3)", color: "#f39c12", borderRadius: 50, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>→ {city}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking form */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>Quick Booking Form</h3>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>We'll confirm your booking via WhatsApp within minutes!</p>

              {/* Booking type */}
              <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                {[["full", "🚗 Full Car Booking"], ["shared", "🤝 Seat Sharing"]].map(([val, label]) => (
                  <button key={val} onClick={() => setBookingType(val)} style={{ flex: 1, padding: "10px", borderRadius: 8, border: `2px solid ${bookingType === val ? "#e67e22" : "#eee"}`, background: bookingType === val ? "#fef9f5" : "#fff", color: bookingType === val ? "#e67e22" : "#888", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}>{label}</button>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label>Your Name *</label>
                  <input placeholder="Full Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label>Phone Number *</label>
                  <input placeholder="+91 XXXXXXXXXX" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label>From</label>
                  <input placeholder="Pickup Location" value={formData.from} onChange={e => setFormData({ ...formData, from: e.target.value })} />
                </div>
                <div>
                  <label>To</label>
                  <select value={formData.to} onChange={e => setFormData({ ...formData, to: e.target.value })}>
                    <option value="">Select Destination</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Nashik</option>
                    <option>Local Sightseeing</option>
                    <option>Airport Transfer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label>Travel Date</label>
                  <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                </div>
                <div>
                  <label>Passengers</label>
                  <select value={formData.passengers} onChange={e => setFormData({ ...formData, passengers: e.target.value })}>
                    {[1, 2, 3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label>Additional Notes</label>
                <textarea placeholder="Any special requirements, pickup address, etc..." rows={3} value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} style={{ resize: "vertical" }} />
              </div>

              {submitted ? (
                <div style={{ background: "#eafaf1", border: "2px solid #27ae60", borderRadius: 10, padding: "14px 20px", textAlign: "center", color: "#27ae60", fontWeight: 700, fontSize: 15 }}>
                  ✅ Booking sent via WhatsApp! We'll confirm shortly.
                </div>
              ) : (
                <div style={{ display: "flex", gap: 12 }}>
                  <button className="btn-green" style={{ flex: 1, justifyContent: "center", padding: "14px" }} onClick={handleSubmit}>💬 Send via WhatsApp</button>
                  <button className="btn-orange" style={{ flex: 1, justifyContent: "center", padding: "14px" }} onClick={() => openCall("9762018264")}>📞 Call to Book</button>
                </div>
              )}

              <p style={{ textAlign: "center", fontSize: 12, color: "#aaa", marginTop: 14 }}>
                📧 <a href="mailto:radheytoursandtravels26@gmail.com" style={{ color: "#e67e22", textDecoration: "none" }}>radheytoursandtravels26@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── FOOTER ─────────────────── */}
      <footer style={{ background: "#111", padding: "48px 6% 24px", borderTop: "3px solid #e67e22" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <img src={logoImg} alt="Radhey Tours" style={{ height: 56, width: "auto", objectFit: "contain" }} />
              </div>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8, maxWidth: 260 }}>Trusted cab services from Aurangabad to Pune, Mumbai & Nashik. Comfortable, safe and affordable travel for everyone.</p>
            </div>
            {[
              ["Quick Links", [["Home", "home"], ["About Us", "about"], ["Cab Services", "services"], ["Contact Us", "contact"]]],
              ["Our Routes", [["Aurangabad → Pune", null], ["Aurangabad → Mumbai", null], ["Aurangabad → Nashik", null], ["Local Sightseeing", null]]],
              ["Contact", [["📞 9762018264", null], ["📞 7249076375", null], ["📧 Email Us", null], ["📍 Aurangabad, MH", null]]],
            ].map(([title, links]) => (
              <div key={title}>
                <h4 style={{ fontSize: 13, fontWeight: 800, color: "#e67e22", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>{title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map(([label, section]) => (
                    <span key={label} onClick={() => section && scrollTo(section)} style={{ fontSize: 13, color: "#666", cursor: section ? "pointer" : "default", transition: "color 0.2s" }}
                      onMouseEnter={e => { if (section) e.target.style.color = "#e67e22"; }}
                      onMouseLeave={e => { e.target.style.color = "#666"; }}>{label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #222", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 12, color: "#555" }}>© 2025 Radhey Tours and Travels. All rights reserved.</p>
            <div style={{ display: "flex", gap: 16 }}>
              {CONTACTS.map((c) => (
                <button key={c.phone} onClick={() => openWhatsApp(c.phone)} style={{ background: "#25D366", border: "none", color: "#fff", borderRadius: 6, padding: "8px 14px", fontSize: 12, cursor: "pointer", fontWeight: 700 }}>💬 +91 {c.phone}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
