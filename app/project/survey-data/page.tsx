import React from "react";
import SurveyDataClient from "./SurveyDataClient";

export const metadata = {
  title: "Survey Telemetry Database | Xyberox Robotics",
  description: "Operational analysis of autonomous security systems feasibility, feature priorities, and communication denial protocols across high-security environments.",
};

export default function SurveyDataPage() {
  return <SurveyDataClient />;
}
