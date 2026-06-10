import React from "react";
import WeeklyUpdatesClient from "./WeeklyUpdatesClient";

export const metadata = {
  title: "Weekly Updates & Project Timeline | Xyberox Robotics",
  description: "Operational timeline, project milestones, and weekly progress updates for the Project Aegis autonomous systems initiative.",
};

export default function WeeklyUpdatesPage() {
  return <WeeklyUpdatesClient />;
}
