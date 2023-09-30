import { useDispatch, useSelector } from "react-redux"
import "./header.scss"
import { useEffect } from "react"
import { Action } from "../../Settings"
import MoonLight from "../../Settings/assets/images/Path.svg"
import DarkMoonLight from "../../Settings/assets/images/Path-Light.svg"
export const Header = () => {
    const {darkMode} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const handleDarkMode = () => {
        if(darkMode === "light"){
            dispatch(Action.setDarkMode("dark"))
        }else{
            dispatch(Action.setDarkMode("light"))
        }
    }
    useEffect(() => {
        console.log(darkMode)
    },[darkMode])
    return(
        <header className={`site-header ${darkMode === "light" ? "siteheader-light" : "siteheader-dark"}`}>
            <div className="container">
                <div className="siteheader-inner-box">
                    <h1 className="site-header-title">Where in the world?</h1> 
                    <button onClick={handleDarkMode} className="header-change-color-btn border-transparent" style={{backgroundImage: darkMode === "light" ?  `url(${DarkMoonLight})`: `url(${MoonLight})` }}>
                        Dark Mode
                    </button>               
                </div>
            </div>
        </header>
    )
}