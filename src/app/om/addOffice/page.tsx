"use client";

import OfficeForm from "@/app/components/OfficeForm";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function AddOffice() {

  return (
    <Suspense fallback={<CircularProgress></CircularProgress>}><OfficeForm></OfficeForm></Suspense>
  );
}
