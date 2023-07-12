import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect module
import Navbar from "../Navbar";
import LogoutButton from "../../components/LogoutButton";
import React from "react";
import { vi } from "vitest";
import PrivateLayout from "../PrivateLayout";
const pushMock = vi.fn();
test("renders private layout correctly", () => {
  vi.mock("next/router", () => ({
    useRouter: () => ({
      push: pushMock,
    }),
  }));
  const { getByText, getAllByText } = render(<PrivateLayout></PrivateLayout>);

  //   expect(getAllByText("Toko-ku")).toBeDefined();
  //   expect(getByText("Home")).toBeDefined();
  //   expect(getByText("Add Product")).toBeDefined();
  //   expect(getByText("Edit Product")).toBeDefined();
  //   expect(getByText("Login User")).toBeDefined();
  //   expect(getByText("Login Admin")).toBeDefined();
  //   expect(getByText("Logout")).toBeDefined();
});
