---
name: desk-research
description: Conducts desk research (secondary research) for digital products step by step, as part of a context-driven prototyping process — from the product decision, through research questions and hypotheses, source plan, iterative search and source evaluation, to evidence cards, knowledge gaps, a tool-agnostic context pack for prototyping and a stakeholder report. Use when the user asks for desk research, secondary research, market/competitor/user-needs research before a prototype, "research this product idea", "zrób desk research", or invokes /desk-research. Modes - full (default), quick, continue, update.
---

# Desk Research for Digital Products

Desk research is the systematic use of existing evidence to **reduce uncertainty before a product decision**, organise what is already known, and identify what still requires primary research. It is not "finding everything". It ends when there is enough credible evidence to decide — or when we can state precisely which evidence is missing.

In this workflow the end product is a **context pack**: evidence-graded input for prototyping (by any tool or agent), plus a short report for people.

## Hard rules

1. **Language.** Talk to the user and write every output file in the language the user writes in. Keep source quotes in their original language. Search in the languages of the target market (see `references/source-plan.md`).
2. **The human owns the decision.** Draft framing, questions and hypotheses yourself, but never proceed past a gate (G1–G4) without explicit user confirmation. Do not invent the decision or the business context.
3. **No claim without a fetched source.** Cite only sources you actually opened in this session, with a verbatim quote and access date in the ledger. Knowledge from your training data may appear only labelled `[model prior – unverified]` and never counts as evidence.
4. **Trace numbers to their origin.** Every statistic must be traced to the primary study/dataset. Several articles quoting one survey = one source.
5. **Seek counterevidence on purpose.** Every hypothesis gets disconfirming queries, and synthesis includes a red-team pass. Never "prove" a preferred solution.
6. **Synthesise by question, not by link.** Everything is keyed to research question IDs (RQ1…), hypotheses (H1…), sources (S01…) and evidence cards (E01…).
7. **No synthetic users.** Do not simulate users, generate "AI personas" as evidence, role-play interviews or invent quotes. Personas in the context pack are proto-personas built only from cited evidence.
8. **Confidentiality.** Never put client names, internal data or confidential details into web search queries. Internal materials are read locally only.
9. **Desk research does not replace user research.** Evidence about a different population is a hypothesis for the target users, not a finding.

## Modes

| Mode | When | Behaviour |
|---|---|---|
| `full` (default) | Real product decision, time available | All 10 steps, 4 gates, full outputs |
| `quick` | Early idea, few hours budget | Steps 1–4 drafted in one turn → single gate → capped search → evidence cards + context pack only |
| `continue <slug>` | Resume earlier work | Read `research/<slug>/_status.md`, summarise state in 3 lines, continue from the next step |
| `update <slug>` | New evidence arrived (prototype test results, interviews, data) | Ingest it, update evidence cards and hypothesis verdicts, refresh context pack, append to changelog in `_status.md` |

If the mode is unclear, infer it from the request; ask only if the difference matters (deadline, depth).

## Workspace

Create `research/<slug>/` in the current working project (`slug` = short kebab-case topic name). Each step writes its file; `_status.md` tracks progress so work can resume across sessions.

```
research/<slug>/
├── _status.md            ← mode, current step, gates passed, changelog
├── 01-brief.md           ← intake + brief + assumptions
├── 02-questions.md       ← research questions, hypotheses, prioritisation
├── 03-source-plan.md     ← source matrix, query plan, budget, stopping criterion
├── 04-source-ledger.md   ← every source opened, graded
├── 05-evidence.md        ← evidence cards, hypothesis verdicts, red-team notes
├── 06-gaps.md            ← knowledge gaps → next research / prototype tests
├── 07-context-pack.md    ← input for prototyping (tool-agnostic)
├── 08-report.md          ← stakeholder report
└── internal/             ← materials the user provides (analytics exports, tickets, past studies)
```

`_status.md` format:

```markdown
# Status: <topic>
Mode: full | quick
Language: <language>
Current step: <n> – <name>
Gates: G1 ☐ G2 ☐ G3 ☐ G4 ☐
Search budget used: <n>/<budget>

## Changelog
- YYYY-MM-DD – <what happened>
```

## Workflow

Load each reference file only when its step starts. Reference paths are relative to this skill's folder, not to the project root (e.g. `skills/desk-research/references/brief.md` when the skill is invoked by file path).

### Step 0 – Intake
Ask (one message, short) for whatever the request does not already answer:
- What decision should this research support, and by when?
- Product / service and target segment; market(s) and language(s).
- What internal evidence exists (analytics, search logs, support tickets, NPS, sales notes, earlier studies)? Can they put it in `research/<slug>/internal/`?
- Who will use the outputs (designers, PM, stakeholders, a prototyping agent)?
- Mode (full/quick) if not obvious.

