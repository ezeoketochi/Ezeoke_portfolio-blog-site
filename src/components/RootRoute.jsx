import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <>
  
      <MainNavigation />
    
      <Outlet/>

    </>
  );
}
