import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Button from "../Button/Button";

test("Test button component", async () => {
  const mockClickHandler = jest.fn();

  render(
    <MemoryRouter>
      <Button buttonText={"test"} clickHandler={mockClickHandler} route={"/"} />
    </MemoryRouter>
  );

  const button = screen.getByTestId("button");
  const buttonText = screen.getByTestId("buttonText");

  expect(button).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
  expect(buttonText).toHaveTextContent("test");

  await act(async () => {
    // Simulate a click on the button using userEvent
    await userEvent.click(button);
  })

  // Assert that the click handler was called with the correct argument
  expect(mockClickHandler).toHaveBeenCalledWith("test");

  // You can also test navigation by checking the route if you are using React Router
  // Note: This might not work with MemoryRouter; you may need to use BrowserRouter
  // or use a different testing strategy for React Router
  expect(window.location.pathname).toBe("/");
});
