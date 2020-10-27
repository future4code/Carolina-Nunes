import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Funcionalidade adicionar tarefa", () => {
  test("tarefa é incluída no local", () => {
    const { getByText } = render(<App />);

    const addButton = getByText(/CRIAR TAREFA/i);

    fireEvent.click(addButton);

    const textoPlanner = getByText(/Planner/);

    expect(textoPlanner).toHaveTextContent("");
  });
});