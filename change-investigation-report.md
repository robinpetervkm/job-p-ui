# 🔎 Change Investigation Report

**Target**: src/components/Footer.jsx:171-182  
**Investigation Date**: 2026-11-22  
**Repository**: https://github.com/robinpetervkm/job-p-ui.git  
**Branch**: master

---

## 📋 Investigation Summary

| Detail                  | Value                         |
| ----------------------- | ----------------------------- |
| File(s) Analyzed        | src/components/Footer.jsx     |
| Lines Investigated      | 171-182                       |
| Total Commits on File   | 4                             |
| Unique Authors          | 1                             |
| File Age (First Commit) | 2026-11-20                    |
| Last Modified           | 2026-11-21 by robinpetervkm   |

---

## 👥 Author Breakdown

| #   | Author         | Email                                               | Commits | Lines Owned | First Contribution | Last Contribution |
| --- | -------------- | --------------------------------------------------- | ------- | ----------- | ------------------ | ----------------- |
| 1   | robinpetervkm  | 62151265+robinpetervkm@users.noreply.github.com     | 4       | 179 (100%)  | 2026-11-20         | 2026-11-21        |

**Primary Owner**: robinpetervkm (100% of current lines)  
**Most Recent Contributor**: robinpetervkm on 2026-11-21  
**CODEOWNERS**: Not configured

---

## 📅 Change Timeline

### c110bab — 2026-11-21 08:32:32 -0400

- **Author**: robinpetervkm <62151265+robinpetervkm@users.noreply.github.com>
- **Message**: fix: add tooltips to Privacy Policy and Terms of Service links in footer (#6)
- **Body**: Closes #4, #5
- **Ticket References**: #4, #5
- **Lines Changed**: +4 / -1
- **What Changed**:
  > Added tooltip (`title` attribute) to Privacy Policy and Terms of Service links in the footer navigation. This commit completes the tooltip work started in previous commits, ensuring all footer policy links have hover tooltips for better accessibility and UX.

### 75ce5cb — 2026-11-21 08:28:23 -0400

- **Author**: robinpetervkm <62151265+robinpetervkm@users.noreply.github.com>
- **Message**: fix: add hover tooltip to Privacy Policy link in footer (#7)
- **Body**: * fix: add hover tooltips to Privacy Policy and Terms of Service links in footer
  
  * fix: add hover tooltip to Privacy Policy link in footer
- **Ticket References**: #7 (implied)
- **Lines Changed**: +4 / -1
- **What Changed**:
  > Added hover tooltip to the Privacy Policy link in the footer. This was an intermediate step toward adding tooltips to all policy links.

### 52f6d63 — 2026-11-20 21:00:31 -0400

- **Author**: robinpetervkm <62151265+robinpetervkm@users.noreply.github.com>
- **Message**: fix: add tooltip to Cookie Policy link in footer (#3)
- **Body**: The Cookie Policy link in the footer had no title attribute, so hovering displayed nothing. Add a native HTML title attribute matching the existing tooltip pattern used in RefreshButton.jsx, MyJobs.jsx, and SavedJobs.jsx.

  Co-authored-by: Claude Code <noreply@anthropic.com>
- **Ticket References**: #3
- **Lines Changed**: +4 / -1
- **What Changed**:
  > Added a native HTML `title` attribute (tooltip) to the Cookie Policy link in the footer. This followed the existing tooltip pattern used elsewhere in the codebase (RefreshButton.jsx, MyJobs.jsx, SavedJobs.jsx).

### 1838c9f — 2026-11-20 19:19:25 -0400

- **Author**: robinpetervkm <62151265+robinpetervkm@users.noreply.github.com>
- **Message**: Initial commit: Job Portal React UI
- **Body**: Job portal SPA built with React 19, Vite 7, Tailwind CSS 4, and React Router 7. Features: job seeking, employer job posting, admin dashboard, auth with localStorage persistence, and mock data layer.

  Co-Authored-By: Claude Code <noreply@anthropic.com>
- **Ticket References**: None found
- **Lines Changed**: +179 (new file)
- **What Changed**:
  > Created the entire Footer.jsx component (179 lines) including the copyright notice, "Made with ❤️ for job seekers worldwide" text, and navigation links (Privacy Policy, Terms of Service, Cookie Policy, Contact Us). The lines 171-182 investigated here represent the bottom section containing the copyright notice and attribution text.

---

## 🔬 Line-by-Line Blame (Current State)

| Line | Code (truncated)                                      | Author         | Date       | Commit Message                              |
| ---- | ----------------------------------------------------- | -------------- | ---------- | ------------------------------------------- |
| 171  | `</Link>`                                             | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 172  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 173  | `<div className="text-center md:text-right">`         | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 174  | `<div className="text-gray-400 text-sm mb-2">`        | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 175  | `© 2026 JobPortal. All rights reserved.`             | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 176  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 177  | `<div className="text-xs text-gray-500">`             | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 178  | `Made with ❤️ for job seekers worldwide`             | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 179  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 180  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 181  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |
| 182  | `</div>`                                              | robinpetervkm  | 2026-11-20 | Initial commit: Job Portal React UI         |

---

## 🎫 Linked Tickets & References

| Ticket ID | Commit    | Author         | Date       | Commit Subject                                           |
| --------- | --------- | -------------- | ---------- | -------------------------------------------------------- |
| #3        | 52f6d63   | robinpetervkm  | 2026-11-20 | fix: add tooltip to Cookie Policy link in footer (#3)    |
| #4        | c110bab   | robinpetervkm  | 2026-11-21 | fix: add tooltips to Privacy Policy and Terms of Service |
| #5        | c110bab   | robinpetervkm  | 2026-11-21 | fix: add tooltips to Privacy Policy and Terms of Service |
| #7        | 75ce5cb   | robinpetervkm  | 2026-11-21 | fix: add hover tooltip to Privacy Policy link in footer  |

---

## 💡 Insights

- **Churn Assessment**: Low churn. The file has 4 commits over 2 days (Nov 20-21, 2026). The initial commit created the entire file, followed by three incremental fix commits adding tooltips to policy links. The specific lines 171-182 (copyright section) have **not been modified since the initial commit** — they remain exactly as created.

- **Bus Factor**: **HIGH RISK** — Single author (robinpetervkm) owns 100% of the file. No other contributors have touched this file. Consider adding a CODEOWNERS entry and encouraging team familiarization.

- **Stale Code Risk**: Low for the specific lines investigated (copyright/attribution section). These lines are static content unlikely to change. However, the file overall was last modified 1 day ago (Nov 21), so it's actively maintained.

- **Review Gaps**: All three fix commits (#3, #4, #5, #7) reference ticket numbers, indicating good traceability. The initial commit has no ticket reference (expected for initial scaffold). Commits follow Conventional Commits format (`fix: ...`).

- **Notable Pattern**: The tooltip additions were done incrementally across 3 commits (Cookie Policy → Privacy Policy → Privacy Policy + Terms of Service). This suggests either iterative review feedback or a phased rollout of the tooltip feature.