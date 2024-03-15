import t from "@src/shared/config";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});

function Index() {
  const { mutate: createUser } = t.user.create.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { mutate: deleteUsers } = t.user.deleteAll.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { mutate: updateUser } = t.user.update.useMutation();
  const { data: users } = t.user.getAll.useQuery();
  const utils = t.useUtils();

  return (
    <div className="container mx-auto w-full flex flex-col gap-4">
      <div>
        <p className="text-xl font-bold">Juu Electron starter</p>
      </div>

      <div>
        <p className="mb-1 font-semibold">tRPC + db example</p>
        <div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => createUser({ name: "test" })}
              className="bg-card px-3 py-1 rounded border border-stone-700 hover:brightness-110"
            >
              add user
            </button>
            <button
              onClick={() => deleteUsers()}
              className="bg-card px-3 py-1 rounded border border-stone-700 hover:brightness-110"
            >
              delete users
            </button>
          </div>
          <div>
            {users?.map((u: any) => (
              <div>{JSON.stringify(u)}</div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="mb-1 font-semibold">Packages used</p>
        <div className="flex flex-wrap gap-2">
          <div className="bg-card px-3 py-1 rounded">Electron-Vite</div>
          <div className="bg-card px-3 py-1 rounded">tRPC</div>
          <div className="bg-card px-3 py-1 rounded">TailwindCSS</div>
          <div className="bg-card px-3 py-1 rounded">Better-sqlite3</div>
          <div className="bg-card px-3 py-1 rounded">Drizzle</div>
          <div className="bg-card px-3 py-1 rounded">Legendapp/state</div>
          <div className="bg-card px-3 py-1 rounded">Biome</div>
          <div className="bg-card px-3 py-1 rounded">
            TanStack Query & Router
          </div>
        </div>
      </div>

      <div>
        <p className="mb-1 font-semibold">Quickstart</p>
        <ul>
          <li>Routes are defined src/web/routes directory</li>
          <li>Linting and Formatting are set up in biome.json</li>
          <li>Themes are implemented with TailwindCSS and CSS variables</li>
          <li>Implementing tests is up to you :)</li>
        </ul>
      </div>

      <div>
        <p className="mb-1 font-semibold">Building</p>
        <p>pnpm run build</p>
      </div>
    </div>
  );
}
