import React from 'react';
import './about.css';
import ME from '../../assets/my_pic.png';
import {FaAward} from 'react-icons/fa';
// import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__card_icon'/>
              <h5>IT Experience</h5>
              <small>3+ years</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className='about__card_icon'/>
              <h5>Clients</h5>
              <small>20+ clients worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className='about__card_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          I have completed a Master's Degree in Computer Science. I have been in the IT industry for quite a long time and my previous experience is very versatile. I started my professional journey as a network and system administrator and worked in both Linux and Windows environments. After that, I started building a website that pushes me to learn coding and development. I am also learning DevOps which helps me to deploy web applications. I am seeing my next role as a Web Developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
};

export default About;
