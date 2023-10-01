import { useCallback, useEffect } from "react"
import { useParams } from "react-router"
import { Action, ApiSettings } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Countre } from "../../Components"
import { ResponseSettings } from "../../Components/Response"

export const RegionSearch = () => {
    const {searchCountries} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {getRegionCountries} = ApiSettings
    const paramsRegion = useParams()
    const handleGetRegion = useCallback(async () => {
        const request = await getRegionCountries(paramsRegion.region).catch(error => console.log(error))
        if(request?.status === 200 || request?.status === 304){
            const response = await request.data
            dispatch(Action.setSearchCountries(response))
        }
    },[paramsRegion])
    useEffect(() => {
        handleGetRegion()
    },[handleGetRegion])
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