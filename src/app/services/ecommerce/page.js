"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EcommerceRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/services/eComerce");
  }, [router]);
  return null;
}
