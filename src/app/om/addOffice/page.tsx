"use client";

import Header from "@/app/components/Header";
import OfficeForm from "@/app/components/OfficeForm";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function AddOffice() {

  return (
    <Suspense fallback={<CircularProgress></CircularProgress>}>
      <Header></Header>
      <OfficeForm></OfficeForm>
      </Suspense>
  );
}
