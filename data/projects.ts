export type Project = {
  tag: string;
  title: string;
  status?: "ACTIVE" | "IN PROGRESS" | "PORTING";
  description: string;
  bullets: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
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
    tag: "EMBEDDED",
    title: "LED Infinity Cube",
    description:
      "An Arduino-powered LED infinity cube with Amazon Alexa voice control.",
    bullets: ["Custom driving logic for the LED matrix", "Alexa voice-control integration"],
    stack: ["Arduino", "C++"],
  },
  {
    tag: "HARDWARE",
    title: "Small Form Factor PC Build",
    description: "Researched, sourced, and assembled a custom PC optimized for a small-form-factor case.",
    bullets: ["Thermal and clearance-constrained part selection", "Full build and cable management"],
    stack: ["PC Hardware"],
  },
  {
    tag: "SYSTEMS",
    title: "Nand2Tetris — CPU Architecture",
    status: "IN PROGRESS",
    description:
      "Working through the hardware-to-software computing curriculum, building a simplified CPU from logic gates upward.",
    bullets: ["Logic gates → ALU → CPU → assembler → VM, built in sequence"],
    stack: ["Hack Assembly", "Verilog"],
  },
];
