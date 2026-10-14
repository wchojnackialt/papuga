# Brief and assumptions (steps 1–2)

## Why start with the decision
Research questions must stem from a product problem and help a team make a specific decision. Without a decision, research turns into an unfocused collection of interesting facts.

Examples of decisions:
- "Should we develop a self-service onboarding flow?"
- "Which segment should we investigate first?"
- "Which problems should enter discovery?"
- "Which concept should we prototype and test first?"

## Problem vs. solution
If the request names a solution ("we want a chatbot for X"), restate it:
- **Preferred solution:** chatbot for X
- **Underlying problem (to investigate):** users fail to get answers about X at moment Y
- **Decision:** whether a conversational channel is the right response, versus alternatives

Show the restatement to the user — do not silently swap.

## Brief template (`01-brief.md`)

```markdown
# Brief: <topic>
Date: YYYY-MM-DD · Mode: full|quick · Language: <lang>

## Decision
What will the team decide after the research? By when?

## Problem
What are we observing, and why does it matter (users, business)?
Preferred solution on the table (if any) — kept separate from the problem.

## Scope
- Segment(s):
- Market(s) / geography:
- Journey stage(s):
- Time period of evidence:
- Out of scope:

## Current knowledge
Short summary; details in the assumption table below.

## Audience and output
Who uses the findings and in what format (context pack for prototyping, report for <role>).

## Stopping criterion
Research is complete when: (filled precisely in 03-source-plan.md)

## Assumptions
| ID | Statement | Type | Basis / evidence | Who holds it |
|---|---|---|---|---|
| A1 | … | fact / assumption / unknown | … | … |
```

## Labelling assumptions
- **Fact** — supported by evidence the user can point to (data, study, document). Note the evidence.
- **Assumption** — believed but unsupported, including stakeholder opinions and "everyone knows".
- **Unknown** — the team explicitly does not know.

Prompt the user for assumptions across: who the users are, what problem they have, how they cope today, how big the problem is, what competitors do, what constrains the solution, why the preferred solution will work.

Assumptions and unknowns feed hypotheses in step 4; facts get spot-checked if they carry high impact.
