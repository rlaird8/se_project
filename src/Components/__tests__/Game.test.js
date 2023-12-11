import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { act } from "react-dom/test-utils";
import Game from "../Game/Game";
import { MemoryRouter } from "react-router";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useMutation: jest.fn(),
  useQuery: jest.fn(),
  useQueryClient: jest.fn(),
}));

const mockSetScore = jest.fn();

const songs = [
  {
    title: "Incorrect Answer",
    id: 1,
    artist: "NoCopyrightSounds",
    runtime: "3:23",
  },
  {
    title:
      "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
    id: 2,
    artist: "NoCopyrightSounds",
    runtime: "2:09",
  },
  {
    title:
      "Abandoned - Out Of The Grave (Feat. ENROSA) [NCS Release] [dWOj02nPyxk]",
    id: 1,
    artist: "NoCopyrightSounds",
    runtime: "3:23",
  },
  {
    title:
      "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
    id: 2,
    artist: "NoCopyrightSounds",
    runtime: "2:09",
  },
];

const mockQueryData = {
  isLoading: false,
  error: false,
  data: songs,
};

beforeAll(() => {
  Object.defineProperty(global.HTMLMediaElement.prototype, "play", {
    configurable: true,
    get() {
      return () => Promise.resolve();
    },
  });
});

describe("Game component", () => {
  beforeEach(() => {
    // Reset mocks and provide default implementations
    jest.clearAllMocks();
    useMutation.mockReturnValue({ mutate: jest.fn() });
    useQuery.mockReturnValue(mockQueryData);
    useQueryClient.mockReturnValue({
      invalidateQueries: jest.fn(),
    });
  });

  it("renders without crashing", () => {
    useQuery.mockReturnValue({ isLoading: true, error: null, data: null });

    render(
      <MemoryRouter>
        <Game
          selectedGenre={"Bass"}
          selectedDifficulty={"Medium"}
          score={0}
          setScore={() => {}}
        />
      </MemoryRouter>
    );
  });

  it("renders loading state initially", async () => {
    useQuery.mockReturnValue({ isLoading: true, error: null, data: null });

    render(
      <MemoryRouter>
        <Game
          selectedGenre={"Bass"}
          selectedDifficulty={"Medium"}
          score={0}
          setScore={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the game after data loading", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: songs,
    });

    render(
      <MemoryRouter>
        <Game
          selectedGenre={"Bass"}
          selectedDifficulty={"Medium"}
          score={0}
          setScore={mockSetScore}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(screen.getAllByTestId("strike").length).toBe(2);
      expect(screen.getByTestId("score")).toBeInTheDocument();
    });
  });

  it("triggers checkAnswer on button click", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        songs: [
          {
            title: "Correct Answer",
            id: 1,
            artist: "NoCopyrightSounds",
            runtime: "3:23",
          },
          {
            title:
              "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
            id: 2,
            artist: "NoCopyrightSounds",
            runtime: "2:09",
          },
          {
            title:
              "Abandoned - Out Of The Grave (Feat. ENROSA) [NCS Release] [dWOj02nPyxk]",
            id: 1,
            artist: "NoCopyrightSounds",
            runtime: "3:23",
          },
          {
            title:
              "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
            id: 2,
            artist: "NoCopyrightSounds",
            runtime: "2:09",
          },
        ],
      },
    });

    render(
      <MemoryRouter>
        <Game
          selectedGenre={"Bass"}
          selectedDifficulty={"Medium"}
          score={0}
          setScore={mockSetScore}
        />
      </MemoryRouter>
    );

    expect(screen.queryByText("Loading...")).toBeNull();
    expect(screen.getAllByTestId("strike").length).toBe(2);
    expect(screen.getByTestId("score")).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(screen.getAllByText("Correct Answer")[0]);
    });

    // Wait for the strikes to appear on the screen
    const strikes = await screen.findAllByTestId("strike");

    // Assert the number of strikes
    expect(strikes.length).toBe(2);
    expect(mockSetScore).toHaveBeenCalledTimes(3);
  });

  it("handles incorrect answer correctly", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        songs: [
          {
            title:
              "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
            id: 1,
            artist: "NoCopyrightSounds",
            runtime: "3:23",
          },
          {
            title: "Incorrect Answer",
            id: 2,
            artist: "NoCopyrightSounds",
            runtime: "2:09",
          },
          {
            title:
              "Abandoned - Out Of The Grave (Feat. ENROSA) [NCS Release] [dWOj02nPyxk]",
            id: 1,
            artist: "NoCopyrightSounds",
            runtime: "3:23",
          },
          {
            title:
              "Alan Walker - Dreamer (Alex Skrindo Remix) [NCS Release] [WxWIFYEnQFU]",
            id: 2,
            artist: "NoCopyrightSounds",
            runtime: "2:09",
          },
          // Add more mocked songs as needed
        ],
      },
    });

    render(
      <MemoryRouter>
        <Game
          selectedGenre={"Bass"}
          selectedDifficulty={"Medium"}
          score={0}
          setScore={() => {}}
        />
      </MemoryRouter>
    );

    await waitFor(async () => {
      // Perform user action (clicking on "Incorrect Answer" button)
      await userEvent.click(screen.getByText("Incorrect Answer"));

      // Wait for the strikes to appear on the screen
      const strikes = await screen.findAllByTestId("strike");

      // Assert the number of strikes
      expect(strikes.length).toBe(1);
    });
  });

  it("navigates to the home page if genre or difficulty is not selected", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: songs,
    });

    const mockNavigate = jest.fn();
    jest.mock("react-router", () => ({
      ...jest.requireActual("react-router"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Game
          selectedGenre={null}
          selectedDifficulty={null}
          score={0}
          setScore={() => {}}
        />
      </MemoryRouter>
    );

    expect(window.location.pathname).toBe("/");
  });
});
