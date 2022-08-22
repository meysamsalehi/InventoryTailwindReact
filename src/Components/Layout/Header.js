import Login from "../../assets/icon/svg/Login";
import Logo from "../../assets/icon/svg/Logo";
import Search from "../../assets/icon/svg/Search";

const Header = () => {
  return (
    <header className="flex flex-row justify-center align-items mx-14 mb-5">
      <div className="basis-1/12 flex justify-center items-center ml-2">
        <Logo />
      </div>
      <div className=" flex justify-center basis-3/12 bg-slate-100 rounded-lg">
        <div className="p-2">
          <Search />
        </div>
        <input type="text" className="bg-transparent w-full h-full" />
      </div>
      <div className="basis-8/12 flex flex-row justify-end">
        <button className="bg-transparent w-40 h-10 border border-slate-200 rounded-lg flex justify-center items-center gap-x-4">
          <div>
            <Login />
          </div>
          ورود | ثبت نام
        </button>
      </div>
    </header>
  );
};

export default Header;
