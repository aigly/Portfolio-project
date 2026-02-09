import {Hero} from "./UI/sections/Hero.tsx";
import Skills from "./UI/sections/Skills.tsx";
import {Portfolio} from "./UI/sections/Portfolio.tsx";
import {MyBenefit} from "./UI/sections/MyBenefit.tsx";
import {Footer} from "./UI/layout/Footer.tsx";
import {Navbar} from "./UI/layout/NavBar.tsx";
import {useEffect, useState} from "react";
import './App.css'
import { useTheme } from "./BLL/context/ThemeContext";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Подписываемся на событие при монтировании
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Удаляем обработчик, чтобы не текла память
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? 'App' : 'none'}>

      {scrollY > 100 ?(      <Navbar />): null}
      <img
        src={isDark     ? `${import.meta.env.BASE_URL}images/moon.svg`
          : `${import.meta.env.BASE_URL}images/sun.svg`}
        alt={isDark ? "moon" : "sun"}
        onClick={toggleTheme}
        className="themeToggle"
      />

      <Hero />
      <Skills />
      <Portfolio />
      <MyBenefit />
      <br/>
      <hr/>

      <Footer />
    </div>
  )
}

export default App
