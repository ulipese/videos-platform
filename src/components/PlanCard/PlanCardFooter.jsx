export const PlanCardFooter = ({ highlighted, buttonName }) => {
  return (
    <div
      className={`pricing-card__card-footer ${
        highlighted ? "highlighted" : ""
      }`}
    >
      <button
        className={`card-footer__button ${highlighted ? "highlighted" : ""}`}
      >
        {buttonName}
      </button>
    </div>
  );
};
