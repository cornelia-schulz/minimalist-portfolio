import React from 'react'
import { ReactComponent as DownArrows } from '../../icons/down-arrows.svg'

interface IProps {
  classes: string
  hasImage: boolean
  text: string
  url: string
}

export const Button: React.FC<IProps> = ({classes, hasImage, text, url}) => {
  return (
    <a href={url} className={classes}>
      {hasImage &&
        <div className="button-img-container">
          <DownArrows className="button-img" />
        </div>
      }
      <span className="button-text">{text}</span>
    </a>
  )
}
