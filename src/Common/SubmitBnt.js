const SubmitBtn = ({ title, isValid }) => {
  return (
    <button
      type="submit"
      className={
        !isValid
          ? "bg-green-600 px-20 py-2 border-0 rounded-xl text-white"
          : "bg-slate-100 px-20 py-2 border-0 rounded-xl"
      }
      disabled={isValid}
    >
      {title || "ثبت"}
    </button>
  );
};

export default SubmitBtn;
