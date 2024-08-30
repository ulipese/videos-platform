export const PlanCardHeader = ({ title, highlighted }) => {
  return (
    <div
      className={`pricing-card__card-header ${
        highlighted ? "highlighted" : ""
      }`}
    >
      <h2 className={`card-header__title ${highlighted ? "highlighted" : ""}`}>
        {title}
      </h2>
    </div>
  );
};
