# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- NestJS 11 backend with CRUD REST API for todos (`backend/`)
- Abstract `TodoRepository` pattern for database-agnostic persistence
- JSON file mock data store (`backend/data/todos.json`) — swap-ready for any database
- Angular 21 frontend with signals, new control-flow syntax (`@for`, `@if`), and `provideHttpClient`
- Tailwind CSS v4 with `postcss.config.json` integration for Angular's esbuild pipeline
- Minimal todo UI: add, toggle complete, delete, filter (All / Active / Completed)
- Root `package.json` with `npm start` command that runs both backend and frontend via `concurrently`
- `README.md` with install, start, API, and database-swap instructions
- Portfolio blog with SSG: Home, Blog, Projects, and Todo routes
- Responsive navigation with desktop nav bar and mobile hamburger menu
- Angular SSR/SSG via `@angular/ssr` — 6 routes prerendered at build time
- Blog section with 3 starter articles (blog-data.ts) and individual post views
- Projects showcase page highlighting the Todo app and Portfolio blog
- GitHub Pages deployment instructions and hosting guide in README

## [1.0.0] — 2026-02-22

### Added

**Core**
- `AGENTS.md` — universal rules for all AI agents (single source of truth)
- `CHANGELOG.md` — universal history bridge between local and remote agents
- `ROADMAP.md` — non-actionable future ideas
- `README-Autodocs.md` — full autodocs documentation (overview, quick start, how it works)

**Agents**
- `.github/agents/planner.agent.md` — project planner (read-only, creates Issues)
- `.github/agents/coder.agent.md` — implementation agent (full tools, library-aware)
- `.github/agents/reviewer.agent.md` — code reviewer (read-only, quality checklists)

**Skills**
- `.github/skills/learn/` — save lessons to `docs/know-how/` (includes template)
- `.github/skills/adr/` — create Architecture Decision Records (includes template)
- `.github/skills/onboard/` — gather full project context at session start

**Prompts**
- `.github/prompts/new-task.prompt.md` — `/new-task` slash command (draft GitHub Issue)
- `.github/prompts/done.prompt.md` — `/done` slash command (record work in CHANGELOG)

**Instructions**
- `.github/instructions/changelog.instructions.md` — auto-applied CHANGELOG formatting rules
- `.github/instructions/docs.instructions.md` — auto-applied documentation standards

**Automation**
- `.github/hooks/stop.json` — Stop hook enforcing CHANGELOG updates
- `scripts/autodoc-check.sh` — doc enforcement script used by Stop hook

**Templates**
- `.github/ISSUE_TEMPLATE/task.yml` — structured task template with agent config fields
- `.github/ISSUE_TEMPLATE/bug.yml` — bug report template with agent config
- `templates/tech-stack.md` — tech stack reference template (versions + doc links)

**Knowledge Base**
- `docs/know-how/README.md` — knowledge base guide
- `docs/know-how/coding-agent-sandbox.md` — Copilot sandbox capabilities
- `docs/know-how/github-issues-workflow.md` — GitHub Issues + Copilot workflow
- `docs/know-how/working-with-libraries.md` — version mismatch prevention
- `docs/know-how/instruction-files.md` — how instruction files work (vs Agent Skills)
- `docs/architecture/` — ADR folder (empty, ready for use)
