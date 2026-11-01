import { useState } from 'react';
import { CONTACT_COPY, EVENT_TYPES } from '../../data/content';
import Reveal from '../ui/Reveal';
import { SITE, WEB3FORMS } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';
import SocialIcon from '../ui/SocialIcon';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', eventType: '', message: '' };

const CONTACT_ITEMS = [
  { icon: 'fa-solid fa-phone', label: 'Call / WhatsApp', value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
  { icon: 'fa-solid fa-envelope', label: 'Email Address', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'fa-solid fa-location-dot', label: 'Locality', value: SITE.location },
];

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const sending = status.state === 'sending';

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const botcheck = e.currentTarget.elements.botcheck.checked;
    setStatus({ state: 'sending', message: '' });

    try {
      const response = await fetch(WEB3FORMS.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS.accessKey,
          subject: WEB3FORMS.subject,
          from_name: WEB3FORMS.fromName,
          botcheck,
          name: form.name,
          email: form.email,
          'event-type': form.eventType,
          message: form.message,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');

      setStatus({
        state: 'success',
        message: `Thank you, ${form.name}! Your inquiry has been sent — Diya Jha will get back to you shortly.`,
      });
      setForm(EMPTY_FORM);
    } catch {
      setStatus({
        state: 'error',
        message: 'Something went wrong sending your inquiry. Please try again or reach out via phone/email directly.',
      });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <SectionHeading tag={CONTACT_COPY.tag} title={CONTACT_COPY.title} />
          {CONTACT_COPY.paragraphs.map((p, i) => (
            <p key={i} className={`contact-lead${i === 0 ? ' is-first' : ''}`}>
              {p}
            </p>
          ))}

          <a
            className="btn btn-whatsapp"
            href={`https://wa.me/${SITE.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Diya, I would like to enquire about hosting an event.')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
          </a>

          <ul className="contact-details">
            {CONTACT_ITEMS.map((item) => (
              <li className="contact-item" key={item.label}>
                <div className="contact-icon-box">
                  <i className={item.icon} />
                </div>
                <div className="contact-text">
                  <p className="contact-label">{item.label}</p>
                  {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
                </div>
              </li>
            ))}
          </ul>

          <div className="social-links">
            <SocialIcon href={SITE.instagram} icon="fa-brands fa-instagram" label="Instagram" />
            <SocialIcon href={`mailto:${SITE.email}`} icon="fa-solid fa-envelope" label="Email" />
            <SocialIcon href={`tel:${SITE.phone}`} icon="fa-solid fa-phone" label="Call" />
          </div>
        </Reveal>

        <Reveal className="glass-card contact-form-wrapper" delay={120}>
          <h3 className="form-title">Send an Enquiry</h3>
          <p className="form-subtitle">Share a few details and Diya will get back to you shortly.</p>
          <form onSubmit={onSubmit}>
            <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" />
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required value={form.name} onChange={update} />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" name="email" className="form-control" placeholder="john@example.com" required value={form.email} onChange={update} />
            </div>
            <div className="form-group">
              <label htmlFor="eventType" className="form-label">Event Type</label>
              <select id="eventType" name="eventType" className="form-control" required value={form.eventType} onChange={update}>
                <option value="" disabled>Select event category...</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Event Details</label>
              <textarea id="message" name="message" className="form-control" placeholder="Share event dates, location, audience size, and requirements..." required value={form.message} onChange={update} />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
              {sending ? (
                <>Sending... <i className="fa-solid fa-spinner fa-spin" /></>
              ) : (
                <>Send Inquiry <i className="fa-solid fa-paper-plane" /></>
              )}
            </button>
            <p className={`form-status ${status.state}`} role="status" aria-live="polite">
              {status.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
