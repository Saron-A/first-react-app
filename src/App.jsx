import { useState, useEffect } from "react";

const Card = ({ title }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    console.log(
      `Card with title "${title}" is ${isLiked ? "liked" : "not liked"}`
    );
  });

  return (
    <div className="card">
      <h2>{title}</h2>
      <button
        className="material-symbols-outlined"
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? "heart_check" : "favorite"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Lion King" />
    </div>
  );
};

export { App };
