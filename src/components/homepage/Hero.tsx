import React from 'react'
import { Button } from '../shared/Button'

export const Hero = () => {
  return (
    <div className="container hero">
      <img 
        alt="hero with website on a screen"
        srcSet="/images/homepage/desktop/image-homepage-hero.jpg 1110w,
        /images/homepage/tablet/image-homepage-hero.jpg 688w,
        /images/homepage/mobile/image-homepage-hero.jpg 311w"
        sizes="(min-width: 36em) 100vw"
        src="/images/homepage/mobile/image-homepage-hero.jpg 311w"
      />
      <div className="hero-overlay">
        <h1>Hey, I'm Alex Spencer and I love building beautiful websites</h1>
        <Button classes="button button-primary" hasImage={true} text="ABOUT ME" />
      </div>
    </div>
  )
}
