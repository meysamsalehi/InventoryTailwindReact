import delivered from "./../../assets/img/status-delivered.svg";
import processing from "./../../assets/img/status-processing.svg";
import returned from "./../../assets/img/status-returned.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductAdd from "./Products/ProductAdd";
import CategoryAdd from "./Categories/CategoryAdd";
import {
  getAsyncCategories,
  getSearchAsyncCategories,
} from "../../features/category/categorySlice";
import { getAsyncProducts } from "./../../features/product/productSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const HomePage = (props) => {
  const [time, setTime] = useState("");

  const { categories, loading, error } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncCategories());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleDateString("fa-IR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }),
      );
    }, 1000);
    return () => {
      // console.log(`clearing interval`);
      clearInterval(interval);
    };
  }, [time]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (categories)
    return (
      <div className="basis-8/12 flex flex-col justify-start gap-y-5 ">
        <div className="max-h-10 border border-slate-200 rounded-lg flex justify-between items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 basis-1/12 flex justify-start"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-xs text-orange-500 basis-8/12 flex justify-start">
            <div>{time}</div>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 basis-2/12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4">
          <div className="flex justify-between items-center">
            <div className="text-lg border-b-4  border-red-400">محصولات</div>
            <div className="text-sm flex flex-row justify-between items-center text-cyan-500">
              <NavLink to="/ProductList"> مشاهده محصولات </NavLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 basis-2/12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-4 py-10 gap-x-24">
            <div className="flex flex-row justify-center items-center gap-x-2">
              <img src={processing} alt="processing"></img>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-md font-semibold">موجودی انبار</span>
                <h2>25</h2>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <img src={delivered} alt="delivered"></img>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-md font-semibold">کسری موجودی </span>
                <h2>25</h2>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <img src={returned} alt="returned"></img>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-md font-semibold">مرجوع شده </span>
                <h2>25</h2>
              </div>
            </div>
          </div>
        </div>

        <ProductAdd categories={categories} />
        <CategoryAdd />
      </div>
    );
};

export default HomePage;
