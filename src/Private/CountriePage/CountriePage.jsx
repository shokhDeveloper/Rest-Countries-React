import "./countriePage.scss";
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Action, ApiSettings } from "../../Settings";
import { useQuery } from "react-query";
import { ResponseSettings } from "../../Components/Response";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Settings/Utils";

export const CountriePage = () => {
  const {bordersCountries, darkMode, bordersCountriesData} = useSelector(({Reducer}) => Reducer)
  const dispatch = useDispatch()
  const { countrie } = useParams();
  const navigate = useNavigate();
  const { getCountrie , getCountriesBorders} = ApiSettings;
  const handleGetBorders = () => {
        Promise.all(
           bordersCountries.map(item => {
             return(
               getCountriesBorders(item).then(response => {
                 return response.data
               })
             )
           })
         ).then(response => dispatch(Action.setBorderCountriesData(response)))
  }
  const handleGetCountrie = useCallback(async () => {
    try {
      const request = await getCountrie(countrie).catch((error) =>
        console.log(error)
      );
      if (request?.status === 200 || request?.status === 304) {
        const response = await request.data;
        if(response[0]?.borders){
          dispatch(Action.setBordersCountries(response[0]?.borders))
        }else{
          console.log("Border Kelmadi")
        }
        return response;
      }
    } catch (error) {
      return error;
    }
  });
  let { isLoading, isError, isSuccess, data } = useQuery(
    `/name/${countrie}`,
    handleGetCountrie
  );
  data = data?.length > 1 ? data.slice(0, 1) : data;
  useEffect(() => {
    if(bordersCountries?.length){
      console.clear()
      handleGetBorders(bordersCountries)
      console.log(bordersCountries, "ishladi")
    }
  },[bordersCountries])
  return (
    <section className={`countrie-page ${darkMode === "dark" ? "countrie-dark-page" : "countrie-light-page"} `}>
        <button className="countrie-back-btn border-transparent" onClick={() => navigate(-1)}>Back</button>
        {isLoading && (
          <ResponseSettings type={"loading"} text={"Yuklanmoqda"} />
        )}
        {isSuccess && (
          <>
            {data?.map((item) => {
              return (
                <div className="countrie-inner">
                    <div className="countrie-inner-box">
                  <div className="countrie-image-box">
                    <img src={item?.flags?.svg}  alt="Flag" />
                  </div>
                  <div className="countrie-title-box">
                    <h3>{item?.name?.common}</h3>
                    <div className="countrie-text-box">
                      <div className="countrie-texts">
                        <p>
                          <strong>Native Name: </strong> {item.name.common}{" "}
                        </p>
                        <p>
                          <strong>Population: </strong>
                          {item.name.population}
                        </p>
                        <p>
                          <strong>Region: </strong>
                          {item.region}
                        </p>
                        <p>
                          <strong>Capital: </strong>
                          {item.capital}
                        </p>
                      </div>
                      <div className="countrie-texts">
                        <p>
                          <strong>Top level domain: </strong>
                          {item.tld}
                        </p>
                        {(function (currency) {
                          let result = Object.keys(currency);
                          if (result?.length) {
                            return result?.map((item) => {
                              return (
                                <p>
                                  <strong>Currency: </strong>
                                  {currency[item].name}
                                </p>
                              );
                            });
                          }
                        })(item.currencies, item.languages)}
                        {(function (languages) {
                          let languagesDefault = Object.keys(languages);
                          if (languagesDefault?.length) {
                            return (
                              <p>
                                <strong>Languages : </strong>
                                {languagesDefault.join(", ")}
                              </p>
                            );
                          }
                        })(item.languages)}
                      </div>
                    </div>
                  {bordersCountriesData?.length ?  (
                    <div className="countrie-border-countries">
                      <p><strong>Border Countries</strong></p>
                      {bordersCountriesData?.map(item => {
                       if(item?.length){
                         return(
                           item?.map(item => {
                            return(
                              <div className="countrie-border">
                                {item.name.common + " "}
                              </div>
                            )
                           })
                         )
                       }
                      })}
                    </div>
                  ): "Xatolik"}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {isError && (
          <ResponseSettings
            text={"Server da xatolik yuz berdi"}
            type={"error"}
          />
        )}

    </section>
  );
};
