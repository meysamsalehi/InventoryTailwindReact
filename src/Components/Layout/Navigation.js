import { NavLink } from "react-router-dom";
import RouteList from "./RouteList";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {RouteList.map((item, index) => {
          return (
            <div key={index}>
              {item.isShow !== false && (
                <li className=" px-4 py-4 hover:bg-stone-100 w-full border-b border-stone-100 flex flex-row justify-start gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
