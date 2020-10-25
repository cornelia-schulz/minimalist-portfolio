import React from 'react'
import { Link } from 'react-router-dom'

export const ContactMe = () => {
  return (
    <article className="contact-me container">
      <h2>Get in Touch</h2>
      <section className="contact-me-content">
        <p>
        I’d love to hear about what you’re working on and how I could help. 
        I’m currently looking for a new role and am open to a wide range of 
        opportunities. My preference would be to find a position in a company 
        in London. But I’m also happy to hear about opportunites that don’t fit 
        that description. I’m a hard-working and positive person who will always 
        approach each task with a sense of purpose and attention to detail. 
        Please do feel free to check out my online profiles below and get in touch 
        using the form.
        </p>
        <div className="social-icons">
          <Link to="#">
            <img alt="link to github" src="/images/icons/github.svg" />
          </Link>
          <Link to="#">
            <img alt="link to twitter" src="/images/icons/twitter.svg" />
          </Link>
          <Link to="#">
            <img alt="link to LinkedIn" src="/images/icons/linkedin.svg" />
          </Link>
        </div>
      </section>
    </article>
  )
}
