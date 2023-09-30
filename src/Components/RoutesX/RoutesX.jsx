import { useRoutes } from "react-router";
import { CountriePage, DefaultRes, Search } from "../../Private";

export const RoutesX = (defaultX) => {
    console.log(defaultX)
  const routes = [
    {
      path: "/",
      element: <DefaultRes {...defaultX} />,
    },
    {
      path: "/countries/:countrie",
      element: <Search/>
    },
    {
      path: "/countrie/:countrie",
      element: <CountriePage/>
    }
  ];
  const route = useRoutes(routes)
  return route
};
