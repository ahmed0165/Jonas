import { type } from "@testing-library/user-event/dist/type";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} questions to test your Ract mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let’s Start
      </button>
    </div>
  );
}

export default StartScreen;
