export const Input = ({ label, inputType }) => {
  return (
    <div className="div-input">
      <label htmlFor={label} className="div-input__label">
        {label}
      </label>
      {inputType === "textArea" ? (
        <textarea className="div-input__textarea"></textarea>
      ) : (
        <input type={inputType} className="div-input__input" />
      )}
    </div>
  );
};
