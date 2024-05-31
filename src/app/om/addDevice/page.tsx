"use client";

import DeviceForm from "@/app/components/DeviceForm";
import { useSearchParams } from "next/navigation";


export default function AddOffice() {

  const searchParams = useSearchParams()

  return (
    <DeviceForm officeID={Number(searchParams.get('officeID'))}></DeviceForm>
  );
}
