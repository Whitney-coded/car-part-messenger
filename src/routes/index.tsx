import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Check, Link2, MapPin, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { makes, provinces, conditions, whatsappLink } from '@/lib/part-request';
import automotive from '@/assets/automotive.jpg';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'PartLink SA | Find Car Parts Anywhere in South Africa' },
  { name: 'description', content: 'Find used and aftermarket car parts in South Africa. Send your vehicle and part details directly to PartLink SA via WhatsApp.' },
  { property: 'og:title', content: 'PartLink SA | Find Your Car Part' },
  { property: 'og:description', content: 'Skip calling scrap yards. Request car parts from local South African spares suppliers via WhatsApp.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: Index,
});
function Index() {
 const [condition, setCondition] = useState('Any');
 function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const value = (name: string) => String(data.get(name) ?? '').trim();
  for (const name of ['model', 'year', 'part']) {
   if (!value(name)) {
    const input = event.currentTarget.elements.namedItem(name);
    if (input instanceof HTMLInputElement) { input.setCustomValidity('Please enter this detail.'); input.reportValidity(); }
    return;
   }
  }
  window.location.assign(whatsappLink({ make: value('make'), model: value('model'), year: value('year'), part: value('part'), province: value('province'), condition }));
 }
 return <main>
  <header className="site-header">
   <a href="#" className="brand" aria-label="PartLink SA home"><Link2 className="brand-mark" strokeWidth={2.8} /><span>PartLink<span className="brand-sa">SA</span></span></a>
   <div className="header-note"><span className="status-dot" />Your local parts connection</div>
  </header>
  <section className="hero">
   <img className="hero-photo" src={automotive} alt="Silver sports car with polished automotive details" width={1536} height={1024} />
   <div className="hero-inner">
    <div className="eyebrow"><MapPin size={12} /> South African parts. One connection.</div>
    <h1>Find Car Parts Fast<br /><span>Anywhere in SA.</span></h1>
    <p className="hero-copy">No more calling dozens of scrap yards. Tell us what you need, and we'll link your request to local spares suppliers instantly via WhatsApp.</p>
    <div className="hero-benefits"><span><Check />All 9 provinces</span><span><Check />Used & new parts</span><span><Check />No sign-up</span></div>
   </div>
  </section>
  <div className="content">
   <section className="request-panel" aria-labelledby="form-title">
    <div className="form-heading"><div><h2 id="form-title">Let's find your part.</h2><p>A few details. The right connection.</p></div><span className="form-icon"><Wrench size={19} /></span></div>
    <form onSubmit={submit}>
     <div className="field-grid">
      <div className="field make-field"><label htmlFor="make">Vehicle make</label><select id="make" name="make" required defaultValue=""><option value="" disabled>Select make</option>{makes.map(make => <option key={make}>{make}</option>)}</select></div>
      <div className="field"><label htmlFor="model">Vehicle model</label><input id="model" name="model" placeholder="e.g. Hilux, Polo, Ranger" required maxLength={80} onInput={e => e.currentTarget.setCustomValidity('')} /></div>
      <div className="field"><label htmlFor="year">Vehicle year</label><input id="year" name="year" placeholder="e.g. 2018" inputMode="numeric" pattern="[0-9]{4}" title="Enter a four-digit vehicle year" required maxLength={4} onInput={e => e.currentTarget.setCustomValidity('')} /></div>
      <div className="field part-field"><label htmlFor="part">Part needed</label><input id="part" name="part" placeholder="e.g. Bonnet, tailgate, alternator" required maxLength={160} onInput={e => e.currentTarget.setCustomValidity('')} /></div>
     </div>
     <fieldset className="condition-group"><legend>Part condition preference</legend><div className="condition-options">{conditions.map(item => <label key={item} className="condition-option"><input type="radio" name="condition" value={item} checked={condition === item} onChange={() => setCondition(item)} />{item}</label>)}</div></fieldset>
     <div className="field location-field"><label htmlFor="province">Your province</label><select id="province" name="province" required defaultValue=""><option value="" disabled>Select your province</option>{provinces.map(province => <option key={province}>{province}</option>)}</select></div>
     <Button type="submit" className="whatsapp-button"><MessageCircle className="message-icon" />Find My Part via WhatsApp<ArrowUpRight className="arrow" /></Button>
     <div className="privacy-note"><ShieldCheck size={12} />No sign-up. No obligation. Just the part you need.</div>
    </form>
   </section>
   <section className="how-section" aria-labelledby="how-title"><h2 id="how-title" className="section-heading">A simpler way to source spares</h2><div className="steps">
    <div className="step"><span className="step-number">01</span><div><h3>Enter details</h3><p>Your vehicle, your part, your province.</p></div></div>
    <div className="step"><span className="step-number">02</span><div><h3>Send via WhatsApp</h3><p>Your request goes straight to us.</p></div></div>
    <div className="step"><span className="step-number">03</span><div><h3>Get quotes from local yards</h3><p>Find the right part, close to home.</p></div></div>
   </div></section>
  </div>
  <footer><span>© {new Date().getFullYear()} PartLink SA</span><span>Built for South African roads.</span></footer>
 </main>;
}
