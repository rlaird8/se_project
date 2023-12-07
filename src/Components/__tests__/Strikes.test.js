import { render, screen } from "@testing-library/react";
import Strikes from "../Strikes/Strikes";
import { MemoryRouter } from "react-router-dom";

test("Test strikes component with two easy strikes left", () => {
  render(
    <MemoryRouter>
      <Strikes difficulty={"Easy"} numMissed={1} />
    </MemoryRouter>
  );
  const strikes = screen.getAllByTestId("strike");
  expect(strikes.length).toBe(2);
});

test("Test strikes component with 1 medium strikes left", () => {
  render(
    <MemoryRouter>
      <Strikes difficulty={"Medium"} numMissed={1} />
    </MemoryRouter>
  );
  const strikes = screen.getAllByTestId("strike");
  expect(strikes.length).toBe(1);
});

test("Test strikes component with 1 hard difficulty strikes left", () => {
  render(
    <MemoryRouter>
      <Strikes difficulty={"Hard"} numMissed={0} />
    </MemoryRouter>
  );
  const strikes = screen.getAllByTestId("strike");
  expect(strikes.length).toBe(1);
});
