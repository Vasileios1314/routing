import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {" "}
      <div>
        <Link to="/">Home</Link>
        {"-"}
        <Link to="/discover">Discover</Link>
        {"-"}
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
