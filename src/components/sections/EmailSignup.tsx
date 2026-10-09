'use client'

import React, { useId, useState } from 'react'
import { isShopifyConfigured, subscribeEmail } from '@/lib/shopify/client'
import { trackSignUp } from '@/lib/analytics'

// Email list signup. Subscribers land in Shopify → Customers with email
// marketing consent, so the owners can mail them with Shopify Email.

interface EmailSignupProps {
  /** Shown above the field, e.g. "Be first to hear when tees drop." */
  prompt?: string
  /** Where on the site this form lives — sent to GA as the sign_up method. */
  placement: string
  className?: string
}

type Status = 'idle' | 'sending' | 'done' | 'already' | 'error'

const EmailSignup: React.FC<EmailSignupProps> = ({ prompt, placement, className }) => {
  const id = useId()
  const [email, setEmail] = useState('')
  const [trap, setTrap] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const finished = status === 'done' || status === 'already'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Bots fill every field; people never see this one.
    if (trap) {
      setStatus('done')
      return
    }
    if (!isShopifyConfigured()) {
      setError('Signup is not connected yet.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setError('')
    try {
      const result = await subscribeEmail(email.trim())
      setStatus(result === 'already' ? 'already' : 'done')
      if (result === 'subscribed') trackSignUp(placement)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className={`email-signup ${className ?? ''}`}>
      {prompt && !finished && <p className="email-signup-prompt">{prompt}</p>}

      {finished ? (
        <p className="email-signup-msg" role="status">
          {status === 'already'
            ? "You're already on our list. Thanks!"
            : "You're on the list. We'll email you when there's news. 🤍"}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="email-signup-form">
          <label htmlFor={`${id}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={`${id}-note`}
            aria-invalid={status === 'error' || undefined}
          />
          <div className="email-signup-trap" aria-hidden="true">
            <label htmlFor={`${id}-company`}>Company</label>
            <input
              id={`${id}-company`}
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
            />
          </div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Joining…' : 'Join the list'}
          </button>
        </form>
      )}

      {!finished && (
        <p id={`${id}-note`} className="email-signup-note" role={status === 'error' ? 'alert' : undefined}>
          {status === 'error' ? error : 'New drops and news only. Unsubscribe anytime.'}
        </p>
      )}
    </div>
  )
}

export default EmailSignup
