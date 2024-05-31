"use client";

import Header from "@/app/components/Header";
import OfficeDashboard from "@/app/components/OfficeDashboard";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function Office() {

  return (
    <Suspense fallback={<CircularProgress></CircularProgress>}><Header></Header><OfficeDashboard></OfficeDashboard></Suspense>
  );
}
