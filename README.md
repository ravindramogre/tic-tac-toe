# 🕹️ Tic-Tac-Toe (Vanilla JS)

A clean, minimalist **Tic-Tac-Toe** game built using pure HTML5, CSS3, and JavaScript. This version is designed for a classic **local 2-player** experience (Human vs. Human).

---

## 🚀 How to Run

This project is a static web application, meaning it runs directly in your browser without any installation.

1.  **Clone or Download** this repository to your local machine.
2.  Locate the **`index.html`** file in the root folder.
3.  **Double-click `index.html`** to open it in your default web browser.
4.  Start playing! Player X begins the game.

---

## 🧠 Game Logic Breakdown

The game logic is handled entirely in `script.js` and follows these core principles:

### 1. State Management
The 3x3 grid is tracked using a simple JavaScript array:
`let grid = [-1, -1, -1, -1, -1, -1, -1, -1, -1];`
Each index in the array corresponds to a cell on the visual grid (0-8).

### 2. Win Conditions
The script evaluates the board against **8 winning combinations** after every move:
* **Horizontal:** `[0, 1, 2], [3, 4, 5], [6, 7, 8]`
* **Vertical:** `[0, 3, 6], [1, 4, 7], [2, 5, 8]`
* **Diagonal:** `[0, 4, 8], [2, 4, 6]`

### 3. Execution Flow
1.  **Input:** The game listens for click events on the grid cells.
2.  **Validation:** It checks if the cell is already taken or if the game has already been won.
3.  **Update:** It updates the UI and the internal array with the current player's symbol (X or O).
4.  **Result Check:** It loops through the win conditions. If a match is found, a winner is announced. If the array is full with no match, it declares a draw.
5.  **Toggle:** If no winner is found, the turn switches to the other player.

---

## ✨ Features
* **Local Multiplayer:** Play head-to-head with a friend on the same screen.
* **Win/Draw Notifications:** Real-time status updates on the game state.
* **Restart Function:** Instantly clear the board to start a fresh match.
* **Responsive Design:** Optimized for both mobile and desktop browsers.

## 🛠️ Tech Stack
| Technology | Role |
| :--- | :--- |
| **HTML5** | Structure and layout |
| **CSS3** | Styling and responsiveness |
| **JavaScript** | Game logic and DOM manipulation |

---

## 🔮 Roadmap (No AI Yet)
Currently, this is a human-vs-human game. Planned future updates include:
* [ ] **AI Opponent:** Implementation of the Minimax algorithm.
* [ ] **Score Tracker:** Keep a tally of wins for each player.
* [ ] **Custom Themes:** Dark mode and neon color schemes.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
