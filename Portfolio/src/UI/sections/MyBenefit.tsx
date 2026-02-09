import styles from '../styles/Benefit.module.css'
import benefitsData from '../../DAL/benefit.json'
import type {BenefitsResponse, ServiceItem} from "../../BLL/types/benefit.ts";
import { useTheme } from "../../BLL/context/ThemeContext";

export function MyBenefit() {
  const benefits: ServiceItem[] = (benefitsData as BenefitsResponse).benefits
  const { isDark } = useTheme();

  return (
    <div id='benefits'>
      <h1 className={` ${isDark ? styles.white: null } ${styles.header}  `}>Где я могу быть полезен</h1>

    <div>
      <ul className={styles.listB}>
      {benefits.map((item) => (
        <li key={item.name} className={`${styles.itemB} ${isDark ? styles.white : 'black'}`}>
          <img src={`${import.meta.env.BASE_URL}images/${item.image}`}
               alt={item.name} className={styles.imgB}/>

          <h3 className={styles.headerB}>{item.name}</h3>
        </li>

      ))}
      </ul>
    </div>
    </div>
  )
}



