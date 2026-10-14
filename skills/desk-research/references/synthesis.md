# Synthesis and gaps (steps 8–9)

## Evidence card
One card per important finding, grouped under its RQ.

```markdown
### E03 (→ RQ1, H1)
**Finding:** One sentence answering the research question.
**Evidence:** S01 (A), S04 (B), cluster C2 (B) — 2–4 independent sources
**Strength:** High | Medium | Low
**Scope:** audience, market, period the evidence covers
**Counterevidence:** what contradicts or limits it (or "searched: <queries>, none found")
**Implication:** how it could affect the decision / the prototype
**Gap:** what remains unknown and how to investigate it
```

## Evidence strength rubric
- **High** — ≥2 independent sources (clusters count once), at least one grade A; matches target segment and market; within recency window; no unresolved substantial counterevidence.
- **Medium** — one grade A source, or ≥2 independent grade B sources; or strong evidence from an adjacent population/market (cap: medium); minor counterevidence acknowledged.
- **Low** — only grade C signals, a single grade B source, outdated or different population, or substantial counterevidence.

Never upgrade strength because a finding is plausible or because many grade C sources repeat it.

## Red-team pass (mandatory)
After drafting the cards:
1. For each hypothesis and each High/Medium card, ask: what would have to be true for this to be wrong? Run at least one disconfirming search if not already done.
2. Check for the confirmation pattern: are all cards conveniently supporting the preferred solution? If yes, re-examine.
3. Check for population drift: is the evidence about a different group than the target users?
4. Record the results in a `## Red-team notes` section, including searches that found nothing.

## Hypothesis verdicts

```markdown
## Hypothesis verdicts
| H | Verdict | Confidence before → after | Key cards | What would change it |
|---|---|---|---|---|
| H1 | supported / challenged / inconclusive | low → medium | E03, E05 | … |
```

"Supported" by desk research means "worth building on and testing", not "true for our users".

## Exploratory findings
Record important findings outside the hypotheses too — unexpected barriers, alternative explanations, segments not considered. These often matter most for prototyping.

## `05-evidence.md` structure
1. Summary — 5–8 bullets, each linked to a card
2. Cards grouped by RQ
3. Exploratory findings
4. Hypothesis verdicts
5. Red-team notes
6. Limitations (missing internal data, inaccessible sources, markets not covered, budget hit)

## Knowledge gaps (`06-gaps.md`)

```markdown
| Gap | Why it matters for the decision | Method | Effort | Priority |
|---|---|---|---|---|
| … | … | interview / observation / survey / analytics query / test in prototype | S/M/L | ★ |
```

Prefer "test in prototype" when the gap concerns reactions to a concrete solution (comprehension, preference, willingness to complete a flow). Prefer interviews/observation when the gap concerns context, motivations or current behaviour — a prototype cannot reveal those reliably.
