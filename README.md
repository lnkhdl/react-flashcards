# Personal Flashcards Web App
- A lightweight, mobile-friendly flashcard application built with Vite, React, TypeScript and TailwindCSS, created for my personal learning.
- The goal is simple: keep my study notes easily accessible from anywhere, directly in the browser.
- Flashcards are written in Markdown (.md) files and organized automatically by topic and subtopic.

## Adding New Flashcards
- You can add new material without modifying any code:
1. Add them in the `public/data/` folder.
2. Follow the same format that is available in the existing `.md` files.
3. Update `index.json` with the name of the .md file, if it is a new one.
- That's it - the app will load and parse the new file on the next deployment.

## Deployment
- Deployment is automated with GitHub Actions.
- Pushing to the main branch triggers a rebuild and publishes the updated site to GitHub Pages.
- The live application is available at: [LNKHDL Flashcards](https://lnkhdl.github.io/react-flashcards/).