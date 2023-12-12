import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./LeaderBoard.css";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const submitToLeaderboard = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/leaderboard/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Leaderboard API response:", responseData);
  } catch (error) {
    console.error("Error during leaderboard submission:", error.message);
  }
};

export default function Leaderboard({ user_id, score }) {
  const navigate = useNavigate();
  const hasEffectRun = useRef(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitToLeaderboard,
    onSuccess: () => {
      queryClient.invalidateQueries("leaderboard");
    },
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["leaderboard", "leaderboard"],
    queryFn: () =>
      fetch("http://localhost:8000/leaderboard/").then((res) => res.json()),
  });

  function clickHandler(route) {
    navigate(route);
  }

  useEffect(() => {
    if (!hasEffectRun.current) {
      mutation.mutate({ user_id, score });
      hasEffectRun.current = true;
      queryClient.invalidateQueries({ queryKey: ["leaderboard"] });
    }
  }, []);

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="text">
      <div data-testid="title" className="title whiteText">
        <h1>
          <i>Leaderboard</i>
        </h1>
      </div>
      <div data-testid="leaderboardContainer" className="leaderboard-container whiteText">
        {data.map((score, index) => (
          <div key={index} className="leaderboard-entry">
            <span className="rank">{index + 1}</span>
            <span className="name">{score.user_id}</span>
            <span className="score">{Math.round(score.score * 100) / 100}</span>
          </div>
        ))}
      </div>
      <div className="button-containerL">
        <Button
          clickHandler={clickHandler}
          route={"/"}
          buttonText={"Main Menu"}
        />
        <Button
          clickHandler={clickHandler}
          route={"/game"}
          buttonText={"Retry"}
        />
      </div>
    </div>
  );
}
