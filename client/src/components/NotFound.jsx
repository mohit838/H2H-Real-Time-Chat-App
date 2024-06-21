import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-10 min-w-96 flex flex-col items-center justify-center bg-white/90 text-black">
      <img src="/images/continue.svg" alt="just-img" />
      <h1 className="text-3xl font-bold">{"404 | Not Found"}</h1>
      <Link to="/">
        <p className="text-xl mt-10">Home page?</p>
      </Link>
    </div>
  );
};

export default NotFound;
