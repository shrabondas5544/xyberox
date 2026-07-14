"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import piZeroPic from "../../physical components/pi zero 2.png";
import lm2596Pic from "../../physical components/lm2596.png";
import microSdPic from "../../physical components/microsd.png";
import otgCablePic from "../../physical components/otg-cable.png";
import lcdDisplayPic from "../../physical components/lcd-display.png";
import csiCablePic from "../../physical components/csi-cable.png";
import max98357aPic from "../../physical components/max98357a.png";
import speakerPic from "../../physical components/speaker.png";
import chassisPic from "../../physical components/chassis.png";
import ttMotorPic from "../../physical components/tt-motor.png";
import ttMotorClipPic from "../../physical components/tt-motor-clip.png";
import wheelPic from "../../physical components/wheel.png";
import lipoBatteryPic from "../../physical components/lipo-battery.png";

interface ComponentSpec {
  [key: string]: string;
}

interface ComponentItem {
  id: string;
  name: string;
  category: "processing" | "hri" | "mobility" | "power" | "security" | "structural" | "sensors";
  categoryLabel: string;
  reason: string;
  quantity: string | number;
  specs: ComponentSpec;
  pins?: string[];
  bootLogs?: string[];
  voltage?: string;
  interface?: string;
  priceStatus?: string;
  image?: any;
  purchaseLink?: string;
}

