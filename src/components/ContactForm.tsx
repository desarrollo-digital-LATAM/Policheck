import { useState, type ChangeEvent, type SubmitEvent } from 'react';

const whatsappNumber = '51966994027';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = 'Indica tu nombre.';
    if (!values.phone.trim()) nextErrors.phone = 'Indica un teléfono o WhatsApp.';
    if (!values.service) nextErrors.service = 'Selecciona el tipo de servicio.';
    if (!values.message.trim()) nextErrors.message = 'Cuéntanos brevemente sobre tu consulta.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus('submitting');
    const emailLine = values.email.trim() ? `\nMi correo: ${values.email.trim()}` : '';
    const message = `Hola, soy ${values.name.trim()}.\n\nEstoy interesado(a) en: ${values.service}\n\nMi teléfono / WhatsApp: ${values.phone.trim()}${emailLine}\n\nMi consulta:\n${values.message.trim()}\n\nQuisiera recibir información sobre POLICHECK.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open in the submit event so mobile browsers keep the WhatsApp navigation as user initiated.
    window.open(url, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => setStatus('idle'), 300);
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit} aria-describedby="form-note">
      <p className="form-note" id="form-note">Los campos marcados con <span aria-hidden="true">*</span> son obligatorios. Al enviar, se abrirá WhatsApp con tu consulta; este sitio no guarda tus datos.</p>
      <div className="form-grid">
        <Field label="Nombre" name="name" value={values.name} error={errors.name} onChange={handleChange} required disabled={status === 'submitting'} />
        <Field label="Teléfono / WhatsApp" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={handleChange} required disabled={status === 'submitting'} />
        <Field label="Correo electrónico" name="email" type="email" value={values.email} error={errors.email} onChange={handleChange} disabled={status === 'submitting'} />
        <label className="form-field">
          <span id="service-label">Tipo de servicio <b aria-hidden="true">*</b></span>
          <select id="service" name="service" value={values.service} onChange={handleChange} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined} aria-labelledby="service-label" required disabled={status === 'submitting'}>
            <option value="">Selecciona una opción</option>
            <option>Polígrafo para selección de personal</option>
            <option>Polígrafo específico</option>
            <option>Evaluación para empresas</option>
            <option>Consulta general</option>
          </select>
          {errors.service && <small id="service-error" role="alert">{errors.service}</small>}
        </label>
        <label className="form-field form-field-wide">
          <span id="message-label">Mensaje <b aria-hidden="true">*</b></span>
          <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} aria-labelledby="message-label" required disabled={status === 'submitting'} />
          {errors.message && <small id="message-error" role="alert">{errors.message}</small>}
        </label>
      </div>
      <div className="form-action"><button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Abriendo WhatsApp...' : 'Solicitar información'} <span aria-hidden="true">↗</span></button><span aria-live="polite">{status === 'submitting' ? 'Tu consulta está lista. Abriendo WhatsApp.' : ''}</span></div>
    </form>
  );
}

function Field({ label, name, type = 'text', value, error, onChange, required = false, disabled = false }: { label: string; name: keyof FormValues; type?: string; value: string; error?: string; onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void; required?: boolean; disabled?: boolean }) {
  const errorId = `${name}-error`;
  const labelId = `${name}-label`;
  return <label className="form-field"><span id={labelId}>{label} {required && <b aria-hidden="true">*</b>}</span><input id={name} name={name} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} aria-labelledby={labelId} required={required} disabled={disabled} />{error && <small id={errorId} role="alert">{error}</small>}</label>;
}
