import { render, fireEvent } from "@testing-library/react";
import jest from "jest";
import { vi, test, expect } from "vitest";
import LogoutButton from "../LogoutButton";
import React from "react";
import { useRouter } from "next/router";
const pushMock = vi.fn();
test("calls router with correct path", () => {
  vi.mock("next/router", () => ({
    useRouter: () => ({
      push: pushMock,
    }),
  }));

  const { getByText } = render(<LogoutButton />);
  fireEvent.click(getByText("Logout"));

  expect(pushMock).toHaveBeenCalledWith("/");
});
