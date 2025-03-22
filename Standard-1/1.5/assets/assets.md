# 1.5 ASSETS AND INSTRUCTIONS

## Day 1 - Budget Spreadsheet Template

### Purpose

To provide students with an interactive tool to practice creating a personal budget using the 50/30/20 rule.

### Design Specifications

- Create a Google Sheets template with conditional formatting to clearly display the 50/30/20 rule
- Each major category (Needs, Wants, Savings) should have a distinct color scheme:
    - Needs (50%): Blue color family
    - Wants (30%): Green color family
    - Savings (20%): Purple color family
- All subcategories should inherit the color of their parent category (with slight variations for visibility)
- Include automatic calculations to show:
    - Subtotals for each category
    - Percentage of income allocated to each category
    - Remaining funds or shortfall

### Structure

1. Income section at the top
2. Expense categories divided into:
    - Needs (50%)
        - Housing
        - Utilities
        - Groceries
        - Transportation
        - Healthcare
        - Minimum debt payments
    - Wants (30%)
        - Dining out
        - Entertainment
        - Shopping
        - Hobbies
        - Subscriptions
        - Travel
    - Savings/Investments (20%)
        - Emergency fund
        - Retirement
        - Education
        - Other savings goals
        - Additional debt payments
3. Summary section showing:
    - Total income
    - Total expenses
    - Remaining balance
    - Category percentages with visual indicators if they exceed targets

## Day 2 - Learning Lab UI/UX Design Instructions for Bolt.new

### Page Layout

Create a single-page application with a clean, modern interface divided into four main sections:

1. Review Dashboard
2. Income Management Simulator
3. Budget Challenge Workshop
4. Financial Goals Action Plan

### 1. Review Dashboard Section

### Purpose

To allow students to review key concepts from Day 1 and access their previous work.

### Inputs

- Pre-recorded podcast content (audio player)
- Student's Day 1 budget spreadsheet (imported)

### Expected Outputs

- None (review only)

### Interaction Model

- Audio player with basic controls (play, pause, seek)
- Visual display of key points while audio plays
- Button to view Day 1 budget in a modal window

### Integration Needs

- Auto-import student's completed budget from Day 1

### 2. Income Management Simulator Section

### Purpose

To help students apply budgeting principles to different financial scenarios and visualize outcomes.

### Inputs

- Pre-configured financial scenarios
- Student decisions on how to allocate resources

### Expected Outputs

- Results showing financial impact of decisions
- Automated feedback based on choices made

### Interaction Model

- Scenario cards with situation descriptions
- Sliders or input fields to adjust budget allocations
- Interactive charts showing projected outcomes
- Multiple-choice options for handling specific situations

### Integration Needs

- None

### 3. Budget Challenge Workshop Section

### Purpose

To provide collaborative problem-solving exercises that help students overcome common budgeting obstacles.

### Inputs

- Challenge scenarios
- Student responses to challenges

### Expected Outputs

- Documented solutions to budgeting challenges
- Group presentation notes

### Interaction Model

- Challenge cards with problem descriptions
- Text entry fields for solution strategies
- Collaboration tools for group work
- Presentation mode for sharing solutions

### Integration Needs

- None

### 4. Financial Goals Action Plan Section

### Purpose

To guide students in creating personalized strategies for achieving financial goals using the 50/30/20 framework.

### Inputs

- Student-identified financial goals
- Timeline and budget information
- Peer feedback

### Expected Outputs

- Completed action plan document
- Peer review feedback

### Interaction Model

- Guided form with:
    - Goal definition fields (short-term and long-term)
    - Timeline selection (dropdown)
    - Resource allocation planning (sliders/inputs)
    - Action steps text fields
- Split-screen view for peer review process
- Rating system for peer feedback

### Integration Needs

- Import student's budget allocation preferences from Day 1 as starting point

### General Design Elements

### Visual Style

- Clean, minimalist design with ample white space
- Financial-themed color scheme (blues, greens, neutral tones)
- Clear typography with good readability
- Subtle animations for transitions between sections

### Navigation

- Persistent tab navigation at the top
- Progress indicator showing completion status
- "Next" and "Back" buttons for sequential navigation
- Save functionality that persists progress

### Accessibility Features

- High contrast mode option
- Screen reader compatibility
- Keyboard navigation support
- Adjustable text size

### Mobile Responsiveness

- Adaptive layout for different screen sizes
- Touch-friendly interface elements
- Simplified views for smaller screens