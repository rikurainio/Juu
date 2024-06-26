# Juu
![UI image](/src/assets/images/juu-github-media.png?raw=true)

# Usage
`pnpm install` <br>
`pnpm run dev`

# Stack
- UI: [React](https://react.dev/ "React")
- ORM: [Drizzle](https://orm.drizzle.team/ "Drizzle")
- Styling: [TailwindCSS](https://tailwindcss.com/ "TailwindCSS")
- Routing: [TanStack Router](http:/https://tanstack.com/router/latest/docs/framework/react/overview/ "TanStack Router")
- Linting, formatting: [Biome](https://biomejs.dev/ "Biome")
- Local Database:  [Better-sqlite3](https://github.com/WiseLibs/better-sqlite3 "Better-sqlite3")
- Build-tooling:  [Electron-Vite](https://electron-vite.org/ "Electron-Vite"), [Vite](https://vitejs.dev/ "Vite")
- State management: [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview "TanStack Query")
- Process communication: [Electron-tRPC](https://github.com/jsonnull/electron-trpc "Electron-tRPC"), [tRPC](https://trpc.io/ "tRPC")

# About modules
Whenever you want to run commands when the app is not running (e.g drizzle-kit commands), <br> you have to run ```rebuild``` to build the packages to match your systems node version. <br> Then after you are done and want to continue development, you need to rebuild <br> the packages for electron by doing ```rebuild:electron```

# Todo
- Figure out better way to handle initial routing on built app. <br> As a quick fix the app manually navigates the user to the root path on initial mount.
- Make the demo look a bit better

# Contributing
I'd love to work on this template with people. I have a lot to learn about Electron <br> and the tooling around it, and native modules.
If you have suggestions <br> feel free to contact, make a PR.
