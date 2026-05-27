import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    tag: "Most Popular",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
    reviews: 2841,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    category: "Beach",
    desc: "Whitewashed villages perched on volcanic cliffs above the sparkling Aegean Sea.",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    tag: "Editor's Pick",
    price: "$1,799",
    duration: "10 Days",
    rating: 4.8,
    reviews: 3102,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    category: "Culture",
    desc: "Ancient temples, bamboo groves, and cherry blossoms in Japan's cultural heart.",
  },
  {
    id: 3,
    name: "Amalfi Coast, Italy",
    tag: "Trending",
    price: "$2,199",
    duration: "8 Days",
    rating: 4.9,
    reviews: 1987,
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
    category: "Adventure",
    desc: "Dramatic cliffside villages, crystalline waters and legendary Italian cuisine.",
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    tag: "Best Value",
    price: "$899",
    duration: "9 Days",
    rating: 4.7,
    reviews: 4521,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    category: "Beach",
    desc: "Lush rice terraces, sacred temples and world-class surf breaks await you.",
  },
  {
    id: 5,
    name: "Machu Picchu, Peru",
    tag: "Adventure",
    price: "$1,649",
    duration: "12 Days",
    rating: 4.9,
    reviews: 2234,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    category: "Adventure",
    desc: "The iconic Inca citadel rises mystically above the Sacred Valley clouds.",
  },
  {
    id: 6,
    name: "Maldives",
    tag: "Luxury",
    price: "$3,499",
    duration: "6 Days",
    rating: 5.0,
    reviews: 1456,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    category: "Beach",
    desc: "Overwater bungalows above turquoise lagoons in the Indian Ocean paradise.",
  },
];

const vehicles = [
  {
    id: 1,
    name: "Luxury Cruise Liner",
    type: "Ocean",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
    price: "$299/night",
    capacity: "2000+ guests",
    amenities: ["Pool", "Spa", "Fine Dining", "Entertainment"],
  },
  {
    id: 2,
    name: "Private Yacht",
    type: "Ocean",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
    price: "$1,200/day",
    capacity: "Up to 12",
    amenities: ["Captain", "Crew", "Snorkeling", "Fishing"],
  },
  {
    id: 3,
    name: "Business Class Flight",
    type: "Air",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    price: "$450/seat",
    capacity: "180 seats",
    amenities: ["Flatbed", "Lounge", "Gourmet", "Priority"],
  },
  {
    id: 4,
    name: "Luxury Train",
    type: "Rail",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
    price: "$189/seat",
    capacity: "400 seats",
    amenities: ["Dining Car", "Observation", "WiFi", "Sleeper"],
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "PS",
    rating: 5,
    text: "An absolutely flawless experience from start to finish. WanderLux handled every detail — our Santorini trip was pure magic.",
  },
  {
    name: "James Thornton",
    location: "London, UK",
    avatar: "JT",
    rating: 5,
    text: "I've traveled with many agencies but WanderLux is on another level. The Kyoto itinerary was perfectly curated.",
  },
  {
    name: "Sofia Mendes",
    location: "São Paulo, Brazil",
    avatar: "SM",
    rating: 5,
    text: "Our Maldives honeymoon was everything we dreamed of. The team went above and beyond. We'll be back!",
  },
];

const categories = ["All", "Beach", "Culture", "Adventure", "Luxury"];

