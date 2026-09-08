"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { CORE, LANDINGS, LEGAL, MAIL } from "./content";

/* ================================================================== *
 *  Stream-Hintergrund
 * ================================================================== */

export function StreamBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let renderer, raf;
    const disposables = [];

    try {
      const reduce =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let w = window.innerWidth;
      let h = window.innerHeight;
      const small = w < 700;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 60);
      camera.position.z = 10;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
      renderer.setSize(w, h);
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const field = new THREE.Group();
      scene.add(field);

      const X = 20, Y = 11, ZN = -9, ZF = 2.5;
      const COUNT = small ? 620 : 1250;

      const pos = new Float32Array(COUNT * 3);
      const col = new Float32Array(COUNT * 3);
      const spd = new Float32Array(COUNT);
      const pha = new Float32Array(COUNT);

      const BONE = [0.95, 0.94, 0.9];
      const BLUE = [0.42, 0.51, 1.0];
      const BRASS = [0.88, 0.66, 0.26];

      for (let i = 0; i < COUNT; i++) {
        const z = ZN + Math.random() * (ZF - ZN);
        pos[i * 3] = -X + Math.random() * X * 2;
        pos[i * 3 + 1] = -Y + Math.random() * Y * 2;
        pos[i * 3 + 2] = z;

        const depth = (z - ZN) / (ZF - ZN);
        spd[i] = 0.35 + depth * 1.5 + Math.random() * 0.35;
        pha[i] = Math.random() * Math.PI * 2;

        const roll = Math.random();
        const c = roll > 0.965 ? BRASS : roll > 0.79 ? BLUE : BONE;
        const dim = 0.32 + depth * 0.68;
        col[i * 3] = c[0] * dim;
        col[i * 3 + 1] = c[1] * dim;
        col[i * 3 + 2] = c[2] * dim;
      }

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const pMat = new THREE.PointsMaterial({
        size: small ? 0.075 : 0.062,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      disposables.push(pGeo, pMat);
      field.add(new THREE.Points(pGeo, pMat));

      const SC = small ? 26 : 54;
      const lp = new Float32Array(SC * 2 * 3);
      const lc = new Float32Array(SC * 2 * 3);
      const lspd = new Float32Array(SC);
      const llen = new Float32Array(SC);

      const seedStreak = (i, spread) => {
        const z = ZN + Math.random() * (ZF - ZN);
        const depth = (z - ZN) / (ZF - ZN);
        const x = spread ? -X + Math.random() * X * 2 : -X - Math.random() * 6;
        const y = -Y + Math.random() * Y * 2;
        const len = 0.9 + depth * 3.2 + Math.random() * 1.4;
        llen[i] = len;
        lspd[i] = 0.9 + depth * 2.6 + Math.random() * 0.6;

        lp[i * 6] = x; lp[i * 6 + 1] = y; lp[i * 6 + 2] = z;
        lp[i * 6 + 3] = x + len; lp[i * 6 + 4] = y; lp[i * 6 + 5] = z;

        const roll = Math.random();
        const c = roll > 0.9 ? BRASS : roll > 0.45 ? BLUE : BONE;
        const dim = 0.18 + depth * 0.5;
        lc[i * 6] = 0; lc[i * 6 + 1] = 0; lc[i * 6 + 2] = 0;
        lc[i * 6 + 3] = c[0] * dim; lc[i * 6 + 4] = c[1] * dim; lc[i * 6 + 5] = c[2] * dim;
      };
      for (let i = 0; i < SC; i++) seedStreak(i, true);

      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute("position", new THREE.BufferAttribute(lp, 3));
      lGeo.setAttribute("color", new THREE.BufferAttribute(lc, 3));
      const lMat = new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0.85,
        depthWrite: false, blending: THREE.AdditiveBlending,
      });
      disposables.push(lGeo, lMat);
      field.add(new THREE.LineSegments(lGeo, lMat));

      let mx = 0, my = 0, px = 0, py = 0, scrollY = 0;

      const onPointer = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onScroll = () => { scrollY = window.scrollY; };
      const onResize = () => {
        w = window.innerWidth; h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", onResize);
      if (!reduce) {
        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
      }

      if (reduce) {
        renderer.render(scene, camera);
      } else {
        const clock = new THREE.Clock();
        const loop = () => {
          raf = requestAnimationFrame(loop);
          const dt = Math.min(clock.getDelta(), 0.05);
          const t = clock.getElapsedTime();

          const pa = pGeo.attributes.position;
          for (let i = 0; i < COUNT; i++) {
            let x = pa.array[i * 3] + spd[i] * dt;
            if (x > X) { x = -X; pa.array[i * 3 + 1] = -Y + Math.random() * Y * 2; }
            pa.array[i * 3] = x;
            pa.array[i * 3 + 1] += Math.sin(t * 0.5 + pha[i]) * dt * 0.14;
          }
          pa.needsUpdate = true;

          const la = lGeo.attributes.position;
          for (let i = 0; i < SC; i++) {
            const nx = la.array[i * 6] + lspd[i] * dt;
            if (nx > X) { seedStreak(i, false); lGeo.attributes.color.needsUpdate = true; continue; }
            la.array[i * 6] = nx;
            la.array[i * 6 + 3] = nx + llen[i];
          }
          la.needsUpdate = true;

          px += (mx - px) * 0.03;
          py += (my - py) * 0.03;
          field.position.x = -px * 0.9;
          field.position.y = py * 0.7 + scrollY * 0.0012;
          field.rotation.z = px * 0.02;

          renderer.render(scene, camera);
        };
        loop();
      }

      return () => {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
        disposables.forEach((d) => d.dispose && d.dispose());
        renderer.dispose();
        if (renderer.domElement.parentNode)
          renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    } catch {
      return () => {};
    }
  }, []);

  return (
    <div className="bg-stream" aria-hidden="true">
      <div className="bg-mount" ref={mountRef} />
      <div className="bg-nova" />
      <div className="bg-vignette" />
    </div>
  );
}

