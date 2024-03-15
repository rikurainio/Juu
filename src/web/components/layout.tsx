import { Minus, Square, X } from "@phosphor-icons/react";
import t from "@shared/config";
import { useRouter } from "@tanstack/react-router";
import React from "react";
import { globalState$ } from "../state";

type LayoutProps = {
  children?: React.ReactNode;
};

const CustomTopBar = () => {
  const { data: appVer } = t.version.useQuery();
  const { mutate: minimizeWindow } = t.window.minimize.useMutation();
  const { mutate: maximizeWindow } = t.window.maximize.useMutation();
  const { mutate: closeWindow } = t.window.closeWindow.useMutation();

  function toggleColorMode() {
    const body = document.body;
    const themes = ["theme-dark", "theme-light", "theme-calm"];
    const currentTheme = body.classList.value
      .split(" ")
      .find((className) => themes.includes(className));
    themes.forEach((theme) => {
      body.classList.remove(theme);
    });
    const nextTheme = currentTheme
      ? themes[(themes.indexOf(currentTheme) + 1) % themes.length]
      : themes[0];
    body.classList.add(nextTheme);
    globalState$.colorMode.set(nextTheme.replace("theme-", "") as any);
  }

  return (
    <div className="flex w-full h-10 items-center">
      <div id="drag-region" className="flex items-center px-3 w-full">
        <span className="font-bold">
          Juu <span className="font-extralight text-sm">{appVer}</span>
        </span>
      </div>
      <div className="flex mr-3">
        <button
          className="flex items-center gap-[.1rem] mr-2 px-2 py-1 rounded-md hover:bg-bgHover"
          onClick={toggleColorMode}
        >
          <span className="text-xs">theme</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z" />
          </svg>
        </button>
        <button
          className="px-2 py-1 rounded-md hover:bg-bgHover"
          onClick={() => minimizeWindow()}
        >
          <Minus />
        </button>
        <button
          className="px-2 py-1 rounded-md hover:bg-bgHover"
          onClick={() => maximizeWindow()}
        >
          <Square />
        </button>
        <button
          className="px-2 py-1 rounded-md hover:bg-bgHover hover:outline-rose-600 hover:outline hover:outline-1"
          onClick={() => closeWindow()}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  React.useEffect(() => {
    document.body.classList.add(`theme-${globalState$.colorMode.get()}`);

    /** Navigate to default route on first launch (production) 
    TODO: Find a better solution than this... */
    if (
      router.state.location.pathname.toString().includes("renderer/index.html")
    ) {
      router.navigate({ to: "/" });
    }
  }, []);

  return (
    /** Using a layout is not a must. You can also disable the custom topbar
     *  and enable "frame" property for the window in main.ts */
    <div className="h-screen">
      <CustomTopBar />
      {children}
    </div>
  );
}
