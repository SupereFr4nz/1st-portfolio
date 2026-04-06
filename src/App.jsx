import "./App.css";

function App() {
  return (
   <>
      <header className="navbar">
      <h2 className="logo">FB</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </header>

      <section id="home" className="hero-profile">
  <div className="hero-text">
    <p>Hello, I am</p>
    <h1>Franz Nich Vincent Barrido</h1>
    <h3>BSIT Student | Backend Learner</h3>

    <p>
      I design websites that are simple and purposeful.
      I enjoy crafting clean, straightforward interfaces and developing projects that are intuitive and user-friendly.
    </p>

    <div className="buttons">
      <a href="#contact" className="btn outline">Learn more</a>
    </div>
  </div>

  <div className="profile-image">
    <img src="public/profile1.png" alt="profile" />
  </div>
</section>



      <section id="about" className="about">
      <div className="about-box">
      <h2>About Me</h2>

        <p>

          I'm Franz Nich Vincent , 19 years old, an aspiring back-end
          developer passionate about creating efficient and scalable
          systems. I enjoy learning programming languages and
          exploring frameworks that enhance my coding skills. I'm
          currently studying at Western Institute of Technology and
          working towards building a strong foundation in software
          development. I became interested in back-end development 
          because I love understanding how systems work behind the
          scenes, ensuring that every function runs smoothly and
          securely. In my free time, I love playing online games, which
          help me relax and improve my problem-solving and teamwork skill.
        </p>

      </div>
      </section>



     <section id="skills" className="skills-section">
  <h2>Tech Stack</h2>

  <div className="skills-container">
    <div className="skill-card">
      <img src="public/mongodb11.png" alt="MongoDB" className="skill-img" />
      <p>MongoDB</p>
    </div>

    <div className="skill-card">
      <img src="public/express21.jpg" alt="Express.js" className="skill-img" />
      <p>Express.js</p>
    </div>

    <div className="skill-card">
      <img src="public/react1.png" alt="React" className="skill-img" />
      <p>React</p>
    </div>

    <div className="skill-card">
      <img src="public/node1.png" alt="Node.js" className="skill-img" />
      <p>Node.js</p>
    </div>
  </div>
</section>



      <section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="project-list">
    <div className="card">
      <img src="public/awesometodos1.png" alt="Awesometodos" className="project-img" />
      <h3>Awesometodos</h3>
    </div>

    <div className="card">
      <img src="public/classe1.jpg" alt="Classe" className="project-img" />
      <h3>Classee</h3>
    </div>

    <div className="card">
      <img src="public/webprofile1.png" alt="Web Portfolio" className="project-img" />
      <h3>Web Portfolio</h3>
    </div>
  </div>
</section>



  <section id="contact" className="contact">
  <div className="contact-container">
    <div className="contact-left">
      <h2>Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out if you have questions, project ideas, or just want to connect.
      </p>

      <div className="contact-info">
        <div className="info-box">
          <h4>Email</h4>
          <p>Barridofranz6@gmail.com</p>
        </div>

        <div className="info-box">
          <h4>Phone</h4>
          <p>+63 965 499 7792</p>
        </div>

        <div className="info-box">
          <h4>Location</h4>
          <p>Takas,Valderrama,Antique,Philippines</p>
        </div>
      </div>
    </div>

    <div className="contact-right">
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message" rows="6"></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

    <footer className="footer">
    <p>© 2026 Franz Nich Vincent Barrido</p>
    </footer>
    </>
  );
}

export default App;