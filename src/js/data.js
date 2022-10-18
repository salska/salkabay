import React, { Fragment } from "react";

export const data = [
  {
    id: "photo",
    title: (
      <Fragment>
          <img src={ require('./salkabay.jpeg')} width={173} height={173}/>
      </Fragment>
    ),
      content: (
          <Fragment>
              <p>
                 07871 6331198
              </p>
              <a href="mailto:sal@emetrix.biz?subject=An email from salkabay.com">
                  sal@emetrix.biz
              </a>
          </Fragment>
      )
  },
    {
        id: "person",
        title: (
            <Fragment>
                Personal <span>details</span>
            </Fragment>
        ),
        content: (
            <Fragment>
                <h3>About me</h3>
                <p>
                    I am an engineer and technologist with over 20 years of experience. My expertise is focused on digital enablement using BPMN driven business process automation.
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
          I focus on the intersection of user need, client demand, and technical limitation. I prioritise user experience, high performance and domain centric design. My skills are in strategy, architecture, development and systems integration.
        </p>
        <h3>Technologies and approaches</h3>
        <p>
          I work with my teams on modern architectures to deliver beautiful and efficient business process automation solutions using Camunda, Java, React and Microservices. I implement component-driven solutions that are integrated and devops enabled - ensuring quality code, modularity, and maintainability.
        </p>
      </Fragment>
    )
  },
  {
    id: "leadership",
    title: (
      <Fragment>
        <span>People</span> Leadership
      </Fragment>
    ),
    content: (
      <Fragment>
        <h3>Collaborative</h3>
        <p>
          I am a reliable and trusted member of any team. I earn the respect of my coworkers through leadership and enabling and empowering others to do their best. I am collaborative and results driven.
        </p>
        <h3>Results driven</h3>
        <p>
          I thrive to unlock paralysis, provide clarity by simplifying complexity and enthuse others to overcome conflict. Every client is unique and every
            assignment has a set of challenges that requires fresh, agile and informed thinking.
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
            (2021&nbsp;&#8209;&nbsp;present)
          </li>
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
              Technical Programme Manager – Digital Availability & Content Management System Migration
              (2016&nbsp;&#8209;&nbsp;2017)
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
          <table border="0" cellPadding={5}>
          <tr>
          <td>
              <a href="https://twitter.com/emetrix">
              <img src={ require('./twitter.png')} width={32} height={32}/>
              </a>
          </td>
          <td>
              <a rel="me" href="https://www.youtube.com/channel/UCN1jxDRBU9tz1H3HyoARoaQ">
                  <img src={ require('./youtube.png')} width={32} height={32}/>
              </a>
          </td>
          <td>
              <a href="https://github.com/salska">
                  <img src={ require('./github.png')} width={32} height={32}/>
              </a>
          </td>
          <td>
              <a href="https://www.linkedin.com/in/salkabay/">
                  <img src={ require('./linkedin.png')} width={32} height={32}/>
              </a>
          </td>
          <td>
              <a href="mailto:sal@emetrix.biz?subject=An email from salkabay.com">
                  <img src={ require('./email.png')} width={32} height={32}/>
              </a>
          </td>
          </tr>
          </table>
      </Fragment>
    )
  }
];

export default data;
