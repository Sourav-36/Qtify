import "./navbar.css";

const Feedback = ({ children, isFeedbackBtnClicked }) => {
  return (
    <button className="feedbackBtn" onClick={isFeedbackBtnClicked}>
      {children}
    </button>
  );
};

export default Feedback;
