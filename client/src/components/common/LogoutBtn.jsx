import useLogOut from "../../hooks/useLogOut";

const LogoutBtn = () => {
  const { loading, logOut } = useLogOut();

  const handleClickLogOut = () => {
    logOut();
  };

  return (
    <div className="mt-5 cursor-pointer flex items-center gap-2" onClick={handleClickLogOut}>
      {!loading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      )}
      <span>{"Logout"}</span>
    </div>
  );
};

export default LogoutBtn;
