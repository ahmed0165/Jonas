import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StartRating from "./StartRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating
      maxRating={5}
      messages={["Terribel", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
      // onSetRating={setMovieRating}
    />
    <StartRating maxRating={24} color="red" size={24} />
  </React.StrictMode>
);
