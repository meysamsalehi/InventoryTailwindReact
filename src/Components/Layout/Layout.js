import SideBar from "./SideBar";
import Header from "./Header";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoad(true);
    }, 0);
  }, []);

  return (
    <div>
      {load ? (
        <div className="max-w-screen-2xl mx-auto mt-4 flex-col justify-center">
          <Header />
          <div className="flex flex-row justify-center align-items gap-x-4 w-full">
            <div className="basis-3/12 border border-slate-200 rounded-lg">
              <SideBar />
            </div>

            <div className="basis-8/12 flex flex-col justify-start gap-y-5 w-full ">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div>در حال انتظار</div>
      )}
    </div>
  );
};

export default Layout;
