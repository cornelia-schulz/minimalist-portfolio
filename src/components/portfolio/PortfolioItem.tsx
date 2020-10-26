import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IProject } from '../../models/project'
import { Button } from '../shared/Button'

export const PortfolioItem = () => {

  let { slug } = useParams<{slug: string}>()
  const initialiseProject = () => {
    return {
      backgroundDescription: '',
      description: '',
      heroImageDesktop: '',
      heroImageMobile: '',
      heroImageTablet: '',
      images: [],
      title: ''
    }
  }
  const [ nextItem , setNextItem ] = useState<IProject>(initialiseProject)
  const [ portfolioItem, setPortfolioItem ] = useState<IProject>(initialiseProject)
  const [ previousItem, setPreviousItem ] = useState<IProject>(initialiseProject)

  useEffect(() => {
    const projects = [
      {
        backgroundDescription: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        description: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        heroImageDesktop: '/images/detail/desktop/image-manage-hero.jpg',
        heroImageMobile: '/images/detail/mobile/image-manage-hero.jpg',
        heroImageTablet: '/images/detail/tablet/image-manage-hero.jpg',
        images: [
          {
            desktop: '/images/detail/desktop/image-manage-preview-1.jpg',
            mobile: '/images/detail/mobile/image-manage-preview-1.jpg',
            tablet: '/images/detail/tablet/image-manage-preview-1.jpg'
          },
          {
            desktop: '/images/detail/desktop/image-manage-preview-2.jpg',
            mobile: '/images/detail/mobile/image-manage-preview-2.jpg',
            tablet: '/images/detail/tablet/image-manage-preview-2.jpg'
          }
        ],
        title: 'Manage'
      },
      {
        backgroundDescription: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        description: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
        heroImageDesktop: '/images/detail/desktop/image-bookmark-hero.jpg',
        heroImageMobile: '/images/detail/mobile/image-bookmark-hero.jpg',
        heroImageTablet: '/images/detail/tablet/image-bookmark-hero.jpg',
        images: [
          {
            desktop: '/images/detail/desktop/image-bookmark-preview-1.jpg',
            mobile: '/images/detail/mobile/image-bookmark-preview-1.jpg',
            tablet: '/images/detail/tablet/image-bookmark-preview-1.jpg'
          },
          {
            desktop: '/images/detail/desktop/image-bookmark-preview-2.jpg',
            mobile: '/images/detail/mobile/image-bookmark-preview-2.jpg',
            tablet: '/images/detail/tablet/image-bookmark-preview-2.jpg'
          }
        ],
        title: 'Bookmark'
      },
      {
        backgroundDescription: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        description: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
        heroImageDesktop: '/images/detail/desktop/image-insure-hero.jpg',
        heroImageMobile: '/images/detail/mobile/image-insure-hero.jpg',
        heroImageTablet: '/images/detail/tablet/image-insure-hero.jpg',
        images: [
          {
            desktop: '/images/detail/desktop/image-insure-preview-1.jpg',
            mobile: '/images/detail/mobile/image-insure-preview-1.jpg',
            tablet: '/images/detail/tablet/image-insure-preview-1.jpg'
          },
          {
            desktop: '/images/detail/desktop/image-insure-preview-2.jpg',
            mobile: '/images/detail/mobile/image-insure-preview-2.jpg',
            tablet: '/images/detail/tablet/image-insure-preview-2.jpg'
          }
        ],
        title: 'Insure'
      },
      {
        backgroundDescription: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        description: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
        heroImageDesktop: '/images/detail/desktop/image-fylo-hero.jpg',
        heroImageMobile: '/images/detail/mobile/image-fylo-hero.jpg',
        heroImageTablet: '/images/detail/tablet/image-fylo-hero.jpg',
        images: [
          {
            desktop: '/images/detail/desktop/image-fylo-preview-1.jpg',
            mobile: '/images/detail/mobile/image-fylo-preview-1.jpg',
            tablet: '/images/detail/tablet/image-fylo-preview-1.jpg'
          },
          {
            desktop: '/images/detail/desktop/image-fylo-preview-2.jpg',
            mobile: '/images/detail/mobile/image-fylo-preview-2.jpg',
            tablet: '/images/detail/tablet/image-fylo-preview-2.jpg'
          }
        ],
        title: 'Fylo'
      }
    ]
    const currentProject = projects.filter(i => i.title.toLocaleLowerCase() === slug)
    setPortfolioItem(currentProject[0])

    const project = (p: IProject) => p.title.toLowerCase() === slug
    const current = projects.findIndex(project)

    if (current < projects.length - 1) setNextItem(projects[current + 1])
    else setNextItem(projects[0])

    if (current > 0) setPreviousItem(projects[current - 1])
    else setPreviousItem(projects[projects.length - 1])

  }, [slug])

  const srcSet = portfolioItem.heroImageDesktop + ' 1110w, ' + portfolioItem.heroImageTablet + ' 689w, ' + portfolioItem.heroImageMobile + ' 311w'
  const projectImages = portfolioItem.images.map((image, index) => {
    const imgSrcSet = image.desktop + ' 1110w, ' + image.tablet + ' 689w, ' + image.mobile + ' 311w'
    return <img
            alt="Project Preview"
            key={index}
            srcSet={imgSrcSet}
            sizes="(min-width: 36em) 100vw"
            src={image.mobile}
          />
  })

  return (
    <article className="project-item container">
      <img 
        alt="hero with website"
        className="project-hero-image"
        srcSet={srcSet}
        sizes="(min-width: 36em) 100vw"
        src={portfolioItem.heroImageMobile}
      />
      <div className="project-item-content">
        <aside>
          <h2>{portfolioItem.title}</h2>
          <p>{portfolioItem.description}</p>
          <p className="tags">Interaction Design / Front End Development</p>
          <p className="tags">HTML / CSS</p>
          <Button classes="button button-secondary" hasImage={false} text="VISIT WEBSITE" url="#" />
        </aside>
        <section className="project-item-background">
          <h3>Project Background</h3>
          <p>{portfolioItem.backgroundDescription}</p>
          <h3>Static Previews</h3>
          {projectImages}
        </section>
      </div>
      <section className="previous-next">
        <div className="previous-project">
          <Link to={"/portfolio/" + previousItem.title.toLocaleLowerCase()}>
            <img alt="previous project" src="/images/icons/arrow-left.svg" />
          </Link>
          <div>
            <h3>{previousItem.title}</h3>
            <p>Previous Project</p>
          </div>
        </div>
        <div className="next-project">
          <div>
            <h3>{nextItem.title}</h3>
            <p>Next Project</p>
          </div>
          <Link to={"/portfolio/" + nextItem.title.toLocaleLowerCase()}>
            <img alt="previous project" src="/images/icons/arrow-right.svg" />
          </Link>
        </div>
      </section>
    </article>
  )
}