export default function ComponentsListClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem | null>(null);
  const [isCrtEnabled, setIsCrtEnabled] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Audio synthesis helper for retro hacking interface sounds
  const playBeep = (type: "click" | "hover" | "success" | "toggle") => {
    if (!isSoundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(900, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
      } else if (type === "hover") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(1400, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.03);
      } else if (type === "success") {
        osc.type = "square";
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.setValueAtTime(950, audioCtx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      } else if (type === "toggle") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      }
    } catch (e) {
      console.log("Audio synthesis blocked:", e);
    }
  };

  const categories = [
    { id: "all", label: "00_ALL_MODULES", count: 27 },
    { id: "processing", label: "01_CORE_PROCESSING", count: 3 },
    { id: "hri", label: "02_HRI_SUBSYSTEM", count: 5 },
    { id: "mobility", label: "03_MOBILITY_CHASSIS", count: 5 },
    { id: "power", label: "04_POWER_DISTRIBUTION", count: 5 },
    { id: "security", label: "05_SECURITY_PAYLOAD", count: 3 },
    { id: "structural", label: "06_STRUCTURAL_WIRING", count: 3 },
    { id: "sensors", label: "07_EXPANSION_SENSORS", count: 3 },
  ];

  const components: ComponentItem[] = [
    {
      id: "processing-1",
      name: "Raspberry Pi Zero 2 W",
      category: "processing",
      categoryLabel: "PROCESSING",
      reason: "The central Single-Board Computer (SBC). It hosts the headless Linux environment, handles multi-threaded script execution, processes offline timers, and executes local deep learning computer vision models on the edge.",
      quantity: 1,
      voltage: "5.0V DC",
      interface: "GPIO, USB, CSI, HDMI",
      priceStatus: "4690",
      purchaseLink: "https://store.roboticsbd.com/raspberry-pi/872-raspberry-pi-zero-2-w-robotics-bangladesh.html",
      image: piZeroPic,
      specs: {
        "CPU": "Broadcom BCM2710A1 Quad-Core 64-bit ARM Cortex-A53 @ 1GHz",
        "RAM": "512MB LPDDR2 SDRAM",
        "Wi-Fi": "2.4GHz 802.11 b/g/n Wireless LAN",
        "Bluetooth": "Bluetooth 4.2, BLE (Bluetooth Low Energy)",
        "Dimensions": "65mm x 30mm x 5mm",
        "OS Platform": "headless Raspberry Pi OS (Debian Bullseye/Bookworm)"
      },
      pins: [
        "Pin 02: 5V Power In",
        "Pin 06: Ground",
        "Pin 19: SPI MOSI (Round Display)",
        "Pin 23: SPI SCLK (Round Display)",
        "Pin 24: SPI CS (Round Display)",
        "Pin 12: I2S BCLK (MAX98357A)",
        "Pin 35: I2S LRCLK (MAX98357A)",
        "Pin 40: I2S DOUT (MAX98357A)",
        "Pin 03: I2C SDA (MPU-9250)",
        "Pin 05: I2C SCL (MPU-9250)"
      ],
      bootLogs: [
        "[BOOT] Initializing BCM2710A1 core processor clocking at 1.0 GHz...",
        "[BOOT] 512MB RAM detected. Reserving 64MB for GPU video memory.",
        "[INFO] Initializing headless Linux kernel on root filesystem /dev/mmcblk0p2...",
        "[SYSTEM] Activating core neural inference pipelines. Edge execution ready."
      ]
    },
    {
      id: "processing-2",
      name: "MicroSD Card (32GB or 64GB, Class 10)",
      category: "processing",
      categoryLabel: "PROCESSING",
      reason: "Acts as the robot's primary hard drive. It stores the operating system file system, Python source code, software dependencies, and quantized machine learning models.",
      quantity: 1,
      voltage: "3.3V DC (Internal)",
      interface: "SDIO",
      priceStatus: "1,600",
      purchaseLink: "https://www.startech.com.bd/sandisk-ultra-32gb-100mbps-micro-sdhc-uhs-i-memory-card",
      image: microSdPic,
      specs: {
        "Storage Capacity": "32GB / 64GB High-Endurance",
        "Speed Rating": "Class 10, UHS-I Speed Class 3 (U3)",
        "Read Rate": "Up to 100 MB/s",
        "Write Rate": "Up to 30 MB/s (min 10 MB/s continuous)",
        "Filesystem Format": "ext4 (Linux Root), fat32 (Boot bootloader)"
      },
      pins: [
        "Dat0-3: Bi-directional high-speed data lines",
        "CLK: SD Clock line linked to BCM2710 SDIO interface",
        "CMD: Command/Response line"
      ],
      bootLogs: [
        "[STORAGE] Card detected at mmc0 bus. Broadcom high-speed SDIO enabled.",
        "[STORAGE] Root partition loaded: UUID=a6b8-4c12-33cf-9988-fa12.",
        "[STORAGE] Health: 100% block integrity verified. Bad block scan complete (0 bad blocks)."
      ]
    },
    {
      id: "processing-3",
      name: "Micro-USB OTG Cable & Mini-HDMI Adapter",
      category: "processing",
      categoryLabel: "PROCESSING",
      reason: "Mandatory for the initial standalone setup phase to connect a temporary hardware keyboard and monitor before running the system completely headless.",
      quantity: "1 kit",
      voltage: "Passive",
      interface: "USB-A, HDMI Standard",
      priceStatus: "190",
      purchaseLink: "https://store.roboticsbd.com/cables-wire/4205-micro-usb-otg-adapter-cable-micro-b-male-to-usb-a-female-blue-robotics-bangladesh.html",
      image: otgCablePic,
      specs: {
        "OTG Configuration": "ID pin grounded to enable USB Host mode on Pi Zero port",
        "OTG Connectors": "Micro-USB Male to standard USB Type-A Female",
        "HDMI Config": "Mini-HDMI Male to standard HDMI Type-A Female",
        "Resolution Support": "1080p Full HD @ 60Hz passive conversion"
      },
      bootLogs: [
        "[OTG] Sense pin grounded on micro-USB port. Switching to HOST mode.",
        "[OTG] standard USB hub mounted. Keyboard detected at address 0x02.",
        "[HDMI] HDMI Hotplug detected. Resolution negotiated: 1920x1080 @ 60Hz."
      ]
    },
    {
      id: "hri-1",
      name: "GC9A01 1.28-inch Round LCD Display",
      category: "hri",
      categoryLabel: "HRI_FACE",
      reason: "Functions as the dynamic, digital \"face\" of the robot. It renders real-time eye expressions via the SPI bus to communicate internal system states to the operator.",
      quantity: 1,
      voltage: "3.3V DC",
      interface: "SPI Bus",
      priceStatus: "650",
      purchaseLink: "https://store.roboticsbd.com/display/3293-ips-lcd-128-240240-rgb-round-display-gc9a01-robotics-bangladesh.html",
      image: lcdDisplayPic,
      specs: {
        "Controller ID": "GalaxyCore GC9A01",
        "Resolution": "240 x 240 pixels (circular viewport)",
        "Color Space": "16-bit RGB 565 high-contrast color screen",
        "Interface Bus": "4-wire hardware SPI (CLK, MOSI, CS, DC, RST)",
        "Viewing Angle": "IPS wide viewing angle (80/80/80/80)"
      },
      pins: [
        "VCC: 3.3V power pin",
        "GND: Common Ground",
        "SCL: Hardware SPI Clock (GPIO 11)",
        "SDA: Hardware SPI MOSI (GPIO 10)",
        "CS: Chip Select (GPIO 8 / CE0)",
        "DC: Data/Command control pin (GPIO 25)",
        "RST: Hardware Reset pin (GPIO 27)",
        "BLK: Backlight LED control (GPIO 18 - PWM variable brightness)"
      ],
      bootLogs: [
        "[DISPLAY] Powering up GC9A01 controller panel... Voltage 3.3V stable.",
        "[DISPLAY] SPI bus initialized at 32MHz transmission rate.",
        "[DISPLAY] Running test matrix... RGB canvas matching 240x240 circular viewport.",
        "[HRI] Loading eye expression maps: squint.bin, focus.bin, tracking.bin... OK."
      ]
    },
    {
      id: "hri-2",
      name: "Raspberry Pi Zero CSI Camera Module (5MP)",
      category: "hri",
      categoryLabel: "HRI_VISION",
      reason: "The robot's primary vision sensor. It pipes raw, live video data straight to the Pi for real-time localized object tracking and computer vision tasks.",
      quantity: 1,
      voltage: "3.3V / 1.8V (Internal)",
      interface: "CSI (MIPI)",
      specs: {
        "Sensor Model": "Omnivision OV5647 raw CMOS sensor",
        "Still Resolution": "5 Megapixels (2592 x 1944 pixels)",
        "Video Modes": "1080p30, 720p60, 480p90 video capture",
        "Field of View": "65 degrees horizontal FOV",
        "Aperture": "F/2.9 fixed-focus"
      },
      bootLogs: [
        "[CAMERA] CSI bus handshake triggered. OV5647 sensor detected.",
        "[CAMERA] Negotiated 2 MIPI CSI data lanes at 800Mbps clock rate.",
        "[CAMERA] Sensor status: READY. Exposure control set to auto.",
        "[VISION] Starting YOLO edge inference frames capture loop... Frame size 320x320 px."
      ]
    },
    {
      id: "hri-3",
      name: "Pi Zero Specific CSI Ribbon Cable",
      category: "hri",
      categoryLabel: "HRI_VISION",
      reason: "Physically bridges the camera module to the uniquely narrow, high-density CSI port on the Raspberry Pi Zero 2 W.",
      quantity: 1,
      voltage: "Passive",
      interface: "FPC CSI 22-to-15 Pin",
      priceStatus: "250",
      purchaseLink: "https://store.roboticsbd.com/raspberry-pi/1156-raspberry-pi-zero-camera-adapter-robotics-bangladesh.html",
      image: csiCablePic,
      specs: {
        "Connector End A": "22-pin gold-plated FPC, 0.5mm pitch (Raspberry Pi Zero width)",
        "Connector End B": "15-pin gold-plated FPC, 1.0mm pitch (Standard camera width)",
        "Conductor Type": "Flat Flexible Cable (FFC) with electromagnetic shield layer",
        "Cable Length": "150mm total length"
      },
      bootLogs: [
        "[CABLE] CSI interface lines continuity check: PASS.",
        "[CABLE] MIPI differential signal pairs impedance matched at 100 ohms."
      ]
    },
    {
      id: "hri-4",
      name: "MAX98357A I2S DAC Class D Mono Amplifier Module",
      category: "hri",
      categoryLabel: "HRI_AUDIO",
      reason: "Decodes digital audio streams straight from the Pi's I2S bus and amplifies them into a crisp analog output, bypassing the Pi Zero's lack of a headphone jack.",
      quantity: 1,
      voltage: "5.0V DC",
      interface: "I2S Digital Audio",
      priceStatus: "450",
      purchaseLink: "https://store.roboticsbd.com/electronics-module/2919-max98357a-i2s-dac-class-d-mono-amplifier-module-robotics-bangladesh.html",
      image: max98357aPic,
      specs: {
        "DAC Chipset": "Maxim Integrated MAX98357A",
        "Output Configuration": "Class D Filterless Mono Output",
        "Analog Output": "3.2W into 4Ω at 5V / 1.8W into 8Ω at 5V",
        "Sample Rates": "8kHz to 96kHz auto-frequency configuration",
        "Signal-to-Noise Ratio": "99dB dynamic range with low THD+N (0.01%)"
      },
      pins: [
        "LRC: Left/Right Clock (GPIO 35)",
        "BCLK: Bit Clock (GPIO 12)",
        "DIN: Digital Audio Input (GPIO 40)",
        "GAIN: Audio Gain setting (float = 9dB, GND = 12dB, VCC = 3dB)",
        "SD: Shutdown/Mode control (Pull high to enable)",
        "VIN: 5V Power rail",
        "GND: Common Ground"
      ],
      bootLogs: [
        "[AUDIO] I2S digital codec MAX98357A initialized.",
        "[AUDIO] Kernel ALSA card mapped: snd_rpi_simple_audiocard.",
        "[AUDIO] Clock synced: BCLK=3.072MHz, LRCLK=48kHz (32-bit stereo format)."
      ]
    },
    {
      id: "hri-5",
      name: "Stereo Enclosed Speaker (3W, 8Ω)",
      category: "hri",
      categoryLabel: "HRI_AUDIO",
      reason: "Serves as the robot's vocal output mechanism. Being fully enclosed ensures maximum clarity and volume for localized text-to-speech feedback and audible status alerts.",
      quantity: 1,
      voltage: "Amplifier driven",
      interface: "Analog Screw terminals",
      priceStatus: "390",
      purchaseLink: "https://store.roboticsbd.com/sound-sensor-robotics-bangladesh/2307-stereo-enclosed-speaker-3w-8-robotics-bangladesh.html",
      image: speakerPic,
      specs: {
        "Power Rating": "3 Watts continuous nominal (5 Watts peak)",
        "Impedance": "8 Ohms ±15%",
        "Frequency Response": "150Hz - 20,000Hz spectrum range",
        "Enclosure design": "Acoustically sealed ABS cavity chamber with wiring tail",
        "Connector": "2-pin JST-PH pitch connector or bare wire legs"
      },
      bootLogs: [
        "[SPEAKER] Resonant frequency peak at 220Hz. EQ parameters loaded.",
        "[SPEAKER] Voice synthethic engines online. System greetings cached.",
        "[AUDIO] Vocal alert generated: 'System Core Active. Awaiting commands...'"
      ]
    },
    {
      id: "mobility-1",
      name: "4WD Robotics Rover DIY Wooden Chassis Kit (Base Plate Only)",
      category: "mobility",
      categoryLabel: "CHASSIS",
      reason: "Utilized purely as the physical mounting deck and structural floor to securely arrange your electronics and hardware modules.",
      quantity: 1,
      voltage: "Passive",
      interface: "Mechanical Bolt pattern",
      priceStatus: "1,350",
      purchaseLink: "https://store.roboticsbd.com/robot-platform-chassis-Bangladesh/880-4wd-robotics-rover-diy-wooden-chassis-with-motors-wheels-robotics-bangladesh.html",
      image: chassisPic,
      specs: {
        "Base Deck Material": "Laser-cut 3mm aircraft-grade Birch plywood",
        "Drive Type": "4-Wheel Drive skid-steer mechanical base",
        "Mounting Ports": "Pre-cut holes for Raspberry Pi, L298N driver, TT motors, and battery pack",
        "Chassis Dimensions": "205mm x 148mm rectangular profile"
      },
      bootLogs: [
        "[STRUCT] Mechanical chassis aligned. Common deck loading limits checked.",
        "[STRUCT] Payload distribution index: COG balanced centered between motor axes."
      ]
    },
    {
      id: "mobility-2",
      name: "Yellow Plastic \"TT\" Gearbox DC Motors (3V–6V)",
      category: "mobility",
      categoryLabel: "ACTUATION",
      reason: "Your primary drive motors (included in the chassis kit). They fit perfectly into the pre-cut structural slots of your wooden chassis. Note: Since these plastic-geared motors are rated for 3V–6V, your Python script will cap the L298N motor driver's PWM duty cycle to 50% to safely drop the 11.1V battery power down to a safe ~5.5V equivalent.",
      quantity: 4,
      voltage: "3.0V - 6.0V DC (Software capped)",
      interface: "PWM Drive output",
      priceStatus: "150",
      purchaseLink: "https://store.roboticsbd.com/motor/3014-6v-300-rpm-dc-gear-bo-motor-tt-dual-shaft-l-shaped-robotics-bangladesh.html",
      image: ttMotorPic,
      specs: {
        "Gear Ratio": "1:48 reduction gear module",
        "No Load Speed": "170 RPM @ 4.8V nominal voltage",
        "Stall Torque": "0.8 kg-cm @ 4.8V",
        "Stall Current": "0.8A max draw per motor at stall point",
        "Protection": "EMC suppression capacitors pre-soldered on leads"
      },
      bootLogs: [
        "[MOTOR] Four TT DC Gearbox motors detected on dual channels.",
        "[SAFETY] PWM duty cycle limit set to 50% globally on L298N channels.",
        "[SAFETY] Maximum equivalent output voltage configured at 5.5V to protect motor coils."
      ]
    },
    {
      id: "mobility-3",
      name: "TT Motor Mounting Clips and Hardware",
      category: "mobility",
      categoryLabel: "CHASSIS",
      reason: "Specialized wooden/acrylic brackets designed to lock the yellow motor blocks directly onto the pre-drilled holes of your chassis plate, eliminating custom drilling.",
      quantity: "1 set",
      voltage: "Passive",
      interface: "Mechanical clamp",
      priceStatus: "75",
      purchaseLink: "https://store.roboticsbd.com/robotics-parts/2756-tt-dc-gear-motor-mounting-bracket-robotics-bangladesh.html",
      image: ttMotorClipPic,
      specs: {
        "Clip material": "Molded wooden bracket plates / Acrylic locks",
        "Bolts": "M3 x 30mm steel hex structural bolts",
        "Nuts": "M3 nylon insert lock nuts to withstand vibration drift"
      },
      bootLogs: [
        "[MOUNT] Motor clamps locked down. Torqued to structural specifications."
      ]
    },
    {
      id: "mobility-4",
      name: "Standard TT-Slot Rubber Wheels",
      category: "mobility",
      categoryLabel: "ACTUATION",
      reason: "Matching tires designed with a double-flat inner slot that press-fits tightly onto the plastic output shafts of the yellow TT gearbox motors.",
      quantity: 4,
      voltage: "Passive",
      interface: "Double-Flat Axle Shaft",
      priceStatus: "380",
      purchaseLink: "https://store.roboticsbd.com/robotics-parts/3809-d80mm-silicone-wheel-for-tt-motor-single-robotics-bangladesh.html",
      image: wheelPic,
      specs: {
        "Wheel Diameter": "65mm outer diameter",
        "Tire Width": "26mm contact patch width",
        "Tread Type": "Multi-surface ribbed synthetic rubber tire",
        "Axle Slot": "Dual flat slot fitting 5.4mm x 3.6mm shafts"
      },
      bootLogs: [
        "[WHEELS] Wheels mounted. Kinematics parameters set: Wheel radius = 32.5mm."
      ]
    },
    {
      id: "mobility-5",
      name: "L298N Dual H-Bridge Motor Driver Module",
      category: "mobility",
      categoryLabel: "DRIVE_CONTROL",
      reason: "Bridges the control gap between logic and actuation. It intercepts low-voltage directional commands from the Pi and switches high-voltage battery current directly to your drive motors.",
      quantity: 1,
      voltage: "Logic: 5V | Motor: 11.1V (LiPo Power)",
      interface: "GPIO, PWM Channels",
      specs: {
        "Driver IC": "STMicroelectronics L298N Dual H-Bridge driver",
        "Peak Motor Output": "2.0A continuous per channel (3.0A peak momentary)",
        "Internal Regulator": "5V onboard buck (disabled when using external 5V)",
        "PWM Input Range": "Up to 20kHz frequency modulation",
        "Thermal Shutdown": "Automatic cutoff on junction over-temperature"
      },
      pins: [
        "OUT1/OUT2: Left Motors Output terminals",
        "OUT3/OUT4: Right Motors Output terminals",
        "ENA: Speed control Enable PWM Left (GPIO 13)",
        "ENB: Speed control Enable PWM Right (GPIO 12)",
        "IN1/IN2: Direction commands Left (GPIO 5, GPIO 6)",
        "IN3/IN4: Direction commands Right (GPIO 22, GPIO 23)",
        "12V Terminal: 11.1V LiPo Input rail",
        "5V Terminal: Regulated 5V In from buck converter",
        "GND Terminal: Common Ground bus bar"
      ],
      bootLogs: [
        "[H-BRIDGE] L298N Dual channel controller online.",
        "[DRIVE] Binding speed registers: Left_PWM=ENA(GPIO13), Right_PWM=ENB(GPIO12).",
        "[DRIVE] Skid-steering mapping initialized: IN1/2=Left, IN3/4=Right.",
        "[TEST] Motor driver self-check... PWM pulse modulated successfully on OUT1-4."
      ]
    },
    {
      id: "power-1",
      name: "LiPo Battery 2200mAh 11.1V 3S (25C)",
      category: "power",
      categoryLabel: "POWER_CELL",
      reason: "The primary heavy-duty energy reserve. It supplies raw high-voltage current to the L298N motor driver, ensuring your 4WD system has ample high-current headroom to drive all 4 motors simultaneously without stalling.",
      quantity: 1,
      voltage: "11.1V Nominal (12.6V Max)",
      interface: "XT60 (Power) / JST-XH (Balance)",
      priceStatus: "2,500",
      purchaseLink: "https://store.roboticsbd.com/battery/930-lipo-battery-2200mah-111v-3s-robotics-bangladesh.html",
      image: lipoBatteryPic,
      specs: {
        "Cell Config": "3 Cells in Series (3S1P configuration)",
        "Nominal Capacity": "2200 mAh (24.42 Watt-Hours energy)",
        "Discharge Rate": "25C continuous (55 Amps draw capability)",
        "Peak Burst Rate": "50C momentary (110 Amps output)",
        "Charge Connector": "4-pin JST-XH Balance connector",
        "Discharge Plug": "XT60 high-current male plug"
      },
      bootLogs: [
        "[POWER] Main system source connected. 3S Lithium Polymer cells detected.",
        "[TELEMETRY] Total voltage: 12.35V. Cell 1: 4.11V | Cell 2: 4.12V | Cell 3: 4.12V.",
        "[WARNING] Low voltage cutoff set at 3.3V per cell (9.9V total pack limit)."
      ]
    },
    {
      id: "power-2",
      name: "B3 Pro LiPo Balance Charger (2S/3S)",
      category: "power",
      categoryLabel: "POWER_CHARGER",
      reason: "Safely charges and recalibrates the battery pack by checking and isolating individual cells via the white multi-pin JST-XH balance lead.",
      quantity: 1,
      voltage: "Input: 110V-240V AC | Output: 3x 800mA",
      interface: "JST-XH Balance Port Only",
      specs: {
        "Charging Current": "800mA max current output per cell channel",
        "Status Indicator": "3 independent Red/Green status LEDs per cell",
        "Auto Cutoff": "Over-charge voltage protection at 4.20V ±0.02V",
        "Balancing Current": "200mA balancing current bleed limit"
      },
      bootLogs: [
        "[CHARGER] Standby. Awaiting 3S balancing connector insertion..."
      ]
    },
    {
      id: "power-3",
      name: "LiPo Battery Voltage Checker / Low-Voltage Alarm",
      category: "power",
      categoryLabel: "POWER_TELEMETRY",
      reason: "A vital hardware safety monitor. It plugs directly into the battery's balancing lead to trigger a loud audible alarm the moment a cell drops to unsafe levels, preventing permanent battery swelling or degradation.",
      quantity: 1,
      voltage: "Powered from balancing lead",
      interface: "JST-XH Male pins",
      specs: {
        "Cell Compatibility": "1S to 8S Lithium packs supported",
        "Voltage Display Range": "0.5V - 36V DC total display capacity",
        "Alarm Threshold": "3.3V default (adjustable from 2.7V to 3.8V)",
        "Alarm Decibel": "Dual high-intensity buzzer rated >95dB at 3 meters"
      },
      bootLogs: [
        "[TELEMETRY] Low-voltage hardware monitor engaged.",
        "[TELEMETRY] Alarm trigger threshold calibrated to: 3.40V per cell."
      ]
    },
    {
      id: "power-4",
      name: "HW-411A LM2596 DC-DC Step-Down Buck Converter",
      category: "power",
      categoryLabel: "POWER_REGULATOR",
      reason: "Essential for system protection. It steps down the raw 11.1V–12.6V from your LiPo battery to a perfectly regulated, safe 5.0V logic rail to run your Raspberry Pi, camera, and screen.",
      quantity: 1,
      voltage: "Input: 11.1V | Output: 5.0V Regulated",
      interface: "Solder pads In/Out",
      priceStatus: "99",
      purchaseLink: "https://store.roboticsbd.com/power-module-adapter/1855-hw-411a-lm2596-dc-to-dc-buck-converter-step-down-module-power-supply-robotics-bangladesh.html",
      image: lm2596Pic,
      specs: {
        "Step-Down IC": "LM2596S adjustable switching regulator",
        "Output Current": "2.0A continuous (3.0A max with heatsink mounted)",
        "Output Ripple": "<30mV high frequency switching ripple",
        "Switching Freq": "150 kHz internally fixed oscillator",
        "Adjustment Mode": "Onboard 10k multiturn potentiometer"
      },
      bootLogs: [
        "[REGULATOR] HW-411A input: 11.96V DC.",
        "[REGULATOR] Regulated Logic output: 5.02V DC. Status: NOMINAL.",
        "[REGULATOR] Measured efficiency: 86.4% under full CPU & screen workload."
      ]
    },
    {
      id: "power-5",
      name: "Breadboard Half-Size Bare (400 Tie-Points)",
      category: "power",
      categoryLabel: "POWER_ROUTING",
      reason: "Functions as the main electrical routing matrix to safely split power distribution lines and seamlessly tie all component grounds together into a single common ground.",
      quantity: 2,
      voltage: "Up to 30V DC safe limit",
      interface: "Breadboard sockets",
      specs: {
        "Points Layout": "300 pin distribution matrix, 100 power rail bus pins",
        "Contact material": "Phosphor bronze nickel-plated spring clips",
        "Wire range": "Accepts standard hookup wires 22 AWG (0.6mm diameter)",
        "Insulation rating": "ABS plastic housing rated up to 80°C"
      },
      bootLogs: [
        "[ROUTING] Ground bus ties configured. Ground network resistance: <0.02 ohms.",
        "[ROUTING] Splitting 5V logic rail to: Pi Zero, CSI Camera, and L298N driver."
      ]
    },
    {
      id: "security-1",
      name: "5V 1-Channel Optocoupler Relay Module",
      category: "security",
      categoryLabel: "PAYLOAD_SWITCH",
      reason: "Acts as a hardwired, physically isolated electronic power switch. It allows your Python code to completely turn off or power up the transceiver payload via a single digital GPIO command.",
      quantity: 1,
      voltage: "Logic: 5.0V | Switch: up to 30V DC / 10A",
      interface: "GPIO Control",
      specs: {
        "Optoisolator ID": "PC817 high-voltage optical coupler",
        "Switch Configuration": "SPDT (Single Pole Double Throw: NO, NC, COM)",
        "Trigger Level": "Low-level active trigger (0V switches, 5V off)",
        "Isolation Voltage": "5000V RMS input-to-output isolation rating"
      },
      pins: [
        "VCC: 5V Power pin",
        "GND: Common Ground",
        "IN: Relay Control signal (GPIO 26)",
        "COM: Power Feed In (from LiPo 11.1V or Buck 5V)",
        "NO: Normally Open terminal (Payload Positive lead)",
        "NC: Normally Closed terminal (Unused)"
      ],
      bootLogs: [
        "[SECURITY] Optocoupler isolated relay registered.",
        "[SECURITY] Setting default output mode: NC (Normally Closed) Open-circuit.",
        "[SECURITY] Payload state: POWER_DOWN. GPIO 26 held HIGH."
      ]
    },
    {
      id: "security-2",
      name: "nRF24L01+PA+LNA Wireless Transceiver Module",
      category: "security",
      categoryLabel: "PAYLOAD_TRANSCEIVER",
      reason: "The dedicated radio-frequency hardware payload used for localized network auditing, packet analysis, and signal transmission testing.",
      quantity: 1,
      voltage: "3.3V DC (Must use dedicated 3.3V source)",
      interface: "SPI Bus",
      specs: {
        "RF Chipset": "Nordic Semiconductor nRF24L01+ transceiver",
        "Frequency Band": "2.4GHz ISM Band (2.400 - 2.525 GHz range)",
        "Output Power": "+20dBm maximum transmitter output with PA active",
        "Amplifier Config": "LNA (Low Noise Amplifier) 10dB gain receiver booster",
        "Range Limit": "Up to 1100 meters line-of-sight range with SMA antenna",
        "Data Rates": "250kbps, 1Mbps, and 2Mbps air data rates"
      },
      pins: [
        "VCC: 3.3V Dedicated supply (Do not use 5V!)",
        "GND: Common Ground",
        "CE: Chip Enable RX/TX control (GPIO 22)",
        "CSN: SPI Chip Select Not (GPIO 7 / CE1)",
        "SCK: Hardware SPI Clock (GPIO 11)",
        "MOSI: Hardware SPI MOSI (GPIO 10)",
        "MISO: Hardware SPI MISO (GPIO 9)",
        "IRQ: Interrupt pin (GPIO 24 - optional alert)"
      ],
      bootLogs: [
        "[TRANSCEIVER] nRF24L01+ hardware handshaking initiated on SPI1.",
        "[TRANSCEIVER] PA and LNA register configuration complete. Power level: MAX (+20dBm).",
        "[PAYLOAD] Operating frequency set to channel 76 (2.476 GHz).",
        "[PAYLOAD] Packet sniffing loop activated. Promiscuous mode: ACTIVE."
      ]
    },
    {
      id: "security-3",
      name: "External SMA Antenna",
      category: "security",
      categoryLabel: "PAYLOAD_RF_LINK",
      reason: "Screws directly onto the nRF24L01 module to maximize communication range and maintain clean directional signal isolation during active operations.",
      quantity: 1,
      voltage: "Passive",
      interface: "SMA Threaded RP-SMA Male",
      specs: {
        "Antenna Type": "2.4GHz omnidirectional rubber-duck antenna",
        "Gain Index": "2.0 dBi gain index",
        "Impedance": "50 Ohms matched antenna circuit",
        "Polarization": "Vertical linear polarization grid"
      },
      bootLogs: [
        "[ANTENNA] SMA RF impedance match calibrated. VSWR: 1.15 @ 2.44GHz."
      ]
    },
    {
      id: "structural-1",
      name: "Male-to-Female & Female-to-Female Jumper Wires (20cm)",
      category: "structural",
      categoryLabel: "INTERCONNECTS",
      reason: "The nervous system of your robot. These cables route high-speed digital logic communication and power lines smoothly between all separate modules.",
      quantity: "2 bundles",
      voltage: "Signal logic lines",
      interface: "DuPont standard 2.54mm",
      specs: {
        "Connector Pitch": "Standard 2.54mm (0.1 inch) pin header spacing",
        "Wire Gauge": "28 AWG multi-strand copper core wiring",
        "Conductors": "PVC insulated flexible colored ribbon cables",
        "Continuous Rating": "Up to 1.2A maximum electrical current capacity"
      },
      bootLogs: [
        "[WIRING] Logic signal integrity check: OK. Bus capacitance within limits."
      ]
    },
    {
      id: "structural-2",
      name: "Nylon Standoffs, Screws, and Nuts Kit",
      category: "structural",
      categoryLabel: "MECHANICAL",
      reason: "Crucial for elevating bare printed circuit boards off the chassis floor, cleanly preventing catastrophic short circuits caused by exposed copper tracks touching each other.",
      quantity: "1 box kit",
      voltage: "Non-conductive",
      interface: "M3 Thread",
      specs: {
        "Material": "Nylon 66 (UL94V-2 flame retardant)",
        "Thread Pitch": "M3 x 0.5mm standard pitch threads",
        "Lengths": "Includes 6mm, 10mm, 15mm, and 20mm standoffs",
        "Conductivity": "Zero electrical conductivity (perfect isolator)"
      },
      bootLogs: [
        "[MECHANICAL] Isolators mounted on Raspberry Pi Zero and L298N boards. Ground shorts: None."
      ]
    },
    {
      id: "structural-3",
      name: "Double-Sided Foam Tape or Zip Ties",
      category: "structural",
      categoryLabel: "MECHANICAL",
      reason: "Securely locks down heavy components—like the 3S LiPo battery pack and the enclosed speaker box—so they do not shift weight during sharp navigational turns.",
      quantity: "1 set",
      voltage: "Passive",
      interface: "Adhesive / Tensile Lock",
      specs: {
        "Foam Tape": "Polyethylene foam with heavy-duty acrylic glue",
        "Zip Ties": "Heavy-duty Nylon 66 ties, 100mm length",
        "Tensile Strength": "Zip ties rated up to 18 lbs tensile load limit"
      },
      bootLogs: [
        "[MECHANICAL] LiPo battery mounted dynamically on lower plate with zip-tie anchors."
      ]
    },
    {
      id: "sensors-1",
      name: "MPU-9250 9-Axis Attitude Gyro Accelerator Sensor Module",
      category: "sensors",
      categoryLabel: "TELEMETRY_IMU",
      reason: "Delivers real-time accelerometer, gyroscope, and magnetic compass telemetry over the shared I2C bus, giving the local navigation script an absolute heading reference to eliminate calculation drift over time.",
      quantity: 1,
      voltage: "3.3V DC (Onboard regulator present)",
      interface: "I2C Bus",
      specs: {
        "Gyroscope Range": "Selectable ±250, ±500, ±1000, ±2000 degrees/sec",
        "Accelerometer Range": "Selectable ±2g, ±4g, ±8g, ±16g acceleration",
        "Compass Sensor": "AK8963 3-axis electronic magnetometer",
        "ADC Resolution": "16-bit analog-to-digital converters onboard all axes",
        "Interface Mode": "Standard I2C interface (address 0x68)"
      },
      pins: [
        "VCC: 3.3V Input power",
        "GND: Common Ground",
        "SCL: I2C Clock (GPIO 5 / SCL)",
        "SDA: I2C Data (GPIO 3 / SDA)",
        "AD0: Address Select pin (GND = 0x68, VCC = 0x69)",
        "INT: Interrupt output pin (GPIO 4 - optional trigger)"
      ],
      bootLogs: [
        "[IMU] Initializing MPU-9250 9-axis sensor array at address 0x68...",
        "[IMU] Gyroscope offset calibration complete. Drift index: 0.02 deg/min.",
        "[IMU] Magnetometer AK8963 detected. Loading local compass declination matrix (+6.03°).",
        "[TELEMETRY] Inertial measurements active. Frequency: 100Hz filter output."
      ]
    },
    {
      id: "sensors-2",
      name: "Ultrasonic Distance Sensor (HC-SR04 / RCWL-9610)",
      category: "sensors",
      categoryLabel: "TELEMETRY_RADAR",
      reason: "Serves as a physical boundary radar, providing immediate distance feedback to the script for automated, non-visual obstacle avoidance.",
      quantity: 1,
      voltage: "5.0V DC input",
      interface: "Trigger/Echo Pulse",
      specs: {
        "Operating Frequency": "40 kHz ultrasonic wave transmitter",
        "Range Capacity": "2cm to 450cm detection distance",
        "Accuracy Index": "Up to 3mm measurement precision",
        "Measuring Angle": "15 degrees beam width",
        "Trigger Input": "10 microsecond high-level pulse signal"
      },
      pins: [
        "VCC: 5V input rail",
        "GND: Common Ground",
        "TRIG: Trigger input signal (GPIO 23 - 3.3V trigger)",
        "ECHO: Echo pulse output (5V signal - REQUIRES VOLTAGE DIVIDER)"
      ],
      bootLogs: [
        "[RADAR] HC-SR04 ultrasonic transducer configured.",
        "[RADAR] Calibration pulse sent. Velocity of sound set at 343 m/s.",
        "[TELEMETRY] Scanning path clear. Distance returns: 142.6cm."
      ]
    },
    {
      id: "sensors-3",
      name: "1 kΩ and 2 kΩ 1/4w Film Resistors",
      category: "sensors",
      categoryLabel: "VOLTAGE_DIVIDER",
      reason: "Configured as a precise hardware voltage divider to safely step down the ultrasonic sensor's 5V Echo output to a 3.3V logic level that the Raspberry Pi's pins can safely read without burning out.",
      quantity: 1,
      voltage: "5.0V down to 3.3V",
      interface: "Resistor divider network",
      specs: {
        "R1 Resistance": "1 kOhm metal film, 1/4W rating, ±1% tolerance",
        "R2 Resistance": "2 kOhm metal film, 1/4W rating, ±1% tolerance",
        "Voltage Divider ratio": "V_out = V_in * (R2 / (R1 + R2)) = 5V * (2 / 3) = 3.33V",
        "Thermal Coefficient": "50 ppm/°C ultra-stable resistor array"
      },
      bootLogs: [
        "[SAFETY] Echo line voltage divider measured. V_out = 3.33V (SAFE).",
        "[SAFETY] GPIO 24 protective circuit verified. Logic HIGH bounds active."
      ]
    }
  ];

  const filteredComponents = components.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || comp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeStats = {
    total: components.length,
    processing: components.filter((c) => c.category === "processing").length,
    hri: components.filter((c) => c.category === "hri").length,
    mobility: components.filter((c) => c.category === "mobility").length,
    power: components.filter((c) => c.category === "power").length,
    security: components.filter((c) => c.category === "security").length,
    structural: components.filter((c) => c.category === "structural").length,
    sensors: components.filter((c) => c.category === "sensors").length,
  };

  const handleComponentClick = (comp: ComponentItem) => {
    playBeep("success");
    setSelectedComponent(comp);
  };

  return (
    <div className={`relative flex-1 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none ${isCrtEnabled ? "crt-screen" : ""}`}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-[300px] w-[450px] rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Cyberpunk HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4105_1px,transparent_1px),linear-gradient(to_bottom,#00ff4105_1px,transparent_1px)] bg-[size:3rem_3rem] -z-20" />

      <div className="mx-auto max-w-7xl">
        {/* Dynamic HUD Diagnostic Header */}
        <div className="border border-green-500/30 bg-black/80 p-4 sm:p-6 mb-8 rounded-sm backdrop-blur-md relative overflow-hidden">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 border-t-2 border-l-2 border-green-400 w-3 h-3" />
          <div className="absolute top-0 right-0 border-t-2 border-r-2 border-green-400 w-3 h-3" />
          <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-green-400 w-3 h-3" />
          <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-green-400 w-3 h-3" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-sm border border-green-500/20 bg-green-950/20 px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest text-green-400">
                <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                DATABASE STATUS: SECURE_REGISTRY_LOADED
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-mono uppercase text-white tracking-widest leading-none drop-shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                // HARDWARE_COMPONENTS
              </h1>
              <p className="font-mono text-[10px] text-zinc-400">
                XYBEROX_DB_SYS // INDEXING HEADLESS ACTUATION CORE & PERIPHERALS
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-green-500/20 pt-4 md:pt-0 md:pl-6 text-xs font-mono col-span-2">
              <div className="space-y-1">
                <div className="text-zinc-500">SYS_REGISTRY_SIZE:</div>
                <div className="text-green-400 font-bold">{activeStats.total} / {activeStats.total} NODES</div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">COMMON_GROUND:</div>
                <div className="text-green-400 font-bold">MERGED // SHIELDED</div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">LOGIC_COMPATIBILITY:</div>
                <div className="text-green-400 font-bold">3.3V / 5.0V DUAL</div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">AUDIO_SYS:</div>
                <button
                  onClick={() => {
                    setIsSoundEnabled(!isSoundEnabled);
                    playBeep("toggle");
                  }}
                  className={`px-1.5 py-0.5 rounded-xs text-[9px] font-bold border transition-colors ${
                    isSoundEnabled
                      ? "bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20"
                      : "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20"
                  }`}
                >
                  {isSoundEnabled ? "SYNTH_ON" : "SYNTH_MUTED"}
                </button>
              </div>
            </div>
          </div>
          
          {/* CRT & Diagnostics Panel */}
          <div className="flex justify-between items-center border-t border-green-500/10 mt-4 pt-3 text-[9px] font-mono text-zinc-500">
            <div>DEPLOYMENT: Headless Linux kernel version 6.1.21-v8+ active on Edge</div>
            <button
              onClick={() => {
                setIsCrtEnabled(!isCrtEnabled);
                playBeep("toggle");
              }}
              className={`flex items-center gap-1.5 border px-2 py-0.5 transition-all ${
                isCrtEnabled
                  ? "bg-green-500 text-black border-green-500 font-bold shadow-[0_0_8px_rgba(0,255,65,0.4)]"
                  : "bg-black/60 text-green-500/70 border-green-500/30 hover:border-green-500/50 hover:text-green-400"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isCrtEnabled ? "bg-black animate-pulse" : "bg-green-500"}`} />
              CRT_SCAN_EFFECT: {isCrtEnabled ? "ACTIVE" : "OFF"}
            </button>
          </div>
        </div>

        {/* Search & Terminal Filtering Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
          {/* Category Filter panel */}
          <div className="lg:col-span-1 border border-green-500/20 bg-black/60 p-4 rounded-sm backdrop-blur-md space-y-1.5 h-fit">
            <div className="font-mono text-[9px] text-zinc-500 mb-2 tracking-wider">// FILTER_SUBSYSTEM</div>
            <div className="flex flex-wrap lg:flex-col gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => playBeep("hover")}
                    onClick={() => {
                      playBeep("click");
                      setSelectedCategory(cat.id);
                    }}
                    className={`flex items-center justify-between text-left font-mono text-[10px] w-full px-3 py-2 rounded-xs border transition-all ${
                      isActive
                        ? "bg-green-500/10 text-green-400 border-green-500/60 shadow-[inset_0_0_8px_rgba(0,255,65,0.1)]"
                        : "bg-transparent text-zinc-400 border-transparent hover:bg-green-500/5 hover:text-green-400 hover:border-green-500/20"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`px-1 py-0.5 rounded-xs text-[8px] font-bold ${isActive ? "bg-green-500 text-black" : "bg-zinc-950 text-zinc-600"}`}>
                      {cat.id === "all" ? activeStats.total : activeStats[cat.id as keyof typeof activeStats] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input bar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative border border-green-500/20 bg-black/60 p-3 rounded-sm backdrop-blur-md">
              {/* Corner design brackets */}
              <div className="absolute top-1 left-1 border-t border-l border-green-500/30 w-2 h-2" />
              <div className="absolute bottom-1 right-1 border-b border-r border-green-500/30 w-2 h-2" />
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-green-400 animate-pulse">xyberox&gt; search:</span>
                <input
                  type="text"
                  placeholder="Enter module parameter or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-green-400 placeholder-green-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      playBeep("click");
                    }}
                    className="font-mono text-[10px] text-zinc-500 hover:text-red-400"
                  >
                    [CLEAR]
                  </button>
                )}
              </div>
            </div>

            {/* Results diagnostics line */}
            <div className="flex items-center justify-between px-2 font-mono text-[9px] text-zinc-500">
              <div>QUERY_RETURNS: {filteredComponents.length} MATCHING MODULES FOUND</div>
              <div>REGISTRY: LOCALLY_STORED // INDEX_STATUS: OK</div>
            </div>

            {/* Grid of Components */}
            {filteredComponents.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredComponents.map((comp, index) => (
                  <div
                    key={comp.id}
                    onMouseEnter={() => playBeep("hover")}
                    onClick={() => handleComponentClick(comp)}
                    className="group relative flex flex-col rounded-sm border border-green-500/20 bg-black/75 overflow-hidden text-left backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,65,0.08)] hover:-translate-y-0.5"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-green-500/10 px-4 py-2 bg-green-950/10">
                      <span className="text-[9px] font-mono text-green-400 tracking-wider">
                        [{comp.categoryLabel}-{String(index + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-[8px] font-mono text-green-500/50 tracking-wider">
                        QTY: {comp.quantity}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-4 flex-1">
                      {/* Interactive Custom SVG Blueprint Placeholder */}
                      <div className="w-full h-48 sm:h-64 border border-green-500/10 bg-zinc-950/80 rounded-sm relative flex items-center justify-center overflow-hidden shrink-0 group-hover:border-green-500/30 transition-colors">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4102_1px,transparent_1px),linear-gradient(to_bottom,#00ff4102_1px,transparent_1px)] bg-[size:0.5rem_0.5rem]" />
                        
                        {/* Interactive scanning line */}
                        <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent animate-scanline" />

                        {/* Rendering real image or category matching blueprint symbols */}
                        {comp.image ? (
                          <Image src={comp.image} alt={comp.name} className="w-full h-full object-contain p-1.5 z-10" />
                        ) : (
                          <>
                            {comp.category === "processing" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
                                <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2M9 9h6v6H9z" strokeWidth="1.5" />
                              </svg>
                            )}
                            {comp.category === "hri" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeWidth="1.5" />
                              </svg>
                            )}
                            {comp.category === "mobility" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="6" cy="6" r="3" strokeWidth="1.5" />
                                <circle cx="18" cy="6" r="3" strokeWidth="1.5" />
                                <circle cx="6" cy="18" r="3" strokeWidth="1.5" />
                                <circle cx="18" cy="18" r="3" strokeWidth="1.5" />
                                <path d="M6 9v6M18 9v6M9 6h6M9 18h6" strokeWidth="1.5" />
                              </svg>
                            )}
                            {comp.category === "power" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            )}
                            {comp.category === "security" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                            {comp.category === "structural" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                            )}
                            {comp.category === "sensors" && (
                              <svg className="w-16 h-16 text-green-500/30 group-hover:text-green-400/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                              </svg>
                            )}
                          </>
                        )}

                        <span className="absolute bottom-1 text-[7px] font-mono text-green-500/40 select-none">
                          XB_PLH_{comp.id.substring(0, 5)}
                        </span>
                      </div>

                      {/* Info details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h3 className="font-mono font-bold text-lg text-white group-hover:text-green-400 transition-colors truncate">
                            {comp.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 items-center mt-2">
                            {comp.voltage && (
                              <span className="text-[10px] font-mono border border-green-500/10 px-2 py-0.5 bg-green-950/20 text-green-400/80">
                                V: {comp.voltage}
                              </span>
                            )}
                            {comp.interface && (
                              <span className="text-[10px] font-mono border border-green-500/10 px-2 py-0.5 bg-green-950/20 text-green-400/80">
                                I/O: {comp.interface}
                              </span>
                            )}
                            {comp.priceStatus && (
                              <span className="text-[10px] font-mono border border-yellow-500/20 px-2 py-0.5 bg-yellow-950/20 text-yellow-400/90">
                                PRICE: {comp.priceStatus}
                              </span>
                            )}
                            {comp.purchaseLink && (
                              <a 
                                href={comp.purchaseLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] font-mono border border-blue-500/20 px-2 py-0.5 bg-blue-950/20 text-blue-400/90 hover:bg-blue-900/50 hover:text-blue-300 transition-colors"
                              >
                                [BUY LINK]
                              </a>
                            )}
                          </div>
                          <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-400 line-clamp-4">
                            // {comp.reason}
                          </p>
                        </div>
                        
                        <div className="mt-4 text-[10px] font-mono text-green-500/50 group-hover:text-green-400 flex items-center gap-1 select-none">
                          ACCESS_DETAILS <span>&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-red-500/20 bg-black/60 p-8 rounded-sm text-center font-mono">
                <div className="text-red-500 text-sm font-bold uppercase mb-2">// SECURITY ALERT: NO DATA FOUND</div>
                <div className="text-zinc-500 text-[10px]">Your query matched zero registered hardware modules. Please inspect query syntax.</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cyberpunk Slide-in Details Drawer */}
      {selectedComponent && (
        <div className="fixed inset-0 z-50 overflow-hidden font-mono select-none">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity" onClick={() => setSelectedComponent(null)} />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-lg border-l border-green-500/40 bg-zinc-950 p-6 flex flex-col justify-between shadow-2xl relative">
              {/* Scanline overlay for CRT mode */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,65,0.02)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none -z-10" />

              {/* Corner brackets inside drawer */}
              <div className="absolute top-2 left-2 border-t border-l border-green-500/30 w-3 h-3" />
              <div className="absolute top-2 right-2 border-t border-r border-green-500/30 w-3 h-3" />
              <div className="absolute bottom-2 left-2 border-b border-l border-green-500/30 w-3 h-3" />
              <div className="absolute bottom-2 right-2 border-b border-r border-green-500/30 w-3 h-3" />

              <div className="space-y-6 overflow-y-auto pr-2 flex-1">
                {/* Drawer Header */}
                <div className="border-b border-green-500/20 pb-4 flex justify-between items-start">
                  <div>
                    <span className="text-[9px] text-green-500/60 uppercase tracking-widest">// SECURE_HARDWARE_SCHEMATIC</span>
                    <h2 className="text-lg font-bold text-white uppercase tracking-wider mt-1">{selectedComponent.name}</h2>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-xs text-[8px] bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-wider font-semibold">
                      Subsystem: {selectedComponent.categoryLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      playBeep("click");
                      setSelectedComponent(null);
                    }}
                    className="border border-green-500/30 bg-green-950/10 text-green-400 hover:bg-green-500 hover:text-black hover:border-green-500 px-2 py-1 text-[9px] transition-all"
                  >
                    [CLOSE]
                  </button>
                </div>

                {/* Technical Blueprint Illustration / Image */}
                <div className="border border-green-500/10 bg-black p-4 rounded-xs relative flex flex-col items-center justify-center min-h-[160px] overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4102_1px,transparent_1px),linear-gradient(to_bottom,#00ff4102_1px,transparent_1px)] bg-[size:0.75rem_0.75rem]" />
                  <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent animate-scanline" />
                  
                  {selectedComponent.image ? (
                    <div className="relative z-10 w-full h-40 flex items-center justify-center bg-zinc-950/60 rounded-xs border border-green-500/20">
                      <Image src={selectedComponent.image} alt={selectedComponent.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    /* Outer scope graphic */
                    <div className="w-32 h-32 border border-green-500/20 rounded-full flex items-center justify-center border-dashed relative">
                      <div className="w-24 h-24 border border-green-500/20 rounded-full flex items-center justify-center relative">
                        <div className="w-16 h-16 border border-green-500/30 rounded-full flex items-center justify-center">
                          <span className="text-[10px] text-green-400 animate-pulse font-bold tracking-widest">
                            {selectedComponent.id.toUpperCase().replace("-", "_")}
                          </span>
                        </div>
                      </div>
                      {/* Tick marks */}
                      <span className="absolute top-1 text-[6px] text-green-500/50">000°</span>
                      <span className="absolute right-1 text-[6px] text-green-500/50">090°</span>
                      <span className="absolute bottom-1 text-[6px] text-green-500/50">180°</span>
                      <span className="absolute left-1 text-[6px] text-green-500/50">270°</span>
                    </div>
                  )}
                  <span className="text-[7px] text-zinc-500 mt-2 relative z-10">
                    {selectedComponent.image ? "// REAL HARDWARE IMAGE MOUNTED" : "// RADAR SCHEMATIC ANALYSIS DETECTED"}
                  </span>
                </div>

                {/* System Integration Rationale */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-green-400 font-bold uppercase tracking-wider">// INTEGRATION_ROLE_AND_REASON:</h4>
                  <div className="bg-green-950/5 border border-green-500/10 p-3 text-xs leading-relaxed text-zinc-300 rounded-xs">
                    {selectedComponent.reason}
                  </div>
                </div>

                {/* Tech specifications Table */}
                <div className="space-y-2">
                  <h4 className="text-[10px] text-green-400 font-bold uppercase tracking-wider">// TECHNICAL_PARAMETERS:</h4>
                  <div className="border border-green-500/10 rounded-xs overflow-hidden">
                    <table className="w-full text-[10px] border-collapse text-left">
                      <tbody>
                        <tr className="border-b border-green-500/10">
                          <td className="p-2 text-zinc-500 uppercase font-semibold w-1/3">Quantity Requested</td>
                          <td className="p-2 text-white font-bold">{selectedComponent.quantity}</td>
                        </tr>
                        {selectedComponent.voltage && (
                          <tr className="border-b border-green-500/10">
                            <td className="p-2 text-zinc-500 uppercase font-semibold">Operating Voltage</td>
                            <td className="p-2 text-white font-bold">{selectedComponent.voltage}</td>
                          </tr>
                        )}
                        {selectedComponent.interface && (
                          <tr className="border-b border-green-500/10">
                            <td className="p-2 text-zinc-500 uppercase font-semibold">Interface / Bus</td>
                            <td className="p-2 text-white font-bold">{selectedComponent.interface}</td>
                          </tr>
                        )}
                        {Object.entries(selectedComponent.specs).map(([key, val]) => (
                          <tr key={key} className="border-b border-green-500/10">
                            <td className="p-2 text-zinc-500 uppercase font-semibold">{key}</td>
                            <td className="p-2 text-white">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pin Connection Map if available */}
                {selectedComponent.pins && selectedComponent.pins.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] text-green-400 font-bold uppercase tracking-wider">// SYSTEM_I_O_PINOUTS:</h4>
                    <div className="bg-black border border-green-500/10 p-3 rounded-xs space-y-1">
                      {selectedComponent.pins.map((pin, pIdx) => (
                        <div key={pIdx} className="text-[10px] flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="text-zinc-400 font-mono">{pin}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Driver / Boot logs */}
                {selectedComponent.bootLogs && selectedComponent.bootLogs.length > 0 && (
                  <div className="space-y-2 pb-4">
                    <h4 className="text-[10px] text-green-400 font-bold uppercase tracking-wider">// DRIVER_CONSOLE_LOGS:</h4>
                    <div className="bg-black/90 border border-green-500/10 p-3 rounded-xs font-mono text-[9px] text-green-500/80 space-y-1.5 leading-normal max-h-36 overflow-y-auto">
                      {selectedComponent.bootLogs.map((log, lIdx) => (
                        <div key={lIdx} className="whitespace-pre-wrap select-text selection:bg-green-500 selection:text-black">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Acquisition Link */}
              {selectedComponent.purchaseLink && (
                <div className="space-y-2 mt-4">
                  <h4 className="text-[10px] text-green-400 font-bold uppercase tracking-wider">// ACQUISITION_SOURCE:</h4>
                  <a
                    href={selectedComponent.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-400 hover:text-green-300 font-mono text-[10px] px-3 py-1.5 rounded-xs transition-all w-full justify-center"
                  >
                    [ACQUIRE_MODULE_VIA_ROBOTICSBD]
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Drawer Footer Status */}
              <div className="border-t border-green-500/20 pt-4 mt-6 flex items-center justify-between text-[8px] text-zinc-500 font-mono bg-zinc-950 relative z-10">
                <div>EST_PRICE: {selectedComponent.priceStatus || "CLASSIFIED // TBD BY OPERATOR"}</div>
                <div>SECURE CONNECTION: VERIFIED</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styled utilities for scanline animations & CRT simulation */}
      <style>{`
        .crt-screen::before {
          content: " ";
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 9999;
          background-size: 100% 4px, 3px 100%;
          pointer-events: none;
        }

        @keyframes scanline {
          0% {
            transform: translate3d(0, -160px, 0);
          }
          100% {
            transform: translate3d(0, 160px, 0);
          }
        }

        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
