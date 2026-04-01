import "./Projects.css";

function Projects(){
    return(
        <section id="projects" className="section">
      <p className="section__text__p1">Browse My Recent</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="./src/assets/project-1.png" alt="Project 1" />
          <div className="project-content">
            <h3>React Weather App</h3>
            <div className="project-buttons">
              <a
                href="https://github.com/dpkalimbu-dev/Weather-Dashboard/tree/main/src/components"
                target="_blank"
                >Github</a>
              <a href="https://dpkalimbu-dev.github.io/Weather-Dashboard/"
                >Live Demo</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="./src/assets/project-2.png" alt="Project 2" />
          <div className="project-content">
            <h3>Dynamic-To-Do List</h3>
            <div className="project-buttons">
              <a href="https://github.com/dpkalimbu-dev/Dynamic-To-Do-List" target="_blank">Github</a>
              <a href="https://dpkalimbu-dev.github.io/Dynamic-To-Do-List/">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="./src/assets/project-3.png" alt="Project 3" />
          <div className="project-content">
            <h3>Workout Tracker Map</h3>
            <div className="project-buttons">
              <a href="https://github.com/dpkalimbu-dev/workout-tracker-map?tab=readme-ov-file" target="_blank">Github</a>
              <a href="https://dpkalimbu-dev.github.io/workout-tracker-map/">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
         onClick={() => {
             window.location.href = "./#contact";
            }}
        
      />
    </section>
    )
}

export default Projects;