import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect module

import React, { Children } from "react";
import { vi } from "vitest";
import Login from "../login";
import RegisterAdmin from "../register-admin";

const pushMock = vi.fn();
test("renders register admin correctly", () => {
  vi.mock("next/router", () => ({
    useRouter: () => ({
      push: pushMock,
    }),
  }));
  const { getByText } = render(<RegisterAdmin />);

  expect(getByText("Login")).toBeDefined();
  expect(getByText("Register")).toBeDefined();
  expect(getByText("Enter Your Password")).toBeDefined();
  expect(getByText("Already have an account ?")).toBeDefined();
});
