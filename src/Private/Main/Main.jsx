import "./main.scss";
import { useDispatch, useSelector } from "react-redux";
import { RoutesX, Search } from "../../Components";
import { useCallback, useEffect } from "react";
import {  ApiSettings } from "../../Settings";
import { useQuery } from "react-query";
export const Main = () => {
  const { darkMode } = useSelector(({ Reducer }) => Reducer);
  const dispatch = useDispatch()
  const {getIndependetCountries}  = ApiSettings
  const handleRequest = useCallback(async () => {
        const request = await getIndependetCountries().catch(error => {
            return error
        })
        if(request?.status === 200 || request?.status === 304){
            const response = await request.data
            return response
        }
    
  },[])
  const defaultQuery = useQuery("/independent?status=true", handleRequest)
  return (
    <main className={`${darkMode === "dark" ? "site-dark" : "site-light"}`}>
        <section className="hero">
          <div className="container">
        <Search/>
          <RoutesX {...defaultQuery}/>
          </div>

        </section>
    </main>
  );
};
