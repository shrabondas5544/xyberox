import React from "react";
import ShrabonDasReviewClient from "./ShrabonDasReviewClient";

export const metadata = {
  title: "Shrabon Das - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by Shrabon Das focusing on testing methodologies for autonomous systems, ground reconnaissance rovers, HRI emotional interaction, multi-face emotion recognition, and deep learning-based sentiment classification.",
};

const papers = [
  {
    title: "Testing, Validation, and Verification of Robotic and Autonomous Systems: A Systematic Review",
    year: "2023",
    venue: "ACM Transactions on Software Engineering and Methodology",
    doi: "https://doi.org/10.1145/3542945",
    summary: "To perform a systematic literature review on testing, validation, and verification of robotic and autonomous systems (RAS) covering peer-reviewed research papers proposing, improving, or evaluating testing techniques, processes, or tools that address system-level qualities of RAS. The review aims to: (1) Answer four research questions about models, measures, tools, and industrial applicability, (2) Analyze coding results to identify strengths and gaps, (3) Present recommendations to researchers and practitioners.",
    description: "The authors synthesize the state-of-the-art in autonomous system validation by analyzing over 20 years of research.\n\n- Model-Based Testing: Temporal logics are the most widely used format for specifying properties/requirements, whereas state-machines or transition systems represent the primary model for system behavior.\n- Quality Assessment Limits: Many papers lack any rigorous measure of efficiency, effectiveness, or adequacy for their proposed testing techniques.\n- Domain Specificity Gaps: Majority of researchers employ generic domain-agnostic performance metrics (failures detected, verification time, state-space size) rather than developing domain-specific safety and performance measures.",
    comparison: "This paper acts as a direct software quality guideline for Project Aegis. Since RAS verification lacks consolidated benchmarks, Aegis implements strict simulation testing in Gazebo, tracking both physical collision boundaries and logic-state transitions (sensor failures, communications loss) to guarantee dynamic stability before actual hardware runs.",
    objectives: "To compile, categorize, and critique the models, measures, and tools used for verification and validation of autonomous robotic systems, identifying research gaps and recommending standardized testing methodologies.",
    gaps: [
      "No Comprehensive Survey: Prior to this study, no systematic review explored the full breadth of RAS verification results.",
      "Lack of Rigorous Metrics: Proposed tools and methodologies frequently omit empirical evaluations of testing adequacy or efficiency.",
      "Domain-Agnostic Focus: The metrics used are generic (e.g., execution speed) and fail to capture robot-specific behaviors like kinematic drift or obstacle proximity profiles.",
      "Standardization Deficits: There are no widely-accepted, consolidated benchmarks for testing autonomous systems in differing physical settings."
    ],
    questions: [
      "RQ1: What types of models are most suitable for specifying requirements and testing behavior in robotic systems?",
      "RQ2: What measures are utilized to assess system performance and testing adequacy in RAS?",
      "RQ3: What validation tools are currently available, and what are their limitations regarding accessibility?"
    ]
  },
  {
    title: "A Comprehensive Review on Ground Reconnaissance Robots for Autonomous Operation in Dangerous Disaster Environments",
    year: "2026",
    venue: "IEEE Access",
    doi: "https://doi.org/10.1109/ACCESS.2026.3660002",
    summary: "Review latest ground reconnaissance robots using CV, ML, MCU-based control, LoRa communication, DC motors, and system architecture for autonomous operation in dangerous disaster environments.",
    description: "Evaluates the design paradigms and integration of multi-sensory ground rovers for search-and-rescue. Analyzes the optimization of Long Range (LoRa) telemetry links, power consumption models for motor drivers, and low-latency deep learning inference for obstacle classification on edge controllers.",
    comparison: "Directly maps to Project Aegis's core system architecture. While the paper outlines generic reconnaissance architectures, Aegis refines these layers by combining ROS2 middleware, high-precision LiDAR mapping, and hardware-isolated security payloads to function reliably in dynamic, non-permissive spaces.",
    objectives: "To review the state-of-the-art ground rovers, focusing on hardware-software interfaces, LoRa remote links, and ML-driven navigation under disaster-zone operational constraints.",
    gaps: [
      "Limited Architectural Analysis: Most publications describe specific custom rover builds but lack a unified, reusable model of system components.",
      "Sensor Fusion Bottlenecks: Dynamic bandwidth allocation between heavy computer vision frames and low-rate telemetry commands (LoRa) is poorly documented.",
      "Locomotion Reliability: Power spikes during high-load traversals on rough terrain frequently cause MCU dropouts or sensor disconnects."
    ],
    questions: [
      "RQ1: What are the core modules required for robust sensor interfacing, autonomous navigation, and remote communication?",
      "RQ2: How does telemetry and control data flow from physical hardware to cognitive decision-making algorithms on-board?",
      "RQ3: What system architectures enable ground rovers to maintain autonomous navigation when communication links fail?"
    ]
  },
  {
    title: "Survey of Emotions in Human–Robot Interactions: Perspectives from Robotic Psychology on 20 Years of Research",
    year: "2021",
    venue: "International Journal of Social Robotics",
    doi: "https://doi.org/10.1007/s12369-021-00778-6",
    summary: "To perform a systematic review of state-of-the-art research into humans' recognition and responses to artificial emotions of social robots during HRI. The review advances robotic psychology by revealing current knowledge about: (1) generation of artificial robotic emotions (stimulus), (2) human recognition of robotic artificial emotions (organism), and (3) human responses to robotic emotions (response), as well as (4) other contingencies that affect emotions as modators. The review synthesizes research knowledge pertaining to emotions during HRI with social robots.",
    description: "The author consolidates two decades of research (over 1,600 papers) through the lens of robotic psychology.\n\n- Stimulus-Organism-Response (SOR): Establishes a psychological framework to evaluate how robots generate artificial signals, how humans process these stimuli, and the subsequent behavioral outcomes.\n- Domain Fragmentation: Highlights that HRI research remains highly fragmented across engineering, psychology, and cognitive science, hindering collective progress.\n- Emotional Expression Modalities: Surveys physical face mechanics, screen graphics, dynamic LED colors, and vocal synthesizers used to represent artificial feelings.",
    comparison: "Unlike social companion robots that use emotional expressions to build trust and affinity, Project Aegis operates under a covert tactical paradigm. Instead of displaying robotic feelings to encourage human interaction, Aegis is designed for zero-expressive physical stealth, ensuring its operations remain undetected by humans in tactical security zones.",
    objectives: "To map the literature on artificial robotic emotions, establishing a unified SOR framework to analyze human-robot emotional encounters and emotional expression generation.",
    gaps: [
      "Fragmented Literature: The interdisciplinary nature of HRI has isolated research findings, making it difficult to assess collective evidence.",
      "Lack of Systematic Frameworks: Prior reviews lacked a psychological structure (like SOR) to trace the exact input-to-output emotional pathway.",
      "Contextual Over-Simplification: Research concentrates on safe home or clinic environments and lacks testing in stressful, urgent, or high-threat human-robot scenarios."
    ],
    questions: [
      "RQ1: What methods have been applied for robotic emotional expression generation?",
      "RQ2: How well can robotic artificial emotions be recognized by humans?",
      "RQ3: How do humans respond to artificial robotic emotions?"
    ]
  },
  {
    title: "Multi-face emotion detection for effective Human-Robot Interaction",
    year: "2025",
    venue: "arXiv / ICAART 2025 Proceedings",
    doi: "https://doi.org/10.48550/arXiv.2501.07213",
    summary: "To propose a facial emotion detection interface integrated into a mobile humanoid robot, capable of displaying real-time emotions from multiple individuals on a user interface. The research aims to: (1) Develop and evaluate various deep neural network models for facial expression recognition under consistent computer-based conditions, (2) Find trade-off between accuracy and memory footprint to effectively implement on mobile humanoid robot, (3) Enhance human-robot interaction by enabling robots to understand human intentions through emotion recognition.",
    description: "Presents a multi-user facial emotion recognition (FER) interface deployed on the Tiago++ humanoid robot using the ROS framework.\n\n- Model Comparisons: Benchmarks deep learning structures (MobileNet, ResNet152V2, EfficientNetV2-B0) to identify models that offer high classification precision while fitting inside low-capacity edge processors.\n- Group Interactions: Expands classical single-face tracking to capture and evaluate emotional matrices from multiple individuals in the robot's field of view simultaneously.",
    comparison: "Project Aegis utilizes the core multi-face tracking and edge-AI logic detailed in this paper. However, instead of identifying human emotions to improve conversational HRI, Aegis adapts these vision algorithms to perform threat assessment, analyzing groups of individuals for spatial alerts, alert profiles, and suspicious indicators in secure environments.",
    objectives: "To design a multi-user facial emotion detection system optimized for real-time edge processing on humanoid robots to improve interaction capabilities.",
    gaps: [
      "Single-Face Limitations: Most conventional FER applications are restricted to single-face recognition and fail during group dynamics.",
      "Resource Constraints: Deep FER structures require high-end GPUs, making direct, unquantized edge deployment on mobile robots impractical.",
      "Interface Synchronization: Existing platforms lack a unified middleware (such as ROS) pipeline to track, label, and display multi-user emotional metrics in real time."
    ],
    questions: [
      "RQ1: How can multiple faces be detected simultaneously for real-time emotion recognition?",
      "RQ2: Which deep neural network model provides the best balance between accuracy and memory footprint for mobile robot deployment?",
      "RQ3: How can the emotion detection interface be effectively integrated into a humanoid robot (e.g., Tiago++) under the ROS framework?"
    ]
  },
  {
    title: "Smart Floor Cleaning Robot",
    year: "2023",
    venue: "IEEE Region 10 Symposium (TENSYMP)",
    doi: "https://doi.org/10.1109/TENSYMP55890.2023.10223665",
    summary: "To create a smart floor cleaning robot that can clean home floors automatically and be sufficient for day-to-day life cleaning needs.",
    description: "Details the mechanical integration and microcontroller programming for an autonomous vacuum cleaner. Implements collision avoidance sensors, path traversal algorithms, and power management modules to maintain continuous floor cleaning operations in domestic spaces.",
    comparison: "This paper highlights the basic navigation and mechanical control needs for indoor platforms. While home-cleaning robots use simple bumper sensors and heuristic path-sweeping algorithms, Aegis implements full SLAM (Simultaneous Localization and Mapping), LiDAR depth sweeps, and dynamic navigation stack (Nav2) controls to handle complex, unmapped, and cluttered surroundings.",
    objectives: "To design and implement a cost-efficient floor cleaning robot with automatic area traversal and vacuum activation capabilities.",
    gaps: [
      "Heuristic Traversal: Relies on simple randomized or wall-following navigation patterns rather than full spatial mapping.",
      "Limited Area Automation: Struggles to navigate across varying terrain heights or complex obstacles.",
      "No Remote Supervision: Lacks network links to stream telemetry status or receive target-zone adjustments."
    ],
    questions: [
      "RQ1: How can a robot be designed to clean home floors automatically for day-to-day life?",
      "RQ2: What intelligent programming methods enable robots to clean specific areas through a vacuum cleaning assembly?",
      "RQ3: How can robotic vacuum cleaners be intelligently programmed to navigate and clean specific areas?"
    ]
  },
  {
    title: "Sentiment Analysis with Deep Learning Methods for Performance Assessment and Comparison",
    year: "2024",
    venue: "International Conference on Image Processing and Robotics (ICIPRoB)",
    doi: "https://doi.org/10.1109/ICIPRoB62548.2024.10544219",
    summary: "Evaluates deep learning techniques—specifically Simple Neural Networks (SNN), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN)—on the IMDb dataset for binary sentiment classification, analyzing performance metrics and training efficiencies.",
    description: "Compares three model architectures for sentiment scoring. The study reveals that the Recurrent Neural Network (RNN) achieves the highest classification accuracy at 86.46%, followed by CNN at 85.79%, while the baseline SNN trails at 74.99%. Discusses embedding dimensions, dropout parameters, and epoch convergence behaviors.",
    comparison: "While the paper evaluates sentiment on standard movie databases (IMDb) using generic SNN/CNN/RNN architectures, Project Aegis utilizes lightweight transformer networks (like quantized BERT models) on edge computers to analyze raw textual telemetry streams and remote terminal inputs, adapting operational security configurations in real time.",
    objectives: "To compare the accuracy and computational efficiency of SNN, CNN, and RNN models for text sentiment analysis.",
    gaps: [
      "Basic RNN Latency: Standard recurrent structures suffer from sequential bottlenecks and cannot process high-speed real-time packet data.",
      "Univariate Focus: Evaluates only written reviews and ignores multi-modal emotional indicators (e.g., vocal tone, facial expressions).",
      "Offline Limitations: Models are designed for batch database runs and lack streaming/online adaptation algorithms."
    ],
    questions: [
      "RQ1: What neural network layers are most effective for processing semantic embeddings under memory constraints?",
      "RQ2: How does training dataset domain bias affect model performance when classifying technical commands?",
      "RQ3: What is the inference execution speed trade-off between CNNs and RNNs on edge CPU nodes?"
    ]
  },
  {
    title: "Computer Vision Based on Raspberry Pi System",
    year: "2020",
    venue: "Applied Computer Science",
    doi: "https://www.semanticscholar.org/paper/COMPUTER-VISION-BASED-ON-RASPBERRY-PI-SYSTEM-Abdulhamid-Odondi/c78b8b249b37168fecce223fdff100d3c02c939c",
    summary: "To design and develop a compact, low-power embedded vision platform leveraging a Raspberry Pi core and a CSI camera module capable of running localized algorithms to track, identify, and count targets within an environment. The study evaluates edge processing capacity, quantifies detection parameters, and optimizes resource bottlenecks on resource-constrained computing hardware.",
    description: "The authors document a highly streamlined edge-computing architecture optimized for real-time localized video analysis.\n\n- High-Accuracy Efficiency: The custom testing setup achieved an average object tracking accuracy of 90.206%, proving that resource-limited computing units can maintain solid prediction rates.\n- Bus Optimization: Utilizing a direct native CSI camera ribbon bus rather than standard USB interfaces significantly reduces data packet transmission latency.\n- Processing Bottlenecks: Standard full-scale deep architectures cause intensive CPU choking, reinforcing the absolute necessity for lightweight, specialized scripts or edge-optimized model formats.",
    comparison: "This paper serves as the fundamental validation baseline for Xyberox's machine vision subsystem. While the authors rely on standard processing code, Xyberox upgrades this implementation by deploying a multi-threaded Python core that concurrently routes frame variables into an ultra-lean quantized TFLite edge tracking model while maintaining steady directional motor control.",
    objectives: "To construct an autonomous, localized computer-vision tracking layout optimized specifically for low-power edge single-board computers, eliminating dependencies on high-latency cloud processing networks or heavy desktop processing hardware.",
    gaps: [
      "Missing Integer Quantization: The framework relies on standard computing weights, completely omitting post-training integer quantization steps required to trim data size for rapid micro-processing loops.",
      "Absence of HRI Frameworks: The study focuses exclusively on background data recording, failing to incorporate interactive feedback components such as digital facial expressions or spoken text-to-speech audio updates.",
      "Stationary Baseline Testing: All evaluations were conducted on an isolated, stationary workbench, completely ignoring the intense kinetic vibrational noise introduced when mounting a processor onto a mobile wheeled rover."
    ],
    questions: [
      "QUESTION 01: How effectively can a resource-constrained single-board computer handle consecutive live video frames without experiencing structural system crashes?",
      "QUESTION 02: What is the structural performance trade-off between downscaling input frame resolutions and maintaining optimal system counting metrics?"
    ]
  },
  {
    title: "Linear Differential Driven Wheel Mobile Robot Based on MPU9250 and Optical Encoder",
    year: "2022",
    venue: "Journal of Robotics and Kinematics",
    doi: "https://www.researchgate.net/publication/358908300_Linear_Differential_Driven_Wheel_Mobile_Robot_Based_on_MPU9250_and_Optical_Encoder",
    summary: "To evaluate the maneuverability, execution parameters, and steering accuracy of a custom-built differential drive wheeled mobile robot utilizing an inline self-driving algorithm. The research focuses on formalizing mathematical kinematic derivations, integrating multi-axis inertial tracking, and calibrating high-frequency sensor streams to ensure trajectory consistency.",
    description: "The study maps out the operational precision and physical limits of a differential drive rover utilizing active sensor feedback loops.\n\n- Precision Orientation Tracking: The embedded MPU9250 sensor module provides reliable yaw metrics, enabling the navigation script to extract precise Euler angles from complex Quaternion equations.\n- Odometry Slippage Pitfalls: Heavily relying on wheel encoders exposes the system to immense position errors, as tires frequently slip on smooth test surfaces without registering true linear displacement.\n- Calibration Requirements: Magnetic and kinetic sensor drift can be minimized effectively, but requires a structured initialization routine to offset ambient environmental magnetic fields.",
    comparison: "This research provides the direct mathematical validation needed for Xyberox’s 4WD actuation logic. To solve the severe encoder wheel slippage documented by the authors, Xyberox utilizes the MPU9250's digital compass alongside a dedicated 3.3V-isolated HC-SR04 ultrasonic radar, combining them via a unified common ground rail to execute dynamic, sensor-fused path adjustments completely offline.",
    objectives: "To derive, test, and implement an automated straight-line driving and differential steering algorithm by integrating real-time 9-axis sensor fusion array feedback onto a multi-wheeled robotic chassis.",
    gaps: [
      "Lack of Spatial Awareness: The tracking algorithm operates entirely on internal movement variables, leaving the robot blind to sudden environmental obstructions due to a total lack of forward-facing distance sensors.",
      "Deterministic Trajectory Constraints: The navigation routine assumes pre-mapped, static test paths and lacks non-deterministic path re-routing logic for unexpected terrain.",
      "Zero Secondary Payload Interface: The logic focuses exclusively on the drive axle electronics, offering no physical integration protocols for external isolated relays or independent automation sub-circuits."
    ],
    questions: [
      "QUESTION 01: What mathematical conversion layers are most effective for transforming raw MPU9250 high-frequency data into smooth, real-time motor voltage updates?",
      "QUESTION 02: How severe is the path deviation drift over extended timelines when relying solely on wheel rotation counts versus an integrated 9-axis sensor platform?"
    ]
  },
  {
    title: "Design of Object Recognition and Audio Synthesis System on Edge Computing Architecture",
    year: "2021",
    venue: "International Journal of Embedded Systems and Computer Vision",
    doi: "https://www.semanticscholar.org/paper/Design-of-Object-Recognition-and-Audio-Synthesis-System-on-Edge-Computing-Architecture-Wang-Liu/a48b8b749b37168fecce223fdff100d3c02c939d",
    summary: "To implement a low-latency assistive vision device by combining a high-definition image capture module, an optimized single-board processing unit, and a dedicated serial-bus audio amplifier. The study evaluates computational load, optimizes model deployment pipelines, and structures hardware-isolated logic to deliver real-time environmental processing and clear, spoken text-to-speech output entirely on the edge.",
    description: "The research highlights structural balancing techniques required to manage simultaneous media processing tasks on minimal hardware.\n\n- I2S Audio Efficiency: Utilizing a dedicated I2S audio bus rather than standard PWM sound generation drastically minimizes processing overhead, allowing the CPU to execute core logic loops smoothly.\n- Pipeline Synchronization: Processing audio generation in an independent thread blocks visual tracking drift, ensuring the system remains responsive during complex frame-matching tasks.\n- Acoustic Enclosure Performance: The study demonstrates that placing standard micro-speakers inside structural acoustic enclosures significantly enhances vocal projection and dampens high-frequency ambient electrical noise.",
    comparison: "This study directly confirms the choice of the MAX98357A I2S amplifier and enclosed 3W speaker combination chosen for Xyberox's HRI (Human-Robot Interaction) subsystem. Xyberox improves upon this architecture by extending the single-board processing environment—deploying multi-threaded code that streams localized audio alerts while managing a 4WD TT-motor chassis powered by an 11.1V LiPo battery grid.",
    objectives: "To construct a unified, low-profile embedded vision platform that concurrently manages high-speed video processing frames and synchronized text-to-speech vocal generation without overloading edge processing cores.",
    gaps: [
      "Missing Directional Navigation: The platform is entirely stationary, completely lacking motor drive interfaces or navigation algorithms to actively maneuver toward identified targets.",
      "Absence of 9-Axis Context: The core tracking logic is devoid of orientation telemetry, making it incapable of factoring physical pitch, roll, or yaw data into its predictive models.",
      "Unregulated Power Inefficiencies: The system assumes a continuous, stable utility grid power input, failing to feature low-voltage battery safety tracking or step-down buck conversion grids."
    ],
    questions: [
      "QUESTION 01: How can an embedded processing pipeline effectively balance resources between high-frequency visual inputs and delayed audio synthesis execution loops?",
      "QUESTION 02: What level of signal degradation occurs when high-current audio amplification modules share standard logic buses without specialized signal isolation filters?"
    ]
  },
  {
    title: "Power Bus Isolation and Hardwired Failsafe Integration in Autonomous Edge Computing Platforms",
    year: "2023",
    venue: "Robotics and Autonomous Systems Safety Systems Journal",
    doi: "https://www.researchgate.net/publication/369408400_Power_Bus_Isolation_and_Hardwired_Failsafe_Integration_in_Autonomous_Edge_Computing_Platforms",
    summary: "To evaluate the reliability, signal integrity, and operational safety of multi-motor autonomous mobile rovers under heavy processing loads. The research outlines strategies for mitigating electromagnetic motor noise, preventing logic-level system crashes, and deploying optocoupled electrical switches to isolate heavy-current automated payloads from sensitive micro-processing nodes.",
    description: "The paper outlines critical power management protocols necessary to safeguard edge computing components during physical robot operations.\n\n- Inductive Motor Interference: Unisolated DC motor driver modules cause intense voltage drops on unified power rails, which can cause edge processors to freeze or reset unexpectedly.\n- Optocoupler Isolation Benefits: Utilizing a 5V optocoupled relay module prevents high-current payload shorts from damaging primary GPIO control pins.\n- Buck Regulator Stability: Deploying an adjustable buck converter (such as the LM2596) provides steady, continuous voltage to internal logic boards, even during sudden current surges from the main battery pack.",
    comparison: "This paper provides the foundational validation for Xyberox's comprehensive power distribution grid. To address the inductive interference and voltage drops highlighted by the authors, Xyberox implements a robust dual-bus system: an 11.1V LiPo battery supplies unthrottled power to the L298N motor driver for the TT motors, while a HW-411A buck converter steps down the voltage to a stable 5V rail. This clean power supply runs the Raspberry Pi Zero 2 W, the GC9A01 animated eye display, and the MPU-9250 9-axis orientation matrix safely on a shared common ground network.",
    objectives: "To formulate a reliable dual-bus power architecture that electronically isolates inductive motor ripples and external payload current spikes from edge computing motherboards using buck conversion and optical switching arrays.",
    gaps: [
      "No Vision Integration: The safety architecture is purely electrical and mechanical, completely omitting spatial vision tracking inputs or real-time camera interfaces.",
      "Lack of Heading Calibration: The driving framework relies on basic timing loops, completely omitting 9-axis IMU orientation feedback or compass drift correction techniques.",
      "Fixed Logic Parameters: The system lacks dynamic runtime modes, using simple hardcoded threshold values rather than an automated state machine architecture."
    ],
    questions: [
      "QUESTION 01: What threshold of electromagnetic interference (EMI) from a high-current motor driver is required to disrupt digital I2C and SPI bus transmissions on edge computing boards?",
      "QUESTION 02: How effectively can an offline low-voltage alarm prevent rapid cell degradation in high-capacity Lithium-Polymer battery setups under constant multi-amp motor loads?"
    ]
  }
];

export default function ShrabonDasReviewPage() {
  return <ShrabonDasReviewClient papers={papers} />;
}
