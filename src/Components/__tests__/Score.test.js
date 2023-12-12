import React from "react";
import { render, waitFor } from "@testing-library/react";
import Score from "../Score/Score";

// Mock the setScore function
const setScoreMock = jest.fn();

test("Test score and verify it calculates and displays the correct score with easy difficulty", async () => {


  // Render the Score component with initial props
  const { getByTestId } = render(
    <Score
      difficulty="Easy"
      runTime={15}
      isCorrect={1}
      score={0}
      setScore={setScoreMock}
    />
  );

  // Initial render should display the initial score (0)
  expect(getByTestId("score")).toHaveTextContent("Score: 0");

  // Wait for the next tick of the event loop to allow state to update
  await waitFor(() => {
    // Check if the useEffect was triggered and the score was updated
    expect(setScoreMock).toHaveBeenCalled();
    // Capture argument passed to setScoreMock

    const setScoreFunction = setScoreMock.mock.calls[0][0];

    // Verify the new value was computed correctly
    expect(setScoreFunction(0)).toBe(15);
  });
});

test("Test score and verify it calculates and displays the correct score with medium difficulty", async () => {


  // Render the Score component with initial props
  const { getByTestId } = render(
    <Score
      difficulty="Medium"
      runTime={10}
      isCorrect={1}
      score={0}
      setScore={setScoreMock}
    />
  );

  // Initial render should display the initial score (0)
  expect(getByTestId("score")).toHaveTextContent("Score: 0");

  // Wait for the next tick of the event loop to allow state to update
  await waitFor(() => {
    // Check if the useEffect was triggered and the score was updated
    expect(setScoreMock).toHaveBeenCalled();
    // Capture argument passed to setScoreMock

    const setScoreFunction = setScoreMock.mock.calls[0][0];

    // Verify the new value was computed correctly
    expect(setScoreFunction(0)).toBe(20);
  });
});

test("Test score and verify it calculates and displays the correct score with hard difficulty", async () => {


  // Render the Score component with initial props
  const { getByTestId } = render(
    <Score
      difficulty="Hard"
      runTime={5}
      isCorrect={1}
      score={0}
      setScore={setScoreMock}
    />
  );

  // Initial render should display the initial score (0)
  expect(getByTestId("score")).toHaveTextContent("Score: 0");

  // Wait for the next tick of the event loop to allow state to update
  await waitFor(() => {
    // Check if the useEffect was triggered and the score was updated
    expect(setScoreMock).toHaveBeenCalled();
    // Capture argument passed to setScoreMock

    const setScoreFunction = setScoreMock.mock.calls[0][0];

    // Verify the new value was computed correctly
    expect(setScoreFunction(0)).toBe(25);
  });
});
