"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────────────────── REVEAL HOOK ─────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────── NAV ─────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Expertise", href: "#expertise" },
    { label: "Cas N°1", href: "#cas1" },
    { label: "Cas N°2", href: "#cas2" },
    { label: "Influence", href: "#influence" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(12, 11, 9, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(200, 151, 90, 0.12)"
          : "none",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 400,
          letterSpacing: "0.12em",
          color: "var(--cream)",
          textTransform: "uppercase",
        }}
      >
        W·D
      </a>

      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
          alignItems: "center",
        }}
        className="nav-links"
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream-muted)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--cream-muted)")
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:wejdendaoud6@gmail.com"
        style={{
          padding: "0.5rem 1.4rem",
          border: "1px solid var(--gold)",
          color: "var(--gold)",
          fontSize: "0.7rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
          transition: "all 0.3s",
          borderRadius: "2px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--gold)";
          e.currentTarget.style.color = "var(--bg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--gold)";
        }}
      >
        Me contacter
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 3rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(200, 151, 90, 0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(200, 151, 90, 0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          left: "3rem",
          top: "15%",
          bottom: "20%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, var(--gold), transparent)",
          opacity: 0.3,
        }}
      />

      {/* Top label */}
      <div
        style={{
          position: "absolute",
          top: "10rem",
          left: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          animation: "fadeIn 1.2s ease forwards",
          animationDelay: "0.3s",
          opacity: 0,
        }}
      >
        <span
          style={{
            width: "2rem",
            height: "1px",
            background: "var(--gold)",
            display: "block",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            color: "var(--gold)",
            textTransform: "uppercase",
          }}
        >
          Portfolio 2026
        </span>
      </div>

      {/* Profile image - NEW */}
      <div
        style={{
          position: "absolute",
          top: "12rem",
          right: "3rem",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid var(--gold)",
          boxShadow: "0 0 20px rgba(200,151,90,0.2)",
          animation: "fadeIn 1s ease forwards",
          animationDelay: "0.8s",
          opacity: 0,
        }}
      >
        <Image
          src="/images/profile-hero.jpg"  // Replace with your actual image
          alt="Wejden Daoud"
          width={120}
          height={120}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Floating role badge */}
      <div
        style={{
          position: "absolute",
          top: "18rem",
          right: "3rem",
          border: "1px solid var(--border)",
          padding: "1.2rem 2rem",
          animation: "fadeIn 1s ease forwards",
          animationDelay: "1s",
          opacity: 0,
          background: "rgba(26, 23, 20, 0.7)",
          backdropFilter: "blur(10px)",
          maxWidth: "260px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.63rem",
            letterSpacing: "0.14em",
            color: "var(--cream-muted)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Spécialités
        </p>
        {[
          "SEO / GEO",
          "Stratégie éditoriale",
          "Social Media",
          "CRM & Acquisition",
          "Copywriting",
        ].map((s) => (
          <p
            key={s}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.78rem",
              color: "var(--cream)",
              lineHeight: 1.8,
            }}
          >
            — {s}
          </p>
        ))}
      </div>

      {/* Main title */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.9s ease forwards",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          Chargée Marketing & Communication
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 12vw, 10rem)",
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "var(--white)",
            animation: "fadeUp 1s ease forwards",
            animationDelay: "0.7s",
            opacity: 0,
            marginBottom: "0.2em",
          }}
        >
          Wejden
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "var(--cream-muted)",
              fontWeight: 300,
            }}
          >
            Daoud
          </em>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2.5rem",
            animation: "fadeUp 1s ease forwards",
            animationDelay: "1s",
            opacity: 0,
          }}
        >
          <span
            style={{
              width: "4rem",
              height: "1px",
              background: "var(--cream-muted)",
              opacity: 0.4,
              display: "block",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--cream-muted)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Je transforme des messages complexes en contenus clairs,
            engageants et efficaces — de la stratégie à l&apos;exécution.
          </p>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "fadeIn 1s ease forwards",
            animationDelay: "1.5s",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "var(--cream-muted)",
              textTransform: "uppercase",
              writingMode: "vertical-lr",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "linear-gradient(to bottom, var(--cream-muted), transparent)",
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE BAND ─────────────────────────── */
function MarqueeBand() {
  const items = [
    "SEO / GEO",
    "Stratégie Éditoriale",
    "Social Media",
    "CRM",
    "Copywriting",
    "Acquisition",
    "Conversion",
    "Image de Marque",
    "Contenu Multicanal",
    "Performance",
  ];
  const repeated = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        padding: "1rem 0",
        overflow: "hidden",
        background: "var(--bg-2)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 25s linear infinite",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.95rem",
              fontWeight: 400,
              fontStyle: i % 2 === 0 ? "normal" : "italic",
              color: i % 3 === 0 ? "var(--gold)" : "var(--cream-muted)",
              whiteSpace: "nowrap",
              padding: "0 2.5rem",
              letterSpacing: "0.06em",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── SKILL CARD ─────────────────────────── */
function SkillCard({
  number,
  title,
  items,
  delay = 0,
}: {
  number: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{
        border: "1px solid var(--border-light)",
        padding: "2rem",
        position: "relative",
        transition: "border-color 0.4s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "rgba(200, 151, 90, 0.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(237, 229, 212, 0.08)";
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "1.2rem",
          right: "1.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "var(--gold)",
          opacity: 0.6,
          letterSpacing: "0.1em",
        }}
      >
        {number}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          fontWeight: 400,
          color: "var(--cream)",
          marginBottom: "1.2rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontSize: "0.82rem",
              color: "var(--cream-muted)",
              lineHeight: 1.8,
              paddingLeft: "1rem",
              position: "relative",
              fontWeight: 300,
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                color: "var(--gold)",
                opacity: 0.6,
              }}
            >
              ›
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────── EXPERTISE SECTION ─────────────────────────── */
function ExpertiseSection() {
  const skills = [
    {
      number: "01",
      title: "Visibilité Digitale",
      items: [
        "SEO on-page & off-page",
        "GEO — optimisation IA",
        "Cohérence des messages",
        "Stratégie de mots-clés",
        "Suivi via Google Analytics",
      ],
    },
    {
      number: "02",
      title: "Contenu & Édito",
      items: [
        "Stratégie éditoriale",
        "Calendrier de contenu",
        "Rédaction multicanal",
        "Copywriting & pages web",
        "Scripts vidéo",
      ],
    },
    {
      number: "03",
      title: "Social Media",
      items: [
        "Instagram, TikTok, LinkedIn",
        "Gestion de communauté",
        "Campagnes Meta Ads",
        "Charte graphique & visuelle",
        "Marketing d'influence",
      ],
    },
    {
      number: "04",
      title: "Acquisition & CRM",
      items: [
        "Optimisation du tunnel",
        "CRM (scoring, segmentation)",
        "Automatisation marketing",
        "Email ciblé & relances",
        "Analyse des performances",
      ],
    },
    {
      number: "05",
      title: "Stratégie Commerciale",
      items: [
        "Plan d'action commercial",
        "Prospection & relances",
        "Parcours client",
        "Outils d'aide à la vente",
        "Coordination marketing/ventes",
      ],
    },
    {
      number: "06",
      title: "Image de Marque",
      items: [
        "Positionnement de marque",
        "Construction identitaire",
        "Veille concurrentielle",
        "Benchmark & tendances",
        "Supports de communication",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      style={{
        padding: "8rem 3rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "4rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            Domaines d&apos;expertise
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            Ce que je{" "}
            <em style={{ fontStyle: "italic", color: "var(--cream-muted)" }}>
              maîtrise
            </em>
          </h2>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--cream-muted)",
            maxWidth: "360px",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Une approche 360° du marketing digital — de la stratégie à
          l&apos;exécution, avec une attention constante à la cohérence et à
          l&apos;impact.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "var(--border-light)",
        }}
      >
        {skills.map((s, i) => (
          <div key={s.number} style={{ background: "var(--bg)" }}>
            <SkillCard {...s} delay={((i % 3) + 1) as 1 | 2 | 3 | 4} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── CASE STUDY SECTION ─────────────────────────── */
function CaseStudy1() {
  return (
    <section
      id="cas1"
      style={{
        padding: "8rem 3rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Label */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
            }}
          >
            Cas N°01
          </span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border-light)",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              color: "var(--cream-muted)",
              textTransform: "uppercase",
            }}
          >
            BtoB · Agricole
          </span>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="case-grid"
        >
          {/* Left */}
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--white)",
                marginBottom: "2rem",
              }}
            >
              Les Silos{" "}
              <em
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "var(--cream-muted)",
                }}
              >
                du Touch
              </em>
            </h2>

            <div
              className="reveal reveal-delay-1"
              style={{
                borderLeft: "2px solid var(--gold)",
                paddingLeft: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.82rem",
                  color: "var(--cream-muted)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Entreprise agricole BtoB avec une offre complexe, une faible
                visibilité digitale et une expérience client peu structurée.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                }}
              >
                Problématique
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "var(--cream)",
                  lineHeight: 1.4,
                  marginBottom: "2.5rem",
                }}
              >
                Comment structurer l&apos;acquisition, clarifier les parcours
                et transformer le digital en levier commercial ?
              </p>
            </div>

            {/* Impact stats */}
            <div
              className="reveal reveal-delay-3"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "var(--border-light)",
                marginTop: "2rem",
              }}
            >
              {[
                { label: "Budget dédié", value: "Zéro" },
                { label: "Outils payants", value: "Aucun" },
                { label: "Approche", value: "Autonome" },
                { label: "Mesurable", value: "Résultat" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--bg)",
                    padding: "1.4rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      color: "var(--gold)",
                      fontWeight: 300,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: "var(--cream-muted)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginTop: "0.3rem",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2">
            <div
              style={{
                border: "1px solid var(--border-light)",
                padding: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                }}
              >
                Actions menées
              </p>
              {[
                "Refonte complète du site internet (UX, structure, contenus)",
                "Mise en place du suivi via Google Analytics",
                "Optimisation du parcours client digital",
                "Mise en place d'une stratégie marketing et commerciale (PAC)",
                "Analyse et optimisation du tunnel d'acquisition",
                "Mise en place d'un système CRM (scoring, relances)",
                "Automatisation des actions marketing",
                "Création d'outils d'aide à la vente",
              ].map((action) => (
                <div
                  key={action}
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    marginBottom: "0.8rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.7rem",
                      marginTop: "0.25rem",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--cream-muted)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {action}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                border: "1px solid var(--border)",
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    color: "var(--cream-muted)",
                    marginBottom: "0.3rem",
                  }}
                >
                  Voir le site en ligne
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--cream)",
                  }}
                >
                  silosdutouch.com
                </p>
              </div>
              <a
                href="https://silosdutouch.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.6rem 1.4rem",
                  background: "var(--gold)",
                  color: "var(--bg)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  borderRadius: "2px",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                Voir →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────── CONTENT STRATEGY SECTION ─────────────────────────── */
