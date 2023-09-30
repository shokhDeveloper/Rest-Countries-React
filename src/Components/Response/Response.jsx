import "./response.scss";
export const ResponseSettings = ({type, text}) => {
    return(
        <div className={`response response-${type}`}>
            <h3>{text}</h3>
        </div>
    )
}