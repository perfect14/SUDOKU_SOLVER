import { useState } from "react";
import { solveSudoku, copyGrid } from "./sudokuSolver";
import type { SudokuGrid } from "./sudokuSolver";
const defaultPuzzle: SudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function App() {
  const [grid, setGrid] = useState<SudokuGrid>(copyGrid(defaultPuzzle));
  const [originalGrid, setOriginalGrid] = useState<SudokuGrid>(
    copyGrid(defaultPuzzle),
  );
  const [solved, setSolved] = useState(false);
  const [solving, setSolving] = useState(false);

  const handleCellChange = (row: number, col: number, value: string) => {
    if (originalGrid[row][col] !== 0) return; // Don't allow editing original values

    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] =
      value === "" ? 0 : Math.min(9, Math.max(1, parseInt(value) || 0));
    setGrid(newGrid);
  };

  const handleSolve = async () => {
    setSolving(true);
    const gridCopy = copyGrid(grid);

    // Simulate some processing time for better UX
    await new Promise((resolve) => setTimeout(resolve, 100));

    const result = solveSudoku(gridCopy);
    if (result) {
      setGrid(gridCopy);
      setSolved(true);
    } else {
      alert("This Sudoku puzzle cannot be solved!");
    }
    setSolving(false);
  };

  const handleReset = () => {
    setGrid(copyGrid(originalGrid));
    setSolved(false);
  };

  const handleClear = () => {
    setGrid(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(0)),
    );
    setOriginalGrid(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(0)),
    );
    setSolved(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className=" mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Sudoku Solver
          </h1>
          <p className="text-gray-600">Powered by Backtracking Algorithm</p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
          {/* Sudoku Grid */}
          <div className="mb-8 flex justify-center">
            <div className="inline-block border-4 border-gray-800">
              {grid.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`flex ${rowIdx % 3 === 2 && rowIdx !== 8 ? "border-b-4 border-gray-800" : ""}`}
                >
                  {row.map((cell, colIdx) => (
                    <input
                      key={`${rowIdx}-${colIdx}`}
                      type="text"
                      inputMode="numeric"
                      value={cell === 0 ? "" : cell}
                      onChange={(e) =>
                        handleCellChange(rowIdx, colIdx, e.target.value)
                      }
                      disabled={originalGrid[rowIdx][colIdx] !== 0 || solved}
                      className={`
                        w-12 h-12 text-center text-lg font-bold border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50
                        ${colIdx % 3 === 2 && colIdx !== 8 ? "border-r-4 border-gray-800" : ""}
                        ${originalGrid[rowIdx][colIdx] !== 0 ? "bg-gray-100 text-gray-800 cursor-not-allowed" : "bg-white text-blue-600"}
                        ${solved ? "bg-green-50 text-green-700" : ""}
                      `}
                      maxLength={1}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Status Message */}
          {solved && (
            <div className="text-center mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✓ Sudoku Solved Successfully!
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleSolve}
              disabled={solving || solved}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              {solving ? "Solving..." : "Solve"}
            </button>
            <button
              onClick={handleReset}
              disabled={solving}
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              Reset
            </button>
            <button
              onClick={handleClear}
              disabled={solving}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Instructions & Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* How to Use */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">How to Use</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                • <span className="font-semibold">Gray cells:</span> Pre-filled
                puzzle values (cannot be edited)
              </li>
              <li>
                • <span className="font-semibold">White cells:</span> Empty
                cells where you can enter numbers (1-9)
              </li>
              <li>
                • Click <span className="font-semibold">Solve</span> to solve
                the puzzle using backtracking
              </li>
              <li>
                • Click <span className="font-semibold">Reset</span> to restore
                the original puzzle
              </li>
              <li>
                • Click <span className="font-semibold">Clear All</span> to
                start with a blank grid
              </li>
            </ul>
          </div>

          {/* Beginner's Guide */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Beginner's Guide to Sudoku
            </h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <p className="font-semibold text-blue-600 mb-1">
                  📋 Basic Rules:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Fill the 9×9 grid with digits 1-9</li>
                  <li>Each row must contain all digits 1-9</li>
                  <li>Each column must contain all digits 1-9</li>
                  <li>Each 3×3 box must contain all digits 1-9</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-600 mb-1">
                  🧩 Getting Started:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Look for cells where only one number is possible</li>
                  <li>Check which numbers are already in the row/column/box</li>
                  <li>Eliminate possibilities systematically</li>
                  <li>
                    Be patient—Sudoku is a logic puzzle, not a guessing game
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-600 mb-1">💡 Pro Tips:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Start with rows/columns/boxes that have many numbers</li>
                  <li>Use the solver to learn from the solution</li>
                  <li>Practice helps you recognize patterns faster</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
