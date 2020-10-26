import React from 'react'
import { Button } from '../shared/Button'

interface IProps {
  setActiveTab: (tab:number) => void
}

export const About: React.FC<IProps> = ({setActiveTab}) => {

  return (
    <div className="container about">
      <img 
        alt="hero with website on a screen"
        className="about-img"
        srcSet="/images/homepage/desktop/image-homepage-profile.jpg 540w,
        /images/homepage/tablet/image-homepage-profile.jpg 281w,
        /images/homepage/mobile/image-homepage-profile.jpg 311w"
        sizes="(min-width: 36em) 45vw, 100vw"
        src="/images/homepage/mobile/image-homepage-profile.jpg 311w"
      />
      <article className="about-text">
        <h2>About Me</h2>
        <p>
        I’m a junior front-end developer looking for a new role in an exciting company.
        I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
        When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
        I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. 
        When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s 
        going for a walk, run or cycling. I’d love you to check out my work.
        </p>
        <Button
          classes="button button-secondary"
          hasImage={false}
          setActiveTab={setActiveTab}
          tab={1}
          text="GO TO PORTFOLIO"
          url="/portfolio" />
      </article>
    </div>
  )
}
