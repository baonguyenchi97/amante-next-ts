'use client'

import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button onClick={toggleDarkMode} className='bg-violet-200 fixed top-0 right-0'>
            {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
    )
}

export default DarkModeToggle