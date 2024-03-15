import mongoose from "mongoose";

const schema = {
  brand: {
    type: "String",
  },
  model: {
    type: "String",
  },
  images: ["String"],
  Network: {
    Technology: {
      type: "String",
    },
    "2G bands": {
      type: "String",
    },
    "": {
      type: "String",
    },
    "3G bands": {
      type: "String",
    },
    "4G bands": {
      type: "String",
    },
    Speed: {
      type: "String",
    },
  },
  Launch: {
    Announced: {
      type: "String",
    },
    Status: {
      type: "String",
    },
  },
  Body: {
    Dimensions: {
      type: "String",
    },
    Weight: {
      type: "String",
    },
    Build: {
      type: "String",
    },
    SIM: {
      type: "String",
    },
    "": {
      type: "String",
    },
  },
  Display: {
    Type: {
      type: "String",
    },
    Size: {
      type: "String",
    },
    Resolution: {
      type: "String",
    },
    Protection: {
      type: "String",
    },
  },
  Platform: {
    OS: {
      type: "String",
    },
    Chipset: {
      type: "String",
    },
    CPU: {
      type: "String",
    },
    GPU: {
      type: "String",
    },
  },
  Memory: {
    "Card slot": {
      type: "String",
    },
    Internal: {
      type: "String",
    },
    "": {
      type: "String",
    },
  },
  "Main Camera": {
    Dual: {
      type: "String",
    },
    Features: {
      type: "String",
    },
    Video: {
      type: "String",
    },
  },
  "Selfie camera": {
    Single: {
      type: "String",
    },
    Features: {
      type: "String",
    },
    Video: {
      type: "String",
    },
  },
  Sound: {
    Loudspeaker: {
      type: "String",
    },
    "3.5mm jack": {
      type: "String",
    },
  },
  Comms: {
    WLAN: {
      type: "String",
    },
    Bluetooth: {
      type: "String",
    },
    Positioning: {
      type: "String",
    },
    NFC: {
      type: "String",
    },
    Radio: {
      type: "String",
    },
    USB: {
      type: "String",
    },
  },
  Features: {
    Sensors: {
      type: "String",
    },
    "": {
      type: "String",
    },
  },
  Battery: {
    Type: {
      type: "String",
    },
    Charging: {
      type: "String",
    },
  },
  Misc: {
    Colors: {
      type: "String",
    },
    Models: {
      type: "String",
    },
    SAR: {
      type: "String",
    },
    "SAR EU": {
      type: "String",
    },
    Price: {
      type: "String",
    },
  },
  Tests: {
    Performance: {
      type: "String",
    },
    Display: {
      type: "String",
    },
    Camera: {
      type: "String",
    },
    Loudspeaker: {
      type: "String",
    },
    "Audio quality": {
      type: "String",
    },
    "Battery (old)": {
      type: "String",
    },
  },
  postTime: {
    type: "Date",
  },
  hits: {
    type: "String",
  },
  customId: {
    type: "String",
  },
};

const brandSchema = new mongoose.Schema(schema);

export const Specs =
  mongoose.models.phoneSpecs || mongoose.model("phoneSpecs", brandSchema);
