# Juu
![UI image](/src/assets/images/juu-github-media.png?raw=true)

# Usage
`git clone https://github.com/rikurainio/Juu.git`
`npm install` 

`package.json` includes scripts for drizzle-kit operations, building, linting, etc.

# Stack
- Build-tooling:  [Electron-Vite](https://electron-vite.org/ "Electron-Vite"), [Vite](https://vitejs.dev/ "Vite")
- UI: [React](https://react.dev/ "React")
- Styling: [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- Process communication: [Electron-tRPC](https://github.com/jsonnull/electron-trpc "Electron-tRPC"), [tRPC](https://trpc.io/ "tRPC")
- Routing: [TanStack Router](http:/https://tanstack.com/router/latest/docs/framework/react/overview/ "TanStack Router")
- State management: [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview "TanStack Query")
- Local Database:  [Better-sqlite3](https://github.com/WiseLibs/better-sqlite3 "Better-sqlite3")
- ORM: [Drizzle](https://orm.drizzle.team/ "Drizzle")
- Linting, formatting: [Biome](https://biomejs.dev/ "Biome")

# To-know
- There is some crazy stuff happening with drizzle-kit and better-sqlite3 module. Since bs3 needs to be built for electron, it breaks some drizzle-kit scripts. The dirty workaround right now is that the db:* scripts just reinstall drizzle-kit and bs3 for drizzle-kit operations. It makes them a bit slower and messy, but at least now it's not in the way of development.

# Todo
- Figure out better way to handle initial routing on built app. As a quick fix the app manually navigates the user to the root path on initial mount.

# Contributing
I'd love to work on this template with people. I have a lot to learn about Electron and the tooling around it, and native modules.
If you have suggestions feel free to contact, make a PR.
