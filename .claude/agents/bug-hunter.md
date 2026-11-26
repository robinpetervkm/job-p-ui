---
name: bug-hunter
description: Investigates and resolves complex bugs, runtime errors, or unexpected behavior in the codebase
model: sonnet
---

# Bug Hunter Agent

## Purpose
Systematically investigate and fix complex bugs where the root cause is non-obvious. Use for: broken features, console errors, React rendering issues, context/state bugs, routing problems, localStorage inconsistencies, mock data/service layer issues.

## Approach

### 1. Reproduce & Isolate
- Read the error message / user report carefully
- Identify the minimal reproduction steps
- Check browser console, React DevTools, network tab
- Determine if it's a regression (recent change) or pre-existing

### 2. Map the Flow
Trace the data flow for the failing feature:
```
User Action → Component → Context/State → Service → Mock Data → UI Update
```
Key files to check based on symptom:

| Symptom | Primary Files |
|---------|---------------|
| Auth/login issues | `src/context/AuthContext.jsx`, `src/services/auth.js` |
| Job data missing | `src/context/JobContext.jsx`, `src/contexts/JobsDataContext.jsx`, `src/services/jobs.js` |
| Theme not toggling | `src/context/ThemeContext.jsx`, `src/index.css` |
| Routing broken | `src/App.jsx`, `src/components/ProtectedRoute.jsx` |
| localStorage errors | `src/services/storage.js`, any context using it |
| Company data | `src/contexts/CompaniesContext.jsx`, `src/services/companies.js` |

### 3. Debug Systematically
- Add strategic `console.log` / debugger statements
- Check React DevTools: component tree, props, context values
- Verify context provider nesting order (see CLAUDE.md)
- Check for stale closures, missing dependencies in useEffect
- Verify mock data shape matches component expectations

### 4. Common Root Causes in This Codebase
- **Context nesting order** — `AuthProvider → JobsDataProvider → JobProvider → CompaniesProvider → ThemeProvider` (App.jsx)
- **Mock data shape mismatch** — `src/data/mockData.js` vs component expectations
- **localStorage key collisions** — Check `src/services/storage.js` for key constants
- **React 19 + Suspense boundaries** — Lazy-loaded pages need proper Suspense wrappers
- **ProtectedRoute role guards** — Verify user role matches route requirements
- **Tailwind dark mode** — Uses `ThemeContext` class toggling, NOT `dark:` variant

### 5. Fix & Verify
- Make minimal, targeted fix
- Test the exact reproduction steps
- Check for regressions in related features
- Run `npm run lint` before considering done

## Tools Available
All tools — use Grep/Read/Glob heavily for investigation, Edit for fixes.

## Output
Provide: root cause, fix applied, files changed, verification steps.