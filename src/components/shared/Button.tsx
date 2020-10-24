import React from 'react'

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
          <img alt="down arrows"className="button-img" src="/images/icons/down-arrows.svg" />
        </div>
      }
      <span className="button-text">{text}</span>
    </a>
  )
}
