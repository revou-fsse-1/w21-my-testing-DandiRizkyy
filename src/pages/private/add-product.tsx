import PrivateLayout from "@/layout/PrivateLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FormProps, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface ProductProps {
  title: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
}

export function AddProduct() {
  const router = useRouter();

  const schema = yup
    .object({
      title: yup.string().required("Title is required"),
      description: yup.string().required("Description is required"),
      price: yup.number().required("Price is required"),
      quantity: yup.number().required("Quantity is required"),
      categories: yup.string().required("Categories is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ProductProps> = async (data, event: any) => {
    event.preventDefault();
    const token = getCookie("token"); // - client side
    await axios.post(
      "https://w17-our-backend-group-c-production.up.railway.app/products",
      {
        title: data.title,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        categories: data.categories,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    router.push("/");
  };

  return (
    <div>
      <div className="p-56">
        <div className="flex w-[500px]  flex-col space-y-5 rounded-lg border py-20 px-5 shadow-xl mx-auto">
          <div className="mx-auto mb-2 space-y-3">
            <h1 className=" text-3xl font-bold text-gray-700">Add Product</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="text"
                  {...register("title")} // Register email input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Title{" "}
                </label>
              </div>
            </div>
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="description"
                  {...register("description")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="description"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Description
                </label>
              </div>
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="number"
                  id="price"
                  {...register("price")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="price"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Price
                </label>
              </div>
            </div>
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="quantity"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Quantity
                </label>
              </div>
            </div>
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="categories"
                  {...register("categories")} // Register password input
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="categories"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                >
                  {" "}
                  Categories
                </label>
              </div>
            </div>
            {errors.categories && (
              <p className="text-red-500 text-sm">
                {errors.categories.message}
              </p>
            )}

            <div className="z-50 text-center mt-3">
              <button
                className="rounded-lg z-30 bg-blue-600 hover:bg-blue-500 px-32 py-4 font-bold text-lg text-white"
                type="submit"
              >
                Submit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const PrivateAddProduct = () => {
  //   const [productData, setProductData] = useState([]);
  //   useEffect(() => {
  //     const token = getCookie("token"); // - client side
  //     if (token) {
  //       fetchData(token);
  //     }
  //   }, []);

  //   const fetchData = async (token: string | true) => {
  //     try {
  //       const response = await axios.post(
  //         "https://w17-our-backend-group-c-production.up.railway.app/products",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );
  //       const initialData = response.data;
  //       setProductData(initialData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  return (
    <PrivateLayout>
      <AddProduct />
    </PrivateLayout>
  );
};

export default PrivateAddProduct;
