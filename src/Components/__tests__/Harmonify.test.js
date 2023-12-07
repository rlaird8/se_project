import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Harmonify from "../Harmonify/Harmonify";

test("Test harmonify component with bass", () => {
  render(
    <MemoryRouter>
      <Harmonify setSelectedGenre={"Bass"} />
    </MemoryRouter>
  );
  const title = screen.getByTestId("title");
  const subtitle = screen.getByTestId("subtitle");
  const genreHeader = screen.getByTestId("genreHeader");
  const buttonContainer = screen.getByTestId("button-container");
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(buttonContainer).toBeInTheDocument();
});

test("Test harmonify component with dubstep", () => {
  render(
    <MemoryRouter>
      <Harmonify setSelectedGenre={"Dubstep"} />
    </MemoryRouter>
  );
  const title = screen.getByTestId("title");
  const subtitle = screen.getByTestId("subtitle");
  const genreHeader = screen.getByTestId("genreHeader");
  const buttonContainer = screen.getByTestId("button-container");
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(buttonContainer).toBeInTheDocument();
});

test("Test harmonify component with future bass", () => {
  render(
    <MemoryRouter>
      <Harmonify setSelectedGenre={"Future Bass"} />
    </MemoryRouter>
  );
  const title = screen.getByTestId("title");
  const subtitle = screen.getByTestId("subtitle");
  const genreHeader = screen.getByTestId("genreHeader");
  const buttonContainer = screen.getByTestId("button-container");
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(buttonContainer).toBeInTheDocument();
});

test("Test harmonify component with house", () => {
  render(
    <MemoryRouter>
      <Harmonify setSelectedGenre={"House"} />
    </MemoryRouter>
  );
  const title = screen.getByTestId("title");
  const subtitle = screen.getByTestId("subtitle");
  const genreHeader = screen.getByTestId("genreHeader");
  const buttonContainer = screen.getByTestId("button-container");
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(buttonContainer).toBeInTheDocument();
});

test("Test harmonify component with phonk", () => {
  render(
    <MemoryRouter>
      <Harmonify setSelectedGenre={"Phonk"} />
    </MemoryRouter>
  );
  const title = screen.getByTestId("title");
  const subtitle = screen.getByTestId("subtitle");
  const genreHeader = screen.getByTestId("genreHeader");
  const buttonContainer = screen.getByTestId("button-container");
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(buttonContainer).toBeInTheDocument();
});