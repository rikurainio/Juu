# Juu
![UI image](/src/assets/images/juu-github-media.png?raw=true)

# Usage
`git clone https://github.com/rikurainio/Juu.git`
`npm install` 


(I recommend using npm for now) 
(remember to install ./drizzle-helper package modules too)


`package.json` includes scripts for drizzle-kit operations, building, linting, etc.

# Decisions
- Build-tooling:  [Electron-Vite](https://electron-vite.org/ "Electron-Vite"), [Vite](https://vitejs.dev/ "Vite")
- UI: [React](https://react.dev/ "React")
- Styling: [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- Process communication: [Electron-tRPC](https://github.com/jsonnull/electron-trpc "Electron-tRPC"), [tRPC](https://trpc.io/ "tRPC")
- Routing: [TanStack Router](http:/https://tanstack.com/router/latest/docs/framework/react/overview/ "TanStack Router")
- State management: [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview "TanStack Query")
- Local Database:  [Better-sqlite3](https://github.com/WiseLibs/better-sqlite3 "Better-sqlite3")
- ORM: [Drizzle](https://orm.drizzle.team/ "Drizzle")
- Linting, formatting: [Biome](https://biomejs.dev/ "Biome")

# Todo
- Use pnpm instead of npm. Configure pnpm to not share better-sqlite3 module
since drizzle-kit does not properly work with the version that is compiled for electron

- Figure out better way to implement drizzle-orm and drizzle-kit.
Currently there is seperate helper package called drizzle-helper, with
its own better-sqlite3 module. This was the only way I got drizzle-kit to work
properly. If I compiled better-sqlite3 for electron, drizzle-kit would not work properly anymore.

- Figure out better way to handle initial routing on built app. As a quick fix the app manually navigates the user to the root path on initial mount.

# Contributing
I'd love to work on this template with people. I have a lot to learn about Electron and the tooling around it, and native modules.
If you have suggestions feel free to contact, make a PR.
