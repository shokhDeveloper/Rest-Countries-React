import "../Main/main.scss"
import "./countrie.scss";
import { Countre, Search } from "../../Components"
import { ResponseSettings } from "../../Components/Response"
import { useSelector } from "react-redux";

export const DefaultRes = (props) => {
    const {darkMode} = useSelector(({Reducer}) => Reducer)
    const {isLaoding, isSuccess, isError, data} = props
    return(
<>
            {isLaoding && 
                <ResponseSettings type={"loading"} text={"Yuklanmoqda"}/>
            }

            {isSuccess && 
                <>
                    {data?.length && 
                        <div className={`hero-inner-box ${darkMode === "dark" ? "hero-inner-dark" : "hero-inner-light"}`}>
                            {data?.map(item => {
                                return(
                                    <Countre {...item} key={item.id}/>
                                    )
                                })}  
                        </div>
                    }
                </>
            }
            {isSuccess && data === undefined && 
                <ResponseSettings type={"error"} text={"Serverda xatolik yuz berdi"}/>
            }  
            </>
    )
}