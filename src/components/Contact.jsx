import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import "./Contact.css";
function Contact(){
    return(
        <>
        <section id="contact" className="section contact">
      <p className="section__text__p1">Get in Touch</p>
      <h2 className="section-title">Contact Me</h2>
        <div className="contact-intro">
    <p className="connect">Connect with me</p>
    <div className="text-container">
        <p>
        If you want to know more about me or my work, <br />
        or if you would just like to say hello, send me a message.
        I'd love to hear from you.
        </p>
    </div>
    </div>
                <form className="contact-form">
  <div className="input-group">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-input" id="name" placeholder="Enter your name" required />
  </div>

  <div className="input-group">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-input" id="email" placeholder="Enter your email" required />
  </div>

  <div className="input-group">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-input" id="message" placeholder="How can I help you?" rows="5" required></textarea>
  </div>

  <button type="submit" className="btn-submit">
    Send Message
  </button>
</form>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"/>
          <p><a href="mailto:dlimbu.dev@gmail.com">dlimbu.dev@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="linkedin icon"
            className="icon contact-icon"/>
          <p>
            <a href="https://www.linkedin.com/in/deepika-limbu-1599833a6/">Linkedin</a>
          </p>
        </div>
      </div>
      
      
    </section>
    <footer>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p>© 2026 Deepika Limbu | All Rights Reserved</p>
    </footer>
    </>
    )
}

export default Contact;

