"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router]);

  return <div className="m-[20px] text-[20px]">In Development...</div>;
};

export default NotFound;
