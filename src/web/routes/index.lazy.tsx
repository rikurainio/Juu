import React from "react";
import { FloppyDisk, PencilSimple, X } from "@phosphor-icons/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import t from "@src/shared/config";

export const Route = createLazyFileRoute("/" as never)({
  component: Index,
});

function Index() {
  const [newName, setNewName] = React.useState<string>();
  const [editableUser, setEditableUser] = React.useState<number | undefined>(
    undefined,
  );

  const { mutate: createUser } = t.user.create.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { mutate: deleteUsers } = t.user.deleteAll.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { mutate: deleteUser } = t.user.delete.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { mutate: updateUser } = t.user.update.useMutation({
    onSuccess: () => utils.user.invalidate(),
  });
  const { data: users } = t.user.getAll.useQuery();
  const utils = t.useUtils();

  return (
    <div className="container mx-auto w-full h-full flex flex-col gap-4">
      <div>
        <p className="text-xl font-bold">Juu Electron starter</p>
      </div>

      <div>
        <p className="mb-1 font-semibold">tRPC + db example</p>
        <div>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={() => createUser({ name: "test" })}
              className="bg-card px-3 py-1 rounded border border-stone-700 hover:brightness-110"
            >
              add user
            </button>
            <button
              type="button"
              onClick={() => deleteUsers()}
              className="bg-card px-3 py-1 rounded border border-stone-700 hover:brightness-110"
            >
              delete users
            </button>
          </div>
          <div className="flex flex-wrap mt-3 gap-3">
            {users?.map((u) => (
              <div
                key={u.id}
                className="flex max-w-xs items-center gap-3 bg-card border border-border rounded px-1 py-[0.1rem]"
              >
                <div className="w-full">
                  <p className="w-20 truncate">
                    <span className="text-xs pr-1">{u.id}</span>
                    {u.name}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setEditableUser(u.id)}
                    className="border bg-background border-border rounded flex items-center h-5"
                  >
                    <PencilSimple />
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteUser({ id: u.id })}
                    className="border bg-background border-border rounded text-rose-500 flex items-center h-5"
                  >
                    <X />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {editableUser && (
            <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black backdrop-blur bg-opacity-10">
              <div className="flex gap-2 items-center">
                <input
                  className="bg-background border border-border outline-none text-text px-1 rounded placeholder-text"
                  placeholder={`new name for user id: ${editableUser}`}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => {
                    updateUser({
                      id: editableUser,
                      newName: newName as string,
                    });
                    setEditableUser(undefined);
                  }}
                  className="border bg-background border-border rounded flex items-center h-5"
                >
                  <FloppyDisk />
                </button>
              </div>
            </div>
          )}
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
