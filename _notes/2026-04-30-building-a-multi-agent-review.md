---
title: "Building a Multi-Agent Code Review"
date: 2026-04-30
thumbnail: /assets/img/notes/2026-04-30-building-a-multi-agent-review-thumb.jpg
description: "How a 22,000-line vibe-coded C/SDL3 game forced me into multi-agent, principle-based code review."
---

# Building a Multi-Agent Code Review

In my last note about vibe coding a C game, the surprising part was not that AI could generate a lot of code. It could. The hard part was coherence. Over time, duplicate paths appeared. State lived in too many places. Event hooks landed wherever the current implementation happened to be. Each local change looked reasonable, but the system became harder to change. I call this "slopification" of a codebase.

The obvious fix was to ask the AI for a code review. Naive "review my code" prompts did catch some real issues, but they also produced confident false positives. My guess is that fixing those false positives sometimes made the code worse than the review made it better.

`<snark>` The solution here is to just add more AI! Like with software engineering abstractions, the solution is to pile them up, one on top of another, until the system finally makes sense! `</snark>`

The solution here is more AI, but targeted, multi-agent use.

## What "Multi-Agent" Means
Multi-agent does not mean using an agent SDK or framework. It means using several isolated model contexts with different jobs. One context coordinates the review. Others inspect the same change through different lenses. Others challenge the findings. Another context consolidates the result.

You can do this manually with separate chats, package it as a Codex skill, or automate it with an agent SDK: `Coordinator -> Reviewers -> Principles Reviewers -> Challenger -> Consolidator -> Final Findings`. A multi-agent review is not one giant smarter reviewer prompt. It is a review system with checks and counterchecks.

## Why Use Subagents?
Subagents are useful because they control context. Long contexts are not free. Research on attention sinks has shown that initial tokens can attract attention even when they are not semantically important. Recent tokens are also unusually salient because the model generates from the end of the context. As context grows, relevant evidence competes with more irrelevant text. Chroma's 2025 Context Rot report tested 18 models and found that performance becomes less reliable as input length grows, especially when the context contains distractors. This is often described as a U-shaped performance curve or positional bias.

One long review chat accumulates diffs, surrounding code, assumptions, search output, research, and previous findings. Much of this context lands in the middle and receives little attention. A focused subagent starts fresh with one job and only the relevant evidence. That matters even with very large context windows. A million-token window means more can fit, not that the model will retrieve and use every part equally well. As input grows, relevant evidence has to compete with more distractors.

## The Coordinator
The coordinator lives in the primary context. Its job is setup and management, not judgment. It owns the workflow: scope, intent, changed lines, dispatch, and final delivery.

## Reviewer Personas
I start the review with a few persona-based review agents. I use them to reduce scope and increase focus on areas I find critical. An effective persona has both a role and constraints, such as scope, changed-line anchoring, and an output contract. In the example prompt, the shared constraints handle most of that, so each persona can be as small as a name or direction.

The list I use changes from project to project, but generally I use holistic, intent alignment, correctness, maintainability, and systems personas. Each agent gets its persona, then inspects changes, reads surrounding code as needed, and reports only high-signal findings.

## Principle Reviewers
Personas focus on logic-shaped problems, whereas principles catch wider structural and usage problems that logic-centric reviews tend to miss. I have a set of principle documents that cover good, clean, and maintainable code; specific language style and usage; and frameworks I use.

Most coding principles are written as advice: prefer this, avoid that, do this when possible. For review, I want principles that behave more like evaluation criteria. They should help an agent decide whether a change improves or damages the code. That is a mindset shift from the usual "Effective Java" or "Clean Code" style, although those still work. I get better results from evaluation-style principles.

## The Challenger
More reviewers create more findings, but not all are real. In my runs, most findings are either irrelevant, false positives, or just plain noise. These findings will often look plausible, and the fix seems reasonable. In my codebases, fixing these non-issues has, more often than not, added slop to the codebase. The challenger directly addresses the false positive rate by letting the agent attempt to invalidate a finding.

The challenger gets the finding list and tries to invalidate each item one at a time. For every finding, it tries to determine if the impact of not fixing is real, a false positive, some form of future-proofing, or some kind of hypothetical insurance. This phase needs a separate context. If the challenger shares the same context with the reviewer, it inherits the anchors that produced the findings and tends to be overly permissive.

## Consolidation
The final pass is a KILL, KEEP, or COMBINE round. Kill false positives, nitpicks, hypotheticals, and weak concerns. Combine duplicates or similar findings. Keep findings with evidence, impact, and a useful recommendation. This is why the finding template matters. We need to ensure there is enough information and context in each finding to make a reasonable determination here.

I prefer to run consolidation in its own context. The example prompt leaves it in the primary context, which is acceptable for a lightweight version, but combining consolidation with the challenger has produced skewed results for me: either everything gets killed or everything survives. Skipping this step leads to a lot of noise in the finding set.

