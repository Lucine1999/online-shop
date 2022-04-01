import {Link} from "react-router-dom";

export default function SignOutLinks() {
  return (
    <>
      <Link to="/login">Log In</Link> | {" "}
      <Link to="/signup">Sign Up</Link>
    </>
  );
}