import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-3xl h-full xs:mx-7 overflow-y">{children}</div>;
}
