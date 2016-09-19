require("source-map-support").install(),function(n){function i(l){if(e[l])return e[l].exports;var s=e[l]={i:l,l:!1,exports:{}};return n[l].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var e={};return i.m=n,i.c=e,i.i=function(n){return n},i.d=function(n,i,e){Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:e})},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},i.p="",i(i.s=5)}([function(n,i,e){"use strict";(function(n){function l(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(i,"__esModule",{value:!0}),i.html=void 0;var s=e(3),a=l(s),t=e(4),o=l(t),r=e(2),c=a["default"].renderSync({file:o["default"].join(n,"../../../sass/main.sass")}),p=c.css,u=(0,r.sync)(o["default"].join(n,"../../../img/udacity-logo-transparent.png")),d=(0,r.sync)(o["default"].join(n,"../../../img/google-logo-transparent.png"));i.html='\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n    <title>Richard Ivan | Résumé</title>\n    <style>\n      '+p+'\n    </style>\n  </head>\n  <body>\n    <div class="page">\n      <div class="page-container">\n        <section class="header">\n          <h1><span class="first-name">Richard</span> Ivan</h1>\n          <h4>richardivan.com@gmail.com</h4>\n        </section>\n        <hr>\n        <section class="info-container">\n          <aside class="side-info">\n            <section class="links-container">\n              <h2>Links</h2>\n              <ul>\n                <li>Github: <a href="https://github.com/RichardIvan" target="_blank">RichardIvan</a></li>\n                <li>LinkedIn: <a href="https://www.linkedin.com/in/richard-ivan-javascript" target="_blank">richard-ivan-javascript</a></li>\n                <li>Udacity: <a href="https://profiles.udacity.com/u/richard16" target="_blank">richard16</a></li>\n                <li>Website: <a href="https://www.richardivan.com" target="_blank">www.richardivan.com</a></li>\n              </ul>\n            </section>\n            <section class="skills-container">\n              <h2>Skills</h2>\n              <ul>\n                <li><strong>Javascript</strong></li>\n                <li><strong>CSS</strong></li>\n                <li><strong>HTML</strong></li>\n                <li><strong>Mithril</strong></li>\n                <li><strong>Redux</strong> + Redux Saga</li>\n                <li>Flux</li>\n                <li>Immutable</li>\n                <li>Flux</li>\n                <li>React</li>\n                <li>Docker</li>\n                <li>Continuous Integration</li>\n                <li><strong>Mocha + Expect</strong> ( Ava )</li>\n                <li><strong>Webpack</strong></li>\n                <li>Gulp</li>\n                <li>Appengine</li>\n                <li>Python</li>\n                <li>NodeJS</li>\n                <li>Github</li>\n                <li><strong>Firebase</strong></li>\n                <li>Sockes</li>\n                <li>Service Worker</li>\n                <li>a11y</li>\n                <li>Sketch 3</li>\n              </ul>\n              <p>* <strong>bold</strong> indicates expert level proficiency.</p>\n            </section>\n            <section class="courses-container">\n              <h2>COURSES</h2>\n              <ul>\n                <li>Javascript Design Patterns (ud989)</li>\n                <li>Javascript Testing (ud549)</li>\n                <li>Offline Web Applications (ud899)</li>\n                <li>Website Performance Optimalization (ud884)</li>\n                <li>Responsive Images (ud882)</li>\n                <li>Building High Conversion Web Forms (ud890)</li>\n                <li>Browser Rendering Optimalizations (ud860)</li>\n              </ul>\n            </section>\n            <section class="languages-container">\n              <h2>Languages</h2>\n              <ul>\n                <li>\n                  <ul class="language-row">\n                    <li>English</li>\n                    <li>full-profficiency</li>\n                  </ul>\n                </li>\n                <li>\n                  <ul class="language-row">\n                    <li>Czech</li>\n                    <li>native</li>\n                  </ul>\n                </li>\n                <li>\n                  <ul class="language-row">\n                    <li>Slovakian</li>\n                    <li>native</li>\n                  </ul>\n                </li>\n              </ul>\n            </section>\n            <section class="interests-container">\n              <h2>Interests</h2>\n              <ul>\n                <li>Squash</li>\n                <li>Computer games (competitive)</li>\n                <li>Hiking</li>\n                <li>Travel</li>\n              </ul>\n            </section>\n          </aside>\n          <section class="main-info">\n            <section class="projects-container">\n              <h2>Projects</h2>\n              <ul>\n                <li class=single-project>\n                  <ul class="project-heading">\n                    <li>\n                      <h3><a href="http://goo.gl/bo0PKU" target="_blank">Guess What? Memory Game</a></h3>\n                    </li>\n                    <li>\n                      <p>Aug 2016</p>\n                    </li>\n                  </ul>\n                  <ul class=project-bullet>\n                    <li><span class="dash"></span>Authored server-rendered, offline first, accessible, progressive web single page application.</li>\n                    <li><span class="dash">Developed within Docker for production environment simulation, testability and CI.</span></li>\n                  </ul>\n                </li>\n                <li class=single-project>\n                  <ul class="project-heading">\n                    <li>\n                      <h3><a href="http://goo.gl/s9DdSU" target="_blank">Corporate Dashboard</a></h3>\n                    </li>\n                    <li>\n                      <p>June 2016</p>\n                    </li>\n                  </ul>\n                  <ul class=project-bullet>\n                    <li><span class="dash"></span>Fully Responsive Javascript SPA Web Application for Corporate Data visualization.</li>\n                    <li><span class="dash">Written in Mithril & Redux for state management and continuous data streaming, display & state integration without full page refresh.</span></li>\n                  </ul>\n                </li>\n                <li class=single-project>\n                  <ul class="project-heading">\n                    <li>\n                      <h3><a href="http://goo.gl/fYKVpH" target="_blank">Restaurant Reviews</a></h3>\n                    </li>\n                    <li>\n                      <p>April 2016</p>\n                    </li>\n                  </ul>\n                  <ul class=project-bullet>\n                    <li><span class="dash"></span>Customer facing application with the ability to find restaurants, read and submit reviews.</li>\n                    <li><span class="dash">Main focus was given to a11y. Management of keyboards controls, colors, ARIA roles and labels according to specification.</span></li>\n                  </ul>\n                </li>\n                <li class=single-project>\n                  <ul class="project-heading">\n                    <li>\n                      <h3><a href="http://goo.gl/8dq1U1" target="_blank">Public Transport</a></h3>\n                    </li>\n                    <li>\n                      <p>March 2016</p>\n                    </li>\n                  </ul>\n                  <ul class=project-bullet>\n                    <li><span class="dash"></span>San Francisco Transportation application enabling users to find arrival and departure times for their desired transit destinations.</li>\n                    <li><span class="dash"></span>All data available offline via service worker. Realtime endpoint used whenever possible.</li>\n                  </ul>\n                </li>\n                <li class=single-project>\n                  <ul class="project-heading">\n                    <li>\n                      <h3><a href="http://goo.gl/ohBLWt" target="_blank">Event Creator</a></h3>\n                    </li>\n                    <li>\n                      <p>Feb 2016</p>\n                    </li>\n                  </ul>\n                  <ul class="project-bullet">\n                    <li><span class="dash"></span>Crafted responsive application which enabled users signup, login, create and see events around the globe.</li>\n                    <li><span class="dash">Main focus given to increasing form conversions, input validations and user authentication.</span></li>\n                  </ul>\n                </li>\n              </ul>\n            </section>\n            <section class="education-container">\n              <h2>Education</h2>\n              <ul>\n                <li>\n                  <h3><img width="12" height="12" src="'+u+'" alt="" />Udacity | <span class="second-class">Senior Web Developer Nanodegree by <img width="12" height="12" src="'+d+'" alt="" />oogle</span></h3>\n                  <p>Nov 2015 - Sept 2016</p>\n                </li>\n                <li>\n                  <h3>High School  <span class="second-class">of Business and communication, Czech Republic</span></h3>\n                  <p>2005 - 2009</p>\n                </li>\n              </ul>\n            </section>\n            <section class="experience-container">\n              <h2>Experience</h2>\n              <ul>\n                <li>\n                  <h3>Front - End Web Developer | <span class="second-class">Freelance</span></h3>\n                  <p>2016 - Present</p>\n                  <ul class="work-attributions">\n                    <li><span class="dash"></span>Creating fully responsive javascript applications. From visual design, to writing out specs, code and project deployment.</li>\n                    <li><span class="dash"></span>Fixing bugs, enforcing style guide, introducing or employing source control.</li>\n                    <li><span class="dash"></span>Improving website rendering performance to buttery 60 frames per second</li>\n                    <li><span class="dash"></span>Cutting down webpage loadtime to improve conversions by up to 4%</li>\n                    <li><span class="dash"></span>Decreasing the time between development and production cycle</li>\n                    <li><span class="dash"></span>Dramatically decreasing server load, saving client and server data consumtion</li>\n                  </ul>\n                </li>\n              </ul>\n            </section>\n          </section>\n        </section>\n      </div>\n    </div>\n  </body>\n</html>\n\n'}).call(i,"/")},function(n,i){n.exports=require("express")},function(n,i){n.exports=require("datauri")},function(n,i){n.exports=require("node-sass")},function(n,i){n.exports=require("path")},function(n,i,e){"use strict";var l=e(0),s=e(1),a=s(),t=process.env.PORT||8080;a.get("/",function(n,i){i.writeHead(200,{"Content-Length":l.html.length,"Content-Type":"text/html; charset=utf-8"}),i.end(l.html)}),a.listen(t,function(){console.log("Our app is running on http://localhost:"+t)})}]);