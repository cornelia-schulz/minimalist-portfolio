import React from 'react'
import { Button } from '../shared/Button'

interface IProps {
  setActiveTab: (tab:number) => void
}

export const Contact: React.FC<IProps> = ({setActiveTab}) => {
  return (
    <div className="contact container">
      <h2>Interested in doing a project together?</h2>
      <div className="horizontal-line"></div>
      <Button
        classes="button button-secondary"
        hasImage={false}
        setActiveTab={setActiveTab}
        tab={2}
        text="CONTACT ME"
        url="/contact"
      />
    </div>
  )
}
