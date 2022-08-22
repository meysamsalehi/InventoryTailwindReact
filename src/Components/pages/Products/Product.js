import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Minus from "../../../assets/icon/svg/Minus";
import Trash from "../../../assets/icon/svg/Trash";
import Plus from "../../../assets/icon/svg/Plus";

import {
  decrementAsyncProducts,
  deleteAsyncProducts,
  incrementAsyncProducts,
} from "../../../features/product/productSlice";

const Product = ({ product, categories }) => {
  const dispatch = useDispatch();
  // console.log("cate_pro", categories);

  if (categories)
    return (
      <>
        <div
          key={product.id}
          className="flex justify-between items-center border-b border-slate-100 pb-2 hover:bg-slate-100 hover:rounded-lg hover:px-2 py-2"
        >
          <div className="flex justify-start items-center w-4/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w8 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mr-3">{product.title}</span>
          </div>
          <div className="flex justify-start items-center gap-x-3 w-3/12">
            <span className="bg-slate-200 w-6 h-6 rounded-full flex flex-row justify-center items-center">
              {product.quantity}
            </span>
            <span
              className="cursor-pointer"
              onClick={() =>
                dispatch(
                  incrementAsyncProducts({ id: product.id, quantity: product.quantity }),
                )
              }
            >
              <Plus />
            </span>

            {product.quantity >= 2 && (
              <span
                className="cursor-pointer"
                onClick={() =>
                  dispatch(
                    decrementAsyncProducts({
                      id: product.id,
                      quantity: product.quantity,
                    }),
                  )
                }
              >
                <Minus />
              </span>
            )}

            {product.quantity >= 1 && (
              <span
                className="cursor-pointer"
                onClick={() => dispatch(deleteAsyncProducts({ id: product.id }))}
              >
                <Trash />
              </span>
            )}
          </div>

          <div className="flex justify-start items-center w-3/12">
            <span>
              <span>
                {categories.find((e) => Number(e.id) === Number(product.category)).label}
              </span>
              {/* {categories[0]} */}
              {/* {product.category} */}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <NavLink
                to={`/EditProduct/${parseInt(product.id)}`}
                state={{ myState: { product, categories } }}
              >
                ویرایش
              </NavLink>
            </div>

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
      </>
    );
};

export default Product;
