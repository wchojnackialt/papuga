# Research questions, hypotheses, prioritisation (steps 3–4)

## Four things not to confuse

| Element | Purpose | Example |
|---|---|---|
| Research question | What we need to learn | "What barriers prevent new users from completing onboarding in financial apps?" |
| Hypothesis | An assumption evidence can support or challenge | "Not knowing which information is required before starting increases onboarding abandonment." |
| Search query | Locates sources (lives in the source plan, not here) | `fintech onboarding abandonment required documents study` |
| Participant question | For primary research, not desk research | "Tell me what felt unclear while you were setting up your account." |

## Research question structure
> **What / how / why** happens to **a defined group** during **a specific task or situation**; what are the **causes or consequences**; and what must be understood to make **a particular decision**?

Progression example:
- Too broad: "What does the health-app market look like?"
- Better: "Which needs and barriers of people aged 50+ are addressed by Polish apps supporting regular medication use?"
- Decision-linked: "Which unmet needs of people aged 50+ related to regular medication use are frequent and important enough to justify testing a family-reminder concept?"

## Quality checklist (run on every RQ)
- [ ] **Open** — cannot be answered yes/no
- [ ] **Specific** — names group and situation
- [ ] **Neutral** — does not presume the answer or the solution
- [ ] **Contextualised** — covers the full experience/context, not only the interface
- [ ] **Decision-linked** — it is clear how the answer changes the decision
- [ ] **Answerable by desk research** at least partly (otherwise move it directly to gaps)

## Categories (tag each RQ)
- **Users & context** — who has the problem, in what situation, with what goal
- **Current behaviour** — how people cope today, which alternatives they use
- **Problem** — barriers, costs, risks, workarounds
- **Scale** — how often, how many, whom it affects
- **Market** — existing solutions, business models, standards
- **Constraints** — regulation, technology, processes, accessibility
- **Evidence** — what remains unknown, what primary research should follow

Aim for coverage: a set of 3–7 RQs that ignores scale or constraints is a warning sign for prototyping later.

## Anti-patterns (reject or rewrite)
- "Let's prove users need feature X" — leading, confirmation-seeking.
- "How do competitors do it?" — no decision, segment or comparison criterion. Rewrite: "How do [competitors serving segment S] handle [task T], and which approaches reduce [barrier B]?" with explicit comparison criteria.
- One hypothesis with several causes and outcomes — untestable.
- A question that is actually an interview question.
- A question whose answer would not change anything.

## Hypothesis template
> **We believe that** [phenomenon, need or barrier] affects [segment] in [context] **because** [mechanism]. **We expect to find** [observable evidence]. **We will change our view if** [disconfirming evidence].

Example:
> We believe that first-time sellers abandon store setup because they cannot estimate the total time or materials required. We expect this theme in support data, user reviews, competitor research and behavioural analytics. We will change our view if abandonment mainly follows payment errors or identity-verification failures.

Hypothesis checks:
- [ ] can turn out wrong
- [ ] one primary mechanism
- [ ] segment and context named
- [ ] points to evidence to seek
- [ ] names disconfirming evidence
- [ ] is not a solution disguised as a problem

Not every RQ needs a hypothesis. Exploratory RQs stay open so explanations can emerge from evidence; do not force observations to fit an initial theory.

## Prioritisation
Score each RQ and hypothesis 1–3 on:
- **Impact if wrong** — cost of acting on an incorrect assumption
- **Uncertainty** — how weak current evidence is

Priority = high impact × high uncertainty first. Low-impact items are parked; high-impact/low-uncertainty items get a quick confirmation check only.

## `02-questions.md` format

```markdown
# Questions and hypotheses

## Research questions
| ID | Question | Category | Linked assumptions | Impact (1–3) | Uncertainty (1–3) | Priority |
|---|---|---|---|---|---|---|
| RQ1 | … | Problem | A2, A4 | 3 | 3 | ★ |

## Hypotheses
### H1 (→ RQ1)
We believe that … because … We expect to find … We will change our view if …
Impact: 3 · Uncertainty: 2 · Priority: ★

## Parked
- RQx – reason
```
