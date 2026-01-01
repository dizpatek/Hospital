-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "siteName" TEXT NOT NULL DEFAULT 'MedDoc',
    "siteDescription" TEXT,
    "primaryColor" TEXT NOT NULL DEFAULT '#0ea5e9',
    "secondaryColor" TEXT NOT NULL DEFAULT '#8b5cf6',
    "logoUrl" TEXT,
    "faviconUrl" TEXT,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "whatsappNumber" TEXT,
    "address" TEXT,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "twitterUrl" TEXT,
    "linkedinUrl" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "googleAnalyticsId" TEXT,
    "updatedAt" DATETIME NOT NULL
);

-- Insert default settings
INSERT INTO "SiteSettings" (id, siteName, updatedAt) VALUES ('default', 'MedDoc', datetime('now'));
