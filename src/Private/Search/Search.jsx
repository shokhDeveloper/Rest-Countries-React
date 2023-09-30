import { useCallback, useEffect } from "react"
import { useParams } from "react-router"
import { Action, ApiSettings } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Countre } from "../../Components"
import { ResponseSettings } from "../../Components/Response"

export const Search = () => {
    const {searchCountries} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {countrie} = useParams()
    const {getSearchCountries} = ApiSettings
    const handleGetSearchCounrtries = useCallback(async () => {
        try{
            const request = await getSearchCountries(countrie).catch(error => console.log(error))
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
    return(
        <section className="hero">
            <div className="container">
                {searchCountries?.length ?  (
                    <div className="hero-inner-box">
                        {searchCountries?.map(item => {
                            return(
                                <Countre {...item}/>
                            )
                        })}
                    </div>
                ) : (
                    <ResponseSettings type={"error"} text={"Server da xatolik yuz berdi"}/>
                )}

            </div>
        </section>
    )
}