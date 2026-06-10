import React from "react";
import NijumBaruaReviewClient from "./NijumBaruaReviewClient";

export const metadata = {
  title: "Nijum Barua - Literature Survey | Xyberox Robotics",
  description: "Literature review compiled by Nijum Barua focusing on human-robot interaction, natural language processing, and autonomous path planning.",
};

const papers = [
  {
    title: "RoboInsight: Towards Deploying an Affordable Museum Guide Robot with Natural Language Processing, Image Processing and Interactive Engagement",
    year: "2024",
    venue: "HCI",
    doi: "https://doi.org/10.1007/978-3-031-76815-6_26",
    summary: "RoboInsight is an affordable museum guide robot designed to enhance visitor experiences through advanced natural language processing (NLP), image processing, and interactive engagement capabilities. The project aims to provide accessible robotic guidance technology for museums with budget constraints.",
    description: "This paper explores integrating robotics, image processing, and natural language processing (NLP) in an affordable museum guide bot. The research focuses on creating a museum guide robot that enables interactive engagement with visitors through NLP, image recognition/navigation, and visitor experience enhancement.",
    comparison: "The DOI paper is about building a friendly museum guide robot that talks to visitors in safe environments, while your project is about creating a tactical combat robot that operates autonomously in dangerous situations to save lives and provide intelligence where humans cannot go safely.",
    objectives: "To develop an affordable museum guide robot that provides autonomous navigation and interactive visitor engagement through advanced AI technologies.",
    gaps: [
      "Cost Barrier: Existing museum guide robots are expensive and inaccessible for budget-limited institutions",
      "Limited AI Integration: Most robots lack advanced NLP and image processing capabilities",
      "Passive Interaction: Traditional robots provide scripted, non-conversational explanations",
      "Navigation Challenges: Poor obstacle avoidance in crowded museum environments",
      "Personalization: Limited ability to adapt tours based on visitor preferences",
      "Scalability: Existing solutions not easily deployable across different museum types"
    ],
    questions: [
      "RQ1: Can an affordable museum guide robot with NLP and image processing effectively enhance visitor experiences?",
      "RQ2: How does the integration of GPT-4-based conversational AI improve visitor engagement compared to scripted explanations?",
      "RQ3: What is the navigation accuracy of SLAM-based path planning in crowded museum environments?"
    ]
  },
  {
    title: "Developing an Interactive Guidance Robot for University Libraries: A Design-Based Research Approach",
    year: "2024",
    venue: "Academic thesis from Tampere University",
    doi: "https://doi.org/10.1109/HRI61500.2025.10974000",
    summary: "Explore user expectations, cross-cultural needs, latent needs, and trials with new students to understand participant experiences with a library guidance robot.",
    description: "The HRI 2025 paper is about building a friendly library guidance robot that helps university students find books and navigate a safe campus environment.",
    comparison: "The HRI 2025 paper is about building a friendly library guidance robot that helps university students find books and navigate a safe campus environment, while your project is about creating a tactical combat robot that enters dangerous buildings to rescue hostages, detect threats, and provide critical intelligence where humans cannot safely go.",
    objectives: "To design an interactive university guidance robot that helps students navigate university libraries with relevant information through a design-based research approach.",
    gaps: [
      "Cultural Variability: Existing robots don't account for cultural differences in user needs",
      "Latent User Needs: Most robots miss unspoken requirements that vary by culture",
      "Limited Cross-Cultural Trials: Few studies test robots across Finnish, Chinese, and Indian cultures",
      "User Experience Understanding: Lack of deep understanding of student experiences with library robots",
      "Task Preference Knowledge: Unclear what tasks students prefer most from guidance robots",
      "Design Science Integration: Limited application of Design Science Research (DSR) with User-Centered Design (UCD) in library robotics"
    ],
    questions: [
      "RQ1: What are the latent user needs for a university library guidance robot that vary according to Finnish, Chinese, and Indian cultures?",
      "RQ2: How can design-based research approach effectively identify user expectations for library guidance robots?",
      "RQ3: What are the preferred tasks among university students for a guidance robot in library settings?"
    ]
  },
  {
    title: "Exploring the Dynamics of User Experience and Interaction in XR-Enhanced Robotic Surgery: A Systematic Review",
    year: "2024",
    venue: "Frontiers in Virtual Reality",
    rating: "Q1",
    doi: "https://doi.org/10.3389/frvir.2024.1461105",
    summary: "Address the HRI gap, synthesize literature to identify challenges and opportunities, and enhance patient care through improved XR-enhanced robotic surgery platforms.",
    description: "This paper studies how surgeons experience XR/virtual reality interfaces during robotic surgery training in a safe medical environment.",
    comparison: "This paper studies how surgeons experience XR/virtual reality interfaces during robotic surgery training in a safe medical environment, while your project builds an autonomous combat robot that navigates dangerous buildings independently to rescue hostages and detect threats without human control.",
    objectives: "To elucidate Human-Robot Interaction (HRI) dynamics within XR-aided Robotic-Assisted Surgery (RAS) systems, emphasizing their impact on User Experience (UX) and overall surgical outcomes.",
    gaps: [
      "Underexplored HRI: Despite multiple reviews on technological and medical aspects, crucial elements of human-robot interaction (HRI) remain underexplored",
      "UX Underaddressed: User experience (UX) elements are not adequately addressed in existing robotic surgery literature",
      "Limited Interaction Dynamics: Few studies elucidate HRI dynamics within XR-aided RAS systems"
    ],
    questions: [
      "RQ1: How do affective, perceptual, cognitive, and motor experiences contribute to overall surgeon UX in XR-enhanced robotic surgery?",
      "RQ2: What are the interaction modalities between surgeons and XR interfaces that affect efficiency and ability to operate remotely?",
      "RQ3: What challenges and opportunities exist in XR-enhanced robotic surgery that need systematic identification?"
    ]
  },
  {
    title: "Roopkotha: A Companion Robot for Enhancing Interactive Storytelling with Natural Interaction",
    year: "2024",
    venue: "2024 3rd International Conference on Pattern Recognition and Image Processing (PRIP)",
    doi: "https://doi.org/10.1109/ICIPRoB62548.2024.10543303",
    summary: "Combine traditional and technology storytelling methods, integrate voice recognition with Bangla Language processing, and implement emotion recognition technology.",
    description: "Roopkotha is a therapeutic storytelling companion robot that uses Bangla language processing and emotion recognition to help lonely elderly people and children with disabilities in safe indoor environments.",
    comparison: "Roopkotha is a therapeutic storytelling companion robot that uses Bangla language processing and emotion recognition to help lonely elderly people and children with disabilities in safe indoor environments, while your project builds a military-grade autonomous combat robot that navigates dangerous buildings independently to rescue hostages and detect threats where humans cannot safely go.",
    objectives: "To revolutionize storytelling by creating a companion robot that seamlessly combines traditional storytelling methods with technology, creating a captivating robot storyteller with natural interaction capabilities.",
    gaps: [
      "Language Processing: Limited storytelling robots with Bangla language processing capabilities",
      "Emotional Connection: Few robots achieve deep emotional connection with users during storytelling",
      "Natural Interaction: Lack of natural interaction capabilities in traditional storytelling robots"
    ],
    questions: [
      "RQ1: How does Bangla language processing improve user engagement in storytelling compared to English-only systems?",
      "RQ2: What is the impact of emotion recognition technology on the depth of emotional connection between users and the storytelling robot?",
      "RQ3: How does human behavior detection enable adaptive storytelling interactions?"
    ]
  },
  {
    title: "Intelligent Rover: An IoT Based Smart Surveillance Robotic Car for Military",
    year: "2023",
    venue: "IEEE Xplore",
    doi: "https://ieeexplore.ieee.org/abstract/document/10143011",
    summary: "This paper presents an IoT-based smart surveillance robotic car designed for military applications, focusing on remote video streaming, obstacle avoidance, and sensor integration to provide real-time battlefield monitoring and intelligence gathering.",
    description: "The research develops an IoT-controlled rover platform equipped with cameras and sensors (such as gas, temperature, and ultrasonic sensors) to survey hostile zones. The data is processed and sent back to military operators to aid decision-making.",
    comparison: "The IoT Rover relies on active wireless network connections for cloud telemetry and control, whereas Project Aegis is specifically engineered for complete radio silence and local edge-computed autonomy to navigate extreme signal-denied environments.",
    objectives: "To design and implement a smart, IoT-enabled surveillance robotic car that enhances tactical reconnaissance and field security for military applications.",
    gaps: [
      "Network Dependency: Heavy reliance on active internet/cloud connections, making the platform vulnerable in signal-jammed or network-denied areas",
      "Processing Bottlenecks: Cloud-dependent computation introduces data latency which is unacceptable in split-second combat scenarios",
      "Physical Security: Lack of edge-based cryptographic hardening or anti-tamper mechanisms on the rover's node interface"
    ],
    questions: [
      "RQ1: How does IoT-based sensor fusion improve reconnaissance accuracy for military robotic cars?",
      "RQ2: What is the impact of network latency on the real-time control of surveillance rovers in hostile areas?",
      "RQ3: Can local sensor backup states maintain rover navigation when cloud connectivity is temporarily lost?"
    ]
  },
  {
    title: "ROVER: Route Origin Verification Using DNS",
    year: "2013",
    venue: "IEEE",
    doi: "https://ieeexplore.ieee.org/abstract/document/6614187",
    summary: "This paper explores ROVER (Route Origin Verification using DNS), a system designed to secure Internet routing by verifying the origin of BGP route advertisements using DNSSEC.",
    description: "ROVER leverages DNSSEC to store and distribute route origin authorization (ROA) profiles, presenting an alternative to Resource Public Key Infrastructure (RPKI) to prevent BGP hijacking and routing leaks.",
    comparison: "ROVER addresses global internet routing security using DNSSEC database checks, whereas Project Aegis secures its localized mesh networks and communication channels through decentralized hardware keys and radio-silent encryption, independent of any external global DNS/routing registry.",
    objectives: "To evaluate DNSSEC as an alternative security architecture for route origin verification to mitigate prefix hijacking on the global Internet.",
    gaps: [
      "Query Latency: Real-time DNS lookups during routing convergence can delay path selections",
      "Key Management: Relies heavily on the DNS root key roll and DNS zone security integrity",
      "Tactical Deployment: Not designed for ad-hoc, localized tactical networks where global DNSSEC records are unreachable"
    ],
    questions: [
      "RQ1: Can DNSSEC-based verification effectively mitigate BGP prefix hijacking on a global scale?",
      "RQ2: What is the performance overhead of real-time DNS queries on BGP router convergence times?",
      "RQ3: How resilient is the ROVER architecture to distributed denial-of-service (DDoS) attacks on DNS root authorities?"
    ]
  },
  {
    title: "The use of the social robot NAO to enhance communication skills in children with autism spectrum disorder: A systematic review of studies from 2013–2019 to 2020–2025",
    year: "2025",
    venue: "Clinical Review Journal",
    rating: "Q2",
    doi: "https://doi.org/10.1177/10554181251367984",
    summary: "The NAO robot is a therapeutic social companion that helps children with autism develop communication skills through structured, repetitive exercises in safe clinical settings.",
    description: "This paper evaluates the role of the NAO robot in enhancing the communication skills of children with autism spectrum disorder (ASD) across two distinct time periods (2013–2019 and 2020–2025), highlighting advancements in both SAR-based interventions and NAO's technological capabilities.",
    comparison: "The NAO robot is a therapeutic social companion that helps children with autism develop communication skills through structured, repetitive exercises in safe clinical settings, while your project builds a military-grade autonomous combat robot that navigates dangerous buildings independently to rescue hostages and detect threats where humans cannot safely go.",
    objectives: "To evaluate the role of the NAO robot in enhancing the communication skills of children with autism spectrum disorder (ASD) across two distinct time periods (2013–2019 and 2020–2025), highlighting advancements in both SAR-based interventions and NAO's technological capabilities.",
    gaps: [
      "Limited NAO Evaluation: Less attention has been paid to evaluating the role of the NAO robot specifically in enhancing communication skills of children with ASD",
      "Cross-Period Comparison: No systematic review has compared NAO-assisted interventions across different time periods (2013-2019 vs 2020-2025)",
      "Technological Advancements: Few studies track how NAO's technological capabilities have evolved over time"
    ],
    questions: [
      "RQ1: What types of interventions have been implemented using NAO for ASD communication skills improvement?",
      "RQ2: What are NAO's functional characteristics that make it effective for ASD therapy?",
      "RQ3: How does NAO's effectiveness in facilitating social communication compare between the two time periods (2013-2019 vs 2020-2025)?"
    ]
  },
  {
    title: "“Jam Me If You Can”: Defeating Jammer with Deep Dueling Neural Network Architecture and Ambient Backscattering Augmented Communications",
    year: "2019",
    venue: "IEEE JSAC",
    rating: "Q1",
    doi: "https://doi.org/10.1109/JSAC.2019.2933889",
    summary: "This paper proposes an intelligent anti-jamming communication framework that combines Deep Dueling Neural Networks (DDQN) with Ambient Backscatter Communication (AmBC). The system allows a transmitter to learn jammer behavior and dynamically select communication strategies in hostile wireless environments.",
    description: "Uses deep reinforcement learning (deep dueling neural network) to learn a jammer's behavior and choose anti-jamming actions. Introduces ambient backscatter communication: instead of only avoiding the jammer, the transmitter can reflect existing RF signals (including jamming signals) to communicate.",
    comparison: "This paper explores active, AI-empowered anti-jamming using deep reinforcement learning and backscatter signal exploitation, which provides a key mathematical foundation for Project Aegis's mission to maintain communication channels in hostile, jammed environments.",
    objectives: "To allow wireless nodes to effectively 'face' the jammer (instead of escaping) by first learning its jamming strategy, then adapting the rate or transmitting information right on the jamming signal using deep dueling neural network architecture and ambient backscattering augmented communications.",
    gaps: [
      "Reactive Anti-Jamming Limitation: Conventional solutions (frequency hopping, spread spectrum) escape/hide from jammers rather than facing them",
      "Lack of Timely Knowledge: Reactive approaches constrained by lack of timely knowledge of jamming attacks",
      "Q-Learning Convergence Problem: Q-learning notorious for slow convergence to optimal policy with large state/action spaces"
    ],
    questions: [
      "RQ1: How does the deep dueling neural network architecture improve countermeasure learning speed compared to traditional Q-learning?",
      "RQ2: What is the impact of ambient backscattering on transmission rate under smart and reactive jamming attacks?",
      "RQ3: How does average throughput improve using the proposed deep dueling approach with ambient backscattering?"
    ]
  },
  {
    title: "On the evaluation of the impact of jamming attacks on cooperative, connected, and automated mobility",
    year: "2026",
    venue: "Doctoral thesis / Chalmers University",
    doi: "https://doi.org/10.63959/chalmers.dt/5829",
    summary: "This research evaluates how jamming attacks affect Cooperative, Connected, and Automated Mobility (CCAM) systems used in modern intelligent transportation networks.",
    description: "Studies how different jamming attacks affect cooperative, connected, and automated mobility (CCAM) systems where vehicles exchange safety-critical information, focusing on communication delay, Denial-of-Service (DoS), deceptive jamming, and destructive/barrage jamming.",
    comparison: "This Chalmers thesis studies the impact of jamming on connected autonomous mobility platforms, providing crucial metrics for Project Aegis on how communication delay and deceptive jamming affect automated team coordination.",
    objectives: "To propose a security benchmarking reference model that enables structured, repeatable evaluation of CCAM (Cooperative, Connected, and Automated Mobility) systems' resilience against communication-jamming attacks, supporting both simulation-based and physical testing.",
    gaps: [
      "Primary Gap: Only limited studies address jamming attacks on CCAM systems",
      "Critical Gap: No prior study has proposed a framework for defining security benchmarks to evaluate CCAM systems against jamming attacks"
    ],
    questions: [
      "RQ1: How can security benchmarks be defined to systematically evaluate CCAM systems against communication-jamming attacks?",
      "RQ2: How can jamming attacks be modeled and injected in simulation environments to assess CCAM resilience?"
    ]
  },
  {
    title: "Machine Learning-Based Jamming Detection for Safety Applications in Vehicular Networks: Individual Detection?",
    year: "2023",
    venue: "Security and Communication Networks",
    doi: "https://onlinelibrary.wiley.com/doi/10.1155/2023/8080669",
    summary: "Machine learning-based approach for detecting jamming attacks in vehicular communication networks, focusing on safety-critical applications.",
    description: "Builds machine-learning models to detect jamming attacks in vehicular networks (V2X) for safety applications by collecting/calibrating communication data, extracting features of packet delivery/channel behavior, and training classifiers to distinguish normal operation from jamming.",
    comparison: "This study investigates machine-learning classifiers for node-level jamming detection, which directly informs Project Aegis's embedded intelligence stack on how individual robot sensors can detect and classify RF jamming locally.",
    objectives: "To investigate the application of machine-learning models for jamming detection by analyzing how the approach works on individual observations of vehicles in different scenarios, proposing an ML-based approach that explores hidden rules of how observations change under reactive jamming attacks.",
    gaps: [
      "Primary Gap: Existing jamming detection methods don't adequately address individual vehicle-level detection in dynamic, heterogeneous vehicular networks",
      "Detection Gap: Most methods focus on network-level or aggregate detection rather than per-vehicle individual observations"
    ],
    questions: [
      "RQ1: How do machine-learning models perform on individual observations of vehicles in different vehicular network scenarios?",
      "RQ2: What hidden rules govern how vehicle observations change under reactive jamming attacks?",
      "RQ3: Can an ML-based approach improve jamming detection accuracy compared to existing methods for safety applications?"
    ]
  },
  {
    title: "How to Combat Reactive and Dynamic Jamming Attacks with Reinforcement Learning",
    year: "2025",
    venue: "IEEE",
    doi: "https://arxiv.org/abs/2510.02265",
    summary: "Investigates the use of Reinforcement Learning (RL) to defend against reactive and dynamic jamming attacks in wireless communication systems.",
    description: "Addresses reactive and dynamic jammers that sense ongoing transmissions and adapt their jamming strategy. Models the transmitter–receiver pair as RL agents, using Q-learning and Deep Q-Networks (DQN) to adapt channel selection, modulation, and transmit power.",
    comparison: "This paper provides RL algorithms for dynamic channel selection against reactive jammers, which helps Project Aegis design self-healing communication links that adaptively shift channels when a jammer attacks.",
    objectives: "To study the problem of mitigating reactive jamming where a jammer adopts a dynamic policy of selecting channels and sensing thresholds to detect and jam ongoing transmissions, allowing the transmitter-receiver pair to learn to avoid jamming and optimize throughput over time.",
    gaps: [
      "Primary Gap: Most RL studies against jammers treat each time slot as an independent decision epoch instead of a true MDP where actions shape future states",
      "Critical Gap: Previous works use jammer models that ignore transmitter actions, collapsing to bandit or block-MDP models"
    ],
    questions: [
      "RQ1: How can reactive jamming be mitigated in single and multi-channel environments by modeling the interaction as an MDP?",
      "RQ2: How can RL (Q-learning and DQN) enable the transmitter-receiver pair to adapt power, modulation, and channel selection without prior knowledge of jamming strategies?",
      "RQ3: What is the effectiveness of RL in adapting to changing jamming strategies and spectrum conditions over time?"
    ]
  },
  {
    title: "Performance of AI-Empowered Anti-Jamming Communications under Hardware Impairments",
    year: "2024",
    venue: "IEEE",
    doi: "https://ieeexplore.ieee.org/document/10881377/",
    summary: "This paper examines the impact of hardware imperfections on AI-based anti-jamming communication systems, finding that hardware impairments can make prediction harder.",
    description: "Evaluates an AI-empowered wireless link employing reinforcement learning to counteract reactive jamming. It introduces realistic hardware imperfections (HWI) such as sensing errors, false alarms, and missed detections, exploring how these impairments impact system learning and communication throughput.",
    comparison: "This research focuses on modeling hardware imperfections in communication nodes during reinforcement learning anti-jamming tasks, which aligns with Project Aegis's requirement to operate reliably on physical hardware subject to real-world RF interference and sensing inaccuracies.",
    objectives: "To quantify the effect of Hardware Imperfections (HWI) on AI-empowered anti-jamming wireless communication scenarios by considering an AI-empowered wireless link that employs reinforcement learning (RL) to counteract reactive jamming attacks.",
    gaps: [
      "Primary Gap: Existing RL anti-jamming studies assume ideal hardware without considering hardware imperfections (HWI) in practical wireless systems",
      "Critical Gap: No prior work quantifies how HWI affects AI-empowered anti-jamming specifically, particularly detection errors in reactive jamming"
    ],
    questions: [
      "RQ1: How do hardware imperfections (HWI) affect the performance of RL-driven anti-jamming wireless communication links?",
      "RQ2: What is the impact of jammer's detection errors (false alarms and miss-detections) on reactive jamming effectiveness against AI-empowered communications?",
      "RQ3: Can imperfections in the jammer's spectrum sensing capability actually enhance jamming performance against AI-empowered anti-jamming systems?"
    ]
  },
  {
    title: "JamShield: A Machine Learning Detection System for Over-the-Air Jamming Attacks",
    year: "2026",
    venue: "IEEE",
    doi: "https://arxiv.org/abs/2507.11483",
    summary: "JamShield proposes a practical machine learning-based framework for detecting over-the-air jamming attacks in wireless communication systems using real-world measurements.",
    description: "Evaluate the threat (measure how jamming affects networks/vehicles), detect the attack (use ML to identify jamming features), adapt to the attack (use RL to change transmission behavior), and exploit the jammer (using jammer's signal via ambient backscatter).",
    comparison: "JamShield introduces a deployable machine-learning jamming detection system utilizing real over-the-air data, which is highly valuable for Project Aegis's real-time threat-classification stack to distinguish jamming attacks from passive environmental noise.",
    objectives: "To introduce JamShield, a dynamic jamming detection system that addresses limitations of current jamming detection methods by training on real over-the-air data, utilizing hybrid feature selection, and employing an auto-classification module.",
    gaps: [
      "Primary Gap: Current jamming detection methods rely on simulated data or proprietary over-the-air datasets with limited cross-layer features",
      "Critical Gap: Existing datasets fail to accurately represent real network state, limiting effectiveness in real-world scenarios"
    ],
    questions: [
      "RQ1: How can jamming detection be improved using real over-the-air data instead of simulated/proprietary datasets?",
      "RQ2: What is the impact of hybrid feature selection on detection accuracy and efficiency for jamming attacks?",
      "RQ3: Can an auto-classification module that dynamically adjusts algorithms improve detection performance under varying network conditions?"
    ]
  }
];

export default function NijumBaruaReviewPage() {
  return <NijumBaruaReviewClient papers={papers} />;
}