export default function TravelBooking() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [tripType, setTripType] = useState("roundtrip");
  const [guests, setGuests] = useState(2);
  const [wishlist, setWishlist] = useState([]);
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered =
    activeCategory === "All"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const navLinks = ["Home", "Destinations", "Vehicles", "Deals", "Contact"];

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: "#0a0c14", color: "#f0ede4", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0c14; } ::-webkit-scrollbar-thumb { background: #c9a96e; border-radius: 2px; }
        .btn-primary { background: linear-gradient(135deg, #c9a96e, #e8c98a); color: #0a0c14; border: none; padding: 14px 32px; border-radius: 50px; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 15px; cursor: pointer; transition: all 0.3s ease; letter-spacing: 0.5px; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.4); }
        .btn-outline { background: transparent; color: #c9a96e; border: 1.5px solid #c9a96e; padding: 12px 28px; border-radius: 50px; font-family: 'DM Sans', sans-serif; font-weight: 400; font-size: 14px; cursor: pointer; transition: all 0.3s ease; }
        .btn-outline:hover { background: rgba(201,169,110,0.1); transform: translateY(-1px); }
        .card-hover { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .gold { color: #c9a96e; }
        .section-tag { font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e; }
        input, select { outline: none; border: none; }
        .nav-link { font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 400; color: #d4cfc4; cursor: pointer; transition: color 0.2s; letter-spacing: 0.5px; background: none; border: none; padding: 0; }
        .nav-link:hover, .nav-link.active { color: #c9a96e; }
        .shimmer { background: linear-gradient(90deg, rgba(201,169,110,0) 0%, rgba(201,169,110,0.15) 50%, rgba(201,169,110,0) 100%); background-size: 200% 100%; animation: shimmer 3s infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .cat-btn { font-family: 'DM Sans', sans-serif; font-size: 13px; padding: 8px 22px; border-radius: 50px; cursor: pointer; transition: all 0.3s; border: 1.5px solid; font-weight: 400; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 5%", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, background: "rgba(10,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#c9a96e,#8a5c2e)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700 }}>W</div>
          <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: 1, color: "#f0ede4" }}>Wander<span className="gold">Lux</span></span>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {navLinks.map((l) => (
            <button key={l} className={`nav-link${activeNav === l ? " active" : ""}`} onClick={() => setActiveNav(l)}>{l}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn-outline" style={{ padding: "9px 22px", fontSize: 13 }}>Sign In</button>
          <button className="btn-primary" style={{ padding: "9px 22px", fontSize: 13 }}>Book Now</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 72, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90)", backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,12,20,0.95) 40%, rgba(10,12,20,0.3) 100%)" }} />
        {/* Decorative lines */}
        <div style={{ position: "absolute", top: "20%", right: "8%", width: 1, height: 200, background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.4), transparent)" }} />
        <div style={{ position: "absolute", bottom: "25%", right: "15%", width: 1, height: 120, background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.25), transparent)" }} />

        <div style={{ position: "relative", padding: "0 8%", maxWidth: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 40, height: 1, background: "#c9a96e" }} />
            <span className="section-tag">Premium Travel Experiences</span>
          </div>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 300, lineHeight: 1.05, marginBottom: 24, color: "#f0ede4", letterSpacing: -1 }}>
            Discover the<br /><em style={{ color: "#c9a96e", fontStyle: "italic" }}>World's</em> Most<br />Beautiful Places
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#a09d94", lineHeight: 1.7, marginBottom: 48, maxWidth: 480, fontWeight: 300 }}>
            Curated luxury journeys crafted for the discerning traveller. From sun-kissed shores to ancient mountain kingdoms — your story begins here.
          </p>

          {/* Search Box */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 20, padding: "6px 6px 6px 28px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", backdropFilter: "blur(10px)", marginBottom: 32 }}>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#c9a96e", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Destination</div>
              <input placeholder="Where to?" style={{ background: "none", color: "#f0ede4", fontFamily: "'DM Sans', sans-serif", fontSize: 15, width: "100%" }} />
            </div>
            <div style={{ width: 1, height: 36, background: "rgba(201,169,110,0.2)" }} />
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#c9a96e", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Dates</div>
              <input type="date" style={{ background: "none", color: "#f0ede4", fontFamily: "'DM Sans', sans-serif", fontSize: 14, colorScheme: "dark", width: "100%" }} />
            </div>
            <div style={{ width: 1, height: 36, background: "rgba(201,169,110,0.2)" }} />
            <div style={{ flex: 1, minWidth: 80 }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#c9a96e", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Guests</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => setGuests(Math.max(1, guests - 1))} style={{ background: "rgba(201,169,110,0.2)", border: "none", color: "#c9a96e", borderRadius: "50%", width: 22, height: 22, cursor: "pointer", fontSize: 16, lineHeight: 1 }}>-</button>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 15, color: "#f0ede4", minWidth: 16, textAlign: "center" }}>{guests}</span>
                <button onClick={() => setGuests(guests + 1)} style={{ background: "rgba(201,169,110,0.2)", border: "none", color: "#c9a96e", borderRadius: "50%", width: 22, height: 22, cursor: "pointer", fontSize: 16, lineHeight: 1 }}>+</button>
              </div>
            </div>
            <button className="btn-primary" style={{ borderRadius: 14, padding: "14px 28px" }}>Search Trips</button>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            {[["50K+", "Happy Travellers"], ["200+", "Destinations"], ["15+", "Years of Trust"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 28, fontWeight: 600, color: "#c9a96e", letterSpacing: -1 }}>{n}</div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#7a7870", letterSpacing: 1 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <div style={{ position: "absolute", right: "6%", top: "30%", background: "rgba(10,12,20,0.85)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 16, padding: "16px 20px", backdropFilter: "blur(10px)", textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 4 }}>✈️</div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#c9a96e", letterSpacing: 2, textTransform: "uppercase" }}>Next Flight</div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 15, fontWeight: 500, color: "#f0ede4", marginTop: 2 }}>in 3 hrs</div>
        </div>
        <div style={{ position: "absolute", right: "6%", bottom: "28%", background: "rgba(10,12,20,0.85)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 16, padding: "16px 20px", backdropFilter: "blur(10px)" }}>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#7a7870", letterSpacing: 1 }}>Average Rating</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 600, color: "#f0ede4" }}>4.9</span>
            <div style={{ color: "#c9a96e", fontSize: 14 }}>★★★★★</div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#5a5850", letterSpacing: 2, textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)" }} />
        </div>
      </section>

      {/* TRIP TYPE TABS */}
      <section style={{ padding: "80px 8% 0" }}>
        <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.04)", borderRadius: 50, padding: 4, width: "fit-content", marginBottom: 60, border: "1px solid rgba(201,169,110,0.12)" }}>
          {["roundtrip", "oneway", "multi"].map((t) => (
            <button key={t} onClick={() => setTripType(t)} style={{ padding: "10px 24px", borderRadius: 50, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 400, transition: "all 0.3s", background: tripType === t ? "linear-gradient(135deg,#c9a96e,#e8c98a)" : "transparent", color: tripType === t ? "#0a0c14" : "#7a7870" }}>
              {t === "roundtrip" ? "Round Trip" : t === "oneway" ? "One Way" : "Multi-City"}
            </button>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section style={{ padding: "0 8% 100px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <p className="section-tag" style={{ marginBottom: 12 }}>✦ Handpicked for You</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, color: "#f0ede4" }}>
              Top <em style={{ color: "#c9a96e", fontStyle: "italic" }}>Destinations</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button key={c} className="cat-btn" onClick={() => setActiveCategory(c)} style={{ borderColor: activeCategory === c ? "#c9a96e" : "rgba(201,169,110,0.2)", background: activeCategory === c ? "rgba(201,169,110,0.12)" : "transparent", color: activeCategory === c ? "#c9a96e" : "#7a7870" }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
          {filtered.map((dest) => (
            <div key={dest.id} className="card-hover" style={{ borderRadius: 24, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.1)", position: "relative" }}>
              <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                <img src={dest.image} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} onMouseEnter={e => e.target.style.transform = "scale(1.08)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,20,0.85) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "linear-gradient(135deg,#c9a96e,#e8c98a)", color: "#0a0c14", fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 600, padding: "4px 12px", borderRadius: 50, letterSpacing: 1, textTransform: "uppercase" }}>{dest.tag}</div>
                <button onClick={() => toggleWishlist(dest.id)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(10,12,20,0.6)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)", transition: "transform 0.2s" }} onMouseEnter={e => e.target.style.transform = "scale(1.15)"} onMouseLeave={e => e.target.style.transform = "scale(1)"}>
                  {wishlist.includes(dest.id) ? "❤️" : "🤍"}
                </button>
                <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 400, color: "#f0ede4" }}>{dest.name}</h3>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#a09d94" }}>from</div>
                      <div style={{ fontSize: 22, fontWeight: 600, color: "#c9a96e" }}>{dest.price}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#7a7870", lineHeight: 1.6, marginBottom: 16 }}>{dest.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#5a5850", letterSpacing: 1, textTransform: "uppercase" }}>Duration</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#d4cfc4", marginTop: 2 }}>{dest.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#5a5850", letterSpacing: 1, textTransform: "uppercase" }}>Rating</div>
                      <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#d4cfc4", marginTop: 2 }}>★ {dest.rating} <span style={{ color: "#5a5850" }}>({dest.reviews.toLocaleString()})</span></div>
                    </div>
                  </div>
                  <button className="btn-primary" style={{ padding: "10px 20px", fontSize: 13, borderRadius: 12 }}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VEHICLES SECTION */}
      <section style={{ padding: "80px 8% 100px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(201,169,110,0.08)", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-tag" style={{ marginBottom: 16 }}>✦ Exotic Fleet</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f0ede4", marginBottom: 16 }}>
            Travel in <em style={{ color: "#c9a96e", fontStyle: "italic" }}>Style</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 16, color: "#7a7870", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>Choose from our exclusive fleet of luxury transportation — crafted for those who demand the finest.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {vehicles.map((v) => (
            <div key={v.id} className="card-hover" style={{ borderRadius: 20, overflow: "hidden", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.1)", position: "relative" }}>
              <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                <img src={v.image} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.1)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,20,0.7) 0%, transparent 70%)" }} />
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(10,12,20,0.8)", border: "1px solid rgba(201,169,110,0.3)", color: "#c9a96e", fontFamily: "'DM Sans'", fontSize: 10, padding: "4px 10px", borderRadius: 50, letterSpacing: 1 }}>{v.type}</div>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: "#f0ede4" }}>{v.name}</h3>
                  <span style={{ color: "#c9a96e", fontFamily: "'DM Sans'", fontSize: 14, fontWeight: 500 }}>{v.price}</span>
                </div>
                <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#5a5850", marginBottom: 14 }}>👥 {v.capacity}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {v.amenities.map((a) => (
                    <span key={a} style={{ background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.15)", color: "#a09d94", fontFamily: "'DM Sans'", fontSize: 11, padding: "4px 10px", borderRadius: 50 }}>{a}</span>
                  ))}
                </div>
                <button className="btn-outline" style={{ width: "100%", fontSize: 13, padding: "10px" }}>Reserve Vehicle</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "100px 8%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <p className="section-tag" style={{ marginBottom: 16 }}>✦ Why WanderLux</p>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 50px)", fontWeight: 300, color: "#f0ede4", marginBottom: 24, lineHeight: 1.15 }}>
              We Make Every<br /><em style={{ color: "#c9a96e", fontStyle: "italic" }}>Journey</em> Unforgettable
            </h2>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 15, color: "#7a7870", lineHeight: 1.8, marginBottom: 48 }}>
              From the moment you dream of a destination to the instant you return home, WanderLux crafts experiences that linger in memory long after the journey ends.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                ["🌍", "Global Coverage", "200+ handpicked destinations across 70 countries, all personally vetted by our expert team."],
                ["🛡️", "Guaranteed Safety", "24/7 travel support, comprehensive insurance, and real-time trip monitoring."],
                ["💎", "Luxury First", "Partnerships with 5-star properties, private jets, and exclusive yacht charters."],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 52, height: 52, background: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 500, color: "#f0ede4", marginBottom: 6 }}>{title}</h4>
                    <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#7a7870", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 280, marginTop: 40 }}>
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="mountains" />
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 280 }}>
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="luxury" />
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 200 }}>
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="paris" />
            </div>
            <div style={{ borderRadius: 20, overflow: "hidden", height: 200, marginTop: -40 }}>
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="travel" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "80px 8% 100px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(201,169,110,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-tag" style={{ marginBottom: 16 }}>✦ Traveller Stories</p>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 300, color: "#f0ede4" }}>
            Voices of Our <em style={{ color: "#c9a96e", fontStyle: "italic" }}>Adventurers</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,169,110,0.1)", borderRadius: 24, padding: "32px 28px" }}>
              <div style={{ color: "#c9a96e", fontSize: 22, marginBottom: 20, letterSpacing: 2 }}>{"★".repeat(t.rating)}</div>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 15, color: "#a09d94", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,rgba(201,169,110,0.3),rgba(201,169,110,0.1))", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 600, color: "#c9a96e" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#f0ede4" }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#5a5850", marginTop: 2 }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section style={{ padding: "100px 8%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, rgba(10,12,20,0.85) 70%)" }} />
        <div style={{ position: "relative" }}>
          <p className="section-tag" style={{ marginBottom: 20 }}>✦ Exclusive Offers</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 300, color: "#f0ede4", marginBottom: 20, lineHeight: 1.1 }}>
            Start Your<br /><em style={{ color: "#c9a96e", fontStyle: "italic" }}>Dream Journey</em> Today
          </h2>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 16, color: "#7a7870", marginBottom: 48, maxWidth: 460, margin: "0 auto 48px" }}>Join over 50,000 travellers who receive our exclusive deals, insider tips, and early access to luxury packages.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <input placeholder="Enter your email address" style={{ padding: "16px 28px", borderRadius: 50, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,169,110,0.2)", color: "#f0ede4", fontFamily: "'DM Sans', sans-serif", fontSize: 15, minWidth: 320, backdropFilter: "blur(10px)" }} />
            <button className="btn-primary" style={{ padding: "16px 40px" }}>Subscribe & Save</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "60px 8% 40px", borderTop: "1px solid rgba(201,169,110,0.12)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#c9a96e,#8a5c2e)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700 }}>W</div>
              <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: 1 }}>Wander<span className="gold">Lux</span></span>
            </div>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#5a5850", lineHeight: 1.8, maxWidth: 240 }}>Crafting extraordinary journeys for the world's most discerning travellers since 2010.</p>
          </div>
          {[
            ["Destinations", ["Europe", "Asia", "Americas", "Africa", "Oceania"]],
            ["Travel", ["Flights", "Hotels", "Packages", "Cruises", "Transfers"]],
            ["Support", ["Help Center", "Contact Us", "Insurance", "Privacy", "Terms"]],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#c9a96e", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>{title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((l) => (
                  <a key={l} href="#" style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#5a5850", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#c9a96e"} onMouseLeave={e => e.target.style.color = "#5a5850"}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(201,169,110,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#3a3830" }}>© 2026 WanderLux. All rights reserved. Crafted with passion.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Instagram", "Twitter", "Facebook", "YouTube"].map((s) => (
              <a key={s} href="#" style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#3a3830", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#c9a96e"} onMouseLeave={e => e.target.style.color = "#3a3830"}>{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
