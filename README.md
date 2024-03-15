# Usage
- clone
- npm install (do not use pnpm/yarn)
- package.json includes scripts for drizzle-kit operations, building, etc.

# Decisions
- Build-tooling:  [Electron-Vite](https://electron-vite.org/ "Electron-Vite"), [Vite](https://vitejs.dev/ "Vite")
- UI: [React](https://react.dev/ "React")
- Styling: [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- Process communication: [Electron-tRPC](https://github.com/jsonnull/electron-trpc "Electron-tRPC"), [tRPC](https://trpc.io/ "tRPC")
- Routing: [TanStack Router](http:/https://tanstack.com/router/latest/docs/framework/react/overview/ "TanStack Router")
- State management: [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview "TanStack Query"), [Legendapp/state](https://legendapp.com/open-source/state/intro/introduction/ "Legendapp/state")
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

- Move sqlite.db to somewhere else than the root. Maybe to userData. Also configure where this db file resides on the built app.

- Figure out better way to handle initial routing on built app. As a quick fix the app manually navigates the user to the root path on initial mount.