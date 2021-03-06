import axios from "axios";
import React, { Fragment } from "react";

const Polls = ({ question, choices }) => {
  const [selected, setSelected] = useState(null);

  handleSubmit = (e) => {
    axios.post("/answer", { choice: selected });
    setSelected(null);
  };
  return (
    <Fragment>
      <span
        className="d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4"
        style={{ marginTop: -50 }}
      >
        Poll for the Day
      </span>
      <span className="d-block w-100 h1 text-dark">{question}</span>
      <div className="my-5 pt-0 pb-5">
        {choices.map((choice, index) => {
          const handleClick = (selected) => (e) => setSelected(selected);
          const selected = selectedChoice && selectedChoice === choice;
          const labelClass = [
            "custom-control-label pl-5 position-relative",
            selected ? "checked" : "",
          ].join(" ");

          return (
            <div
              key={index}
              className="custom-control custom-radio py-3 ml-2 d-flex align-items-center"
            >
              <input
                className="custom-control-input"
                type="radio"
                name="poll-response"
                id={`poll-response--radio-${index + 1}`}
                value={choice}
                checked={selected}
              />
              <label
                className={labelClass}
                htmlFor={`poll-response--radio-${index + 1}`}
                onClick={handleClick(choice)}
              >
                {choice}
              </label>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className={`btn btn-primary text-uppercase my-5 ml-4 px-5 d-block ${
          selectedChoice ? "" : "in"
        }visible`}
        disabled={!selectedChoice}
        onClick={this.handleSubmit}
      ></button>
    </Fragment>
  );
};

export default Polls;
