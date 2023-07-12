import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect module

import React, { Children } from "react";
import { vi } from "vitest";
import Product from "../../components/Product/ProductCard";

const pushMock = vi.fn();
test("renders index correctly", () => {
  vi.mock("next/router", () => ({
    useRouter: () => ({
      push: pushMock,
    }),
  }));
  const { getByText, getAllByText } = render(
    <Product data={[]} error={false} isLoading={false} />
  );

  //   expect(getAllByText("Toko-ku")).toBeDefined();
  // expect(getByText("Home")).toBeDefined();
  // expect(getByText("Add Product")).toBeDefined();
  // expect(getByText("Edit Product")).toBeDefined();
  // expect(getByText("Login User")).toBeDefined();
  // expect(getByText("Login Admin")).toBeDefined();
  // expect(getByText("Logout")).toBeDefined();
});
