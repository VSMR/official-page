// components/ToggleDarkMode.tsx
import React, { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from 'react-icons/fa';

export const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true)
            document.querySelector('html')?.classList.add('dark')
        } else {
            setDarkMode(false)
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [darkMode])

    const handleChangeDarkMode = () => {
        if (darkMode) {
            localStorage.theme = 'light'
            setDarkMode(false)
        } else {
            localStorage.theme = 'dark'
            setDarkMode(true)
        }
    }

    return (
        <div className="flex">
            <div className="mr-2 text-xs">
                <MdOutlineWbSunny className="w-6 h-6" width={24} height={24} />
            </div>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    checked={darkMode}
                    className="toggle-checkbox"
                    onChange={handleChangeDarkMode}
                />
                <label htmlFor="toggle" className="toggle-label">
                    toggle
                </label>
            </div>
            <div className="text-xs">
                <FaRegMoon className="w-6 h-6" width={24} height={24} />
            </div>
        </div>
    )
}