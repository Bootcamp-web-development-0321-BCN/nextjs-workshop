import Project from '../components/Project/Project'
import projects from '../content/projects.json'

export default function Home() {
  const displayProjects = () => {
    return projects.map(project => {
      return <Project key={project.name} {...project}/>
    })
  }
  return (
    <div className="page-container">
      <h1>
        Soy Pepe, Full-Stack developer 💆‍♂️
      </h1>
      <h2>
        600 000 000 o por mail
      </h2>

      <div className="projects-container">
        {
          displayProjects()
        }
      </div>
    </div>
  )
}
