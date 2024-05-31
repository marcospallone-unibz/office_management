"use client";

import DeviceDashboard from "@/app/components/DeviceDashboard";
import Header from "@/app/components/Header";
import { Suspense } from "react";
export default function Office() {

  return (
    <Suspense>
      <Header></Header>
      <DeviceDashboard></DeviceDashboard>
    </Suspense>
  );
}
