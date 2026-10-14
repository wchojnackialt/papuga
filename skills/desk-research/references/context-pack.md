# Context pack (step 10)

The context pack translates research into prototype input. It must be:
- **Tool-agnostic** — plain Markdown, no tool-specific syntax; usable by a designer, a prototyping tool or an AI agent.
- **Self-contained** — understandable without opening other files; no "see ledger" without the essential content.
- **Evidence-graded** — every claim carries strength `[H]`, `[M]`, `[L]` and card IDs `(E03)` for traceability.
- **Concise** — target ~2–4 pages. Cut findings that don't change what gets prototyped.
- **Honest** — what is assumed is labelled `[assumed]`; nothing invented to fill sections. Empty section → write "No evidence found — see gaps."

No synthetic users: proto-personas summarise evidence only; no invented names, biographies or quotes. Quotes come only from sources (anonymised).

## Template (`07-context-pack.md`)

```markdown
# Context pack: <topic>
Version: YYYY-MM-DD · Based on: research/<slug> · Language: <lang>
Evidence legend: [H] high · [M] medium · [L] low · [assumed] not evidenced

## 1. Decision and scope
What the prototype should help decide. In scope / out of scope.

## 2. Target users
Proto-segments (2–4), each:
- Who and in what situation [strength] (E..)
- Goal / job to be done [strength] (E..)
- Current alternatives and workarounds [strength] (E..)
- Key barriers [strength] (E..)

## 3. Key scenarios and tasks
Prioritised list of scenarios the prototype should cover, with trigger, goal, success condition. Mark the critical path.

## 4. Pains, barriers, risks
Ranked by evidence strength and impact.

## 5. User vocabulary
- Terms users use: …
- Terms to avoid (jargon, misleading): …
- Representative quotes (anonymised, sourced): …

## 6. Constraints
- Legal / regulatory: …
- Accessibility: …
- Technical / platform: …
- Business / organisational: …

## 7. Market patterns
- Adopt (proven conventions users expect): … (E..)
- Avoid (patterns linked to known problems): … (E..)
- Differentiation opportunities: … (E..)

## 8. Design principles
4–7 principles, each derived from evidence: "Because <finding> (E..), the prototype should <principle>."

## 9. Hypotheses to test in the prototype
| Hypothesis | What the prototype must include to test it | Success signal | Failure signal |
|---|---|---|---|

## 10. Do not assume
Things the prototype must not take for granted (unsupported beliefs, challenged hypotheses).

## 11. Confidence and open gaps
Overall confidence, key limitations, top gaps that the prototype will not answer.
```
