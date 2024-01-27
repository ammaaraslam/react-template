import Icons from "@assets/icons";
import useOutsideClick from "@hooks/use-outside-click";
import { useAppDispatch, useAppSelector } from "@hooks/use-redux";
import { RootState } from "@redux/index";
import { toggleTheme } from "@redux/reducers/theme";
import { useState } from "react";

const ThemeToggle = () => {
  const [open, setOpen] = useState(false);
  const themeConfig = useAppSelector((state: RootState) => state.themeConfig);
  const dispatch = useAppDispatch();
  const containerRef = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  return (
    <div className="absolute right-10 top-10" ref={containerRef}>
      <div className="relative">
        <button
          className={`p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 dark:[&>svg>path]:stroke-white [&>svg]:w-5 [&>svg]:h-5`}
          onClick={() => setOpen(!open)}
        >
          {themeConfig.theme === "dark" ? (
            <Icons.MoonIcon />
          ) : themeConfig.theme === "system" ? (
            <Icons.MonitorIcon />
          ) : (
            <Icons.SunIcon />
          )}
        </button>
        <div
          className={`absolute  top-full right-0 translate-y-2 transition-all duration-200 ${
            open ? "opacity-100 z-50 scale-100" : "opacity-0 z-0 scale-90"
          } origin-top-right bg-gray-100 dark:bg-zinc-900 w-36 rounded-md px-2 py-2 flex flex-col justify-start items-start`}
        >
          {["Light", "Dark", "System"].map((theme) => (
            <button
              className="w-full hover:bg-zinc-200 hover:dark:bg-zinc-800 inline-flex justify-start items-center py-2 px-4 rounded-md transition-all duration-150"
              onClick={() => {
                dispatch(
                  toggleTheme(
                    theme === "Light"
                      ? "light"
                      : theme === "Dark"
                        ? "dark"
                        : "system"
                  )
                );
                setOpen(false);
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
