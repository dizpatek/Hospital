# Medical Specialist Platform (Urology & Andrology)

## 1. Project Overview
This platform is a production-grade, medical authority system designed for a urology and andrology specialist. It is NOT a simple brochure website. It is a scalable Content Management System (CMS) focused on SEO dominance, content authority, and patient conversion.

**Core Goal:** Build a system that generates separate, highly optimized landing pages for every specific medical procedure and method, managed entirely via a secure admin panel.

## 2. Tech Stack (Strict)

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion

### Backend
- **API:** Next.js API Routes (Serverless)
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Caching:** Redis (Optional but recommended for performance)

### Authentication & Security
- **Auth:** NextAuth.js
- **Access Control:** Role-Based Access Control (RBAC) - Admin, Editor
- **Admin Panel:** Secure, protected routes

### SEO & Performance
- **Rendering:** SSR + SSG Hybrid
- **Metadata:** Fully dynamic, database-driven metadata
- **Schema.org:** JSON-LD injection for:
  - `Doctor`
  - `MedicalOrganization`
  - `MedicalProcedure`
  - `FAQPage`
  - `Article`
- **Sitemap:** Automated sitemap.xml and robots.txt generation

## 3. Database & Content Architecture

### Core Conceptual Model
To dominate long-tail SEO and avoid content duplication, the system distinguishes between **Treatments**, **Procedures**, and **Methods**.

*   **Treatment (Category):** The broad disease or condition (e.g., "Prostate Diseases", "Kidney Stones").
*   **Procedure:** The medical intervention (e.g., "Prostate Surgery", "Kidney Stone Removal").
*   **Method (Technique):** The specific technique used (e.g., "Open Surgery", "Endoscopic/Closed", "Thulium Laser").

### Mandatory Database Entities
- `User` (Admin/Editor)
- `Role`
- `Page` (Generic pages)
- `MenuItem` (Dynamic menu builder)
- `ExpertiseArea` (Top-level areas)
- `TreatmentCategory` (The condition)
- `Procedure` (The intervention)
- `ProcedureMethod` (The specific technique)
- `BlogPost`
- `Category` (For blog)
- `FAQ` (Global and specific)
- `Media` (Image/Video library)
- `SEOSettings` (Per-page override)

### Critical Relationships
- **TreatmentCategory → Procedures** (One-to-Many)
- **Procedure → Methods** (One-to-Many)
- **Procedure → FAQs** (One-to-Many)
- **BlogPost → Category** (Many-to-One)
- **Page → SEOSettings** (One-to-One)

## 4. Medical Procedures Inventory (Mandatory Content)
The system must support individual, SEO-optimized, independent pages for each of the following items. These are not just sections; they are distinct database records with their own URLs.

### A. Prostate Diseases
- Prostate Surgery (Open)
- Prostate Surgery (Closed / Endoscopic)
- Prostate Biopsy

### B. Kidney & Ureter Diseases
- Kidney Stone Surgery (Open)
- Kidney Stone Surgery (Closed / Endoscopic)
- Ureter Stone Surgery
- Ureter Stricture Surgery (Open)
- Ureter Stricture Treatment (Endoscopic)

### C. Andrology & Male Sexual Health
- Erectile Dysfunction Treatment
- Peyronie’s Disease Treatment (Penis Curvature)
- Shockwave Therapy (ESWT)
- Exosome Therapies (Stem-cell supported)
- Penis Head Filler
- Penis Thickening (Filler)
- Penis Lengthening Surgery
- Premature Ejaculation Treatment

### D. Infertility
- Azoospermia Treatment
- Male Infertility Treatments
- Microscopic Varicocelectomy

### E. Pediatric Urology
- Undescended Testis Surgery
- Hydrocelectomy
- Vesicoureteral Reflux Treatment
- Vesicoureteral Reflux Surgeries

### F. Bladder Diseases
- Bladder Tumor Surgery (Endoscopic / CIS)

### G. General Urology
- Circumcision
- Religious/Prophet Circumcision (Informational & Medical)
- Urinary Incontinence Surgeries

## 5. Admin Panel Requirements
The admin panel is the heart of this system. It must be robust, secure, and user-friendly.

### Features
- **Secure Login:** Protected dashboard.
- **CRUD Operations:** Full Create, Read, Update, Delete for all entities above.
- **Slug Auto-generation:** Smart slug creation from titles.
- **SEO Editor:** Full control over `<title>`, `<meta description>`, and Canonical URLs per page.
- **Schema Editor:** Ability to inject or edit JSON-LD schema data.
- **Menu Builder:** Drag-and-drop or list-based menu management.
- **Media Library:** Upload and manage images/videos.
- **State Management:** Draft / Publish status for all content.

### Automation
Creating a new Procedure in the admin panel must automatically:
1.  Generate a unique URL/Slug.
2.  Apply the correct page layout/template.
3.  Attach valid `MedicalProcedure` schema.
4.  Make it available for menu assignment.

## 6. Development Guidelines
- **No Placeholder Code:** Write production-ready code.
- **No "Demo" Logic:** Assume high traffic and real data.
- **Strict Typing:** No `any` types in TypeScript.
- **Mobile First:** Design must be flawlessly responsive.

## 7. Folder Structure Reference
*(Recommended structure)*
```text
src/
 ├─ app/
 │   ├─ (public)/
 │   │   ├─ procedures/
 │   │   │   ├─ [slug]/
 │   │   ├─ blog/
 │   ├─ admin/
 │   ├─ api/
 ├─ components/
 ├─ lib/
 ├─ prisma/
```