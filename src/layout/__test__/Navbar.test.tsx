import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect module
import Navbar from "../Navbar";
import LogoutButton from "@/components/LogoutButton";
import React from "react";

test("renders navbar correctly", () => {
  const { getByText } = render(
    <Navbar>
      <LogoutButton />
    </Navbar>
  );

  expect(getByText("Toko-ku")).toBeDefined();
  expect(getByText("Home")).toBeDefined();
});
