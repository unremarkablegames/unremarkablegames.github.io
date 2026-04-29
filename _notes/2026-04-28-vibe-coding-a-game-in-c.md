---
title: "Adventures in Vibe Coding a Game in C"
date: 2026-04-28
thumbnail: /assets/img/notes/2026-04-28-vibe-coding-a-game-in-c-thumb.jpg
description: "How a 22,000-line vibe-coded C/SDL3 game forced me into multi-agent, principle-based code review."
---

# Adventures in Vibe Coding a Game in C

### TL;DR
AI made it easy to generate a 22,000-line C/SDL3 game. More or less... It did not make it easy to keep the code coherent. Everything worked for a while, until overlapping paths, scattered ownership, and duplicated logic made further changes unreliable. The lesson was that naive AI code review was not sufficient and did not become useful until I added multiple agents, defined explicit principles, and forced a separate challenger to verify each finding.

### How did I get here?
I built Voidstone as a no-IDE challenge: no IDE, no human code review, and no human inspection of the application code. 100% generated code. Only vibes. I did create the base build environment by hand because AI could not get that even partially workable on its own. After that, the constraint was simple: agents did all of it, including writing, testing, reviewing, and fixing the game. I managed the process from the outside.

Voidstone ended up at around 22,000 lines of C/SDL3, with TOML-driven world data, Lua scripting, save/load, real-time tick combat, mob AI, and a web export path. It is a single-player MUDlike: you type commands, read the result, move through rooms, fight enemies, die, and try again. If MUDlikes are your thing, a web-playable build is on itch: [Voidstone](https://unremarkablegames.itch.io/voidstone). It is not for everyone, but it gives a better sense of the project's scope than a line count can.

To be perfectly clear: this is _not_ a workflow recommendation.

### Initial take
At first, AI generated reasonable C code. It wired up gameplay systems, created content loaders, scripted NPC behavior, and kept a surprising amount of context in its head. About a third of the game was generated without any issues.

Then the codebase got complex enough that code generation started to fall apart: multiple logic paths doing almost the same thing, state scattered across unrelated structs, half-working fixes duplicated in multiple subsystems, and piles of unnecessary abstractions. I tried the obvious prompts. "Keep this simple." "Make sure this fits the architecture." I even broke out a "No mistakes." It actually worked for a bit, but at that point I needed to add some kind of code review.

At this point, forward progress ground to a halt. Adding anything new broke random existing functionality and I had to take a step back.

### Introducing agentic code review
My first attempt at agentic code review was simply "review my code." The agent would catch one issue and miss another, but usually it would wander off on a false-positive tangent. I am pretty sure the codebase got worse because of "fixing" false positives.

My first improvement to this setup was to split the review across multiple agents. This was a major win. Each agent started with a fresh context and a persona: holistic, intent alignment, correctness, simplicity, maintainability, structure. The finding list got longer and more focused, but so did the list of false positives, which became a serious problem.

To address the false-positive problem, I added a challenger to stress-test the findings. It searched the codebase to determine whether each finding was real, whether the code evidence supported it, and whether the proposed fix would actually fix it. This removed almost all the false positives, but the results were still not very stable. I could run the review ten times and get ten different sets of findings. Brute force worked: collect results, deduplicate them, and repeat until no new findings appeared. That took 30 to 45 minutes and burned through my max plan limits, so I dropped it as non-viable.

### I cheated...
I cheated at this point and looked at the code. This won't come as a surprise to anyone, but it was pure nightmare fuel. It "worked," but too much of the behavior depended on knowing which near-duplicate path happened to run first. Command effects, room transitions, combat, and script hooks had all grown into each other.

At this point, I was trying to wire up Lua, and event processing was not centralized. When I started to add script hooks, the agent would put them wherever an effect happened to be implemented. A movement-related event might get one hook in command handling, another in room transition logic, and another near an NPC or combat path. Each hook looked locally reasonable. The same logical event required hooks in two or three logic paths.

### Principled review found the tangle
My code review was completely missing this tangle. Adding an architecture or systems persona marginally improved detection, but not reliability. I decided to try focusing a review on high-level, general principles of evaluating software quality. I started with duplication, temporal interlacing, and multiple axes of change. This new style of review called out the tangle for what it was and provided reasonable refactoring solutions.

I then wrote out a complete set of principles and added a principle-based review stage to my multi-agent review process. It evaluated changes against principles for C code, software design, code structure, and SDL3 architecture.

I moved this concept from my game over to my day job as a skill, and it is now part of the standard toolset. I have iterated on it a lot since then. The current version is a multi-agent, multi-phase review that mixes personas with principles and aggressively stress-tests findings. It is thorough, quick, and relatively token-efficient.

### Takeaway
The smallest viable version of this concept is simple: write down the high-level principles you want the codebase to obey, make an agent evaluate changes against those principles, and make a separate challenger agent prove that each finding is real.

This does not make AI reliable by itself. It can, and will, produce confident yet well-reviewed nonsense. However, it is a critical part of an end-to-end agentic pipeline.
