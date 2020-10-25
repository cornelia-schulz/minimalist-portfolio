import React from 'react'
import { ReactComponent as DownArrows } from '../../icons/down-arrows.svg'

interface IProps {
  classes: string
  hasImage: boolean
  setActiveTab?: (tab:number) => void
  tab?: number
  text: string
  url: string
}

export const Button: React.FC<IProps> = ({classes, hasImage, setActiveTab, tab, text, url}) => {

  const updateTab = () => {
    if (setActiveTab && tab) {
      setActiveTab(tab)
    }
  }

  return (
    <a href={url} className={classes} onClick={updateTab}>
      {hasImage &&
        <div className="button-img-container">
          <DownArrows className="button-img" />
        </div>
      }
      <span className="button-text">{text}</span>
    </a>
  )
}
