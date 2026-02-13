# 🧩 Sudoku Solver

An interactive Sudoku puzzle solver built with **React**, **TypeScript**, and **Tailwind CSS**. Features a powerful **Backtracking Algorithm** to solve any valid Sudoku puzzle.

## 📋 Features

- ✅ **Interactive 9×9 Grid** - User-friendly interface for entering puzzles
- ✅ **Backtracking Algorithm** - Efficient recursive algorithm to solve puzzles
- ✅ **Input Validation** - Validates entries in real-time (1-9 only)
- ✅ **Multiple Actions** - Solve, Reset, and Clear functions
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Beginner-Friendly** - Includes comprehensive Sudoku guidelines
- ✅ **Beautiful UI** - Modern design with Tailwind CSS styling

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd sudoku_solver
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to use the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎮 How to Use

### Understanding the Grid

- **Gray Cells** - Pre-filled puzzle values (cannot be edited)
- **White Cells** - Empty cells where you can enter numbers (1-9)

### Controls

1. **Enter Numbers** - Click on white cells and type a digit (1-9)
2. **Solve** - Click the "Solve" button to automatically solve the puzzle using backtracking
3. **Reset** - Click to restore the original puzzle and clear your entries
4. **Clear All** - Click to start with a completely blank grid

### Tips for Solving Sudoku

**Basic Rules:**
- Fill the 9×9 grid with digits 1-9
- Each row must contain all digits 1-9
- Each column must contain all digits 1-9
- Each 3×3 box must contain all digits 1-9

**Getting Started:**
- Look for cells where only one number is possible
- Check which numbers are already in the row/column/box
- Eliminate possibilities systematically
- Be patient—Sudoku is a logic puzzle, not a guessing game

**Pro Tips:**
- Start with rows/columns/boxes that have many numbers already
- Use the solver to learn from the solution
- Practice helps you recognize patterns faster

## 🔧 Technology Stack

- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Type-safe JavaScript
- **Vite** 7.3.1 - Fast build tool
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **PostCSS** - CSS transformations

## 🧠 Algorithm Explanation

### Backtracking Algorithm

The solver uses a recursive **Backtracking Algorithm** to find the solution:

1. **Find Empty Cell** - Locate the first empty cell (marked as 0)
2. **Try Numbers** - For each number 1-9:
   - Check if the number is valid (not in row, column, or 3×3 box)
   - Place the number in the cell
   - Recursively solve the rest of the puzzle
3. **Backtrack** - If no solution is found, remove the number and try the next one
4. **Success** - When all cells are filled with valid numbers, the puzzle is solved

**Time Complexity:** O(9^(n²)) in worst case, but typically much faster due to constraints
**Space Complexity:** O(n²) for recursion stack depth

## 📁 Project Structure

```
sudoku_solver/
├── src/
│   ├── App.tsx              # Main React component
│   ├── App.css              # Component styles
│   ├── sudokuSolver.ts      # Backtracking algorithm
│   ├── index.css            # Global styles with Tailwind
│   ├── main.tsx             # Application entry point
│   └── assets/              # Static assets
├── public/                  # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 📝 Key Components

### `sudokuSolver.ts`
Contains the core algorithm and utilities:
- `solveSudoku(grid)` - Main solving function
- `isValid(grid, row, col, num)` - Validates number placement
- `copyGrid(grid)` - Creates a deep copy of the grid

### `App.tsx`
Main React component with:
- Grid state management
- Event handlers for user input
- UI rendering with Tailwind CSS
- Controls and instructions

## 🎯 Learning Objectives

This project demonstrates:
- **Recursion** - Understanding recursive problem-solving
- **Backtracking** - Implementing backtracking algorithms
- **Constraint Satisfaction** - Solving constraint satisfaction problems
- **React Hooks** - Using useState and other hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern utility-first styling

## 🐛 Troubleshooting

### Dev server not starting?
```bash
npm install
npm run dev
```

### Tailwind styles not applying?
Clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```



**Happy Sudoku Solving! 🎉**
