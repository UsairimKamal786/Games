// Easter Game Data

// Weapon Stats
const weapons = [
  { name: "Egg Blaster", damage: 50, range: 120 },
  { name: "Golden Slingshot", damage: 75, range: 160 },
  // ... (more weapons)
];

// Egg Types
const eggTypes = [
  { type: "Basic Egg", rarity: "Common", reward: 100 },
  { type: "Rare Egg", rarity: "Rare", reward: 500 },
  // ... (more egg types)
];

// Boss Data
const bosses = [
  { name: "The Mighty Bunny", health: 2000, attack: "Bunny Hop" },
  { name: "Choco Monster", health: 2500, attack: "Chocolate Overload" },
  // ... (more bosses)
];

// Multiplier Calculations
function calculateMultiplier(level) {
  return 1 + (level * 0.1);
}

// Progression Tables
const progression = [
  { level: 1, xpNeeded: 100 },
  { level: 2, xpNeeded: 250 },
  // ... (more levels)
];

// Constants
const GAME_CONSTANTS = {
  BASE_HEALTH: 100,
  MAX_LEVEL: 50,
};

// Balancing Data
const balancingData = {
  weaponDamageScaling: 1.2,
  eggRewardScaling: 1.5,
  // ... (more balancing data)
};

// Exporting all data
module.exports = {
  weapons,
  eggTypes,
  bosses,
  calculateMultiplier,
  progression,
  GAME_CONSTANTS,
  balancingData,
};
