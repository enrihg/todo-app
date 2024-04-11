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
        <header className="flex justify-between items-center pt-12 lg:pt-[70px] mb-10">
            <span className="font-bold text-[20px] lg:text-[40px] text-white tracking-[10px] lg:tracking-[15px]">TODO</span>
            <button onClick={toggleTheme}>
                <img id="theme-icon" className="w-5 lg:w-[25px] h-5 lg:h-[25px]" src={darkTheme ? iconSun : iconMoon} alt="light/dark theme" />
            </button>
        </header>
    )
}
export default Header