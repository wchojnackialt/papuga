# Search and source evaluation (steps 6–7)

## Search protocol
1. Run priority RQs first; within an RQ: broad → narrow → disconfirming.
2. Open (fetch) every source you intend to use. Search snippets are not evidence.
3. Log each opened source in the ledger **immediately**, with a verbatim quote supporting the claim you will use it for.
4. When a source cites a statistic, follow it to the primary study/dataset. Log the primary; note the secondary as "via".
5. Capture **user vocabulary** as you go (words users use for the problem, task, product category) — needed for the context pack.
6. After each RQ batch, check the stopping criterion and update the budget in `_status.md`.
7. If evidence suggests the framing is wrong (different problem, different segment), stop and tell the user — this is a gate event.

If a page cannot be fetched (paywall, block), do not cite its content from memory or snippets. Log it as "not accessed" if it seems important, so the user can retrieve it.

## Source ledger (`04-source-ledger.md`)

```markdown
# Source ledger

| ID | Title / publisher | Type | Date published | Accessed | Market / population | RQ | Grade | Origin / cluster |
|---|---|---|---|---|---|---|---|---|
| S01 | … | study / report / regulator / competitor / review set / internal / article | YYYY-MM | YYYY-MM-DD | PL, adults 50+ | RQ1, RQ3 | A | primary |
| S02 | … | article | … | … | … | RQ1 | C | cites S01 → cluster C1 |

## Notes per source
### S01 – <title>
URL: …
Method / sample: …
Commercial interest: …
Key quote(s): "…"
Used for: E03, E05
```

## Grading rubric
Assess each source on:
- **Authority** — who produced it; expertise; track record
- **Method transparency** — is the method described? Can you tell how the conclusion was reached?
- **Sample** — size, recruitment, representativeness for the claim
- **Recency** — within the window for the topic
- **Market fit** — same market/geography as scope
- **Segment fit** — same population as the target users
- **Commercial interest** — vendor selling the solution, sponsored research, lead-gen reports
- **Independence** — is it its own evidence, or a restatement of another source?

Grades:
- **A – strong**: transparent method, adequate sample, fits market and segment, recent, no major conflict of interest.
- **B – usable**: solid but with one notable limitation (adjacent market or population, older, modest sample, some commercial interest disclosed).
- **C – signal only**: forums, app reviews, social posts, opinion articles, vendor marketing, undisclosed method. Good for discovering themes and user language; never establishes scale.
- **X – exclude**: unverifiable, fabricated-looking statistics, no traceable origin, clearly outdated for the topic, content farms.

## Independence and citation clusters
Group sources that rely on the same underlying data into a cluster (C1, C2…). A cluster counts as **one** source for evidence strength, graded by its best primary member. Typical traps: one consultancy survey quoted across dozens of articles; "studies show" without a study.

## Special method: competitor teardown
Never "how do competitors do it?" in general. Instead:
1. Select competitors from the scope: direct, indirect, and the non-digital/manual alternative users actually use today.
2. Define comparison criteria **from the RQs** (e.g. steps to complete task T, how barrier B is addressed, pricing model, accessibility, trust signals).
3. Examine public material: website, onboarding as far as reachable without deception, help centre, docs, pricing, app-store listing and changelog.
4. Record per competitor × criterion, with source IDs. Do not create accounts with false identities or bypass access controls.
5. Output: patterns to **adopt**, **avoid**, and **differentiation opportunities**, each linked to evidence.

## Special method: review and forum mining
1. Define the sample: which stores/forums, locale, date range, rating spread (don't read only 1★ or 5★).
2. Read a set number (e.g. 50–100 reviews per product) and code themes against the RQs and hypotheses; add emergent themes.
3. Record theme counts **within the sample only** and 2–3 verbatim quotes per theme (no personal data — strip names/handles).
4. Treat output as grade C: themes and vocabulary, not prevalence in the population.