/* ================================================================== *
 *  Kopfzeile mit Menü
 * ================================================================== */

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const [menu, setMenu] = useState(false);
  const [prog, setProg] = useState(0);

  useEffect(() => { setMenu(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProg(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menu]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isCur = (p) =>
    pathname === p || (p !== "/" && pathname.startsWith(p + "/"));

  return (
    <>
      <div className="prog" style={{ transform: `scaleX(${prog})` }} aria-hidden="true" />

      <header className="topbar">
        <div className="shell topbar-in">
          <Link href="/" className="brand" title="Novastream.ai Startseite">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span className="brand-name">Novastream<span>.ai</span></span>
          </Link>
          <nav className="nav" aria-label="Hauptnavigation">
            {CORE.map((r) => (
              <Link key={r.path} href={r.path}
                className={`nav-l ${isCur(r.path) ? "nav-cur" : ""}`}>{r.nav}</Link>
            ))}
          </nav>
          <button className="burger" aria-expanded={menu} aria-controls="mobile-menu"
            aria-label="Menü" onClick={() => setMenu(!menu)}>
            <span className={menu ? "x" : ""} />
          </button>
        </div>
      </header>

      {/* Bewusst ausserhalb des Headers: ein Elternteil mit backdrop-filter
          würde position:fixed auf seine Höhe begrenzen. */}
      <div id="mobile-menu" className={`drawer ${menu ? "drawer-open" : ""}`}>
        <nav className="drawer-in" aria-label="Menü">
          {CORE.map((r) => (
            <Link key={r.path} href={r.path}
              className={`nav-l ${isCur(r.path) ? "nav-cur" : ""}`}>{r.nav}</Link>
          ))}
          <div className="nav-sub">
            <h2>Leistungen im Detail</h2>
            {LANDINGS.map((l) => <Link key={l.path} href={l.path}>{l.kwMain}</Link>)}
          </div>
          <div className="nav-sub">
            <h2>Rechtliches</h2>
            {LEGAL.map((l) => <Link key={l.path} href={l.path}>{l.nav}</Link>)}
          </div>
        </nav>
      </div>
    </>
  );
}

/* ================================================================== *
 *  Kleinteile
 * ================================================================== */

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setOn(true);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rv ${on ? "rv-on" : ""} ${className}`}>{children}</div>;
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={`faq-row ${open === i ? "faq-open" : ""}`}>
          <h3 className="faq-q">
            <button type="button" aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span><i className="faq-mark" aria-hidden="true" />
            </button>
          </h3>
          <div className="faq-a"><p>{it.a}</p></div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== *
 *  Kontaktformular — schickt an /api/kontakt, von dort nach HubSpot
 * ================================================================== */

export function ContactForm() {
  const [f, setF] = useState({ name: "", firma: "", mail: "", tel: "", text: "", hp: "" });
  const [ok, setOk] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const upd = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async () => {
    if (!f.name.trim() || !f.mail.trim())
      return setErr("Name und E-Mail fehlen — ohne die beiden können wir nicht antworten.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.mail))
      return setErr("Die E-Mail-Adresse sieht unvollständig aus. Bitte noch einmal prüfen.");
    if (!ok)
      return setErr("Bitte bestätigen Sie die Datenschutzhinweise, damit wir antworten dürfen.");

    setErr("");
    setBusy(true);
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, consent: true }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data.error || `Das hat nicht geklappt. Schreiben Sie uns direkt an ${MAIL}.`);
      } else {
        setSent(true);
      }
    } catch {
      setErr(`Verbindung fehlgeschlagen. Schreiben Sie uns direkt an ${MAIL}.`);
    }
    setBusy(false);
  };

  if (sent) {
    return (
      <div className="form-card">
        <div className="sent">
          <h2>Anfrage ist raus</h2>
          <p>Wir melden uns innerhalb eines Werktags bei {f.name.split(" ")[0]}. Falls es eilt, rufen Sie direkt an.</p>
          <button className="btn btn-line" onClick={() => {
            setSent(false);
            setF({ name: "", firma: "", mail: "", tel: "", text: "", hp: "" });
            setOk(false);
          }}>Weitere Anfrage schreiben</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2>Erstgespräch anfragen</h2>
      <div className="fields">
        <label><span>Name</span>
          <input value={f.name} onChange={upd("name")} autoComplete="name" placeholder="Vor- und Nachname" /></label>
        <label><span>Unternehmen</span>
          <input value={f.firma} onChange={upd("firma")} autoComplete="organization" placeholder="Betrieb" /></label>
        <label><span>E-Mail</span>
          <input type="email" value={f.mail} onChange={upd("mail")} autoComplete="email" placeholder="name@betrieb.de" /></label>
        <label><span>Telefon</span>
          <input type="tel" value={f.tel} onChange={upd("tel")} autoComplete="tel" placeholder="optional" /></label>
        <label className="full"><span>Worum geht es?</span>
          <textarea rows={4} value={f.text} onChange={upd("text")}
            placeholder="Aktuelle Website, Anzahl Anfragen pro Monat, was gerade nervt." /></label>
      </div>

      {/* Honeypot gegen Bots — für Menschen unsichtbar */}
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={f.hp} onChange={upd("hp")} />

      <label className="consent">
        <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} />
        <span>
          Ich habe die <Link href="/datenschutz" className="inline-lnk">Datenschutzerklärung</Link> gelesen
          und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.
        </span>
      </label>

      {err && <p className="err" role="alert">{err}</p>}
      <button className="btn btn-brass" onClick={submit} disabled={busy}>
        {busy ? "Wird gesendet…" : "Anfrage senden"}
      </button>
    </div>
  );
}
