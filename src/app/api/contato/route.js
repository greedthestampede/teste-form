import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json(data);
}