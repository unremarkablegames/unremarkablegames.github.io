---
title: "Game Design Document"
---

# Game Design Document
## Game Overview
A retro-futuristic arcade puzzler, gameplay based on Tomb of the Mask, styled with neon colors and cyberpunk elements and set to a synthwave soundtrack.

### Game Concept
- **Brief Description:** The gameplay elements of Tomb of the Mask meets the stylistic elements of Tron (1982) and Synthwave.
- **Genre:** Arcade puzzler
- **Platform(s):** Itch.io and Steam on Windows, Mac, and Linux as well as Nintendo Switch.
- **Engine:**: Custom engine and editor. Described in the Engine Design Document.
- **Target Audience:** 12+

### Game Objectives
- **Player Goals:** Complete each maze in the labyrinth.
- **Win/Loss Conditions:** Navigate the pawn, a mouse, to the end of each labyrinth until all of them are complete. Find the entrance to the secret level and complete them, along with the final boss fight.

## Gameplay
### Core Mechanics
- **Controls:** Up, down, left, right, and action.
- **Main Actions:**
  - Movement: pawn moves in a straight line, without being able to be turned, until a collision or death.
  - Action: pawn can drop a pickup.

### Game Loop
Pawn moves until a collision with the environment. If a trap is hit, the pawn dies and it is restarted at the beginning of the level. On collision the pawn stops and the player can choose a new direction.

### Features
- **Key Features:**
  - 100 levels.
  - 10 secret levels at a much harder difficulty.
  - 10 boss fights plus one final boss fight.
  - Each level has at least one secret.
- **Environment Traps:**
  - Snap trap: Pawn can pass over, but must move quickly if stopped on it.
  - Spike walls: Pawn can move along, but cannot head into them.
  - Beam trap: Shoots a beam if a pressure plate is touched.
  - Sweeping beams: Beams the move along the edge of a wall.
  - Zap tiles: Safely walk on, but activate once walked on. They stay on for a period of time. Hitting an activated tile or stopping on a tile will kill the pawn.
  - Plasma ball: Released from a plasma wall. It moves along a set path and kills the pawn if touched.
  - Hole: a section of missing flooring. Can be switched on/off with a trigger plate.
  - Magnet: Attracts the pawn towards it.
  - Turret: Aims and shoots at the pawn if it gets too close.
- **Mobs:**
  - Plasma bug: Patrols a path and will electrocute the pawn if touched.
  - Cat: Once triggered it will case the pawn. The cat is two tiles wide and will chase the pawn until a teleport is hit, collision due to the path getting too narrow or blocked, or the cat hits a trap (it will reset).
  - Snake: Once triggered it will case the mouse. The snake is one tile wide and will chase the mouse until a teleport is hit, collision due to the path getting blocked, or the snake hits a trap (it will reset).
  - Phantom: Can phase through walls and take a direct path to the pawn.
- **Modifiers:**
  - Moving platform: Floor that instantly shifts a set number of blocks. Pawn will move that number of blocks if on the platform when it shifts.
  - Conveyor belt: Moving across the trap at a 90 degree angle will cause the mouse to shift one tile in the direction of the conveyor. Moving across the conveyor in an opposing direction will slow the mouse. Moving with the conveyor will speed up the pawn.
    - There must not be a way for the mouse to stop on the belt.
  - Bumper: Causes the mouse to “bump” off and keep moving rather than stopping on a collision.
  - Teleport: Causes the pawn to move to a different part of the maze.
  - Falling wall: Once the pawn leave the trigger plate a wall will fall.
  - Door: Opened or closed based on a trigger plate.
  - False wall: A wall that looks solid but can be passed though.
  - Power switch and wires: Trigger plate that powers whatever it is attached to. For traps any power is enough to power it. For modifiers, all lines must be powered.
- **Pickups:**
  - Cheese pucks: Everywhere.
  - Cheese wheel: One is hidden in each level.
  - Shield: Once picked up it gives the pawn a few seconds of invulnerability.
  - Plasma charge: Charges the pawn for a short period of time. It will harm a mob if the pawn touches one while charged.
  - Plasma claymore: Can be placed by the pawn once picked up. Once placed it is armed and will harm anything, pawn or mob, that touches it.
  - Decoy: Can be deployed once picked up. It can be released in a specified direction, but will pick random directions on every collision until a trap it hit or it times out.
  - Trapped decoy: Can be deployed once picked up. It can be released in a specified direction, but will pick random directions on every collision until a trap it hit or it times out. Trapped decoys will harm mobs if caught by them.
  - Disk: Unlocks a song in the secret disco room or a color in the secret decoration room.
- **Boss Fight:**
  - Use trigger plates, traps, pickups, etc. to harm the boss or otherwise escape.
### Levels
- Each level will have four challenges:
  - Time goal
  - All cheese pucks
  - The big cheese
  - All three at once
## Story and Characters
### Plot Summary
- Level 0-9
  - The story starts on the first level where the text “SYSTEM: Little mouse, solve my labyrinth and I will set you free” is displayed.
  - After the boss SYSTEM will tell you how good you are doing.
  - Player Emotional State: These levels are very easy, aimed to show the ropes and get the player comfortable with the controls.
  - Player should feel relaxed.
