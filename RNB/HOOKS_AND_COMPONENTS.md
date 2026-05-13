# Hooks and Components Documentation

## React Hooks Used

### 1. **useState**
- **Description**: React's built-in hook for managing component state
- **Used In**:
  - [NotesListing.tsx](src/app/NotesListing.tsx) - `search`, `darkMode`
  - [NotesEditing.tsx](src/app/NotesEditing.tsx) - `title`, `note`
  - [SignIn.tsx](src/app/SignIn.tsx) - `email`, `password`, `showPassword`
  - [Signup.tsx](src/app/Signup.tsx) - `dark`
  - [ThemeChanging.tsx](src/app/ThemeChanging.tsx) - `darkMode`

### 2. **useWindowDimensions**
- **Description**: React Native hook for getting device window dimensions (width and height)
- **Used In**:
  - [NotesListing.tsx](src/app/NotesListing.tsx) - Gets `width` and `height` for responsive design

### 3. **useColorScheme** (Commented/Unused)
- **Description**: React Native hook for detecting system-level theme preference (dark/light)
- **Imported In**:
  - [NotesListing.tsx](src/app/NotesListing.tsx) - Imported but currently commented out

---

## Components

### Screen/Page Components

#### 1. **index** (Main Entry Point)
- **File**: [src/app/index.tsx](src/app/index.tsx)
- **Purpose**: Main entry point of the app that renders NoteEditorScreen
- **Features**: Unused imports and commented code for SafeAreaInsets

#### 2. **RootLayout**
- **File**: [src/app/_layout.tsx](src/app/_layout.tsx)
- **Purpose**: Root layout wrapper using Expo Router's Stack navigator
- **Features**: Hides header navigation with `screenOptions={{ headerShown: false }}`

#### 3. **NotesListing**
- **File**: [src/app/NotesListing.tsx](src/app/NotesListing.tsx)
- **Purpose**: Displays a list of notes with search and theme switching functionality
- **State**:
  - `search`: Search query string
  - `darkMode`: Theme toggle state
- **Features**:
  - FlatList for displaying notes
  - Search filtering by title
  - Manual dark/light theme toggling
  - Status bar styling based on theme
  - Top bar with menu and theme toggle buttons

#### 4. **NoteEditorScreen**
- **File**: [src/app/NotesEditing.tsx](src/app/NotesEditing.tsx)
- **Purpose**: Screen for editing/creating notes with title and content
- **State**:
  - `title`: Note title
  - `note`: Note content
- **Features**:
  - ImageBackground header with back and save buttons
  - Keyboard-aware view with platform-specific behavior
  - Text inputs for title and note content

#### 5. **SignInScreen**
- **File**: [src/app/SignIn.tsx](src/app/SignIn.tsx)
- **Purpose**: Sign-in authentication screen
- **State**:
  - `email`: User email input
  - `password`: User password input
  - `showPassword`: Password visibility toggle
- **Features**:
  - Email and password inputs with icons
  - Password visibility toggle
  - Social login buttons (Facebook, etc.)
  - Sign-in button with navigation indicator

#### 6. **Signup**
- **File**: [src/app/Signup.tsx](src/app/Signup.tsx)
- **Purpose**: Sign-up registration screen
- **State**:
  - `dark`: Theme toggle for signup screen
- **Features**:
  - Local and network image display examples
  - Pressable component with state feedback
  - Text input and button examples
  - Switch component for theme selection

#### 7. **ThemeChanging**
- **File**: [src/app/ThemeChanging.tsx](src/app/ThemeChanging.tsx)
- **Purpose**: Theme switching demonstration component
- **State**:
  - `darkMode`: Theme state (true for dark, false for light)
- **Features**:
  - Dynamic theme switching with Switch component
  - Icon change based on theme
  - Theme objects for styling

### UI/Presentational Components

#### 8. **FloatingButton**
- **File**: [src/app/components/FloatingButton.tsx](src/app/components/FloatingButton.tsx)
- **Purpose**: Floating action button for creating new notes
- **Features**:
  - TouchableOpacity wrapper with blue background
  - Add icon with "New Note" text label
  - Absolute positioning at bottom-right
  - Shadow and elevation for depth
  - No state management (purely presentational)

---

## Component Hierarchy

