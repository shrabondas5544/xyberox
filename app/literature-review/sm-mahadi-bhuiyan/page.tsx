import React from "react";
import SMMahadiBhuiyanReviewClient from "./SMMahadiBhuiyanReviewClient";

export const metadata = {
  title: "SM Mahadi Bhuiyan - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by SM Mahadi Bhuiyan focusing on cross-cultural human-robot interaction, educational robotics, and collaborative robotic painting systems.",
};

const papers = [
  {
    title: "“Which Country Are You from?” A Cross-Cultural Study on Greeting Interaction Design for Social Robots",
    year: "2024",
    venue: "HCI / Cross-Cultural Study",
    doi: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4U9RcZAAAAAJ&citation_for_view=4U9RcZAAAAAJ:UebtZRa9Y70C",
    summary: "They actually do some experiment to get result from human robot greetings in diffrent cultural way.",
    description: "Explores greeting designs for social robots by testing user responses across different cultural backgrounds. Focuses on physical gestures, linguistic patterns, and proximity configurations during human-robot greetings.",
    comparison: "The study measures social robot greetings in safe, welcoming human-robot interaction environments, whereas Project Aegis requires zero-greeting, absolute silence, and threat evasion protocols to bypass human detection in tactical scenarios.",
    objectives: "To evaluate the impact of cultural background on user perceptions of social robot greeting behaviors, defining design parameters for culturally adaptive greetings.",
    gaps: [
      "Context-Specific Bias: Research focuses on social, domestic, or office environments and lacks applicability to high-stress, hostile, or tactical situations.",
      "Restricted Modalities: Mainly evaluates speech and standard arm gestures, omitting dynamic tactical movement or non-verbal security signals.",
      "Small Cultural Cohort: Focuses on a small set of regions, leaving wider global cultural responses underexplored."
    ],
    questions: [
      "RQ1: How do users from different cultural backgrounds perceive various verbal and non-verbal robotic greetings?",
      "RQ2: What interaction modalities (gestures, voice, proximity) are most effective for building trust in social human-robot encounters?",
      "RQ3: Can greeting adaptivity improve overall user satisfaction with social robot systems?"
    ]
  },
  {
    title: "Design and Development of a Low-Cost Voice Interactive Children Educational Robot ‘TINY’ with Natural Language Processing",
    year: "2023",
    venue: "Educational Robotics",
    doi: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4U9RcZAAAAAJ&cstart=20&pagesize=80&citation_for_view=4U9RcZAAAAAJ:GnPB-g6toBAC",
    summary: "Use of small robot in children education beterment.",
    description: "Focuses on building an affordable learning assistant robot for children, utilizing lightweight local NLP modules to understand and reply to children's educational queries.",
    comparison: "'TINY' is designed to engage children through educational games and friendly dialogue in safe domestic/classroom environments, while Project Aegis deploys local, quantized NLP models for offline command interpretation, security handshakes, and system diagnostic logs in high-risk zones.",
    objectives: "To engineer an affordable, voice-interactive educational companion robot that makes language learning and basic education engaging for children.",
    gaps: [
      "Localized Processing Limits: Limited vocabulary and offline query handling capability on small processor nodes.",
      "Acoustic Interference: High error rates in NLP parsing when operating in noisy, ambient classrooms or outdoor environments.",
      "Limited Adaptability: The interactive framework is optimized for basic educational games and cannot adapt to generic commands or complex operational instructions."
    ],
    questions: [
      "RQ1: How does a low-cost voice-interactive companion robot impact children's engagement in early education?",
      "RQ2: What NLP model configurations are optimal for low-power hardware in educational assistant platforms?",
      "RQ3: How does speech recognition accuracy vary based on child vocal characteristics in classroom settings?"
    ]
  },
  {
    title: "Can a Robot Collaborate with Alpana Artists? A Concept Design of an Alpana Painting Robot",
    year: "2024",
    venue: "Artistic & Collaborative Robotics",
    doi: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4U9RcZAAAAAJ&citation_for_view=4U9RcZAAAAAJ:UebtZRa9Y70C",
    summary: "Painter can be benefirred from roboot helper and make easyt to make alpona and can help for be more productive",
    description: "Explores collaborative path planning, high-precision motor control, and image processing to enable a robot to trace, scale, and paint traditional Alpana patterns under the guidance of a human artist.",
    comparison: "The Alpana robot focuses on collaborative art rendering, paint dispensing, and artistic coordinate mapping under direct human observation, whereas Project Aegis's path planning stack is dedicated to tactical navigation, stealth mapping, and target identification in dynamic, unmapped, hostile territories.",
    objectives: "To develop a collaborative robotic design capable of rendering traditional Alpana art forms in collaboration with human painters to enhance productivity.",
    gaps: [
      "Art Style Translation: Hard to translate fluid, freehand artistic strokes into rigid, programmed robotic coordinates without losing visual authenticity.",
      "Paint/Surface Compatibility: Path-planning struggles when painting on uneven, dirty, or textured dynamic surfaces.",
      "Sensor Calibration: High sensitivity to ambient lighting when using camera systems to calibrate painted coordinates in real-time."
    ],
    questions: [
      "RQ1: How can robotic path-planning algorithms translate traditional Alpana geometric art into smooth mechanical trajectories?",
      "RQ2: What collaborative design framework is most effective for human-machine co-creation in traditional painting forms?",
      "RQ3: How does robotic assistance affect the productivity and accuracy of Alpana artists during large-scale installations?"
    ]
  }
];

export default function SMMahadiBhuiyanReviewPage() {
  return <SMMahadiBhuiyanReviewClient papers={papers} />;
}
