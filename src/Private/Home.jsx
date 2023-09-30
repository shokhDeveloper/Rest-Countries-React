import { useDispatch, useSelector } from "react-redux"
import { Action } from "../Settings"
import { removeItem } from "../Settings/Utils"
import { useEffect } from "react"
import { Header } from "../Components"
import { Main } from "./Main"

export const Home = () => {
    const {loader} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
   
    return(
        <>
            <Header/>
            <Main/>
        </> 
    )
}