import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notfound__container">
      <h1 className="error">404</h1>
      <div className="page">
        Oops!!! The page you are looking for is not found
      </div>
      <Link to="/">
        <span className="back__home">Back to home</span>
      </Link>
    </div>
  );
}
