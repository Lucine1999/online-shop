import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

function Navigation() {
  const user = useSelector(selectUser);

  const links = user ?  <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/">Products</Link> | {" "}
      <Link to="/">Favorites</Link> | {" "}
     {links}
    </nav>
  );
}

export default Navigation;