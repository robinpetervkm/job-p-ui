# Technical Specification --- Issue #4

## 1. Issue Overview

| Field              | Value                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| Title              | Inside the footer, when hover onto the "Privacy Policy" nothing being displayed |
| Description        | The Privacy Policy link in the footer lacked a tooltip on hover. Users expected descriptive text to appear when hovering over the link. |
| Labels             | None                                                                  |
| Priority           | Medium                                                                |
| State              | CLOSED                                                                |

## 2. Problem Analysis

**Root Cause**: The Privacy Policy link in `src/components/Footer.jsx` (line ~144-150) was rendered as a plain `<a>` tag without a `title` attribute. Native browser tooltips only appear when an element has a `title` attribute.

**Evidence from codebase**:
- The link was defined as:
  ```jsx
  <a
    className="group relative hover:text-white transition-colors duration-300"
  >
    <span className="relative z-10">Privacy Policy</span>
    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-2"></div>
  </a>
  ```
- No `title` attribute present

**Pattern in codebase**: Other components use native HTML `title` attributes for tooltips:
- `RefreshButton.jsx` line 49: `title={`Last updated: ${formatCacheAge()}`}`
- `MyJobs.jsx`, `SavedJobs.jsx`, `AppliedJobs.jsx`, `JobDetail.jsx`, `Jobs.jsx` all follow similar patterns

## 3. Proposed Solution

**Minimal change**: Add a `title` attribute to the Privacy Policy link (and other policy links for consistency) with descriptive text explaining what each policy covers.

**Implementation**:
- Add `title="Privacy Policy: Learn how we collect, use, and protect your personal information"` to Privacy Policy link
- Add similar titles to Terms of Service and Cookie Policy links for consistency
- Follow existing pattern used in `RefreshButton.jsx` and other page components

**Trade-offs**: Native `title` attribute is simple, accessible, and requires no additional dependencies. Alternative would be a custom tooltip component (over-engineering for this need).

## 4. Step-by-Step Implementation

1. **Add title to Privacy Policy link** --- Add descriptive `title` attribute explaining the privacy policy purpose
2. **Add title to Terms of Service link** --- Add descriptive `title` attribute for consistency
3. **Add title to Cookie Policy link** --- Add descriptive `title` attribute (already done in commit 52f6d63)
4. **Verify all footer policy links have tooltips** --- Ensure consistent UX across all footer navigation links

## 5. Verification Strategy

### Manual Checks
- Hover over Privacy Policy link in footer → tooltip displays descriptive text
- Hover over Terms of Service link → tooltip displays descriptive text
- Hover over Cookie Policy link → tooltip displays descriptive text
- Verify Contact Us link (no tooltip needed - it's a navigation link)

### Integration Tests
- Render Footer component → verify all policy links have `title` attributes
- Check accessibility: screen readers announce title attributes

## 6. Files to Modify

| File Path | Nature of Change |
| --------- | ---------------- |
| `src/components/Footer.jsx` | Add `title` attributes to three `<a>` tags (Privacy Policy, Terms of Service, Cookie Policy) |

## 7. New Files to Create

| File Path | Purpose |
| --------- | ------- |
| None | No new files needed |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| ------- | ------- |
| Native HTML `title` attribute | Zero dependencies, browser-native tooltip, accessible |
| Existing pattern in `RefreshButton.jsx` | Consistent implementation approach |

## 9. Acceptance Criteria

- [ ] Privacy Policy link shows tooltip on hover with descriptive text
- [ ] Terms of Service link shows tooltip on hover with descriptive text
- [ ] Cookie Policy link shows tooltip on hover with descriptive text
- [ ] All tooltips use native browser rendering (no custom CSS/JS)
- [ ] No regressions in footer layout or functionality

## 10. Out of Scope

- Custom tooltip components or libraries
- Tooltip positioning/styling customization
- Mobile touch interactions (native title doesn't work on touch)
- Analytics tracking for tooltip views