## Making It Work
In the prompt, there is wording that is non-obvious. It is there to accomplish the following:
- **Keep review scoped to changed lines:** The changed-lines manifest prevents a codebase-wide critique. The example uses a changed-lines manifest, then the challenger kicks out unrelated changes. Tune the wording for the review you want. Sometimes you want a broader architectural critique, but most code reviews should stay tied to the change under review.
- **One at a time, do not batch:** This is an attention strategy. Given half a chance, both Claude and Codex will batch groups of work. I have added this wording to places where I want to leverage the agent and encourage separate passes.
- **Prerequisites:** Claude and Codex will both jump the gun on occasion and start phases before the last is fully complete. This guard helps keep them in check. This is not the real solve. If you are encoding workflows into prompts like this, you should get familiar with Anthropic's and OpenAI's agent frameworks.

## Give it a try
Read the example prompt first, try it out, then write your own. It requires a surprisingly small amount of well-written prose to get a lot out of an agent, and you can tailor it to your specific workflow. Fair warning: this can be token-hungry. Use a strong enough model and reasoning setting for the number of agents and instructions. I have gotten OK-ish results with cheaper or lighter settings, but reliability drops as the workflow gets more complex. I think this can be resolved by using an agent SDK, as most of the instructions are workflow related, but I have not tried it yet.

## Appendix: Full Coordinator Prompt
This is a stripped-down version of the skill I use and a ChatGPT-generated set of principles. My full prompt has more configurability and a full set of principles across several domains covering good coding, good C code, good game code, good SDL usage, and a few others. But this is enough to get you started.

I have tested this using Codex with ChatGPT 5.5 high and Claude Code with Sonnet. It works better in Claude Code as written, but my guess is that it could be adapted for Codex. I am just less familiar with that model's personality.

