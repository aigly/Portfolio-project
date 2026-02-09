import { useTheme } from "../../BLL/context/ThemeContext";

export function Footer() {
  const { isDark } = useTheme();

  return (
    <div style={{textAlign: "center", color: isDark ? 'black': 'white'}} >
      <h4>Спасибо за визит моего сайта :)</h4>
      <h5>Навигация: <a href="#hero">Главная</a>/<a href="#skills">Навыки</a>/<a href="#Portfolio">Портфолио</a>/<a
        href="#benefits">Чем я могу быть полезен</a></h5>

      <h5>© 2026 Created by Airat Nizamov with love.All rights reserved.</h5>
      <h5>© 2026 Создано Айратом Низамовым с любовью. Все права защищены.</h5>
    </div>
  )
}