"use client"; // Mark as Client Component

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get current route
  const isServicesPage = pathname === "/services"; // Check if it's Services page

  return (
    <div className={`flex flex-col min-h-screen ${isServicesPage ? "pt-20" : ""}`}>
      {children}
    </div>
  );
}
