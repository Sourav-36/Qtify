import "./form.css";

const FormFeedback = ({ isFeedbackBtnClicked }) => {
  return (
    <div className="formContainer">
      <div className="formContentWrapper">
        <div className="formTitle">
          <div className="title">Feedback</div>
          <button className="closeBtn" onClick={isFeedbackBtnClicked}>
            X
          </button>
        </div>
        <form className="formWrapper">
          <input placeholder="Full name" className="input"></input>
          <input placeholder="Email ID" className="input"></input>
          <input placeholder="Subject" className="input"></input>
          <textarea
            placeholder="Description"
            className="textareaInput"
          ></textarea>
        </form>
        <div className="formSubmitLayout">
          <button className="formSubmitBtn">Submit Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default FormFeedback;
