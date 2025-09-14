"use client";
import { useParams } from "next/navigation";
import Navbar from "../navbar";

export default function CommonLayout({ children }) {
  const pathName = useParams();
  return (
    <>
      {pathName !== "admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
