/* @flow */
'use strict'

var express = require('express')
var app = express()

var port = process.env.PORT || 8080

const styles = require('!css-loader!postcss-loader!sass!../../../sass/main.sass')
import udacityLogo from '!url-loader!../../../img/udacity-logo-transparent.png'
import googleLogo from '!url-loader!../../../img/google-logo-transparent.png'

const response = `
<!doctype html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Richard Ivan | Résumé</title>
  <style>
    ${styles}
  </style>
<head>
<body>
  <div class="page">
    <div class="page-container">
      <section class="header">
        <h1><span class="first-name">Richard</span> Ivan</h1>
        <h4>richardivan.com@gmail.com</h4>
      </section>
      <hr>
      <section class="info-container">
        <aside class="side-info">
          <section class="links-container">
            <h2>Links</h2>
            <ul>
              <li>Github: <a href="https://github.com/RichardIvan" target="_blank">RichardIvan</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/richard-ivan-javascript" target="_blank">richard-ivan-javascript</a></li>
              <li>Udacity: <a href="https://profiles.udacity.com/u/richard16" target="_blank">richard16</a></li>
              <li>Website: <a href="https://www.richardivan.com" target="_blank">www.richardivan.com</a></li>
            </ul>
          </section>
          <section class="skills-container">
            <h2>Skills</h2>
            <ul>
              <li><strong>Javascript</strong></li>
              <li><strong>CSS</strong></li>
              <li><strong>HTML</strong></li>
              <li><strong>Mithril</strong></li>
              <li><strong>Redux</strong> + Redux Saga</li>
              <li>Flux</li>
              <li>Immutable</li>
              <li>Flux</li>
              <li>React</li>
              <li>Docker</li>
              <li>Continuous Integration</li>
              <li><strong>Mocha + Expect</strong> ( Ava )</li>
              <li><strong>Webpack</strong></li>
              <li>Gulp</li>
              <li>Appengine</li>
              <li>Python</li>
              <li>NodeJS</li>
              <li>Github</li>
              <li><strong>Firebase</strong></li>
              <li>Sockes</li>
              <li>Service Worker</li>
              <li>a11y</li>
              <li>Sketch 3</li>
            </ul>
            <p>* <strong>bold</strong> indicates expert level proficiency.</p>
          </section>
          <section class="courses-container">
            <h2>COURSES</h2>
            <ul>
              <li>Javascript Design Patterns (ud989)</li>
              <li>Javascript Testing (ud549)</li>
              <li>Offline Web Applications (ud899)</li>
              <li>Website Performance Optimalization (ud884)</li>
              <li>Responsive Images (ud882)</li>
              <li>Building High Conversion Web Forms (ud890)</li>
              <li>Browser Rendering Optimalizations (ud860)</li>
            </ul>
          </section>
          <section class="languages-container">
            <h2>Languages</h2>
            <ul>
              <li>
                <ul class="language-row">
                  <li>English</li>
                  <li>full-profficiency</li>
                </ul>
              </li>
              <li>
                <ul class="language-row">
                  <li>Czech</li>
                  <li>native</li>
                </ul>
              </li>
              <li>
                <ul class="language-row">
                  <li>Slovakian</li>
                  <li>native</li>
                </ul>
              </li>
            </ul>
          </section>
          <section class="interests-container">
            <h2>Interests</h2>
            <ul>
              <li>Squash</li>
              <li>Computer games (competitive)</li>
              <li>Hiking</li>
              <li>Travel</li>
            </ul>
          </section>
        </aside>
        <section class="main-info">
          <section class="projects-container">
            <h2>Projects</h2>
            <ul>
              <li class=single-project>
                <ul class="project-heading">
                  <li>
                    <h3><a href="http://goo.gl/bo0PKU" target="_blank">Guess What? Memory Game</a></h3>
                  </li>
                  <li>
                    <p>Aug 2016</p>
                  </li>
                </ul>
                <ul class=project-bullet>
                  <li><span class="dash"></span>Authored server-rendered, offline first, accessible, progressive web single page application.</li>
                  <li><span class="dash">Developed within Docker for production environment simulation, testability and CI.</span></li>
                </ul>
              </li>
              <li class=single-project>
                <ul class="project-heading">
                  <li>
                    <h3><a href="http://goo.gl/s9DdSU" target="_blank">Corporate Dashboard</a></h3>
                  </li>
                  <li>
                    <p>June 2016</p>
                  </li>
                </ul>
                <ul class=project-bullet>
                  <li><span class="dash"></span>Fully Responsive Javascript SPA Web Application for Corporate Data visualization.</li>
                  <li><span class="dash">Written in Mithril & Redux for state management and continuous data streaming, display & state integration without full page refresh.</span></li>
                </ul>
              </li>
              <li class=single-project>
                <ul class="project-heading">
                  <li>
                    <h3><a href="http://goo.gl/fYKVpH" target="_blank">Restaurant Reviews</a></h3>
                  </li>
                  <li>
                    <p>April 2016</p>
                  </li>
                </ul>
                <ul class=project-bullet>
                  <li><span class="dash"></span>Customer facing application with the ability to find restaurants, read and submit reviews.</li>
                  <li><span class="dash">Main focus was given to a11y. Management of keyboards controls, colors, ARIA roles and labels according to specification.</span></li>
                </ul>
              </li>
              <li class=single-project>
                <ul class="project-heading">
                  <li>
                    <h3><a href="http://goo.gl/8dq1U1" target="_blank">Public Transport</a></h3>
                  </li>
                  <li>
                    <p>March 2016</p>
                  </li>
                </ul>
                <ul class=project-bullet>
                  <li><span class="dash"></span>San Francisco Transportation application enabling users to find arrival and departure times for their desired transit destinations.</span></li>
                  <li><span class="dash"></span>All data available offline via service worker. Realtime endpoint used whenever possible.</li>
                </ul>
              </li>
              <li class=single-project>
                <ul class="project-heading">
                  <li>
                    <h3><a href="http://goo.gl/ohBLWt" target="_blank">Event Creator</a></h3>
                  </li>
                  <li>
                    <p>Feb 2016</p>
                  </li>
                </ul>
                <ul class="project-bullet">
                  <li><span class="dash"></span>Crafted responsive application which enabled users signup, login, create and see events around the globe.</li>
                  <li><span class="dash">Main focus given to increasing form conversions, input validations and user authentication.</span></li>
                </ul>
              </li>
            </ul>
          </section>
          <section class="education-container">
            <h2>Education</h2>
            <ul>
              <li>
                <h3><img width="12px" height="12px" src="${udacityLogo}" alt="" />Udacity | <span class="second-class">Senior Web Developer Nanodegree by <img width="12px" height="12px" src="${googleLogo}" alt="" />oogle</span></h3>
                <p>Nov 2015 - Sept 2016</p>
              </li>
              <li>
                <h3>High School  <span class="second-class">of Business and communication, Czech Republic</span></h3>
                <p>2005 - 2009</p>
              </li>
            </ul>
          </section>
          <section class="experience-container">
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>Front - End Web Developer | <span class="second-class">Freelance</span></h3>
                <p>2016 - Present</p>
                <ul class="work-attributions">
                  <li><span class="dash"></span>Creating fully responsive javascript applications. From visual design, to writing out specs, code and project deployment.</li>
                  <li><span class="dash"></span>Fixing bugs, enforcing style guide, introducing or employing source control.</li>
                  <li><span class="dash"></span>Improving website rendering performance to buttery 60 frames per second</li>
                  <li><span class="dash"></span>Cutting down webpage loadtime to improve conversions by up to 4%</li>
                  <li><span class="dash"></span>Decreasing the time between development and production cycle</li>
                  <li><span class="dash"></span>Dramatically decreasing server load, saving client and server data consumtion</li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  </div>
</body>

`

// app.use('/', express.static('dist'))

app.get('/', (req, res) => {
  res.writeHead(200, {
      'Content-Type': 'text/html'
  })
  res.write(response)
  res.end()
})

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port)
})


// console.log("About to dispatch a request for " + pathname);
//  var content = "Hey " + pathname;
//  if (typeof handler[pathname] === 'function') {
//      content += handler[pathname](req)
//      res.writeHead(200, {
//          'Content-Type': 'text/html'
//      })
//      res.write(response)
//      res.end()
//  } else {
//      console.log("No request handler found for " + pathname);
//      staticHandler.handleStatic(pathname, res);
//  }
