import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";

export default function MainLayout() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
