import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import Leaderboard from "../Leaderboard/LeaderBoard";

// Mock the necessary modules and functions
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useMutation: jest.fn(),
  useQuery: jest.fn(),
  useQueryClient: jest.fn(),
}));

// Mock data for the tests
const mockUserData = [
  { user_id: "user1", score: 100 },
  { user_id: "user2", score: 90 },
  { user_id: "user3", score: 50.3 },
  // Add more mock data as needed
];

describe("Leaderboard", () => {
  // Mock successful API response
  const mockQueryData = {
    isLoading: false,
    error: undefined,
    data: mockUserData,
  };

  // Mock loading state
  const mockLoadingQuery = {
    isLoading: true,
    error: undefined,
    data: undefined,
  };

  // Mock error state
  const mockErrorQuery = {
    isLoading: false,
    error: new Error("Mock error"),
    data: undefined,
  };

  beforeEach(() => {
    // Reset mocks and provide default implementations
    jest.clearAllMocks();
    useMutation.mockReturnValue({ mutate: jest.fn() });
    useQuery.mockReturnValue(mockQueryData);
    useQueryClient.mockReturnValue({
      invalidateQueries: jest.fn(),
    });
  });

  it("renders loading state", () => {
    useQuery.mockReturnValue(mockLoadingQuery);
    render(
    <MemoryRouter>
        <Leaderboard user_id={"user1"} score={100} />
    </MemoryRouter>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useQuery.mockReturnValue(mockErrorQuery);
    render(
        <MemoryRouter>
            <Leaderboard user_id={"user1"} score={100} />
        </MemoryRouter>
        );
    expect(screen.getByText("Error...")).toBeInTheDocument();
  });

  it("renders leaderboard data", async () => {
    render(
        <MemoryRouter>
            <Leaderboard user_id={"user1"} score={100} />
        </MemoryRouter>
        );
    await waitFor(() => {
      mockUserData.forEach((userData) => {
        const user_id = screen.getByText(userData.user_id);
        const score = screen.getByText(userData.score.toString());

        // Verify existance and value of user_id and score
        expect(user_id).toBeInTheDocument();
        expect(user_id).toHaveTextContent(userData.user_id);
        expect(score).toBeInTheDocument();
        expect(score).toHaveTextContent(userData.score.toString())
      });
    });
  });
});
