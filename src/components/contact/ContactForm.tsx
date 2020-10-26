import React, { SyntheticEvent, useState } from 'react'
import { Button } from '../shared/Button'

export const ContactForm = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <article className="contact-me-form container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          onChange={e => setName(e.target.value)}
          placeholder="Jane Appleseed"
          type="text"
          value={name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="email@example.com"
          type="email"
          value={email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={e => setMessage(e.target.value)}
          rows={4}
          placeholder="How can I help?"
          value={message}
        />
        <Button classes="button button-primary" hasImage={false} text="SEND MESSAGE" />
      </form>
    </article>
  )
}
