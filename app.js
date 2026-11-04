
const treatmentsData=[
{name:"Signature Facial",cat:"Face",price:95,dur:"60 min",desc:"Deep cleanse, gentle exfoliation, lymphatic massage & bespoke mask."},
{name:"HydraGlow Facial",cat:"Face",price:120,dur:"75 min",desc:"7-step hydration ritual for instant radiance and plumped skin."},
{name:"Anti-Ageing Lifting Facial",cat:"Face",price:135,dur:"90 min",desc:"Firming, sculpting and peptide therapy to smooth fine lines."},
{name:"Sensitive Skin Ritual",cat:"Face",price:85,dur:"60 min",desc:"Calming, fragrance-free treatment for reactive or sensitive skin."},
{name:"Lymphatic Body Massage",cat:"Body",price:110,dur:"60 min",desc:"Rhythmic detox massage to reduce puffiness and boost circulation."},
{name:"Full Body Polish & Wrap",cat:"Body",price:140,dur:"90 min",desc:"Exfoliation, nourishing wrap and relaxation massage."},
{name:"Hot Stone Therapy",cat:"Body",price:125,dur:"75 min",desc:"Warm basalt stones melt tension and restore balance."},
{name:"Reflexology Foot Ritual",cat:"Body",price:75,dur:"45 min",desc:"Pressure-point therapy for deep relaxation and grounding."},
{name:"Lux Day Experience",cat:"Experiences",price:220,dur:"3 hours",desc:"Facial + body massage + scalp ritual + herbal tea ceremony."},
{name:"Couples Retreat",cat:"Experiences",price:340,dur:"2.5 hours",desc:"Side-by-side treatments in our private botanical suite."},
{name:"Bridal Glow Package",cat:"Experiences",price:280,dur:"3.5 hours",desc:"Pre-wedding glow series with facial, body and polish."},
{name:"Thermal & Hammam Ritual",cat:"Experiences",price:160,dur:"90 min",desc:"Steam, grains and traditional hammam cleansing ceremony."}
];
const testimonials=[
{q:"“THE BEST FACIAL I'VE EVER HAD! MY SKIN FEELS AMAZING, AND THE THERAPIST MADE ME FEEL SO COMFORTABLE.”",n:"Emily R.",m:"Signature Facial · Sample story"},
{q:"“I walked in stressed and walked out floating. The lymphatic massage is pure magic — my skin has never looked this clear.”",n:"Sophie M.",m:"Lymphatic Body Massage"},
{q:"“Lux Skin is my monthly ritual now. Every detail — the scent, the music, the care — feels so intentional and luxurious.”",n:"Priya K.",m:"Lux Day Experience"},
{q:"“Booked the Couples Retreat for our anniversary. Private suite, incredible therapists, unforgettable afternoon.”",n:"James & Olivia",m:"Couples Retreat"},
{q:"“My sensitive skin finally found its home. Gentle, honest advice and results in just two visits. Highly recommend!”",n:"Hannah L.",m:"Sensitive Skin Ritual"}
];
const faqs=[
{q:"How do I prepare for my appointment?",a:"Arrive 10 minutes early, avoid heavy makeup before facials, and let us know about allergies or sensitivities when booking. We'll provide everything you need."},
{q:"What is your cancellation policy?",a:"We offer free cancellation or rescheduling up to 24 hours before your appointment. Late cancellations may incur a 50% fee."},
{q:"Do you offer gift vouchers?",a:"Yes! Gift vouchers are available in-store and online from $50. They never expire and can be used for any treatment."},
{q:"Are your products safe for sensitive skin?",a:"Absolutely. We use Australian-made, organic, cruelty-free products and offer fully fragrance-free options. Patch tests are available on request."}
];
const details={
Face:{img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",desc:"Our Face rituals begin with a skin consultation and double cleanse, followed by tailored exfoliation, extraction (if needed), lymphatic facial massage and a bespoke mask. Ideal for dullness, congestion, ageing and sensitivity.",points:["Skin analysis & consultation","Enzyme + gentle manual exfoliation","Lymphatic drainage massage","Bespoke mask & LED therapy option"]},
Body:{img:"https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=900&auto=format&fit=crop",desc:"Body treatments focus on detoxification, circulation and deep relaxation. Using warm botanical oils and rhythmic techniques, we help reduce puffiness, ease tension and restore your natural glow.",points:["Detox lymphatic techniques","Botanical body polish","Warm stone or hot towel finish","Hydration & nourishment"]},
Experiences:{img:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",desc:"Our Experiences combine face and body into one seamless journey. Think thermal lounges, hammam rituals, scalp massage and tea ceremonies — designed to leave you revitalised head to toe.",points:["Full face + body combinations","Private suite options","Herbal tea & mindfulness","Perfect for special occasions"]}
};

// Marquee
document.getElementById('marquee').innerHTML=Array(2).fill(Array(8).fill('<span>LUX SKIN ✦</span>').join('')).join('');

// Header + logo color
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>60);document.getElementById('logo').classList.toggle('light',scrollY<=60)});

// Mobile menu
function toggleMenu(open){document.getElementById('mobileMenu').classList.toggle('open',open)}
document.getElementById('hamburger').onclick=()=>toggleMenu(true);

