import axios from "axios"
export const BASE_URL = "https://restcountries.com/v3.1"


export const ApiSettings = {
    getIndependetCountries(){
        return(
            axios.get(BASE_URL + "/independent?status=true")
        )
    },
    getSearchCountries(searchValue){
        return(
            axios.get(BASE_URL + `/name/${searchValue}`)
        )
    },
    getCountrie(countrie){
        return(
            axios.get(BASE_URL + `/name/${countrie}`)
        )
    },
    getCountriesBorders(countrieValue){
        return(
            axios.get(BASE_URL + `/alpha/${countrieValue}`)
        )
    },
    getRegionCountries(region){
        return(
            axios.get(BASE_URL + `/region/${region}`)
        )
    }
}