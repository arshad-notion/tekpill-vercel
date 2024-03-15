export interface IPhoneSpecs {
  Main: any;
  brand: string;
  model: string;
  Network: Network;
  Launch: Launch;
  Body: Body;
  Display: Display;
  Platform: Platform;
  Memory: Memory;
  "Main Camera": MainCamera;
  "Selfie camera": SelfieCamera;
  Sound: Sound;
  Comms: Comms;
  Features: Features;
  Battery: Battery;
  Misc: Misc;
  Tests: Tests;
  images: string[];
  hits?: number;
  postTime?: Date;
  customId: string;
}

export interface Network {
  Technology: string;
  "2G bands": string;
  "": string;
  "3G bands": string;
  "4G bands": string;
  Speed: string;
}

export interface Launch {
  Announced: string;
  Status: string;
}

export interface Body {
  Dimensions: string;
  Weight: string;
  Build: string;
  SIM: string;
  "": string;
}

export interface Display {
  Type: string;
  Size: string;
  Resolution: string;
  Protection: string;
}

export interface Platform {
  OS: string;
  Chipset: string;
  CPU: string;
  GPU: string;
}

export interface Memory {
  "Card slot": string;
  Internal: string;
  "": string;
}

export interface MainCamera {
  Dual: string;
  Features: string;
  Video: string;
}

export interface SelfieCamera {
  Single: string;
  Features: string;
  Video: string;
}

export interface Sound {
  Loudspeaker: string;
  "3.5mm jack": string;
}

export interface Comms {
  WLAN: string;
  Bluetooth: string;
  Positioning: string;
  NFC: string;
  Radio: string;
  USB: string;
}

export interface Features {
  Sensors: string;
  "": string;
}

export interface Battery {
  Type: string;
  Charging: string;
}

export interface Misc {
  Colors: string;
  Models: string;
  SAR: string;
  "SAR EU": string;
  Price: string;
}

export interface Tests {
  Performance: string;
  Display: string;
  Camera: string;
  Loudspeaker: string;
  "Audio quality": string;
  "Battery (old)": string;
}
