import Navigation from "./Navigation";

const SideBar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 gap-x-2">
        <div className="basis-2/12">
          <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center items-center">
            <div className="text-white text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-00 w-11"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="basis-5/12 flex flex-col justify-center">
          <h2>میثم صالحی</h2>
          <h2>09366766239 </h2>
        </div>
        <div className="basis-5/12 flex flex-row justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div>
        <Navigation />
      </div>
    </>
  );
};

export default SideBar;
