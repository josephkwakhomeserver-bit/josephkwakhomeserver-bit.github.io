(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Z=["C","C♯","D","E♭","E","F","F♯","G","A♭","A","B♭","B"],tt={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11,Cb:11},st=document.querySelector("#app");if(!st)throw new Error("Missing #app");st.innerHTML=`
  <main class="shell">
    <header class="hero">
      <div>
        <p class="eyebrow">SING WITH YOUR CHORDS</p>
        <h1>ChordJam</h1>
        <p class="hero-copy">Enter a chord progression, pick guitar or piano, set the tempo, and get an instant looping accompaniment to sing over.</p>
      </div>
      <div class="badge">Studio browser audio · no API</div>
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
          <div><strong>Guitar</strong><span>Plucked-string modeling adds body and decay; strums still stagger each string.</span></div>
          <div><strong>Piano</strong><span>Layered piano harmonics, hammer attack and room tone make ballad/block patterns fuller.</span></div>
          <div><strong>iPhone</strong><span>Start from a Play tap. If iOS interrupts audio after app switching or lock, tap Play again.</span></div>
        </div>
      </section>
    </section>
  </main>
`;const b=m("progression"),B=m("instrument"),w=m("pattern"),W=m("bpm"),bt=m("bpmValue"),yt=m("beatsPerChord"),Ct=m("metronome"),At=m("controls"),Et=m("stop"),wt=m("transposeDown"),Mt=m("transposeUp"),et=m("status"),rt=m("currentChord"),it=m("position"),Pt=m("instrumentBadge"),xt=m("chordRail"),Bt=m("beatDots");let i=null,O=null,q=null,V=0,H=0,U=0,L=!1,M=null,D=null,F=[];const nt=new Map;let f=G(b.value);N(f,0);j();W.addEventListener("input",j);B.addEventListener("change",Vt);w.addEventListener("change",j);b.addEventListener("input",()=>{const t=G(b.value);t.length&&(f=t,N(t,0),C(`${t.length} chord${t.length===1?"":"s"} recognized.`))});document.querySelectorAll("[data-chords]").forEach(t=>{t.addEventListener("click",()=>{var e;b.value=(e=t.dataset.chords)!=null?e:"",f=G(b.value),N(f,0),C("Preset loaded.")})});At.addEventListener("submit",t=>{t.preventDefault(),Gt()});Et.addEventListener("click",Q);wt.addEventListener("click",()=>ht(-1));Mt.addEventListener("click",()=>ht(1));async function Gt(){var a;Q();const t=G(b.value);if(!t.length){C("Enter at least one valid chord, for example: C G Am F",!0);return}f=t;const e=(a=window.AudioContext)!=null?a:window.webkitAudioContext;if(!e){C("Web Audio is not supported in this browser.",!0);return}if(Tt(),!i){try{i=new e({latencyHint:"interactive"})}catch(o){i=new e}i.addEventListener("statechange",kt)}if(i.state==="suspended"&&await i.resume(),i.state!=="running"){C("Audio could not start. On iPhone, tap Play again after returning to Safari.",!0);return}St();const n=Y();C("Preparing higher-quality instrument tone…"),ct(t,n.instrument),L=!0,U=0,H=i.currentTime+.09,V=H,ot(),O=window.setInterval(ot,25),q=window.setInterval(qt,40),C("Playing with studio tone. Sing over the loop — it repeats until you stop it.")}function Q(){var t,e;L=!1,O!==null&&window.clearInterval(O),q!==null&&window.clearInterval(q),O=null,q=null;for(const n of F)try{n.stop()}catch(a){}F=[],rt.textContent=(e=(t=f[0])==null?void 0:t.label)!=null?e:"—",it.textContent=f.length?`Chord 1 of ${f.length}`:"No progression",mt(-1)}function kt(){!i||!L||i.state==="running"||(Q(),C("Audio was interrupted by iPhone/Safari. Tap Play to restart the loop.",!0))}function Tt(){const t=navigator;try{t.audioSession&&(t.audioSession.type="playback")}catch(e){}}function St(){if(!i||M)return;M=i.createGain(),M.gain.value=.9,D=i.createGain(),D.gain.value=.72;const t=i.createBiquadFilter();t.type="highpass",t.frequency.value=42,t.Q.value=.55;const e=i.createBiquadFilter();e.type="peaking",e.frequency.value=260,e.Q.value=.7,e.gain.value=1.7;const n=i.createBiquadFilter();n.type="highshelf",n.frequency.value=4200,n.gain.value=-1.8;const a=i.createConvolver();a.normalize=!0,a.buffer=Dt(i);const o=i.createGain();o.gain.value=.105;const s=i.createDynamicsCompressor();s.threshold.value=-20,s.knee.value=16,s.ratio.value=3.2,s.attack.value=.005,s.release.value=.2;const r=i.createGain();r.gain.value=.82,M.connect(t).connect(e).connect(n).connect(s),M.connect(a).connect(o).connect(s),D.connect(s),s.connect(r).connect(i.destination)}function Dt(t){const n=Math.max(1,Math.floor(t.sampleRate*.72)),a=t.createBuffer(2,n,t.sampleRate);let o=5370206;const s=()=>(o=o*1664525+1013904223>>>0,o/4294967296);for(let r=0;r<a.numberOfChannels;r+=1){const c=a.getChannelData(r);for(let p=0;p<n;p+=1){const g=(1-p/n)**3.1;c[p]=(s()*2-1)*g*.34}[.017,.031,.047,.071].forEach((p,u)=>{const g=Math.min(n-1,Math.floor(p*t.sampleRate));c[g]+=(u%2===r?.52:-.34)/(u+1)})}return a}function ct(t,e){if(!i)return;const n=new Set;for(const a of t)(e==="guitar"?J(a):K(a)).forEach(s=>n.add(s));n.forEach(a=>pt(e,a))}function ot(){if(!L||!i)return;const t=Y(),e=60/t.bpm,n=i.currentTime+.16;for(;V<n;)Ft(U,V,t),V+=e,U+=1}function Ft(t,e,n){if(!i||!f.length)return;const a=Math.floor(t/n.beatsPerChord)%f.length,o=t%n.beatsPerChord,s=f[a],r=60/n.bpm;if(n.metronome&&Ot(e,t%4===0),n.instrument==="guitar")if(n.pattern==="strum"){const c=o%2===1;at(s,e,r*.82,c)}else n.pattern==="block"?at(s,e,r*.92,!1):Lt(s,e,r,o);else n.pattern==="block"||n.pattern==="strum"?Nt(s,e,r*.86):It(s,e,r,o)}function at(t,e,n,a){const o=J(t),s=a?[...o].reverse():o;s.forEach((r,c)=>{const l=s.length>1?(c/(s.length-1)-.5)*.22:0;lt(r,e+c*.024,n,c===0?.17:.145,l)})}function Lt(t,e,n,a){const o=J(t),s=[[0,2,4,3],[1,3,4,2],[0,3,4,2],[1,2,4,3]];s[a%s.length].forEach((c,l)=>{const p=o[c%o.length],u=(c%o.length/Math.max(1,o.length-1)-.5)*.18;lt(p,e+l*n/4,n*.72,l===0?.18:.125,u)})}function Nt(t,e,n){const a=K(t);a.forEach((o,s)=>{const r=(s/Math.max(1,a.length-1)-.5)*.3;x(o,e+s*.007,n,s===0?.16:.105,r)})}function It(t,e,n,a){var s;const o=K(t);a%2===0?(x(o[0],e,n*.9,.17,-.14),x(o[1],e+n*.5,n*.46,.095,.04),x(o[2],e+n*.5+.006,n*.46,.09,.13)):(x((s=o[3])!=null?s:o[2],e,n*.45,.1,.16),x(o[2],e+n*.5,n*.45,.09,.06))}function lt(t,e,n,a,o=0){ut("guitar",t,e,Math.max(.62,n*1.9),a,o)}function x(t,e,n,a,o=0){ut("piano",t,e,Math.max(.95,n*2.25),a,o)}function ut(t,e,n,a,o,s){if(!i||!M)return;const r=i.createBufferSource(),c=i.createGain(),l=i.createStereoPanner(),p=pt(t,e),u=Math.max(n,i.currentTime+.002),g=u+Math.min(p.duration,a);r.buffer=p,l.pan.setValueAtTime(Math.max(-.85,Math.min(.85,s)),u),c.gain.setValueAtTime(1e-4,u),c.gain.linearRampToValueAtTime(o,u+.006),c.gain.setValueAtTime(o*.92,Math.min(g-.05,u+.06)),c.gain.exponentialRampToValueAtTime(1e-4,Math.max(u+.08,g-.015)),r.connect(c).connect(l).connect(M),ft(r,u,g-u)}function pt(t,e){if(!i)throw new Error("Audio context is not ready.");const n=`${t}:${e}:${i.sampleRate}`,a=nt.get(n);if(a)return a;const o=t==="guitar"?$t(e):Rt(e);return nt.set(n,o),o}function $t(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=gt(t),a=Math.max(2.35,Math.min(3.5,3.25-(t-40)*.018)),o=Math.floor(e*a),s=i.createBuffer(1,o,e),r=s.getChannelData(0),c=Math.max(2,Math.round(e/n)),l=new Float32Array(c);let p=t*2654435761>>>0,u=0;const g=()=>(p=p*1664525+1013904223>>>0,p/4294967296);for(let v=0;v<c;v+=1){const y=g()*2-1;l[v]=y*.7+u*.3,u=y}const k=Math.max(.9948,Math.min(.9976,.99725-(t-52)*22e-6));let A=0,P=0,T=0;for(let v=0;v<o;v+=1){const y=l[A],I=l[(A+1)%c];l[A]=(y*.49+I*.51)*k,A=(A+1)%c,P+=(y-P)*.055;const $=v/e,S=Math.min(1,$/.0035),d=v<e*.018?(g()*2-1)*(1-$/.018)*.045:0,E=(y*.82+P*.27+d)*S;r[v]=E,T=Math.max(T,Math.abs(E))}return dt(r,T,.86),s}function Rt(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=gt(t),a=t<48?4.25:t<68?3.55:2.9,o=Math.floor(e*a),s=i.createBuffer(1,o,e),r=s.getChannelData(0),c=[1,.57,.36,.23,.145,.09,.052],l=c.length,p=new Float64Array(l),u=new Float64Array(l),g=new Float64Array(l),k=new Float64Array(l),A=new Float64Array(l),P=new Float64Array(l),T=6e-5+Math.max(0,t-48)*18e-7,v=.72+Math.max(0,t-45)*.012;for(let d=0;d<l;d+=1){const E=d+1,z=n*E*Math.sqrt(1+T*E*E),R=2*Math.PI*z/e;p[d]=0,u[d]=1,g[d]=Math.sin(R),k[d]=Math.cos(R),A[d]=c[d],P[d]=Math.exp(-(v+d*.54)/e)}let y=t*2246822519+3266489917>>>0,I=1;const $=Math.exp(-78/e);let S=0;for(let d=0;d<o;d+=1){let E=0;for(let h=0;h<l;h+=1){E+=p[h]*A[h];const X=p[h];p[h]=X*k[h]+u[h]*g[h],u[h]=u[h]*k[h]-X*g[h],A[h]*=P[h]}y=y*1664525+1013904223>>>0;const z=(y/4294967296*2-1)*.07*I;I*=$;const R=Math.min(1,d/Math.max(1,e*.004)),_=Math.tanh((E*.62+z)*1.12)*R;r[d]=_,S=Math.max(S,Math.abs(_))}return dt(r,S,.82),s}function dt(t,e,n){if(e<=1e-5)return;const a=n/e;for(let o=0;o<t.length;o+=1)t[o]*=a}function Ot(t,e){if(!i||!D)return;const n=i.createOscillator(),a=i.createGain();n.type="sine",n.frequency.setValueAtTime(e?1450:980,t),a.gain.setValueAtTime(e?.05:.025,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.032),n.connect(a).connect(D),ft(n,t,.038)}function ft(t,e,n){F.push(t),t.addEventListener("ended",()=>{const a=F.indexOf(t);a>=0&&F.splice(a,1)}),t.start(e),t.stop(e+n)}function qt(){if(!L||!i||!f.length)return;const t=Y(),e=60/t.bpm,n=Math.max(0,Math.floor((i.currentTime-H)/e)),a=Math.floor(n/t.beatsPerChord)%f.length,o=n%4;N(f,a),mt(o)}function N(t,e){var a;xt.replaceChildren(...t.map((o,s)=>{const r=document.createElement("button");return r.type="button",r.className=`chord-pill${s===e?" active":""}`,r.textContent=o.label,r.addEventListener("click",()=>{b.focus(),C(`Chord ${o.label} selected in the progression.`)}),r}));const n=t[e];rt.textContent=(a=n==null?void 0:n.label)!=null?a:"—",it.textContent=n?`Chord ${e+1} of ${t.length}`:"No valid chords"}function mt(t){[...Bt.children].forEach((e,n)=>e.classList.toggle("active",n===t))}function Y(){return{progression:b.value,instrument:B.value,pattern:w.value,bpm:Number(W.value),beatsPerChord:Number(yt.value),metronome:Ct.checked}}function j(){var n,a;bt.textContent=`${W.value} BPM`;const t=B.value==="guitar"?"Acoustic Guitar":"Piano",e=(a=(n=w.options[w.selectedIndex])==null?void 0:n.text)!=null?a:w.value;Pt.textContent=`${t} · ${e}`}function Vt(){B.value==="piano"&&w.value==="strum"&&(w.value="ballad"),B.value==="guitar"&&w.value==="ballad"&&(w.value="arpeggio"),i&&ct(f,B.value),j()}function ht(t){const e=G(b.value);e.length&&(b.value=e.map(n=>jt(n,t)).join(" | "),f=G(b.value),N(f,0),C(`Progression transposed ${t>0?"up":"down"} one semitone.`))}function jt(t,e){var c;const n=(t.root+e+12)%12,a=(t.bass+e+12)%12,o=t.raw.match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/),s=(c=o==null?void 0:o[2])!=null?c:"",r=o!=null&&o[3]?`/${Z[a].replace("♯","#").replace("♭","b")}`:"";return`${Z[n].replace("♯","#").replace("♭","b")}${s}${r}`}function G(t){return t.replace(/[|,\n]+/g," ").split(/\s+/).map(e=>e.trim()).filter(Boolean).map(zt).filter(e=>e!==null)}function zt(t){var r;const e=t.match(/^([A-G](?:#|b)?)([^/]*)?(?:\/([A-G](?:#|b)?))?$/);if(!e)return null;const n=tt[e[1]];if(n===void 0)return null;const a=((r=e[2])!=null?r:"").toLowerCase();let o=[0,4,7];a.startsWith("m")&&!a.startsWith("maj")&&(o=[0,3,7]),a.includes("dim")&&(o=[0,3,6]),a.includes("sus2")&&(o=[0,2,7]),(a.includes("sus4")||a==="sus")&&(o=[0,5,7]),a.includes("maj7")?o=[...o,11]:a.includes("7")&&(o=[...o,10]);const s=e[3]?tt[e[3]]:n;return s===void 0?null:{raw:t,root:n,bass:s,intervals:o,label:t}}function J(t){var s;const e=40+(t.bass-4+12)%12;let n=e;const a=t.intervals.map(r=>{let c=48+t.root+r;for(;c<=n;)c+=12;return n=c,c}),o=(s=a[3])!=null?s:a[0]+12;return[e,a[0],a[1],a[2],o].map(vt)}function K(t){const e=36+t.bass,n=t.intervals.map(a=>60+t.root+a);return[e,...n].map(vt)}function gt(t){return 440*2**((t-69)/12)}function vt(t){return Math.max(28,Math.min(88,t))}function C(t,e=!1){et.textContent=t,et.classList.toggle("error",e)}function m(t){const e=document.getElementById(t);if(!e)throw new Error(`Missing element: ${t}`);return e}
