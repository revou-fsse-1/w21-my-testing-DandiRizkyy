"use server";

import { cookies } from "next/headers";

export async function createCookie(response: any) {
  // cookies().set("name", "lee");
  // // or
  cookies().set("token", response, { secure: true });
}