```
RootLayout (_layout.tsx)
└── index.tsx
    └── NoteEditorScreen
        ├── ImageBackground
        ├── KeyboardAvoidingView
        └── TextInputs (Title, Note)

NotesListing.tsx
├── SafeAreaView
├── StatusBar
├── View (TaskBar)
│   ├── Menu Icon
│   └── Theme Toggle Icon
├── FlatList
│   └── Note Items
└── FloatingButton
```

---

## React Native Components Used

### Core Layout Components

#### 1. **View**
- **Purpose**: Container component for grouping other components
- **Usage**: Used in almost every screen for layout structuring
- **Used In**: All screen components
- **Example**: Task bar containers, input wrappers, header sections

#### 2. **SafeAreaView**
- **Purpose**: Renders content within safe area boundaries (avoids notches, status bars)
- **Source**: `react-native-safe-area-context`
- **Used In**: 
  - [NotesListing.tsx](src/app/NotesListing.tsx)
  - [NotesEditing.tsx](src/app/NotesEditing.tsx)
  - [SignIn.tsx](src/app/SignIn.tsx)
  - [ThemeChanging.tsx](src/app/ThemeChanging.tsx)

#### 3. **FlatList**
- **Purpose**: Efficient scrollable list component for rendering large datasets
- **Used In**: [NotesListing.tsx](src/app/NotesListing.tsx)
- **Features**: 
  - Renders filtered notes data
  - Optimized for performance
  - Supports scrolling

---

### Text Input Components

#### 4. **TextInput**
- **Purpose**: Component for accepting text input from users
- **Used In**:
  - [NotesListing.tsx](src/app/NotesListing.tsx) - Search input
  - [NotesEditing.tsx](src/app/NotesEditing.tsx) - Title and note inputs
  - [SignIn.tsx](src/app/SignIn.tsx) - Email and password inputs
  - [Signup.tsx](src/app/Signup.tsx) - Name input
- **Props Used**:
  - `placeholder`: Display text when empty
  - `placeholderTextColor`: Color of placeholder text
  - `value`: Controlled input value
  - `onChangeText`: Handler for text changes
  - `multiline`: Enable multi-line input
  - `textAlignVertical`: Vertical text alignment
  - `keyboardType`: Keyboard type (e.g., "email-address")
  - `secureTextEntry`: Hide text input (passwords)

---

### Button Components

#### 5. **Pressable**
- **Purpose**: Wrapper component for handling press interactions with customizable feedback
- **Used In**:
  - [NotesListing.tsx](src/app/NotesListing.tsx) - Menu, theme toggle, option buttons
  - [NotesEditing.tsx](src/app/NotesEditing.tsx) - Back and save buttons
  - [Signup.tsx](src/app/Signup.tsx) - Demo pressable component
- **Features**: Render props for pressed/unpressed states, custom onPress handlers

#### 6. **TouchableOpacity**
- **Purpose**: Wrapper for press interactions with opacity feedback effect
- **Used In**:
  - [FloatingButton.tsx](src/app/components/FloatingButton.tsx) - New note button
  - [SignIn.tsx](src/app/SignIn.tsx) - Password visibility toggle, sign-in button, social buttons
  - [Signup.tsx](src/app/Signup.tsx) - Demo component
- **Features**: Opacity decreases on press, activeOpacity prop

#### 7. **Button**
- **Purpose**: Simple cross-platform button component
- **Used In**: [Signup.tsx](src/app/Signup.tsx)
- **Props**: `title`, `color`

---

### Display Components

#### 8. **Text**
- **Purpose**: Display text content
- **Used In**: All components
- **Features**: Styling, dynamic color based on theme, responsive font sizes

#### 9. **Image**
- **Purpose**: Display images from local assets or network URLs
- **Used In**: [Signup.tsx](src/app/Signup.tsx)
- **Types**:
  - Local images: `require("@/assets/images/icon.png")`
  - Network images: `{ uri: "https://..." }`

#### 10. **ImageBackground**
- **Purpose**: Display image as background with child content overlay
- **Used In**: [NotesEditing.tsx](src/app/NotesEditing.tsx)
- **Usage**: Header section with background image and overlaid buttons

