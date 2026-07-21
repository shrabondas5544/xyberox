import React from "react";
import EloraSharminKhanReviewClient from "./EloraSharminKhanReviewClient";

export const metadata = {
  title: "Elora Sharmin Khan - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by Elora Sharmin Khan focusing on voice-interactive educational robots, speech animatronics, CNN-PID vision control, ANFIS GSM jamming detection, intelligent LTE SDR jammers, Arduino nRF24L01+ multi-function rovers, AI drone control, and XR-enhanced robotic surgery HRI.",
};

const papers = [
  {
    title: "Design and Development of a Low-Cost Voice Interactive Children Educational Robot 'TINY' with Natural Language Processing",
    year: "2024",
    venue: "IEEE (Presented at the 2024 International Conference on Image Processing and Robotics - ICIPRoB) | IEEE Xplore Digital Library",
    doi: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4U9RcZAAAAAJ&cstart=20&pagesize=80&citation_for_view=4U9RcZAAAAAJ:GnPB-g6toBAC",
    summary: "This research presents the design and development of TINY (Teach, Inspire, Nurture, and Yield), an affordable social educational robot designed to support early childhood education for children aged 3 to 11 years. The robot helps children learn basic subjects such as the alphabet, numbers, and general knowledge through interactive communication. To enable natural conversations, TINY uses Natural Language Processing (NLP) together with Google Speech-to-Text technology, allowing it to understand spoken language and respond appropriately. The robot supports multiple languages, including Bengali. The hardware consists of a Raspberry Pi 3B, various sensors, servo motors, and a 3D-printed body, with a total production cost of approximately BDT 13,200 (USD 120.42). The researchers demonstrated that TINY is an effective and low-cost educational tool that helps children—especially those with learning difficulties or disabilities—stay engaged during lessons while promoting STEAM education.",
    description: `Major Research Tasks & Findings:

• Developed the TINY Robot: Designed and built TINY (Teach, Inspire, Nurture, and Yield), an affordable social educational robot for children aged 3–11 years.
• Implemented Voice-Based Learning: Integrated Natural Language Processing (NLP) and Google Speech-to-Text technology to process spoken commands and questions, producing natural vocal responses.
• Provided Basic Educational Content: Instructs fundamental topics including the alphabet, numbers, general knowledge, and basic science through interactive play.
• Enabled Multilingual Communication: Features native support for multiple languages including Bengali and English.
• Improved Attention and Social Skills: Designed to maintain child engagement, foster social interaction, and assist children with learning difficulties or disabilities.
• Built a Low-Cost Hardware Platform: Engineered on a Raspberry Pi 3B with standard sensors, audio amplifier, servo motors, and 3D-printed chassis at ~BDT 13,200 (USD 120.42).`,
    comparison: "This paper serves as a core reference for Xyberox's Human-Robot Interaction (HRI) and voice processing subsystem. While TINY targets early childhood education with cloud Google Speech-to-Text API calls, Xyberox extends this architecture by deploying localized, offline edge NLP models and multi-threaded audio alert synthesis directly on a single-board computer alongside autonomous 4WD navigation and RF security systems.",
    objectives: `Why Do / Objectives:

• To make learning easier and more engaging: Created an enjoyable learning environment for STEAM (Science, Technology, Engineering, Arts, and Mathematics) subjects through interactive play.
• To improve attention and engagement: Helps children, especially those with learning difficulties or disabilities, stay focused through conversational interaction.
• To enhance social and language skills: Fosters early language development, vocabulary acquisition, and teamwork from ages 3+.
• To make educational technology affordable and accessible: Built a low-cost (~USD 120.42) alternative to expensive commercial educational robots for developing nations.`,
    gaps: [
      "High Cost of Commercial Educational Robots: Commercial social robots are prohibitively expensive for families and schools in developing countries like Bangladesh. TINY solves this with an affordable BDT 13,200 ($120.42) build.",
      "Lack of Sustained Attention in Classroom: Children with learning difficulties lose focus in traditional passive lessons. TINY solves this via interactive multimodal voice conversations.",
      "Language Acquisition Barriers: Foreign educational robots lack native language support (Bengali). TINY solves this by communicating fluently in both Bengali and English.",
      "Complexity of Teaching STEAM & Computational Thinking: Abstract concepts are difficult to convey via textbooks alone. TINY solves this by offering play-based interactive learning."
    ],
    questions: [
      "RQ1: How effectively can low-cost single-board computers process continuous Speech-to-Text and NLP models without introducing noticeable conversational latency?",
      "RQ2: What acoustic design techniques best optimize voice recognition accuracy in noisy indoor classroom environments?",
      "RQ3: How does multilingual (Bengali/English) voice feedback impact child engagement rates during interactive STEAM learning?"
    ]
  },
  {
    title: "Driving Animatronic Robot Facial Expression From Speech",
    year: "2024",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2024) | CORE Rank A",
    doi: "https://arxiv.org/abs/2403.12670",
    summary: "This research presents a method for generating realistic, human-like facial expressions on an animatronic robot directly from speech audio input. The system uses Linear Blend Skinning (LBS) to coordinate the robot's mechanical facial structure with its facial movements, enabling natural animation. As a result, the robot can automatically synchronize its lip movements and facial expressions with spoken audio in real time, without requiring any external human face tracking. The system achieves a processing speed of over 4,000 frames per second (fps) on an NVIDIA RTX 4090 GPU, making it suitable for highly responsive real-time applications.",
    description: `Major Research Tasks & Findings:

• Speech-Driven Robotic Face: Listens to speech audio and automatically moves eyes, eyebrows, cheeks, and lips to match spoken words and emotional expressions without needing external cameras or human face tracking.
• Skinning-Centric Design: Applied Linear Blend Skinning (LBS) from computer graphics to produce smooth, natural deformations on the outer silicone skin instead of attempting complex internal artificial muscle mechanics.
• Imitation Learning: Trained on 3D human facial motion capture data so the AI model learns human expression dynamics during speech and reproduces them on the physical robot face.
• Real-Time Performance & Low Latency: Achieves over 4,000 frames per second (fps) on an NVIDIA RTX 4090 GPU, solving inverse kinematics online and updating motor commands in under 40 milliseconds.
• High Accuracy & Perception: Motion capture tests confirmed millimeter-scale accuracy (2.41 mm around eyes, 3.76 mm around mouth). In blind user studies, 29.2% rated AI expressions more natural than real humans, and 25.8% rated them equally natural.`,
    comparison: "This study provides key insights into speech-synchronized facial rendering for HRI. While IROS 2024 focuses on GPU-accelerated silicone animatronic faces, Xyberox adapts these principles for compact edge hardware—utilizing a GC9A01 circular animated eye display and localized speech synthesis to express dynamic robotic emotional states during offline rover operations.",
    objectives: `Why Do / Objectives:

• Natural Human–Robot Interaction: Social robots require speech-synchronized facial expressions to make human-robot communication appear natural and engaging rather than artificial.
• Emotional Engagement: Establish strong emotional connections in healthcare, education, and social applications by rendering lifelike facial expressions.
• Overcome Camera & Animation Constraints: Eliminate reliance on camera-based face tracking or fixed pre-programmed animations by generating dynamic facial expressions directly from raw audio streams.`,
    gaps: [
      "Lack of Speech-Synchronized Facial Expressions: Traditional leader-follower camera tracking cannot generate expressions directly from speech. Solved by producing lip and face movements directly from speech audio alone.",
      "Complex Muscle-Centric Mechanical Design: Replicating anatomical human muscles is bulky, expensive, and fragile. Solved by controlling outer silicone skin movement using Linear Blend Skinning (LBS).",
      "Limitations of 3D Landmark-Based Methods: Landmark transfers fail on subtle expressions and break when facial structures change. Solved using landmark-free continuous LBS deformation modeling.",
      "Real-Time Processing Latency: Online inverse kinematics on physical hardware previously suffered high latency. Solved by delivering motor updates in under 40 ms at 4,000+ fps."
    ],
    questions: [
      "RQ1: How can Linear Blend Skinning (LBS) matrices be compressed to execute real-time facial motor mapping on low-power embedded microcontrollers?",
      "RQ2: What is the minimum audio feature extraction window needed to accurately predict facial expression transitions without speech delay?",
      "RQ3: How do physical silicone skin material properties (elasticity, hysteresis) affect motor positioning accuracy during high-frequency speech animation?"
    ]
  },
  {
    title: "Computer Vision-Control-Based CNN-PID for Mobile Robot",
    year: "2021",
    venue: "Computers, Materials & Continua (Tech Science Press) | Q2 SJR",
    doi: "https://doi.org/10.32604/cmc.2021.016600",
    summary: "This paper presents a low-cost autonomous serving robot that follows a line on the floor using a hybrid control system combining a Convolutional Neural Network (CNN) and a PID controller. A Raspberry Pi 3B+ processes images from a Pi Camera, while an HC-SR04 ultrasonic sensor detects obstacles. The CNN (LeNet) analyzes grayscale images to estimate the robot's position relative to the path and generates an error value. This error is sent to a modified PID controller, which calculates steering corrections by adjusting the speeds of the left and right motors through a differential drive system. The modified PID uses only the most recent error values, enabling better performance on sharp turns. Experimental results show that integrating deep learning with PID control provides accurate, smooth, and reliable line-following performance, even when sensor information is imperfect.",
    description: `Major Research Tasks & Findings:

• Image Capture & Neural Spatial Analysis: Pi Camera continuously captures path images; a LeNet CNN processes grayscale frames to estimate line offset error (mapped from -4 to +4).
• Modified Discrete PID Steering: Implemented a modified PID controller that sums only the last 3 error values (instead of full historical error integration), preventing over-correction and enabling stable traversal on sharp curves.
• Differential Drive Speed Regulation: Translates CNN error predictions into differential PWM voltage adjustments across left and right motor drive axles.
• Ultrasonic Obstacle Mitigation: Integrated an HC-SR04 ultrasonic sensor for real-time forward collision detection and dynamic stopping.
• Low-Cost Embedded Deployment: Proven real-time vision-control functionality on a single credit-card-sized Raspberry Pi 3B+ board.`,
    comparison: "This research directly validates Xyberox's vision-guided tracking and motor actuation pipeline. Xyberox builds upon this CNN-PID hybrid framework by pairing a Raspberry Pi Zero 2 W with an MPU-9250 9-axis IMU, an HC-SR04 ultrasonic radar, and a 4WD TT-motor chassis to maintain accurate trajectory tracking and offline obstacle avoidance.",
    objectives: `Why Do / Objectives:

• Handle Changes in Line Curvature: Overcome classic PID instability on sharp or unpredictable curves by integrating neural network predictive vision.
• Learn Complex Non-Linear Paths: Utilize CNNs to learn non-linear spatial mappings between raw visual sensor inputs and steering corrections.
• Low-Cost Accessible Robotics: Eliminate dependencies on bulky, expensive PC hardware by proving real-time deep learning vision control on a compact Raspberry Pi 3B+.
• Smooth Steering Control: Combine neural target tracking with real-time PID motor speed regulation for continuous trajectory smoothing.`,
    gaps: [
      "Inaccuracy of Traditional Tracking: Conventional line trackers fail when lighting or path conditions fluctuate. Solved by training a CNN to predict spatial error from raw camera frames.",
      "Failure of Standard PID on Sharp Curves: Classic PID integral windup causes severe overshoot on sharp turns. Solved using a modified PID that sums only the last 3 error values.",
      "High Hardware Costs: Vision control previously required high-end desktop GPUs/PCs. Solved by optimizing a lightweight LeNet CNN to run on a low-cost Raspberry Pi 3B+.",
      "Visual-to-Motor Control Mapping: Difficulty in directly translating camera pixels into steering angles. Solved by training an image-to-error dataset mapping offsets to discrete values (-4 to +4)."
    ],
    questions: [
      "RQ1: How does reducing CNN input resolution impact path deviation prediction accuracy vs frame processing rate on Raspberry Pi hardware?",
      "RQ2: What is the ideal error memory window length for discrete PID controllers when maneuvering high-speed differential rovers around tight corners?",
      "RQ3: How can vision-based error estimation be fused with IMU yaw rate feedback to prevent wheel slip during rapid acceleration?"
    ]
  },
  {
    title: "Analysis and Attack Detection in GSM Mobile Network With an Intelligent Jammer Using ANFIS Classifier",
    year: "2023",
    venue: "IEEE | Q2 SCImago",
    doi: "https://ieeexplore.ieee.org/abstract/document/10295490",
    summary: "This paper proposes an intelligent GSM mobile network jamming attack detection system that employs an Adaptive Neuro-Fuzzy Inference System (ANFIS) classifier to distinguish between normal and attack traffic. It combines RSSI-based transmission power control, hybrid cross-layer rate adaptation, and attack prevention mechanisms to improve jamming detection accuracy and enhance wireless network security.",
    description: `Major Research Tasks & Findings:

• ANFIS Attack Classifier: Implemented an Adaptive Neuro-Fuzzy Inference System (ANFIS) trained on network traffic metrics (Packet Sending Ratio - PSR, Packet Delivery Ratio - PDR, and RSSI) to categorize traffic as normal or jamming attacks.
• Power & Rate Adaptation: Developed RSSI-based transmission power control combined with hybrid cross-layer rate adaptation to maintain communications during minor interference.
• Control Channel Protection: Integrated an automated Control Channel Attack Prevention mechanism to mitigate active jamming impacts and safeguard wireless control signals.`,
    comparison: "This study supports Xyberox's wireless threat detection and active countermeasure modules. While the paper focuses on detecting GSM network jammers via ANFIS, Xyberox applies signal metric classification and edge AI detection to evaluate local RF spectrum anomalies, trigger active signal jamming countermeasures in exam halls, and preserve offline system state recovery.",
    objectives: `Why Do / Objectives:

• Enhance Wireless Network Security: Safeguard critical mobile communication links against malicious RF interference and jamming attacks.
• AI-Driven Threat Recognition: Combine fuzzy logic and neural networks (ANFIS) for high-accuracy, low-latency detection of complex jamming signatures.
• Automated Mitigation: Deploy cross-layer rate control and channel defense protocols to maintain network availability during active attacks.`,
    gaps: [
      "Vulnerability of Cellular Networks to RF Jamming: Wireless networks are highly susceptible to malicious signal disruption. Solved by developing an ANFIS classifier that detects jamming signatures in real time.",
      "False Alarms from Signal Fading: Standard RSSI thresholds trigger false positives during normal fading. Solved by fusing RSSI, PSR, and PDR cross-layer metrics.",
      "Lack of Active Countermeasures: Passive detection systems cannot preserve link continuity. Solved by integrating a Control Channel Attack Prevention mechanism."
    ],
    questions: [
      "RQ1: How can ANFIS classifier rules be optimized for real-time execution on low-cost edge microcontrollers without sacrificing detection accuracy?",
      "RQ2: What combination of physical and MAC layer metrics provides the highest classification precision under dynamic multipath fading?",
      "RQ3: How effectively can cross-layer rate adaptation maintain throughput during high-density periodic jamming attacks?"
    ]
  },
  {
    title: "Intelligent Jammer on Mobile Network LTE Technology: A Study Case in Bucharest",
    year: "2023",
    venue: "Applied Sciences | Q2 SCImago",
    doi: "https://doi.org/10.3390/app132212286",
    summary: "The primary goal was to create an intelligent jammer that is both financially accessible and capable of disrupting only specific communications. The study focuses on analyzing the behavior of mobile phones and LTE/UMTS networks to develop a software-defined radio (SDR) solution that blocks communications only when active traffic is detected, rather than using broad, continuous jamming.",
    description: `Major Research Tasks & Findings:

• SDR HackRF Architecture: Developed a software-defined radio (SDR) solution using HackRF One and a Python-based processing pipeline.
• Mobile Operator Spectral Analysis: Analyzed the local radio spectrum to identify active downlink (DL) and uplink (UL) carrier frequencies.
• Uplink-Triggered Reactive Logic: Monitors the uplink connection for active mobile transmissions rather than continuously jamming the entire band.
• Threshold-Triggered Burst Emissions: When uplink signal amplitude exceeds a predetermined threshold (-60 dBm to -70 dBm), automatically triggers a 15-second jamming emission on the corresponding downlink channel.
• SIR & Range Evaluations: Measured Signal-to-Interference Ratio (SIR) at various distances, establishing an effective jamming radius between 1.5 and 8 meters given low-power SDR hardware constraints.`,
    comparison: "This paper addresses the physical range limits of low-power SDRs (HackRF effective within 8m), providing direct justification for Xyberox's mobile terrestrial rover platform. Xyberox navigates directly into close proximity of target mobile devices, deploying uplink-triggered reactive bursts to disrupt exam-hall cheating while conserving battery power.",
    objectives: `Why Do / Objectives:

• Uplink-Triggered Reactive Jamming: Program listening modes to emit jamming bursts only when active uplink traffic is detected, improving stealth and power efficiency.
• Power & Bandwidth Optimization: Target specific channels with short 15-second bursts rather than broad spectrum sweeps to conserve battery power on mobile rovers.
• Python-SDR Integration: Utilize Python spectrum scanning for rapid channel switching and dynamic threshold execution.
• Proximity-Based Calculations: Calculate SIR and path loss to determine optimal target distance based on transmitter power.`,
    gaps: [
      "Continuous Jamming Power Depletion: Continuous broad-band jamming rapidly drains battery power. Solved via uplink-triggered short 15-second burst emissions.",
      "SDR Physical Output Range Limits: Low-power SDRs have an effective range under 8 meters. Solved by mounting the jammer onto an autonomous mobile rover to approach targets.",
      "Collateral RF Interference: Broad jamming disrupts legitimate communications and emergency channels outside target zones. Solved by selective, targeted channel blocking."
    ],
    questions: [
      "RQ1: How can uplink threshold monitoring algorithms minimize false-positive jamming bursts in noisy indoor environments?",
      "RQ2: What is the optimal burst duration for reactive downlink jamming to disconnect LTE/5G sessions without excessive battery depletion?",
      "RQ3: How can mobile rovers optimize SIR distance path-loss calculations in real time while tracking moving targets?"
    ]
  },
  {
    title: "Arduino-Controlled Multi-Function Robot with Bluetooth and nRF24L01+ Communication",
    year: "2024",
    venue: "IJRCS | Q1 SJR",
    doi: "http://doi.org/10.31763/ijrcs.v4i3.1517",
    summary: "The primary objective of this research is to develop a multifunctional robotic system that addresses the limited adaptability of existing robots by integrating various sensors and control interfaces. The authors aim to create a cost-effective and user-friendly platform capable of diverse tasks, such as line following, obstacle avoidance, and object manipulation, while significantly extending the wireless control range up to 902 meters compared to previous studies.",
    description: `Major Research Tasks & Findings:

• Dual Microcontroller Architecture: Deployed Arduino Mega 2560 as central robot receiver/controller and Arduino Nano for the remote transmitter unit, driving L298 motor drivers and SG90 servos.
• Multi-Sensor Integration Suite: Integrated HC-SR04 ultrasonic sensors for distance measurement, HW201 IR sensors for line following and object detection, MPU-6050 accelerometer for gesture control, and flex sensors.
• Dual-Layered Wireless Control: Implemented HC-06 Bluetooth module for short-range smartphone control alongside an nRF24L01+ module with power/noise amplifiers reaching up to 902 meters range.
• Virtual Simulation & PC Interface: Validated circuitry and control logic in Proteus VSM prior to hardware fabrication, paired with a custom C#.NET 8.0 PC dashboard and SSD1306 OLED display.`,
    comparison: "This source provides a robust mobility and control blueprint for Xyberox's dual-communication link (Bluetooth/RF) and sensor suite. Xyberox leverages these principles to ensure control signals operate on out-of-band frequencies immune to onboard RF jamming emissions, while rendering live diagnostics on terminal displays.",
    objectives: `Why Do / Objectives:

• Long-Range Remote Deployment: Achieve long-distance telemetry up to 902 meters using nRF24L01+ modules with power amplifiers for safe standoff operation.
• Precise Payload Positioning: Utilize multi-axis servo arms to angle and elevate sensor/jammer antennas over physical obstacles.
• Intuitive Gesture Control: Implement MPU-6050 accelerometer gesture tracking for intuitive hand-steering in high-stress operational environments.
• Virtual Hardware Verification: Use Proteus VSM simulation to test circuit interactions before hardware prototyping, preventing component failure.`,
    gaps: [
      "Range Limitations of Short-Range Links: Bluetooth/Wi-Fi links drop beyond close range. Solved by integrating amplified nRF24L01+ modules reaching 902 meters.",
      "Self-Interference During Jamming Payload Activation: Onboard jamming can disrupt the robot's own control link. Solved using out-of-band dual-layered communication protocols.",
      "Hardware Component Failure Risks: Direct hardware assembly without testing leads to burned ICs. Solved by validating circuitry in Proteus VSM simulation prior to assembly."
    ],
    questions: [
      "RQ1: How can out-of-band nRF24L01+ channels be isolated from active 2.4GHz Wi-Fi jamming emissions on the same mobile chassis?",
      "RQ2: What packet error rate occurs on gesture-controlled RF telemetry links when operating near high-power DC motor drivers?",
      "RQ3: How can dual-microcontroller architectures optimize real-time sensor polling vs motor PWM signal generation?"
    ]
  },
  {
    title: "Artificial Intelligence Applied to Drone Control: A State of the Art",
    year: "2024",
    venue: "MDPI | Q1 SJR",
    doi: "http://doi.org/10.31763/ijrcs.v4i3.1517",
    summary: "The primary objective of this paper is to provide a systematic study of the state of the art regarding AI algorithms that have proven effective in drone operations. It aims to synthesize existing research to show how AI improves autonomous behavior, covering everything from basic automation to complex navigation and collaborative mission execution without direct human supervision.",
    description: `Major Research Tasks & Findings:

• Systematic Literature Review: Analyzed peer-reviewed literature post-2019 across Web of Science, IEEE Xplore, and Google Scholar to evaluate modern AI flight control.
• Six-Dimensional Taxonomy: Classified literature into a 6D framework categorizing AI impact across autonomous navigation, visual recognition, and collaborative swarm communication.
• Comprehensive Algorithmic Scope: Covered Supervised Learning (CNNs, ResNet), Unsupervised Learning (K-Means), Reinforcement Learning (Q-Learning), and Meta-heuristic algorithms (Genetic Algorithms, Ant Colony Optimization).
• Core Application Concepts: Highlighted bi-level Hierarchical Reinforcement Learning, Soft-Kill Countermeasures (jamming, spoofing), and energy-efficient path loss route planning.`,
    comparison: "This paper provides the computational framework for Xyberox's autonomous intelligence and energy-aware mobility. Because active RF jamming is range-dependent, Xyberox applies these cited path-loss models, Genetic Algorithm path planning, and bi-level reinforcement learning strategies to navigate complex indoor environments efficiently.",
    objectives: `Why Do / Objectives:

• Autonomous Trajectory Optimization: Utilize AI path planning to navigate dynamic environments and establish optimal line-of-sight for payload execution.
• Energy-Efficient Navigation: Optimize route selection using path-loss and battery consumption models to extend mobile operational life.
• Soft-Kill Countermeasure Execution: Implement reinforcement learning to execute soft-kill actions such as frequency spoofing and RF signal disruption.
• Autonomous State Recovery: Enable bi-level hierarchical decision-making so rovers continue mission execution without continuous human supervision.`,
    gaps: [
      "Battery and Payload Energy Limitations: Active payloads drain battery power rapidly. Solved by implementing AI energy-consumption prediction and path-loss route optimization.",
      "Complex Indoor Navigation Obstacles: Static routing fails in unmapped urban environments. Solved via Genetic Algorithm 3D path planning and reactive Q-learning.",
      "Vulnerability to Communication Blackouts: Tele-operated systems fail during signal loss. Solved using bi-level hierarchical reinforcement learning for autonomous offline state recovery."
    ],
    questions: [
      "RQ1: How can hierarchical reinforcement learning balance energy conservation with optimal RF jamming distance during indoor rover navigation?",
      "RQ2: What performance trade-offs exist between Genetic Algorithms and Q-learning for real-time 3D obstacle avoidance on single-board computers?",
      "RQ3: How effectively can local reactive policies adjust rover navigation speed when detecting sudden multipath signal fading?"
    ]
  },
  {
    title: "Exploring the Dynamics of User Experience and Interaction in XR-Enhanced Robotic Surgery: A Systematic Review",
    year: "2024",
    venue: "Frontiers in Virtual Reality | Q1 SJR",
    doi: "https://doi.org/10.3389/frvir.2024.1461105",
    summary: "To elucidate Human-Robot Interaction (HRI) dynamics within XR-aided Robotic-Assisted Surgery (RAS) systems, emphasizing their impact on User Experience (UX) and overall surgical outcomes. The study synthesizes existing literature to identify key challenges, interaction modalities, and cognitive/perceptual factors in tele-operated robotic environments.",
    description: `Major Research Tasks & Findings:

• Systematic HRI & UX Synthesis: Evaluated literature surrounding Extended Reality (XR) enhanced robotic systems to identify underexplored human-robot interaction elements.
• Multi-Factor User Experience Analysis: Analyzed affective, perceptual, cognitive, and motor experience factors contributing to surgeon performance and remote situational awareness.
• Interaction Modalities Assessment: Investigated remote interaction modalities between operators and XR interfaces, uncovering key friction points in remote surgical tele-operation.`,
    comparison: "This review highlights essential HRI design dynamics and operator cognitive load factors. While the paper examines XR interfaces for medical surgical tele-operation, Xyberox contrasts this paradigm by developing an autonomous terrestrial rover designed for threat detection, RF signal disruption, and emergency state recovery without relying on continuous human tele-operation.",
    objectives: `Why Do / Objectives:

• Address Underexplored HRI Elements: Investigate human-robot interaction dynamics that remain underaddressed in traditional engineering literature.
• Enhance Operator Experience & Performance: Analyze affective, perceptual, and cognitive UX factors to improve user efficiency and remote control precision.
• Identify Remote Interaction Modalities: Evaluate XR display and control modalities to optimize operator situational awareness and reduce cognitive fatigue.`,
    gaps: [
      "Underexplored HRI & UX Dynamics: Traditional robotic literature focuses exclusively on mechanical specs, ignoring human operator cognitive load. Solved by analyzing affective, perceptual, and motor UX factors in XR interfaces.",
      "High Latency in Remote Tele-Operation: Tele-operated interfaces suffer when communication latency disrupts visual/motor feedback. Solved by optimizing remote interaction modalities and display workflows.",
      "Vulnerability of Continuous Human Tele-Operation: Systems requiring continuous human control fail during signal loss. Solved in Xyberox by transitioning from tele-operation to autonomous offline state recovery."
    ],
    questions: [
      "RQ1: How do affective, perceptual, cognitive, and motor experiences contribute to overall operator UX in remote robotic control interfaces?",
      "RQ2: What interaction modalities between operators and visual interfaces best optimize situational awareness under tele-operation constraints?",
      "RQ3: How can autonomous state recovery mechanisms reduce operator cognitive burden during sudden communication blackouts?"
    ]
  }
];

export default function EloraSharminKhanReviewPage() {
  return <EloraSharminKhanReviewClient papers={papers} />;
}
