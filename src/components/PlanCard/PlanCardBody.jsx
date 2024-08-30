export const PlanCardBody = ({
  highlighted,
  quantityUsers,
  options,
  imageUrl,
}) => {
  return (
    <div
      className={`pricing-card__card-body ${highlighted ? "highlighted" : ""}`}
    >
      {quantityUsers && options ? (
        <>
          <p
            className={`card-body__quantity-users ${
              highlighted ? "highlighted" : ""
            }`}
          >
            {quantityUsers}
          </p>
          <select
            className={`card-body__card-options ${
              highlighted ? "highlighted" : ""
            }`}
          >
            {options.map((option, index) => (
              <option
                key={index}
                className={`card-options__card-option ${
                  highlighted ? "highlighted" : ""
                }`}
              >
                {option.quantity} Vídeos R${option.price}
              </option>
            ))}
          </select>
        </>
      ) : (
        <img src={imageUrl} className="card-body__card-image"></img>
      )}
    </div>
  );
};
