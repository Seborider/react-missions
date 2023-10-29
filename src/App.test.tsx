import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("renders App with ItemsList component", async () => {
    render(<App />);
    const button = screen.getByText(/click here/i);
    expect(button).toBeInTheDocument();

    await waitFor(() => screen.getByText(/Times clicked/));
  });

  test("clicking button in ItemsList increases count", async () => {
    render(<App />);

    const button = screen.getByText(/click here/i);

    expect(screen.getByText("0 Times clicked")).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(button);
    });

    expect(screen.getByText("1 Times clicked")).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(button);
    });

    expect(screen.getByText("2 Times clicked")).toBeInTheDocument();
  });
});
