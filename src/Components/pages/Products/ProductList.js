import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getAsyncProducts,
  getSearchAsyncProducts,
  sort,
} from "../../../features/product/productSlice";
import Asc from "../../../assets/icon/svg/Asc";
import Desc from "../../../assets/icon/svg/Desc";
import { NavLink } from "react-router-dom";
import { getAsyncCategories } from "../../../features/category/categorySlice";
import { getSearchAsyncCategories } from "./../../../features/category/categorySlice";

const ProductList = (props) => {
  const { products, loading, error } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncCategories());
    dispatch(getSearchAsyncCategories());
    dispatch(getAsyncProducts());
  }, []);

  const [value, setValue] = useState("");

  // console.log("pro", products);

  const changeHandler = (e) => {
    // dispatch({ type: "search", event: e });
    // dispatch(search({ event: e.target.value }));
    dispatch(getSearchAsyncProducts({ event: e.target.value }));
    setValue(e.target.value);
  };

  if (loading) return <h2>loading</h2>;
  if (error) return <h2>error</h2>;
  if (categories && products)
    return (
      <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4">
        <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4 gap-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg border-b-4  border-red-400">لیست محصولات انبار</span>
            <div className="text-sm flex flex-row justify-end items-center text-cyan-500 w-4/12">
              <NavLink to="/">افزودن محصول جدید </NavLink>
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

          <div>
            <input
              type="text"
              onChange={changeHandler}
              value={value}
              placeholder="جستجوی عنوان محصول"
              className="bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-sm"
            />
          </div>

          <div className="flex justify-between bg-slate-100  items-center border-b border-slate-100 pb-2 hover:bg-slate-100 rounded-lg px-2 hover:px-4 py-2">
            <div className="flex justify-start items-center gap-x-4 w-4/12">
              <span className="font-semibold">عنوان محصول</span>
              <div className="flex justify-start items-center">
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(sort({ columnName: "title", sortType: "asc" }))}
                >
                  <Asc />
                </span>

                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(sort({ columnName: "title", sortType: "desc" }))
                  }
                >
                  <Desc />
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-4 w-3/12">
              <span className="font-semibold">موجودی </span>
              <div className="flex justify-start items-center">
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(sort({ columnName: "quantity", sortType: "asc" }))
                  }
                >
                  <Asc />
                </span>

                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(sort({ columnName: "quantity", sortType: "desc" }))
                  }
                >
                  <Desc />
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-4 w-3/12">
              <span className=" font-semibold">دسته بندی </span>
              <div className="flex justify-start items-center">
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(sort({ columnName: "category", sortType: "asc" }))
                  }
                >
                  <Asc />
                </span>

                <span
                  className="cursor-pointer"
                  onClick={() =>
                    dispatch(sort({ columnName: "category", sortType: "desc" }))
                  }
                >
                  <Desc />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mx-3">
              <div>
                <span className="font-semibold">عملیات</span>
              </div>
            </div>
          </div>

          {products.map((product, index) => {
            return <Product key={index} product={product} categories={categories} />;
          })}
        </div>
      </div>
    );
};

export default ProductList;
