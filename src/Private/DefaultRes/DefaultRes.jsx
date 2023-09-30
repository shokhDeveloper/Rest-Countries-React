import "./countrie.scss";
import { Countre } from "../../Components"
import { ResponseSettings } from "../../Components/Response"

export const DefaultRes = (props) => {
    const {isLaoding, isSuccess, isError, data} = props
    return(
        <>
            {isLaoding && 
                <ResponseSettings type={"loading"} text={"Yuklanmoqda"}/>
            }

            {isSuccess && 
                <>
                    {data?.length && 
                        <div className="hero-inner-box">
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