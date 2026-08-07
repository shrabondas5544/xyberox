import React from "react";
import MemberResultsClient from "../MemberResultsClient";

export const metadata = {
  title: "Member Results & Research Submissions | Xyberox Robotics",
  description: "Member research submission portfolio featuring Video Demonstration, Video Presentation, Final Report Submission (IEEE Format), and IEEE & Springer papers.",
};

export default function MemberSlugPage({ params }: { params: { memberSlug: string } }) {
  return <MemberResultsClient memberSlug={params.memberSlug} />;
}
