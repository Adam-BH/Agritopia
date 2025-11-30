## Goals
- Consolidate duplicated UI into reusable components with clear, meaningful names.
- Keep routing stable while extracting common UI, then optionally unify routes.
- Reduce inline UI (e.g., back button) by centralizing into components.

## Proposed Structure
- `components/actions/ActionScaffold.tsx` (unified scaffold for add and delete)
- `components/actions/ActionListItem.tsx` (row for list inside scaffold)
- `components/actions/FloatingActionButton.tsx` ("+" button to open scaffold)
- `components/details/DetailsScreen.tsx` (shared details page for plants and fish)
- `components/ui/CatalogItem.tsx` (generic item card replacing PlantItem)
- `components/ui/BackButton.tsx` (reusable back button)
- Barrel export: `components/index.ts`

## Component Consolidations
- **ActionScaffold**
  - Replace `AddActionScaffold` with a single scaffold that supports two modes.
  - Props:
    - `visible: boolean`, `onClose: () => void`
    - `mode: 'list' | 'confirm'`
    - `title?: string`
    - `actions?: { label: string; icon: JSX.Element; onPress: () => void }[]` (used in `list` mode)
    - `message?: string`, `confirmLabel?: string`, `cancelLabel?: string`, `onConfirm?: () => void`, `onCancel?: () => void` (used in `confirm` mode)
  - Consumers updated:
    - `app/(tabs)/my-garden.tsx` uses `mode='list'` + `actions`
    - `components/ui/ActionItem.tsx` uses `mode='confirm'` for deletions

- **DetailsScreen**
  - Extract common layout from `app/plant-details.tsx` and `app/fish-details.tsx` into `components/details/DetailsScreen.tsx`.
  - Props:
    - `type: 'plant' | 'fish'`
    - `id: string`
    - Optional: `data?: { name: string; description: string; conditions: { ph: string; temp: string; light?: string } }` (if caller has data)
  - Routing stays the same initially; both pages import and render `DetailsScreen`:
    - `app/plant-details.tsx` → `<DetailsScreen type='plant' id={id} />`
    - `app/fish-details.tsx` → `<DetailsScreen type='fish' id={id} />`
  - Optional follow-up: unify to `app/details.tsx` and push with `type` param; not required for this pass.

- **CatalogItem**
  - Generalize `PlantItem` to `CatalogItem` (keeps existing `type` prop).
  - Props:
    - `type: 'plant' | 'fish'`
    - `name: string`
    - `status?: 'ready' | 'attention' | 'healthy'`
    - `imageUri?: string`
    - `onPress?: () => void`
    - `onDelete?: () => void`
  - Consumers updated:
    - `components/search/MyPlantsBoiler.tsx`
    - `components/search/MyFishBoiler.tsx`

- **BackButton**
  - Create `components/ui/BackButton.tsx` and replace inline implementations.
  - Props:
    - `size?: number` (default 22)
    - `color?: string` (default `#1F4E20`)
    - `style?: ViewStyle` (for positioning)
    - `onPress?: () => void` (defaults to `router.back()`)
  - Replace usages in:
    - `app/plant-details.tsx`, `app/fish-details.tsx`, `app/scan.tsx`

## File Changes (Rename/Add)
- Rename:
  - `components/AddActionScaffold.tsx` → `components/actions/ActionScaffold.tsx`
  - `components/AddActionItem.tsx` → `components/actions/ActionListItem.tsx`
  - `components/AddActionButton.tsx` → `components/actions/FloatingActionButton.tsx`
  - `components/ui/PlantItem.tsx` → `components/ui/CatalogItem.tsx`
- Add:
  - `components/details/DetailsScreen.tsx`
  - `components/ui/BackButton.tsx`
  - `components/index.ts` (barrel re-exports)
- Update imports in:
  - `app/(tabs)/my-garden.tsx`
  - `components/ui/ActionItem.tsx`
  - `components/search/MyPlantsBoiler.tsx`
  - `components/search/MyFishBoiler.tsx`
  - `app/plant-details.tsx`, `app/fish-details.tsx`, `app/scan.tsx`

## Non-Functional Considerations
- Keep styles and theming consistent; no visual regressions.
- Preserve existing behavior: toggles, deletes, navigation flows.
- No new libraries introduced; reuse current icon set and router.

## Step-by-Step Refactor Plan
1. Create `BackButton` and replace inline usages in details pages and `app/scan.tsx`.
2. Extract `DetailsScreen` and refactor both details pages to be thin wrappers.
3. Rename `PlantItem` → `CatalogItem` and update all consumers.
4. Rename and unify `AddActionScaffold` → `ActionScaffold` and adjust confirm/list modes.
5. Rename `AddActionItem` → `ActionListItem` and `AddActionButton` → `FloatingActionButton`.
6. Add `components/index.ts` barrel; update imports to use it where sensible.
7. Run type-checks and fix any prop/type mismatches; visually verify screens.

## Verification Plan
- Type-check: run project build/type checks; ensure no TS errors.
- Manual flows:
  - Open My Garden: add action sheet opens with list; confirm delete works.
  - Open Plant and Fish details: layout identical except content; back works.
  - Catalogue listings: `CatalogItem` renders correctly for both plants and fish.
  - Scan screen: back works via component.
- Snapshot the routes and UI before/after to confirm no regressions.

## Optional Follow-ups (post-refactor)
- Unify `/plant-details` and `/fish-details` into `/details` with `type` param.
- Add unit tests for `ActionScaffold` modes and `BackButton` behavior.
- Centralize colors/sizes into a theme constants file if not already present.
