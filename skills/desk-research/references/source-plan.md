# Source plan (step 5)

## Source matrix
Fill per priority RQ. Include internal and external, quantitative and qualitative, and at least one source type that could **contradict** each hypothesis.

| Area | Internal sources | External sources |
|---|---|---|
| Behaviour | Analytics, search logs, funnels, session recordings | Benchmarks, behavioural reports, public datasets |
| Needs & barriers | Previous studies, support tickets, complaints, NPS verbatims, sales conversations | Academic studies, institutional reports, forums and app reviews (signals only) |
| Market | CRM, win/loss analysis, sales data | Competitor sites, docs, help centres, pricing pages, app-store listings, market reports |
| Constraints | Architecture, internal processes, company policies | Law and regulators, standards, accessibility guidance (WCAG, EAA), industry regulation |

Existing internal evidence is a legitimate starting point. If internal sources are unavailable, write that explicitly — it will be stated as a limitation in the outputs.

## Market and language localisation
- Search in the language(s) of the target market **and** in English. English-only search skews toward US/UK evidence.
- Include local institutions: national statistics office (e.g. GUS for Poland, Eurostat for EU), regulators (e.g. UODO, KNF, UOKiK in Poland), local industry bodies and media.
- App-store reviews: use the target market's locale.
- Evidence from another market can be used, but marked as such and capped at medium strength for the target market.

## Recency windows (defaults — adjust in plan)
| Topic type | Default window |
|---|---|
| AI/tech adoption, pricing, competitor features, regulation in motion | ≤ 18 months |
| Market size, usage statistics, benchmarks | ≤ 3 years |
| Human behaviour, cognition, established UX research | ≤ 10 years; older classics allowed if still cited |
| Law and standards | current version in force; note upcoming changes |

## Query plan
Per priority RQ:
1. **Broad queries** — learn terminology, key authors, foundational reports.
2. **Narrow queries** — segment + context + mechanism.
3. **Disconfirming queries** — one or more per hypothesis, built from its "we will change our view if…" clause.
4. **Language variants** — market language + English.
5. **Source-type targeting** — e.g. `site:` for regulators, "filetype:pdf report", app-store pages, scholar search.

Never include client names or confidential details in queries.

## Budget and stopping criterion
Set explicitly:
- **Budget** — full: ~8–12 searches per priority RQ (typically 40–60 total); quick: ~20 searches / ~12 opened sources.
- **Done for an RQ when** any of:
  - it has at least one evidence card at medium+ strength, or is explicitly declared a gap with reason;
  - **saturation** — the last 3 opened sources for that RQ changed no card;
  - its budget share is exhausted (report as limitation).
- **Done overall when** all priority RQs are done, or the total budget is spent.

## `03-source-plan.md` format

```markdown
# Source plan

## Per RQ
### RQ1 – <short>
Internal: … (available? yes/no/requested)
External: …
Could contradict H1: …
Queries:
- broad: …
- narrow: …
- disconfirming (H1): …
- PL/EN variants: …
Recency window: …

## Missing internal sources (requested from user)
- …

## Budget and stopping criterion
Budget: …
Stop when: …
```
