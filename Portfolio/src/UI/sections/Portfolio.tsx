import styles from '../styles/Portfolio.module.css'
import projects from '../../DAL/projectd.json'
import type {Projects, SiteInfo} from "../../BLL/types/project.tsx";
import { useTheme } from "../../BLL/context/ThemeContext";

export function Portfolio(){
  const project: SiteInfo[] = (projects as Projects).projects
  const { isDark } = useTheme();

  return (
    <div id='Portfolio'>
      <h1 className={` ${styles.header} ${isDark && styles.white}`}>Портфолио</h1>
      <ul>
        {project.length > 0 ? project.map((p) => {

          return (
            <li key={p.siteName} className={styles.projectCard}>
              <img src={p.imagePath} alt={p.siteName} className={styles.img}/>
              <div className={styles.cardBody}>
                <div className={styles.textContainer}>
                  <h3>{p.siteName}</h3>
                  <h5>{p.siteDescription}</h5>
                </div>

                <a href={p.siteUrl} target="_blank" rel="noopener noreferrer">Смотреть работу</a>
              </div>
            </li>
          )
        }): <li><h2 style={{textAlign: 'center', fontSize: '30px'}} className={` ${isDark && styles.white}`}>Здесь еще нет работ</h2></li>}
      </ul>

    </div>
  )
}