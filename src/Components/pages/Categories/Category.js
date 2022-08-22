import Trash from "../../../assets/icon/svg/Trash";

const Category = ({ category, products }) => {

  return (
    <>
      <div
        key={category.id}
        className="flex justify-between items-center border-b border-slate-100 pb-2 hover:bg-slate-100 hover:rounded-lg hover:px-2 py-2"
      >
        <div className="flex justify-start items-center w-3/12">
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
          <span className="mr-3">{category.label}</span>
        </div>
        <div className="flex justify-start items-center gap-x-3 w-3/12">
          <span className="bg-slate-200 w-6 h-6 rounded-full flex flex-row justify-center items-center">
            {category.id}
          </span>

          {/* <span onClick={() => dispatch(remove({ id: category.id }))}> */}
          <Trash />
          {/* </span> */}

          {category.id >= 1 && (
            // <span onClick={() => dispatch(removecategory(category.id))}>
            <div></div>
            // </span>
          )}
        </div>

        {/* <div className="flex justify-start items-center w-3/12">
          <span>
            <span>
              دسته بندی:
              {selectOption.find((c) => c.value === category.category).label}
            </span>
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <NavLink
              to={`/Editcategory/${parseInt(category.id) + 1}`}
              state={{ myState: { category } }}
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
        </div> */}
      </div>
    </>
  );
};

export default Category;
