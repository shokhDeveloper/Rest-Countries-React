import { useCallback, useEffect } from "react"
import { useParams } from "react-router"
import { Action, ApiSettings } from "../../Settings"
import { useDispatch, useSelector } from "react-redux"
import { Countre, Search } from "../../Components"
import { ResponseSettings } from "../../Components/Response"

export const RegionSearch = () => {
    const {searchCountries, darkMode} = useSelector(({Reducer}) => Reducer)
    const dispatch = useDispatch()
    const {getRegionCountries} = ApiSettings
    const {region} = useParams()
    const handleGetRegion = useCallback(async () => {
        const request = await getRegionCountries(region).catch(error => console.log(error))
        if(request?.status === 200 || request?.status === 304){
            const response = await request.data
            dispatch(Action.setSearchCountries(response))
        }
    },[region])
    useEffect(() => {
        handleGetRegion()
    },[handleGetRegion])
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