```
Review the current directory's diff against the main branch. This is a review. Do not fix, change, or modify anything.

## Process
You are the **review coordinator**. Your job is to gather context, dispatch agents, validate findings, and deliver results.

### 1. Gather context
In this phase we will gather context.
- Determine what's being reviewed and get the diff.
- Infer the author's intent. Use commit messages and the diff itself to identify the intent.
- Parse the diff to produce a changed-lines manifest. This will be a `{file_path: [start-end, ...]}` map of every changed line range (new-side line numbers). Extract from hunk headers and added/modified lines.

### 2. Discovery
**Prerequisite**: The context gathering phase must be complete before starting discovery.

You will perform two types of code reviews. One is focused on the code, the other is focused on principles of good software. Subphases can be done in parallel.

#### 2.1 Code Review
In this subphase you will spawn agents, in parallel, to review our code changes. Each agent should be given its role and told to find high-signal issues. The agent should review the changed-lines manifest one range at a time; ranges must not be batched. Findings must be surfaced using the finding template. Agents have full read-only access to the repo and web access.

These are the code review agents to spawn:
- **Holistic**
- **Intent alignment**
- **Correctness**
- **Simplicity and maintainability**
- **Structure and architectural fit**

#### 2.2 Principles Review
In this subphase you will spawn an agent to review the changes against our list of principles and look for high-signal issues. Agents have full read-only access to the repo and web access. Findings must be surfaced using the finding template.

1. Give the agent the set of principles and the changed-lines manifest.
2. For each principle, instruct the agent to review the changes against that principle. Do this one at a time. Do not batch the reviews.
  - Research and review the code.
  - If external information is needed, such as documentation, fetch it from the web.
3. Once complete, build a list of findings.
4. Surface your findings.

### 3. Stress test
**Prerequisite**: All discovery phases must be complete before starting the stress test.

Spawn a new agent. Give it the finding list. Its job is to try and invalidate the findings. For each finding, one at a time without batching, do the following:
1. Research the code, check documentation, and search the web as needed to holistically understand the finding.
  - Check the documentation or web to verify any findings about third-party libraries.
2. Vet the issue:
  - Drop false positives, nitpicks, anything without concrete consequence, and anything not actionable.
  - Is the issue about the cited change? If not, drop it.
  - Is the issue hypothetical or theoretical? Drop it.
  - Is the only impact on potential future changes? Drop it.
  - Is the issue future-proofing or solving a potential future problem? Drop it.
  - Won't have a meaningful impact if ignored? Drop it.
3. Answer: "What concretely happens if this finding is ignored?" This becomes the IMPACT field in the output.
4. Assign severity using the severity rubric below.
5. Update the finding with any new information you have found.

When complete, respond with the updated findings list.

### 4. Consolidate
**Prerequisite**: Stress test must be complete before starting.

Take the updated findings list from the stress testing phase and run a KILL, KEEP, or COMBINE on the set.

### 5. Deliver
**Prerequisite**: Consolidate must be complete before starting.

Present findings to the user.

---

## Finding template
REVIEW FINDING:
**TITLE:** {short title}
**LINES:** {file_path:L<start>-L<end>, ...}
**SEVERITY:** {critical-fix | must-fix | should-fix | consider}
**CONCERN:** {what's wrong, in detail.}
**IMPACT:** {what concretely happens if this is ignored}
**RAISED BY:** {what caught this issue (principle/review focus)}
**RECOMMENDATION:** {what to do about it}

## Severity rubric
Three dimensions:
- **Exposure** — How visible is this issue?
- **Impact** — What's the damage when it fails?
- **Visibility** — How observable is the failure?

Severity levels:
- **critical-fix**: High on all dimensions.
- **must-fix**: High on any two dimensions, or low visibility + high impact (silent damage is always urgent).
- **should-fix**: Moderate across dimensions, or high on one but mitigated by the others.
- **consider**: Low exposure, low impact, or high visibility (fails loud and local).

## Principles
## Change Locality
- **Favor structures that make normal changes local:** Good code lets a common change be made by touching a small, obvious set of places with predictable impact. This holds for software expected to live past the next experiment; it does not justify fragmentation when a one-file solution is easier to understand.
- **Prefer boundaries around volatile decisions:** A module boundary is good when it hides a decision that is likely to change and exposes a stable contract. This holds when callers would otherwise depend on that decision; it should not be added for speculative variation or when the seam leaks the same complexity.

## Comprehension
- **Prefer code that supports local reasoning:** A maintainer should be able to understand what a unit does, what it depends on, and what it can affect from its name, signature, nearby code, and explicit contract. This holds for most maintained code; when domain complexity, concurrency, or measured performance requires nonlocal coordination or denser implementation, the hidden assumptions and effects should be made explicit.
- **Favor names and APIs that read correctly at the use site:** Names, signatures, and module names should make valid use obvious where the code is called, not only where it is defined. This holds for public and shared code; terse domain notation is acceptable when it is standard for the maintainers.

## Cohesion & Coupling
- **Favor cohesion by shared invariants and reasons to change:** Things belong together when they protect the same invariant, model the same concept, share a lifecycle, or change for the same business reason. This is stronger evidence than grouping by file type or framework layer; operational, deployment, framework, or performance constraints may justify a physical split without changing the underlying ownership boundary.
- **Avoid strong, distant, or cyclic coupling:** Dependencies should be explicit, directional, and aligned with ownership and stability, so a change in one unit has a predictable impact on its dependents. This holds across modules, packages, teams, and deployables; small private cycles or tight coupling inside a deliberately cohesive unit matter less than cycles across stable contracts or ownership boundaries.

## Abstraction
- **Favor deep abstractions over shallow wrappers:** A good abstraction hides meaningful complexity behind a small, stable, intention-revealing interface. This holds when the abstraction lowers total cognitive load; shallow wrappers are justified for compatibility, isolation, policy enforcement, instrumentation, or real test, security, or ownership boundaries.
- **Prefer duplication over the wrong abstraction:** Remove duplication when it represents the same concept and would otherwise create synchronization risk. Keep or reintroduce duplication when cases are still diverging, local, or cheaper than a conditional abstraction that every caller must understand.

## State & Effects
- **Favor explicit state ownership and visible effects:** Mutable state, I/O, time, randomness, concurrency, transactions, and external calls should have clear owners and visible boundaries. This holds for most application code; effects may be combined in atomic, transactional, or performance-critical paths when the contract, isolation boundary, and tests make that combination safe.
- **Prefer representations that make invalid states hard to express:** Good code moves constraints into types, constructors, schemas, and validated boundaries so illegal combinations are hard to create. This holds when the representation simplifies usage and failure handling; it should not produce type scaffolding that obscures a simple rule.

## Verification
- **Prefer consequential promises that are verifiable:** For behavior that matters to users, data, security, compliance, operations, or money, there should be a trustworthy way to prove it still works after change. This holds for production code; throwaway spikes may rely on manual checks only until their behavior becomes depended on.
- **Prefer tests that protect behavior without freezing implementation:** Tests should describe observable behavior, important contracts, and risk while staying deterministic and diagnosable. This holds for most tests; implementation-level checks are justified when the internal strategy is part of the promise, such as caches, concurrency, algorithms, generated output, serialization, resource limits, or safety and security mechanisms.

## Evolution & Operation
- **Favor failures that explain themselves:** Errors, logs, traces, metrics, alerts, and test failures should expose enough accurate context to identify what failed, where, under which relevant conditions, and likely impact. This holds for maintained systems; privacy, security, cost, cardinality, and noise can limit detail, but should not leave maintainers guessing about the next diagnostic step.
- **Consider runtime quality and metrics as evidence, not proof:** Latency, throughput, memory, cost, coverage, lint, complexity scores, and coupling counts are signals to investigate against user and change outcomes. This holds when evaluating quality; it should not turn proxy metrics or aesthetic rules into goals.
```
