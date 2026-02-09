import styles from '../styles/Hero.module.css'
import { useTheme } from "../../BLL/context/ThemeContext";

export function Hero() {
  const { isDark } = useTheme();

  return (
    <div className={styles.container} id="hero">
      <div className={` ${styles.TextContainer} ${isDark && styles.white}`}>
        <div>
          <h1 className={styles.nameText}>Airat Nizamov</h1>
          <h4 className={styles.descriptionText}>Frontend‑разработчик и создатель веб‑интерфейсов</h4>
        </div>
        <div>
          <h2 className={styles.description}>
            Помогаю превращать идеи в удобные и живые веб‑продукты: аккуратный код,
            понятный интерфейс и внимание к деталям. Сейчас развиваюсь как
            фронтенд‑разработчик, собираю портфолио и открыт к первым коммерческим задачам.
          </h2>
        </div>
        <div className={styles.buttons}>
          <a href='#Portfolio'>Смотреть проекты</a>
          <a href='#skills'>Мои навыки</a>
        </div>
      </div>
    </div>
  )
}