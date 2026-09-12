(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Q=document.querySelector("#app");if(!Q)throw new Error("App root not found");Q.innerHTML=`
  <main class="shell">
    <header class="hero">
      <div>
        <p class="eyebrow">BROWSER-ONLY GENERATIVE MUSIC</p>
        <h1>SoundSeed<br>Studio</h1>
        <p class="hero-copy">Turn a few words into an original instrumental loop. Everything is composed and rendered locally in your browser — no account, API key, or backend.</p>
      </div>
      <div class="badge">Web Audio · deterministic seed</div>
    </header>

    <section class="studio">
      <form class="panel controls" id="controls">
        <div class="field">
          <label for="prompt">Describe the track</label>
          <textarea id="prompt" placeholder="dreamy night drive with warm synths and a soft beat">dreamy night drive with warm synths and a soft beat</textarea>
        </div>

        <div class="row">
          <div class="field">
            <label for="genre">Genre</label>
            <select id="genre">
              <option value="lofi">Lo-fi</option>
              <option value="synthwave" selected>Synthwave</option>
              <option value="cinematic">Cinematic</option>
              <option value="dance">Dance</option>
              <option value="ambient">Ambient</option>
            </select>
          </div>
          <div class="field">
            <label for="mood">Mood</label>
            <select id="mood">
              <option value="bright">Bright</option>
              <option value="dreamy" selected>Dreamy</option>
              <option value="dark">Dark</option>
              <option value="calm">Calm</option>
              <option value="energetic">Energetic</option>
            </select>
          </div>
        </div>

        <div class="field">
          <div class="range-head"><label for="bpm">Tempo</label><span class="value-pill" id="bpm-value">96 BPM</span></div>
          <input id="bpm" type="range" min="60" max="150" value="96" step="1" />
        </div>

        <div class="row">
          <div class="field">
            <label for="bars">Length</label>
            <select id="bars">
              <option value="4">4 bars</option>
              <option value="8" selected>8 bars</option>
              <option value="16">16 bars</option>
            </select>
          </div>
          <div class="field">
            <label for="seed">Seed</label>
            <input id="seed" type="text" value="moon-01" maxlength="40" />
          </div>
        </div>

        <div class="actions">
          <button class="primary" id="generate" type="submit">Generate track</button>
          <button id="play" type="button">▶ Play</button>
          <button id="stop" class="danger" type="button">■ Stop</button>
          <button id="randomize" type="button">↻ New seed</button>
          <button id="download" type="button">↓ Export WAV</button>
        </div>
        <div class="status" id="status">Ready. Change the prompt or settings, then generate.</div>
      </form>

      <section class="panel visual">
        <div class="now-playing">
          <div>
            <h2 class="track-title" id="track-title">Moon Drive</h2>
            <p class="meta" id="meta">Synthwave · Dreamy · C minor · 96 BPM</p>
          </div>
        </div>
        <canvas id="visualizer" width="900" height="460" aria-label="Generated music piano roll visualization"></canvas>
        <div class="progress-wrap">
          <div class="progress-track"><div class="progress-bar" id="progress"></div></div>
          <div class="time-row"><span id="current-time">0:00</span><span id="total-time">0:20</span></div>
        </div>
        <div class="legend"><span>Chords</span><span>Bass</span><span>Melody</span><span>Drums</span></div>
      </section>
    </section>

    <section class="panel explainer">
      <div><strong>Prompt-aware</strong><p>Keywords such as dark, dreamy, dance, cinematic or ambient nudge the musical rules without sending your text anywhere.</p></div>
      <div><strong>Repeatable</strong><p>The same seed and settings produce the same composition, making it easy to keep or iterate on a useful idea.</p></div>
      <div><strong>Actually offline</strong><p>Composition, playback and WAV rendering use native Web Audio APIs. Generated files stay on your device.</p></div>
    </section>
  </main>
`;const se=v("prompt"),K=v("seed"),Y=v("genre"),_=v("mood"),L=v("bpm"),J=v("bpm-value"),ie=v("bars"),O=v("play"),ce=v("stop"),le=v("randomize"),U=v("download"),de=v("status"),ue=v("track-title"),me=v("meta"),pe=v("progress"),fe=v("current-time"),he=v("total-time"),X=v("controls"),$=v("visualizer"),Z=$.getContext("2d");if(!Z)throw new Error("Canvas 2D unavailable");const p=Z;let h=te(ee()),k=null,q=[],H=0,x=null,G=!1;L.addEventListener("input",()=>{J.textContent=`${L.value} BPM`});X.addEventListener("submit",e=>{e.preventDefault(),S();const t=be(ee());ve(t),h=te(t),ae(),I(),A(`Generated ${h.notes.length} notes and ${h.drums.length} drum hits from seed “${h.seed}”.`)});O.addEventListener("click",()=>{ge()});ce.addEventListener("click",()=>S());le.addEventListener("click",()=>{K.value=crypto.randomUUID().slice(0,8),X.requestSubmit()});U.addEventListener("click",()=>{we()});window.addEventListener("resize",I);ae();I();function v(e){const t=document.getElementById(e);if(!t)throw new Error(`Missing element: ${e}`);return t}function ee(){return{prompt:se.value.trim(),seed:K.value.trim()||"soundseed",genre:Y.value,mood:_.value,bpm:Number(L.value),bars:Number(ie.value)}}function ve(e){Y.value=e.genre,_.value=e.mood,L.value=String(e.bpm),J.textContent=`${e.bpm} BPM`}function be(e){const t=e.prompt.toLowerCase();let{genre:n,mood:o,bpm:a}=e;return/lo[- ]?fi|study|coffee|vinyl/.test(t)&&(n="lofi"),/synth|retro|neon|night drive|80s/.test(t)&&(n="synthwave"),/cinematic|movie|epic|trailer|orchestra/.test(t)&&(n="cinematic"),/dance|club|edm|house|party/.test(t)&&(n="dance"),/ambient|space|meditat|floating|atmospher/.test(t)&&(n="ambient"),/dark|sad|tense|myster|minor/.test(t)&&(o="dark"),/dream|night|soft|ethereal/.test(t)&&(o="dreamy"),/bright|happy|sun|uplift/.test(t)&&(o="bright"),/calm|quiet|relax|gentle/.test(t)&&(o="calm"),/energetic|fast|power|intense|driving/.test(t)&&(o="energetic"),o==="calm"&&(a=Math.min(a,88)),o==="energetic"&&(a=Math.max(a,118)),n==="ambient"&&(a=Math.min(a,78)),n==="dance"&&(a=Math.max(a,120)),{...e,genre:n,mood:o,bpm:a}}function te(e){const t=Pe(Re(`${e.seed}|${e.prompt}|${e.genre}|${e.mood}`)),n=e.mood==="dark"||e.mood==="dreamy"||e.genre==="synthwave",o=n?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11],a=n?[45,48,50,52,53,55]:[48,50,52,53,55,57],r=a[Math.floor(t()*a.length)]??48,l=n?[[0,5,3,6],[0,3,6,5],[0,6,5,3],[0,4,5,3]]:[[0,4,5,3],[0,5,3,4],[0,3,4,0],[5,3,0,4]],g=l[Math.floor(t()*l.length)]??l[0],s=[],i=[],d=[],m=e.bars;for(let f=0;f<m;f+=1){const u=g[f%g.length]??0,y=R(r,o,u,0),c=R(r,o,u+2,0),b=R(r,o,u+4,0);d.push(Ee(y,c,b));const M=e.genre==="dance"?1:e.genre==="ambient"?4:2;for(let w=0;w<4;w+=M){const T=Math.min(M*.93,4-w);for(const E of[y+12,c+12,b+12])s.push({track:"chords",beat:f*4+w,duration:T,midi:E,velocity:.28+t()*.08})}const V=e.genre==="ambient"?[0]:e.genre==="dance"?[0,1,2,3]:[0,2];for(const w of V){const T=t()>.78?b-24:y-12;s.push({track:"bass",beat:f*4+w,duration:e.genre==="dance"?.8:1.55,midi:T,velocity:.48})}const C=e.genre==="ambient"?2:e.mood==="energetic"?7:e.genre==="lofi"?4:5;let j=u+7;for(let w=0;w<8;w+=1){if(t()>C/8)continue;const T=[u+7,u+9,u+11];let E=t()<.62?T[Math.floor(t()*T.length)]??u+7:j+(t()<.5?-1:1);E=F(E,5,13);const oe=f*4+w*.5,re=t()>.72?.9:.42;s.push({track:"melody",beat:oe,duration:re,midi:R(r,o,E,0),velocity:.32+t()*.24}),j=E}ye(i,f,e.genre,e.mood,t)}return{title:Se(e.prompt,e.seed),seed:e.seed,genre:e.genre,mood:e.mood,bpm:e.bpm,bars:e.bars,key:r,scale:o,notes:s,drums:i,chordNames:d}}function ye(e,t,n,o,a){const r=t*4;if(n==="ambient"){t%2===0&&e.push({kind:"kick",beat:r,velocity:.42});return}const l=n==="dance"?[0,1,2,3]:n==="synthwave"?[0,2,2.75]:[0,2.5],g=n==="dance"||n==="synthwave"?[1,3]:[1.5,3.5];for(const i of l)e.push({kind:"kick",beat:r+i,velocity:.58+a()*.16});for(const i of g)e.push({kind:"snare",beat:r+i,velocity:.42+a()*.18});const s=o==="energetic"||n==="dance"?.5:1;for(let i=0;i<4;i+=s)n==="lofi"&&a()<.18||e.push({kind:"hat",beat:r+i,velocity:.16+a()*.1})}async function ge(){S(),k??=new AudioContext,k.state==="suspended"&&await k.resume(),q=ne(k,h,k.currentTime+.05),H=k.currentTime+.05,G=!0,O.disabled=!0,A("Playing locally with Web Audio.");const e=D(h);x=window.setInterval(()=>{if(!k||!G)return;const t=Math.max(0,k.currentTime-H);z(t,e),t>=e&&S(!1)},80)}function S(e=!0){for(const t of q)try{t.stop()}catch{}q=[],G=!1,O.disabled=!1,x!==null&&window.clearInterval(x),x=null,e&&z(0,D(h))}async function we(){S(),U.disabled=!0,A("Rendering WAV in your browser…");try{const t=D(h)+1.2,n=new OfflineAudioContext(2,Math.ceil(44100*t),44100);ne(n,h,.04);const o=await n.startRendering(),a=$e(o),r=URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.download=`${Ce(h.title)}-${h.seed}.wav`,document.body.append(l),l.click(),l.remove(),URL.revokeObjectURL(r),A(`Exported ${N(t)} WAV. No upload was used.`)}catch(e){A(`Export failed: ${e instanceof Error?e.message:String(e)}`)}finally{U.disabled=!1}}function ne(e,t,n){const o=[],a=e.createGain();a.gain.value=.68;const r=e.createDynamicsCompressor();r.threshold.value=-16,r.knee.value=16,r.ratio.value=4,r.attack.value=.008,r.release.value=.22,a.connect(r).connect(e.destination);const l=60/t.bpm,g=ke(e);for(const s of t.notes){const i=n+s.beat*l,d=s.duration*l,m=e.createOscillator(),f=e.createGain(),u=e.createBiquadFilter(),y=Te(s.midi);m.frequency.value=y,s.track==="bass"?(m.type=t.genre==="synthwave"||t.genre==="dance"?"sawtooth":"triangle",u.type="lowpass",u.frequency.value=t.genre==="dance"?430:300,u.Q.value=1.2):s.track==="chords"?(m.type=t.genre==="cinematic"?"sine":"triangle",u.type="lowpass",u.frequency.value=t.genre==="ambient"?900:1450,u.Q.value=.7):(m.type=t.genre==="lofi"?"triangle":t.genre==="synthwave"?"square":"sine",u.type="lowpass",u.frequency.value=t.genre==="synthwave"?2100:2800,u.Q.value=.8);const c=s.track==="chords"&&t.genre==="ambient"?.12:.015,b=s.track==="bass"?.12:.18;f.gain.setValueAtTime(1e-4,i),f.gain.exponentialRampToValueAtTime(Math.max(.001,s.velocity),i+c),f.gain.setValueAtTime(Math.max(.001,s.velocity*.82),Math.max(i+c,i+d-b)),f.gain.exponentialRampToValueAtTime(1e-4,i+d),m.connect(u).connect(f).connect(a),m.start(i),m.stop(i+d+.04),o.push(m)}for(const s of t.drums){const i=n+s.beat*l;if(s.kind==="kick"){const d=e.createOscillator(),m=e.createGain();d.type="sine",d.frequency.setValueAtTime(145,i),d.frequency.exponentialRampToValueAtTime(44,i+.16),m.gain.setValueAtTime(s.velocity,i),m.gain.exponentialRampToValueAtTime(1e-4,i+.23),d.connect(m).connect(a),d.start(i),d.stop(i+.24),o.push(d)}else{const d=e.createBufferSource(),m=e.createGain(),f=e.createBiquadFilter();d.buffer=g,f.type="highpass",f.frequency.value=s.kind==="hat"?5600:1200,m.gain.setValueAtTime(s.velocity,i);const u=s.kind==="hat"?.055:.15;if(m.gain.exponentialRampToValueAtTime(1e-4,i+u),d.connect(f).connect(m).connect(a),d.start(i),d.stop(i+u+.02),o.push(d),s.kind==="snare"){const y=e.createOscillator(),c=e.createGain();y.frequency.value=185,c.gain.setValueAtTime(s.velocity*.24,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.11),y.connect(c).connect(a),y.start(i),y.stop(i+.12),o.push(y)}}}return o}function ke(e){const t=Math.floor(e.sampleRate*.5),n=e.createBuffer(1,t,e.sampleRate),o=n.getChannelData(0);let a=305441741;for(let r=0;r<o.length;r+=1)a=a*1664525+1013904223>>>0,o[r]=a/4294967295*2-1;return n}function ae(){const e=h.scale[2]===3;ue.textContent=h.title,me.textContent=`${Ae(h.genre)} · ${B(h.mood)} · ${W(h.key)} ${e?"minor":"major"} · ${h.bpm} BPM · ${h.chordNames.slice(0,4).join(" – ")}`,z(0,D(h))}function I(){const e=Math.min(window.devicePixelRatio||1,2),t=$.getBoundingClientRect(),n=Math.max(320,Math.floor(t.width)),o=Math.max(230,Math.floor(t.height));$.width=Math.floor(n*e),$.height=Math.floor(o*e),p.setTransform(e,0,0,e,0,0),p.clearRect(0,0,n,o);const a=42,r=14,l=18,g=34,s=n-a-r,i=o-l-g,d=h.bars*4,m=Math.min(...h.notes.map(c=>c.midi),36)-2,f=Math.max(...h.notes.map(c=>c.midi),72)+2,u=Math.max(12,f-m);p.fillStyle="#080d1b",p.fillRect(0,0,n,o);for(let c=0;c<=d;c+=1){const b=a+c/d*s;p.strokeStyle=c%4===0?"rgba(194,184,255,.18)":"rgba(255,255,255,.055)",p.lineWidth=c%4===0?1.2:1,p.beginPath(),p.moveTo(b,l),p.lineTo(b,l+i),p.stroke()}for(let c=Math.ceil(m/12)*12;c<=f;c+=12){const b=l+i-(c-m)/u*i;p.strokeStyle="rgba(255,255,255,.045)",p.beginPath(),p.moveTo(a,b),p.lineTo(a+s,b),p.stroke(),p.fillStyle="#657394",p.font="11px system-ui",p.fillText(W(c),9,b+4)}const y={chords:"#6e7ff5",bass:"#55d6be",melody:"#e4a8ff"};for(const c of h.notes){const b=a+c.beat/d*s,M=Math.max(2,c.duration/d*s-1),V=l+i-(c.midi-m)/u*i,C=c.track==="chords"?5:7;p.fillStyle=y[c.track],p.globalAlpha=c.track==="chords"?.48:.82,Me(p,b,V-C/2,M,C,3),p.fill()}p.globalAlpha=1;for(const c of h.drums){const b=a+c.beat/d*s,M=l+i+10;p.fillStyle=c.kind==="kick"?"#ffcb77":c.kind==="snare"?"#ff8095":"#9fe7df",p.fillRect(b,M,c.kind==="hat"?2:4,c.kind==="hat"?6:10)}p.fillStyle="#657394",p.font="11px system-ui";for(let c=0;c<h.bars;c+=1){const b=a+(c*4+.18)/d*s;p.fillText(String(c+1),b,o-8)}}function Me(e,t,n,o,a,r){const l=Math.min(r,o/2,a/2);e.beginPath(),e.moveTo(t+l,n),e.arcTo(t+o,n,t+o,n+a,l),e.arcTo(t+o,n+a,t,n+a,l),e.arcTo(t,n+a,t,n,l),e.arcTo(t,n,t+o,n,l),e.closePath()}function z(e,t){const n=F(e,0,t);pe.style.width=`${t>0?n/t*100:0}%`,fe.textContent=N(n),he.textContent=N(t)}function A(e){de.textContent=e}function D(e){return e.bars*4*(60/e.bpm)}function R(e,t,n,o){const a=(n%7+7)%7,r=Math.floor(n/7)+o;return e+(t[a]??0)+r*12}function Te(e){return 440*2**((e-69)/12)}function W(e){return["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"][(e%12+12)%12]??"C"}function Ee(e,t,n){const o=((t-e)%12+12)%12,a=((n-e)%12+12)%12,r=o===3&&a===7?"m":o===3&&a===6?"dim":"";return`${W(e)}${r}`}function F(e,t,n){return Math.min(n,Math.max(t,e))}function B(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ae(e){return e==="lofi"?"Lo-fi":B(e)}function Se(e,t){const n=e.toLowerCase().match(/[a-z0-9]+/g)?.filter(r=>!["with","and","the","a","an","music","track"].includes(r))??[],o=n[0]??"seed",a=n.find(r=>r!==o&&r.length>3)??t.slice(0,6);return`${B(o)} ${B(a)}`}function N(e){const t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function Ce(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"soundseed-track"}function Re(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Pe(e){let t=e;return()=>{t+=1831565813;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function $e(e){const t=e.numberOfChannels,n=e.sampleRate,o=e.length,r=t*2,l=o*r,g=new ArrayBuffer(44+l),s=new DataView(g);P(s,0,"RIFF"),s.setUint32(4,36+l,!0),P(s,8,"WAVE"),P(s,12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,t,!0),s.setUint32(24,n,!0),s.setUint32(28,n*r,!0),s.setUint16(32,r,!0),s.setUint16(34,16,!0),P(s,36,"data"),s.setUint32(40,l,!0);const i=Array.from({length:t},(m,f)=>e.getChannelData(f));let d=44;for(let m=0;m<o;m+=1)for(let f=0;f<t;f+=1){const u=F(i[f]?.[m]??0,-1,1);s.setInt16(d,u<0?u*32768:u*32767,!0),d+=2}return new Blob([g],{type:"audio/wav"})}function P(e,t,n){for(let o=0;o<n.length;o+=1)e.setUint8(t+o,n.charCodeAt(o))}
