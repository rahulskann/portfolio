export type Category = "software" | "hardware" | "hybrid";

export type ProjectLink = { label: string; href: string };

export type Project = {
  category: Category;
  tag: string;
  title: string;
  status?: "ACTIVE" | "IN PROGRESS" | "PORTING" | "COMPLETE";
  description: string;
  bullets: string[];
  stack: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    category: "software",
    tag: "AI / HEALTH",
    title: "Early Parkinson's Tremor Detection",
    status: "ACTIVE",
    description:
      "A screening tool that tracks 21 hand landmarks in real time and extracts tremor frequency via FFT-based signal processing.",
    bullets: [
      "Real-time hand-landmark tracking with MediaPipe",
      "FFT-based frequency extraction for tremor analysis",
      "NVIDIA Nemotron LLM generates plain-English explanations for patients",
      "Streamlit dashboard: live capture, FTM severity grading, downloadable PDF reports",
      "Optional OAK-D depth camera support for mm-accurate measurement",
    ],
    stack: ["Python", "MediaPipe", "OpenCV", "Streamlit", "ReportLab", "NVIDIA Nemotron"],
  },
  {
    category: "hardware",
    tag: "FPGA / RTL",
    title: "FPGA Alarm Clock",
    status: "COMPLETE",
    description:
      "A 24-hour digital alarm clock with a melody alarm, written in SystemVerilog and running on a DE10-Lite FPGA. Team of three; the final design is based on my implementation.",
    bullets: [
      "Modular RTL: 50 MHz to 1 Hz clock divider, hour/minute/second counters, alarm comparator, display parser, and seven-segment drivers",
      "Two-flop input synchronizer for switches and buttons",
      "Square-wave melody generator driving a speaker from note frequency and duration arrays",
      "Integrated in a Quartus top-level schematic, pin-assigned, and validated on the board",
    ],
    stack: ["SystemVerilog", "Quartus Prime", "ModelSim", "DE10-Lite FPGA"],
  },
  {
    category: "hybrid",
    tag: "EMBEDDED / MOBILE",
    title: "RoboRacer Bluetooth Link",
    description:
      "Bluetooth link for a Garmin-sponsored pacing robot, built for an OSU senior capstone (CS team of four). I built both ends: board firmware on an Arduino Portenta H7 and a React Native test app.",
    bullets: [
      "Verified app-to-board communication in testing; tested the app on Android",
      "Attempted to merge the Bluetooth module into the team's main app and helped install it on an iPad with Xcode",
      "Full robot testing was limited after a power fault in the ECE team's hardware shorted the robot before the deadline",
    ],
    stack: ["React Native", "TypeScript", "Arduino Portenta H7", "Bluetooth"],
    links: [
      { label: "repo", href: "https://github.com/rahulskann/capstone-bluetooth-test" },
      { label: "project site", href: "https://roboracer-website.vercel.app/" },
    ],
  },
  {
    category: "software",
    tag: "COMPILERS",
    title: "Python-to-LLVM Compiler",
    description:
      "A compiler for a Python subset, built across a three-part course sequence: scanner, parser, and LLVM backend.",
    bullets: [
      "Flex scanner with indentation tracking (INDENT/DEDENT tokens)",
      "Bison parser that translates Python to C, with error reporting",
      "LLVM IR generation in C for assignments, arithmetic, if/else, nested while loops, and break",
      "Native object-code emission through an LLVM target machine",
      "Source is in a private course repository",
    ],
    stack: ["C", "Flex", "Bison", "LLVM"],
  },
  {
    category: "hybrid",
    tag: "EMBEDDED",
    title: "AVR Assembly Labs",
    description:
      "A sequence of microcontroller labs written in AVR assembly on ATmega boards for a robot platform.",
    bullets: [
      "External interrupts (INT0/1/3) with LCD counters for robot bump sensors",
      "Timer/Counter1 fast PWM motor speed control across 16 levels",
      "16-bit add/subtract and 24-bit multiply subroutines",
      "Two-board Rock-Paper-Scissors over USART1 with a 1.5 s timer delay (team of two)",
    ],
    stack: ["AVR Assembly", "ATmega32U4", "ATmega128", "Atmel Studio"],
  },
  {
    category: "hardware",
    tag: "SYSTEMS",
    title: "Nand2Tetris — CPU Architecture",
    status: "IN PROGRESS",
    description:
      "Working through the hardware-to-software computing curriculum, building a simplified CPU from logic gates upward.",
    bullets: [
      "Completed: logic gates, multiplexers, adders, ALU, flip-flops, registers, RAM, and program counter (projects 1 to 3)",
      "In progress: CPU and computer for the Hack instruction set, and a Python assembler",
    ],
    stack: ["Nand2Tetris HDL", "Hack Assembly", "Python"],
  },
  {
    category: "software",
    tag: "AI / GAME",
    title: "Code Dragon",
    description:
      "An interview-prep RPG built at QuackHacks: pick a class (Mage, Fighter, Thief) and battle a Bug Dragon by answering technical interview questions.",
    bullets: [
      "Three modes: offline multiple-choice, AI mode with open-ended questions from Google Gemini, and a résumé mode that quizzes you on your own projects",
      "Character voices through ElevenLabs text-to-speech",
      "Procedural pixel-art sprites and retro UI animations in vanilla JavaScript, with no build step",
      "Vercel serverless functions proxy the API keys, with an offline question bank as fallback",
    ],
    stack: ["JavaScript", "HTML/CSS", "Google Gemini", "ElevenLabs", "Vercel"],
    links: [
      { label: "repo", href: "https://github.com/rahulskann/-Code-dragon" },
      { label: "live demo", href: "https://code-dragon.vercel.app" },
    ],
  },
  {
    category: "software",
    tag: "MOBILE",
    title: "Workout Tracker App",
    status: "IN PROGRESS",
    description:
      "A React Native (Expo) Android app for logging a 5-day workout cycle with set-by-set weight and rep tracking.",
    bullets: [
      "Session logging with automatic all-time PR updates and a rolling two-session history per exercise",
      "Editable routines, exercise demo videos, and a dark/light theme toggle",
      "Google Sheets sync through a webhook, with OAuth in progress",
      "Built and distributed with EAS Build",
    ],
    stack: ["React Native", "Expo", "JavaScript", "Google Sheets API", "EAS Build"],
    links: [{ label: "repo", href: "https://github.com/rahulskann/workout-app" }],
  },
  {
    category: "software",
    tag: "WEB EXT",
    title: "AO3 Kudos Checker",
    status: "PORTING",
    description:
      "A Chrome/Firefox extension that detects whether you've already left kudos on an Archive of Our Own work, no login required.",
    bullets: [
      "Manifest V3 background service worker, rate-limited to 1 fetch / 1.5s",
      "Per-work badge injection via content scripts",
      "Multi-username support with a local chrome.storage.local cache",
      "Built with Claude (Anthropic) for architecture, review, and debugging",
      "Currently porting to Safari (macOS)",
    ],
    stack: ["JavaScript", "Chrome Extension API", "Service Workers", "Content Scripts"],
  },
  {
    category: "hybrid",
    tag: "EMBEDDED",
    title: "Reactive Monitor Backlight",
    description:
      "Arduino-driven ambient backlighting that samples the dominant colors on screen and mirrors them on an LED strip in real time.",
    bullets: [
      "Live screen color sampling",
      "Real-time LED color mirroring over serial",
    ],
    stack: ["Arduino", "C++"],
  },
  {
    category: "hybrid",
    tag: "EMBEDDED",
    title: "LED Infinity Cube",
    description:
      "An Arduino-powered LED infinity cube with Amazon Alexa voice control.",
    bullets: ["Custom driving logic for the LED matrix", "Alexa voice-control integration"],
    stack: ["Arduino", "C++"],
  },
  {
    category: "hardware",
    tag: "HARDWARE",
    title: "Small Form Factor PC Build",
    description: "Researched, sourced, and assembled a custom PC optimized for a small-form-factor case.",
    bullets: ["Thermal and clearance-constrained part selection", "Full build and cable management"],
    stack: ["PC Hardware"],
  },
];
