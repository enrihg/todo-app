import iconMoon from "/src/assets/images/icon-moon.svg"
import iconSun from "/src/assets/images/icon-sun.svg"
import { useState } from "react"

function Header() {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            setDarkTheme(true)
        } else {
            setDarkTheme(false)
        }
    }

    return (
        <header className="flex justify-between items-center pt-12 mb-10">
            <span className="font-bold text-[20px] text-white tracking-[10px]">TODO</span>
            <button onClick={toggleTheme}>
                <img id="theme-icon" className="w-5 h-5" src={darkTheme ? iconSun : iconMoon} alt="light/dark theme" />
            </button>
        </header>
    )
}
export default Header