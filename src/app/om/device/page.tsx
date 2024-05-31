"use client";

import DeviceDashboard from "@/app/components/DeviceDashboard";
import { Suspense } from "react";
export default function Office() {

  return (
    <Suspense>
      <DeviceDashboard></DeviceDashboard>
    </Suspense>
  );
}
