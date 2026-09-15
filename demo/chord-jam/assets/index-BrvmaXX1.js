(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const wt=[{title:"Classic Pop Loop",category:"Pop",chords:"C | G | Am | F"},{title:"Let It Be",category:"Pop",chords:"C | G | Am | F | C | G | F | C",note:"Simplified practice arrangement"},{title:"Stand by Me",category:"Pop",chords:"G | Em | C | D | G | Em | C | D",note:"Simplified practice arrangement"},{title:"With or Without You",category:"Pop",chords:"D | A | Bm | G | D | A | Bm | G | D | A | Bm | G",note:"Simplified practice loop"},{title:"I’m Yours",category:"Pop",chords:"B | F# | G#m | E | B | F# | G#m | E | B | F# | G#m | E | B | F# | G#m | E",note:"Simplified practice loop"},{title:"Korean Pop Ballad",category:"K-Pop/Korean",chords:"C | G/B | Am | Em | F | C/E | Dm7 | G7"},{title:"Korean Acoustic Pop",category:"K-Pop/Korean",chords:"G | D/F# | Em | Bm | C | G/B | Am7 | D7 | G | D/F# | Em | Bm"},{title:"Korean Drama Ballad",category:"Ballad",chords:"C | Em/B | Am | Am/G | F | C/E | Dm7 | G7 | Em | Am | Dm7 | G7 | C | G/B | Am | G"},{title:"아리랑 (Arirang)",category:"Korean Kids",chords:"G | G | C | G | D | G | D | G",note:"Traditional-song practice harmony"},{title:"산토끼",category:"Korean Kids",chords:"C | C | G7 | C | C | F | G7 | C",note:"Easy sing-along harmony"},{title:"나비야",category:"Korean Kids",chords:"C | G7 | C | C | F | C | G7 | C",note:"Easy sing-along harmony"},{title:"작은 별",category:"Korean Kids",chords:"C | F | C | G7 | C | F | C | G7 | C | G7 | C | G7",note:"Twinkle melody practice harmony"},{title:"Twinkle, Twinkle, Little Star",category:"Baby Songs",chords:"C | F | C | G7 | C | F | C | G7 | C | G7 | C | G7",note:"Common beginner harmony"},{title:"Row, Row, Row Your Boat",category:"Baby Songs",chords:"C | C | C | G7 | C | C | G7 | C",note:"Common Canadian/English sing-along"},{title:"Old MacDonald Had a Farm",category:"Baby Songs",chords:"C | C | F | C | G7 | F | C | G7 | C | C | F | C",note:"Common beginner harmony"},{title:"Mary Had a Little Lamb",category:"Baby Songs",chords:"C | G7 | C | C | F | C | G7 | C | C | G7 | C | C | F | G7 | C | C",note:"Common beginner harmony"},{title:"6/8 Folk Feel",category:"Folk",chords:"G | D | Em | C | G | D | C | D"}],ut="chordjam.custom-presets.v1",ot=["C","C♯","D","E♭","E","F","F♯","G","A♭","A","B♭","B"],at={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11,Cb:11},pt=document.querySelector("#app");if(!pt)throw new Error("Missing #app");pt.innerHTML=`
  <main class="shell">
    <header class="hero">
      <div>
        <p class="eyebrow">SING WITH YOUR CHORDS</p>
        <h1>ChordJam</h1>
        <p class="hero-copy">Enter a chord progression, pick guitar or piano, set the tempo, and get an instant looping accompaniment to sing over.</p>
      </div>
      <div class="badge">Studio browser audio · no API</div>
    </header>

    <section class="preset-library" aria-label="Song and chord presets">
      <div class="preset-toolbar">
        <div>
          <p class="eyebrow mini">PRESET LIBRARY</p>
          <strong>4 · 8 · 12 · 16 chord practice sets</strong>
        </div>
        <select id="presetCategory" aria-label="Preset genre">
          <option value="All">All genres</option>
          <option value="Pop">Pop</option>
          <option value="K-Pop/Korean">K-Pop / Korean</option>
          <option value="Korean Kids">한국 동요</option>
          <option value="Baby Songs">Baby Songs</option>
          <option value="Ballad">Ballad</option>
          <option value="Folk">Folk</option>
          <option value="Custom">My Presets</option>
        </select>
      </div>
      <div id="presetStrip" class="preset-strip"></div>
      <div class="preset-add">
        <input id="presetName" type="text" maxlength="48" placeholder="Preset name" aria-label="Custom preset name" />
        <button id="savePreset" type="button">＋ Save current chords</button>
      </div>
      <p class="hint">Named songs use simplified practice harmonies, not official sheet-music transcriptions. Custom presets stay only in this browser.</p>
    </section>

    <section class="studio">
      <form id="controls" class="panel controls">
        <div class="field">
          <label for="progression">Chord progression</label>
          <textarea id="progression" spellcheck="false" placeholder="C | G | Am | F">C | G | Am | F</textarea>
          <div class="length-tools" aria-label="Progression length helpers">
            <span>Quick length</span>
            <button type="button" data-expand="4">4</button><button type="button" data-expand="8">8</button><button type="button" data-expand="12">12</button><button type="button" data-expand="16">16</button>
          </div>
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
          <div><strong>Guitar</strong><span>Plucked-string modeling adds body and decay; strums still stagger each string.</span></div>
          <div><strong>Piano</strong><span>Layered piano harmonics, hammer attack and room tone make ballad/block patterns fuller.</span></div>
          <div><strong>iPhone</strong><span>Start from a Play tap. If iOS interrupts audio after app switching or lock, tap Play again.</span></div>
        </div>
      </section>
    </section>
  </main>
`;const y=p("progression"),z=p("presetCategory"),rt=p("presetStrip"),j=p("presetName"),Bt=p("savePreset"),M=p("instrument"),A=p("pattern"),_=p("bpm"),xt=p("bpmValue"),Mt=p("beatsPerChord"),St=p("metronome"),Ft=p("controls"),kt=p("stop"),Tt=p("transposeDown"),Lt=p("transposeUp"),st=p("status"),dt=p("currentChord"),mt=p("position"),Dt=p("instrumentBadge"),Nt=p("chordRail"),$t=p("beatDots");let i=null,K=null,O=null,q=0,W=0,Y=0,N=!1,w=null,L=null,D=[];const it=new Map;let m=E(y.value);S(m,0);Q();V();_.addEventListener("input",V);M.addEventListener("change",Zt);A.addEventListener("change",V);y.addEventListener("input",()=>{const t=E(y.value);t.length&&(m=t,S(t,0),g(`${t.length} chord${t.length===1?"":"s"} recognized.`))});z.addEventListener("change",Q);Bt.addEventListener("click",Qt);document.querySelectorAll("[data-expand]").forEach(t=>{t.addEventListener("click",()=>Xt(Number(t.dataset.expand)))});Ft.addEventListener("submit",t=>{t.preventDefault(),It()});kt.addEventListener("click",J);Tt.addEventListener("click",()=>Pt(-1));Lt.addEventListener("click",()=>Pt(1));async function It(){var o;J();const t=E(y.value);if(!t.length){g("Enter at least one valid chord, for example: C G Am F",!0);return}m=t;const e=(o=window.AudioContext)!=null?o:window.webkitAudioContext;if(!e){g("Web Audio is not supported in this browser.",!0);return}if(Kt(),!i){try{i=new e({latencyHint:"interactive"})}catch(a){i=new e}i.addEventListener("statechange",Rt)}if(i.state==="suspended"&&await i.resume(),i.state!=="running"){g("Audio could not start. On iPhone, tap Play again after returning to Safari.",!0);return}Ot();const n=X();g("Preparing higher-quality instrument tone…"),ht(t,n.instrument),N=!0,Y=0,W=i.currentTime+.09,q=W,lt(),K=window.setInterval(lt,25),O=window.setInterval(_t,40),g("Playing with studio tone. Sing over the loop — it repeats until you stop it.")}function J(){var t,e;N=!1,K!==null&&window.clearInterval(K),O!==null&&window.clearInterval(O),K=null,O=null;for(const n of D)try{n.stop()}catch(o){}D=[],dt.textContent=(e=(t=m[0])==null?void 0:t.label)!=null?e:"—",mt.textContent=m.length?`Chord 1 of ${m.length}`:"No progression",Et(-1)}function Rt(){!i||!N||i.state==="running"||(J(),g("Audio was interrupted by iPhone/Safari. Tap Play to restart the loop.",!0))}function Kt(){const t=navigator;try{t.audioSession&&(t.audioSession.type="playback")}catch(e){}}function Ot(){if(!i||w)return;w=i.createGain(),w.gain.value=.86,L=i.createGain(),L.gain.value=.72;const t=i.createBiquadFilter();t.type="highpass",t.frequency.value=42,t.Q.value=.55;const e=i.createBiquadFilter();e.type="peaking",e.frequency.value=260,e.Q.value=.7,e.gain.value=2.1;const n=i.createBiquadFilter();n.type="highshelf",n.frequency.value=4200,n.gain.value=-1.2;const o=i.createConvolver();o.normalize=!0,o.buffer=qt(i);const a=i.createGain();a.gain.value=.13;const r=i.createDynamicsCompressor();r.threshold.value=-20,r.knee.value=16,r.ratio.value=2.7,r.attack.value=.005,r.release.value=.2;const s=i.createGain();s.gain.value=.86,w.connect(t).connect(e).connect(n).connect(r),w.connect(o).connect(a).connect(r),L.connect(r),r.connect(s).connect(i.destination)}function qt(t){const n=Math.max(1,Math.floor(t.sampleRate*.72)),o=t.createBuffer(2,n,t.sampleRate);let a=5370206;const r=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let s=0;s<o.numberOfChannels;s+=1){const l=o.getChannelData(s);for(let d=0;d<n;d+=1){const v=(1-d/n)**3.1;l[d]=(r()*2-1)*v*.34}[.017,.031,.047,.071].forEach((d,u)=>{const v=Math.min(n-1,Math.floor(d*t.sampleRate));l[v]+=(u%2===s?.52:-.34)/(u+1)})}return o}function ht(t,e){if(!i)return;const n=new Set;for(const o of t)(e==="guitar"?Z(o):tt(o)).forEach(r=>n.add(r));n.forEach(o=>vt(e,o))}function lt(){if(!N||!i)return;const t=X(),e=60/t.bpm,n=i.currentTime+.16;for(;q<n;)Vt(Y,q,t),q+=e,Y+=1}function Vt(t,e,n){if(!i||!m.length)return;const o=Math.floor(t/n.beatsPerChord)%m.length,a=t%n.beatsPerChord,r=m[o],s=60/n.bpm;if(n.metronome&&zt(e,t%4===0),n.instrument==="guitar")if(n.pattern==="strum"){const l=a%2===1;ct(r,e,s*.82,l)}else n.pattern==="block"?ct(r,e,s*.92,!1):Ht(r,e,s,a);else n.pattern==="block"||n.pattern==="strum"?jt(r,e,s*.86):Ut(r,e,s,a)}function ct(t,e,n,o){const a=Z(t),r=o?[...a].reverse():a;r.forEach((s,l)=>{const c=r.length>1?(l/(r.length-1)-.5)*.22:0;ft(s,e+l*.024,n,l===0?.17:.145,c)})}function Ht(t,e,n,o){const a=Z(t),r=[[0,2,4,3],[1,3,4,2],[0,3,4,2],[1,2,4,3]];r[o%r.length].forEach((l,c)=>{const d=a[l%a.length],u=(l%a.length/Math.max(1,a.length-1)-.5)*.18;ft(d,e+c*n/4,n*.72,c===0?.18:.125,u)})}function jt(t,e,n){const o=tt(t);o.forEach((a,r)=>{const s=(r/Math.max(1,o.length-1)-.5)*.3;x(a,e+r*.007,n,r===0?.16:.105,s)})}function Ut(t,e,n,o){var r;const a=tt(t);o%2===0?(x(a[0],e,n*.9,.17,-.14),x(a[1],e+n*.5,n*.46,.095,.04),x(a[2],e+n*.5+.006,n*.46,.09,.13)):(x((r=a[3])!=null?r:a[2],e,n*.45,.1,.16),x(a[2],e+n*.5,n*.45,.09,.06))}function ft(t,e,n,o,a=0){gt("guitar",t,e,Math.max(.62,n*1.9),o,a)}function x(t,e,n,o,a=0){gt("piano",t,e,Math.max(.95,n*2.25),o,a)}function gt(t,e,n,o,a,r){if(!i||!w)return;const s=i.createBufferSource(),l=i.createGain(),c=i.createStereoPanner(),d=vt(t,e),u=Math.max(n,i.currentTime+.002),v=u+Math.min(d.duration,o);s.buffer=d,c.pan.setValueAtTime(Math.max(-.85,Math.min(.85,r)),u),l.gain.setValueAtTime(1e-4,u),l.gain.linearRampToValueAtTime(a,u+.006),l.gain.setValueAtTime(a*.92,Math.min(v-.05,u+.06)),l.gain.exponentialRampToValueAtTime(1e-4,Math.max(u+.08,v-.015)),s.connect(l).connect(c).connect(w),bt(s,u,v-u)}function vt(t,e){if(!i)throw new Error("Audio context is not ready.");const n=`${t}:${e}:${i.sampleRate}`,o=it.get(n);if(o)return o;const a=t==="guitar"?Wt(e):Yt(e);return it.set(n,a),a}function Wt(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=Gt(t),o=Math.max(2.35,Math.min(3.5,3.25-(t-40)*.018)),a=Math.floor(e*o),r=i.createBuffer(1,a,e),s=r.getChannelData(0),l=Math.max(2,Math.round(e/n)),c=new Float32Array(l);let d=t*2654435761>>>0,u=0;const v=()=>(d=d*1664525+1013904223>>>0,d/4294967296);for(let b=0;b<l;b+=1){const C=v()*2-1;c[b]=C*.7+u*.3,u=C}const F=Math.max(.9948,Math.min(.9976,.99725-(t-52)*22e-6));let P=0,B=0,k=0;for(let b=0;b<a;b+=1){const C=c[P],$=c[(P+1)%l];c[P]=(C*.49+$*.51)*F,P=(P+1)%l,B+=(C-B)*.055;const I=b/e,T=Math.min(1,I/.0035),h=b<e*.018?(v()*2-1)*(1-I/.018)*.045:0,G=(C*.82+B*.27+h)*T;s[b]=G,k=Math.max(k,Math.abs(G))}return yt(s,k,.86),r}function Yt(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=Gt(t),o=t<48?4.25:t<68?3.55:2.9,a=Math.floor(e*o),r=i.createBuffer(1,a,e),s=r.getChannelData(0),l=[1,.57,.36,.23,.145,.09,.052],c=l.length,d=new Float64Array(c),u=new Float64Array(c),v=new Float64Array(c),F=new Float64Array(c),P=new Float64Array(c),B=new Float64Array(c),k=6e-5+Math.max(0,t-48)*18e-7,b=.72+Math.max(0,t-45)*.012;for(let h=0;h<c;h+=1){const G=h+1,H=n*G*Math.sqrt(1+k*G*G),R=2*Math.PI*H/e;d[h]=0,u[h]=1,v[h]=Math.sin(R),F[h]=Math.cos(R),P[h]=l[h],B[h]=Math.exp(-(b+h*.54)/e)}let C=t*2246822519+3266489917>>>0,$=1;const I=Math.exp(-78/e);let T=0;for(let h=0;h<a;h+=1){let G=0;for(let f=0;f<c;f+=1){G+=d[f]*P[f];const nt=d[f];d[f]=nt*F[f]+u[f]*v[f],u[f]=u[f]*F[f]-nt*v[f],P[f]*=B[f]}C=C*1664525+1013904223>>>0;const H=(C/4294967296*2-1)*.07*$;$*=I;const R=Math.min(1,h/Math.max(1,e*.004)),et=Math.tanh((G*.62+H)*1.12)*R;s[h]=et,T=Math.max(T,Math.abs(et))}return yt(s,T,.82),r}function yt(t,e,n){if(e<=1e-5)return;const o=n/e;for(let a=0;a<t.length;a+=1)t[a]*=o}function zt(t,e){if(!i||!L)return;const n=i.createOscillator(),o=i.createGain();n.type="sine",n.frequency.setValueAtTime(e?1450:980,t),o.gain.setValueAtTime(e?.05:.025,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.032),n.connect(o).connect(L),bt(n,t,.038)}function bt(t,e,n){D.push(t),t.addEventListener("ended",()=>{const o=D.indexOf(t);o>=0&&D.splice(o,1)}),t.start(e),t.stop(e+n)}function _t(){if(!N||!i||!m.length)return;const t=X(),e=60/t.bpm,n=Math.max(0,Math.floor((i.currentTime-W)/e)),o=Math.floor(n/t.beatsPerChord)%m.length,a=n%4;S(m,o),Et(a)}function Ct(){try{const t=localStorage.getItem(ut);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.filter(n=>{if(!n||typeof n!="object")return!1;const o=n;return typeof o.title=="string"&&typeof o.chords=="string"}).map(n=>({...n,category:"Custom"})):[]}catch(t){return[]}}function Q(){const t=z.value,e=[...wt,...Ct()].filter(n=>t==="All"||n.category===t);if(rt.replaceChildren(...e.map(n=>{const o=document.createElement("button");o.type="button",o.className="preset preset-card";const a=E(n.chords).length;return o.innerHTML=`<span>${U(n.title)}</span><small>${U(n.category)} · ${a} chords${n.note?` · ${U(n.note)}`:""}</small>`,o.addEventListener("click",()=>Jt(n)),o})),!e.length){const n=document.createElement("p");n.className="preset-empty",n.textContent="No presets in this category yet. Save the current progression to add one.",rt.replaceChildren(n)}}function Jt(t){y.value=t.chords,m=E(t.chords),S(m,0),g(`${t.title} loaded · ${m.length} chords.`)}function Qt(){const t=j.value.trim(),e=E(y.value);if(!t){g("Enter a name for your preset first.",!0),j.focus();return}if(!e.length){g("Enter at least one valid chord before saving.",!0);return}const n=Ct().filter(o=>o.title.toLowerCase()!==t.toLowerCase());n.unshift({title:t,category:"Custom",chords:e.map(o=>o.raw).join(" | ")});try{localStorage.setItem(ut,JSON.stringify(n.slice(0,40))),j.value="",z.value="Custom",Q(),g(`Saved “${t}” in My Presets.`)}catch(o){g("This browser could not save the preset locally.",!0)}}function Xt(t){const e=E(y.value);if(!e.length||![4,8,12,16].includes(t))return;const n=Array.from({length:t},(o,a)=>e[a%e.length].raw);y.value=n.join(" | "),m=E(y.value),S(m,0),g(`Progression expanded to ${t} chords. Edit any chord freely.`)}function U(t){return t.replace(/[&<>"']/g,e=>{var n;return(n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[e])!=null?n:e})}function S(t,e){var o;Nt.replaceChildren(...t.map((a,r)=>{const s=document.createElement("button");return s.type="button",s.className=`chord-pill${r===e?" active":""}`,s.textContent=a.label,s.addEventListener("click",()=>{y.focus(),g(`Chord ${a.label} selected in the progression.`)}),s}));const n=t[e];dt.textContent=(o=n==null?void 0:n.label)!=null?o:"—",mt.textContent=n?`Chord ${e+1} of ${t.length}`:"No valid chords"}function Et(t){[...$t.children].forEach((e,n)=>e.classList.toggle("active",n===t))}function X(){return{progression:y.value,instrument:M.value,pattern:A.value,bpm:Number(_.value),beatsPerChord:Number(Mt.value),metronome:St.checked}}function V(){var n,o;xt.textContent=`${_.value} BPM`;const t=M.value==="guitar"?"Acoustic Guitar":"Piano",e=(o=(n=A.options[A.selectedIndex])==null?void 0:n.text)!=null?o:A.value;Dt.textContent=`${t} · ${e}`}function Zt(){M.value==="piano"&&A.value==="strum"&&(A.value="ballad"),M.value==="guitar"&&A.value==="ballad"&&(A.value="arpeggio"),i&&ht(m,M.value),V()}function Pt(t){const e=E(y.value);e.length&&(y.value=e.map(n=>te(n,t)).join(" | "),m=E(y.value),S(m,0),g(`Progression transposed ${t>0?"up":"down"} one semitone.`))}function te(t,e){var l;const n=(t.root+e+12)%12,o=(t.bass+e+12)%12,a=t.raw.match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/),r=(l=a==null?void 0:a[2])!=null?l:"",s=a!=null&&a[3]?`/${ot[o].replace("♯","#").replace("♭","b")}`:"";return`${ot[n].replace("♯","#").replace("♭","b")}${r}${s}`}function E(t){return t.replace(/[|,\n]+/g," ").split(/\s+/).map(e=>e.trim()).filter(Boolean).map(ee).filter(e=>e!==null)}function ee(t){var s;const e=t.match(/^([A-G](?:#|b)?)([^/]*)?(?:\/([A-G](?:#|b)?))?$/);if(!e)return null;const n=at[e[1]];if(n===void 0)return null;const o=((s=e[2])!=null?s:"").toLowerCase();let a=[0,4,7];o.startsWith("m")&&!o.startsWith("maj")&&(a=[0,3,7]),o.includes("dim")&&(a=[0,3,6]),o.includes("sus2")&&(a=[0,2,7]),(o.includes("sus4")||o==="sus")&&(a=[0,5,7]),o.includes("maj7")?a=[...a,11]:o.includes("7")&&(a=[...a,10]);const r=e[3]?at[e[3]]:n;return r===void 0?null:{raw:t,root:n,bass:r,intervals:a,label:t}}function Z(t){var r;const e=40+(t.bass-4+12)%12;let n=e;const o=t.intervals.map(s=>{let l=48+t.root+s;for(;l<=n;)l+=12;return n=l,l}),a=(r=o[3])!=null?r:o[0]+12;return[e,o[0],o[1],o[2],a].map(At)}function tt(t){const e=36+t.bass,n=t.intervals.map(o=>60+t.root+o);return[e,...n].map(At)}function Gt(t){return 440*2**((t-69)/12)}function At(t){return Math.max(28,Math.min(88,t))}function g(t,e=!1){st.textContent=t,st.classList.toggle("error",e)}function p(t){const e=document.getElementById(t);if(!e)throw new Error(`Missing element: ${t}`);return e}
