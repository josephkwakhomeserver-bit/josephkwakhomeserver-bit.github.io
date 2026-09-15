(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Bt=[{title:"아리랑",category:"Korean Kids",chords:"G | G | C | G | D | G | D | G",bpm:84,pattern:"arpeggio",note:"편안한 노래 속도"},{title:"산토끼",category:"Korean Kids",chords:"C | C | G7 | C | C | F | G7 | C",bpm:112,pattern:"strum",note:"경쾌하게"},{title:"나비야",category:"Korean Kids",chords:"C | G7 | C | C | F | C | G7 | C",bpm:96,pattern:"strum"},{title:"작은 별",category:"Korean Kids",chords:"C | F | C | G7 | C | F | C | G7 | C | G7 | C | G7",bpm:92,pattern:"arpeggio"},{title:"곰 세 마리",category:"Korean Kids",chords:"C | C | G7 | G7 | C | F | C | G7 | C | C | G7 | C",bpm:116,pattern:"strum"},{title:"학교종",category:"Korean Kids",chords:"C | F | C | G7 | C | F | G7 | C",bpm:108,pattern:"strum"},{title:"고향의 봄",category:"Korean Kids",chords:"C | G7 | C | F | C | G7 | C | C",bpm:82,pattern:"arpeggio"},{title:"섬집 아기",category:"Korean Kids",chords:"C | Am | Dm | G7 | C | F | C | G7 | C | Am | Dm | G7",bpm:68,instrument:"piano",pattern:"ballad"},{title:"반달",category:"Korean Kids",chords:"C | G7 | C | F | C | G7 | C | C",bpm:72,pattern:"arpeggio"},{title:"과수원 길",category:"Korean Kids",chords:"G | D7 | G | C | G | D7 | G | G",bpm:88,pattern:"arpeggio"},{title:"너에게 난 나에게 넌",category:"K-Pop/Korean",chords:"G | D | Em | Bm | C | G | Am | D",bpm:104,pattern:"strum",note:"간단한 연습용 진행"},{title:"Korean Acoustic Pop",category:"K-Pop/Korean",chords:"G | D/F# | Em | Bm | C | G/B | Am7 | D7",bpm:98,pattern:"strum"},{title:"Korean Ballad",category:"Ballad",chords:"C | G/B | Am | Em | F | C/E | Dm7 | G7",bpm:72,instrument:"piano",pattern:"ballad"},{title:"Twinkle, Twinkle, Little Star",category:"Baby Songs",chords:"C | F | C | G7 | C | F | C | G7 | C | G7 | C | G7",bpm:92,pattern:"arpeggio"},{title:"Row, Row, Row Your Boat",category:"Baby Songs",chords:"C | C | C | G7 | C | C | G7 | C",bpm:104,pattern:"strum"},{title:"Old MacDonald Had a Farm",category:"Baby Songs",chords:"C | C | F | C | G7 | F | C | G7 | C | C | F | C",bpm:112,pattern:"strum"},{title:"Mary Had a Little Lamb",category:"Baby Songs",chords:"C | G7 | C | C | F | C | G7 | C",bpm:100,pattern:"strum"},{title:"The Wheels on the Bus",category:"Baby Songs",chords:"C | C | G7 | G7 | C | F | C | G7",bpm:110,pattern:"strum"},{title:"Itsy Bitsy Spider",category:"Baby Songs",chords:"C | G7 | C | F | C | G7 | C | C",bpm:100,pattern:"strum"},{title:"Baa, Baa, Black Sheep",category:"Baby Songs",chords:"C | F | C | G7 | C | F | C | G7",bpm:96,pattern:"arpeggio"},{title:"You Are My Sunshine",category:"Baby Songs",chords:"C | C | F | C | F | C | G7 | C",bpm:96,pattern:"strum",note:"간단한 싱어롱 진행"},{title:"Frère Jacques",category:"Baby Songs",chords:"C | C | G7 | C | C | G7 | C | C",bpm:104,pattern:"strum"},{title:"If You’re Happy and You Know It",category:"Baby Songs",chords:"C | G7 | C | F | C | G7 | C | C",bpm:116,pattern:"strum"},{title:"Pop 4-Chord",category:"Pop",chords:"C | G | Am | F",bpm:100,pattern:"strum"},{title:"Soft Pop",category:"Pop",chords:"G | D | Em | C | G | D | C | D",bpm:88,pattern:"arpeggio"},{title:"6/8 Folk Feel",category:"Folk",chords:"G | D | Em | C | G | D | C | D",bpm:76,pattern:"arpeggio"}],ut="chordjam.custom-presets.v1",ot=["C","C♯","D","E♭","E","F","F♯","G","A♭","A","B♭","B"],at={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11,Cb:11},pt=document.querySelector("#app");if(!pt)throw new Error("Missing #app");pt.innerHTML=`
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
          <strong>노래를 고르면 코드와 속도가 자동 설정됩니다</strong>
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
      <p class="hint">프리셋은 노래하기 쉬운 연습용 코드 진행입니다. 불러온 뒤 BPM, 코드, 악기와 패턴을 자유롭게 바꿀 수 있습니다.</p>
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

        <div class="range-field tempo-card">
          <div class="range-head"><label for="bpm">Tempo</label><strong id="bpmValue">76 BPM</strong></div>
          <input id="bpm" type="range" min="45" max="180" value="76" />
          <div class="tempo-presets" aria-label="Tempo presets">
            <button type="button" data-bpm="68">느리게</button><button type="button" data-bpm="88">편안하게</button><button type="button" data-bpm="104">보통</button><button type="button" data-bpm="120">신나게</button>
          </div>
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
`;const v=p("progression"),_=p("presetCategory"),rt=p("presetStrip"),Y=p("presetName"),St=p("savePreset"),w=p("instrument"),C=p("pattern"),S=p("bpm"),xt=p("bpmValue"),Mt=p("beatsPerChord"),Ft=p("metronome"),kt=p("controls"),Tt=p("stop"),Lt=p("transposeDown"),Dt=p("transposeUp"),st=p("status"),dt=p("currentChord"),mt=p("position"),Kt=p("instrumentBadge"),Nt=p("chordRail"),$t=p("beatDots");let i=null,q=null,V=null,H=0,z=0,W=0,$=!1,B=null,K=null,N=[];const it=new Map;let m=E(v.value);F(m,0);Q();k();S.addEventListener("input",k);w.addEventListener("change",Et);C.addEventListener("change",k);v.addEventListener("input",()=>{const t=E(v.value);t.length&&(m=t,F(t,0),f(`${t.length} chord${t.length===1?"":"s"} recognized.`))});_.addEventListener("change",Q);St.addEventListener("click",Xt);document.querySelectorAll("[data-expand]").forEach(t=>{t.addEventListener("click",()=>Zt(Number(t.dataset.expand)))});document.querySelectorAll("[data-bpm]").forEach(t=>{t.addEventListener("click",()=>{var e;S.value=(e=t.dataset.bpm)!=null?e:"88",k()})});kt.addEventListener("submit",t=>{t.preventDefault(),It()});Tt.addEventListener("click",J);Lt.addEventListener("click",()=>Pt(-1));Dt.addEventListener("click",()=>Pt(1));async function It(){var o;J();const t=E(v.value);if(!t.length){f("Enter at least one valid chord, for example: C G Am F",!0);return}m=t;const e=(o=window.AudioContext)!=null?o:window.webkitAudioContext;if(!e){f("Web Audio is not supported in this browser.",!0);return}if(Ot(),!i){try{i=new e({latencyHint:"interactive"})}catch(a){i=new e}i.addEventListener("statechange",Rt)}if(i.state==="suspended"&&await i.resume(),i.state!=="running"){f("Audio could not start. On iPhone, tap Play again after returning to Safari.",!0);return}qt();const n=X();f("Preparing higher-quality instrument tone…"),ht(t,n.instrument),$=!0,W=0,z=i.currentTime+.09,H=z,lt(),q=window.setInterval(lt,25),V=window.setInterval(Jt,40),f("Playing with studio tone. Sing over the loop — it repeats until you stop it.")}function J(){var t,e;$=!1,q!==null&&window.clearInterval(q),V!==null&&window.clearInterval(V),q=null,V=null;for(const n of N)try{n.stop()}catch(o){}N=[],dt.textContent=(e=(t=m[0])==null?void 0:t.label)!=null?e:"—",mt.textContent=m.length?`Chord 1 of ${m.length}`:"No progression",Gt(-1)}function Rt(){!i||!$||i.state==="running"||(J(),f("Audio was interrupted by iPhone/Safari. Tap Play to restart the loop.",!0))}function Ot(){const t=navigator;try{t.audioSession&&(t.audioSession.type="playback")}catch(e){}}function qt(){if(!i||B)return;B=i.createGain(),B.gain.value=.86,K=i.createGain(),K.gain.value=.72;const t=i.createBiquadFilter();t.type="highpass",t.frequency.value=42,t.Q.value=.55;const e=i.createBiquadFilter();e.type="peaking",e.frequency.value=260,e.Q.value=.7,e.gain.value=2.1;const n=i.createBiquadFilter();n.type="highshelf",n.frequency.value=4200,n.gain.value=-1.2;const o=i.createConvolver();o.normalize=!0,o.buffer=Vt(i);const a=i.createGain();a.gain.value=.13;const r=i.createDynamicsCompressor();r.threshold.value=-20,r.knee.value=16,r.ratio.value=2.7,r.attack.value=.005,r.release.value=.2;const s=i.createGain();s.gain.value=.86,B.connect(t).connect(e).connect(n).connect(r),B.connect(o).connect(a).connect(r),K.connect(r),r.connect(s).connect(i.destination)}function Vt(t){const n=Math.max(1,Math.floor(t.sampleRate*.72)),o=t.createBuffer(2,n,t.sampleRate);let a=5370206;const r=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let s=0;s<o.numberOfChannels;s+=1){const l=o.getChannelData(s);for(let d=0;d<n;d+=1){const b=(1-d/n)**3.1;l[d]=(r()*2-1)*b*.34}[.017,.031,.047,.071].forEach((d,u)=>{const b=Math.min(n-1,Math.floor(d*t.sampleRate));l[b]+=(u%2===s?.52:-.34)/(u+1)})}return o}function ht(t,e){if(!i)return;const n=new Set;for(const o of t)(e==="guitar"?Z(o):tt(o)).forEach(r=>n.add(r));n.forEach(o=>bt(e,o))}function lt(){if(!$||!i)return;const t=X(),e=60/t.bpm,n=i.currentTime+.16;for(;H<n;)Ht(W,H,t),H+=e,W+=1}function Ht(t,e,n){if(!i||!m.length)return;const o=Math.floor(t/n.beatsPerChord)%m.length,a=t%n.beatsPerChord,r=m[o],s=60/n.bpm;if(n.metronome&&_t(e,t%4===0),n.instrument==="guitar")if(n.pattern==="strum"){const l=a%2===1;ct(r,e,s*.82,l)}else n.pattern==="block"?ct(r,e,s*.92,!1):jt(r,e,s,a);else n.pattern==="block"||n.pattern==="strum"?Yt(r,e,s*.86):Ut(r,e,s,a)}function ct(t,e,n,o){const a=Z(t),r=o?[...a].reverse():a;r.forEach((s,l)=>{const c=r.length>1?(l/(r.length-1)-.5)*.22:0;gt(s,e+l*.024,n,l===0?.17:.145,c)})}function jt(t,e,n,o){const a=Z(t),r=[[0,2,4,3],[1,3,4,2],[0,3,4,2],[1,2,4,3]];r[o%r.length].forEach((l,c)=>{const d=a[l%a.length],u=(l%a.length/Math.max(1,a.length-1)-.5)*.18;gt(d,e+c*n/4,n*.72,c===0?.18:.125,u)})}function Yt(t,e,n){const o=tt(t);o.forEach((a,r)=>{const s=(r/Math.max(1,o.length-1)-.5)*.3;M(a,e+r*.007,n,r===0?.16:.105,s)})}function Ut(t,e,n,o){var r;const a=tt(t);o%2===0?(M(a[0],e,n*.9,.17,-.14),M(a[1],e+n*.5,n*.46,.095,.04),M(a[2],e+n*.5+.006,n*.46,.09,.13)):(M((r=a[3])!=null?r:a[2],e,n*.45,.1,.16),M(a[2],e+n*.5,n*.45,.09,.06))}function gt(t,e,n,o,a=0){ft("guitar",t,e,Math.max(.62,n*1.9),o,a)}function M(t,e,n,o,a=0){ft("piano",t,e,Math.max(.95,n*2.25),o,a)}function ft(t,e,n,o,a,r){if(!i||!B)return;const s=i.createBufferSource(),l=i.createGain(),c=i.createStereoPanner(),d=bt(t,e),u=Math.max(n,i.currentTime+.002),b=u+Math.min(d.duration,o);s.buffer=d,c.pan.setValueAtTime(Math.max(-.85,Math.min(.85,r)),u),l.gain.setValueAtTime(1e-4,u),l.gain.linearRampToValueAtTime(a,u+.006),l.gain.setValueAtTime(a*.92,Math.min(b-.05,u+.06)),l.gain.exponentialRampToValueAtTime(1e-4,Math.max(u+.08,b-.015)),s.connect(l).connect(c).connect(B),yt(s,u,b-u)}function bt(t,e){if(!i)throw new Error("Audio context is not ready.");const n=`${t}:${e}:${i.sampleRate}`,o=it.get(n);if(o)return o;const a=t==="guitar"?zt(e):Wt(e);return it.set(n,a),a}function zt(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=At(t),o=Math.max(2.35,Math.min(3.5,3.25-(t-40)*.018)),a=Math.floor(e*o),r=i.createBuffer(1,a,e),s=r.getChannelData(0),l=Math.max(2,Math.round(e/n)),c=new Float32Array(l);let d=t*2654435761>>>0,u=0;const b=()=>(d=d*1664525+1013904223>>>0,d/4294967296);for(let y=0;y<l;y+=1){const G=b()*2-1;c[y]=G*.7+u*.3,u=G}const T=Math.max(.9948,Math.min(.9976,.99725-(t-52)*22e-6));let P=0,x=0,L=0;for(let y=0;y<a;y+=1){const G=c[P],I=c[(P+1)%l];c[P]=(G*.49+I*.51)*T,P=(P+1)%l,x+=(G-x)*.055;const R=y/e,D=Math.min(1,R/.0035),h=y<e*.018?(b()*2-1)*(1-R/.018)*.045:0,A=(G*.82+x*.27+h)*D;s[y]=A,L=Math.max(L,Math.abs(A))}return vt(s,L,.86),r}function Wt(t){if(!i)throw new Error("Audio context is not ready.");const e=i.sampleRate,n=At(t),o=t<48?4.25:t<68?3.55:2.9,a=Math.floor(e*o),r=i.createBuffer(1,a,e),s=r.getChannelData(0),l=[1,.57,.36,.23,.145,.09,.052],c=l.length,d=new Float64Array(c),u=new Float64Array(c),b=new Float64Array(c),T=new Float64Array(c),P=new Float64Array(c),x=new Float64Array(c),L=6e-5+Math.max(0,t-48)*18e-7,y=.72+Math.max(0,t-45)*.012;for(let h=0;h<c;h+=1){const A=h+1,j=n*A*Math.sqrt(1+L*A*A),O=2*Math.PI*j/e;d[h]=0,u[h]=1,b[h]=Math.sin(O),T[h]=Math.cos(O),P[h]=l[h],x[h]=Math.exp(-(y+h*.54)/e)}let G=t*2246822519+3266489917>>>0,I=1;const R=Math.exp(-78/e);let D=0;for(let h=0;h<a;h+=1){let A=0;for(let g=0;g<c;g+=1){A+=d[g]*P[g];const nt=d[g];d[g]=nt*T[g]+u[g]*b[g],u[g]=u[g]*T[g]-nt*b[g],P[g]*=x[g]}G=G*1664525+1013904223>>>0;const j=(G/4294967296*2-1)*.07*I;I*=R;const O=Math.min(1,h/Math.max(1,e*.004)),et=Math.tanh((A*.62+j)*1.12)*O;s[h]=et,D=Math.max(D,Math.abs(et))}return vt(s,D,.82),r}function vt(t,e,n){if(e<=1e-5)return;const o=n/e;for(let a=0;a<t.length;a+=1)t[a]*=o}function _t(t,e){if(!i||!K)return;const n=i.createOscillator(),o=i.createGain();n.type="sine",n.frequency.setValueAtTime(e?1450:980,t),o.gain.setValueAtTime(e?.05:.025,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.032),n.connect(o).connect(K),yt(n,t,.038)}function yt(t,e,n){N.push(t),t.addEventListener("ended",()=>{const o=N.indexOf(t);o>=0&&N.splice(o,1)}),t.start(e),t.stop(e+n)}function Jt(){if(!$||!i||!m.length)return;const t=X(),e=60/t.bpm,n=Math.max(0,Math.floor((i.currentTime-z)/e)),o=Math.floor(n/t.beatsPerChord)%m.length,a=n%4;F(m,o),Gt(a)}function Ct(){try{const t=localStorage.getItem(ut);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.filter(n=>{if(!n||typeof n!="object")return!1;const o=n;return typeof o.title=="string"&&typeof o.chords=="string"}).map(n=>({...n,category:"Custom"})):[]}catch(t){return[]}}function Q(){const t=_.value,e=[...Bt,...Ct()].filter(n=>t==="All"||n.category===t);if(rt.replaceChildren(...e.map(n=>{const o=document.createElement("button");o.type="button",o.className="preset preset-card";const a=E(n.chords).length;return o.innerHTML=`<span>${U(n.title)}</span><small>${U(n.category)} · ${a} chords${n.note?` · ${U(n.note)}`:""}</small>`,o.addEventListener("click",()=>Qt(n)),o})),!e.length){const n=document.createElement("p");n.className="preset-empty",n.textContent="No presets in this category yet. Save the current progression to add one.",rt.replaceChildren(n)}}function Qt(t){var e;v.value=t.chords,m=E(t.chords),F(m,0),t.bpm&&(S.value=String(t.bpm)),t.instrument&&(w.value=t.instrument),t.pattern&&(C.value=t.pattern),Et(),k(),f(`${t.title} · ${(e=t.bpm)!=null?e:S.value} BPM · ${m.length} chords.`)}function Xt(){const t=Y.value.trim(),e=E(v.value);if(!t){f("Enter a name for your preset first.",!0),Y.focus();return}if(!e.length){f("Enter at least one valid chord before saving.",!0);return}const n=Ct().filter(o=>o.title.toLowerCase()!==t.toLowerCase());n.unshift({title:t,category:"Custom",chords:e.map(o=>o.raw).join(" | "),bpm:Number(S.value),instrument:w.value,pattern:C.value});try{localStorage.setItem(ut,JSON.stringify(n.slice(0,40))),Y.value="",_.value="Custom",Q(),f(`Saved “${t}” in My Presets.`)}catch(o){f("This browser could not save the preset locally.",!0)}}function Zt(t){const e=E(v.value);if(!e.length||![4,8,12,16].includes(t))return;const n=Array.from({length:t},(o,a)=>e[a%e.length].raw);v.value=n.join(" | "),m=E(v.value),F(m,0),f(`Progression expanded to ${t} chords. Edit any chord freely.`)}function U(t){return t.replace(/[&<>"']/g,e=>{var n;return(n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[e])!=null?n:e})}function F(t,e){var o;Nt.replaceChildren(...t.map((a,r)=>{const s=document.createElement("button");return s.type="button",s.className=`chord-pill${r===e?" active":""}`,s.textContent=a.label,s.addEventListener("click",()=>{v.focus(),f(`Chord ${a.label} selected in the progression.`)}),s}));const n=t[e];dt.textContent=(o=n==null?void 0:n.label)!=null?o:"—",mt.textContent=n?`Chord ${e+1} of ${t.length}`:"No valid chords"}function Gt(t){[...$t.children].forEach((e,n)=>e.classList.toggle("active",n===t))}function X(){return{progression:v.value,instrument:w.value,pattern:C.value,bpm:Number(S.value),beatsPerChord:Number(Mt.value),metronome:Ft.checked}}function k(){var n,o;xt.textContent=`${S.value} BPM`;const t=w.value==="guitar"?"Acoustic Guitar":"Piano",e=(o=(n=C.options[C.selectedIndex])==null?void 0:n.text)!=null?o:C.value;Kt.textContent=`${t} · ${e}`}function Et(){w.value==="piano"&&C.value==="strum"&&(C.value="ballad"),w.value==="guitar"&&C.value==="ballad"&&(C.value="arpeggio"),i&&ht(m,w.value),k()}function Pt(t){const e=E(v.value);e.length&&(v.value=e.map(n=>te(n,t)).join(" | "),m=E(v.value),F(m,0),f(`Progression transposed ${t>0?"up":"down"} one semitone.`))}function te(t,e){var l;const n=(t.root+e+12)%12,o=(t.bass+e+12)%12,a=t.raw.match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/),r=(l=a==null?void 0:a[2])!=null?l:"",s=a!=null&&a[3]?`/${ot[o].replace("♯","#").replace("♭","b")}`:"";return`${ot[n].replace("♯","#").replace("♭","b")}${r}${s}`}function E(t){return t.replace(/[|,\n]+/g," ").split(/\s+/).map(e=>e.trim()).filter(Boolean).map(ee).filter(e=>e!==null)}function ee(t){var s;const e=t.match(/^([A-G](?:#|b)?)([^/]*)?(?:\/([A-G](?:#|b)?))?$/);if(!e)return null;const n=at[e[1]];if(n===void 0)return null;const o=((s=e[2])!=null?s:"").toLowerCase();let a=[0,4,7];o.startsWith("m")&&!o.startsWith("maj")&&(a=[0,3,7]),o.includes("dim")&&(a=[0,3,6]),o.includes("sus2")&&(a=[0,2,7]),(o.includes("sus4")||o==="sus")&&(a=[0,5,7]),o.includes("maj7")?a=[...a,11]:o.includes("7")&&(a=[...a,10]);const r=e[3]?at[e[3]]:n;return r===void 0?null:{raw:t,root:n,bass:r,intervals:a,label:t}}function Z(t){var r;const e=40+(t.bass-4+12)%12;let n=e;const o=t.intervals.map(s=>{let l=48+t.root+s;for(;l<=n;)l+=12;return n=l,l}),a=(r=o[3])!=null?r:o[0]+12;return[e,o[0],o[1],o[2],a].map(wt)}function tt(t){const e=36+t.bass,n=t.intervals.map(o=>60+t.root+o);return[e,...n].map(wt)}function At(t){return 440*2**((t-69)/12)}function wt(t){return Math.max(28,Math.min(88,t))}function f(t,e=!1){st.textContent=t,st.classList.toggle("error",e)}function p(t){const e=document.getElementById(t);if(!e)throw new Error(`Missing element: ${t}`);return e}
