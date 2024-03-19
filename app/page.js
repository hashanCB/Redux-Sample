"use client";
import { Counter } from "./Counter";
import DataFetcher from "./DataFetcher";

export default function Home() {
  return (
    <>
      <Counter />
      <DataFetcher />
    </>
  );
}
