import{a as Tt,b as Ft,c as Pt,d as ye,e as It}from"./chunk-TGZ5YTCG.js";import{p as Nt}from"./chunk-VSYJGVI3.js";import"./chunk-IGARKBRQ.js";import{Qb as Lt}from"./chunk-YXS3FW5N.js";import"./chunk-WL5TCO2S.js";import"./chunk-IZUYVIPG.js";var Wt=`
.ear *, .ear *::before, .ear *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   TH\xC8MES \u2014 toutes les couleurs (y compris
   les halos semi-transparents) passent par
   des variables, donc chaque th\xE8me reste
   coh\xE9rent sur tous les composants.
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
.ear, .ear[data-theme="dark"] {
  --bg:       #16141a;
  --surface:  #211e2a;
  --card:     #2a2636;
  --border:   #3c3650;
  --gold:     #f0c46a;
  --gold-dim: #a8872a;
  --text:     #f0ebe3;
  --muted:    #8a8299;
  --green:    #6bcb8a;
  --red:      #e06060;
  --blue:     #7ab4e0;
  --shadow:   0 4px 24px rgba(0,0,0,0.4);
  --overlay:  rgba(0,0,0,0.55);

  --gold-a07: rgba(240,196,106,0.07);
  --gold-a10: rgba(240,196,106,0.10);
  --gold-a12: rgba(240,196,106,0.12);
  --gold-a14: rgba(240,196,106,0.14);
  --gold-a25: rgba(240,196,106,0.25);
  --gold-a50: rgba(240,196,106,0.50);
  --green-a15: rgba(107,203,138,0.15);
  --green-a40: rgba(107,203,138,0.40);
  --red-a08: rgba(224,96,96,0.08);
  --red-a12: rgba(224,96,96,0.12);
  --red-a30: rgba(224,96,96,0.30);
  --blue-a40: rgba(122,180,224,0.40);

  --select-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a8299' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

[data-theme="light"] {
  --bg:       #faf7f2;
  --surface:  #ffffff;
  --card:     #f1ede4;
  --border:   #ddd5c7;
  --gold:     #b8860b;
  --gold-dim: #8a6508;
  --text:     #2a2420;
  --muted:    #746a5c;
  --green:    #2f9e5c;
  --red:      #c94444;
  --blue:     #3d7fb0;
  --shadow:   0 4px 20px rgba(0,0,0,0.08);
  --overlay:  rgba(30,26,20,0.45);

  --gold-a07: rgba(184,134,11,0.08);
  --gold-a10: rgba(184,134,11,0.10);
  --gold-a12: rgba(184,134,11,0.13);
  --gold-a14: rgba(184,134,11,0.16);
  --gold-a25: rgba(184,134,11,0.22);
  --gold-a50: rgba(184,134,11,0.35);
  --green-a15: rgba(47,158,92,0.14);
  --green-a40: rgba(47,158,92,0.35);
  --red-a08: rgba(201,68,68,0.08);
  --red-a12: rgba(201,68,68,0.12);
  --red-a30: rgba(201,68,68,0.28);
  --blue-a40: rgba(61,127,176,0.35);

  --select-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23746a5c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

[data-theme="contrast"] {
  --bg:       #000000;
  --surface:  #0d0d0d;
  --card:     #1a1a1a;
  --border:   #ffffff;
  --gold:     #ffdd00;
  --gold-dim: #c9ad00;
  --text:     #ffffff;
  --muted:    #d6d6d6;
  --green:    #00ff6a;
  --red:      #ff4d4d;
  --blue:     #4fc3ff;
  --shadow:   0 4px 24px rgba(255,255,255,0.06);
  --overlay:  rgba(0,0,0,0.75);

  --gold-a07: rgba(255,221,0,0.12);
  --gold-a10: rgba(255,221,0,0.16);
  --gold-a12: rgba(255,221,0,0.18);
  --gold-a14: rgba(255,221,0,0.20);
  --gold-a25: rgba(255,221,0,0.32);
  --gold-a50: rgba(255,221,0,0.55);
  --green-a15: rgba(0,255,106,0.20);
  --green-a40: rgba(0,255,106,0.5);
  --red-a08: rgba(255,77,77,0.14);
  --red-a12: rgba(255,77,77,0.18);
  --red-a30: rgba(255,77,77,0.4);
  --blue-a40: rgba(79,195,255,0.5);

  --select-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23d6d6d6' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
}

.ear { --radius: 12px; }


.app { width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; gap: 10px; }

/* \u2500\u2500 Top bar / header \u2500\u2500 */
.top-bar { position: relative; width: 100%; display: flex; justify-content: center; }
.header { text-align: center; }
.header h1 { font-family: 'Fraunces', Georgia, serif; font-size: clamp(1.2rem, 3.2vw, 1.55rem); font-weight: 400; letter-spacing: 0.03em; }
.header h1 span { color: var(--gold); font-style: italic; }
.header p { margin-top: 3px; font-size: 0.68rem; color: var(--muted); font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; }

.theme-btn {
  position: absolute; top: 0; right: 0;
  width: 36px; height: 36px; border-radius: 50%;
  border: 1.5px solid var(--border); background: var(--surface);
  color: var(--text); font-size: 1.05rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.18s ease; flex-shrink: 0;
}
.theme-btn:hover { border-color: var(--gold-dim); transform: scale(1.05); }

/* \u2500\u2500 Engine badge \u2500\u2500 */
.engine-badge {
  display: inline-flex; align-items: center; gap: 5px;
  margin-top: 6px; padding: 3px 9px;
  border-radius: 20px; border: 1px solid var(--border);
  font-size: 0.6rem; font-weight: 500; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--muted); transition: all 0.4s ease;
}
.engine-badge .dot { width:6px; height:6px; border-radius:50%; background:var(--muted); transition:background 0.4s ease; flex-shrink:0; }
.engine-badge.loading { color:var(--gold); border-color:var(--gold-dim); }
.engine-badge.loading .dot { background:var(--gold); animation:blink 1s ease-in-out infinite; }
.engine-badge.fluid   { color:var(--green); border-color:var(--green-a40); }
.engine-badge.fluid   .dot { background:var(--green); }
.engine-badge.synth   { color:var(--blue);  border-color:var(--blue-a40); }
.engine-badge.synth   .dot { background:var(--blue); }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

/* \u2500\u2500 Panel \u2500\u2500 */
.panel { width:100%; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:18px 24px; box-shadow:var(--shadow); transition: background 0.25s ease, border-color 0.25s ease; }
.panel.play-panel { padding-bottom: 8px; }

.panel-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
.panel-label { font-size:0.64rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }

.hamburger-btn {
  width:34px; height:34px; border-radius:8px;
  border:1.5px solid var(--border); background:transparent;
  color:var(--muted); cursor:pointer;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;
  transition:all 0.18s ease; flex-shrink:0;
}
.hamburger-btn:hover { border-color:var(--gold-dim); color:var(--gold); }
.hamburger-btn.open  { border-color:var(--gold); background:var(--gold-a10); color:var(--gold); }
.hamburger-btn span { display:block; width:14px; height:1.5px; background:currentColor; border-radius:2px; transition:all 0.2s ease; }

/* Ligne "Choisir..." + bouton (r\xE9glages ou ajout) : le bouton s'\xE9tire
   pour \xE9galer exactement la hauteur du champ picker, plut\xF4t que de
   deviner une valeur fixe. */
.picker-row { display:flex; align-items:stretch; gap:8px; width:100%; }
.picker-row .hamburger-btn { height:auto; }

/* \u2500\u2500 Modes \u2500\u2500 */
.mode-group { display:flex; gap:8px; flex-wrap:wrap; }
.mode-btn {
  flex:1; min-width:100px; padding:6px 12px;
  border:1.5px solid var(--border); border-radius:8px;
  background:transparent; color:var(--muted);
  font-family:inherit; font-size:0.78rem; font-weight:500;
  cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;
  transition:all 0.18s ease; user-select:none;
}
.mode-btn:hover { border-color:var(--gold-dim); color:var(--text); }
.mode-btn.active { border-color:var(--gold); background:var(--gold-a10); color:var(--gold); }

.reset-inline-btn {
  flex:1; min-width:90px; padding:6px 10px;
  border:1.5px solid var(--border); border-radius:8px;
  background:transparent; color:var(--muted);
  font-family:inherit; font-size:0.74rem; font-weight:500;
  cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;
  transition:all 0.18s ease; user-select:none;
}
.reset-inline-btn:hover { border-color:var(--red); color:var(--red); }

/* \u2500\u2500 Play \u2500\u2500 */
.play-wrap { display:flex; flex-direction:column; align-items:center; gap:10px; }
.play-btn {
  width:64px; height:64px; border-radius:50%;
  border:2.5px solid var(--gold); background:transparent; color:var(--gold);
  font-size:1.5rem; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition:all 0.2s ease; position:relative;
}
.play-btn:hover:not(:disabled) { background:var(--gold-a12); box-shadow:0 0 20px var(--gold-a25); transform:scale(1.04); }
.play-btn:active:not(:disabled) { transform:scale(0.97); }
.play-btn:disabled { border-color:var(--border); color:var(--muted); cursor:wait; }
.play-btn.playing { animation:pulse-ring 0.6s ease-out; }
.spinner { position:absolute; inset:0; display:none; align-items:center; justify-content:center; color:var(--gold); }
.play-btn:disabled .spinner { display:flex; }
.play-btn:disabled .note-icon { opacity:0.3; }
.spinner svg { animation:spin 1.2s linear infinite; }
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes pulse-ring { 0%{box-shadow:0 0 0 0 var(--gold-a50)} 100%{box-shadow:0 0 0 22px transparent} }

.play-label { font-size:0.66rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); font-weight:500; }
.score-area { display:flex; align-items:center; gap:10px; font-size:0.76rem; color:var(--muted); }
.score-val { font-family:'Fraunces', Georgia, serif; font-size:1rem; color:var(--text); }
.score-pct { font-size:0.7rem; color:var(--gold); font-weight:500; }
.feedback { min-height:16px; font-size:0.84rem; font-weight:500; text-align:center; transition:all 0.25s ease; opacity:0; transform:translateY(-4px); }
.feedback.visible { opacity:1; transform:translateY(0); }
.feedback.correct { color:var(--green); }
.feedback.wrong   { color:var(--red); }

/* \u2500\u2500 Answers \u2500\u2500 */
.answers-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(98px, 1fr)); gap:6px; width:100%; }
.ans-btn {
  padding:6px 4px; border:1.5px solid var(--border); border-radius:8px;
  background:var(--card); color:var(--text);
  font-family:inherit; font-size:0.72rem; font-weight:400;
  cursor:pointer; text-align:center; transition:all 0.18s ease; user-select:none; line-height:1.25;
}
.ans-btn .semitones { display:block; font-size:0.58rem; color:var(--muted); margin-top:1px; font-weight:300; }
.ans-btn:hover:not(:disabled):not(.wrong):not(.correct) { border-color:var(--gold-dim); background:var(--gold-a07); color:var(--gold); }
.ans-btn.wrong   { border-color:var(--red);   background:var(--red-a12);   color:var(--red);   animation:shake 0.35s ease; }
.ans-btn.correct { border-color:var(--green); background:var(--green-a15); color:var(--green); }
.ans-btn:disabled { cursor:not-allowed; opacity:0.5; }
.ans-btn.inactive { opacity:0.3; cursor:not-allowed; pointer-events:none; }
@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }

.new-btn {
  padding:10px 28px; border:1.5px solid var(--border); border-radius:8px;
  background:transparent; color:var(--muted);
  font-family:inherit; font-size:0.8rem; font-weight:500;
  cursor:pointer; letter-spacing:0.06em; transition:all 0.18s ease;
}
.new-btn:hover { border-color:var(--muted); color:var(--text); }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   DRAWER \u2014 bottom sheet
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
.drawer-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0); pointer-events: none;
  transition: background 0.3s ease;
  display: flex; align-items: flex-end; justify-content: center;
}
.drawer-overlay.open { background: var(--overlay); pointer-events: all; }

.drawer {
  width: 100%; max-width: 640px;
  max-height: 88vh;
  background: var(--surface);
  border: 1px solid var(--border); border-bottom: none;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.4);
  transform: translateY(100%);
  transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), background 0.25s ease;
  display: flex; flex-direction: column; overflow: hidden;
}
.drawer.open { transform: translateY(0); }

.drawer-handle {
  width: 40px; height: 4px; border-radius: 3px;
  background: var(--border); margin: 10px auto 0; flex-shrink: 0;
}

.drawer-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 20px 14px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.drawer-head h2 { font-family:'Fraunces', Georgia, serif; font-size:1rem; font-weight:400; color:var(--text); }
.drawer-close {
  width:30px; height:30px; border-radius:6px;
  border:1px solid var(--border); background:transparent;
  color:var(--muted); font-size:1.1rem; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition:all 0.18s ease;
}
.drawer-close:hover { border-color:var(--red); color:var(--red); }

.drawer-body { flex:1; overflow-y:auto; padding:18px 20px 28px; display:flex; flex-direction:column; gap:16px; }
.drawer-body::-webkit-scrollbar { width:4px; }
.drawer-body::-webkit-scrollbar-track { background:transparent; }
.drawer-body::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

.drawer-section-title {
  font-size:0.65rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase;
  color:var(--gold); margin-bottom:10px; display:flex; align-items:center; gap:8px;
}
.drawer-section-title::after { content:''; flex:1; height:1px; background:var(--border); }

/* \u2500\u2500 Barre Tout / Aucun \u2500\u2500 */
.select-all-row { display:flex; gap:8px; }
.mini-btn {
  flex:1; padding:6px 8px; border:1px solid var(--border); border-radius:6px;
  background:transparent; color:var(--muted); font-family:inherit;
  font-size:0.7rem; cursor:pointer; transition:all 0.15s ease;
}
.mini-btn:hover { border-color:var(--gold-dim); color:var(--text); }

/* \u2500\u2500 3 colonnes \u2014 toujours des colonnes.
   Si l'\xE9cran est trop \xE9troit, le bloc d\xE9file
   horizontalement plut\xF4t que de se transformer
   en lignes. \u2500\u2500 */
.drawer-columns-wrap { width:100%; overflow-x:auto; }
.drawer-columns {
  display: grid;
  grid-template-columns: 92px 132px minmax(170px,1fr);
  gap: 14px;
  align-items: start;
  min-width: 430px;
}

.family-col, .quality-col { display:flex; flex-direction:column; gap:6px; }
.settings-col { display:flex; flex-direction:column; gap:20px; }

.family-btn {
  padding:7px 6px; border-radius:8px; border:1.5px solid var(--border);
  background:var(--card); color:var(--muted); font-family:inherit;
  font-size:0.76rem; font-weight:500; cursor:pointer; text-align:center;
  transition:all 0.18s ease; user-select:none;
}
.family-btn:hover { border-color:var(--gold-dim); color:var(--text); }
.family-btn.active { border-color:var(--green); background:var(--green-a15); color:var(--green); font-weight:700; }
.family-btn.shake { animation:shake 0.35s ease; }

/* Rang\xE9e famille (onglet Intervalle) : label = navigation, interrupteur = bascule */
.family-row {
  display:flex; align-items:center; justify-content:space-between; gap:6px;
  padding:5px 8px; border-radius:8px; border:1.5px solid var(--border);
  background:var(--card); transition:all 0.18s ease;
}
.family-row.focused { border-color:var(--gold); background:var(--gold-a10); }
.family-row.shake { animation:shake 0.35s ease; }
.family-label {
  flex:1; font-size:0.76rem; font-weight:500; color:var(--muted);
  cursor:pointer; user-select:none;
}
.family-row.focused .family-label { color:var(--gold); font-weight:700; }
.family-toggle {
  width:19px; height:19px; border-radius:5px; border:1.5px solid var(--border);
  cursor:pointer; flex-shrink:0; position:relative; transition:all 0.18s ease;
}
.family-toggle:hover { border-color:var(--gold-dim); }
.family-toggle.on { border-color:var(--green); background:var(--green); }
.family-toggle.on::after {
  content:'\u2713'; position:absolute; inset:0;
  display:flex; align-items:center; justify-content:center;
  font-size:0.62rem; color:var(--bg); font-weight:700;
}

.quality-empty {
  font-size:0.72rem; color:var(--muted); text-align:center;
  padding:22px 8px; border:1.5px dashed var(--border); border-radius:8px;
}

.quality-btn {
  padding:7px 8px; border-radius:8px; border:1.5px solid var(--border);
  background:var(--card); color:var(--muted); font-family:inherit;
  font-size:0.78rem; font-weight:500; cursor:pointer; text-align:center;
  transition:all 0.18s ease; user-select:none; line-height:1.25;
}
.quality-btn:hover { border-color:var(--gold-dim); color:var(--text); }
.quality-btn.active { border-color:var(--green); background:var(--green-a15); color:var(--green); }
.quality-btn .qs { display:block; font-size:0.62rem; color:var(--muted); margin-top:2px; font-weight:300; }
.quality-btn.active .qs { color:var(--green); opacity:0.75; }

/* \u2500\u2500 Sliders (colonne r\xE9glages) \u2500\u2500 */
.setting-block { display:flex; flex-direction:column; gap:6px; }
.setting-block label { font-size:0.72rem; color:var(--muted); font-weight:500; letter-spacing:0.03em; }
.gap-slider {
  width:100%; margin-top:2px;
  -webkit-appearance:none; appearance:none;
  height:4px; border-radius:4px; background:var(--border);
  outline:none; cursor:pointer;
}
.gap-slider::-webkit-slider-thumb {
  -webkit-appearance:none; appearance:none;
  width:16px; height:16px; border-radius:50%;
  background:var(--gold); border:2px solid var(--bg);
  box-shadow:0 0 6px var(--gold-a25); transition:transform 0.15s ease;
}
.gap-slider::-webkit-slider-thumb:hover { transform:scale(1.2); }
.gap-slider::-moz-range-thumb {
  width:16px; height:16px; border-radius:50%;
  background:var(--gold); border:2px solid var(--bg); cursor:pointer;
}
.gap-ticks { display:flex; justify-content:space-between; font-size:0.6rem; color:var(--muted); margin-top:2px; padding:0 2px; }
.gap-ticks span { flex:1; }

/* Amplitude */
.amplitude-row { display:flex; flex-direction:column; gap:6px; }
.amplitude-row label { font-size:0.72rem; color:var(--muted); font-weight:500; }
.note-select {
  width:100%; padding:9px 12px;
  border:1.5px solid var(--border); border-radius:8px;
  background:var(--card); color:var(--text);
  font-family:inherit; font-size:0.84rem;
  cursor:pointer; appearance:none;
  background-image: var(--select-arrow);
  background-repeat:no-repeat; background-position:right 12px center;
  padding-right:32px; transition:border-color 0.18s ease;
}
.note-select:focus { outline:none; border-color:var(--gold); }
.note-select option { background:var(--card); color:var(--text); }

.amplitude-warning {
  font-size:0.72rem; color:var(--red); padding:6px 10px;
  border:1px solid var(--red-a30); border-radius:6px;
  background:var(--red-a08); display:none;
}
.amplitude-warning.visible { display:block; }

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   ONGLETS
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
.tabs { display:flex; width:100%; border-bottom:1.5px solid var(--border); }
.tab-btn {
  flex:1; padding:8px 8px 9px; border:none; background:transparent;
  color:var(--muted); font-family:inherit;
  font-size:0.82rem; font-weight:600; cursor:pointer; position:relative;
  transition:color 0.2s ease;
}
.tab-btn:hover { color:var(--text); }
.tab-btn.active { color:var(--gold); }
.tab-btn::after {
  content:''; position:absolute; left:10%; right:10%; bottom:-1.5px; height:3px;
  border-radius:3px 3px 0 0; background:transparent; transform:scaleX(0.6);
  transition:background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.tab-btn.active::after {
  background:var(--gold); transform:scaleX(1);
  box-shadow:0 0 10px var(--gold-a50);
}
.tab-panel { display:none; width:100%; flex-direction:column; align-items:center; gap:9px; }
.tab-panel.active { display:flex; }

/* Sous-onglets \xC9coute / Identification \u2014 classe distincte des
   onglets principaux pour \xE9viter toute collision de s\xE9lecteur */
.subtabs2 { display:flex; width:100%; border-bottom:1.5px solid var(--border); margin-bottom:0; }
.subtab2-btn {
  flex:1; padding:6px 6px 8px; border:none; background:transparent;
  color:var(--muted); font-family:inherit;
  font-size:0.76rem; font-weight:600; cursor:pointer; position:relative;
  transition:color 0.2s ease;
}
.subtab2-btn:hover { color:var(--text); }
.subtab2-btn.active { color:var(--gold); }
.subtab2-btn::after {
  content:''; position:absolute; left:14%; right:14%; bottom:-1.5px; height:2.5px;
  border-radius:3px 3px 0 0; background:transparent; transform:scaleX(0.6);
  transition:background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.subtab2-btn.active::after {
  background:var(--gold); transform:scaleX(1);
  box-shadow:0 0 8px var(--gold-a50);
}
/* Sous-panneau (contenu \xC9coute / Identification) \u2014 classe distincte
   de .tab-panel pour ne jamais \xEAtre touch\xE9 par la bascule principale */
.subpanel { display:none; width:100%; flex-direction:column; align-items:center; gap:9px; }
.subpanel.active { display:flex; }

.subtab-btn {
  flex:1; padding:7px 12px; border-radius:8px; border:1.5px solid var(--border);
  background:var(--card); color:var(--muted); font-family:inherit;
  font-size:0.74rem; font-weight:600; cursor:pointer; transition:all 0.18s ease;
}
.subtab-btn:hover { border-color:var(--gold-dim); color:var(--text); }
.subtab-btn.active { border-color:var(--gold); background:var(--gold-a10); color:var(--gold); }

/* \u2500\u2500 S\xE9lecteur de phrase \u2500\u2500 */
.phrase-picker-btn {
  width:100%; padding:12px 16px; border:1.5px dashed var(--border); border-radius:10px;
  background:var(--card); color:var(--muted); font-family:inherit;
  font-size:0.82rem; font-weight:500; cursor:pointer; transition:all 0.18s ease;
  text-align:center;
}
.phrase-picker-btn:hover { border-color:var(--gold-dim); color:var(--gold); }

.phrase-item {
  width:100%; text-align:left; padding:12px 14px;
  border:1.5px solid var(--border); border-radius:10px; background:var(--card);
  color:var(--text); cursor:pointer; transition:all 0.15s ease;
  display:flex; flex-direction:column; gap:2px;
}
.phrase-item:hover { border-color:var(--gold-dim); background:var(--gold-a07); }
.phrase-item .pi-title { font-weight:600; font-size:0.86rem; }
.phrase-item .pi-meta { font-size:0.68rem; color:var(--muted); }

/* \u2500\u2500 Panneau Partager / Exporter \u2500\u2500 */
.check-row {
  display:flex; align-items:center; gap:9px; padding:6px 8px;
  border-radius:6px; cursor:pointer; font-size:0.78rem; color:var(--text);
  user-select:none; transition:background 0.15s ease;
}
.check-row:hover { background:var(--gold-a07); }
.check-row input[type=checkbox] { accent-color:var(--gold); width:16px; height:16px; flex-shrink:0; cursor:pointer; }
.check-row .cr-meta { font-size:0.64rem; color:var(--muted); margin-left:auto; flex-shrink:0; }

.check-group-title {
  font-size:0.66rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
  color:var(--muted); margin:10px 0 4px; padding-left:2px;
}
.check-group-title:first-child { margin-top:0; }

.phrase-check-list {
  max-height:260px; overflow-y:auto; border:1px solid var(--border);
  border-radius:8px; padding:6px;
}
.phrase-check-list::-webkit-scrollbar { width:4px; }
.phrase-check-list::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

.share-actions { display:flex; gap:8px; }
.share-btn-primary {
  flex:1; padding:11px; border-radius:8px; border:1.5px solid var(--gold);
  background:var(--gold-a10); color:var(--gold); font-family:inherit;
  font-size:0.8rem; font-weight:700; cursor:pointer; transition:all 0.18s ease;
}
.share-btn-primary:hover { background:var(--gold-a25); }
.share-status { font-size:0.72rem; color:var(--green); text-align:center; min-height:16px; word-break:break-all; }

.phrase-title {
  font-family:'Fraunces', Georgia, serif; font-size:0.95rem; color:var(--text);
  text-align:center; margin-bottom:4px;
}
.staff-wrap { width:100%; overflow-x:auto; }
.staff-wrap svg { display:block; margin:0 auto; }


/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   CLAVIER DE PIANO \u2014 s\xE9lecteur de transposition
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */
.keyboard-container { width:100%; }
.kb-nav { display:flex; align-items:center; gap:6px; width:100%; }
.kb-nav-btn {
  flex-shrink:0; width:26px; height:42px; border-radius:6px;
  border:1.5px solid var(--border); background:var(--card); color:var(--muted);
  font-size:1.1rem; cursor:pointer; transition:all 0.18s ease; padding:0;
}
.kb-nav-btn:hover { border-color:var(--gold-dim); color:var(--text); }

.kb-scroll {
  flex:1; min-width:0; overflow-x:auto; overflow-y:hidden;
  scroll-behavior:smooth; -webkit-overflow-scrolling:touch;
  border-radius:8px; outline:none;
}
.kb-scroll::-webkit-scrollbar { height:5px; }
.kb-scroll::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }
.kb-scroll:focus-visible { box-shadow:0 0 0 2px var(--gold-a25); }

.kb-inner { position:relative; height:156px; }
.kb-buttons { position:relative; height:34px; }
.kb-keys { position:relative; height:120px; }

.kb-play-btn {
  position:absolute; top:2px; width:22px; height:22px; border-radius:50%;
  transform:translateX(-50%);
  border:1.5px solid var(--border); background:var(--surface); color:var(--muted);
  font-size:0.6rem; display:flex; align-items:center; justify-content:center;
  cursor:pointer; transition:transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
  padding:0; line-height:1;
}
.kb-play-btn:hover { border-color:var(--gold-dim); color:var(--gold); transform:translateX(-50%) scale(1.15); }
.kb-play-btn.origin {
  border-color:var(--gold); background:var(--gold-a25); color:var(--gold);
  font-weight:700; transform:translateX(-50%) scale(1.3);
  box-shadow:0 0 8px var(--gold-a50);
}
.kb-play-btn.origin:hover { transform:translateX(-50%) scale(1.4); }

.pkey-white {
  position:absolute; top:0; height:120px;
  background:#f6f3ed; border:1px solid #2a2a2a; border-radius:0 0 5px 5px;
  box-sizing:border-box; cursor:pointer; transition:background 0.1s ease;
}
.pkey-white:hover { background:#e9e3d6; }
.pkey-white.playing { background:#f0c46a; }
.pkey-black {
  position:absolute; top:0; height:74px; z-index:2;
  background:#201f1f; border-radius:0 0 4px 4px;
  cursor:pointer; transition:background 0.1s ease;
}
.pkey-black:hover { background:#3a3836; }
.pkey-black.playing { background:#a8872a; }

.kb-marker {
  position:absolute; top:3px; width:11px; height:11px; border-radius:50%;
  background:var(--gold); transform:translateX(-50%); z-index:4;
  box-shadow:0 0 8px var(--gold-a50); pointer-events:none;
}

/* Picker famille/qualit\xE9 affich\xE9 en ligne (onglet \xC9coute) */
.inline-picker-row { display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }
.inline-picker-row .family-btn { flex:0 0 auto; min-width:64px; }


.ear { --accent: var(--gold); background: var(--bg); color: var(--text); font-family: inherit; border-radius: 14px; padding: 18px 12px 28px; display: block; }
.ear .app { margin: 0 auto; }
.ear [hidden] { display: none !important; }
.ear .score-host { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 8px; overflow-x: auto; position: relative; }
.ear .score-host .abc-play-btn { align-self: center; }
.ear .abc-play-btn { padding: 8px 18px; border: 1.5px solid var(--gold); border-radius: 8px; background: transparent; color: var(--gold); font: inherit; font-weight: 600; cursor: pointer; }
.ear .abc-play-btn:hover { background: var(--gold-a12); }
.ear button:focus-visible, .ear select:focus-visible, .ear input:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
.ear .kb-inner { height: 168px; }
.ear .kb-buttons { height: 48px; }
.ear .kb-play-btn { top: 12px; }
.ear .kb-scroll { padding-top: 2px; }
.ear[data-theme="dark"] { --muted: #a9a2b8; }
.ear[data-theme="light"] { --gold: #86610a; --gold-dim: #6e500a; --green: #1d7142; --muted: #665c4e; }
.ear .quality-btn .qs { opacity: 1; }
.ear .quality-btn.active .qs { color: inherit; }
.ear .name-input { width: 100%; padding: 10px 12px; border: 1.5px solid var(--border); border-radius: 8px; background: var(--card); color: var(--text); font: inherit; }
.ear .name-input:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
.ear .import-note { font-size: .74rem; color: var(--muted); }
`;var jt=[{genre:"classique",title:"Fr\xE8re Jacques",featured:"Secondes majeures (phrase r\xE9p\xE9t\xE9e telle quelle)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Au clair de la lune",featured:"R\xE9p\xE9tition, secondes, blanche",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"half",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["C4"],d:"half",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Ah ! vous dirai-je, Maman (Twinkle Twinkle)",featured:"Quinte juste, blanches",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"half",dots:0},{n:["F4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Ode \xE0 la joie \u2014 Beethoven, Symphonie n\xB09",featured:"Mouvement conjoint (noires)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Symphonie n\xB05 \u2014 Beethoven",featured:"Motif du destin, r\xE9p\xE9t\xE9 un ton plus bas",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["D#4"],d:"half",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["D4"],d:"half",dots:0}]]}},{genre:"classique",title:"Marche nuptiale \u2014 Wagner",featured:"Quarte juste, phrase r\xE9p\xE9t\xE9e",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"F\xFCr Elise \u2014 Beethoven",featured:"Double-croches en continu, note finale plus longue",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E5"],d:"sixteenth",dots:0},{n:["D#5"],d:"sixteenth",dots:0},{n:["E5"],d:"sixteenth",dots:0},{n:["D#5"],d:"sixteenth",dots:0},{n:["E5"],d:"sixteenth",dots:0},{n:["B4"],d:"sixteenth",dots:0},{n:["D5"],d:"sixteenth",dots:0},{n:["C5"],d:"sixteenth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"La Marseillaise",featured:"Anacrouse (croche) puis quatre noires r\xE9guli\xE8res",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"eighth",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Yankee Doodle (traditionnel am\xE9ricain)",featured:"Mouvement conjoint et arp\xE8ge",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Auld Lang Syne (traditionnel \xE9cossais)",featured:"Anacrouse puis mouvement conjoint",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Menuet en Sol \u2014 Bach (BWV Anh.114)",featured:"Arp\xE8ge puis mouvement conjoint",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Hallelujah \u2014 Haendel",featured:"R\xE9p\xE9tition puis seconde",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Greensleeves (traditionnel anglais)",featured:"Tierce mineure puis mouvement conjoint",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A3"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["A3"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Dans l\\\\\\'antre du roi de la montagne \u2014 Grieg",featured:"Motif r\xE9p\xE9t\xE9 un ton plus haut (s\xE9quence)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D4"],d:"quarter",dots:0},{n:["D#4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Pr\xE9lude n\xB01 en Do majeur \u2014 Bach (Clavier bien temp\xE9r\xE9)",featured:"Arp\xE8ge continu",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 11.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["D4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0}],[{n:["F#4"],d:"quarter",dots:1},{n:["G#4"],d:"eighth",dots:0},{n:["A4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 137.5 \u2014 Bach",featured:"sauts, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["G5"],d:"quarter",dots:0}],[{n:["E5"],d:"quarter",dots:1},{n:["D5"],d:"eighth",dots:0},{n:["C5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 14.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 128.5 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0}],[{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["E5"],d:"sixteenth",dots:0},{n:["F5"],d:"sixteenth",dots:0}]]}},{genre:"classique",title:"Choral BWV 244.32 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A#4"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["F5"],d:"quarter",dots:0},{n:["F5"],d:"quarter",dots:0},{n:["D#5"],d:"eighth",dots:0},{n:["D5"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 185.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 62.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 121.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 116.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C#5"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0}],[{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C#5"],d:"eighth",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["E5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 104.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0}],[{n:["C#5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 197.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0}],[{n:["B4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G#4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 124.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C#5"],d:"quarter",dots:0},{n:["C#5"],d:"quarter",dots:0}],[{n:["D#5"],d:"quarter",dots:0},{n:["D#5"],d:"quarter",dots:0},{n:["E5"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 164.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A#4"],d:"quarter",dots:0}],[{n:["A#4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 149.7 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C5"],d:"quarter",dots:0}],[{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0},{n:["E4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 38.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"half",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0}],[{n:["C5"],d:"quarter",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 115.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 40.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0}],[{n:["F5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["E5"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 174.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0}],[{n:["C#5"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 102.7 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["D#4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 26.6 \u2014 Bach",featured:"mvt conjoint, noires r\xE9guli\xE8res (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}],[{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 140.7 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D#4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:1},{n:["A#4"],d:"eighth",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0},{n:["C5"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 245.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0}],[{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 146.8 \u2014 Bach",featured:"mvt conjoint, noires r\xE9guli\xE8res (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 248.17 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C5"],d:"quarter",dots:0}],[{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 24.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0}],[{n:["A4"],d:"quarter",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["C5"],d:"sixteenth",dots:0},{n:["D5"],d:"sixteenth",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"sixteenth",dots:0},{n:["A4"],d:"sixteenth",dots:0},{n:["A#4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 85.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0}],[{n:["C5"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["D#5"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 114.7 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A#4"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 177.5 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["A#4"],d:"sixteenth",dots:0},{n:["C5"],d:"sixteenth",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 33.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C5"],d:"quarter",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["E5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 13.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["D#5"],d:"eighth",dots:0},{n:["F5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 52.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["F4"],d:"quarter",dots:0}],[{n:["F4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 187.7 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["A#4"],d:"quarter",dots:0}],[{n:["A4"],d:"half",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 172.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["F4"],d:"quarter",dots:0}],[{n:["C5"],d:"eighth",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 153.9 \u2014 Bach",featured:"mvt conjoint, noires r\xE9guli\xE8res (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}],[{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 92.9 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["F#4"],d:"eighth",dots:0},{n:["G#4"],d:"eighth",dots:0}],[{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 96.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["F4"],d:"quarter",dots:0}],[{n:["F4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 165.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["F#4"],d:"quarter",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 45.7 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"quarter",dots:0}],[{n:["G#4"],d:"quarter",dots:0},{n:["F#4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 154.8 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0}],[{n:["C#5"],d:"quarter",dots:0},{n:["C#5"],d:"quarter",dots:0},{n:["D5"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 159.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["D#4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0}],[{n:["G4"],d:"quarter",dots:0},{n:["G#4"],d:"quarter",dots:0},{n:["A#4"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 110.7 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"eighth",dots:0},{n:["C#5"],d:"eighth",dots:0}],[{n:["D5"],d:"quarter",dots:0},{n:["C#5"],d:"quarter",dots:0},{n:["B4"],d:"quarter",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["C#5"],d:"eighth",dots:0}]]}},{genre:"classique",title:"Choral BWV 112.5 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}],[{n:["B4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 245.15 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0}],[{n:["D5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["B4"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 57.8 \u2014 Bach",featured:"sauts, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["A#4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0},{n:["F5"],d:"quarter",dots:0}],[{n:["D5"],d:"quarter",dots:1},{n:["C5"],d:"eighth",dots:0},{n:["A#4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 78.7 \u2014 Bach",featured:"sauts, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0}],[{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 123.6 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (3/2)",desc:{clef:"treble",key:0,time:[3,2],measures:[[{n:["D5"],d:"half",dots:0},{n:["D5"],d:"half",dots:0},{n:["D5"],d:"half",dots:0}],[{n:["C#5"],d:"half",dots:1},{n:["B4"],d:"quarter",dots:0},{n:["A4"],d:"half",dots:0}]]}},{genre:"classique",title:"Choral BWV 10.7 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D5"],d:"half",dots:0},{n:["F5"],d:"half",dots:0}],[{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 158.4 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (4/4, anacrouse)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["B4"],d:"quarter",dots:0}],[{n:["A#4"],d:"quarter",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["C#5"],d:"eighth",dots:0},{n:["D5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 43.11 \u2014 Bach",featured:"mvt conjoint, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0}],[{n:["B4"],d:"quarter",dots:1},{n:["C5"],d:"eighth",dots:0},{n:["D5"],d:"quarter",dots:0}]]}},{genre:"classique",title:"Choral BWV 122.6 \u2014 Bach",featured:"sauts, rythme vari\xE9 (3/4)",desc:{clef:"treble",key:0,time:[3,4],measures:[[{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}],[{n:["D5"],d:"quarter",dots:1},{n:["C5"],d:"eighth",dots:0},{n:["A#4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Riff rock (pentatonique mineur) \u2014 original",featured:"Croches, gamme pentatonique",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A3"],d:"eighth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["D4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Walking bass jazz (ii-V-I) \u2014 original",featured:"Noires r\xE9guli\xE8res, arp\xE8ges d\\\\\\'accords",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D3"],d:"quarter",dots:0},{n:["F3"],d:"quarter",dots:0},{n:["A3"],d:"quarter",dots:0},{n:["C4"],d:"quarter",dots:0},{n:["G3"],d:"quarter",dots:0},{n:["B3"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Lick blues \u2014 original",featured:"Pentatonique + note bleue (quinte diminu\xE9e)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"eighth",dots:0},{n:["D#4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A#4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["A#4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Groove funk syncop\xE9 \u2014 original",featured:"Rythme syncop\xE9 (croches et double-croches)",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"sixteenth",dots:0},{n:["E4"],d:"sixteenth",dots:0},{n:["D4"],d:"eighth",dots:0},{n:["E4"],d:"sixteenth",dots:0},{n:["G4"],d:"sixteenth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Motif pop \u2014 original",featured:"Gamme majeure, sauts et degr\xE9s conjoints",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["F4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Riff rock (power chords) \u2014 original",featured:"Croches, quintes altern\xE9es",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E3"],d:"eighth",dots:0},{n:["B3"],d:"eighth",dots:0},{n:["E3"],d:"eighth",dots:0},{n:["B3"],d:"eighth",dots:0},{n:["A3"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["A3"],d:"eighth",dots:0},{n:["E3"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Ballade rock (arp\xE8ge majeur) \u2014 original",featured:"Noires, arp\xE8ge ample",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["E5"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Riff hard rock (gamme mineure) \u2014 original",featured:"Croches, gamme mineure naturelle",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F#4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Groove reggae (arp\xE8ge simplifi\xE9) \u2014 original",featured:"Arp\xE8ge r\xE9p\xE9t\xE9, croches",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Motif soul / R&B \u2014 original",featured:"Sixte majeure, mouvement en vagues",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["D4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Bossa nova (arp\xE8ge mineur 7) \u2014 original",featured:"Croches, accord mineur septi\xE8me",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["A3"],d:"eighth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["A3"],d:"eighth",dots:0},{n:["G3"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Riff metal (gamme phrygienne) \u2014 original",featured:"Double-croches rapides",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E4"],d:"sixteenth",dots:0},{n:["F4"],d:"sixteenth",dots:0},{n:["G4"],d:"sixteenth",dots:0},{n:["A4"],d:"sixteenth",dots:0},{n:["B4"],d:"sixteenth",dots:0},{n:["C5"],d:"sixteenth",dots:0},{n:["D5"],d:"sixteenth",dots:0},{n:["E5"],d:"sixteenth",dots:0}]]}},{genre:"moderne",title:"Riff punk (quintes rapides) \u2014 original",featured:"Croches, quintes altern\xE9es aigu\xEBs",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["E5"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["E5"],d:"eighth",dots:0},{n:["B4"],d:"eighth",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["D5"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Groove disco (arp\xE8ge dansant) \u2014 original",featured:"Croches r\xE9guli\xE8res, arp\xE8ge majeur",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["E5"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Boucle m\xE9lodique hip-hop \u2014 original",featured:"Rythme syncop\xE9, pentatonique mineur",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"eighth",dots:0},{n:["D#4"],d:"sixteenth",dots:0},{n:["F4"],d:"sixteenth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["D#4"],d:"sixteenth",dots:0},{n:["F4"],d:"sixteenth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0}]]}},{genre:"moderne",title:"Motif gospel (7e de dominante) \u2014 original",featured:"Arp\xE8ge, couleur gospel",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0},{n:["C5"],d:"quarter",dots:0},{n:["A#4"],d:"quarter",dots:0},{n:["G4"],d:"quarter",dots:0},{n:["E4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Montuno latin jazz (mode dorien) \u2014 original",featured:"Croches syncop\xE9es, mode dorien",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["D4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["C5"],d:"eighth",dots:0},{n:["A4"],d:"eighth",dots:0},{n:["F4"],d:"eighth",dots:0},{n:["D4"],d:"eighth",dots:0},{n:["C4"],d:"quarter",dots:0}]]}},{genre:"moderne",title:"Motif \xE9lectro minimaliste \u2014 original",featured:"Croches r\xE9guli\xE8res, motif r\xE9p\xE9t\xE9",desc:{clef:"treble",key:0,time:[4,4],measures:[[{n:["C4"],d:"eighth",dots:0},{n:["D4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["G4"],d:"eighth",dots:0},{n:["E4"],d:"eighth",dots:0},{n:["D4"],d:"eighth",dots:0},{n:["C4"],d:"eighth",dots:0},{n:["A3"],d:"eighth",dots:0}]]}}];var se=[{key:"seconde",label:"Seconde",steps:1,qualities:[{name:"Seconde mineure",qualityLabel:"Mineure",short:"m2",semitones:1},{name:"Seconde majeure",qualityLabel:"Majeure",short:"M2",semitones:2}]},{key:"tierce",label:"Tierce",steps:2,qualities:[{name:"Tierce mineure",qualityLabel:"Mineure",short:"m3",semitones:3},{name:"Tierce majeure",qualityLabel:"Majeure",short:"M3",semitones:4}]},{key:"quarte",label:"Quarte",steps:3,qualities:[{name:"Quarte juste",qualityLabel:"Juste",short:"P4",semitones:5}]},{key:"triton",label:"Triton",steps:3,qualities:[{name:"Triton",qualityLabel:"Triton",short:"A4",semitones:6}]},{key:"quinte",label:"Quinte",steps:4,qualities:[{name:"Quinte juste",qualityLabel:"Juste",short:"P5",semitones:7}]},{key:"sixte",label:"Sixte",steps:5,qualities:[{name:"Sixte mineure",qualityLabel:"Mineure",short:"m6",semitones:8},{name:"Sixte majeure",qualityLabel:"Majeure",short:"M6",semitones:9}]},{key:"septieme",label:"Septi\xE8me",steps:6,qualities:[{name:"Septi\xE8me mineure",qualityLabel:"Mineure",short:"m7",semitones:10},{name:"Septi\xE8me majeure",qualityLabel:"Majeure",short:"M7",semitones:11}]},{key:"octave",label:"Octave",steps:7,qualities:[{name:"Unisson",qualityLabel:"Unisson",short:"P1",semitones:0,steps:0},{name:"Octave",qualityLabel:"Octave",short:"P8",semitones:12}]}],xe=se.flatMap(d=>d.qualities.map(n=>({...n,family:d.key,steps:n.steps??d.steps}))),pr=["Do","Do\u266F / R\xE9\u266D","R\xE9","R\xE9\u266F / Mi\u266D","Mi","Fa","Fa\u266F / Sol\u266D","Sol","Sol\u266F / La\u266D","La","La\u266F / Si\u266D","Si"],Te=pr.map((d,n)=>({name:d,label:d,pc:n})),oe=[{key:"maj",label:"Gamme majeure",intervals:[0,2,4,5,7,9,11,12],steps:[0,1,2,3,4,5,6,7]},{key:"min",label:"Gamme mineure naturelle",intervals:[0,2,3,5,7,8,10,12],steps:[0,1,2,3,4,5,6,7]},{key:"harmin",label:"Gamme mineure harmonique",intervals:[0,2,3,5,7,8,11,12],steps:[0,1,2,3,4,5,6,7]},{key:"majarp",label:"Arp\xE8ge majeur",intervals:[0,4,7,12],steps:[0,2,4,7]},{key:"minarp",label:"Arp\xE8ge mineur",intervals:[0,3,7,12],steps:[0,2,4,7]},{key:"dimarp",label:"Arp\xE8ge diminu\xE9",intervals:[0,3,6,9],steps:[0,2,4,6]},{key:"augarp",label:"Arp\xE8ge augment\xE9",intervals:[0,4,8,12],steps:[0,2,4,7]}],Fe=[{key:"asc",label:"Ascendant"},{key:"desc",label:"Descendant"}],ot=["C","D","E","F","G","A","B"],Rt=[0,2,4,5,7,9,11],hr={"-2":"bb","-1":"b",0:"",1:"#",2:"x"},gr=[[["C",0]],[["D",-1],["C",1]],[["D",0]],[["E",-1],["D",1]],[["E",0]],[["F",0]],[["F",1],["G",-1]],[["G",0]],[["A",-1],["G",1]],[["A",0]],[["B",-1],["A",1]],[["B",0]]],mr=(d,n,c)=>(c+1)*12+Rt[d]+n;function br(d,n,c,t,g){let v=(Math.floor((c-n)/12)-1)*7+d+t,x=(v%7+7)%7,m=Math.floor(v/7),P=c+g-((m+1)*12+Rt[x]);return{name:`${ot[x]}${hr[P]??"?"}${m}`,alter:P}}function Vt(d,n){let c=null;for(let[t,g]of gr[(d%12+12)%12]){let y=ot.indexOf(t),v=n.map(m=>br(y,g,d,m.steps,m.semis)),x=Math.max(Math.abs(g),...v.map(m=>Math.abs(m.alter)));if((!c||x<c.worst)&&(c={worst:x,names:v.map(m=>m.name)}),x<=1)break}return c.names}function zt(d,n=!1){let c=(d%12+12)%12,t=Math.floor(d/12)-1;return(n?["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]:["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"])[c]+t}function nt(d){let n=/^([A-G])(##|bb|x|#|b)?(-?\d)$/.exec(d),c={"":0,"#":1,b:-1,x:2,"##":2,bb:-2}[n[2]??""];return mr(ot.indexOf(n[1]),c,Number(n[3]))}var vr=d=>Math.min(...d)<57&&Math.max(...d)<=67?"bass":"treble";function ke(d,{mode:n="montant",noteSec:c=.6,chordSec:t=1.9,long:g=!1,width:y=320}={}){let v=d.map(nt),x=d.map((A,$)=>({n:A,m:v[$]})).sort((A,$)=>A.m-$.m).map(A=>A.n),m=vr(v);if(n==="simultane")return{clef:m,key:0,time:null,bpm:Math.round(120/t*10)/10,width:y,scale:1.2,measures:[[{n:x,d:"half",dots:0}]]};let ne=n==="descendant"?x.slice().reverse():x,P=g?"half":"quarter",We=Math.round((g?120:60)/c*10)/10;return{clef:m,key:0,time:null,bpm:We,width:y,scale:1.2,measures:[ne.map(A=>({n:[A],d:P,dots:0}))]}}function dt(d,n){return Vt(d,[{steps:0,semis:0},{steps:n.steps,semis:n.semitones}])}function it(d,n){return Vt(d,n.intervals.map((c,t)=>({steps:n.steps[t],semis:c})))}function $t(d){let n=d.measures.flatMap(c=>Array.isArray(c)?c:c.events).flatMap(c=>c.n??[]).map(nt);return[Math.min(...n),Math.max(...n)]}function Ot(d,n,c={}){return{...d,bpm:Math.round(100*(1+n/100)*10)/10,...c}}var lt=d=>nt(d.measures.flatMap(n=>Array.isArray(n)?n:n.events).find(n=>n.n).n[0]);function Ht(d){let n;try{n=JSON.parse(d)}catch{throw new Error("Ce fichier n\u2019est pas un document Scorsaire (texte illisible).")}let c=n?.format==="scorsaire-note"?n.work:n,t;try{t=Lt(c)}catch(g){throw new Error(`Document Scorsaire non reconnu : ${g.message}`)}if(!t.movements.length)throw new Error("Ce document ne contient aucun mouvement.");return t.movements.map((g,y)=>({title:(g.title||"").trim()||(t.title?`${t.title} \u2014 ${y+1}`:`Mouvement ${y+1}`),measures:g.masterbars.length,noteDoc:Nt({...t,movements:[g]})}))}var Pe=36,Ie=96,yr=["C","C\u266F","D","D\u266F","E","F","F\u266F","G","G\u266F","A","A\u266F","B"],ct=d=>yr[d%12]+(Math.floor(d/12)-1),G=(d,n)=>Math.floor(Math.random()*(n-d+1))+d,Qt="solfege_oreille_import",xr=[{key:"classique",label:"Classique"},{key:"moderne",label:"Actuelle"},{key:"importe",label:"Mes phrases"}],kr=`
<div class="ear" id="ear" data-theme="dark"><div class="app">
  <div class="top-bar"><div class="header"><h1>Jeu d\u2019oreille</h1><p>Reconnaissance d\u2019intervalles, de gammes et de phrases</p>
    <div class="engine-badge" id="engineBadge" role="status"><span class="dot"></span><span id="engineLabel">Son pr\xEAt</span></div></div></div>
  <div class="tabs" id="tabs" role="tablist">
    <button class="tab-btn active" data-tab="interval" role="tab">Intervalle</button>
    <button class="tab-btn" data-tab="phrase" role="tab">Gamme / Arp\xE8ge</button>
    <button class="tab-btn" data-tab="works" role="tab">Phrase</button>
  </div>

  <div class="tab-panel active" id="panelInterval">
    <div class="subtabs2" id="intervalSubtabs"><button class="subtab2-btn active" data-sub="ecoute">\xC9coute</button><button class="subtab2-btn" data-sub="ident">Identification</button></div>
    <div class="subpanel active" id="intervalEcoutePanel">
      <div class="panel"><div class="panel-label">Intervalle \xE0 explorer</div>
        <div class="inline-picker-row" id="ecFamilyCol"></div><div class="inline-picker-row" id="ecQualityCol"></div></div>
      <div class="panel"><div class="panel-label">Mode d\u2019\xE9coute</div>
        <div class="mode-group" id="ecModeGroup" style="margin-top:8px;">
          <button class="mode-btn active" data-mode="montant">\u2191 Montant</button><button class="mode-btn" data-mode="descendant">\u2193 Descendant</button><button class="mode-btn" data-mode="simultane">\u21C5 Simultan\xE9</button></div></div>
      <div class="panel"><div class="phrase-title" id="ecTitle"></div>
        <div class="score-host" id="ecStaffWrap"></div><button class="abc-play-btn" id="ecPlay" type="button">\u25B6 \xC9couter</button>
        <div class="keyboard-container" id="keyboardInterval" style="margin-top:8px;"></div></div>
    </div>
    <div class="subpanel" id="intervalIdentPanel">
      <div class="panel"><div class="panel-header"><div class="panel-label">Mode d\u2019\xE9coute</div>
        <button class="hamburger-btn" id="hamburgerBtn" title="Param\xE8tres" aria-label="Ouvrir les param\xE8tres"><span></span><span></span><span></span></button></div>
        <div class="mode-group" id="modeGroup">
          <button class="mode-btn active" data-mode="montant"><span>\u2191</span> Montant</button><button class="mode-btn" data-mode="descendant"><span>\u2193</span> Descendant</button><button class="mode-btn" data-mode="simultane"><span>\u21C5</span> Simultan\xE9</button>
          <button class="reset-inline-btn" id="resetBtn">\u21BA Score</button></div></div>
      <div class="panel play-wrap play-panel"><button class="play-btn" id="playBtn" aria-label="\xC9couter l\u2019intervalle"><span class="note-icon">\u266A</span></button><div class="play-label">\xC9couter</div>
        <div class="score-area"><span>Correct :</span><span class="score-val" id="scoreVal">0 / 0</span><span class="score-pct" id="scorePct"></span></div><div class="feedback" id="feedback" role="status"></div></div>
      <div class="panel" style="padding:20px 16px;"><div class="panel-label">Quel est cet intervalle ?</div><div class="answers-grid" id="answersGrid"></div></div>
      <div class="keyboard-container" id="keyboardIntervalIdent"></div>
    </div>
  </div>

  <div class="tab-panel" id="panelPhrase">
    <div class="subtabs2" id="gaSubtabs"><button class="subtab2-btn active" data-sub="ecoute">\xC9coute</button><button class="subtab2-btn" data-sub="ident">Identification</button></div>
    <div class="subpanel active" id="gaEcoutePanel">
      <div class="picker-row"><button class="phrase-picker-btn" id="phrasePickerBtn" style="flex:1;">\u{1F3B5} Choisir une gamme / un arp\xE8ge\u2026</button>
        <button class="hamburger-btn" id="phraseSettingsBtn" title="R\xE9glages" aria-label="R\xE9glages"><span></span><span></span><span></span></button></div>
      <div class="mode-group" id="phraseDirGroup" style="margin-top:8px;"><button class="mode-btn active" data-dir="asc">\u2191 Ascendant</button><button class="mode-btn" data-dir="desc">\u2193 Descendant</button></div>
      <div class="panel" id="phrasePlayerPanel" style="display:none;"><div class="phrase-title" id="phraseTitle"></div>
        <div class="score-host" id="staffWrap"></div><button class="abc-play-btn" id="gaPlay" type="button">\u25B6 \xC9couter</button>
        <div class="keyboard-container" id="keyboardGA" style="margin-top:8px;"></div>
        <div class="setting-block" style="margin-top:10px;"><label for="phraseSpeedRangeA">Vitesse : <strong id="phraseSpeedValA">0 %</strong></label>
          <input type="range" id="phraseSpeedRangeA" min="-50" max="50" step="5" value="0" class="gap-slider speed-slider"></div>
        <button class="mini-btn" id="randomRootBtn" style="margin-top:10px; padding:10px;">\u{1F3B2} Autre fondamentale (al\xE9atoire)</button></div>
    </div>
    <div class="subpanel" id="gaIdentPanel">
      <div class="panel"><div class="panel-header"><div class="panel-label">Identification \u2014 gamme ou accord</div>
        <button class="hamburger-btn" id="gaIdentSettingsBtn" title="R\xE9glages" aria-label="R\xE9glages"><span></span><span></span><span></span></button></div>
        <div class="mode-group" id="gaModeGroup"><button class="mode-btn active" data-mode="montant">\u2191 Montant</button><button class="mode-btn" data-mode="descendant">\u2193 Descendant</button><button class="mode-btn" data-mode="simultane">\u21C5 Simultan\xE9</button>
          <button class="reset-inline-btn" id="gaResetBtn">\u21BA Score</button></div></div>
      <div class="panel play-wrap play-panel"><button class="play-btn" id="gaPlayBtn" aria-label="\xC9couter la gamme ou l\u2019accord"><span class="note-icon">\u266A</span></button><div class="play-label">\xC9couter</div>
        <div class="score-area"><span>Correct :</span><span class="score-val" id="gaScoreVal">0 / 0</span><span class="score-pct" id="gaScorePct"></span></div><div class="feedback" id="gaFeedback" role="status"></div></div>
      <div class="panel" style="padding:20px 16px;"><div class="panel-label">Quelle gamme ou quel accord ?</div><div class="answers-grid" id="gaAnswersGrid"></div></div>
      <div class="keyboard-container" id="keyboardGAIdent"></div>
    </div>
  </div>

  <div class="tab-panel" id="panelWorks">
    <div class="subtabs2" id="worksSubtabs"><button class="subtab2-btn active" data-sub="ecoute">\xC9coute</button><button class="subtab2-btn" data-sub="ident">Identification</button></div>
    <div class="subpanel active" id="worksEcoutePanel">
      <div class="picker-row"><button class="phrase-picker-btn" id="worksPickerBtn" style="flex:1;">\u{1F3B5} Choisir une phrase\u2026</button>
        <button class="hamburger-btn" id="createBtn" title="Cr\xE9er une phrase" aria-label="Cr\xE9er une phrase">\u2795</button>
        <button class="hamburger-btn" id="importBtn" title="Importer un document Scorsaire" aria-label="Importer un document Scorsaire">\u{1F4E5}</button>
        <input type="file" id="importFile" accept=".scorsaire,.json,application/json" hidden></div>
      <div class="import-note" id="importNote" role="status"></div>
      <div class="panel" id="worksPlayerPanel" style="display:none;"><div class="phrase-title" id="worksTitle"></div>
        <div class="score-host" id="worksStaffWrap"></div><button class="abc-play-btn" id="worksPlay" type="button">\u25B6 \xC9couter</button>
        <div class="keyboard-container" id="keyboardWorks" style="margin-top:8px;"></div>
        <div class="setting-block" style="margin-top:10px;"><label for="phraseSpeedRangeB">Vitesse : <strong id="phraseSpeedValB">0 %</strong></label>
          <input type="range" id="phraseSpeedRangeB" min="-50" max="50" step="5" value="0" class="gap-slider speed-slider"></div></div>
    </div>
    <div class="subpanel" id="worksIdentPanel">
      <div class="panel"><div class="panel-header"><div class="panel-label">Identification \u2014 phrase m\xE9lodique</div>
        <button class="hamburger-btn" id="wkIdentSettingsBtn" title="R\xE9glages" aria-label="R\xE9glages"><span></span><span></span><span></span></button></div>
        <button class="reset-inline-btn" id="wkResetBtn" style="width:100%;">\u21BA R\xE9initialiser le score</button></div>
      <div class="panel play-wrap play-panel"><button class="play-btn" id="wkPlayBtn" aria-label="\xC9couter la phrase"><span class="note-icon">\u266A</span></button><div class="play-label">\xC9couter</div>
        <div class="score-area"><span>Correct :</span><span class="score-val" id="wkScoreVal">0 / 0</span><span class="score-pct" id="wkScorePct"></span></div><div class="feedback" id="wkFeedback" role="status"></div></div>
      <div class="panel" style="padding:20px 16px;"><div class="panel-label">Quelle est cette phrase ?</div><div class="answers-grid" id="wkAnswersGrid" style="grid-template-columns:1fr;"></div></div>
      <div class="keyboard-container" id="keyboardWorksIdent"></div>
    </div>
  </div>
</div>

<div class="drawer-overlay" id="nameSheetOverlay"><div class="drawer" id="nameSheet" role="dialog" aria-label="Nom de la phrase">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>Enregistrer la phrase</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body"><div class="setting-block"><label class="drawer-section-title" for="nameInput">Nom de la phrase</label><input type="text" class="name-input" id="nameInput" maxlength="80" autocomplete="off"></div>
    <div class="import-note" id="nameNote" role="status"></div><button class="mini-btn" id="nameSave" style="padding:12px; font-weight:600; border-color:var(--gold); color:var(--gold);">\u2713 Enregistrer dans \xAB Mes phrases \xBB</button></div></div></div>
<div class="drawer-overlay" id="worksSheetOverlay"><div class="drawer" id="worksSheet" style="max-height:75vh;" role="dialog" aria-label="Choisir une phrase">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>Choisir une phrase</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body" style="gap:10px;"><div class="tabs" id="worksGenreTabs"></div><div id="worksList" style="display:flex; flex-direction:column; gap:8px;"></div></div></div></div>
<div class="drawer-overlay" id="phraseSheetOverlay"><div class="drawer" id="phraseSheet" role="dialog" aria-label="Choisir une gamme ou un arp\xE8ge">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>Choisir une gamme / un arp\xE8ge</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body"><div class="drawer-columns-wrap"><div class="drawer-columns" id="phraseColumns"><div class="family-col" id="rootCol"></div><div class="quality-col" id="qualityColPhrase"></div><div class="family-col" id="dirCol"></div></div></div>
    <button class="mini-btn" id="generatePhraseBtn" style="padding:12px; font-size:0.82rem; font-weight:600; border-color:var(--gold); color:var(--gold);">Afficher la gamme / l\u2019arp\xE8ge</button></div></div></div>
<div class="drawer-overlay" id="phraseSettingsOverlay"><div class="drawer" id="phraseSettingsSheet" role="dialog" aria-label="R\xE9glages gamme et arp\xE8ge">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>R\xE9glages</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body"><div class="setting-block"><div class="drawer-section-title">Amplitude (fondamentale al\xE9atoire)</div>
    <div class="amplitude-row"><label for="phraseNoteMin">Note la plus basse</label><select class="note-select" id="phraseNoteMin"></select></div>
    <div class="amplitude-row"><label for="phraseNoteMax">Note la plus haute</label><select class="note-select" id="phraseNoteMax"></select></div>
    <div class="amplitude-warning" id="phraseAmpWarning">Aucune fondamentale valide dans cette plage pour la gamme/l\u2019accord choisi.</div></div>
    <div class="setting-block"><div class="drawer-section-title">Qualit\xE9s actives (identification)</div><div class="inline-picker-row" id="gaQualityPool"></div></div>
    <div class="setting-block"><label for="phraseSpeedRangeC">Vitesse de lecture : <strong id="phraseSpeedValC">0 %</strong></label><input type="range" id="phraseSpeedRangeC" min="-50" max="50" step="5" value="0" class="gap-slider speed-slider"></div></div></div></div>
<div class="drawer-overlay" id="wkIdentSettingsOverlay"><div class="drawer" id="wkIdentSettingsSheet" role="dialog" aria-label="R\xE9glages du questionnaire">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>R\xE9glages du QCM</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body"><div class="setting-block"><div class="drawer-section-title">Nombre de choix propos\xE9s</div><label for="wkChoiceRange">Choix : <strong id="wkChoiceVal">8</strong></label>
    <input type="range" id="wkChoiceRange" min="4" max="16" step="2" value="8" class="gap-slider"></div>
    <div class="setting-block"><div class="drawer-section-title">R\xE9pertoire interrog\xE9</div><div class="tabs" id="wkFilterTabs" style="border-bottom:none; flex-wrap:wrap;"></div></div></div></div></div>
<div class="drawer-overlay" id="drawerOverlay"><div class="drawer" id="drawer" role="dialog" aria-label="Param\xE8tres des intervalles">
  <div class="drawer-handle"></div><div class="drawer-head"><h2>Param\xE8tres</h2><button class="drawer-close" data-close aria-label="Fermer">\u2715</button></div>
  <div class="drawer-body"><div class="select-all-row"><button class="mini-btn" id="selectAllBtn">Tout s\xE9lectionner</button><button class="mini-btn" id="selectNoneBtn">Tout d\xE9s\xE9lectionner</button></div>
    <div class="drawer-columns-wrap"><div class="drawer-columns"><div class="family-col" id="familyCol"></div><div class="quality-col" id="qualityCol"></div>
      <div class="settings-col">
        <div class="setting-block"><div class="drawer-section-title">D\xE9lai entre les notes</div><label for="gapRange">Temps entre les deux notes : <strong id="gapVal">0.90 s</strong></label>
          <input type="range" id="gapRange" min="0.1" max="2.0" step="0.05" value="0.90" class="gap-slider"></div>
        <div class="setting-block"><div class="drawer-section-title">Avant la question suivante</div><label for="nextDelayRange">Pause apr\xE8s bonne r\xE9ponse : <strong id="nextDelayVal">0.80 s</strong></label>
          <input type="range" id="nextDelayRange" min="0.2" max="3.0" step="0.1" value="0.80" class="gap-slider"></div>
        <div class="setting-block"><div class="drawer-section-title">Amplitude</div>
          <div class="amplitude-row"><label for="noteMin">Note la plus basse</label><select class="note-select" id="noteMin"></select></div>
          <div class="amplitude-row"><label for="noteMax">Note la plus haute</label><select class="note-select" id="noteMax"></select></div>
          <div class="amplitude-warning" id="ampWarning">La plage est trop \xE9troite pour certains intervalles s\xE9lectionn\xE9s.</div></div>
      </div></div></div></div></div></div>`;function Tr(d){let n=document.createElement("div");d.innerHTML='<p class="crumb-row"><a class="crumb" href="#/">\u2190 Accueil</a></p>',d.append(n);let c=n.attachShadow({mode:"open"});c.innerHTML=`<style>${Wt}</style>${kr}`;let t=e=>c.getElementById(e),g=t("ear"),y=[],v=[],x=()=>document.documentElement.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),m=()=>{g.dataset.theme=x(),v.forEach(e=>e())},ne=new MutationObserver(m);ne.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let P=matchMedia("(prefers-color-scheme: dark)");P.addEventListener("change",m),y.push(()=>{ne.disconnect(),P.removeEventListener("change",m)}),g.dataset.theme=x();let We=()=>getComputedStyle(g).getPropertyValue("--text").trim()||"#000",A=t("engineBadge"),$=t("engineLabel");Pt({sounds:new URLSearchParams(location.search).get("sounds")||void 0,onStatus:e=>{/SoundFont indisponible|moteur léger/.test(e)?(A.className="engine-badge synth",$.textContent="Moteur l\xE9ger"):/SoundFont/.test(e)&&(A.className="engine-badge fluid",$.textContent="SoundFont")}}),y.push(()=>{ye()});let E=(e,r)=>It(e,r).catch(()=>{}),O=e=>{e.classList.remove("playing"),e.offsetWidth,e.classList.add("playing")},b=new Set([3,4]),de="tierce",ie=48,le=72,B=new Set(["montant"]),qe=.9,we=.8,ce=0,H=48,I=84,je=()=>{let e=[...B];return e[G(0,e.length-1)]},Re=new Set,Q=(e,r)=>{let a=setTimeout(()=>{Re.delete(a),e()},r);return Re.add(a),a};y.push(()=>Re.forEach(clearTimeout));function ue(e,r,a=300){e.innerHTML=Tt(r,{width:a,ink:We()});let s=e.querySelector("svg");s&&s.style.setProperty("--w",`${s.getAttribute("width")}px`)}let Ce=e=>Math.max(200,Math.min(520,(e.clientWidth||320)-8)),_t=new Set([1,3,6,8,10]),pe=(()=>{let e=[],r=0,a=0;for(let s=Pe;s<=Ie;s++)_t.has(s%12)?e.push({midi:s,x:a+48-15,w:30,black:!0}):(e.push({midi:s,x:r,w:48,black:!1}),a=r,r+=48);return{keys:e,total:r}})();function Ut(e,r){E({clef:"treble",time:null,bpm:80,measures:[[{n:[zt(e,!0)],d:"quarter"}]]}),r.classList.add("playing"),Q(()=>r.classList.remove("playing"),220)}function _(e,r){e.innerHTML=`<div class="kb-nav"><button class="kb-nav-btn" data-dir="-1" aria-label="Reculer">\u2039</button><div class="kb-scroll" tabindex="0" aria-label="Clavier de piano"><div class="kb-inner" style="width:${pe.total}px;"><div class="kb-buttons"></div><div class="kb-keys"></div></div></div><button class="kb-nav-btn" data-dir="1" aria-label="Avancer">\u203A</button></div>`;let a=e.querySelector(".kb-scroll"),s=e.querySelector(".kb-buttons"),o=e.querySelector(".kb-keys"),u=null;for(let i of[!1,!0])pe.keys.filter(l=>l.black===i).forEach(l=>{let h=document.createElement("div");h.className=i?"pkey-black":"pkey-white",h.style.left=`${l.x}px`,h.style.width=`${l.w}px`,h.setAttribute("role","button"),h.setAttribute("tabindex","-1"),h.setAttribute("aria-label",ct(l.midi)),h.addEventListener("click",()=>Ut(l.midi,h)),o.append(h)});let p={};pe.keys.forEach(i=>{let l=document.createElement("button");l.className="kb-play-btn",l.style.left=`${i.x+i.w/2}px`,l.textContent="\u266A",l.setAttribute("aria-label",`Jouer en partant de ${ct(i.midi)}`),l.addEventListener("click",()=>{u!=null&&r(i.midi-u)}),s.append(l),p[i.midi]=l}),e.querySelectorAll(".kb-nav-btn").forEach(i=>i.addEventListener("click",()=>a.scrollBy({left:Number(i.dataset.dir)*144,behavior:"smooth"}))),a.addEventListener("keydown",i=>{i.key==="ArrowLeft"&&(a.scrollBy({left:-96,behavior:"smooth"}),i.preventDefault()),i.key==="ArrowRight"&&(a.scrollBy({left:96,behavior:"smooth"}),i.preventDefault())});let f=i=>{let l=pe.keys.find(h=>h.midi===i);l&&(a.scrollLeft=Math.max(0,l.x+l.w/2-a.clientWidth/2))};return{setPhrase(i){u=i,s.style.display="",o.querySelectorAll(".kb-marker").forEach(l=>l.remove()),Object.values(p).forEach(l=>l.classList.remove("origin")),p[i]?.classList.add("origin"),f(i)},setIdentMarker(i){u=null,s.style.display="none",Object.values(p).forEach(h=>h.classList.remove("origin")),o.querySelectorAll(".kb-marker").forEach(h=>h.remove());let l=pe.keys.find(h=>h.midi===i);if(l){let h=document.createElement("div");h.className="kb-marker",h.style.left=`${l.x+l.w/2}px`,o.append(h),f(i)}}}}let U=(e,r)=>{let a=t(e),s=t(r);return{ov:a,open(){a.classList.add("open"),s.classList.add("open"),a.querySelector("[data-close]")?.focus()},close(){a.classList.remove("open"),s.classList.remove("open")}}},ut=U("drawerOverlay","drawer"),Ve=U("phraseSheetOverlay","phraseSheet"),ze=U("phraseSettingsOverlay","phraseSettingsSheet"),Ae=U("worksSheetOverlay","worksSheet"),pt=U("wkIdentSettingsOverlay","wkIdentSettingsSheet"),$e=U("nameSheetOverlay","nameSheet"),ht=[ut,Ve,ze,Ae,pt,$e];ht.forEach(e=>{e.ov.addEventListener("click",r=>{(r.target===e.ov||r.target.closest("[data-close]"))&&e.close()})});let gt=e=>{e.key==="Escape"&&ht.forEach(r=>r.close())};document.addEventListener("keydown",gt),y.push(()=>document.removeEventListener("keydown",gt));let he=(e,r,a,s)=>{e.innerHTML="",r.forEach(o=>{let u=document.createElement("button");u.className="family-btn"+(o===a?" active":""),u.textContent=o.label||o.name,u.setAttribute("aria-pressed",o===a),u.onclick=()=>s(o),e.append(u)})},Oe=(e,r,a,s,o,u)=>{let p=f=>{u(parseFloat(f)),r.textContent=a(parseFloat(f));let i=((f-s)/(o-s)*100).toFixed(1);e.style.background=`linear-gradient(to right, var(--gold) 0%, var(--gold) ${i}%, var(--border) ${i}%, var(--border) 100%)`};return e.addEventListener("input",f=>p(f.target.value)),p(e.value),p},Xt=e=>e.addEventListener("click",r=>{let a=r.target.closest(".mode-btn");if(!a)return;let s=a.dataset.mode;B.has(s)&&B.size===1||(B.has(s)?B.delete(s):B.add(s),["ecModeGroup","modeGroup","gaModeGroup"].forEach(o=>t(o).querySelectorAll(".mode-btn").forEach(u=>{u.classList.toggle("active",B.has(u.dataset.mode)),u.setAttribute("aria-pressed",B.has(u.dataset.mode))})))});["ecModeGroup","modeGroup","gaModeGroup"].forEach(e=>{Xt(t(e)),t(e).querySelectorAll(".mode-btn").forEach(r=>r.setAttribute("aria-pressed",B.has(r.dataset.mode)))}),c.querySelectorAll("#tabs .tab-btn").forEach(e=>e.addEventListener("click",()=>{let r={interval:"panelInterval",phrase:"panelPhrase",works:"panelWorks"};c.querySelectorAll("#tabs .tab-btn").forEach(a=>{a.classList.remove("active"),a.setAttribute("aria-selected","false")}),c.querySelectorAll(".tab-panel").forEach(a=>a.classList.remove("active")),e.classList.add("active"),e.setAttribute("aria-selected","true"),t(r[e.dataset.tab]).classList.add("active"),ye(),v.forEach(a=>a())}));let He=(e,r)=>{let a=t(e);a.querySelectorAll(".subtab2-btn").forEach(s=>s.addEventListener("click",()=>{a.querySelectorAll(".subtab2-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active"),Object.values(r).forEach(o=>t(o).classList.remove("active")),t(r[s.dataset.sub]).classList.add("active"),ye(),v.forEach(o=>o())}))};He("intervalSubtabs",{ecoute:"intervalEcoutePanel",ident:"intervalIdentPanel"}),He("gaSubtabs",{ecoute:"gaEcoutePanel",ident:"gaIdentPanel"}),He("worksSubtabs",{ecoute:"worksEcoutePanel",ident:"worksIdentPanel"});let Ee=(e,r)=>{e.innerHTML="";for(let a=Pe;a<=Ie;a++){let s=document.createElement("option");s.value=a,s.textContent=ct(a),e.append(s)}e.value=r},Qe=e=>{let r={ok:0,total:0};return{st:r,update(){t(e.val).textContent=`${r.ok} / ${r.total}`,t(e.pct).textContent=r.total?`${Math.round(r.ok/r.total*100)} %`:""},reset(){r.ok=r.total=0,this.update()}}},_e=e=>{let r=0;return{show(a,s){clearTimeout(r);let o=t(e);o.textContent=a,o.className=`feedback visible ${s}`},clear(){t(e).className="feedback"},later(a,s){clearTimeout(r),r=Q(a,s)},soon(a,s){r=Q(a,s)}}},mt="tierce",ge=0,W=null,bt="montant",Be=()=>se.find(e=>e.key===mt),Ue=()=>Be().qualities[ge],Jt=e=>xe.find(r=>r.semitones===e),Yt=_(t("keyboardInterval"),e=>W&&E({...W,transpose:e},{host:t("ecStaffWrap")}));function me(e=bt){bt=e;let r=Be(),a=Ue();t("ecTitle").textContent=`${r.label} \u2014 ${a.qualityLabel}`,W=ke(dt(60,Jt(a.semitones)),{mode:e,noteSec:qe,long:!0,width:Ce(t("ecStaffWrap"))}),ue(t("ecStaffWrap"),W,W.width),Yt.setPhrase(60)}function Xe(){he(t("ecFamilyCol"),se,Be(),e=>{mt=e.key,ge=0,Xe(),me()}),he(t("ecQualityCol"),Be().qualities.map(e=>({...e,label:e.qualityLabel})),{...Ue(),label:Ue().qualityLabel},()=>{}),[...t("ecQualityCol").children].forEach((e,r)=>{e.classList.toggle("active",r===ge),e.setAttribute("aria-pressed",r===ge),e.onclick=()=>{ge=r,Xe(),me()}})}t("ecPlay").onclick=()=>{me(je()),O(t("ecPlay")),E(W,{button:t("ecPlay"),host:t("ecStaffWrap")})},v.push(()=>{t("intervalEcoutePanel").classList.contains("active")&&t("panelInterval").classList.contains("active")&&me()});let Kt=_(t("keyboardIntervalIdent"),()=>{}),be=Qe({val:"scoreVal",pct:"scorePct"}),L=_e("feedback"),q=null,Se=!1,Me=e=>e.qualities.some(r=>b.has(r.semitones));function X(){t("answersGrid").querySelectorAll(".ans-btn").forEach(e=>e.classList.toggle("inactive",!b.has(Number(e.dataset.semitones))))}function j(){let e=Number(t("noteMin").value),r=Number(t("noteMax").value),a=t("ampWarning");return e>=r?(a.classList.add("visible"),a.textContent="La note basse doit \xEAtre inf\xE9rieure \xE0 la note haute.",!1):[...b].some(s=>e+s<=r)?(a.classList.remove("visible"),!0):(a.classList.add("visible"),a.textContent="La plage est trop \xE9troite pour les intervalles s\xE9lectionn\xE9s.",!1)}function Zt(){let e=t("answersGrid");e.innerHTML="",xe.forEach(r=>{let a=document.createElement("button");a.className="ans-btn",a.dataset.semitones=r.semitones,a.innerHTML=`${r.name}<span class="semitones">${r.short}</span>`,a.onclick=()=>tr(r.semitones,a),e.append(a)}),X()}function er(){return ke(dt(q.rootMidi,q.iv),{mode:q.mode,noteSec:qe,long:!0})}let vt=()=>{q&&(O(t("playBtn")),E(er()))};function Je(e){Se=!1,L.clear();let r=xe.filter(s=>b.has(s.semitones)&&ie<=le-s.semitones);if(!r.length){L.show("\u26A0 Aucun intervalle possible dans cette plage !","wrong"),q=null;return}let a=r[G(0,r.length-1)];q={iv:a,rootMidi:G(ie,le-a.semitones),mode:je()},t("answersGrid").querySelectorAll(".ans-btn").forEach(s=>{s.classList.remove("wrong","correct"),s.disabled=!1}),X(),Kt.setIdentMarker(q.mode==="descendant"?q.rootMidi+a.semitones:q.rootMidi),e&&Q(vt,180)}function tr(e,r){Se||!q||r.classList.contains("inactive")||(be.st.total++,e===q.iv.semitones?(Se=!0,be.st.ok++,be.update(),r.classList.add("correct"),t("answersGrid").querySelectorAll(".ans-btn").forEach(a=>{a!==r&&(a.disabled=!0)}),L.show(`\u2713 Bravo !  ${q.iv.name}`,"correct"),L.soon(()=>{L.clear(),Je(!0)},we*1e3)):(be.update(),r.classList.add("wrong"),r.disabled=!0,L.show("\u2717 Essaie encore\u2026","wrong"),L.soon(()=>{Se||L.clear()},1200)))}function J(){let e=t("familyCol");e.innerHTML="",se.forEach(r=>{let a=document.createElement("div");a.className="family-row"+(r.key===de?" focused":"");let s=document.createElement("button");s.className="family-label",s.type="button",s.textContent=r.label,s.style.cssText="background:none;border:0;color:inherit;text-align:left;flex:1;cursor:pointer",s.title=`Voir les qualit\xE9s de ${r.label}`,s.onclick=()=>{de=r.key,J(),Y()};let o=document.createElement("button");o.type="button",o.className="family-toggle"+(Me(r)?" on":""),o.setAttribute("role","switch"),o.setAttribute("aria-checked",Me(r)),o.setAttribute("aria-label",`Famille ${r.label}`),o.style.cssText+=";padding:0;cursor:pointer",o.onclick=()=>{if(Me(r)){if(![...b].filter(p=>!r.qualities.some(f=>f.semitones===p)).length)return;r.qualities.forEach(p=>b.delete(p.semitones))}else r.qualities.forEach(u=>b.add(u.semitones));de=r.key,J(),Y(),X(),j()},a.append(s,o),e.append(a)})}function Y(){let e=t("qualityCol");e.innerHTML="";let r=se.find(a=>a.key===de);if(!r||!Me(r)){e.innerHTML='<div class="quality-empty">Famille d\xE9sactiv\xE9e</div>';return}r.qualities.forEach(a=>{let s=document.createElement("button");s.className="quality-btn"+(b.has(a.semitones)?" active":""),s.setAttribute("aria-pressed",b.has(a.semitones)),s.innerHTML=`${a.qualityLabel}<span class="qs">${a.short}</span>`,s.onclick=()=>{b.has(a.semitones)&&b.size===1||(b.has(a.semitones)?b.delete(a.semitones):b.add(a.semitones),Y(),J(),X(),j())},e.append(s)})}t("selectAllBtn").onclick=()=>{xe.forEach(e=>b.add(e.semitones)),J(),Y(),X(),j()},t("selectNoneBtn").onclick=()=>{b=new Set([3]),de="tierce",J(),Y(),X(),j()},Ee(t("noteMin"),ie),Ee(t("noteMax"),le),t("noteMin").onchange=()=>{Number(t("noteMin").value)>=Number(t("noteMax").value)&&(t("noteMax").value=Math.min(Number(t("noteMin").value)+12,Ie)),ie=Number(t("noteMin").value),le=Number(t("noteMax").value),j()},t("noteMax").onchange=()=>{Number(t("noteMax").value)<=Number(t("noteMin").value)&&(t("noteMin").value=Math.max(Number(t("noteMax").value)-12,Pe)),ie=Number(t("noteMin").value),le=Number(t("noteMax").value),j()},Oe(t("gapRange"),t("gapVal"),e=>`${e.toFixed(2)} s`,.1,2,e=>{qe=e}),Oe(t("nextDelayRange"),t("nextDelayVal"),e=>`${e.toFixed(1)} s`,.2,3,e=>{we=e}),t("hamburgerBtn").onclick=()=>ut.open(),t("playBtn").onclick=vt,t("resetBtn").onclick=()=>{be.reset(),Je(!1)};let R=Te[0],N=oe[0],T=Fe[0],V=null,qr=60,Ye="montant",rr=_(t("keyboardGA"),e=>V&&E({...K(),transpose:e},{host:t("staffWrap")})),Ke=()=>.6/(1+ce/100),K=(e=Ye,r=V)=>ke(r,{mode:e,noteSec:Ke(),width:Ce(t("staffWrap"))}),Ze=(e,r)=>{let a=[],s=Math.max(...r.intervals);for(let o=H;o<=I;o++)o%12===e&&o+s<=I&&a.push(o);return a};function et(e){let r=`${R.name} \u2014 ${N.label} \u2014 ${T.label}`;t("phrasePlayerPanel").style.display="",t("phraseTitle").textContent=r;let a=Ze(R.pc,N);if(!a.length){t("staffWrap").innerHTML='<div class="quality-empty" style="width:100%;">Amplitude trop \xE9troite pour cette gamme/cet accord \xE0 partir de cette fondamentale.</div>',V=null;return}let s=e?a[G(0,a.length-1)]:a[0];V=it(s,N),Ye=T.key==="desc"?"descendant":"montant",ue(t("staffWrap"),K(),K().width),rr.setPhrase(Ye==="descendant"?s+Math.max(...N.intervals):s),t("phrasePickerBtn").textContent=`\u{1F3B5} ${r}`,t("phraseDirGroup").querySelectorAll(".mode-btn").forEach(o=>{o.classList.toggle("active",o.dataset.dir===T.key),o.setAttribute("aria-pressed",o.dataset.dir===T.key)})}function Z(){he(t("rootCol"),Te,R,e=>{R=e,Z()}),he(t("qualityColPhrase"),oe,N,e=>{N=e,Z()}),he(t("dirCol"),Fe,T,e=>{T=e,Z()})}t("phrasePickerBtn").onclick=()=>Ve.open(),t("generatePhraseBtn").onclick=()=>{Ve.close(),et(!1)},t("gaPlay").onclick=()=>{V&&(O(t("gaPlay")),E(K(),{button:t("gaPlay"),host:t("staffWrap")}))},t("randomRootBtn").onclick=()=>{let e=Te.filter(r=>r.pc!==R.pc&&Ze(r.pc,N).length).sort(()=>Math.random()-.5);e.length&&(R=e[0]),Z(),et(!0)},t("phraseDirGroup").addEventListener("click",e=>{let r=e.target.closest(".mode-btn");if(!r)return;let a=Fe.find(s=>s.key===r.dataset.dir);!a||a===T||(T=a,Z(),et(!1))}),t("phraseSettingsBtn").onclick=()=>ze.open(),t("gaIdentSettingsBtn").onclick=()=>ze.open(),Ee(t("phraseNoteMin"),H),Ee(t("phraseNoteMax"),I);let ft=()=>{let e=Number(t("phraseNoteMin").value),r=Number(t("phraseNoteMax").value),a=t("phraseAmpWarning"),s=e>=r||!Ze(R.pc,N).length;a.classList.toggle("visible",s),a.textContent=e>=r?"La note basse doit \xEAtre inf\xE9rieure \xE0 la note haute.":"Aucune fondamentale valide dans cette plage pour la gamme/l\u2019accord choisi."};t("phraseNoteMin").onchange=()=>{Number(t("phraseNoteMin").value)>=Number(t("phraseNoteMax").value)&&(t("phraseNoteMax").value=Math.min(Number(t("phraseNoteMin").value)+12,Ie)),H=Number(t("phraseNoteMin").value),I=Number(t("phraseNoteMax").value),ft()},t("phraseNoteMax").onchange=()=>{Number(t("phraseNoteMax").value)<=Number(t("phraseNoteMin").value)&&(t("phraseNoteMin").value=Math.max(Number(t("phraseNoteMax").value)-12,Pe)),H=Number(t("phraseNoteMin").value),I=Number(t("phraseNoteMax").value),ft()};let yt=[["phraseSpeedRangeA","phraseSpeedValA"],["phraseSpeedRangeB","phraseSpeedValB"],["phraseSpeedRangeC","phraseSpeedValC"]],xt=e=>{ce=e,yt.forEach(([r,a])=>{t(r).value=e,t(a).textContent=`${e>0?"+":""}${e} %`;let s=((e+50)/100*100).toFixed(1);t(r).style.background=`linear-gradient(to right, var(--gold) 0%, var(--gold) ${s}%, var(--border) ${s}%, var(--border) 100%)`})};yt.forEach(([e])=>t(e).addEventListener("input",r=>xt(parseInt(r.target.value,10)))),xt(0);let S=new Set(["maj","min"]),w=null,De=!1,ve=Qe({val:"gaScoreVal",pct:"gaScorePct"}),M=_e("gaFeedback"),ar=_(t("keyboardGAIdent"),()=>{}),tt=()=>t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(e=>e.classList.toggle("inactive",!S.has(e.dataset.qkey)));function sr(){let e=t("gaAnswersGrid");e.innerHTML="",oe.forEach(r=>{let a=document.createElement("button");a.className="ans-btn",a.dataset.qkey=r.key,a.textContent=r.label,a.onclick=()=>nr(r.key,a),e.append(a)}),tt()}function kt(){let e=t("gaQualityPool");e.innerHTML="",oe.forEach(r=>{let a=document.createElement("button");a.className="quality-btn"+(S.has(r.key)?" active":""),a.setAttribute("aria-pressed",S.has(r.key)),a.textContent=r.label,a.onclick=()=>{S.has(r.key)&&S.size===1||(S.has(r.key)?S.delete(r.key):S.add(r.key),kt(),tt())},e.append(a)})}let or=()=>ke(it(w.rootMidi,w.q),{mode:w.mode,noteSec:Ke(),chordSec:Ke()*3.2}),qt=()=>{w&&(O(t("gaPlayBtn")),E(or()))};function rt(e){De=!1,M.clear();let r=oe.filter(p=>S.has(p.key));if(!r.length){M.show("\u26A0 Aucune qualit\xE9 s\xE9lectionn\xE9e !","wrong"),w=null;return}let a=r[G(0,r.length-1)],s=Math.max(...a.intervals),o=H,u=I-s;if(o>u){M.show("\u26A0 Amplitude trop \xE9troite pour cette qualit\xE9 !","wrong"),w=null;return}w={q:a,rootMidi:G(o,u),mode:je()},t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(p=>{p.classList.remove("wrong","correct"),p.disabled=!1}),tt(),ar.setIdentMarker(w.rootMidi),e&&Q(qt,180)}function nr(e,r){De||!w||r.classList.contains("inactive")||(ve.st.total++,e===w.q.key?(De=!0,ve.st.ok++,ve.update(),r.classList.add("correct"),t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(a=>{a!==r&&(a.disabled=!0)}),M.show(`\u2713 Bravo !  ${w.q.label}`,"correct"),M.soon(()=>{M.clear(),rt(!0)},we*1e3)):(ve.update(),r.classList.add("wrong"),r.disabled=!0,M.show("\u2717 Essaie encore\u2026","wrong"),M.soon(()=>{De||M.clear()},1200)))}t("gaPlayBtn").onclick=qt,t("gaResetBtn").onclick=()=>{ve.reset(),rt(!1)};let dr=()=>{try{return JSON.parse(localStorage.getItem(Qt)||"[]")}catch{return[]}},at=e=>{try{return localStorage.setItem(Qt,JSON.stringify(e)),!0}catch{return!1}},k=dr(),ee=()=>[...jt.map((e,r)=>({...e,id:`b${r}`})),...k.map((e,r)=>({genre:"importe",title:e.title,featured:`${e.measures} mesure${e.measures>1?"s":""} \u2014 ${e.cree?"phrase cr\xE9\xE9e ici":"document Scorsaire"}`,noteDoc:e.noteDoc,id:`i${r}`,imp:r,cree:!!e.cree}))],st=e=>e.noteDoc?{noteDoc:e.noteDoc,speed:1+ce/100}:Ot(e.desc,ce),C=null,te="classique",wt=_(t("keyboardWorks"),e=>C&&E({...st(C),transpose:e},{host:t("worksStaffWrap")}));function Ct(e){C=e,t("worksTitle").textContent=e.title,t("worksPlayerPanel").style.display="",ue(t("worksStaffWrap"),e.noteDoc?{noteDoc:e.noteDoc}:e.desc,Ce(t("worksStaffWrap"))),e.desc?wt.setPhrase(lt(e.desc)):wt.setPhrase(60),t("worksPickerBtn").textContent=`\u{1F3B5} ${e.title} \u2014 changer`}let At=(e,r,a,s)=>{e.innerHTML="",[...s?[{key:"mixed",label:"Mixte"}]:[],...xr].forEach(o=>{let u=o.key==="mixed"?ee().length:ee().filter(f=>f.genre===o.key).length;if(o.key==="importe"&&!u)return;let p=document.createElement("button");p.className="tab-btn"+(o.key===r?" active":""),p.textContent=o.label,p.setAttribute("aria-pressed",o.key===r),p.onclick=()=>a(o.key),e.append(p)})};function Ge(){At(t("worksGenreTabs"),te,r=>{te=r,Ge()});let e=t("worksList");e.innerHTML="",ee().filter(r=>r.genre===te).forEach(r=>{let a=document.createElement("div");a.style.cssText="display:flex;gap:6px;align-items:stretch";let s=document.createElement("button");if(s.className="phrase-item",s.style.flex="1",s.innerHTML='<span class="pi-title"></span><span class="pi-meta"></span>',s.querySelector(".pi-title").textContent=r.title,s.querySelector(".pi-meta").textContent=r.featured,s.onclick=()=>{Ct(r),Ae.close()},a.append(s),r.cree){let o=document.createElement("button");o.className="mini-btn",o.textContent="\u270F",o.setAttribute("aria-label",`Modifier ${r.title}`),o.onclick=()=>{Ae.close(),Et(r.imp)},a.append(o)}if(r.imp!=null){let o=document.createElement("button");o.className="mini-btn",o.textContent="\u{1F5D1}",o.setAttribute("aria-label",`Retirer ${r.title}`),o.onclick=()=>{k.splice(r.imp,1),at(k),C?.id===r.id&&(C=null,t("worksPlayerPanel").style.display="none"),k.length||(te="classique"),Ge(),ae()},a.append(o)}e.append(a)})}t("worksPickerBtn").onclick=()=>{Ge(),Ae.open()},t("worksPlay").onclick=()=>{C&&(O(t("worksPlay")),E(st(C),{button:t("worksPlay"),host:t("worksStaffWrap")}))},v.push(()=>{C&&t("worksEcoutePanel").classList.contains("active")&&t("panelWorks").classList.contains("active")&&ue(t("worksStaffWrap"),C.noteDoc?{noteDoc:C.noteDoc}:C.desc,Ce(t("worksStaffWrap")))}),v.push(()=>{V&&t("panelPhrase").classList.contains("active")&&t("gaEcoutePanel").classList.contains("active")&&ue(t("staffWrap"),K(),K().width)});let z=null;async function Et(e=null){t("importNote").textContent="";let r;try{r=await import("./editeur-phrase-YUEIEOJT.js")}catch{t("importNote").textContent="L\u2019\xE9diteur n\u2019a pas pu \xEAtre charg\xE9. V\xE9rifiez la connexion puis r\xE9essayez.";return}ye(),r.ouvrirEditeur({doc:e==null?null:k[e].noteDoc,sounds:new URLSearchParams(location.search).get("sounds")||Ft,theme:x()==="light"?"light":"dark",onSave:a=>{if(!r.aDuContenu(a)){t("importNote").textContent="La phrase est vide : placez au moins une note pour l\u2019enregistrer.";return}z={index:e,text:a,measures:r.nombreDeMesures(a)},t("nameInput").value=e==null?r.titreDuDocument(a)||"Ma phrase":k[e].title,t("nameNote").textContent="",$e.open(),t("nameInput").focus(),t("nameInput").select()}})}function Bt(){let e=t("nameInput").value.trim();if(!e){t("nameNote").textContent="Donnez un nom \xE0 la phrase.";return}let r={title:e,measures:z.measures,noteDoc:JSON.parse(z.text),cree:!0};z.index==null?k.push(r):k[z.index]=r;let a=at(k),s=z.index??k.length-1;z=null,$e.close(),te="importe",ae(),Ct(ee().find(o=>o.id===`i${s}`)),t("importNote").textContent=a?`Phrase \xAB ${e} \xBB enregistr\xE9e dans \xAB Mes phrases \xBB.`:"Phrase ajout\xE9e pour cette session seulement (espace de stockage du navigateur plein)."}t("createBtn").onclick=()=>Et(null),t("nameSave").onclick=Bt,t("nameInput").addEventListener("keydown",e=>{e.key==="Enter"&&Bt()}),t("importBtn").onclick=()=>t("importFile").click(),t("importFile").onchange=async e=>{let r=e.target.files[0];if(e.target.value="",!r)return;let a=t("importNote");try{let s=Ht(await r.text());k=[...k,...s],at(k)?a.textContent=`${s.length} phrase${s.length>1?"s":""} import\xE9e${s.length>1?"s":""} depuis \xAB ${r.name} \xBB : onglet \xAB Mes phrases \xBB du choix de phrase.`:a.textContent="Phrases ajout\xE9es pour cette session seulement (espace de stockage du navigateur plein).",te="importe",Ge(),ae()}catch(s){a.textContent=s.message}};let St=8,re="mixed",D=null,Le=!1,fe=Qe({val:"wkScoreVal",pct:"wkScorePct"}),F=_e("wkFeedback"),Mt=_(t("keyboardWorksIdent"),()=>{}),ir=()=>re==="mixed"?ee():ee().filter(e=>e.genre===re);function ae(){re==="importe"&&!k.length&&(re="mixed"),At(t("wkFilterTabs"),re,e=>{re=e,ae(),Ne(!1)},!0)}function Ne(e){Le=!1,F.clear();let r=ir();if(r.length<2){F.show("\u26A0 Pas assez de phrases dans ce r\xE9pertoire !","wrong"),D=null,t("wkAnswersGrid").innerHTML="";return}let a=Math.min(St,r.length),s=r[G(0,r.length-1)],o=[s,...r.filter(i=>i!==s).sort(()=>Math.random()-.5).slice(0,a-1)].sort(()=>Math.random()-.5),u=0,p=null;if(s.desc){let[i,l]=$t(s.desc),h=H-i,Gt=I-l;u=h>Gt?0:G(h,Gt),p=lt(s.desc)+u}else u=G(-4,4);D={work:s,offset:u};let f=t("wkAnswersGrid");f.innerHTML="",o.forEach(i=>{let l=document.createElement("button");l.className="ans-btn",l.style.textAlign="left",l.textContent=i.title,l.onclick=()=>lr(i,l),f.append(l)}),p!=null?Mt.setIdentMarker(p):Mt.setIdentMarker(60+u),e&&Q(Dt,180)}let Dt=()=>{D&&(O(t("wkPlayBtn")),E({...st(D.work),transpose:D.offset}))};function lr(e,r){Le||!D||(fe.st.total++,e===D.work||e.id===D.work.id?(Le=!0,fe.st.ok++,fe.update(),r.classList.add("correct"),t("wkAnswersGrid").querySelectorAll(".ans-btn").forEach(a=>{a!==r&&(a.disabled=!0)}),F.show(`\u2713 Bravo !  ${e.title}`,"correct"),F.soon(()=>{F.clear(),Ne(!0)},we*1e3)):(fe.update(),r.classList.add("wrong"),r.disabled=!0,F.show("\u2717 Essaie encore\u2026","wrong"),F.soon(()=>{Le||F.clear()},1200)))}return t("wkPlayBtn").onclick=Dt,t("wkResetBtn").onclick=()=>{fe.reset(),Ne(!1)},t("wkIdentSettingsBtn").onclick=()=>{ae(),pt.open()},Oe(t("wkChoiceRange"),t("wkChoiceVal"),e=>String(e),4,16,e=>{St=e}),Xe(),me(),J(),Y(),Zt(),j(),Je(!1),Z(),kt(),sr(),rt(!1),ae(),Ne(!1),window.__oreille={root:c,state:()=>({ivCur:q,gaCur:w,wkCur:D,ecDesc:W,gaNames:V,curWork:C,activeModes:[...B],speedPct:ce,noteGap:qe})},()=>{y.forEach(e=>e()),delete window.__oreille}}export{Tr as renderOreille};
