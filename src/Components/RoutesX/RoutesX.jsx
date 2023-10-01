import { useRoutes } from "react-router";
import { CountriePage, DefaultRes, RegionSearch, Search } from "../../Private";

export const RoutesX = (defaultX) => {
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
    },
    {
      path: "/region/:region",
      element: <RegionSearch/>
    }
  ];
  const route = useRoutes(routes)
  return route
};