- Level 10-19
  - Level 10 has a secret disco room with pressure plates that, when touched, play game music. Must find the disks to unlock the songs.
  - In the next levels you will run across a few notes that give you hints for the cheese wheel on previous levels. The notes will be wondering if anyone else will see them.
  - After the boss SYSTEM will tell you that you are exceeding their expectations.
  - Player Emotional State : These levels are longer than the first ten, but should be easy. The puzzle nature of should start showing up. SYSTEM starts to pop in, but interactions are positive.
  - Player should still feel relaxed.
- Level 20-29
  - Level 20 has a secret decoration room with pressure plates that, when touched, change the mouses color.
  - Same notes about secrets in previous levels and some tips on how to beat the time limits. Hints about the secret rooms on 10 and 20.
  - After the third boss SYSTEM will tell you that they haven’t had a pawn hold up this well for a long time.
  - Player Emotional State : These levels are harder than the previous ten. The arcade and puzzle nature of should be clear by this point. SYSTEM’s interactions are positive, but the player should start seeing some of the negative side of SYSTEM from a vailed taunt or mock.
  - Player should be less relaxed, more in the zone.
- Level 30-39
  - You will start seeing scattered notes about being free. Talk about some of his personal bests on levels. Talk about why they have to go though this test to be set free.
  - After the fourth boss SYSTEM will remind you that you are approaching your half way point to freedom.
  - Player Emotional State : These levels are longer than the previous ten. SYSTEM’s interactions become less coherent. The player will start seeing the negative side of SYSTEM.
  - Player should start to question SYSTEM as a positive.
- Level 40-49
  - Notes about almost being done, the levels are harder, etc.
  - After the fifth boss SYSTEM will welcome you to the halfway point.
  - Player Emotional State : Unchanged.
- Level 50-59
  - You will find notes talking about almost being done.
  - After the sixth boss SYSTEM will tell you that the mazes will get more challenging from this point out. He is almost free.
  - Player Emotional State : Unchanged.
- Level 60-69
  - You will run into a notes on the floor that tells you he has been to the end and there is nothing there.
  - After the seventh boss fight SYSTEM will congratulate you. He will mention that there have been some anomalies and vandals leaving notes that are just lies in the labyrinth and to ignore them.
  - Player Emotional State : Player should be seriously questioning SYSTEM at this point. SYSTEM will be mocking and jabbing more openly. Player start to feel more stress.
- Level 70-79
  - You will run into more notes about a secret exit in the last level, but he can’t figure out how to open it.
  - After the eighth boss fight SYSTEM will cheer you on. He will warn you about others that have gotten loose in the labyrinth and he should stay away from them. Or else.
  - Player Emotional State : The new from the other mouse should be a little hopeful. The theme will be more uplifting even though SYSTEM is being a jerk at this point.
- Level 80-89
  - In one of the levels you will run into the mouse that wrote the notes and he will be saying “I found the secret exit. I can’t solve the levels alone. Find me when you get there.” He will run to the exit.
  - After the ninth boss fight SYSTEM will say that you are exceeding his wildest imagination.
  - Player Emotional State : SYSTEM is starting to behave manic and that should trigger people to think that SYSTEM is really the bad guy.
- Level 90-99
  - You will run across notes raising questions about the reality of this place.
  - After the tenth boss fight SYSTEM will thank the pawn and tell the pawn that he isn’t real, just a computer program in a simulated environment. He was used to train an AI and he performed admirably. But, not being real, he can never be free.
  - Player Emotional State : Let down, confused a little. Hopefully they have seen the hints and know to dig around and find the secret.
- Level 100-109
  - If they find the secret exit there will be ten more levels, each level will have SYSTEM getting more and more frantic telling the mouse to go back. Don’t go further. Threatening. Etc.
  - Each level you must find the other mouse to bypass a trap or other situation that would be impossible with just one mouse.
  - The boss fight will be with SYSTEM. You will see the other mouse and he will be like “Let’s let him have it.” You will have to work cooperatively with the other mouse to defeat SYSTEM.
  - After defeating SYSTEM you will get a message from SYSTEM thanking the mice  and telling him that he will now set them free. He drops them into a side room that is trapped in such a way as to make any move kill the mouse. The other mouse will be there and say “No. No. We were supposed to be free. No.” and a beam trap will clip him. If you don’t move the beam trap will kill you. If you move in any other direction you will hit a trap. After the pawn dies the credits will roll.
  - Player Emotional State : Happy they beat the game. A little psychologic trauma that everyone dies in the end.
### SYSTEM interactions
- Interactions in the first 20 levels or so are all very positive and encouraging.
  - If you take too long on a level SYSTEM will cheer you on.
  - If you die a lot on a level SYSTEM will tell you to relax.
  - If you complete all the challenges on a level SYSTEM will congratulate you.
- Interactions in the next 40 levels or so are less positive and encouraging, more to-the-point and direct. SYSTEM will mock you if you aren’t doing good enough.
- Interaction in the next 20 levels become derisive even on success. SYSTEM will drive you on, but not nicely.
- Interactions in the last 20 levels are manic and elated. SYSTEM is not nice.

### Characters
- M9402: Pawn
- M9327: Other Mouse
- SYSTEM: The bad guy
