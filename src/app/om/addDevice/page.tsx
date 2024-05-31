"use client";

import DeviceForm from "@/app/components/DeviceForm";
import Header from "@/app/components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function AddOffice() {

  return (
    <Suspense fallback={<CircularProgress></CircularProgress>}><Header></Header><DeviceForm></DeviceForm></Suspense>
  );
}