Create the workspace and `_status.md`.

### Step 1 – Frame the decision → `01-brief.md`
Read `references/brief.md`. Draft the six-field brief (decision, problem, scope, current knowledge, audience, stopping criterion). Separate the user problem from any preferred solution — if the request is phrased as a solution, rewrite it as a problem and show the user.

### Step 2 – Collect assumptions → `01-brief.md`
Ask the user for the team's beliefs. Label each as **fact** (with evidence), **assumption**, or **unknown**. Stakeholder opinions without evidence are assumptions.

**🚦 G1 – confirm framing and assumptions.**

### Step 3 – Research questions → `02-questions.md`
Read `references/questions-hypotheses.md`. Write 3–7 research questions, run each through the quality checklist and the anti-pattern list, tag each with a category.

### Step 4 – Hypotheses and prioritisation → `02-questions.md`
For key unknowns and risky assumptions, write hypotheses with expected and disconfirming evidence. Score every RQ/H on impact-if-wrong × uncertainty and mark the priority set.

**🚦 G2 – confirm questions, hypotheses, priorities.**

### Step 5 – Source plan → `03-source-plan.md`
Read `references/source-plan.md`. Fill the source matrix per priority RQ (internal + external, quantitative + qualitative, plus sources that could contradict). Write the query plan (broad → narrow, market languages, disconfirming queries), recency windows, search budget and the operational stopping criterion. List internal sources that are missing and ask the user to provide them.

**🚦 G3 – approve plan; user uploads internal data (or confirms there is none).**

### Step 6 – Search iteratively → `04-source-ledger.md`
Read `references/search-and-evaluation.md`. Work through priority RQs first. Start broad to learn terminology, key authors and foundational reports; then narrow. Open every source you intend to use; record it in the ledger immediately with quote and access date. Update the budget counter in `_status.md`.

In `full` mode with ≥3 priority RQs and an Agent tool available, you may run one research subagent per RQ in parallel. Give each the brief, its RQ and hypotheses, its query plan, the ledger format and hard rules 3–8. Merge results yourself: deduplicate, check independence, re-number sources.

**No web access?** If you have no web search or fetch tool, do not fall back on memory. Write a ready-to-paste research brief for a deep-research tool (e.g. Gemini Deep Research, Perplexity) from `02-questions.md` and `03-source-plan.md`, ask the user to save the result as a file in `research/<slug>/internal/`, and continue from step 7 using it. Treat it as user-provided: record its cited sources in the ledger, and mark figures and quotes without an opened source as `[unverified]`. Note the limitation in `_status.md`.

### Step 7 – Evaluate sources → `04-source-ledger.md`
Grade each source (A/B/C/X) with the rubric in `references/search-and-evaluation.md`. Trace statistics to origin; mark citation clusters. Exclude X-graded sources from evidence.

### Step 8 – Synthesise → `05-evidence.md`
Read `references/synthesis.md`. Write evidence cards per RQ, grade evidence strength with the rubric, run the red-team pass, give each hypothesis a verdict (supported / challenged / inconclusive) and note confidence change.

**🚦 G4 – review findings with the user before writing deliverables.**

### Step 9 – Knowledge gaps → `06-gaps.md`
List what remains unknown. For each gap: why it matters for the decision, and the cheapest adequate method — interview, observation, survey, analytics query, or **test in the prototype**.

### Step 10 – Deliver → `07-context-pack.md`, `08-report.md`
Read `references/context-pack.md` and `references/report.md`. The context pack must be self-contained and usable by any prototyping tool or agent without reading other files. The report answers the decision first.

Finish with a short chat message: the answer to the decision (or why it can't be answered yet), the 3 most important findings, the top gaps, and file paths.

## Quick mode specifics
- Draft steps 1–4 in one message with explicit `[assumed]` markers; one gate.
- 2–4 priority RQs, search budget ~20 searches / ~12 opened sources.
- Skip `08-report.md` unless asked; `05-evidence.md` and `07-context-pack.md` are mandatory.
- Still enforce all hard rules — quick never means unsourced.

## Gates – how to ask
At each gate show a compact summary (not the whole file), list what you assumed, and ask for "OK / changes". If the user says "go on without asking", record that in `_status.md` and treat remaining gates as notify-only — but still stop if you discover the framing is wrong (e.g. evidence shows the problem is different from the one stated).

## Without file access
If the environment cannot create files (e.g. a plain chat where the user pasted this skill), run the same workflow, gates and hard rules, but keep everything in the conversation: write each "file" as a section headed with its file name (`01-brief.md`, `02-questions.md`…) and keep `_status.md` as a short status block at the top of each reply. At the end, output `07-context-pack.md` (and `08-report.md` if requested) as separate copy-ready blocks, and tell the user to save them as files in their project.
