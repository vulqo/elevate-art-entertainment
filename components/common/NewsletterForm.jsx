'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data?.error || 'Subscribe failed');
        return;
      }
      setStatus('ok');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-group mb-40">
      <input
        type="email"
        name="subscrib"
        placeholder={status === 'ok' ? "You're subscribed ✓" : 'Your Email'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'sending'}
      />
      <button type="submit" aria-label="Subscribe" disabled={status === 'sending'}>
        <span className="ti-location-arrow"></span>
      </button>
      {status === 'error' && errorMsg ? (
        <small style={{ display: 'block', marginTop: 8, color: '#ff6b6b' }}>
          {errorMsg}
        </small>
      ) : null}
    </form>
  );
}
