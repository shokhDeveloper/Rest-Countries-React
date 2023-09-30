import { Navigate, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import { Home } from "../Private";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/*" element={<Home/>}/> 
            <Route path="*" element={<Navigate to={"/"} replace={true}/>} />
        </>
    )
)