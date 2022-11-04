let newPostLolCharacters = [
    {
        id: 1,
        name: "Poppy",
        look: "Dwarf with a hammer",
        role: "Tank",
        difficulty: "Moderate",
        abilities:
            {
                passive:
                    {
                        name: "IRON AMBASSADOR",
                        description: "Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_P1.webm"
                    },
                q:
                    {
                        name: "HAMMER SHOCK",
                        description: "Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_Q1.webm"
                    },
                w:
                    {
                        name: "STEADFAST PRESENCE",
                        description: "Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain Move Speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_W1.webm"
                    },
                e:
                    {
                        name: "HEROIC CHARGE",
                        description: "Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_E1.webm"
                    },
                r:
                    {
                        name: "KEEPER'S VERDICT",
                        description: "Poppy channels a hammer strike that knocks enemies very far away.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0078/ability_0078_R1.webm"
                    },
            }
    },
    {
        id: 2,
        name: "Vayne",
        look: "Sexy woman with a cross-bow",
        role: "Marksman",
        difficulty: "High",
        abilities:
            {
                passive:

                    {
                        name: "NIGHT HUNTER",
                        description: "Vayne ruthlessly hunts evil-doers, gaining 30 Move Speed when moving toward nearby enemy champions.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_P1.webm"
                    },
                q:
                    {
                        name: "TUMBLE",
                        description: "Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_Q1.webm"
                    },
                w:
                    {
                        name: "SILVER BOLTS",
                        description: "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_W1.webm"
                    },
                e:
                    {
                        name: "CONDEMN",
                        description: "Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.",
                        video: " https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_E1.webm"
                    },
                r:
                    {
                        name: "FINAL HOUR",
                        description: "Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_R1.webm"
                    }
            }

    },
    {
        id: 3,
        name: "Lissandra",
        look: "Icey queen",
        role: "Mage",
        difficulty: "Moderate",
        abilities:
            {
                passive:
                    {
                        name: "ICEBORN SUBJUGATION",
                        description: "When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_P1.webm"
                    },
                q:
                    {
                        name: "ICE SHARD",
                        description: "Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Move Speed. Shards pass through the target, dealing the same damage to other enemies hit.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_Q1.webm"
                    },
                w:
                    {
                        name: "RING OF FROST",
                        description: "Freezes nearby enemies in ice, dealing magic damage and rooting them.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_W1.webm"
                    },
                e:
                    {
                        name: "GLACIAL PATH",
                        description: "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_E1.webm"
                    },
                r:
                    {
                        name: "FROZEN TOMB",
                        description: "If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Move Speed.",
                        video: "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0127/ability_0127_R1.webm"
                    }
            }
    }
];

module.exports = newPostLolCharacters;