import "./About.css";

function About(){
    return(
        <section id="about" className="section">
      <p className="section__text__p1">Get To Know More</p>
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
       
        <div className="about-details-container">
         <div className="details-container">
              <img
                src="./src/assets/experience.png"
                alt="experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years of<br />Working on Indepent Project like | <strong>Weather app, Dynamic to-do list, Workout tracker app, etc.</strong></p>
            </div>
            <div className="details-container">
              <img
                src="./src/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Certificates</h3>
              <p>Frontend Web Development | <strong>Univetsity of Calgary</strong><br />The Complete JS Course 2025: From Zero to Expert! |<br /> <strong>Udemy</strong> </p>
            </div>
        
          <div className="text-container">
          <p>
            Passionate frontend developer with a strong foundation in building
            interactive and responsive web applications using modern
            technologies. I focus on writing clean code and delivering beautiful
            UI experiences. Ready to bring innovative solutions and a commitment to high quality code to a dynamic team.
          </p>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
        window.location.href = "./#skills";
        }}
        
      />
    </section>
    )
}

export default About;