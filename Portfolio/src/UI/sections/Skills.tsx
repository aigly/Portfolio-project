import styles from '../styles/Skills.module.css'
import type { Skill, SkillsResponse } from "../../BLL/types/skills";
import skillsData from '../../DAL/skills.json'
import { useTheme } from "../../BLL/context/ThemeContext";

export default function Skills() {
  const skills: Skill[] = (skillsData as SkillsResponse).skills;
  const { isDark } = useTheme();

  return (
    <div id='skills'>
      <h1 className={` ${styles.header} ${isDark && styles.white}`}>Мои навыки</h1>
      <div className={styles.skills}>

        {skills.map(skill => (
          <div className={` ${styles.skillCard} ${isDark && styles.white}`} key={skill.name}>
            <img src={skill.icon} alt={skill.name}  />
            <p className={` ${styles.headerS} ${isDark && styles.white}`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

  );
}
