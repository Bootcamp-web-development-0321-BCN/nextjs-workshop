import Link from "next/link";
import styles from './Project.module.css'

export default function Project({ image, name, description }) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectImage}>
        <img src={image} alt="project-img" />
      </div>

      <div className={styles.projectDescription}>
        <h3 className={styles.projectTitle}>{name}</h3>
        <p className={styles.projectInfo}>{description}</p>
        <Link href={`/projects/${name}`}>
          <a>
            Ver proyecto
          </a>
        </Link>
      </div>
    </div>
  )
}