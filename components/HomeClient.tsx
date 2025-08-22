"use client";

import type React from "react";
import { ProjectStructuredData } from "@/components/StructuredData";

export default function HomeClient(): React.JSX.Element {
  return (
    <>
      <ProjectStructuredData projects={[]} />
      <div>Home Client Component</div>
    </>
  );
}
