import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import profilePic from "../assets/profile-pic.png";
import resumeFile from "../assets/Resume.pdf";
import "./Profile.css";

function Profile(){
    return(
    <section className="profile">
        <div className="profile-text">
        <h1>Hi I'm <span>Deepika Limbu</span></h1>
        <h3>Frontend Developer</h3>
        <p>I create modern, responsive and user-friendly web applications.</p>
        <div className="profile-buttons">
            <a href={resumeFile} className="btn btn-primary"
            >Download CV</a>
           <a href="#contact" className="btn secondary">Contact Me</a>

          
        </div>
       
        
         <div className="socials-container">
          <img
            src={linkedinIcon}
            alt="my linkedin profile"
            className="icon"
           onClick={() => {
            window.location.href = "https://www.linkedin.com/in/deepika-limbu-1599833a6/?skipRedirect=true";
            }}
          />
          <img
            src={githubIcon}
            alt="my github profile"
            className="icon"
            onClick={() => {
             window.location.href = "https://github.com/dpkalimbu-dev";
            }}
          />
      </div>
      </div>
      <div className="profile-image">
        <img src={profilePic} alt="Deepika" />
      </div>
    </section>
    );
}

export default Profile;