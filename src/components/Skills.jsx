import checkmarkIcon from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";
import "./Skills.css";

function Skills(){
    return(
     <section id="skills" className="section skills-section">
  <p className="section__text__p1">Explore My</p>
  <h2 className="section-title">Technical Skills</h2>

  <div className="skills-container">

   
    <div className="skills-box">
      <h3>Frontend Development</h3>

      <div className="skills-grid">

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>HTML5</h4>
            
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>Bootstrap 5</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>CSS3</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>JavaScript (ES6)</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>jQuery</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>React</h4>
          </div>
        </div>

      </div>
    </div>

   
    <div className="skills-box">
      <h3>Tools & Concepts</h3>

      <div className="skills-grid">

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>Node JS</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>React Hooks</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>GitHub</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>Babel</h4>
          </div>
        </div>

        <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>Async Programming</h4>
          </div>
        </div>
         <div className="skills-item">
          <img src={checkmarkIcon} alt="checkmark" className="icon" />
          <div>
            <h4>REST API's</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {
        window.location.href = "#projects";
        }}
        
      />
</section>

   
    )
}

export default Skills;