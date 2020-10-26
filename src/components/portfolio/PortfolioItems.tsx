import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button } from '../shared/Button'

export const PortfolioItems = () => {

  const isDesktopOrTablet = useMediaQuery({ query: '(min-device-width: 500px)'})

  const portfolio = [
    {
      description: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      imageDesktop: '/images/portfolio/desktop/image-portfolio-manage.jpg',
      imageMobile: '/images/portfolio/mobile/image-portfolio-manage.jpg',
      imageTablet: '/images/portfolio/tablet/image-portfolio-manage.jpg',
      title: 'Manage',
    },
    {
      description: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      imageDesktop: '/images/portfolio/desktop/image-portfolio-bookmark.jpg',
      imageMobile: '/images/portfolio/mobile/image-portfolio-bookmark.jpg',
      imageTablet: '/images/portfolio/tablet/image-portfolio-bookmark.jpg',
      title: 'Bookmark',
    },
    {
      description: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      imageDesktop: '/images/portfolio/desktop/image-portfolio-insure.jpg',
      imageMobile: '/images/portfolio/mobile/image-portfolio-insure.jpg',
      imageTablet: '/images/portfolio/tablet/image-portfolio-insure.jpg',
      title: 'Insure',
    },
    {
      description: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      imageDesktop: '/images/portfolio/desktop/image-portfolio-fylo.jpg',
      imageMobile: '/images/portfolio/mobile/image-portfolio-fylo.jpg',
      imageTablet: '/images/portfolio/tablet/image-portfolio-fylo.jpg',
      title: 'Fylo',
    }
  ]

  const portfolioItems = portfolio.map((item, index) => {
    const srcSet = item.imageDesktop + ' 540w, ' + item.imageTablet + ' 339w, ' + item.imageMobile + ' 311w'
    const url = '/portfolio/' + index
    if (isDesktopOrTablet) {
      if (index % 2 === 0) {
        return <div className="portfolio-item" key={index}>
          <img 
            alt="hero with website on a screen"
            sizes="(min-width: 36em) 50vw, 100vw"
            srcSet={srcSet}
            src={item.imageMobile}
          />
          <div className="portfolio-description">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button classes="button button-secondary" hasImage={false} text="VIEW PROJECT" url="/portfolio/" />
          </div>
        </div>
      } else {
        return <div className="portfolio-item" key={index}>
          <div className="portfolio-description">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button classes="button button-secondary" hasImage={false} text="VIEW PROJECT" url={url} />
          </div>
          <img 
            alt="hero with website on a screen"
            sizes="(min-width: 36em) 50vw, 100vw"
            srcSet={srcSet}
            src={item.imageMobile}
          />
        </div>
      } 
    } else {
      return <div className="portfolio-item" key={index}>
        <img 
          alt="hero with website on a screen"
          sizes="(min-width: 36em) 50vw, 100vw"
          srcSet={srcSet}
          src={item.imageMobile}
        />
        <div className="portfolio-description">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Button classes="button button-secondary" hasImage={false} text="VIEW PROJECT" url="/portfolio/" />
        </div>
      </div>
    }
    
    
  })

  return (
    <article className="portfolio-items container">
      {portfolioItems}
    </article>
  )
}
