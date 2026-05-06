import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "4bnj1ZoWEnf_2ik1K";
const EMAILJS_SERVICE_ID = "service_0pohiuk";
const EMAILJS_TEMPLATE_ID = "template_j002mtr";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim())
      errs.name = "Name is required.";
    else if (form.name.trim().length < 2)
      errs.name = "Name must be at least 2 characters.";

    if (!form.email.trim())
      errs.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim()))
      errs.email = "Enter a valid email address.";

    if (!form.msg.trim())
      errs.msg = "Message is required.";
    else if (form.msg.trim().length < 10)
      errs.msg = "Message must be at least 10 characters.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        message: form.msg.trim(),
      });
      setStatus("ok");
      setForm({ name: "", email: "", msg: "" });
    } catch (err) {
      console.error(err);
      setStatus("fail");
    }
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-header">
        <div className="contacts-line" />
        <span className="contacts-label">Contacts</span>
      </div>

      <div className="contacts-body">

        {/* Left */}
        <div className="contacts-left">
          <div className="contacts-title">
            Have a project?<br />Let's talk!
          </div>

          <div className="contacts-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" fill="none" stroke="#e8473f" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <a href="mailto:jolitkorat7@gmail.com">jolitkorat7@gmail.com</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>+91 9825375850</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Surat, India</span>
            </div>
          </div>
          <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </button>


          {status === "ok" && (
            <p className="status-msg status-ok">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "fail" && (
            <p className="status-msg status-fail">
              ✗ Failed to send. Please try again.
            </p>
          )}
        </div>

        {/* Right: form */}
        <div className="contacts-form">
          <div className={`form-field ${errors.name ? "has-error" : ""}`}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className={`form-field ${errors.email ? "has-error" : ""}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className={`form-field ${errors.msg ? "has-error" : ""}`}>
            <label>Message</label>
            <textarea
              name="msg"
              rows={5}
              value={form.msg}
              onChange={handleChange}
              placeholder="Tell me about your project…"
            />
            {errors.msg && <span className="field-error">{errors.msg}</span>}
          </div>
        </div>
        

      </div>
    </section>
  );
}
