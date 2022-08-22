const Select = ({ name, label, formik, selectOption }) => {
  // console.log("form", formik.initialValues.id);

  return (
    <>
      <select
        {...formik.getFieldProps(name)}
        id={name}
        name={name}
        className="bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-sm w-full"
      >
        <option>انتخاب کنید</option>
        {selectOption.map((options) => {
          return (
            <option key={options.id} value={options.id}>
              {options.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-rose-500 text-xs mr-2">{formik.errors[name]}</span>
      )}
    </>
  );
};

export default Select;