function ContentStrategySection() {
  return (
    <section
      style={{
        padding: "8rem 3rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="strategy-grid"
      >
        <div>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Stratégie éditoriale
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--white)",
              marginBottom: "2rem",
            }}
          >
            Contenu & Animation
            <br />
            <em style={{ fontStyle: "italic", color: "var(--cream-muted)" }}>
              des Réseaux Sociaux
            </em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--cream-muted)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: "2.5rem",
              maxWidth: "520px",
            }}
          >
            Mise en place d&apos;une stratégie éditoriale adaptée aux enjeux
            business et aux temps forts de l&apos;activité — de la définition
            des thématiques au pilotage de la production.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {[
              {
                role: "Stratégie",
                desc: "Définition des thématiques éditoriales et des calendriers",
              },
              {
                role: "Production",
                desc: "Coordination graphiste & CM, création directe de formats",
              },
              {
                role: "Distribution",
                desc: "Adaptation canal par canal (visuel, vidéo, texte)",
              },
              {
                role: "Performance",
                desc: "Suivi régularité, cohérence et optimisation continue",
              },
            ].map(({ role, desc }, i) => (
              <div
                key={role}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "1.5rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--border-light)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    paddingTop: "0.15rem",
                  }}
                >
                  {role}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.83rem",
                    color: "var(--cream-muted)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact cards */}
        <div className="reveal reveal-delay-2">
          <div style={{ display: "grid", gap: "1px", background: "var(--border-light)" }}>
            {[
              {
                icon: "◈",
                title: "Communication structurée",
                desc: "Plus régulière et cohérente avec les objectifs business",
              },
              {
                icon: "◉",
                title: "Visibilité digitale",
                desc: "Meilleure présence sur les plateformes clés",
              },
              {
                icon: "◎",
                title: "Cohérence éditoriale",
                desc: "Contenus alignés avec les attentes clients",
              },
              {
                icon: "○",
                title: "Image de marque",
                desc: "Renforcement de l'identité et de la notoriété",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "var(--surface)",
                  padding: "1.8rem",
                  display: "flex",
                  gap: "1.2rem",
                  alignItems: "flex-start",
                  transition: "background 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(200, 151, 90, 0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--surface)")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    color: "var(--gold)",
                    lineHeight: 1,
                    marginTop: "0.1rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.84rem",
                      color: "var(--cream)",
                      fontWeight: 400,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.76rem",
                      color: "var(--cream-muted)",
                      fontWeight: 300,
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .strategy-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────── CASE 2 — GYM ─────────────────────────── */
function CaseStudy2() {
  return (
    <section
      id="cas2"
      style={{
        padding: "8rem 3rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
            }}
          >
            Cas N°02
          </span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border-light)",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              color: "var(--cream-muted)",
              textTransform: "uppercase",
            }}
          >
            BtoC · Sport & Bien-être
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="case-grid"
        >
          <div>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--white)",
                marginBottom: "2rem",
              }}
            >
              Mimer&apos;s{" "}
              <em
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "var(--cream-muted)",
                }}
              >
                Gym
              </em>
            </h2>

            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--cream-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "3rem",
                maxWidth: "440px",
              }}
            >
              Salle de sport sans charte graphique ni ligne éditoriale —
              présence Instagram non structurée, image de marque fragmentée.
            </p>

            {/* Big stat */}
            <div
              className="reveal reveal-delay-2"
              style={{
                padding: "2.5rem",
                border: "1px solid var(--border)",
                marginBottom: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at top left, rgba(200, 151, 90, 0.06), transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "4.5rem",
                  fontWeight: 300,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                }}
              >
                ×55
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.84rem",
                  color: "var(--cream)",
                  fontWeight: 400,
                  marginBottom: "0.3rem",
                }}
              >
                Croissance de la communauté
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--cream-muted)",
                  letterSpacing: "0.12em",
                }}
              >
                ~200 → +11 000 abonnés Instagram
              </p>
            </div>

            <div
              className="reveal reveal-delay-3"
              style={{
                display: "flex",
                gap: "1px",
                background: "var(--border-light)",
              }}
            >
              {[
                { v: "776", l: "Publications" },
                { v: "15K+", l: "Followers" },
                { v: "100%", l: "Autonome" },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  style={{
                    flex: 1,
                    background: "var(--bg)",
                    padding: "1.2rem",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.8rem",
                      color: "var(--cream)",
                      fontWeight: 300,
                    }}
                  >
                    {v}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--cream-muted)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div
              style={{
                border: "1px solid var(--border-light)",
                padding: "2.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Actions menées
              </p>
              {[
                "Définition d'une charte graphique et d'une ligne éditoriale",
                "Conception et rédaction des publications",
                "Création de contenus visuels et vidéos",
                "Élaboration du calendrier éditorial",
                "Campagnes social media & promotions",
                "Leviers d'influence (collaborations, partenariats)",
                "Gestion de campagnes Meta Ads",
                "Organisation d'événements communautaires",
                "Animation et modération quotidienne",
                "Analyse des performances et optimisation continue",
              ].map((action) => (
                <div
                  key={action}
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    marginBottom: "0.9rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.7rem",
                      marginTop: "0.25rem",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--cream-muted)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INFLUENCE SECTION (MODIFIED) ─────────────────────────── */
function InfluenceSection() {
  const videos = [
    { title: "Collaboration marque auto", thumbnail: "/images/video1.jpg", link: "https://www.instagram.com/reel/DRm_sDRDfBn/" },
    { title: "Collaboration Word Buffet", thumbnail: "/images/video2.jpg", link: "https://www.instagram.com/reel/DPO7wkrCtXq/" },
    { title: "Collaboration Temu", thumbnail: "/images/video3.jpg", link: "https://www.instagram.com/reel/DOobVs5DeJ_/" },
    { title: "Collaboration noodles", thumbnail: "/images/video4.jpg", link: "https://www.instagram.com/reel/DDSLu_AIe4q/" },
  ];

  return (
    <section
      id="influence"
      style={{
        padding: "8rem 3rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="strategy-grid"
      >
        {/* Stats side */}
        <div className="reveal">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Création de contenu & Influence
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--white)",
              marginBottom: "2.5rem",
            }}
          >
            Stratégie{" "}
            <em style={{ fontStyle: "italic", color: "var(--cream-muted)" }}>
              d&apos;influence
            </em>
            <br />& Personal Brand
          </h2>

          <div
            style={{
              border: "1px solid var(--border)",
              padding: "2.5rem",
              marginBottom: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at bottom right, rgba(200, 151, 90, 0.07), transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              93K+
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.84rem",
                color: "var(--cream)",
                fontWeight: 400,
                marginBottom: "0.3rem",
              }}
            >
              Abonnés développés de façon organique
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--cream-muted)",
                letterSpacing: "0.12em",
              }}
            >
              Projet personnel · Pilotage complet en autonomie
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--border-light)",
            }}
          >
            {[
              { v: "Automobile", l: "Secteur" },
              { v: "Cosmétique", l: "Secteur" },
              { v: "Restauration", l: "Secteur" },
              { v: "Multi-marques", l: "Collaborations" },
            ].map(({ v, l }) => (
              <div
                key={v}
                style={{
                  background: "var(--surface)",
                  padding: "1.4rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    color: "var(--cream)",
                    fontWeight: 400,
                    marginBottom: "0.2rem",
                  }}
                >
                  {v}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "var(--cream-muted)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions side */}
        <div className="reveal reveal-delay-2">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--cream-muted)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            Projet personnel développé de manière autonome, visant à construire
            une audience engagée à travers la création de contenus réguliers et
            des collaborations avec des marques.
          </p>

          {[
            {
              num: "01",
              title: "Création de contenus",
              desc: "Reels, posts, stories — formats natifs adaptés aux algorithmes",
            },
            {
              num: "02",
              title: "Tendances & Plateformes",
              desc: "Adaptation constante aux codes et formats des plateformes",
            },
            {
              num: "03",
              title: "Collaborations marques",
              desc: "Mise en avant de produits, intégration éditoriale naturelle",
            },
            {
              num: "04",
              title: "Identité visuelle",
              desc: "Structuration du feed, cohérence et univers de marque",
            },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "1.5rem",
                padding: "1.2rem 0",
                borderBottom: "1px solid var(--border-light)",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--gold)",
                  opacity: 0.7,
                  letterSpacing: "0.1em",
                  paddingTop: "0.1rem",
                }}
              >
                {num}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "var(--cream)",
                    fontWeight: 400,
                    marginBottom: "0.25rem",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.76rem",
                    color: "var(--cream-muted)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}

          {/* Video showcase */}
          <div style={{ marginTop: "3rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Quelques créations vidéo
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {videos.map((video, idx) => (
                <a
                  key={idx}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "var(--surface)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    style={{
                      aspectRatio: "16/9",
                      position: "relative",
                      overflow: "hidden",
                      background: "#2a251f",
                    }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "0.75rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        color: "var(--cream)",
                        fontWeight: 400,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {video.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "var(--gold)",
                      }}
                    >
                      Voir sur Instagram ↗
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <a
                href="https://www.instagram.com/wejden_daoud/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--gold)",
                  paddingBottom: "0.2rem",
                }}
              >
                Voir plus sur mon Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── VALEUR AJOUTÉE ─────────────────────────── */
function ValueSection() {
  return (
    <section
      style={{
        padding: "8rem 3rem",
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Ma valeur ajoutée
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            Je transforme des messages{" "}
            <em style={{ fontStyle: "italic", color: "var(--cream-muted)" }}>
              complexes
            </em>
            <br />
            en contenus clairs et efficaces
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1px",
            background: "var(--border-light)",
          }}
        >
          {[
            {
              icon: "✦",
              category: "Structuration éditoriale",
              points: [
                "Clarification des messages et des offres complexes",
                "Construction de lignes éditoriales cohérentes et durables",
                "Organisation des contenus dans le temps",
              ],
            },
            {
              icon: "◈",
              category: "Production multicanale",
              points: [
                "Rédaction pédagogique et accessible (web, print, email)",
                "Supports de communication (pages web, newsletters, vidéo)",
                "Adaptation du discours selon les cibles et les supports",
              ],
            },
            {
              icon: "◉",
              category: "Pilotage & performance",
              points: [
                "Suivi des performances (engagement, lisibilité, cohérence)",
                "Ajustements continus pour améliorer l'impact",
                "Approche structurée, même sans budgets lourds",
              ],
            },
            {
              icon: "○",
              category: "Autonomie & fiabilité",
              points: [
                "Gestion de projets en autonomie complète",
                "Capacité à structurer et coordonner sans prestataires",
                "Respect des délais, des contraintes et des validations",
              ],
            },
          ].map(({ icon, category, points }) => (
            <div
              key={category}
              className="reveal"
              style={{
                background: "var(--bg)",
                padding: "2.5rem",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(200, 151, 90, 0.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--bg)")
              }
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  color: "var(--gold)",
                  marginBottom: "1.2rem",
                }}
              >
                {icon}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--cream)",
                  fontWeight: 400,
                  marginBottom: "1.2rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border-light)",
                }}
              >
                {category}
              </h3>
              {points.map((p) => (
                <p
                  key={p}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--cream-muted)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    paddingLeft: "1rem",
                    position: "relative",
                    marginBottom: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--gold)",
                      opacity: 0.5,
                    }}
                  >
                    ›
                  </span>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT SECTION (UPDATED) ─────────────────────────── */
function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "10rem 3rem",
        maxWidth: "1400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p
        className="reveal"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        Travaillons ensemble
      </p>

      <h2
        className="reveal reveal-delay-1"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 300,
          lineHeight: 1,
          color: "var(--white)",
          marginBottom: "2rem",
        }}
      >
        Un projet ?{" "}
        <em style={{ fontStyle: "italic", color: "var(--cream-muted)" }}>
          Parlons-en.
        </em>
      </h2>

      <p
        className="reveal reveal-delay-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--cream-muted)",
          fontWeight: 300,
          lineHeight: 1.8,
          maxWidth: "480px",
          margin: "0 auto 3.5rem",
        }}
      >
        Disponible pour des missions de marketing & communication — en
        freelance, CDI, CDD ou en collaboration.
      </p>

      {/* Contact info cards */}
      <div
        className="reveal reveal-delay-3"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            background: "rgba(26, 23, 20, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--border-light)",
            padding: "1.2rem 1.8rem",
            borderRadius: "2px",
            minWidth: "200px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            Email
          </p>
          <a
            href="mailto:wejdendaoud6@gmail.com"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--cream)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream)")}
          >
            wejdendaoud6@gmail.com
          </a>
        </div>

        <div
          style={{
            background: "rgba(26, 23, 20, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--border-light)",
            padding: "1.2rem 1.8rem",
            borderRadius: "2px",
            minWidth: "200px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            Téléphone
          </p>
          <a
            href="tel:+33745224248"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--cream)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream)")}
          >
            07 45 22 42 48
          </a>
        </div>

        <div
          style={{
            background: "rgba(26, 23, 20, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--border-light)",
            padding: "1.2rem 1.8rem",
            borderRadius: "2px",
            minWidth: "200px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "var(--gold)",
              marginBottom: "0.5rem",
            }}
          >
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/wejden-daoud-88b23a273/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--cream)",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream)")}
          >
            wejden-daoud
          </a>
        </div>
      </div>

      <div
        className="reveal reveal-delay-3"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:wejdendaoud6@gmail.com"
          style={{
            padding: "1rem 2.5rem",
            background: "var(--gold)",
            color: "var(--bg)",
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            borderRadius: "2px",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          M&apos;écrire →
        </a>
        <a
          href="https://www.linkedin.com/in/wejden-daoud-88b23a273/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "1rem 2.5rem",
            border: "1px solid var(--border)",
            color: "var(--cream-muted)",
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            borderRadius: "2px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--gold)";
            e.currentTarget.style.color = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--cream-muted)";
          }}
        >
          LinkedIn
        </a>
      </div>

      {/* Small personal photo */}
      <div
        className="reveal reveal-delay-4"
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid var(--gold)",
            opacity: 0.6,
          }}
        >
          <Image
            src="/images/profile-small.jpg" // Replace with your image
            alt="Wejden Daoud"
            width={80}
            height={80}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-light)",
        padding: "2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          color: "var(--cream-muted)",
          letterSpacing: "0.1em",
        }}
      >
        Wejden Daoud
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "var(--cream-muted)",
          opacity: 0.5,
          letterSpacing: "0.12em",
        }}
      >
        © 2026 · Chargée Marketing & Communication
      </span>
      <a
        href="https://silosdutouch.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "var(--gold)",
          opacity: 0.7,
          letterSpacing: "0.12em",
          transition: "opacity 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
      >
        silosdutouch.com ↗
      </a>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <MarqueeBand />
      <ExpertiseSection />
      <CaseStudy1 />
      <ContentStrategySection />
      <CaseStudy2 />
      <InfluenceSection />
      <ValueSection />
      <ContactSection />
      <Footer />
    </>
  );
}