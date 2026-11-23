# Site Crawl Report - JobPortal (localhost:5173)

Crawled **20 pages** (1 level deep from homepage) on 2026-11-23.

## Summary of Problems Found

| Problem | Pages Affected |
|---------|----------------|
| **Missing meta description** | 20/20 (100%) |
| **Generic page title (same for all pages)** | 20/20 (100%) |
| **Generic H1 "JobPortal" (not page-specific)** | 20/20 (100%) |
| **Very low word count (< 150 words)** | 4/20 (20%) |
| **Broken internal links** | 0/20 (0%) |

---

## Detailed Page Analysis

| Page | URL | Title | Meta Description | H1 | Word Count | Internal Links | Problems |
|------|-----|-------|------------------|-----|------------|----------------|----------|
| **Home** | `/` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 327 | 24 | Missing meta desc, Generic title, Generic H1 |
| **Jobs List** | `/jobs` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 719 | 42 | Missing meta desc, Generic title, Generic H1 |
| **Companies List** | `/companies` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 435 | 25 | Missing meta desc, Generic title, Generic H1 |
| **Login** | `/login` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 86 | 11 | Missing meta desc, Generic title, Generic H1, **Low word count** |
| **Register** | `/register` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 90 | 11 | Missing meta desc, Generic title, Generic H1, **Low word count** |
| **Job: Tax Specialist (723)** | `/jobs/723` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 197 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Job: Art Director (45)** | `/jobs/45` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 205 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Job: Accountant (852)** | `/jobs/852` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 201 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Job: Design Ops Manager (349)** | `/jobs/349` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 208 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Job: Financial Controller (77)** | `/jobs/77` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 200 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Job: Marketing Analyst (876)** | `/jobs/876` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 203 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: TechCorp Inc** | `/companies/techcorp-inc` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 222 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Google** | `/companies/google` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 216 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Microsoft** | `/companies/microsoft` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 215 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Apple** | `/companies/apple` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 216 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Amazon** | `/companies/amazon` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 215 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Tesla** | `/companies/tesla` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 215 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Netflix** | `/companies/netflix` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 219 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Company: Meta** | `/companies/meta` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 215 | 13 | Missing meta desc, Generic title, Generic H1 |
| **Contact** | `/contact` | JobPortal - Find Your Dream Job Today | ❌ Empty | JobPortal | 135 | 10 | Missing meta desc, Generic title, Generic H1, **Low word count** |

---

## Sorted by Problems (Most Problems First)

| Rank | Page | Problems Count | Issues |
|------|------|----------------|--------|
| 1 | **Login** | 4 | Missing meta desc, Generic title, Generic H1, Low word count (86) |
| 2 | **Register** | 4 | Missing meta desc, Generic title, Generic H1, Low word count (90) |
| 3 | **Contact** | 4 | Missing meta desc, Generic title, Generic H1, Low word count (135) |
| 4 | **Home** | 3 | Missing meta desc, Generic title, Generic H1 |
| 5 | **Jobs List** | 3 | Missing meta desc, Generic title, Generic H1 |
| 6 | **Companies List** | 3 | Missing meta desc, Generic title, Generic H1 |
| 7-19 | **All Job Detail pages (6)** | 3 each | Missing meta desc, Generic title, Generic H1 |
| 20-26 | **All Company Detail pages (7)** | 3 each | Missing meta desc, Generic title, Generic H1 |

---

## Load Time Notes
- All pages loaded successfully (HTTP 200)
- No broken internal links detected
- No 404 errors encountered
- Client-side routing (React Router) works correctly for all SPA routes
- Pages render fully including dynamic content (job cards, company cards)

---

## Recommendations

### High Priority
1. **Add unique meta descriptions** to every page for SEO
2. **Implement page-specific titles** (e.g., "Tax Specialist at Airbnb - JobPortal")
3. **Replace generic H1 "JobPortal"** with semantic, page-specific headings:
   - Home: "Find Your Dream Job Today"
   - Jobs List: "Browse All Jobs"
   - Job Detail: Job title + company
   - Company Detail: Company name
   - Login: "Sign In to Your Account"
   - Register: "Create Your Account"
   - Contact: "Contact Us"

### Medium Priority
4. **Increase content on thin pages** (Login, Register, Contact) - add helpful copy, FAQs, or feature highlights
5. **Add structured data (JSON-LD)** for JobPosting and Organization schemas

### Low Priority
6. **Consider adding breadcrumbs** for better UX on detail pages
7. **Add Open Graph / Twitter Card meta tags** for social sharing