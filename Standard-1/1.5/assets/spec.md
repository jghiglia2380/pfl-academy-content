## Day 1 - Budget Spreadsheet Template

### Purpose

To provide students with an interactive tool to practice creating a personal budget using the 50/30/20 rule.

---

### Design Specifications

- Google Sheets template with conditional formatting
- Each major category (Needs, Wants, Savings) uses a distinct color scheme:
  - **Needs (50%)**: Blue color family
  - **Wants (30%)**: Green color family
  - **Savings (20%)**: Purple color family
- Subcategories inherit the parent category's color with slight visual variation
- Automatic calculations to show:
  - Subtotals for each category
  - Percentage of income allocated to each category
  - Remaining funds or overages

---

### Structure

**1. Income Section (Top)**  
- Input: Monthly income

**2. Expense Categories**

- **Needs (50%)**
  - Housing
  - Utilities
  - Groceries
  - Transportation
  - Healthcare
  - Minimum debt payments

- **Wants (30%)**
  - Dining out
  - Entertainment
  - Shopping
  - Hobbies
  - Subscriptions
  - Travel

- **Savings/Investments (20%)**
  - Emergency fund
  - Retirement
  - Education
  - Other savings goals
  - Additional debt payments

**3. Summary Section**
- Total income
- Total expenses
- Remaining balance
- Category percentage visualization (color-coded)
- Warning indicators if allocation exceeds 50/30/20 guidelines

- ## Day 2 - Learning Lab UI/UX Design Instructions for Bolt.new

---

### Page Layout

Single-page application layout with four primary content blocks:

1. Review Dashboard  
2. Income Management Simulator  
3. Budget Challenge Workshop  
4. Financial Goals Action Plan

Persistent top navigation with tab switching and save-progress functionality.

---

### 1. Review Dashboard Section

**Purpose:**  
Allow students to review Day 1 concepts and budget.

**Inputs:**  
- Pre-recorded podcast audio  
- Day 1 budget import

**Outputs:**  
- No output, review only

**Interaction Model:**  
- Audio player with playback controls  
- Visual key concept highlights while playing  
- Modal to open/view/edit Day 1 budget

**Integration:**  
- Import completed budget from Day 1

---

### 2. Income Management Simulator

**Purpose:**  
Let students apply budgeting to simulated financial scenarios.

**Inputs:**  
- Scenario cards  
- Student budget allocation decisions

**Outputs:**  
- Financial impact visualization  
- Automated feedback

**Interaction Model:**  
- Scenario card grid  
- Sliders/fields to reallocate budget  
- Live charts showing results  
- Optional multiple choice "response paths"

**Integration:**  
- Standalone section

---

### 3. Budget Challenge Workshop

**Purpose:**  
Guide students through collaborative budgeting problem-solving.

**Inputs:**  
- Real-world financial challenges

**Outputs:**  
- Documented response plan  
- Optional presentation content

**Interaction Model:**  
- Challenge cards with problem statements  
- Text input for proposed solutions  
- Live shared docs (optional)  
- Slide/presenter mode interface

**Integration:**  
- None

---

### 4. Financial Goals Action Plan

**Purpose:**  
Help students build realistic strategies for achieving goals using their budget.

**Inputs:**  
- Student-defined goals  
- Budget data from Day 1  
- Timeline and resource estimates  
- Peer feedback

**Outputs:**  
- Downloadable Financial Goals Action Plan  
- Completed peer review section

**Interaction Model:**  
- Form fields:
  - Goal definitions (short- and long-term)
  - Timeline selectors
  - Resource sliders for allocation
  - Action step fields
- Peer review split-screen interface
- Ratings/comments module for peer feedback

**Integration:**  
- Import budget breakdowns from Day 1

---

### Design Elements

**Visual Style:**
- Financial color palette (blues, greens, neutrals)
- Clean, modern UI with large touch targets
- Minimalist, readable font (e.g., Inter, Roboto)

**Navigation:**
- Persistent header with progress tracker
- Tabbed section nav
- "Next" and "Back" buttons per module
- Save/resume functionality

**Accessibility:**
- High-contrast toggle
- Keyboard + screen reader support
- Scalable fonts

**Mobile Responsiveness:**
- Fluid layout for phone/tablet
- Collapse nav into hamburger menu
- Touch-friendly slider controls

