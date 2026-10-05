# Assignment Studio — all six exercises

## Run in VS Code
1. Extract the ZIP and open the all-assignments folder in VS Code.
2. Open Terminal → New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost link printed in the terminal.

The home page contains six assignment cards. Click a card to open its page, and use All assignments to return. Browser Back and direct hash links also work, such as /#/assignment/1.

## Files
- src/App.jsx: home menu, hash navigation, and useState counter.
- public/calculator.html: plain JavaScript arithmetic functions and switch.
- public/todo.html: DOM task creation, completion, and deletion.
- public/registration.html: JavaScript form validation.
- src/ProfileCard.jsx: profile component receiving name, imageUrl, description props.
- src/ControlledForm.jsx: React controlled inputs and live preview.

No database is required. Form entries and tasks reset when their exercise is reopened. To use this in an existing Vite React project, copy src and public files and merge the main.jsx imports; back up your current files before replacing them.
