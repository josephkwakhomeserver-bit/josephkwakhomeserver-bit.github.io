(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const B=["C","C♯","D","E♭","E","F","F♯","G","A♭","A","B♭","B"],L={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11,Cb:11},N=document.querySelector("#app");if(!N)throw new Error("Missing #app");N.innerHTML=`
  <main class="shell">
    <header class="hero">
      <div>
        <p class="eyebrow">SING WITH YOUR CHORDS</p>
        <h1>ChordJam</h1>
        <p class="hero-copy">Enter a chord progression, pick guitar or piano, set the tempo, and get an instant looping accompaniment to sing over.</p>
      </div>
      <div class="badge">100% browser · no API</div>
    </header>

    <section class="preset-strip" aria-label="Chord presets">
      <button class="preset" data-chords="C G Am F">Pop · C G Am F</button>
      <button class="preset" data-chords="G D Em C">Open · G D Em C</button>
      <button class="preset" data-chords="Am F C G">Minor Pop · Am F C G</button>
      <button class="preset" data-chords="Cmaj7 Am7 Dm7 G7">Soft · Cmaj7 Am7 Dm7 G7</button>
      <button class="preset" data-chords="D A Bm G">Bright · D A Bm G</button>
    </section>

    <section class="studio">
      <form id="controls" class="panel controls">
        <div class="field">
          <label for="progression">Chord progression</label>
          <textarea id="progression" spellcheck="false" placeholder="C | G | Am | F">C | G | Am | F</textarea>
          <p class="hint">Separate chords with spaces or |. Try: Cmaj7, Am7, Fsus2, G7, D/F#.</p>
        </div>

        <div class="row">
          <div class="field">
            <label for="instrument">Instrument</label>
            <select id="instrument">
              <option value="guitar">Acoustic Guitar</option>
              <option value="piano">Piano</option>
            </select>
          </div>
          <div class="field">
            <label for="pattern">Pattern</label>
            <select id="pattern">
              <option value="arpeggio">Arpeggio</option>
              <option value="strum">Strum</option>
              <option value="ballad">Ballad</option>
              <option value="block">Block Chords</option>
            </select>
          </div>
        </div>

        <div class="range-field">
          <div class="range-head"><label for="bpm">Tempo</label><strong id="bpmValue">76 BPM</strong></div>
          <input id="bpm" type="range" min="45" max="180" value="76" />
        </div>

        <div class="row compact-row">
          <div class="field">
            <label for="beatsPerChord">Chord length</label>
            <select id="beatsPerChord">
              <option value="2">2 beats</option>
              <option value="4" selected>1 bar / 4 beats</option>
              <option value="8">2 bars / 8 beats</option>
            </select>
          </div>
          <label class="toggle"><input id="metronome" type="checkbox" /> <span>Metronome</span></label>
        </div>

        <div class="actions">
          <button id="play" type="submit" class="primary">▶ Play accompaniment</button>
          <button id="stop" type="button" class="danger">■ Stop</button>
          <button id="transposeDown" type="button">−1 key</button>
          <button id="transposeUp" type="button">+1 key</button>
        </div>
        <div id="status" class="status" aria-live="polite">Ready. Tap Play to start.</div>
      </form>

      <section class="panel visual">
        <div class="now-playing">
          <div>
            <p class="eyebrow mini">NOW PLAYING</p>
            <h2 id="currentChord">C</h2>
            <p id="position" class="meta">Chord 1 of 4</p>
          </div>
          <div id="instrumentBadge" class="quality-badge">Acoustic Guitar · Arpeggio</div>
        </div>
        <div id="chordRail" class="chord-rail"></div>
        <div class="pulse-card">
          <div class="beat-dots" id="beatDots"><span></span><span></span><span></span><span></span></div>
          <div class="big-note" id="bigNote">Sing here.</div>
          <p>Looping accompaniment stays on your progression until you stop it.</p>
        </div>
        <div class="tips">
          <div><strong>Guitar</strong><span>Strum staggers strings; arpeggio picks chord tones one by one.</span></div>
          <div><strong>Piano</strong><span>Ballad alternates bass and upper chord tones; block plays the full harmony.</span></div>
          <div><strong>Practice</strong><span>Adjust BPM while stopped, transpose the whole progression, then sing over the loop.</span></div>
        </div>
      </section>
    </section>
  </main>
`;const p=l("progression"),y=l("instrument"),d=l("pattern"),x=l("bpm"),H=l("bpmValue"),Y=l("beatsPerChord"),J=l("metronome"),K=l("controls"),_=l("stop"),Q=l("transposeDown"),X=l("transposeUp"),k=l("status"),O=l("currentChord"),$=l("position"),Z=l("instrumentBadge"),ee=l("chordRail"),te=l("beatDots");let i=null,A=null,E=null,v=0,P=0,T=!1,b=[],c=h(p.value);C(c,0);G();x.addEventListener("input",G);y.addEventListener("change",ce);d.addEventListener("change",G);p.addEventListener("input",()=>{const t=h(p.value);t.length&&(c=t,C(t,0),m(`${t.length} chord${t.length===1?"":"s"} recognized.`))});document.querySelectorAll("[data-chords]").forEach(t=>{t.addEventListener("click",()=>{var e;p.value=(e=t.dataset.chords)!=null?e:"",c=h(p.value),C(c,0),m("Preset loaded.")})});K.addEventListener("submit",t=>{t.preventDefault(),ne()});_.addEventListener("click",I);Q.addEventListener("click",()=>q(-1));X.addEventListener("click",()=>q(1));async function ne(){var n;I();const t=h(p.value);if(!t.length){m("Enter at least one valid chord, for example: C G Am F",!0);return}c=t;const e=(n=window.AudioContext)!=null?n:window.webkitAudioContext;if(!e){m("Web Audio is not supported in this browser.",!0);return}i=i!=null?i:new e,i.state==="suspended"&&await i.resume(),T=!0,P=0,v=i.currentTime+.06,V(),A=window.setInterval(V,25),E=window.setInterval(le,40),m("Playing. Sing over the loop — it will repeat until you stop it.")}function I(){var t,e;T=!1,A!==null&&window.clearInterval(A),E!==null&&window.clearInterval(E),A=null,E=null;for(const n of b)try{n.stop()}catch(s){}b=[],O.textContent=(e=(t=c[0])==null?void 0:t.label)!=null?e:"—",$.textContent=c.length?`Chord 1 of ${c.length}`:"No progression",M(-1)}function V(){if(!T||!i)return;const t=R(),e=60/t.bpm,n=i.currentTime+.16;for(;v<n;)oe(P,v,t),v+=e,P+=1}function oe(t,e,n){if(!i||!c.length)return;const s=Math.floor(t/n.beatsPerChord)%c.length,o=t%n.beatsPerChord,a=c[s],r=60/n.bpm;if(n.metronome&&ie(e,t%4===0),n.instrument==="guitar")if(n.pattern==="strum"){const u=o%2===1;D(a,e,r*.82,u)}else n.pattern==="block"?D(a,e,r*.92,!1):se(a,e,r,o);else n.pattern==="block"||n.pattern==="strum"?ae(a,e,r*.86):re(a,e,r,o)}function D(t,e,n,s){const o=S(t);(s?[...o].reverse():o).forEach((r,u)=>F(r,e+u*.026,n,.16))}function se(t,e,n,s){const o=S(t),a=[[0,2,4,3],[1,3,4,2],[0,3,4,2],[1,2,4,3]];a[s%a.length].forEach((u,g)=>{const z=o[u%o.length];F(z,e+g*n/4,n*.72,g===0?.19:.13)})}function ae(t,e,n){j(t).forEach((s,o)=>f(s,e+o*.008,n,o===0?.17:.12))}function re(t,e,n,s){var a;const o=j(t);s%2===0?(f(o[0],e,n*.9,.18),f(o[1],e+n*.5,n*.46,.1),f(o[2],e+n*.5,n*.46,.1)):(f((a=o[3])!=null?a:o[2],e,n*.45,.11),f(o[2],e+n*.5,n*.45,.1))}function F(t,e,n,s){if(!i)return;const o=i.createOscillator(),a=i.createGain(),r=i.createBiquadFilter();o.type="triangle",o.frequency.setValueAtTime(U(t),e),r.type="lowpass",r.frequency.setValueAtTime(3100,e),r.frequency.exponentialRampToValueAtTime(780,e+Math.max(.08,n)),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.008),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(r).connect(a).connect(i.destination),w(o,e,n+.04)}function f(t,e,n,s){if(!i)return;const o=i.createOscillator(),a=i.createOscillator(),r=i.createGain(),u=i.createGain(),g=U(t);o.type="sine",a.type="triangle",o.frequency.setValueAtTime(g,e),a.frequency.setValueAtTime(g*2,e),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(s,e+.006),r.gain.exponentialRampToValueAtTime(1e-4,e+n),u.gain.setValueAtTime(s*.22,e),u.gain.exponentialRampToValueAtTime(1e-4,e+Math.min(n,.45)),o.connect(r).connect(i.destination),a.connect(u).connect(i.destination),w(o,e,n+.03),w(a,e,n+.03)}function ie(t,e){if(!i)return;const n=i.createOscillator(),s=i.createGain();n.frequency.setValueAtTime(e?1450:980,t),s.gain.setValueAtTime(e?.055:.028,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.035),n.connect(s).connect(i.destination),w(n,t,.04)}function w(t,e,n){b.push(t),t.addEventListener("ended",()=>{const s=b.indexOf(t);s>=0&&b.splice(s,1)}),t.start(e),t.stop(e+n)}function le(){if(!T||!i||!c.length)return;const t=R(),e=60/t.bpm,n=Math.max(0,Math.floor((i.currentTime-(v-P*e))/e)),s=Math.floor(n/t.beatsPerChord)%c.length,o=n%4;C(c,s),M(o)}function C(t,e){var s;ee.replaceChildren(...t.map((o,a)=>{const r=document.createElement("button");return r.type="button",r.className=`chord-pill${a===e?" active":""}`,r.textContent=o.label,r.addEventListener("click",()=>{p.focus(),m(`Chord ${o.label} selected in the progression.`)}),r}));const n=t[e];O.textContent=(s=n==null?void 0:n.label)!=null?s:"—",$.textContent=n?`Chord ${e+1} of ${t.length}`:"No valid chords"}function M(t){[...te.children].forEach((e,n)=>e.classList.toggle("active",n===t))}function R(){return{progression:p.value,instrument:y.value,pattern:d.value,bpm:Number(x.value),beatsPerChord:Number(Y.value),metronome:J.checked}}function G(){var n,s;H.textContent=`${x.value} BPM`;const t=y.value==="guitar"?"Acoustic Guitar":"Piano",e=(s=(n=d.options[d.selectedIndex])==null?void 0:n.text)!=null?s:d.value;Z.textContent=`${t} · ${e}`}function ce(){y.value==="piano"&&d.value==="strum"&&(d.value="ballad"),y.value==="guitar"&&d.value==="ballad"&&(d.value="arpeggio"),G()}function q(t){const e=h(p.value);e.length&&(p.value=e.map(n=>ue(n,t)).join(" | "),c=h(p.value),C(c,0),m(`Progression transposed ${t>0?"up":"down"} one semitone.`))}function ue(t,e){var u;const n=(t.root+e+12)%12,s=(t.bass+e+12)%12,o=t.raw.match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/),a=(u=o==null?void 0:o[2])!=null?u:"",r=o!=null&&o[3]?`/${B[s].replace("♯","#").replace("♭","b")}`:"";return`${B[n].replace("♯","#").replace("♭","b")}${a}${r}`}function h(t){return t.replace(/[|,\n]+/g," ").split(/\s+/).map(e=>e.trim()).filter(Boolean).map(pe).filter(e=>e!==null)}function pe(t){var r;const e=t.match(/^([A-G](?:#|b)?)([^/]*)?(?:\/([A-G](?:#|b)?))?$/);if(!e)return null;const n=L[e[1]];if(n===void 0)return null;const s=((r=e[2])!=null?r:"").toLowerCase();let o=[0,4,7];s.startsWith("m")&&!s.startsWith("maj")&&(o=[0,3,7]),s.includes("dim")&&(o=[0,3,6]),s.includes("sus2")&&(o=[0,2,7]),(s.includes("sus4")||s==="sus")&&(o=[0,5,7]),s.includes("maj7")?o=[...o,11]:s.includes("7")&&(o=[...o,10]);const a=e[3]?L[e[3]]:n;return a===void 0?null:{raw:t,root:n,bass:a,intervals:o,label:t}}function S(t){var s;const e=40+(t.bass-4+12)%12,n=t.intervals.map((o,a)=>52+t.root+o+(a>1,0));return[e,n[0],n[1],n[2],(s=n[3])!=null?s:n[0]+12].map(W)}function j(t){const e=36+t.bass,n=t.intervals.map(s=>60+t.root+s);return[e,...n].map(W)}function U(t){return 440*2**((t-69)/12)}function W(t){return Math.max(28,Math.min(88,t))}function m(t,e=!1){k.textContent=t,k.classList.toggle("error",e)}function l(t){const e=document.getElementById(t);if(!e)throw new Error(`Missing element: ${t}`);return e}
