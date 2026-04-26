# Exercise: Student Management System with Routing & Theme

### 🎯 Goal

Build a **multi-page student management system** with theme switching, dynamic routing, auto-save, and responsive design.

---

### 1. Pages & Routing

| Route                 | Page              | Description                          |
| --------------------- | ----------------- | ------------------------------------ |
| `/` or `/register`    | Registration Form | Step 1 - Add new student             |
| `/confirmation`       | Confirmation Page | Step 2 - Review student data         |
| `/students`           | Student List      | View all registered students         |
| `/course/:courseName` | Course Details    | View course info & enrolled students |

**Navigation Bar:**

- Register (link to `/register`)
- Student List (link to `/students`)
- Theme Toggle (Light/Dark mode)

---

### 2. Theme Context (Light/Dark Mode)

**Features:**

- Light mode (default)
- Dark mode (dark background, light text)
- Save theme preference in `localStorage`
- Restore theme on page reload
- All UI components respond to theme change

**Theme Toggle Button:**

- Shows sun/moon icon
- Changes all page colors instantly

---

### 3. Registration Flow (Step 1)

**Fields (all required):**

- Student Full Name
- Email (valid format)
- Phone Number (digits only)
- Course (dropdown: Math, Science, English, History)

**Features:**

- Real-time validation
- **Review Student** button disabled until form is valid
- Inline error messages
- Auto-save to `localStorage`

---

### 4. Confirmation Page (Step 2)

**Buttons:**

- **Confirm Registration** →
  - Alert: `"Student John Doe registered successfully!"`
  - Save to registered students list
  - Clear draft from `localStorage`
  - Redirect to Student List page
- **Edit Information** → back to `/register` with data intact

---

### 5. Student List Page

**Display:**

- Table/card layout of all registered students
- Each row shows: Name, Email, Phone, Course
- **View Course** button (links to `/course/:courseName`)
- **Delete** button (remove student with confirmation alert)
- Search bar (filter students by name)

**Summary Cards:**

- Total Students: X
- Students per Course (Math: 2, Science: 3, etc.)

---

### 6. Course Details Page (Dynamic Routing)

**URL Example:** `/course/Math`, `/course/Science`

**Displays:**

- Course name (from URL param)
- Course description (different for each course)
- List of enrolled students in that course
- **Back to Student List** button

**Course Descriptions:**

| Course  | Description                          |
| ------- | ------------------------------------ |
| Math    | Algebra, Geometry, Calculus          |
| Science | Physics, Chemistry, Biology          |
| English | Literature, Writing, Grammar         |
| History | World History, Civilizations, Events |

---

### Storage Structure

| Storage Key          | Data                            |
| -------------------- | ------------------------------- |
| `studentDraft`       | Current form draft (Step 1)     |
| `registeredStudents` | Array of all confirmed students |
| `theme`              | Light or Dark mode preference   |

---

### Expected Behavior

| Action                      | Result                                     |
| --------------------------- | ------------------------------------------ |
| Register new student        | Saves to list, redirects to `/students`    |
| Toggle theme                | Changes all pages, saves preference        |
| Click course name           | Navigates to `/course/Math` shows enrolled |
| Delete student              | Alert confirmation → removes from list     |
| Reload page                 | Draft, students list, theme all restored   |
| Mobile view (width < 768px) | Stack layout, hamburger menu               |

---

### ✅ Checklist

- [ ] React Router (or similar) for navigation
- [ ] Theme Context with light/dark mode
- [ ] Theme preference saved & restored
- [ ] Responsive UI (mobile, tablet, desktop)
- [ ] Form validation (email format, digits only)
- [ ] Auto-save draft in `localStorage`
- [ ] Student list with search & delete
- [ ] Dynamic course details page
- [ ] Course page shows enrolled students
- [ ] Confirmation alert on registration
- [ ] Delete confirmation alert

---

### 📱 Responsive Breakpoints

| Screen Size    | Layout                           |
| -------------- | -------------------------------- |
| > 1024px       | Desktop (side-by-side)           |
| 768px - 1024px | Tablet (adjusted spacing)        |
| < 768px        | Mobile (stacked, hamburger menu) |

---

### 🎨 Bonus Features

- Edit existing student
- Email validation with regex
- Progressive Web App (PWA) support
- Toast notifications instead of alerts
