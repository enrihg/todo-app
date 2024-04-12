import iconMoon from "/src/assets/images/icon-moon.svg"
import iconSun from "/src/assets/images/icon-sun.svg"
import { useState } from "react"

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("theme")!);
    if (!data) return false;
    return data;
}

function Header() {
    const [darkTheme, setDarkTheme] = useState(getInitialData)
    if (darkTheme) {
        document.documentElement.classList.add('dark');
    }

    const toggleTheme = () => {
        localStorage.setItem("theme", JSON.stringify(!darkTheme))
        document.documentElement.classList.toggle('dark');
        setDarkTheme(!darkTheme);
    }

    return (
        <header className="flex justify-between items-center pt-12 lg:pt-[70px] mb-10">
            <span className="font-bold text-[20px] lg:text-[40px] text-white tracking-[10px] lg:tracking-[15px]">TODO</span>
            <button onClick={toggleTheme}>
                <img id="theme-icon" className="w-5 lg:w-[25px] h-5 lg:h-[25px]" src={darkTheme ? iconSun : iconMoon} alt="light/dark theme" />
            </button>
        </header>
    )
}
export default Header