import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-10 min-w-96 flex flex-col items-center justify-center bg-black/90">
      <h1 className="text-3xl font-bold">{"404 | Not Found"}</h1>
      <Link to="/login">
        <p className="text-xl mt-10">Home page?</p>
      </Link>
    </div>
  );
};

export default NotFound;
