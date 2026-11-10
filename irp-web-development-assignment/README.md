# IRP Web Development Assignment

This repository contains the two parts required by the assignment.

## Project structure

```text
irp-web-development-assignment/
├── part-a-responsive-ui/
│   ├── index.html
│   └── style.css
├── part-b-javascript/
│   └── bank.js
└── README.md
```

## Part A — Responsive UI

1. Open `part-a-responsive-ui/index.html` in Google Chrome.
2. Scroll the page and verify that the navigation bar stays at the top.
3. Open Developer Tools with `F12` and enable the Device Toolbar.
4. Check desktop widths of 1200px and above. The five learning cards should appear in one row.
5. Check tablet widths between 768px and 1024px. The cards should wrap into two or three columns.
6. Check mobile widths such as 375px and 390px. The cards should appear in one column without horizontal overflow.

The page uses the official logo and hero illustration URLs supplied in the assignment PDF. An internet connection is required to load these hosted assets.

## Part B — JavaScript

Run the standalone JavaScript file from the project root:

```bash
node part-b-javascript/bank.js
```

The script includes the required `parseAmount()` tests, type-coercion comments, `var` / `let` / `const` declarations, hoisting demonstrations, and asynchronous loop demonstrations.

## Submission

Create one public GitHub repository containing this project and submit the public repository URL. Verify that the repository can be opened in a private/incognito browser window.
