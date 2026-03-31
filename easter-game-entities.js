// easter-game-entities.js

// Player class
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    attack() {
        // Attack logic
    }
    takeDamage(amount) {
        this.health -= amount;
    }
}

// Enemy class
class Enemy {
    constructor(type) {
        this.type = type;
        this.health = 50;
    }
    attack() {
        // Enemy attack logic
    }
}

// Cultist Boss Class
class CultistBoss extends Enemy {
    constructor() {
        super('Cultist');
        this.specialAbility = 'Summon minions';
    }
    useAbility() {
        // Special ability logic
    }
}

// Chicken class
class Chicken {
    constructor() {
        this.health = 10;
    }
    layEgg() {
        // Logic for laying eggs
    }
}

// Egg class
class Egg {
    constructor(type) {
        this.type = type;
        this.isHatched = false;
    }
    hatch() {
        this.isHatched = true;
    }
}

// Weapon classes
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

class Sword extends Weapon {
    constructor() {
        super('Sword', 15);
    }
}

class Bow extends Weapon {
    constructor() {
        super('Bow', 10);
    }
}

// NPC class
class NPC {
    constructor(name) {
        this.name = name;
    }
    talk() {
        // Dialog logic
    }
}

// Behaviors for entities
function attack(entity) {
    if (entity instanceof Player) {
        console.log(entity.name + ' attacks!');
    }
}

// More entities and functionalities can be added as needed.
// This is just a start!