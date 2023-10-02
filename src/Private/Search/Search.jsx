import { useCallback, useEffect } from "react"
import { useParams } from "react-router"
import { Action, ApiSettings } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Countre } from "../../Components"
import { ResponseSettings } from "../../Components/Response"
import { Search as SearchElements } from "../../Components"
export const Search = () => {
    const {searchCountries,region, darkMode} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {countrie} = useParams()
    const {getSearchCountries} = ApiSettings
    const handleGetSearchCounrtries = useCallback(async () => {
        try{
           let request = await getSearchCountries(countrie).catch(error => console.log(error))
            if(request?.status === 200 || request?.status === 304){
                const response = await request.data
                dispatch(Action.setSearchCountries(response))
            }   
        }catch(error){
            return error
        }
    },[countrie])
    useEffect(() => {
        handleGetSearchCounrtries()
    },[handleGetSearchCounrtries])
    useEffect(() => {
        console.log(region)
    }, [region])
    return(
        <>
                {searchCountries?.length ?  (
                    <div className={`hero-inner-box ${darkMode === "dark" ? "hero-inner-dark": "hero-inner-light"}`}>
                        {searchCountries?.map(item => {
                            return(
                                <Countre {...item}/>
                                )
                            })}
                    </div>
                ) : (
                    <ResponseSettings type={"error"} text={"Server da xatolik yuz berdi"}/>
                    )}
                    </>

    )
}