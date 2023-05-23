import React, { useEffect, useState } from "react";
import "./sass/style.css";

export default function Main() {
  const [data, setData] = useState({
    quest:
      "What did the developer say to their friend who was having a bad day?",
    punch: "Everything's going to be 200.",
  });

  const newJoke = () => {
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => response.json())
      .then((response) => {
        setData({
          quest: response[0].question,
          punch: response[0].punchline,
        });
      });
  };

  return (
    <>
      <main className="main">
        <div className="main-inner">
          <h5>- {data.quest}</h5>
          <h5>- {data.punch}</h5>
          <button onClick={newJoke}>new joke</button>
        </div>
      </main>
    </>
  );
}
