---
title: "Human and AI Collaboration: Using Intuition and Testing the Output"
description: "How people can use generative AI to explore ideas and analyze security problems while keeping evidence and judgment in the process."
pubDate: 2025-06-22
topic: "cyber-security"
featuredImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
author:
    name: "yankee0one"
    bio: "Cybersecurity leader specializing in incident response, threat detection, and operations."
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
tags: ["AI Collaboration", "Generative AI", "Cybersecurity", "Human-AI Interaction", "Innovation"]
updatedDate: 2026-09-08
---

A useful idea often starts with a connection that is difficult to explain. An analyst recognizes an unusual sequence of events, or someone sees a similarity between a technical problem and an experience outside work. Generative AI can help explore that connection, but the resulting explanation still needs to survive a check against reality.

That is the kind of human and AI collaboration I find worth developing: a process that makes room for intuition, then gives us a way to test it.

## Understand what each contributes

People bring knowledge of the organization, experience with consequences, and responsibility for decisions. An analyst may know that an unusual login coincides with maintenance, or that isolating a server would interrupt a service customers depend on. Those details matter even when they are absent from the data supplied to a model.

A language model can summarize supplied material, propose explanations, and draft queries or alternative approaches. That can reduce the effort needed to explore a problem. Its usefulness depends on the task, the information available, and the reliability of the surrounding tools.

Generated ideas are not free of bias. A model can reproduce assumptions in its training data, invent support for an answer, or agree with a misleading premise. NIST's [Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) identifies confabulation and harmful bias among the risks that organizations need to manage.

Human intuition also needs scrutiny. Experience can help us recognize a pattern, but it can make a familiar explanation feel correct before the evidence supports it.

## Build a process around a real decision

Begin by stating the problem and the decision it affects. “Explain these alerts” is less useful than “Compare the evidence for account compromise and authorized maintenance, and identify what we need to check next.”

Provide the relevant observations and constraints. Separate confirmed events from assumptions, and ask the model to preserve that distinction. If a source is missing, the answer should identify the gap.

Then test the proposed explanation. Follow citations to their source, run queries against the intended data, and check whether the result changes when an assumption changes. A convincing narrative is a starting point for investigation.

## Use AI to extend an idea

For creative work, start with the observation that interests you. Ask for alternative explanations, objections, or examples from another field. A brief analogy may reveal a useful relationship, provided the comparison does not hide an important difference.

For example, comparing an incident response team to a flight crew can clarify role assignment and checklists. It does not mean cyber incidents have the same operating conditions as aviation emergencies. Explain where the analogy helps and where it stops.

Review the alternatives yourself. Keep the parts that answer the original problem, remove repetition, and test claims that would affect the reader's decision. This turns an open-ended exchange into work that another person can inspect.

## Apply the process in security operations

Suppose an analyst suspects that several alerts belong to one intrusion. An AI assistant could help organize the timestamps, draft a search for related activity, and identify missing records. The analyst then checks the original events and decides whether the proposed relationship holds.

Maintain links to the evidence used in each summary. Record the query, time window, and data sources so another responder can reproduce the search. Keep sensitive data within the organization's approved handling arrangements.

Feedback can improve prompts, playbooks, and evaluation datasets. It does not automatically retrain the underlying model. Any model update needs its own controlled process and checks.

## Keep responsibility visible

Assign an owner to consequential decisions and make it clear which actions require review. Teach people how the system fails as well as how to operate it. Track errors and time spent verifying output alongside any time saved.

The practical test is whether collaboration helps us reach a supported decision. If it only produces more material to read, the process needs work. If it helps us ask a useful question, find the relevant evidence, and understand the consequences, it has earned a place in the workflow.