#### 11. **StatusBar**
- **Purpose**: Control the app status bar appearance (time, battery, icons)
- **Used In**: [NotesListing.tsx](src/app/NotesListing.tsx)
- **Props**:
  - `barStyle`: "light-content" or "dark-content" - Text color in status bar

---

### Form Components

#### 12. **Switch**
- **Purpose**: Toggle/checkbox component
- **Used In**:
  - [Signup.tsx](src/app/Signup.tsx) - Theme toggle
  - [ThemeChanging.tsx](src/app/ThemeChanging.tsx) - Dark mode toggle
- **Props**:
  - `value`: Boolean state
  - `onValueChange`: Handler for toggle changes
  - `trackColor`: Colors for on/off states
  - `thumbColor`: Color of the toggle thumb

---

### Layout & Keyboard Components

#### 13. **KeyboardAvoidingView**
- **Purpose**: Automatically adjust view layout when keyboard appears
- **Used In**: [NotesEditing.tsx](src/app/NotesEditing.tsx)
- **Props**:
  - `behavior`: Platform-specific behavior ("padding" for iOS, "height" for Android)
  - `Platform.OS`: Detect current platform

#### 14. **Platform**
- **Purpose**: Detect and adapt code for different platforms
- **Used In**: [NotesEditing.tsx](src/app/NotesEditing.tsx)
- **Usage**: Platform-specific KeyboardAvoidingView behavior

---

## Icon Libraries

### 1. **Ionicons** (from @expo/vector-icons)
- **Used In**: All screen components
- **Icons Used**:
  - `menu` - Navigation menu
  - `moon-outline` / `sunny-outline` - Theme toggle
  - `star-outline` - Favorites
  - `square-outline` - All notes view
  - `trash-outline` - Delete/trash
  - `search-outline` - Search icon
  - `add` - Add/create button
  - `arrow-back` - Back button
  - `arrow-forward` - Forward/next button
  - `mail-outline` - Email icon
  - `lock-closed-outline` - Password lock
  - `eye-outline` / `eye-off-outline` - Password visibility

### 2. **FontAwesome** (from @expo/vector-icons)
- **Used In**: [SignIn.tsx](src/app/SignIn.tsx)
- **Icons Used**:
  - `facebook` - Facebook social button
  - `google` - Google social button
  - `instagram` - Instagram social button

---

## Navigation Components

### 1. **Stack** (from expo-router)
- **Purpose**: Manages screen stack navigation
- **Used In**: [_layout.tsx](src/app/_layout.tsx)
- **Configuration**:
  - `screenOptions={{ headerShown: false }}` - Hide default header

---

## Styling System

### **StyleSheet**
- **Purpose**: Optimize style objects for performance
- **Used In**: All components
- **Features**:
  - `StyleSheet.create()` - Create optimized style objects
  - `StyleSheet.flatten()` - Flatten style arrays (used in NotesListing for dynamic styles)
- **Usage Pattern**: Combining dynamic and static styles
  ```javascript
  style={[styles.container, { backgroundColor: theme.background }]}
  ```

---

## Component Usage Statistics

| Component | Frequency | Primary Use |
|-----------|-----------|------------|
| View | 8 | Layout structure in all screens |
| Text | 8 | Text display in all screens |
| TextInput | 4 | Input fields (search, notes, auth) |
| Pressable | 3 | Interactive buttons (menu, options, toggles) |
| TouchableOpacity | 3 | Interactive buttons with opacity effect |
| SafeAreaView | 4 | Safe area wrapping in main screens |
| StyleSheet | 8 | Styling in all components |
| Ionicons | 7 | Icon display in most screens |
| Switch | 2 | Theme toggling |
| Button | 1 | Simple button demo |
| FlatList | 1 | Notes list rendering |
| ImageBackground | 1 | Header background in editor |
| KeyboardAvoidingView | 1 | Keyboard management in editor |

---

## Summary

- **Total Hooks Used**: 3 (useState, useWindowDimensions, useColorScheme)
- **Total Custom Components**: 8 (7 screen/page components + 1 presentational component)
- **React Native Components**: 14 core components
- **Icon Libraries**: 2 (Ionicons, FontAwesome)
- **Navigation**: Expo Router with Stack navigator
- **State Management**: Local component state with useState
- **Theme System**: Manual dark/light theme switching with theme objects
- **Styling**: Combination of StyleSheet and dynamic inline styles
