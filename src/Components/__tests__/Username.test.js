import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Username from "../Username/Username";
import userEvent from "@testing-library/user-event";

test("Test username component", async () => {
  const mockSetUsername = jest.fn();

  render(
    <MemoryRouter>
      <Username setUsername={mockSetUsername} />
    </MemoryRouter>
  );
  const inputField = screen.getByTestId("usernameInputField");
  const submitButton = screen.getByText("Submit");

  expect(inputField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  expect(inputField).toHaveValue("");

  await act(async () => {
    // Check that the input field works
    await userEvent.type(inputField, "01234");
    expect(inputField).toHaveValue("01234");
    // Check that the field only allows strings of 10 characters long
    await userEvent.type(inputField, "5678910");
    expect(inputField).toHaveValue("0123456789");
  });

  await act(async () => {
    userEvent.click(submitButton);
  });

  // Verify that the username is being set.
  expect(mockSetUsername).toHaveBeenCalledTimes(1);
  expect(mockSetUsername).toHaveBeenCalledWith("0123456789");
});
