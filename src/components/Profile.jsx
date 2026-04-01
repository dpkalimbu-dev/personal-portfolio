
import "./Profile.css";

function Profile(){
    return(
    <section className="profile">
        <div className="profile-text">
        <h1>Hi I'm <span>Deepika Limbu</span></h1>
        <h3>Frontend Developer</h3>
        <p>I create modern, responsive and user-friendly web applications.</p>
        <div className="profile-buttons">
            <a href="./src/assets/Resume.pdf" className="btn btn-primary"
            >Download CV</a>
           <a href="#contact" className="btn secondary">Contact Me</a>

          
        </div>
       
        
         <div className="socials-container">
          <img
            src="./src/assets/linkedin.png"
            alt="my linkedin profile"
            className="icon"
           onClick={() => {
            window.location.href = "https://linkedin.com/";
            }}
          />
          <img
            src="./src/assets/github.png"
            alt="my github profile"
            className="icon"
            onClick={() => {
             window.location.href = "https://github.com/";
            }}
          />
      </div>
      </div>
      <div className="profile-image">
        <img src="./src/assets/profile-pic.png" alt="Deepika" />
      </div>
    </section>
    );
}

export default Profile;