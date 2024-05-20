"use client";

import Dashboard from "@/app/components/Dashboard";
import { Suspense, useEffect, useState } from "react";

export default function CompanyHome() {

  return (
    <>
    <Suspense><Dashboard></Dashboard></Suspense>

    </>
  );
}