// Tabs + services
let activeCat='Face';
const cats=['Face','Body','Experiences'];
function renderTabs(){
 document.getElementById('tabs').innerHTML=cats.map(c=>`<button class="tab ${c===activeCat?'active':''}" onclick="setCat('${c}')">${c}</button>`).join('');
 const list=treatmentsData.filter(t=>t.cat===activeCat);
 document.getElementById('serviceList').innerHTML=list.map(t=>`
 <div class="service"><div><h4>${t.name}</h4><p>${t.desc}</p></div>
 <div class="service-right"><b>$${t.price}</b><div style="font-size:11px;color:var(--muted)">${t.dur}</div><button onclick="openBooking('${t.name}')">Book →</button></div></div>`).join('');
}
function setCat(c){activeCat=c;renderTabs()}
renderTabs();

// Testimonials
let ti=0,timer;
function showTesti(){
 const t=testimonials[ti];
 document.getElementById('quoteText').textContent=t.q;
 document.getElementById('authorName').textContent=t.n;
 document.getElementById('authorMeta').textContent=t.m;
 document.getElementById('avatar').textContent=t.n[0];
 document.getElementById('dots').innerHTML=testimonials.map((_,i)=>`<div class="dot ${i===ti?'active':''}" onclick="goTesti(${i})"></div>`).join('');
}
function changeTesti(d){ti=(ti+d+testimonials.length)%testimonials.length;showTesti();resetTimer()}
function goTesti(i){ti=i;showTesti();resetTimer()}
function resetTimer(){clearInterval(timer);timer=setInterval(()=>changeTesti(1),6000)}
showTesti();resetTimer();

// FAQ
document.getElementById('faq').innerHTML=faqs.map((f,i)=>`<div class="faq-item ${i===0?'open':''}"><button class="faq-q" onclick="this.parentElement.classList.toggle('open')"><span>${f.q}</span><span>+</span></button><div class="faq-a">${f.a}</div></div>`).join('');

// Booking
let selectedTime='10:00 AM';
const times=['9:00 AM','10:00 AM','11:30 AM','1:00 PM','2:30 PM','4:00 PM','5:30 PM'];
document.getElementById('slots').innerHTML=times.map((t,i)=>`<button type="button" class="slot ${t===selectedTime?'selected':''} " onclick="pickTime(this,'${t}')">${t}</button>`).join('');
function pickTime(el,t){selectedTime=t;document.querySelectorAll('.slot').forEach(s=>s.classList.remove('selected'));el.classList.add('selected');updateSummary()}
const sel=document.getElementById('bkTreatment');sel.innerHTML=treatmentsData.map(t=>`<option value="${t.name}">${t.name} — $${t.price} (${t.dur})</option>`).join('');
const dateInput=document.getElementById('bkDate');dateInput.min=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().split('T')[0];dateInput.value=dateInput.min;
sel.onchange=updateSummary;dateInput.onchange=updateSummary;document.getElementById('bkGuests').onchange=updateSummary;
function updateSummary(){
 const t=treatmentsData.find(x=>x.name===sel.value)||treatmentsData[0];
 const d=dateInput.value?new Date(dateInput.value+'T00:00:00').toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'long'}):'Select date';
 document.getElementById('summary').innerHTML=`<b>Booking Summary</b><br>${t.name} · ${t.dur} · ${document.getElementById('bkGuests').value}<br>${d} at ${selectedTime} · <b>Total: $${t.price}</b> (sample price)`;
}
function openBooking(name){
 if(name) sel.value=name;
 updateSummary();
 document.getElementById('bookingModal').classList.add('open');
 document.body.style.overflow='hidden';
}
function closeBooking(){document.getElementById('bookingModal').classList.remove('open');document.body.style.overflow=''}
function submitBooking(e){
 e.preventDefault();
 showToast('Demo only — your request has not been sent.');
}

// Detail modal
function openDetail(cat){
 const d=details[cat];
 document.getElementById('detailTitle').textContent=cat.toUpperCase()+' RITUALS';
 document.getElementById('detailBody').innerHTML=`<img src="${d.img}" style="width:100%;height:260px;object-fit:cover;border-radius:4px"><p style="line-height:1.8;color:#5A4A38;margin:16px 0">${d.desc}</p><ul style="line-height:2;font-size:14px">${d.points.map(p=>`<li>${p}</li>`).join('')}</ul><button class="btn btn-dark" style="width:100%;margin-top:18px" onclick="closeDetail();openBooking('${cat==='Face'?'Signature Facial':cat==='Body'?'Lymphatic Body Massage':'Lux Day Experience'}')">Book This Ritual →</button>`;
 document.getElementById('detailModal').classList.add('open');
}
function closeDetail(){document.getElementById('detailModal').classList.remove('open')}

// Newsletter + toast
function subscribe(e){e.preventDefault();document.getElementById('newsMsg').textContent='Thanks for trying the demo. No subscription was created.';e.target.reset()}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200)}

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o){o.classList.remove('open');document.body.style.overflow=''}}));

// Reveal + counters
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const cObs=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;const el=e.target,target=parseFloat(el.dataset.target);let cur=0;const step=target/60;
 const iv=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(iv)}el.textContent=target%1?cur.toFixed(1):Math.round(cur)},20);cObs.unobserve(el);
}),{threshold:.5});
document.querySelectorAll('.counter').forEach(el=>cObs.observe(el));
updateSummary();

// Close dialogs with Escape and respect reduced-motion preferences.
document.addEventListener('keydown', e => { if(e.key === 'Escape'){ closeBooking(); closeDetail(); toggleMenu(false); } });
