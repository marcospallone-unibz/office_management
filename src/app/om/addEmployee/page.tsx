"use client";

import EmployeeForm from "@/app/components/EmployeeForm";
import Header from "@/app/components/Header";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function AddOffice() {

  return (
    <Suspense fallback={<CircularProgress></CircularProgress>}>
      <Header></Header>
      <EmployeeForm></EmployeeForm>
    </Suspense>
  );
}
