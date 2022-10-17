import React, { Fragment } from "react";

export const data = [
  {
    id: "person",
    title: (
      <Fragment>
        Personal <span>details</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <img src={ require('./salkabay.jpeg')} width={133} height={133}/>
        <h3>About me</h3>
        <p>
          I am an engineer and technologist with over 20 years of experience. In addition to being a technical authority. My skills are in strategy, architecture, development, systems integration and technical delivery.
        </p>
        <p>
          I live in Edinburgh&nbsp;UK. I have a PhD in Engineering and enjoy software engineering and clean design, running, cycling and gym work.
        </p>
      </Fragment>
    )
  },
  {
    id: "skills",
    title: (
      <Fragment>
        Developer <span>skills</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>User-centric approach</h3>
        <p>
          I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, accessibility, and maintainability in my work.
        </p>
        <h3>Technologies and approaches</h3>
        <p>
          I work with my teams on modern architectures to deliver beautiful and efficient websites using HTML, CSS, JavaScript. I guide our component-driven approaches, ensuring quality code, modularity, and maintainability.
        </p>
      </Fragment>
    )
  },
  {
    id: "leadership",
    title: (
      <Fragment>
        <span>People</span> leadership
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>Leader and mentor</h3>
        <p>
          I am a reliable and trusted member of any team. I earn the respect of my coworkers through leadership and enabling and empowering others to do their best. I am an empathetic and supportive manager, guiding individuals and entire teams to learn, share, and become more efficient.
        </p>
        <h3>Culture and community</h3>
        <p>
          I strive to create and encourage a safe and inclusive work environment for everyone. Outside of work, I organise{" "}
          <a href="https://twitter.com/frontendsheff">
            Front&nbsp;End Sheffield
          </a>
          , <a href="https://twitter.com/frontendnorth">Front&nbsp;End North</a>
          , and have previously organised Sheffield&nbsp;JS.
        </p>
      </Fragment>
    )
  },
  {
    id: "jobs",
    title: (
      <Fragment>
        Employment <span>history</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <ul>
          <li>
            <h3>
              <a href="https://www.morrisons-corporate.com/">Morrisons PLC</a>
            </h3>
            Camunda Architect & Lead Developer - Confidential Strategic Projects
            (2021&bsp;&#8209;&nbsp;present)
          </li>n
          <li>
            <h3>
              <a href="https://www.natwest.com//">Natwest</a>
            </h3>
              Technical Architect & Implementation Manager - Operational Tax KCRC Camunda Migration
            (2018&nbsp;&#8209;&nbsp;2019)
          </li>
          <li>
            <h3>
              <a href="https://www.prudentialplc.com/">Prudential</a>
            </h3>
              Technical Programme Manager – Digital Availability & Content Management System Migration (2016&nbsp;&#8209;&nbsp;2017)
          </li>
          <li>
            <h3>My CV</h3>
            <a href="https://tinyurl.com/sal-kabay-cv">Sal Kabay</a>
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    id: "contact",
    title: (
      <Fragment>
        Contact me <span>online</span>
      </Fragment>
    ),
    content: (
      <Fragment>
        <ul>
          <li>
            <a href="https://twitter.com/emetrix">Twitter</a>
          </li>
          <li>
            <a rel="me" href="https://www.youtube.com/channel/UCN1jxDRBU9tz1H3HyoARoaQ">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://github.com/salska">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/salkabay/">
                <img src={ require('./li.jpeg')} width={33} height={40}/>
            </a>
          </li>
          <li>
            <a href="mailto:sal@emetrix.biz?subject=An email from salkabay.com">
              Email me at sal@emetrix.biz
            </a>
          </li>
        </ul>
      </Fragment>
    )
  }
];

export default data;
