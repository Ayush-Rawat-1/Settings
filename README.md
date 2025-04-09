# Application Settings - React App

This is a simple React + TypeScript application built using Vite. The application provides a UI to configure application-level notification settings including:

- Toggling notifications on/off
- Specifying particular users to receive notifications
- Defining message categories
- Setting up custom replies

## 🚀 Features

- Toggle-based notifications control
- Input-based user, category, and reply list creation
- Local input management with global state persistence
- Automatic API call with debounce logic once all settings are valid

---

## 🧠 Approach and Design Decisions

### 1. **Local Input State with Global Centralized Settings**
Each input field (users, categories, replies) manages its own local state for the input value. Upon `Enter`, the value is validated and added to the global state managed in `App.tsx`. This ensures smooth user experience and centralized data control.

#### Why?
- Keeps UI responsive and encapsulated
- Ensures consistent validation and structure of global state
- Decouples input handling logic from global state logic

### 2. **Global State in `App.tsx`**
All settings are maintained in a single state object using `useState`, which makes it easy to pass state and updaters as props to child components.

```ts
const [settings, setSettings] = useState<SettingsState>({
  notificationsEnabled: false,
  users: [],
  categories: [],
  replies: [],
});
```

### 3. **Debounced API Call**
A `useEffect` hook listens for changes in the global `settings` state. If all fields are filled and notifications are enabled, it triggers a `fetch` call after a 1-second debounce.

📝 Note:
Currently, the API call is commented out, and instead, the settings object is logged to the console for demonstration purposes. This allows easy testing and logic inspection without triggering external network requests.

#### Why?
- Prevents unnecessary API calls while typing
- Emulates real-world form submission
- Helps in performance optimization

### 4. **Option Evaluation: Fetching vs Manual Entry**
Initially, we considered fetching suggestions for user/category/reply fields from an API and letting users select from them.

#### Why we didn’t go with it?
- It introduced unnecessary complexity for a demo setup
- Required backend mocking and async dropdown controls
- Manual entry was faster to implement and sufficient for static input

---

## 📁 File Structure

```txt
src/
├── main.tsx 
├── App.tsx                   # Root component with state and logic
├── components/
│   ├── NotificationSettings.tsx  # Toggle switch and user entry UI
│   ├── ParticularNotifications.tsx # Handles adding/removing users
│   ├── MessageCategories.tsx      # Handles message category inputs
│   └── CustomReply.tsx            # Handles reply entry inputs
```

---

## 🔧 Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite** (for fast dev/build)
- **Tailwind CSS** (for styling)
- **Fetch API** (for dummy API calls)

---

## 📦 Installation

```bash
git clone https://github.com/Ayush-Rawat-1/Settings
cd Settings
npm install
npm run dev
```

---

## 🔍 Improvements for Production

- ✅ Form validation and duplicate prevention
- ✅ Visual feedback on submission (toast, loader)
- ✅ Backend integration with real APIs
- ✅ Authentication and user context
- ✅ Reusable input components

---

## 🤔 Summary
This app demonstrates a clean, scalable way of handling dynamic form inputs and syncing global state with local logic in a React application. The debounce pattern avoids spammy API calls and mimics intelligent auto-saving behavior.

While no actual API request is triggered at this stage, the API logic is in place and simply commented out. Console output is used to simulate the call for demonstration purposes.

The chosen approach prioritizes simplicity, scalability, and a seamless developer experience.