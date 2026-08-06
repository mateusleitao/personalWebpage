# Planning and AI delivery loop

## Task contract

For each meaningful change, record these four items in the issue, prompt, or a
short plan document:

1. **Goal** — the user-visible outcome
2. **Context** — relevant files, behavior, and decisions
3. **Constraints** — behavior that must remain unchanged
4. **Done when** — observable acceptance criteria and required commands

Keep one task focused on one coherent outcome. Use a dedicated branch or Git
worktree when another task may touch the same files.

## Delivery loop

1. Inspect the current repository and rendered behavior.
2. Plan complex or ambiguous work before editing.
3. Implement the smallest complete solution that satisfies the real outcome.
4. Add or update tests that observe the acceptance criteria.
5. Run `npm run verify`.
6. Inspect mobile and desktop renderings for visual changes.
7. Review the diff for bugs, regressions, stale files, and accidental scope.
8. Merge only after automated checks and human review agree.

If the same failure occurs twice, improve a test, script, or repository document
instead of adding another reminder to a prompt.

## Plans as repository knowledge

Small tasks may keep plans in the issue or development conversation. For work
that spans multiple sessions or changes architecture, add a dated file under
`docs/plans/` containing progress, decisions, verification evidence, and open
questions. Move durable product or design decisions into their corresponding
document when the work completes.

## Automation threshold

Start with a reliable manual workflow. Package it as a skill only when the same
steps repeat, and schedule it only after the skill succeeds predictably. Add MCP
or other external tooling only when required context changes frequently or
cannot live safely in this repository.
