import{a as Ft,b as $t,c as zt,d as Gt,e as ye,f as jt}from"./chunk-SY3KFPXI.js";import{p as Ot}from"./chunk-SJCM2YVB.js";import{Nb as Rt,Rb as Bt}from"./chunk-Y7VIYMBP.js";import"./chunk-IGARKBRQ.js";import"./chunk-WL5TCO2S.js";import{a as Qt}from"./chunk-LGOCV7H4.js";import{b as Wt,f as Vt,h as Ht}from"./chunk-62RY5JWF.js";import{f as De}from"./chunk-RKB76XJI.js";import"./chunk-JYYRXKK6.js";import"./chunk-IZUYVIPG.js";var _t=`
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


.ear { --accent: var(--gold); background: var(--bg); color: var(--text); font-family: inherit; border-radius: 14px; padding: 8px 12px 28px; display: block; }
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
`;var oe=[{key:"seconde",label:"Seconde",steps:1,qualities:[{name:"Seconde mineure",qualityLabel:"Mineure",short:"m2",semitones:1},{name:"Seconde majeure",qualityLabel:"Majeure",short:"M2",semitones:2}]},{key:"tierce",label:"Tierce",steps:2,qualities:[{name:"Tierce mineure",qualityLabel:"Mineure",short:"m3",semitones:3},{name:"Tierce majeure",qualityLabel:"Majeure",short:"M3",semitones:4}]},{key:"quarte",label:"Quarte",steps:3,qualities:[{name:"Quarte juste",qualityLabel:"Juste",short:"P4",semitones:5}]},{key:"triton",label:"Triton",steps:3,qualities:[{name:"Triton",qualityLabel:"Triton",short:"A4",semitones:6}]},{key:"quinte",label:"Quinte",steps:4,qualities:[{name:"Quinte juste",qualityLabel:"Juste",short:"P5",semitones:7}]},{key:"sixte",label:"Sixte",steps:5,qualities:[{name:"Sixte mineure",qualityLabel:"Mineure",short:"m6",semitones:8},{name:"Sixte majeure",qualityLabel:"Majeure",short:"M6",semitones:9}]},{key:"septieme",label:"Septi\xE8me",steps:6,qualities:[{name:"Septi\xE8me mineure",qualityLabel:"Mineure",short:"m7",semitones:10},{name:"Septi\xE8me majeure",qualityLabel:"Majeure",short:"M7",semitones:11}]},{key:"octave",label:"Octave",steps:7,qualities:[{name:"Unisson",qualityLabel:"Unisson",short:"P1",semitones:0,steps:0},{name:"Octave",qualityLabel:"Octave",short:"P8",semitones:12}]}],se=oe.flatMap(n=>n.qualities.map(i=>({...i,family:n.key,steps:i.steps??n.steps}))),ka=["Do","Do\u266F / R\xE9\u266D","R\xE9","R\xE9\u266F / Mi\u266D","Mi","Fa","Fa\u266F / Sol\u266D","Sol","Sol\u266F / La\u266D","La","La\u266F / Si\u266D","Si"],Re=ka.map((n,i)=>({name:n,label:n,pc:i})),ne=[{key:"maj",label:"Gamme majeure",intervals:[0,2,4,5,7,9,11,12],steps:[0,1,2,3,4,5,6,7]},{key:"min",label:"Gamme mineure naturelle",intervals:[0,2,3,5,7,8,10,12],steps:[0,1,2,3,4,5,6,7]},{key:"harmin",label:"Gamme mineure harmonique",intervals:[0,2,3,5,7,8,11,12],steps:[0,1,2,3,4,5,6,7]},{key:"majarp",label:"Arp\xE8ge majeur",intervals:[0,4,7,12],steps:[0,2,4,7]},{key:"minarp",label:"Arp\xE8ge mineur",intervals:[0,3,7,12],steps:[0,2,4,7]},{key:"dimarp",label:"Arp\xE8ge diminu\xE9",intervals:[0,3,6,9],steps:[0,2,4,6]},{key:"augarp",label:"Arp\xE8ge augment\xE9",intervals:[0,4,8,12],steps:[0,2,4,7]}],Be=[{key:"asc",label:"Ascendant"},{key:"desc",label:"Descendant"}],nt=["C","D","E","F","G","A","B"],Ut=[0,2,4,5,7,9,11],wa={"-2":"bb","-1":"b",0:"",1:"#",2:"x"},Sa=[[["C",0]],[["D",-1],["C",1]],[["D",0]],[["E",-1],["D",1]],[["E",0]],[["F",0]],[["F",1],["G",-1]],[["G",0]],[["A",-1],["G",1]],[["A",0]],[["B",-1],["A",1]],[["B",0]]],Ma=(n,i,l)=>(l+1)*12+Ut[n]+i;function Ea(n,i,l,t,c){let h=(Math.floor((l-i)/12)-1)*7+n+t,x=(h%7+7)%7,y=Math.floor(h/7),O=l+c-((y+1)*12+Ut[x]);return{name:`${nt[x]}${wa[O]??"?"}${y}`,alter:O}}function Jt(n,i){let l=null;for(let[t,c]of Sa[(n%12+12)%12]){let b=nt.indexOf(t),h=i.map(y=>Ea(b,c,n,y.steps,y.semis)),x=Math.max(Math.abs(c),...h.map(y=>Math.abs(y.alter)));if((!l||x<l.worst)&&(l={worst:x,names:h.map(y=>y.name)}),x<=1)break}return l.names}function Xt(n,i=!1){let l=(n%12+12)%12,t=Math.floor(n/12)-1;return(i?["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]:["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"])[l]+t}function it(n){let i=/^([A-G])(##|bb|x|#|b)?(-?\d)$/.exec(n),l={"":0,"#":1,b:-1,x:2,"##":2,bb:-2}[i[2]??""];return Ma(nt.indexOf(i[1]),l,Number(i[3]))}var La=n=>Math.min(...n)<57&&Math.max(...n)<=67?"bass":"treble";function ke(n,{mode:i="montant",noteSec:l=.6,chordSec:t=1.9,long:c=!1,width:b=320}={}){let h=n.map(it),x=n.map((L,H)=>({n:L,m:h[H]})).sort((L,H)=>L.m-H.m).map(L=>L.n),y=La(h);if(i==="simultane")return{clef:y,key:0,time:null,bpm:Math.round(120/t*10)/10,width:b,scale:1.2,measures:[[{n:x,d:"half",dots:0}]]};let ie=i==="descendant"?x.slice().reverse():x,O=c?"half":"quarter",$e=Math.round((c?120:60)/l*10)/10;return{clef:y,key:0,time:null,bpm:$e,width:b,scale:1.2,measures:[ie.map(L=>({n:[L],d:O,dots:0}))]}}function lt(n,i){return Jt(n,[{steps:0,semis:0},{steps:i.steps,semis:i.semitones}])}function dt(n,i){return Jt(n,i.intervals.map((l,t)=>({steps:i.steps[t],semis:l})))}function Kt(n){let i=n.measures.flatMap(l=>Array.isArray(l)?l:l.events).flatMap(l=>l.n??[]).map(it);return[Math.min(...i),Math.max(...i)]}function Yt(n,i,l={}){return{...n,bpm:Math.round(100*(1+i/100)*10)/10,...l}}var ct=n=>it(n.measures.flatMap(i=>Array.isArray(i)?i:i.events).find(i=>i.n).n[0]);function Zt(n){let i;try{i=JSON.parse(n)}catch{throw new Error("Ce fichier n\u2019est pas un document Scorsaire (texte illisible).")}let l=i?.format==="scorsaire-note"?i.work:i,t;try{t=Bt(l)}catch(c){throw new Error(`Document Scorsaire non reconnu : ${c.message}`)}if(!t.movements.length)throw new Error("Ce document ne contient aucun mouvement.");return t.movements.map((c,b)=>({title:(c.title||"").trim()||(t.title?`${t.title} \u2014 ${b+1}`:`Mouvement ${b+1}`),measures:c.masterbars.length,noteDoc:Ot({...t,movements:[c]})}))}function Na(n){let i=n.noteDoc??Ft(n.desc),l=JSON.parse(JSON.stringify((typeof i=="string"?JSON.parse(i):i).work)),t=l.work.movements?.[0];return t&&(t.props={...t.props,title:n.title}),l}function Ta(n,i){if(i===0)return n;let l=new Set;(function c(b){Array.isArray(b)?b.forEach(c):b&&typeof b=="object"&&(typeof b.id=="string"&&typeof b.type=="string"&&l.add(b.id),Object.values(b).forEach(c))})(n);let t=c=>l.has(c)?`${c}x${i}`:c;return(function c(b){return Array.isArray(b)?b.map(c):typeof b=="string"?t(b):b&&typeof b=="object"?Object.fromEntries(Object.entries(b).map(([h,x])=>[t(h),c(x)])):b})(n)}function ea(n){if(!n.length)throw new Error("Aucune phrase \xE0 exporter");let i=n.map(Na),l=i.map((c,b)=>Ta(c.work,b)),t=l[0];return t.movements=l.flatMap(c=>c.movements??[]),t.parts=l.flatMap(c=>c.parts??[]),t.sheets=l.flatMap(c=>c.sheets??[]),t.props={...t.props,title:n.length===1?n[0].title:"Phrases Solf\xE8ge"},JSON.stringify({format:"scorsaire",version:Rt,idCounter:Math.max(...i.map(c=>c.idCounter??0)),work:t})}var ta=n=>`${(n||"phrases").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)||"phrases"}.scorsaire`;var Oe=36,Fe=96,Ca=["C","C\u266F","D","D\u266F","E","F","F\u266F","G","G\u266F","A","A\u266F","B"],pt=n=>Ca[n%12]+(Math.floor(n/12)-1),I=(n,i)=>Math.floor(Math.random()*(i-n+1))+n,aa="solfege_oreille_import",ut=[{key:"classique",label:"Classique"},{key:"moderne",label:"Actuelle"},{key:"importe",label:"Mes phrases"}],Pa=`
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
        <div class="score-host" id="worksStaffWrap"></div><button class="abc-play-btn" id="worksPlay" type="button">\u25B6 \xC9couter</button> <button class="abc-play-btn" id="worksExport" type="button" title="T\xE9l\xE9charger cette phrase en fichier Scorsaire">\u2B07 Exporter (Scorsaire)</button>
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
  <div class="drawer-body" style="gap:10px;"><div class="tabs" id="worksGenreTabs"></div><button class="mini-btn" id="worksExportAll" type="button">\u2B07 Exporter ces phrases (un fichier Scorsaire)</button><div id="worksList" style="display:flex; flex-direction:column; gap:8px;"></div></div></div></div>
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
      </div></div></div></div></div></div>`;function Ja(n){let i=document.createElement("div");n.classList.add("compact"),n.innerHTML='<p class="crumb-row"><a class="crumb" href="#/">\u2190 Accueil</a></p>',n.append(i);let l=i.attachShadow({mode:"open"});l.innerHTML=`<style>${_t}</style>${Pa}`;let t=e=>l.getElementById(e),c=t("ear"),b=[],h=[],x=()=>document.documentElement.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),y=()=>{c.dataset.theme=x(),h.forEach(e=>e())},ie=new MutationObserver(y);ie.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let O=matchMedia("(prefers-color-scheme: dark)");O.addEventListener("change",y),b.push(()=>{ie.disconnect(),O.removeEventListener("change",y)}),c.dataset.theme=x();let $e=()=>getComputedStyle(c).getPropertyValue("--text").trim()||"#000",L=t("engineBadge"),H=t("engineLabel");Gt({sounds:new URLSearchParams(location.search).get("sounds")||void 0,onStatus:e=>{/SoundFont indisponible|moteur léger/.test(e)?(L.className="engine-badge synth",H.textContent="Moteur l\xE9ger"):/SoundFont/.test(e)&&(L.className="engine-badge fluid",H.textContent="SoundFont")}}),b.push(()=>{ye()});let A=(e,a)=>jt(e,a).catch(()=>{}),Q=e=>{e.classList.remove("playing"),e.offsetWidth,e.classList.add("playing")},k=new Set([3,4]),le="tierce",de=48,ce=72,N=new Set(["montant"]),we=.9,Se=.8,pe=0,_=48,F=84,ze=()=>{let e=[...N];return e[I(0,e.length-1)]},Ge=new Set,U=(e,a)=>{let r=setTimeout(()=>{Ge.delete(r),e()},a);return Ge.add(r),r};b.push(()=>Ge.forEach(clearTimeout));function ue(e,a,r=300){e.innerHTML=$t(a,{width:r,ink:$e()});let o=e.querySelector("svg");o&&o.style.setProperty("--w",`${o.getAttribute("width")}px`)}let Me=e=>Math.max(200,Math.min(520,(e.clientWidth||320)-8)),ra=new Set([1,3,6,8,10]),be=(()=>{let e=[],a=0,r=0;for(let o=Oe;o<=Fe;o++)ra.has(o%12)?e.push({midi:o,x:r+48-15,w:30,black:!0}):(e.push({midi:o,x:a,w:48,black:!1}),r=a,a+=48);return{keys:e,total:a}})();function oa(e,a){A({clef:"treble",time:null,bpm:80,measures:[[{n:[Xt(e,!0)],d:"quarter"}]]}),a.classList.add("playing"),U(()=>a.classList.remove("playing"),220)}function J(e,a){e.innerHTML=`<div class="kb-nav"><button class="kb-nav-btn" data-dir="-1" aria-label="Reculer">\u2039</button><div class="kb-scroll" tabindex="0" aria-label="Clavier de piano"><div class="kb-inner" style="width:${be.total}px;"><div class="kb-buttons"></div><div class="kb-keys"></div></div></div><button class="kb-nav-btn" data-dir="1" aria-label="Avancer">\u203A</button></div>`;let r=e.querySelector(".kb-scroll"),o=e.querySelector(".kb-buttons"),s=e.querySelector(".kb-keys"),d=null;for(let p of[!1,!0])be.keys.filter(u=>u.black===p).forEach(u=>{let g=document.createElement("div");g.className=p?"pkey-black":"pkey-white",g.style.left=`${u.x}px`,g.style.width=`${u.w}px`,g.setAttribute("role","button"),g.setAttribute("tabindex","-1"),g.setAttribute("aria-label",pt(u.midi)),g.addEventListener("click",()=>oa(u.midi,g)),s.append(g)});let m={};be.keys.forEach(p=>{let u=document.createElement("button");u.className="kb-play-btn",u.style.left=`${p.x+p.w/2}px`,u.textContent="\u266A",u.setAttribute("aria-label",`Jouer en partant de ${pt(p.midi)}`),u.addEventListener("click",()=>{d!=null&&a(p.midi-d)}),o.append(u),m[p.midi]=u}),e.querySelectorAll(".kb-nav-btn").forEach(p=>p.addEventListener("click",()=>r.scrollBy({left:Number(p.dataset.dir)*144,behavior:"smooth"}))),r.addEventListener("keydown",p=>{p.key==="ArrowLeft"&&(r.scrollBy({left:-96,behavior:"smooth"}),p.preventDefault()),p.key==="ArrowRight"&&(r.scrollBy({left:96,behavior:"smooth"}),p.preventDefault())});let S=p=>{let u=be.keys.find(g=>g.midi===p);u&&(r.scrollLeft=Math.max(0,u.x+u.w/2-r.clientWidth/2))};return{setPhrase(p){d=p,o.style.display="",s.querySelectorAll(".kb-marker").forEach(u=>u.remove()),Object.values(m).forEach(u=>u.classList.remove("origin")),m[p]?.classList.add("origin"),S(p)},setIdentMarker(p){d=null,o.style.display="none",Object.values(m).forEach(g=>g.classList.remove("origin")),s.querySelectorAll(".kb-marker").forEach(g=>g.remove());let u=be.keys.find(g=>g.midi===p);if(u){let g=document.createElement("div");g.className="kb-marker",g.style.left=`${u.x+u.w/2}px`,s.append(g),S(p)}}}}let X=(e,a)=>{let r=t(e),o=t(a);return{ov:r,open(){r.classList.add("open"),o.classList.add("open"),r.querySelector("[data-close]")?.focus()},close(){r.classList.remove("open"),o.classList.remove("open")}}},bt=X("drawerOverlay","drawer"),je=X("phraseSheetOverlay","phraseSheet"),We=X("phraseSettingsOverlay","phraseSettingsSheet"),Ee=X("worksSheetOverlay","worksSheet"),mt=X("wkIdentSettingsOverlay","wkIdentSettingsSheet"),Ve=X("nameSheetOverlay","nameSheet"),gt=[bt,je,We,Ee,mt,Ve];gt.forEach(e=>{e.ov.addEventListener("click",a=>{(a.target===e.ov||a.target.closest("[data-close]"))&&e.close()})});let vt=e=>{e.key==="Escape"&&gt.forEach(a=>a.close())};document.addEventListener("keydown",vt),b.push(()=>document.removeEventListener("keydown",vt));let me=(e,a,r,o)=>{e.innerHTML="",a.forEach(s=>{let d=document.createElement("button");d.className="family-btn"+(s===r?" active":""),d.textContent=s.label||s.name,d.setAttribute("aria-pressed",s===r),d.onclick=()=>o(s),e.append(d)})},He=(e,a,r,o,s,d)=>{let m=S=>{d(parseFloat(S)),a.textContent=r(parseFloat(S));let p=((S-o)/(s-o)*100).toFixed(1);e.style.background=`linear-gradient(to right, var(--gold) 0%, var(--gold) ${p}%, var(--border) ${p}%, var(--border) 100%)`};return e.addEventListener("input",S=>m(S.target.value)),m(e.value),m},sa=e=>e.addEventListener("click",a=>{let r=a.target.closest(".mode-btn");if(!r)return;let o=r.dataset.mode;N.has(o)&&N.size===1||(N.has(o)?N.delete(o):N.add(o),["ecModeGroup","modeGroup","gaModeGroup"].forEach(s=>t(s).querySelectorAll(".mode-btn").forEach(d=>{d.classList.toggle("active",N.has(d.dataset.mode)),d.setAttribute("aria-pressed",N.has(d.dataset.mode))})))});["ecModeGroup","modeGroup","gaModeGroup"].forEach(e=>{sa(t(e)),t(e).querySelectorAll(".mode-btn").forEach(a=>a.setAttribute("aria-pressed",N.has(a.dataset.mode)))}),l.querySelectorAll("#tabs .tab-btn").forEach(e=>e.addEventListener("click",()=>{let a={interval:"panelInterval",phrase:"panelPhrase",works:"panelWorks"};l.querySelectorAll("#tabs .tab-btn").forEach(r=>{r.classList.remove("active"),r.setAttribute("aria-selected","false")}),l.querySelectorAll(".tab-panel").forEach(r=>r.classList.remove("active")),e.classList.add("active"),e.setAttribute("aria-selected","true"),t(a[e.dataset.tab]).classList.add("active"),ye(),h.forEach(r=>r())}));let Qe=(e,a)=>{let r=t(e);r.querySelectorAll(".subtab2-btn").forEach(o=>o.addEventListener("click",()=>{r.querySelectorAll(".subtab2-btn").forEach(s=>s.classList.remove("active")),o.classList.add("active"),Object.values(a).forEach(s=>t(s).classList.remove("active")),t(a[o.dataset.sub]).classList.add("active"),ye(),h.forEach(s=>s())}))};Qe("intervalSubtabs",{ecoute:"intervalEcoutePanel",ident:"intervalIdentPanel"}),Qe("gaSubtabs",{ecoute:"gaEcoutePanel",ident:"gaIdentPanel"}),Qe("worksSubtabs",{ecoute:"worksEcoutePanel",ident:"worksIdentPanel"});let Le=(e,a)=>{e.innerHTML="";for(let r=Oe;r<=Fe;r++){let o=document.createElement("option");o.value=r,o.textContent=pt(r),e.append(o)}e.value=a},_e=e=>{let a={ok:0,total:0};return{st:a,update(){t(e.val).textContent=`${a.ok} / ${a.total}`,t(e.pct).textContent=a.total?`${Math.round(a.ok/a.total*100)} %`:""},reset(){a.ok=a.total=0,this.update()}}},Ue=e=>{let a=0;return{show(r,o){clearTimeout(a);let s=t(e);s.textContent=r,s.className=`feedback visible ${o}`},clear(){t(e).className="feedback"},later(r,o){clearTimeout(a),a=U(r,o)},soon(r,o){a=U(r,o)}}},ht="tierce",ge=0,$=null,ft="montant",Ae=()=>oe.find(e=>e.key===ht),Je=()=>Ae().qualities[ge],na=e=>se.find(a=>a.semitones===e),ia=J(t("keyboardInterval"),e=>$&&A({...$,transpose:e},{host:t("ecStaffWrap")}));function ve(e=ft){ft=e;let a=Ae(),r=Je();t("ecTitle").textContent=`${a.label} \u2014 ${r.qualityLabel}`,$=ke(lt(60,na(r.semitones)),{mode:e,noteSec:we,long:!0,width:Me(t("ecStaffWrap"))}),ue(t("ecStaffWrap"),$,$.width),ia.setPhrase(60)}function Xe(){me(t("ecFamilyCol"),oe,Ae(),e=>{ht=e.key,ge=0,Xe(),ve()}),me(t("ecQualityCol"),Ae().qualities.map(e=>({...e,label:e.qualityLabel})),{...Je(),label:Je().qualityLabel},()=>{}),[...t("ecQualityCol").children].forEach((e,a)=>{e.classList.toggle("active",a===ge),e.setAttribute("aria-pressed",a===ge),e.onclick=()=>{ge=a,Xe(),ve()}})}t("ecPlay").onclick=()=>{ve(ze()),Q(t("ecPlay")),A($,{button:t("ecPlay"),host:t("ecStaffWrap")})},h.push(()=>{t("intervalEcoutePanel").classList.contains("active")&&t("panelInterval").classList.contains("active")&&ve()});let la=J(t("keyboardIntervalIdent"),()=>{}),he=_e({val:"scoreVal",pct:"scorePct"}),q=Ue("feedback"),v=null,Ne=!1,Te=e=>e.qualities.some(a=>k.has(a.semitones));function K(){t("answersGrid").querySelectorAll(".ans-btn").forEach(e=>e.classList.toggle("inactive",!k.has(Number(e.dataset.semitones))))}function z(){let e=Number(t("noteMin").value),a=Number(t("noteMax").value),r=t("ampWarning");return e>=a?(r.classList.add("visible"),r.textContent="La note basse doit \xEAtre inf\xE9rieure \xE0 la note haute.",!1):[...k].some(o=>e+o<=a)?(r.classList.remove("visible"),!0):(r.classList.add("visible"),r.textContent="La plage est trop \xE9troite pour les intervalles s\xE9lectionn\xE9s.",!1)}function da(){let e=t("answersGrid");e.innerHTML="",se.forEach(a=>{let r=document.createElement("button");r.className="ans-btn",r.dataset.semitones=a.semitones,r.innerHTML=`${a.name}<span class="semitones">${a.short}</span>`,r.onclick=()=>pa(a.semitones,r),e.append(r)}),K()}function ca(){return ke(lt(v.rootMidi,v.iv),{mode:v.mode,noteSec:we,long:!0})}let xt=()=>{v&&(Q(t("playBtn")),A(ca()))};function Ke(e){Ne=!1,q.clear();let a=se.filter(o=>k.has(o.semitones)&&de<=ce-o.semitones);if(!a.length){q.show("\u26A0 Aucun intervalle possible dans cette plage !","wrong"),v=null;return}let r=a[I(0,a.length-1)];v={iv:r,rootMidi:I(de,ce-r.semitones),mode:ze()},t("answersGrid").querySelectorAll(".ans-btn").forEach(o=>{o.classList.remove("wrong","correct"),o.disabled=!1}),K(),la.setIdentMarker(v.mode==="descendant"?v.rootMidi+r.semitones:v.rootMidi),e&&U(xt,180)}function pa(e,a){Ne||!v||a.classList.contains("inactive")||(v.note||(v.note=!0,De({j:"oreille-intervalles",e:Wt(v.iv.short),m:"O",ok:e===v.iv.semitones,r:se.find(r=>r.semitones===e)?.short,c:v.mode})),he.st.total++,e===v.iv.semitones?(Ne=!0,he.st.ok++,he.update(),a.classList.add("correct"),t("answersGrid").querySelectorAll(".ans-btn").forEach(r=>{r!==a&&(r.disabled=!0)}),q.show(`\u2713 Bravo !  ${v.iv.name}`,"correct"),q.soon(()=>{q.clear(),Ke(!0)},Se*1e3)):(he.update(),a.classList.add("wrong"),a.disabled=!0,q.show("\u2717 Essaie encore\u2026","wrong"),q.soon(()=>{Ne||q.clear()},1200)))}function Y(){let e=t("familyCol");e.innerHTML="",oe.forEach(a=>{let r=document.createElement("div");r.className="family-row"+(a.key===le?" focused":"");let o=document.createElement("button");o.className="family-label",o.type="button",o.textContent=a.label,o.style.cssText="background:none;border:0;color:inherit;text-align:left;flex:1;cursor:pointer",o.title=`Voir les qualit\xE9s de ${a.label}`,o.onclick=()=>{le=a.key,Y(),Z()};let s=document.createElement("button");s.type="button",s.className="family-toggle"+(Te(a)?" on":""),s.setAttribute("role","switch"),s.setAttribute("aria-checked",Te(a)),s.setAttribute("aria-label",`Famille ${a.label}`),s.style.cssText+=";padding:0;cursor:pointer",s.onclick=()=>{if(Te(a)){if(![...k].filter(m=>!a.qualities.some(S=>S.semitones===m)).length)return;a.qualities.forEach(m=>k.delete(m.semitones))}else a.qualities.forEach(d=>k.add(d.semitones));le=a.key,Y(),Z(),K(),z()},r.append(o,s),e.append(r)})}function Z(){let e=t("qualityCol");e.innerHTML="";let a=oe.find(r=>r.key===le);if(!a||!Te(a)){e.innerHTML='<div class="quality-empty">Famille d\xE9sactiv\xE9e</div>';return}a.qualities.forEach(r=>{let o=document.createElement("button");o.className="quality-btn"+(k.has(r.semitones)?" active":""),o.setAttribute("aria-pressed",k.has(r.semitones)),o.innerHTML=`${r.qualityLabel}<span class="qs">${r.short}</span>`,o.onclick=()=>{k.has(r.semitones)&&k.size===1||(k.has(r.semitones)?k.delete(r.semitones):k.add(r.semitones),Z(),Y(),K(),z())},e.append(o)})}t("selectAllBtn").onclick=()=>{se.forEach(e=>k.add(e.semitones)),Y(),Z(),K(),z()},t("selectNoneBtn").onclick=()=>{k=new Set([3]),le="tierce",Y(),Z(),K(),z()},Le(t("noteMin"),de),Le(t("noteMax"),ce),t("noteMin").onchange=()=>{Number(t("noteMin").value)>=Number(t("noteMax").value)&&(t("noteMax").value=Math.min(Number(t("noteMin").value)+12,Fe)),de=Number(t("noteMin").value),ce=Number(t("noteMax").value),z()},t("noteMax").onchange=()=>{Number(t("noteMax").value)<=Number(t("noteMin").value)&&(t("noteMin").value=Math.max(Number(t("noteMax").value)-12,Oe)),de=Number(t("noteMin").value),ce=Number(t("noteMax").value),z()},He(t("gapRange"),t("gapVal"),e=>`${e.toFixed(2)} s`,.1,2,e=>{we=e}),He(t("nextDelayRange"),t("nextDelayVal"),e=>`${e.toFixed(1)} s`,.2,3,e=>{Se=e}),t("hamburgerBtn").onclick=()=>bt.open(),t("playBtn").onclick=xt,t("resetBtn").onclick=()=>{he.reset(),Ke(!1)};let G=Re[0],D=ne[0],R=Be[0],j=null,Ia=60,Ye="montant",ua=J(t("keyboardGA"),e=>j&&A({...ee(),transpose:e},{host:t("staffWrap")})),Ze=()=>.6/(1+pe/100),ee=(e=Ye,a=j)=>ke(a,{mode:e,noteSec:Ze(),width:Me(t("staffWrap"))}),et=(e,a)=>{let r=[],o=Math.max(...a.intervals);for(let s=_;s<=F;s++)s%12===e&&s+o<=F&&r.push(s);return r};function tt(e){let a=`${G.name} \u2014 ${D.label} \u2014 ${R.label}`;t("phrasePlayerPanel").style.display="",t("phraseTitle").textContent=a;let r=et(G.pc,D);if(!r.length){t("staffWrap").innerHTML='<div class="quality-empty" style="width:100%;">Amplitude trop \xE9troite pour cette gamme/cet accord \xE0 partir de cette fondamentale.</div>',j=null;return}let o=e?r[I(0,r.length-1)]:r[0];j=dt(o,D),Ye=R.key==="desc"?"descendant":"montant",ue(t("staffWrap"),ee(),ee().width),ua.setPhrase(Ye==="descendant"?o+Math.max(...D.intervals):o),t("phrasePickerBtn").textContent=`\u{1F3B5} ${a}`,t("phraseDirGroup").querySelectorAll(".mode-btn").forEach(s=>{s.classList.toggle("active",s.dataset.dir===R.key),s.setAttribute("aria-pressed",s.dataset.dir===R.key)})}function te(){me(t("rootCol"),Re,G,e=>{G=e,te()}),me(t("qualityColPhrase"),ne,D,e=>{D=e,te()}),me(t("dirCol"),Be,R,e=>{R=e,te()})}t("phrasePickerBtn").onclick=()=>je.open(),t("generatePhraseBtn").onclick=()=>{je.close(),tt(!1)},t("gaPlay").onclick=()=>{j&&(Q(t("gaPlay")),A(ee(),{button:t("gaPlay"),host:t("staffWrap")}))},t("randomRootBtn").onclick=()=>{let e=Re.filter(a=>a.pc!==G.pc&&et(a.pc,D).length).sort(()=>Math.random()-.5);e.length&&(G=e[0]),te(),tt(!0)},t("phraseDirGroup").addEventListener("click",e=>{let a=e.target.closest(".mode-btn");if(!a)return;let r=Be.find(o=>o.key===a.dataset.dir);!r||r===R||(R=r,te(),tt(!1))}),t("phraseSettingsBtn").onclick=()=>We.open(),t("gaIdentSettingsBtn").onclick=()=>We.open(),Le(t("phraseNoteMin"),_),Le(t("phraseNoteMax"),F);let yt=()=>{let e=Number(t("phraseNoteMin").value),a=Number(t("phraseNoteMax").value),r=t("phraseAmpWarning"),o=e>=a||!et(G.pc,D).length;r.classList.toggle("visible",o),r.textContent=e>=a?"La note basse doit \xEAtre inf\xE9rieure \xE0 la note haute.":"Aucune fondamentale valide dans cette plage pour la gamme/l\u2019accord choisi."};t("phraseNoteMin").onchange=()=>{Number(t("phraseNoteMin").value)>=Number(t("phraseNoteMax").value)&&(t("phraseNoteMax").value=Math.min(Number(t("phraseNoteMin").value)+12,Fe)),_=Number(t("phraseNoteMin").value),F=Number(t("phraseNoteMax").value),yt()},t("phraseNoteMax").onchange=()=>{Number(t("phraseNoteMax").value)<=Number(t("phraseNoteMin").value)&&(t("phraseNoteMin").value=Math.max(Number(t("phraseNoteMax").value)-12,Oe)),_=Number(t("phraseNoteMin").value),F=Number(t("phraseNoteMax").value),yt()};let kt=[["phraseSpeedRangeA","phraseSpeedValA"],["phraseSpeedRangeB","phraseSpeedValB"],["phraseSpeedRangeC","phraseSpeedValC"]],wt=e=>{pe=e,kt.forEach(([a,r])=>{t(a).value=e,t(r).textContent=`${e>0?"+":""}${e} %`;let o=((e+50)/100*100).toFixed(1);t(a).style.background=`linear-gradient(to right, var(--gold) 0%, var(--gold) ${o}%, var(--border) ${o}%, var(--border) 100%)`})};kt.forEach(([e])=>t(e).addEventListener("input",a=>wt(parseInt(a.target.value,10)))),wt(0);let T=new Set(["maj","min"]),f=null,Ce=!1,fe=_e({val:"gaScoreVal",pct:"gaScorePct"}),C=Ue("gaFeedback"),ba=J(t("keyboardGAIdent"),()=>{}),at=()=>t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(e=>e.classList.toggle("inactive",!T.has(e.dataset.qkey)));function ma(){let e=t("gaAnswersGrid");e.innerHTML="",ne.forEach(a=>{let r=document.createElement("button");r.className="ans-btn",r.dataset.qkey=a.key,r.textContent=a.label,r.onclick=()=>va(a.key,r),e.append(r)}),at()}function St(){let e=t("gaQualityPool");e.innerHTML="",ne.forEach(a=>{let r=document.createElement("button");r.className="quality-btn"+(T.has(a.key)?" active":""),r.setAttribute("aria-pressed",T.has(a.key)),r.textContent=a.label,r.onclick=()=>{T.has(a.key)&&T.size===1||(T.has(a.key)?T.delete(a.key):T.add(a.key),St(),at())},e.append(r)})}let ga=()=>ke(dt(f.rootMidi,f.q),{mode:f.mode,noteSec:Ze(),chordSec:Ze()*3.2}),Mt=()=>{f&&(Q(t("gaPlayBtn")),A(ga()))};function rt(e){Ce=!1,C.clear();let a=ne.filter(m=>T.has(m.key));if(!a.length){C.show("\u26A0 Aucune qualit\xE9 s\xE9lectionn\xE9e !","wrong"),f=null;return}let r=a[I(0,a.length-1)],o=Math.max(...r.intervals),s=_,d=F-o;if(s>d){C.show("\u26A0 Amplitude trop \xE9troite pour cette qualit\xE9 !","wrong"),f=null;return}f={q:r,rootMidi:I(s,d),mode:ze()},t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(m=>{m.classList.remove("wrong","correct"),m.disabled=!1}),at(),ba.setIdentMarker(f.rootMidi),e&&U(Mt,180)}function va(e,a){Ce||!f||a.classList.contains("inactive")||(f.note||(f.note=!0,De({j:"oreille-gammes",e:Vt(f.q.key),m:"O",ok:e===f.q.key,r:e,c:f.mode})),fe.st.total++,e===f.q.key?(Ce=!0,fe.st.ok++,fe.update(),a.classList.add("correct"),t("gaAnswersGrid").querySelectorAll(".ans-btn").forEach(r=>{r!==a&&(r.disabled=!0)}),C.show(`\u2713 Bravo !  ${f.q.label}`,"correct"),C.soon(()=>{C.clear(),rt(!0)},Se*1e3)):(fe.update(),a.classList.add("wrong"),a.disabled=!0,C.show("\u2717 Essaie encore\u2026","wrong"),C.soon(()=>{Ce||C.clear()},1200)))}t("gaPlayBtn").onclick=Mt,t("gaResetBtn").onclick=()=>{fe.reset(),rt(!1)};let ha=()=>{try{return JSON.parse(localStorage.getItem(aa)||"[]")}catch{return[]}},ot=e=>{try{return localStorage.setItem(aa,JSON.stringify(e)),!0}catch{return!1}},M=ha(),W=()=>[...Qt.map((e,a)=>({...e,id:`b${a}`})),...M.map((e,a)=>({genre:"importe",title:e.title,featured:`${e.measures} mesure${e.measures>1?"s":""} \u2014 ${e.cree?"phrase cr\xE9\xE9e ici":"document Scorsaire"}`,noteDoc:e.noteDoc,id:`i${a}`,imp:a,cree:!!e.cree}))],st=e=>e.noteDoc?{noteDoc:e.noteDoc,speed:1+pe/100}:Yt(e.desc,pe),w=null,P="classique",Et=J(t("keyboardWorks"),e=>w&&A({...st(w),transpose:e},{host:t("worksStaffWrap")}));function Lt(e){w=e,t("worksTitle").textContent=e.title,t("worksPlayerPanel").style.display="",ue(t("worksStaffWrap"),e.noteDoc?{noteDoc:e.noteDoc}:e.desc,Me(t("worksStaffWrap"))),e.desc?Et.setPhrase(ct(e.desc)):Et.setPhrase(60),t("worksPickerBtn").textContent=`\u{1F3B5} ${e.title} \u2014 changer`}let At=(e,a,r,o)=>{e.innerHTML="",[...o?[{key:"mixed",label:"Mixte"}]:[],...ut].forEach(s=>{let d=s.key==="mixed"?W().length:W().filter(S=>S.genre===s.key).length;if(s.key==="importe"&&!d)return;let m=document.createElement("button");m.className="tab-btn"+(s.key===a?" active":""),m.textContent=s.label,m.setAttribute("aria-pressed",s.key===a),m.onclick=()=>r(s.key),e.append(m)})};function Pe(){At(t("worksGenreTabs"),P,r=>{P=r,Pe()});let e=t("worksList");e.innerHTML="";let a=W().filter(r=>r.genre===P);t("worksExportAll").textContent=`\u2B07 Exporter ces ${a.length} phrase${a.length>1?"s":""} (un fichier Scorsaire)`,t("worksExportAll").hidden=!a.length,a.forEach(r=>{let o=document.createElement("div");o.style.cssText="display:flex;gap:6px;align-items:stretch";let s=document.createElement("button");if(s.className="phrase-item",s.style.flex="1",s.innerHTML='<span class="pi-title"></span><span class="pi-meta"></span>',s.querySelector(".pi-title").textContent=r.title,s.querySelector(".pi-meta").textContent=r.featured,s.onclick=()=>{Lt(r),Ee.close()},o.append(s),r.cree){let d=document.createElement("button");d.className="mini-btn",d.textContent="\u270F",d.setAttribute("aria-label",`Modifier ${r.title}`),d.onclick=()=>{Ee.close(),Tt(r.imp)},o.append(d)}if(r.imp!=null){let d=document.createElement("button");d.className="mini-btn",d.textContent="\u{1F5D1}",d.setAttribute("aria-label",`Retirer ${r.title}`),d.onclick=()=>{M.splice(r.imp,1),ot(M),w?.id===r.id&&(w=null,t("worksPlayerPanel").style.display="none"),M.length||(P="classique"),Pe(),re()},o.append(d)}e.append(o)})}function Nt(e,a){let r=new Blob([ea(e)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=ta(a),document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3),t("importNote").textContent=`Fichier \xAB ${o.download} \xBB t\xE9l\xE9charg\xE9 (${e.length} phrase${e.length>1?"s":""}) : \xE0 ouvrir dans Scorsaire.`}t("worksExport").onclick=()=>{w&&Nt([w],w.title)},t("worksExportAll").onclick=()=>{let e=W().filter(a=>a.genre===P);e.length&&Nt(e,ut.find(a=>a.key===P).label==="Mes phrases"?"Mes phrases":`Phrases ${ut.find(a=>a.key===P).label}`)},t("worksPickerBtn").onclick=()=>{Pe(),Ee.open()},t("worksPlay").onclick=()=>{w&&(Q(t("worksPlay")),A(st(w),{button:t("worksPlay"),host:t("worksStaffWrap")}))},h.push(()=>{w&&t("worksEcoutePanel").classList.contains("active")&&t("panelWorks").classList.contains("active")&&ue(t("worksStaffWrap"),w.noteDoc?{noteDoc:w.noteDoc}:w.desc,Me(t("worksStaffWrap")))}),h.push(()=>{j&&t("panelPhrase").classList.contains("active")&&t("gaEcoutePanel").classList.contains("active")&&ue(t("staffWrap"),ee(),ee().width)});let V=null;async function Tt(e=null){t("importNote").textContent="";let a;try{a=await import("./editeur-phrase-IFAWLETA.js")}catch{t("importNote").textContent="L\u2019\xE9diteur n\u2019a pas pu \xEAtre charg\xE9. V\xE9rifiez la connexion puis r\xE9essayez.";return}ye(),a.ouvrirEditeur({doc:e==null?null:M[e].noteDoc,sounds:new URLSearchParams(location.search).get("sounds")||zt,theme:x()==="light"?"light":"dark",onSave:r=>{if(!a.aDuContenu(r)){t("importNote").textContent="La phrase est vide : placez au moins une note pour l\u2019enregistrer.";return}V={index:e,text:r,measures:a.nombreDeMesures(r)},t("nameInput").value=e==null?a.titreDuDocument(r)||"Ma phrase":M[e].title,t("nameNote").textContent="",Ve.open(),t("nameInput").focus(),t("nameInput").select()}})}function Ct(){let e=t("nameInput").value.trim();if(!e){t("nameNote").textContent="Donnez un nom \xE0 la phrase.";return}let a={title:e,measures:V.measures,noteDoc:JSON.parse(V.text),cree:!0};V.index==null?M.push(a):M[V.index]=a;let r=ot(M),o=V.index??M.length-1;V=null,Ve.close(),P="importe",re(),Lt(W().find(s=>s.id===`i${o}`)),t("importNote").textContent=r?`Phrase \xAB ${e} \xBB enregistr\xE9e dans \xAB Mes phrases \xBB.`:"Phrase ajout\xE9e pour cette session seulement (espace de stockage du navigateur plein)."}t("createBtn").onclick=()=>Tt(null),t("nameSave").onclick=Ct,t("nameInput").addEventListener("keydown",e=>{e.key==="Enter"&&Ct()}),t("importBtn").onclick=()=>t("importFile").click(),t("importFile").onchange=async e=>{let a=e.target.files[0];if(e.target.value="",!a)return;let r=t("importNote");try{let o=Zt(await a.text());M=[...M,...o],ot(M)?r.textContent=`${o.length} phrase${o.length>1?"s":""} import\xE9e${o.length>1?"s":""} depuis \xAB ${a.name} \xBB : onglet \xAB Mes phrases \xBB du choix de phrase.`:r.textContent="Phrases ajout\xE9es pour cette session seulement (espace de stockage du navigateur plein).",P="importe",Pe(),re()}catch(o){r.textContent=o.message}};let Pt=8,ae="mixed",E=null,Ie=!1,xe=_e({val:"wkScoreVal",pct:"wkScorePct"}),B=Ue("wkFeedback"),It=J(t("keyboardWorksIdent"),()=>{}),fa=()=>ae==="mixed"?W():W().filter(e=>e.genre===ae);function re(){ae==="importe"&&!M.length&&(ae="mixed"),At(t("wkFilterTabs"),ae,e=>{ae=e,re(),qe(!1)},!0)}function qe(e){Ie=!1,B.clear();let a=fa();if(a.length<2){B.show("\u26A0 Pas assez de phrases dans ce r\xE9pertoire !","wrong"),E=null,t("wkAnswersGrid").innerHTML="";return}let r=Math.min(Pt,a.length),o=a[I(0,a.length-1)],s=[o,...a.filter(p=>p!==o).sort(()=>Math.random()-.5).slice(0,r-1)].sort(()=>Math.random()-.5),d=0,m=null;if(o.desc){let[p,u]=Kt(o.desc),g=_-p,Dt=F-u;d=g>Dt?0:I(g,Dt),m=ct(o.desc)+d}else d=I(-4,4);E={work:o,offset:d};let S=t("wkAnswersGrid");S.innerHTML="",s.forEach(p=>{let u=document.createElement("button");u.className="ans-btn",u.style.textAlign="left",u.textContent=p.title,u.onclick=()=>xa(p,u),S.append(u)}),m!=null?It.setIdentMarker(m):It.setIdentMarker(60+d),e&&U(qt,180)}let qt=()=>{E&&(Q(t("wkPlayBtn")),A({...st(E.work),transpose:E.offset}))};function xa(e,a){if(!(Ie||!E)){if(!E.note){E.note=!0;let r=o=>o.id.startsWith("b")?Ht(o.title):"phrase:perso";De({j:"oreille-phrases",e:r(E.work),m:"O",ok:e===E.work||e.id===E.work.id,r:r(e)})}xe.st.total++,e===E.work||e.id===E.work.id?(Ie=!0,xe.st.ok++,xe.update(),a.classList.add("correct"),t("wkAnswersGrid").querySelectorAll(".ans-btn").forEach(r=>{r!==a&&(r.disabled=!0)}),B.show(`\u2713 Bravo !  ${e.title}`,"correct"),B.soon(()=>{B.clear(),qe(!0)},Se*1e3)):(xe.update(),a.classList.add("wrong"),a.disabled=!0,B.show("\u2717 Essaie encore\u2026","wrong"),B.soon(()=>{Ie||B.clear()},1200))}}return t("wkPlayBtn").onclick=qt,t("wkResetBtn").onclick=()=>{xe.reset(),qe(!1)},t("wkIdentSettingsBtn").onclick=()=>{re(),mt.open()},He(t("wkChoiceRange"),t("wkChoiceVal"),e=>String(e),4,16,e=>{Pt=e}),Xe(),ve(),Y(),Z(),da(),z(),Ke(!1),te(),St(),ma(),rt(!1),re(),qe(!1),window.__oreille={root:l,state:()=>({ivCur:v,gaCur:f,wkCur:E,ecDesc:$,gaNames:j,curWork:w,activeModes:[...N],speedPct:pe,noteGap:we})},()=>{b.forEach(e=>e()),delete window.__oreille,n.classList.remove("compact")}}export{Ja as renderOreille};
