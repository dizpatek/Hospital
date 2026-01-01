# Seed Editor Feature Design Specification

## Overview
This specification outlines the design for a seed editor feature in the admin settings page, allowing administrators to view, edit, and apply seed data for the hospital management system. The seed data includes expertise areas, treatment categories, procedures, blog categories/posts, and FAQs.

## 1. UI Layout and Components for the "Seed" Tab

### Tab Integration
- Add a new tab to the existing `TabsList` in `src/app/admin/settings/page.tsx`
- Tab label: "Seed"
- Icon: `Database` from lucide-react
- Position: After "Scripts" tab

### Tab Content Structure
```tsx
<TabsContent value="seed" className="space-y-6">
  <Card className="bg-zinc-900 border-white/5">
    <CardHeader>
      <CardTitle>Seed Data Editor</CardTitle>
      <CardDescription>Edit and apply seed data for the system</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Editor Component */}
      {/* Action Buttons */}
      {/* Status/Output Display */}
    </CardContent>
  </Card>
</TabsContent>
```

### Components
- **JSON Editor**: Monaco Editor (or similar) with JSON syntax highlighting and validation
- **Action Buttons**:
  - "Save Draft" - Saves current JSON to database without applying
  - "Apply Seed" - Applies the seed data (with confirmation dialog)
  - "Reset to Default" - Loads the original seed.js structure
  - "Validate JSON" - Checks JSON syntax and structure
- **Preview Panel**: Collapsible section showing parsed structure in tree format
- **Status Display**: Shows save/apply results and any errors

## 2. API Endpoint Design

### Database Schema Changes
Add to `SiteSettings` model in `prisma/schema.prisma`:
```prisma
model SiteSettings {
  // ... existing fields
  seedData String? // JSON string containing seed structure
  seedVersion Int @default(1)
}
```

### Endpoints

#### GET /api/admin/seed
- **Purpose**: Retrieve current seed data
- **Response**: `{ success: true, data: { seedData: string, version: number } }`
- **Logic**: Return seedData from SiteSettings, fallback to default from seed.js if empty

#### POST /api/admin/seed
- **Purpose**: Save seed data draft
- **Body**: `{ seedData: string }`
- **Validation**: 
  - Authenticate admin
  - Validate JSON syntax
  - Basic structure validation (expertiseAreas array, etc.)
- **Response**: `{ success: true, message: "Seed data saved" }`

#### POST /api/admin/seed/apply
- **Purpose**: Apply seed data to database
- **Body**: `{ confirm: boolean }` (for destructive action confirmation)
- **Logic**:
  - Clear existing seed data (optional, with confirmation)
  - Parse JSON and create/update records
  - Handle transactions for data integrity
- **Response**: `{ success: true, message: "Seed applied successfully", stats: { created: number, updated: number } }`

## 3. Data Handling Approach

### Structured JSON Editor
- **Primary Method**: Monaco Editor for JSON editing with:
  - Syntax highlighting
  - Auto-completion
  - Error indicators
  - Folding for large structures

### JSON Structure
```json
{
  "expertiseAreas": [
    {
      "name": "Prostat Hastalıkları",
      "slug": "prostat-hastaliklari",
      "categories": [
        {
          "name": "Prostat Ameliyatı",
          "slug": "prostat-ameliyati",
          "methods": [
            {
              "name": "Açık Prostat Ameliyatı",
              "slug": "acik-prostat-ameliyati",
              "methodType": "Açık Cerrahi",
              "icon": "Scalpel",
              "summary": "...",
              "why": "...",
              "how": "...",
              "sideEffects": "...",
              "faqs": [{"question": "...", "answer": "..."}]
            }
          ]
        }
      ]
    }
  ],
  "blogCategories": [
    {"name": "Ürolojik Teknoloji", "slug": "urolojik-teknoloji"}
  ],
  "blogPosts": [
    {
      "title": "...",
      "slug": "...",
      "excerpt": "...",
      "content": "...",
      "coverImage": "...",
      "status": "PUBLISHED",
      "categorySlug": "..."
    }
  ],
  "globalFaqs": [
    {"question": "...", "answer": "..."}
  ]
}
```

### Validation
- JSON syntax validation
- Required fields checking
- Slug uniqueness validation
- Foreign key relationship validation

## 4. Integration with Existing Settings Page

### Code Changes
- Add "Seed" tab to `TabsList` and `TabsTrigger`
- Add `TabsContent` for seed
- Import necessary components (Monaco Editor, Dialog for confirmations)
- Add state management for seed data
- Integrate with existing form patterns

### State Management
```tsx
const [seedData, setSeedData] = useState<string>('');
const [seedVersion, setSeedVersion] = useState<number>(1);
const [isApplying, setIsApplying] = useState(false);
```

### Loading
- Fetch seed data on tab mount
- Show loading state during save/apply operations

## 5. Security Considerations

### Authentication & Authorization
- JWT token verification for all seed endpoints
- Admin role check (extend existing auth middleware)
- Rate limiting for apply operations

### Data Validation
- JSON schema validation against expected structure
- Sanitization of HTML content in summaries/descriptions
- Prevention of malicious script injection in content fields

### Audit Logging
- Log all seed save and apply operations
- Track user, timestamp, and changes made
- Store previous versions for rollback capability

### Access Control
- Seed editor only visible to ADMIN role users
- API endpoints protected with admin middleware
- Confirmation dialogs for destructive operations

## 6. User Workflow for Editing and Applying Seed Changes

### Workflow Steps

1. **Access Seed Editor**
   - Navigate to Admin > Settings > Seed tab
   - System loads current seed data or default structure

2. **Edit Seed Data**
   - Modify JSON in the editor
   - Use "Validate JSON" to check syntax
   - View preview panel for structure overview

3. **Save Draft**
   - Click "Save Draft" to store changes without applying
   - Receive confirmation of successful save
   - Changes persist across sessions

4. **Apply Seed Data**
   - Click "Apply Seed" button
   - Confirmation dialog appears:
     ```
     Warning: This will overwrite existing seed data.
     This action cannot be undone.
     Are you sure you want to proceed?
     ```
   - If confirmed, system applies seed data
   - Progress indicator shows during application
   - Success/error message displayed with statistics

5. **Error Handling**
   - Invalid JSON: Show syntax errors with line numbers
   - Validation errors: Display specific field issues
   - Application errors: Show detailed error messages

6. **Reset/Recovery**
   - "Reset to Default" loads original seed.js structure
   - Version history (future enhancement) for rollback

### User Experience Considerations
- Auto-save drafts every 30 seconds (optional)
- Keyboard shortcuts (Ctrl+S for save)
- Undo/redo in editor
- Responsive design for mobile editing
- Dark theme consistent with existing UI

## Implementation Notes

### Dependencies
- `@monaco-editor/react` for JSON editor
- `ajv` for JSON schema validation
- Extend existing Prisma models if needed

### Performance
- Lazy load Monaco Editor
- Paginate large seed structures if necessary
- Optimize apply operation with batch processing

### Testing
- Unit tests for API validation
- Integration tests for seed application
- E2E tests for UI workflow

### Future Enhancements
- Visual tree editor as alternative to JSON
- Import/export seed files
- Version history and diff viewing
- Bulk operations for large datasets