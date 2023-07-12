import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect module

import React, { Children } from "react";
import { vi } from "vitest";
import Login from "../login";

const pushMock = vi.fn();
test("renders login user correctly", () => {
  vi.mock("next/router", () => ({
    useRouter: () => ({
      push: pushMock,
    }),
  }));
  const { getByText, getAllByText } = render(<Login />);

  expect(getByText("Login")).toBeDefined();
  expect(getByText("Register")).toBeDefined();
  expect(getByText("Enter Your Password")).toBeDefined();
  expect(getByText("Don`t have an account ?")).toBeDefined();
});
