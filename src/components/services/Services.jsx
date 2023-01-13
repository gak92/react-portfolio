import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  const service1 = [
    "Implementation using HTML, CSS, and JavaScript",
    "Creating and implementing responsive designs",
    "Development of user interface components",
    "Creating and implementing interactive elements",
    "Optimizing the website for speed and performance",
    "Cross-browser and cross-platform compatibility",
    "Integration with analytics tools",
    "Creating documentation for the website or application"
  ];

  const service2 = [
    "Server-side scripting and programming",
    "Database design and management",
    "Creating and implementing APIs for web and mobile applications",
    "Server and hosting management, including deployment",
    "Security and user authentication implementation",
    "Performance optimization and troubleshooting",
    "Integration with third-party services and APIs"
  ];

  const service3 = [
    "Writing and editing articles, blog posts",
    "Creating visual content such as images, videos, and infographics",
    "Researching and identifying trending topics and keywords",
    "Optimizing content for search engines (SEO)",
    "Content marketing strategy development and execution",
    "Social media management and community engagement",
    "Measuring and analyzing the performance of content"
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            {
              service1.map((service, index) => {
                return (
                  <li key={index}>
                    <BiCheck className="service__list-icon"/>
                    <p>{service}</p>
                  </li>
                )
              })            
            }
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            {
              service2.map((service, index) => {
                return (
                  <li key={index}>
                    <BiCheck className="service__list-icon"/>
                    <p>{service}</p>
                  </li>
                )
              })            
            }
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>SEO & Content</h3>
          </div>

          <ul className="service__list">
            {
              service3.map((service, index) => {
                return (
                  <li key={index}>
                    <BiCheck className="service__list-icon"/>
                    <p>{service}</p>
                  </li>
                )
              })            
            }
          </ul>
        </article>

      </div>
    </section>
  )
};

export default Services;
