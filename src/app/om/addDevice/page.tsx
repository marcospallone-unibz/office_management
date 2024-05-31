"use client";

import DeviceForm from "@/app/components/DeviceForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function AddOffice() {

  const searchParams = useSearchParams()

  return (
    <Suspense><DeviceForm officeID={Number(searchParams.get('officeID'))}></DeviceForm></Suspense>
  );
}
