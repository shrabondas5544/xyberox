import React from "react";
import MohdAshrafulIslamReviewClient from "./MohdAshrafulIslamReviewClient";

export const metadata = {
  title: "Mohd Ashraful Islam - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by Mohd Ashraful Islam focusing on autonomous robotics, signal jamming payloads, sensor fusion, and local AI processing systems.",
};

const papers = [
  {
    title: "Intelligent Mobile Signal Jammer",
    year: "2017",
    venue: "Asian Journal of Computer Science Engineering",
    doi: "https://www.academia.edu/34947936/Intelligent_Mobile_Signal_Jammer",
    summary: "The primary objective is to provide a service denial mechanism for high-security zones—such as defense meetings, schools, and hospitals—to prevent unauthorized communications and protect against technological tracking. The authors aim to create a device that blocks the transmission or reception of signals by creating frequency interference, effectively causing mobile users to lose their signal or experience a significant drop in quality.",
    description: "The authors focus on a 'Denial of Service' (DOS) jamming technique, which they identify as the simplest method to implement.\n\n- Signal Cancellation: The jammer transmits a signal at the same frequency as the target mobile phone but at a higher power level, causing the signals to collide and cancel each other out.\n- Targeting the Downlink: The design prioritizes jamming the downlink frequency (signal from the tower to the mobile device) because the base station is further away and its signal is weaker at the receiver's end, requiring less power for successful disruption.\n- Hardware Architecture: The system consists of an RF stage (including a triangular wave generator, mixer, and Voltage Controlled Oscillator), an amplification stage with RF power amplifiers, and a 1/4 wave monopole antenna with a 2dBi gain.\n- Mathematical Modeling: The methodology includes calculating the Jamming-to-Signal (J/S) ratio and using Free Space Path Loss formulas to determine the necessary output power (calculated at 34dBm for a 10-meter range) to reduce the target device's Signal-to-Noise Ratio (SNR) below its handling capability.",
    comparison: "This paper provides the theoretical and electronic foundation for the 'payload' of the robot. It addresses the proximity-power trade-off, noting that the effective jamming range can be limited by power supply stability. This justifies the use of a mobile robot that can navigate close to a target to compensate for low-power hardware. Additionally, the paper highlights critical legal and safety risks, such as accidentally blocking emergency calls, which are essential considerations when defining the operational logic and 'no-go' zones for an autonomous jamming platform.",
    objectives: "To design and evaluate a localized radio-frequency interference system targeting standard cellular downlinks to establish exclusion zones.",
    gaps: [
      "Fixed Proximity: The device is stationary and cannot move to optimize distance-to-target dynamically.",
      "High Power Requirement: Continuous wideband emission drains power resources quickly without intelligent gating.",
      "Collateral Signal Disruption: High risk of blocking crucial emergency channels due to broad-spectrum interference."
    ],
    questions: [
      "RQ1: How can signal cancellation be achieved with minimal power using directional transmission?",
      "RQ2: What is the optimal mathematical balance between J/S ratio and battery depletion on portable platforms?",
      "RQ3: How do physical obstacles in indoor environments alter the free-space path loss estimations?"
    ]
  },
  {
    title: "Intelligent Jammer on Mobile Network LTE Technology: A Study Case in Bucharest",
    year: "2023",
    venue: "LTE Mobile Communications Study",
    doi: "https://www.researchgate.net/publication/372551465_Intelligent_Jammer_on_Mobile_Network_LTE_Technology_A_Study_Case_in_Bucharest",
    summary: "The primary goal was to create an intelligent jammer that is both financially accessible and capable of disrupting only specific communications. The study focuses on analyzing the behavior of mobile phones and LTE/UMTS networks to develop a software-defined radio (SDR) solution that blocks communications only when active traffic is detected, rather than using broad, continuous jamming.",
    description: "The researchers used a Software Defined Radio (SDR) approach, specifically utilizing the Hack-RF One and a Python-based ecosystem.\n\n- Spectral Analysis: They first analyzed the radio spectrum of local mobile operators to identify active downlink (DL) and uplink (UL) frequencies.\n- Reactive Jamming Logic: Instead of jamming the entire band, the system monitors the uplink connection for signals from a mobile device.\n- Threshold-Triggered Emission: When the signal amplitude on a monitored UL frequency exceeds a predetermined threshold (e.g., -60 dBm or -70 dBm), the system automatically triggers a 15-second jamming emission on the corresponding downlink frequency.\n- Testing Parameters: The effectiveness was calculated using the Signal-to-Interference Ratio (SIR) and tested at various distances, noting that the jamming was most effective within a range of 1.5 to 8 meters given the hardware's power limitations.",
    comparison: "This paper addresses the physical limitations of low-power SDRs. The authors acknowledge that the Hack-RF has a limited range (effectively under 8 meters in their tests), which directly supports the need for a mobile platform (a robot) that can navigate into close range of a target. Furthermore, it provides a blueprint for an autonomous decision-making system where the 'payload' (the jammer) acts independently once its operational parameters are set. Finally, the 'intelligent' approach of targeted jamming helps mitigate the risk of interfering with legitimate communication systems or emergency services outside of the robot's immediate target area.",
    objectives: "To build a reactive Software Defined Radio (SDR) jammer that detects uplink transmissions and triggers localized downlink interference dynamically.",
    gaps: [
      "Extremely Short Range: Operating range is physically restricted to under 8 meters due to Hack-RF power constraints.",
      "Uplink Detection Latency: Delays in spectrum scanning can let initial data packets pass through before the jammer activates.",
      "No Mobilty Control: The SDR system relies on static placement and requires manual repositioning."
    ],
    questions: [
      "RQ1: Can reactive uplink-triggered scanning be optimized to run under 50ms latency on low-power ARM nodes?",
      "RQ2: What is the optimal SIR threshold required to interrupt an LTE connection without causing full network dropouts?",
      "RQ3: How does multi-band LTE frequency hopping affect reactive uplink monitoring algorithms?"
    ]
  },
  {
    title: "Design and Testing of an Arduino-based Network Jammer Device",
    year: "2022",
    venue: "IEEE Xplore",
    doi: "https://ieeexplore.ieee.org/document/9848523",
    summary: "The primary objective of the research is to design and implement a low-cost network jammer using an Arduino to protect against illegal activities like snooping, unauthorized location tracking, and cheating. The authors aim to create a device that is portable, user-friendly, and consumes low power, providing a 'regulatory zone' where cellular or radio devices indicate a 'no service' status.",
    description: "The authors utilize a Denial of Service (DoS) technique, which involves reducing a device's Signal-to-Noise Ratio (SNR) by transmitting noise at the same frequency as the target.\n\n- Hardware Architecture: The system uses two Arduino Nano microcontrollers; one manages the OLED display for the user interface, and the other controls the RF 433 MHz transmitter module.\n- Signal Generation: When activated, the Arduino sends 50 sequences of 3 pulses with widths varying from 50µs to 2.5ms to the RF module. This creates enough distortion to cover the broadest possible bandwidth on the 433 MHz spectrum.\n- Power and Range: The device is powered by a 3.7V Li-Polymer battery with a TP4056 charging module. A telescopic FM antenna is used to extend the jamming signal up to a 100-meter range.\n- Monitoring: An OLED display provides real-time feedback on the jamming frequency, the ON/OFF status, and the current battery voltage.",
    comparison: "This paper explicitly identifies 'mobility' as a key future improvement for their research. It provides a proven hardware blueprint for a jamming payload that is light enough to be carried by a small robotic chassis. Additionally, the testing results confirm an effective range of 100 meters, which provides a clear operational radius that the robot must maintain to be successful. The paper also warns of legal and safety risks, such as interfering with hearing aids or emergency communications, which are critical considerations for the autonomous logic of a jamming robot.",
    objectives: "To develop an affordable, portable network jammer utilizing Arduino microcontrollers and pulsed RF modules to create a local wireless security zone.",
    gaps: [
      "Fixed Interference Protocol: The pulse patterns are hardcoded and cannot adapt dynamically to intelligent frequency hops.",
      "Basic UI Integration: The OLED interface is local and lacks any remote networking or teleoperation capability.",
      "Regulatory Interference Risk: Broad noise generation can easily spill over into critical neighboring frequency bands."
    ],
    questions: [
      "RQ1: How can variable pulse width algorithms be customized to maximize the spectral noise density on 433MHz?",
      "RQ2: What are the battery performance implications of continuous transmission versus pulsed transmission on 3.7V LiPo cells?",
      "RQ3: How can we implement remote telemetry on Arduino nodes without introducing self-interference in the RF payload?"
    ]
  },
  {
    title: "An Extensive Classification of 5G Network Jamming Attacks",
    year: "2024",
    venue: "International Journal of Information Security",
    doi: "https://link.springer.com/journal/10207",
    summary: "Presents a comprehensive taxonomy of jamming attacks targeting 5G wireless infrastructures. Classifies radio-frequency interference vectors across physical, MAC, and protocol layers to establish protective baselines.",
    description: "Analyzes specific vulnerability surfaces in the 5G New Radio (NR) standards, focusing on how control channels (like PBCH and PDCCH) can be disrupted with low-power targeted interference. Compares random, constant, deceptive, and reactive jamming models under high-speed multi-user MIMO networks.",
    comparison: "Provides 5G protocol-layer target profiles for Aegis's jamming payload. Rather than brute-force signal blocking, it informs tactical protocols to disrupt connection handshakes directly at the control channel level, thereby maximizing battery life on the robotic platform.",
    objectives: "To compile and categorize modern jamming methodologies against 5G NR networks, identifying critical protocol-level vulnerabilities.",
    gaps: [
      "Theoretical Focus: Discusses attack models mathematically but lacks experimental validation on physical SDR testbeds.",
      "No Spatial Dynamics: Assumes static locations for attackers and receivers, omitting the effect of autonomous moving nodes.",
      "Complexity of Defense: Relies on heavy cryptographic solutions rather than physical avoidance or location-based mitigation."
    ],
    questions: [
      "RQ1: What are the key vulnerabilities in the 5G New Radio (NR) synchronization signals (PSS/SSS)?",
      "RQ2: Can low-power software-defined radios replicate high-complexity deceptive jamming on MIMO beams?",
      "RQ3: How do beamforming algorithms in 5G base stations defend against moving interference sources?"
    ]
  },
  {
    title: "Live Feed Capture using Arduino Controlled RC Car",
    year: "2020",
    venue: "International Journal of Engineering Research & Technology",
    doi: "https://www.ijert.org/",
    summary: "Focuses on designing a low-cost remote-controlled vehicle equipped with a wireless camera to stream real-time video feeds back to a central operator console via analog RF or Wi-Fi channels.",
    description: "Implements a system architecture integrating an Arduino microcontroller to handle steering/motor commands while a separate 2.4GHz/5.8GHz camera module transmits analog video to a receiver screen. Explores latency minimization and power distribution layouts between telemetry and drive batteries.",
    comparison: "Illustrates low-cost video streaming foundations. Aegis advances this architecture by replacing simple remote steering controls with autonomous ROS2 Nav2 local mapping, utilizing unified digital camera frames processed directly on-board rather than basic analog transmission.",
    objectives: "To engineer a low-cost RC vehicle capable of transmitting live wireless video telemetry to a remote monitoring station with minimal lag.",
    gaps: [
      "Manual Remote Control: Requires continuous human steering inputs and lacks autonomous trajectory planning or collision avoidance.",
      "Analog Signal Degradation: Video feed suffers high noise and disruption in indoor environments or near electromagnetic interference.",
      "Single-Threaded Processing: Arduino controller is unable to process visual data locally, serving only as a basic actuator interface."
    ],
    questions: [
      "RQ1: How can analog 5.8GHz video transmission latency be minimized below 20ms for real-time robotic steering?",
      "RQ2: What is the impact of motor EMF noise on co-located RF video transceivers, and how can they be isolated?",
      "RQ3: Can basic visual line-following algorithms be executed on low-power microcontrollers without external GPUs?"
    ]
  },
  {
    title: "Design and development of an Autonomous Self-Driving RC Car for the Emirates Robotics Competition in 2023: with emphasis on Hardware and Software",
    year: "2023",
    venue: "Emirates Robotics Competition Proceedings",
    doi: "https://www.researchgate.net/publication/376264901_Design_and_development_of_an_Autonomous_Self-Driving_RC_Car_for_the_Emirates_Robotics_Competition_in_2023_with_emphasis_on_Hardware_and_Software",
    summary: "The primary objective of the study was to build an autonomous self-driving 1/10th scale remote-controlled car to compete in the 2023 Emirates Robotics Competition. Beyond the competition, the researchers aimed to explore and validate suitable technologies for urban autonomous vehicles, specifically focusing on obstacle detection, road following, and vehicle control through modified deep learning algorithms.",
    description: "The researchers employed a sophisticated hardware and software stack to achieve high-speed autonomous navigation:\n\n- Computing Hardware: They used the Waveshare JetRacer Pro AI Kit B, powered by the NVIDIA Jetson Nano. This platform was chosen for its 128-core Maxwell GPU, which enables local on-board processing of deep learning models that standard microcontrollers cannot handle.\n- Software Architecture: The system uses an end-to-end software pipeline that employs a Convolutional Neural Network (CNN). This architecture directly translates raw sensor (camera) input into control outputs like steering and throttle.\n- Neural Network Design: They utilized the ResNet-18 architecture due to its efficiency, faster training times, and fewer parameters, making it ideal for local computation on a small robot.\n- Sensor Strategy: A dual-camera setup was implemented to simplify the algorithm: a CMOS camera (IMX 219) for racetrack tracking and a separate webcam kept at an inclined angle to detect traffic signals without adding 'noise' to the primary navigation model.\n- Training: Models were trained for behavioral planning, including 'extreme conditions' like zig-zag motions, to ensure the car could recover its position and remain centered on its path.",
    comparison: "This paper acts as a direct structural model for our 1/10th scale autonomous vehicle chassis. While the Emirates Competition car uses end-to-end CNN steering specifically for track-following under clear illumination, Aegis utilizes a full ROS2 stack (Nav2) coupled with LiDAR-IMU sensor fusion for robust path planning and obstacle avoidance in cluttered, dynamic, and unlit indoor environments.",
    objectives: "To build and program a high-speed 1/10th scale self-driving RC car for track racing utilizing local Jetson Nano GPU computation and neural network steering outputs.",
    gaps: [
      "Track-Bound Optimization: Neural networks are trained specifically for racetrack contours and fail on generic indoor corridors or off-road navigation.",
      "High Power Consumption: Jetson Nano running continuous deep learning inference drains batteries rapidly, limiting operational duration.",
      "Static Traffic Light Classifier: Traffic light detection uses rigid angle frames and fails under varying ambient lighting or shadow conditions."
    ],
    questions: [
      "RQ1: How can ResNet-18 model sizes be optimized/quantized to double the inference frequency on Jetson Nano modules?",
      "RQ2: What training behaviors are required to teach a 1/10th scale vehicle to recover from dynamic tire slippage?",
      "RQ3: How can dual-camera frameworks be combined into a single visual pipeline to reduce hardware resource contention?"
    ]
  }
];

export default function MohdAshrafulIslamReviewPage() {
  return <MohdAshrafulIslamReviewClient papers={papers} />;
}
