import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Acordion from "./Acordion";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("Acordion", () => {
  beforeEach(() => {
    render(<Acordion />);
  });
  test("Deberia de renderizar el componente", () => {
    expect(screen.getByTestId("contenedor")).toBeDefined();
  });

  test("No se deberia de mostrar el contenido", () => {
    expect(screen.queryByTestId("contenedor-contenido")).toBeNull();
  });

  test("Se deberia de mostrar el contenido al hacer click en el boton", () => {
    // Selecciona el boton del componente
    const boton = screen.getByText(/mostrar/i);
    // Le hace click
    fireEvent.click(boton);
    // Se deberia de mostrar el contenido
    expect(screen.getByTestId("contenedor-contenido")).toBeDefined();
  });

  test("No se deberia de mostrar el contenido al hacer doble click en el boton", () => {
    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByTestId("contenedor-contenido")).toBeNull();
  });

  test("Deberia de agregarle un placeholder al input", async () => {
    const usuario = userEvent.setup({ delay: 500 });
    const input = screen.getByPlaceholderText(/Escribe aquí tu texto/i);

    await usuario.type(input, "Hola");
    expect(input).toHaveValue("Hola");
  });
});
