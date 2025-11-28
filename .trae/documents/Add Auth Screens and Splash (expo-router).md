## Overview
- Implement static `Login` and `Signup` screens that redirect into the existing tabs app (`/(tabs)/home`).
- Add a `Splash` screen shown on app startup, then navigate to `Login` (no real auth). 
- Keep the current tab/navigation intact.

## Current Routing Context
- Entry redirects to tabs: `app/index.tsx:4` → `Redirect href="/(tabs)/home"`.
- Root stack: `app/_layout.tsx:7`.
- Tabs layout: `app/(tabs)/_layout.tsx:12-17` with custom `TabBar` and `TabsPager`.

## Changes
1. Create auth group: `app/(auth)/_layout.tsx`
- Use `Stack` with `headerShown: false` for clean auth screens.

2. Add `Login` screen: `app/(auth)/login.tsx`
- Static form (`TextInput` for email/password).
- Primary button "Continue" → `router.replace('/(tabs)/home')`.
- Secondary link to `Signup` → `router.push('/(auth)/signup')`.

3. Add `Signup` screen: `app/(auth)/signup.tsx`
- Static form (name/email/password).
- Primary button "Create Account" → `router.replace('/(tabs)/home')`.
- Secondary link to `Login` → `router.push('/(auth)/login')`.

4. Add `Splash` screen: `app/splash.tsx`
- Centered brand mark/text.
- `useEffect` + `setTimeout` (e.g., 1200ms) → `router.replace('/(auth)/login')`.

5. Update entry: `app/index.tsx`
- Replace `Redirect` with a small component that immediately `router.replace('/splash')` or render `Splash` directly and then navigate.
- Rationale: timed navigation isn’t possible with `Redirect`.

## Styling
- Use base React Native components to match existing code (no external UI libs).
- Colors consistent with tab bar (`#1F4E20` primary, neutral background).
- Safe-area friendly layouts.

## Files Added/Updated
- Add: `app/(auth)/_layout.tsx`
- Add: `app/(auth)/login.tsx`
- Add: `app/(auth)/signup.tsx`
- Add: `app/splash.tsx`
- Update: `app/index.tsx` (startup flow → splash → login)

## Navigation Flow
- App launch → `index` → `Splash` (1200ms) → `Login`.
- Login/Signup CTAs → `/(tabs)/home`.
- Tabs (`home`, `community`, `search`, `settings`) remain unchanged.

## Verification
- Launch app: confirm splash shows then goes to `Login`.
- Tap "Continue" on `Login` → lands at `Home` tab.
- Navigate to `Signup` from `Login` and back; both CTAs land at `Home`.
- Confirm `QrButton` and swipe pager still work after landing in tabs.

## Notes
- No real authentication; all forms are static.
- Redirects use `router.replace` to prevent back navigation to auth after entering tabs.