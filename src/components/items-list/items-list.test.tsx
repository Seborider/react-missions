jest.mock("../../services/items-api/items-api-service");

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemsList from "./items-list";
import { fetchItems } from "../../services/items-api/items-api-service";
import { act } from "react-dom/test-utils";
describe("ItemsList component", () => {
  let promise: Promise<{ id: string; label: string }[]>;

  beforeEach(() => {
    jest.clearAllMocks();

    promise = Promise.resolve([{ id: "1", label: "Item 1" }]);

    (fetchItems as jest.Mock).mockReturnValue(promise);
  });

  test("fetches and renders items", async () => {
    act(() => {
      render(<ItemsList count={0} onIncrement={() => {}} />);
    });

    await act(() => promise);

    expect(screen.getByText(/Item 1 with ID: 1/)).toBeInTheDocument();
  });

  test("displays the correct click count message", async () => {
    act(() => {
      render(<ItemsList count={3} onIncrement={() => {}} />);
    });

    await act(() => promise);

    const message = screen.getByText("3 Times clicked");
    expect(message).toBeInTheDocument();
  });

  test("button click calls onIncrement", async () => {
    const handleIncrement = jest.fn();

    act(() => {
      render(<ItemsList count={0} onIncrement={handleIncrement} />);
    });

    await act(() => promise);

    fireEvent.click(screen.getByText("Click here"));

    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
});
