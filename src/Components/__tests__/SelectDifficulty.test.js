import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import { MemoryRouter } from 'react-router';
import SelectDifficulty from '../SelectDifficulty/SelectDifficulty';
import userEvent from '@testing-library/user-event';

describe('SelectDifficulty component', () => {
    it('should navigate to the correct route when Easy button is clicked', async () => {
        const setSelectedDifficultyMock = jest.fn();
        render(
          <MemoryRouter>
            <SelectDifficulty setSelectedDifficulty={setSelectedDifficultyMock} />
          </MemoryRouter>
        );
    
        const easyButton = screen.getByText('Easy');
        await act(async () => {
          await userEvent.click(easyButton);
        });
    
        expect(setSelectedDifficultyMock).toHaveBeenCalledWith('Easy');
      });

  it('should navigate to the correct route when Medium button is clicked', async () => {
    const setSelectedDifficultyMock = jest.fn();
    render(
        <MemoryRouter>
            <SelectDifficulty setSelectedDifficulty={setSelectedDifficultyMock} />
        </MemoryRouter>
      );

      await act(async () => {
        const mediumButton = screen.getByText('Medium');
        // Simulate a click on the button using userEvent
        await userEvent.click(mediumButton);
      })

    expect(setSelectedDifficultyMock).toHaveBeenCalledWith('Medium');
  });

  it('should navigate to the correct route when Hard button is clicked', async () => {
    const setSelectedDifficultyMock = jest.fn();
    render(
        <MemoryRouter>
            <SelectDifficulty setSelectedDifficulty={setSelectedDifficultyMock} />
        </MemoryRouter>
      );

    const hardButton = screen.getByText('Hard');
    await act(async () => {
        // Simulate a click on the button using userEvent
        await userEvent.click(hardButton);
      })

    expect(setSelectedDifficultyMock).toHaveBeenCalledWith('Hard');
  });
});
