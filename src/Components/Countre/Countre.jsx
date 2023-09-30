import { Link } from "react-router-dom"

export const Countre = (props) => {
    return(
        <Link to={`/countrie/${props?.name?.common}`} className="hero-card">
            <img src={props.flags.svg} alt="" style={{width: "100%"}} height={200} />
            <div className="hero-card-body">
            <h4>{props?.name?.common}</h4>
            <p><strong>Population</strong>: {props.population} </p>
            <p><strong>Region</strong>: {props.region}</p>
            <p><strong>Capital</strong>: {props.capital}</p>
            </div>
        </Link>
    )
}