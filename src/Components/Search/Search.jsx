import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Action } from "../../Settings";
import { useEffect } from "react";
export const Search = () => {
    const {darkMode, region} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (event) => {
      if(event.target.value.length){
        navigate(`/countries/${event.target.value}`)
      }else{
        navigate("/")
      }
    }
    const handleRegionChange = (event) => {
      dispatch(Action.setRegion(event.target.value)) 
    }
    useEffect(() => {
      if(region !== null){
        navigate(`/region/${region}`)
      }
    },[region])
  return (
    <div className="hero-search-box">
      <div className={`hero-search-input-box ${darkMode === "dark" ? "input-dark": "input-light"} `}>
        <AiOutlineSearch style={{color: darkMode === "black" ? "#fff": "#817e7e"}} className="hero-search-icon" />
        <input onChange={handleChange} type="text" className="hero-search-input border-transparent" placeholder="Search for a country…" />
      </div>
      <div className={`hero-search-select-box`}>
        <select onChange={handleRegionChange} className={`hero-search-select border-transparent ${darkMode === "dark" ? "input-dark": "input-light"}`} defaultValue={"Region"}>
            <option value="Region" disabled >Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
