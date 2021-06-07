import projects from '../../content/projects.json'

export default function ProjectPage({ project }) {
  return (
    <div className="page-container">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}


export async function getStaticPaths(){
  const paths = projects.map((project) => {
    return ({ params: { name: project.name }})
  })

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const project = projects.find(project => project.name === context.params.name);

  return {
    props: {
      project,
    },
    // revalidate: 1
  }
}