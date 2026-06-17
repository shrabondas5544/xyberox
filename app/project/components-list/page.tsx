import React from "react";
import ComponentsListClient from "./ComponentsListClient";

export const metadata = {
  title: "Components List | Xyberox Robotics",
  description: "Detailed registry of processing units, HRI subsystems, power distribution, and navigation sensors for the Xyberox autonomous platform.",
};

export default function ComponentsListPage() {
  return <ComponentsListClient />;
}
