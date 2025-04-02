const inputStyles =
  "bg-black py-4 px-6 placeholder:text-slate-300 text-white rounded-lg outline-none border-none font-medium";

const FormInput = ({
  title,
  value,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  error,
  input,
  textArea,
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{title}</span>
      {input && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputStyles}
        />
      )}
      {textArea && (
        <textarea
          rows="7"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputStyles}
        />
      )}
      {error && <p className="text-slate-300 text-sm mt-2">{error}</p>}
    </label>
  );
};

export default FormInput;
