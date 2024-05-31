"use client";

import OfficeForm from "@/app/components/OfficeForm";
import { Suspense } from "react";

export default function AddOffice() {

  return (
    <Suspense><OfficeForm></OfficeForm></Suspense>
  );
}
