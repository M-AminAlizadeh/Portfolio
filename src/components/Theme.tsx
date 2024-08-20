import { useState } from "react"

const Theme = ({setIsDarkMode}: { setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [theme, setTheme] = useState('light')
  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value)
    if(e.target.value === 'dark') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }
  return (
    <div className="border-2 border-white absolute bottom-12 -left-20 flex flex-row-reverse gap-3  -rotate-90">
      <div className="flex flex-row-reverse gap-1">
        <label htmlFor="dark">Dark</label>
        <input 
          id="dark"
          name="theme"
          type="radio"
          value='dark' 
          checked={theme === 'dark'}
          onChange={handleTheme}
          className="cursor-pointer"
        />
      </div>      
      <div className="flex flex-row-reverse gap-1">
        <label htmlFor="light">Light</label>
        <input
          id="light"
          name="theme"
          type="radio" 
          value="light"
          checked={theme == 'light'}
          onChange={handleTheme}
          className="cursor-pointer"
        />
      </div>      
    </div>
  )
}

export default Theme
