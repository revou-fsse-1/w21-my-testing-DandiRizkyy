// import { render, fireEvent } from "@testing-library/react";
// import jest from "jest";
// import { vi, test, expect } from "vitest";
// import AddProduct from "../add-product";
// import React from "react";
// import { useRouter } from "next/router";
// import PrivateLayout from "@/layout/PrivateLayout";
// const pushMock = vi.fn();
// test("calls router with correct path", () => {
//   vi.mock("next/router", () => ({
//     useRouter: () => ({
//       push: pushMock,
//     }),
//   }));

//   const { getByText } = render(
//     <PrivateLayout>
//       <AddProduct />
//     </PrivateLayout>
//   );
//   fireEvent.click(getByText("Submit Product"));

//   expect(pushMock).toHaveBeenCalledWith("/");
// });
