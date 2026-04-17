import React, { useId } from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { ContactInfoItem } from '../Common/ContactInfoItem';
import { SERVICE_OPTIONS, CONTACT_INFO, INPUT_CLASS } from './Contact.types';
import type { FormFieldProps } from './Contact.types';

const FormField = ({ id, label, required = false, children }: FormFieldProps): React.ReactElement => (
  <div>
    <label htmlFor={id} className="block text-white/50 text-xs uppercase tracking-wider mb-1">
      {label}{required && ' *'}
    </label>
    {children}
  </div>
);

const SuccessState = (): React.ReactElement => (
  <div className="text-center py-14">
    <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <i className="bi bi-check-lg text-green-400 text-3xl" />
    </div>
    <h3 className="playfair text-white text-xl font-bold mb-2">Message Sent!</h3>
    <p className="text-white/60 text-sm">Thank you for reaching out. We'll be in touch within one business day.</p>
  </div>
);

const Contact = (): React.ReactElement => {
  const { fields, isPending, sent, setField, submit } = useContactForm();

  const nameId    = useId();
  const phoneId   = useId();
  const emailId   = useId();
  const serviceId = useId();
  const messageId = useId();

  return (
    <section id="contact" className="py-10 sm:py-20 cta-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <p className="text-blue-300 font-semibold tracking-widest uppercase text-xs mb-3">Get In Touch</p>
            <h2 className="playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Transform<br />Your Building's Exterior?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Contact us today for a free, no-obligation quote. Our team is ready to
              discuss your project and bring your vision to life.
            </p>
            <div className="space-y-5">
              {CONTACT_INFO.map(entry => (
                <ContactInfoItem key={entry.label} {...entry} />
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8">
            {sent ? <SuccessState /> : (
              <>
                <h3 className="playfair text-white text-xl font-bold mb-6">Request a Free Quote</h3>
                <div className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField id={nameId} label="Full Name" required>
                      <input id={nameId} type="text" value={fields.name} onChange={setField('name')} placeholder="John Smith" className={INPUT_CLASS} />
                    </FormField>
                    <FormField id={phoneId} label="Phone">
                      <input id={phoneId} type="tel" value={fields.phone} onChange={setField('phone')} placeholder="416-xxx-xxxx" className={INPUT_CLASS} />
                    </FormField>
                  </div>

                  <FormField id={emailId} label="Email" required>
                    <input id={emailId} type="email" value={fields.email} onChange={setField('email')} placeholder="you@example.com" className={INPUT_CLASS} />
                  </FormField>

                  <FormField id={serviceId} label="Service">
                    <select id={serviceId} value={fields.service} onChange={setField('service')}
                      className="w-full bg-slate-800 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors">
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField id={messageId} label="Message" required>
                    <textarea id={messageId} value={fields.message} onChange={setField('message')} rows={4}
                      placeholder="Tell us about your project…"
                      className={`${INPUT_CLASS} resize-none`} />
                  </FormField>

                  <button
                    onClick={submit}
                    disabled={isPending}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    {isPending ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export { Contact };
