"use client";

import Dashboard from "@/app/components/Dashboard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CompanyHome() {

  const pathname = usePathname()
  const searchParams = useSearchParams()
    const [token, setToken] = useState('')

    useEffect(() => {
        console.log(pathname, searchParams)
    }, [pathname, searchParams])

  return (
    <>
      <Dashboard data={null}></Dashboard>
    </>
  );
}
