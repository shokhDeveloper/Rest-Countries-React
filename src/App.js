import { RouterProvider } from "react-router";
import { Action, BASE_URL, GlobalStyle, route } from "./Settings";
import { Loader } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const {loader, darkMode} = useSelector(({Reducer}) => Reducer)
  const dispatch = useDispatch()
  const handleLoader = () => {
    dispatch(Action.setLoader(false))
  }
  useEffect(() => {
    if(loader){
      handleLoader()
    }
    console.log(loader)
  },[loader])
  useEffect(() => {
    if(darkMode === "dark"){
      if(document.body?.getAttribute("class")?.includes("body-light")){
        document.body.classList.remove("body-light")
      }
      document.body.classList.add("body-dark")
      
    }else if(darkMode === "light"){
      if(document.body?.getAttribute("class")?.includes("body-dark")){
        document.body.classList.remove("body-dark")
        document.body.style.transition = "0.5s ease all"
      }
      document.body.classList.add("body-light")
    }
  },[darkMode])
  return (
    <div className="restCountries">
    {loader ? (
      <Loader/>
    ): (
     <>
      <RouterProvider router={route} />   
      <GlobalStyle/>
      </>
   )}
    </div>
  );
}

export default App;
