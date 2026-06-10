import React from "react";
import FahimFaisalReviewClient from "./FahimFaisalReviewClient";

export const metadata = {
  title: "Fahim Faisal - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by Fahim Faisal focusing on AI-based communication security, edge-AI signal detection, adaptive rover traversal, and anti-jamming machine learning systems.",
};

const papers = [
  {
    title: "Intelligent Space Communication Networks",
    year: "2023",
    venue: "Springer Nature",
    doi: "https://link.springer.com/chapter/10.1007/978-3-031-30762-1_7",
    summary: "This paper discusses the concept of intelligent space communication networks, where Artificial Intelligence (AI) is integrated into satellite communication systems to enhance performance and decision-making. It highlights how AI enables smarter resource management, adaptive networking, and improved service quality in complex space communication environments.",
    description: "The authors provide an overview of AI-based techniques applied to space communication networks and analyze their impact on improving network awareness and efficiency. They also review current research developments and system functionalities enabled by intelligent networking.",
    comparison: "This paper is relevant because it shows how AI-driven intelligent networks can enhance system performance, which directly supports our AI-based system design.",
    objectives: "To integrate Artificial Intelligence into space-bound communication networks to achieve automated, adaptive resource allocation and optimized signal routing.",
    gaps: [
      "High Computational Latency: Real-time resource scheduling struggles with latency constraints when processing deep learning models on orbital hardware.",
      "Complexity of Space Environments: Dynamic orbital adjustments and cosmic noise introduce high uncertainty that basic static AI models cannot handle.",
      "Lack of Edge Autonomy: The network architecture relies on ground-station assistance for heavy computational tasks."
    ],
    questions: [
      "RQ1: How can localized reinforcement learning algorithms optimize multi-satellite signal routing under dynamic line-of-sight constraints?",
      "RQ2: What neural network compression techniques are most effective for low-power space processors?",
      "RQ3: How does atmospheric interference affect the packet delivery ratios of intelligent routing networks?"
    ]
  },
  {
    title: "Low-Cost Network Jammer for Wi-Fi Network in Civilian Areas",
    year: "2024",
    venue: "IEEE Xplore",
    doi: "https://ieeexplore.ieee.org/abstract/document/10722738",
    summary: "This paper presents a low-cost Wi-Fi network jammer designed for civilian areas using affordable hardware components such as Arduino Nano and nRF24L01 modules. It focuses on disrupting communication in the 2.4 GHz band by detecting active channels and generating interference to disconnect wireless devices.",
    description: "The authors design and implement a cost-effective jamming system capable of scanning and identifying active Wi-Fi channels in real time. The device selectively targets these channels and transmits interference signals to disrupt communication between devices. They also test the system in controlled environments to evaluate its effectiveness in blocking wireless connections, including UAV communication scenarios.",
    comparison: "This paper is relevant because it demonstrates how easily Wi-Fi networks can be disrupted using low-cost devices. It highlights the importance of developing intelligent detection and protection mechanisms, which directly supports our proposed AI-based system.",
    objectives: "To engineer an affordable, portable Wi-Fi jammer using commodity microcontrollers and 2.4GHz RF modules to test civilian wireless link vulnerabilities.",
    gaps: [
      "Civilian Frequency Lock: Limited to standard 2.4GHz Wi-Fi bands and fails to affect 5GHz, 6GHz, or military-grade frequency-hopping links.",
      "Vulnerability to Detection: Continuous noise emission is highly visible to standard spectral scanners and easily located.",
      "Passive Defense Gaps: Lacks automated fallback algorithms to prevent self-jamming when multiple modules are co-located."
    ],
    questions: [
      "RQ1: Can the nRF24L01 transceiver be programmed to simulate complex protocol-layer deceptive jamming attacks rather than basic noise?",
      "RQ2: What is the optimal channel scanning rate required to follow a target device employing dynamic frequency hopping?",
      "RQ3: How does co-channel interference affect the jamming range of low-power 2.4GHz transmitters in indoor environments?"
    ]
  },
  {
    title: "Analysis and Attack Detection in GSM Mobile Network With an Intelligent Jammer Using ANFIS Classifier",
    year: "2023",
    venue: "IEEE Xplore",
    doi: "https://ieeexplore.ieee.org/abstract/document/10295490",
    summary: "This paper proposes an intelligent GSM mobile network jamming attack detection system that employs an Adaptive Neuro-Fuzzy Inference System (ANFIS) classifier to distinguish between normal and attack traffic. It combines RSSI-based transmission power control, hybrid cross-layer rate adaptation, and attack prevention mechanisms to improve jamming detection accuracy and enhance wireless network security.",
    description: "Authors design an intelligent jammer detection framework using the ANFIS classifier to classify network data as either normal or jamming attacks based on metrics such as Packet Sending Ratio (PSR) and Packet Delivery Ratio (PDR). They also integrate a Control Channel Attack Prevention mechanism to mitigate detected attacks.",
    comparison: "This paper is highly relevant because it demonstrates the effectiveness of AI-based classifiers for detecting jamming attacks in wireless networks and provides a strong foundation for developing more robust and intelligent anti-jamming systems.",
    objectives: "To design a neural-fuzzy classification framework that detects GSM-targeted jamming attacks in real time and deploys control channel protection mechanisms.",
    gaps: [
      "Protocol Obsolescence: Focused primarily on older GSM (2G) architectures, failing to address 4G/5G physical and MAC layer structures.",
      "Classifier Computational Overhead: ANFIS networks require substantial matrix calculations, making them slow to run on ultra-low-power IoT nodes.",
      "Limited Feature Input: Relies heavily on RSSI, which can trigger false positives during normal signal fading or multi-path loss."
    ],
    questions: [
      "RQ1: How can the ANFIS classifier be modified to process high-rate 5G NR physical channel metrics?",
      "RQ2: What is the minimum packet metrics sampling window required to maintain detection accuracy above 95%?",
      "RQ3: How does adaptive rate control mitigate transmission dropouts during low-intensity periodic jamming?"
    ]
  },
  {
    title: "Jamming Detection in IoT Wireless Networks: An Edge-AI Based Approach",
    year: "2022",
    venue: "ACM DL",
    doi: "https://dl.acm.org/doi/abs/10.1145/3567445.3567456",
    summary: "Introduces an Edge-AI-based jamming detection framework for IoT wireless networks that deploys a TinyML-enabled deep learning model on a Raspberry Pi edge device. By processing real-time Received Signal Strength (RSS) data from a Software Defined Radio (SDR), the system can detect and classify normal, constant, and periodic jamming signals with low latency and high efficiency.",
    description: "The authors implement a lightweight 1D Convolutional Neural Network (CNN) using TensorFlow Lite and TinyML for real-time jamming detection at the network edge, eliminating the need for cloud processing. They also validate the model through extensive experiments on real-world IoT hardware.",
    comparison: "Paper is relevant because it demonstrates that Edge-AI and TinyML can provide fast and efficient jamming detection directly on IoT devices, offering valuable insights for developing scalable and real-time wireless security solutions.",
    objectives: "To build a TinyML-based, low-latency edge classifier using 1D CNNs to recognize and categorize multiple jamming patterns on Raspberry Pi hardware.",
    gaps: [
      "SDR Resource Demands: Connecting a full SDR to an edge processor significantly increases battery drain and thermal output.",
      "Classifier Simplification: The model separates only three classes (normal, constant, periodic), failing to recognize complex deceptive or reactive protocols.",
      "Static Environment: Tested in a fixed laboratory setup and lacks validation in dynamic, moving, or multi-path heavy environments."
    ],
    questions: [
      "RQ1: How do TinyML quantization parameters (int8 vs float16) affect the classification accuracy of 1D CNNs on raw RF inputs?",
      "RQ2: What is the optimal sliding window size for RSS signal capture to balance classification latency with detection precision?",
      "RQ3: How can we reduce SDR data acquisition bottlenecks on low-power USB busses?"
    ]
  },
  {
    title: "From 5G to 6G Networks: A Survey on AI-Based Jamming and Interference Detection and Mitigation",
    year: "2024",
    venue: "IEEE Communications Surveys & Tutorials",
    doi: "https://ieeexplore.ieee.org/abstract/document/10564152",
    summary: "This paper surveys AI-based techniques for detecting and mitigating jamming and interference in 5G and future 6G networks, highlighting their importance for reliable communication. It reviews various wireless technologies (IoT, UAV, mmWave, etc.) and explains how AI/ML methods improve interference management while identifying challenges and future research directions.",
    description: "The authors classify different types of jamming and interference and analyze existing AI/ML models for their detection and mitigation across multiple network environments. They also evaluate techniques like deep learning and reinforcement learning and discuss their limitations.",
    comparison: "This paper is relevant because it provides the theoretical foundation of AI-based prediction and decision-making, which directly supports our system design.",
    objectives: "To review and categorize modern AI-driven solutions for signal interference detection, routing optimization, and threat mitigation in next-generation networks.",
    gaps: [
      "Lack of Practical Implementations: Majority of reviewed methods are validated through computer simulations without real-world hardware verification.",
      "6G Specificity: Emphasizes futuristic tera-hertz and sub-mmWave channels while providing less detail on current sub-6GHz field deployments.",
      "Overreliance on Cloud Processing: Most ML algorithms surveyed require centralized cloud computation, creating a bottleneck for edge communication."
    ],
    questions: [
      "RQ1: What are the primary limitations of Reinforcement Learning for dynamic anti-jamming under fast fading channels?",
      "RQ2: How can millimeter-wave beamforming be combined with AI to physically steer nulls toward jamming directions?",
      "RQ3: What hybrid deep learning architectures best fit resource-constrained drone-to-ground communication links?"
    ]
  },
  {
    title: "Nano Rover: A Multi-sensory Full-Functional Surveillance Robot with Modified Inception-Net",
    year: "2022",
    venue: "Springer Nature",
    doi: "https://link.springer.com/chapter/10.1007/978-981-19-2347-0_55",
    summary: "This paper presents a multi-sensory surveillance robot called Nano Rover that integrates sensors like LIDAR and GPS with deep learning for real-time monitoring and threat detection. It uses a modified Inception-Net model to improve image processing tasks such as object detection, weapon identification, and human analysis with higher accuracy.",
    description: "The authors design and implement a cost-efficient robotic system combining hardware sensors and a modified deep learning model for surveillance and reconnaissance. They also optimize Inception-Net through hyperparameter tuning for better detection performance.",
    comparison: "This paper is relevant because it demonstrates how AI and sensor integration can enhance real-time detection and decision-making systems, which aligns with our project goals.",
    objectives: "To develop a multi-sensor surveillance platform utilizing optimized deep convolutional neural networks for accurate real-time object classification and security sweeps.",
    gaps: [
      "GPS Dependence: Navigation architecture relies heavily on GPS, making it unusable in indoor, underground, or denied-GPS environments.",
      "Inception-Net Overhead: Modified Inception-Net demands significant memory and GPU resources, causing frame-rate drops on small micro-robots.",
      "Sensor Integration Latency: Lacks dynamic synchronization filters to merge LIDAR scan data with visual classification frames in real time."
    ],
    questions: [
      "RQ1: Can we compress deep convolutional networks using depthwise separable convolutions to run at 30FPS on low-cost edge modules?",
      "RQ2: How does dynamic sensor weight adjustment improve object classification accuracy in low-light environments?",
      "RQ3: What SLAM algorithms can replace GPS dependency for mapping and navigation in GPS-denied tactical zones?"
    ]
  },
  {
    title: "Analysis of Vulnerabilities in Satellite Software Bus Network Architecture",
    year: "2022",
    venue: "IEEE Xplore",
    doi: "https://ieeexplore.ieee.org/abstract/document/10017967",
    summary: "This paper analyzes vulnerabilities in satellite software bus network architecture, focusing on security weaknesses in communication and data exchange between onboard components. It highlights how these vulnerabilities can lead to cyber-attacks, system failures, or unauthorized access in satellite systems.",
    description: "The authors examine the structure of satellite software bus architecture and identify potential security threats within the system. They analyze different types of vulnerabilities, including communication flaws, data handling issues, and access control weaknesses. They also discuss possible attack scenarios and evaluate the risks associated with these vulnerabilities in satellite networks.",
    comparison: "This paper is relevant because it highlights critical security issues in communication network architectures. It supports the need for intelligent and adaptive security solutions, which aligns with our AI-based system design.",
    objectives: "To systematically analyze the vulnerabilities in satellite bus networks and design attack vectors to test real-time failover security protocols.",
    gaps: [
      "Static Bus Logic: Satellite bus protocols assume zero-trust only outside the satellite, making the internal network completely open once breached.",
      "Lack of Adaptive Defense: The architecture does not contain automated firewall rules or host-based intrusion detection systems.",
      "Testing Limitations: Vulnerability models are theoretical and have not been executed against operational satellite hardware under load."
    ],
    questions: [
      "RQ1: How can zero-trust architectures be implemented on legacy satellite software bus protocols without breaking telemetry flows?",
      "RQ2: What is the computational impact of real-time symmetric encryption on high-frequency onboard sensor data?",
      "RQ3: Can anomaly detection models identify spoofed software bus commands using timestamp analysis?"
    ]
  },
  {
    title: "Design and development of jamming-based stiffness-adjustable wheel on soft terrain",
    year: "2025",
    venue: "Journal of Terramechanics / Elsevier",
    doi: "https://www.sciencedirect.com/science/article/abs/pii/S0022489824000569",
    summary: "Investigates the design, simulation, and experimental evaluation of a stiffness-adjustable robotic wheel utilizing granular/vacuum jamming techniques. The wheel adapts its stiffness dynamically to optimize traction and rolling resistance when traversing soft, sandy, or irregular terrain.",
    description: "Analyzes mechanical structures where a vacuum control system aggregates granular particles within the wheel's tire chamber. Under vacuum activation, granular jamming increases wheel rigidity to improve locomotion on solid surfaces, while pressure venting softens the wheel to maximize footprint and flotation on low-cohesion soil.",
    comparison: "Directly relates to Aegis's mechanical traversal and mobility stack. It provides a novel hardware solution to overcome standard wheel slippage in hostile or non-permissive outdoor environments, validated via simulation models.",
    objectives: "To create an adjustable stiffness wheel using granular vacuum jamming, optimizing traction across solid and soft terrain dynamically.",
    gaps: [
      "Vacuum Control Complexity: The pneumatic setup (valves, pumps) increases vehicle weight and electrical current consumption.",
      "Wear and Tear: Granular membranes suffer fast degradation and punctures when rolling over sharp rocks or metal debris.",
      "Locomotion Latency: The transition between flexible and rigid wheel states takes several seconds, which is too slow for dynamic obstacle avoidance."
    ],
    questions: [
      "RQ1: What granular materials provide the highest stiffness ratio under low-vacuum pressure configurations?",
      "RQ2: How can we model granular jamming deformation accurately in real-time within ROS2 terrain simulation nodes?",
      "RQ3: What is the trade-off between pneumatic system power consumption and wheel traction enhancement on sandy slopes?"
    ]
  },
  {
    title: "A Deep Neural Network Approach for Detection and Classification of GNSS Interference and Jammer",
    year: "2023",
    venue: "TechRxiv",
    doi: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.22212121.v1",
    summary: "This paper proposes a deep learning-based approach using Convolutional Networks (CNN) to detect and classify GNSS interference and jamming signals for reliable navigation systems. It utilizes time-frequency signal representations and compares models like AlexNet and ResNet, achieving high accuracy even under low-power interference conditions.",
    description: "CNN-based framework that processes signal features from time and frequency domains to identify different types of interference and jammers. They evaluate performance through real-world scenarios such as terrestrial monitoring and satellite-based detection.",
    comparison: "This paper is relevant because it demonstrates how deep learning can be applied for accurate signal detection and classification, which supports our AI-based system design.",
    objectives: "To build a deep learning framework capable of recognizing and classifying global navigation satellite system (GNSS) interference signatures using time-frequency spectrogram inputs.",
    gaps: [
      "High Parameter Count: Standard ResNet and AlexNet models are too large for direct on-board execution on small autonomous rovers.",
      "Data Labeling Demands: Requires extensive, high-fidelity labeled datasets of GNSS interference under varying weather conditions.",
      "Lack of Mitigation Logic: Focuses exclusively on detection and classification without providing automated routing or antenna nulling failovers."
    ],
    questions: [
      "RQ1: How can time-frequency spectrogram generation be accelerated using GPU shaders to support real-time inference?",
      "RQ2: What is the classification accuracy degradation of ResNet models when processing highly distorted GPS L1/L2 signals?",
      "RQ3: Can transfer learning from standard image databases reduce the training epochs required for GNSS anomaly recognition?"
    ]
  },
  {
    title: "Deep Learning-Enabled Deceptive Jammer Detection for Low Probability of Intercept Communications",
    year: "2023",
    venue: "IEEE Transactions on Aerospace and Electronic Systems",
    doi: "https://ieeexplore.ieee.org/document/9795207",
    summary: "This paper proposes a deep learning-based method to detect deceptive jammers in low probability of intercept (LPI/LPD) communication systems, which are widely used in radar and secure communications. It introduces a two-stage deep learning algorithm that uses time–frequency and I/Q signal representations to accurately detect unknown jamming signals even under low signal-to-noise conditions.",
    description: "The authors develop a two-stage deceptive jammer detection (TDJD) model combining outlier detection and modulation classification using deep learning techniques. They also evaluate its performance and show improved detection accuracy and reduced false alarms compared to existing methods.",
    comparison: "The paper is directly relevant as it establishes a simulation-proven deep-learning framework for detecting sophisticated deceptive jamming in LPI communications, which forms the theoretical and algorithmic baseline for our planned hardware-implemented detection system.",
    objectives: "To engineer a two-stage deep learning algorithm (TDJD) utilizing IQ constellation and time-frequency signal inputs to detect low-power deceptive jammers.",
    gaps: [
      "Simulation Only: The model is validated through synthetic computer-generated signals and lacks physical validation on SDR transceivers in live RF fields.",
      "High SNR Sensitivity: Outlier detection accuracy falls off rapidly when operating in channels with high ambient thermal noise.",
      "Complexity of Deceptive Attack: Assumes the jammer is using standard modulation profiles, failing if the attacker utilizes dynamic, chaotic, or non-periodic signals."
    ],
    questions: [
      "RQ1: How does physical channel multi-path distortion affect the IQ representation inputs of the TDJD classifier?",
      "RQ2: What is the optimal convolutional layer architecture to minimize training parameters in military LPI radio systems?",
      "RQ3: Can deceptive jammers bypass the TDJD filter by matching their signal phase perfectly to the host communications?"
    ]
  }
];

export default function FahimFaisalReviewPage() {
  return <FahimFaisalReviewClient papers={papers} />;
}
