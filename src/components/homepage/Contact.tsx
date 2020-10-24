import React from 'react'
import { Button } from '../shared/Button'

export const Contact = () => {
  return (
    <div className="contact container">
      <h2>Interested in doing a project together?</h2>
      <div className="horizontal-line"></div>
      <Button classes="button button-secondary" hasImage={false} text="CONTACT ME" url="/contact" />
    </div>
  )
}
