const Input = ({ name, label, formik, type = "text" }) => {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      <label htmlFor={name}>{label}*</label>

      {/* // خط پایین معادل همین است */}
      {/* <input type={type} id={name} value={formik.values[name]}  onBlur={formik.handleBlur}    onChange={formik.handleChange} name={name}/> */}
      <input
        id={name}
        name={name}
        type={type}
        className={
          formik.errors[name] && formik.touched[name]
            ? "bg-red-100 px-3 py-2 border border-slate-200 rounded-xl text-xs placeholder-black text-black "
            : "bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-xs "
        }
        placeholder={`${label}را وارد نمائید`}
        {...formik.getFieldProps(name)}
      />

      {formik.errors[name] && formik.touched[name] && (
        <span className="text-rose-500 text-xs mr-2">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
