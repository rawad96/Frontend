import './Styles.css'
import * as bootstrap from 'bootstrap'
// import './App.css'
import chat from './assets/img/chat.jpg'
import cinema from './assets/img/cinema.jpg'
import rawad from './assets/rawad.jpeg'
import placement from './assets/img/placement-website.jpg'
import { useState } from 'react'



function App() {

  const [showCinema, setshowCinema] = useState(false)
  const [showChat, setshowChat] = useState(false)
  const [showWeb, setshowWeb] = useState(false)

  window.addEventListener('scroll', e => {
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });

  })

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">RB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {/* <li className="nav-item"><a className="nav-link" href="#services">Services</a></li> */}
              <li className="nav-item"><a style={{ color: "#ffc800" }} className="nav-link" href="#portfolio">Portfolio</a></li>
              {/* <li className="nav-item"><a style={{ color: "#ffc800" }} className="nav-link" href="#about">About</a></li> */}
              <li className="nav-item"><a style={{ color: "#ffc800" }} className="nav-link" href="#team">About</a></li>
              <li className="nav-item"><a style={{ color: "#ffc800" }} className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <img className='masthead-avatar' src={rawad} alt="" />
          <div className="masthead-heading text-uppercase">Rawad Bader</div>
          <div className="masthead-subheading">Full Stack Developer</div>

        </div>
      </header>

      {/* <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div >
            <h2 style={{ textAlign: "center" }} className="section-heading text-uppercase">About Me</h2>
            <h3 className="section-subheading">Greetings,
              <br />
              Welcome to my digital realm, where lines of code converge to craft innovative solutions.
              <br />
              As a Full Stack Developer, I invite you to explore the synthesis of front-end elegance and back-end robustness showcased in my portfolio.
              <br />
              Each project reflects my commitment to excellence in the dynamic landscape of technology.
              <br />
              I hope you find inspiration and insight within these digital corridors.
              <br /> Thank you for visiting,
              and may the code speak volumes about my passion for precision and innovation.</h3>
          </div>
          {/* <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
          </div> */}
        </div>
      </section>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Some of my works</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover" onClick={() => setshowCinema(!showCinema)}>
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={cinema} alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Cinema Management</div>
                  <div className="portfolio-caption-subheading text-muted">Full Stack Development</div>
                  <div className="portfolio-caption-subheading text-muted project-explanation" style={{ visibility: showCinema ? "visible" : "hidden", height: showCinema ? "unset" : "0px" }}><p>A web application that integrates the development of two REST API servers alongside a React.js client.
                    Server: The servers has been developed employing Node.js and Express.js. Communication between these servers is facilitated through the execution of
                    (CRUD) operations. These servers are responsible for the management of databases, which were implemented using MongoDB. To ensure a structured and
                    efficient interaction with the MongoDB database, object modeling was accomplished through the use of Mongoose. Additionally, the security of the
                    application's routers was fortified by the utilization of (JWT).
                    Client side: Developed using React.js and Redux, the design is implemented using CSS and bootstrap.</p></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover" onClick={() => setshowChat(!showChat)}>
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={chat} alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Real-Time Chat</div>
                  <div className="portfolio-caption-subheading text-muted">Full Stack Development</div>
                  <div className="portfolio-caption-subheading text-muted project-explanation" style={{ visibility: showChat ? "visible" : "hidden", height: showChat ? "unset" : "0px" }}>
                    <p>
                      A real-time messaging system, enabling users to exchange messages, create groups, and manage user blocking.
                      Server: The server has been implemented using Node.js and Express.js. The communication between users facilitated seamlessly through WebSocket.
                      This server plays a pivotal role in managing the system's databases, which have been constructed using MongoDB. To ensure a structured and efficient
                      interaction with the MongoDB database, object modeling has been achieved through the utilization of Mongoose.
                      The security of the application's routers was fortified by the utilization of (JWT).
                      Client: The application is developed using React.js. The "UseWebSocket" library is used for connecting, sending and receiving messages. The user interface
                      design and styling was achieved using CSS combined with Bootstrap

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover" onClick={() => setshowWeb(!showWeb)}>
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={placement} alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">High-Tech Placement Website</div>
                  <div className="portfolio-caption-subheading text-muted">Full Stack Development</div>
                  <div className="portfolio-caption-subheading text-muted" style={{ visibility: showWeb ? "visible" : "hidden", height: showWeb ? "unset" : "0px" }}>
                    <p>
                      An advanced placement platform designed to meet the needs of both job seekers and organizations seeking to advertise employment opportunities. This
                      sophisticated system enables smooth job posting and search functionality, efficient resume submission processes and comprehensive access to informative
                      articles and guides on diverse topics. In addition, chat with service representatives. This innovative platform offers a holistic approach to the hiring process,
                      ensuring a sophisticated and efficient experience for all users.
                      Servers: This system has two servers developed using node.js and express, employing CRUD operations for inter-server communication.
                      The servers effectively manage a MongoDB database executed using Mongoose. On one of the servers a WebSocket is used for the purpose of
                      implementing a chat.
                      The security of the application's routers was fortified by the utilization of (JWT).
                      Client: The application is developed using React.js. The "UseWebSocket" library is used for connecting, sending and receiving messages. The user interface
                      design and styling was achieved using CSS combined with Bootstrap
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div  className="col-lg-4 col-sm-6 mb-4 mb-lg-0">

              <div  className="portfolio-item">
                <a  className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                  <div  className="portfolio-hover">
                    <div  className="portfolio-hover-content"><i  className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img  className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                </a>
                <div  className="portfolio-caption">
                  <div  className="portfolio-caption-heading">Lines</div>
                  <div  className="portfolio-caption-subheading text-muted">Branding</div>
                </div>
              </div>
            </div> */}
            {/* <div  className="col-lg-4 col-sm-6 mb-4 mb-sm-0">

              <div  className="portfolio-item">
                <a  className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                  <div  className="portfolio-hover">
                    <div  className="portfolio-hover-content"><i  className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img  className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                </a>
                <div  className="portfolio-caption">
                  <div  className="portfolio-caption-heading">Southwest</div>
                  <div  className="portfolio-caption-subheading text-muted">Website Design</div>
                </div>
              </div>
            </div> */}
            {/* <div  className="col-lg-4 col-sm-6">

              <div  className="portfolio-item">
                <a  className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                  <div  className="portfolio-hover">
                    <div  className="portfolio-hover-content"><i  className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img  className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                </a>
                <div  className="portfolio-caption">
                  <div  className="portfolio-caption-heading">Window</div>
                  <div  className="portfolio-caption-subheading text-muted">Photography</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section >
      {/* <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
            </div>
          </div>
        </div>
      </div> */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <h3 className="section-subheading text-muted">Contact Any Time</h3>
          </div>
          <p className='contact'>Rawad Bader, Israel</p>
          <br />
          <p className='contact'><a href="mailto:rawad3001@gmail.com">Rawad3001@gmail.com</a></p>
          <br />
          <p className='contact'><a href='tel:0509971022'>0509971022</a></p>

          {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
              </div>
            </div>

            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>

            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
          </form> */}
        </div>
      </section>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start"></div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="https://wa.me/0509971022" aria-label="whatsapp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg></a>
              <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/rawad-bader-545a26230" aria-label="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg></a>
              <a className="btn btn-dark btn-social mx-2" href="mailto:rawad3001@gmail.com" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg></a>
            </div>
            {/* <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div> */}
          </div>
        </div>
      </footer >
      {/* <Cinema /> */}

      {/* <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default App
