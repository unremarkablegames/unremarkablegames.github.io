---
title: "Same Problem, Five Scopes"
date: 2026-05-06
thumbnail: /assets/img/notes/2026-05-06-same-problem-five-scopes-thumb.jpg
description: "A vertical slice from an ad hoc prompt to a personal skill, project skill, plugin, and CI agent for standardizing commit messages."
---

# Same Problem, Five Scopes

I had some changes in my local working directory, so I asked Claude to write a commit message. I then made a skill to standardize my commit messages, committed that skill to a repo to share with everyone working on my project, added it to a plugin for my team to use, and then created an agent that runs as part of a CI job that rejects commits whose messages don't match the standard.

Same problem deployed at five different scopes: prompt, personal skill, project skill, plugin, and agent.

This is a vertical slice to illustrate how a simple problem can be solved using progressively wider scopes. The same concept can live at different scopes depending on who needs it, how often it runs, and whether it is advisory or enforced.

## Scope Levels

### Level 1 - ad hoc prompt: I want a commit message

Open Claude Code. Type: `review my changes, understand their intent, and write a tight conventional commit message.` You are done. Claude reads the diff and hands you a message. But what if you wanted that to be repeatable? You could copy and paste it from a file every time you wanted a commit message, or you could create a skill.

### Level 2 - personal skill: I want to standardize my commit messages

Take that same prompt and create a user-scoped skill under `~/.claude/skills/`. Now Claude can auto-invoke it, or you can type `/commit-message`. The prompt becomes repeatable by that user on that machine. But it is only repeatable by that user.

### Level 3 - project skill: I want this project's commit messages standardized

Move the skill you just created into the project, under `.claude/skills/`. Commit it. Now anyone using Claude Code in this repo gets the same skill, and any change to it goes through code review. The skill became part of the project and is now repeatable by anyone using Claude in that directory. If you wanted commits standardized across multiple projects, you would either have to ensure every project had a copy of that skill and kept it up to date, or you could create a plugin.

### Level 4 - plugin: I want my team's or organization's commit messages standardized

Create a plugin repository and publish your skill through a marketplace. Anyone who wants to use it can add that marketplace, install the concrete plugin with something like `/plugin install commit-tools@team-tools`, and invoke the namespaced skill with something like `/commit-tools:commit-message`. Same skill, but now it is repeatable by anyone who can access your plugin repository and has the plugin installed.

However, even if you ensure everyone has access to the same skills, using them is a best-effort mechanism.

### Level 5 - agent: I want to enforce a commit message standard

When you are concerned with governance, compliance, and review, a skill that you hope a dev runs doesn't really cut it. Extract the commit-message rules into an authoritative rubric, then build an agent using an agent SDK and deploy it as part of CI. Here, the agent evaluates each commit message against that rubric and the CI job becomes the gate that accepts or rejects the commit.

## When to use what

If you only need the answer once, use a prompt. If you keep typing the same prompt, make it a personal skill. If the convention belongs to a repository, make it a project skill. If the same behavior is needed across multiple repositories, a team, or an organization, package it as a plugin. If the behavior must happen whether or not someone remembers to ask for it, move it into an agent or CI gate.

When you progress through levels, ensure you are using the right tools for the job. If all you care about is `type(scope): subject`, use commitlint or a git hook. In our case, we use an LLM because we care about the relationship between the diff and the message. For enforcement, we want to determine whether the message captures the intent and whether the scope is honest.
