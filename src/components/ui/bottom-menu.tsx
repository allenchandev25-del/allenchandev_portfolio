"use client";

import {
  Notification03Icon,
  Search01Icon,
  Sun03Icon,
  Moon02Icon,
  ComputerIcon,
  UserEdit01Icon,
  PlusSignIcon,
  Mic01Icon,
  Camera01Icon,
  PencilEdit02Icon,
  FilterHorizontalIcon,
  AutoConversationsIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { cn } from "@/src/lib/utils";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MAIN_NAV = [
  { icon: PlusSignIcon, name: "home" },
  { icon: Search01Icon, name: "search" },
  { icon: Notification03Icon, name: "notifications" },
  { icon: UserEdit01Icon, name: "profile" },
  { icon: Sun03Icon, name: "theme" },
];

const HOME_ITEMS = [
  { icon: PencilEdit02Icon, text: "Note" },
  { icon: Mic01Icon, text: "Voice" },
  { icon: Camera01Icon, text: "Screenshot" },
];

const SEARCH_OPTIONS = [
  { icon: FilterHorizontalIcon, text: "Filter" },
  { icon: AutoConversationsIcon, text: "Trending" },
];

const NOTIFICATION_TYPES = ["Messages", "System Alerts"];

const PROFILE_LINKS = ["My Account", "Settings", "Subscription / Billing"];

const THEME_OPTIONS = [
  { key: "light", icon: Sun03Icon, text: "Light" },
  { key: "dark", icon: Moon02Icon, text: "Dark" },
  { key: "system", icon: ComputerIcon, text: "System" },
];

const BottomMenu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementRef] = useMeasure();
  const [hiddenRef, hiddenBounds] = useMeasure();
  const [view, setView] = useState<
    "default" | "home" | "search" | "notifications" | "profile" | "theme"
  >("default");

  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setView("default");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const sharedHover =
    "group transition-all duration-75 px-3 py-2 text-[15px] text-muted-foreground w-full text-left rounded-[12px] hover:bg-muted/80 hover:text-foreground";

  const content = useMemo(() => {
    switch (view) {
      case "default":
        return null;

      case "home":
        return (
          <div className="space-y-0.5 min-w-[210px] p-[6px] py-0.5">
            {HOME_ITEMS.map(({ icon: Icon, text }) => (
              <button
                key={text}
                className={`${sharedHover} flex items-center gap-3`}
              >
                <HugeiconsIcon
                  icon={Icon}
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-all duration-75"
                />
                <span className="transition-all duration-75">{text}</span>
              </button>
            ))}
          </div>
        );

      case "search":
        return (
          <div className="space-y-2 min-w-[270px] p-[8px] py-1">
            <div className="relative">
              <HugeiconsIcon
                icon={Search01Icon}
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-[6px] text-[14.5px] text-foreground bg-muted/80 border border-border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="flex gap-1.5">
              {SEARCH_OPTIONS.map(({ icon: Icon, text }) => (
                <button
                  key={text}
                  className={`${sharedHover} flex-1 flex items-center justify-center gap-1.5 bg-muted hover:bg-accent`}
                >
                  <HugeiconsIcon
                    icon={Icon}
                    size={14}
                    strokeWidth={2}
                    className="text-muted-foreground group-hover:text-foreground transition-all duration-75"
                  />
                  <span className="transition-all duration-75">{text}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-0.5 min-w-[210px] p-[6px] py-0.5">
            {NOTIFICATION_TYPES.map((t) => (
              <button key={t} className={sharedHover}>
                <span className="transition-all duration-75">{t}</span>
              </button>
            ))}
          </div>
        );

      case "profile":
        return (
          <div className="space-y-0.5 min-w-[230px] p-[6px] py-0.5">
            {PROFILE_LINKS.map((t) => (
              <button key={t} className={sharedHover}>
                <span className="transition-all duration-75">{t}</span>
              </button>
            ))}
            <div className="border-t border-border my-[2px]" />
            <button className="px-3 py-2 text-[15px] text-destructive w-full text-left rounded-[12px] hover:bg-destructive/10 transition-all duration-75">
              Logout
            </button>
          </div>
        );

      case "theme":
        return (
          <div className="flex items-center justify-between gap-1.5 min-w-[270px] p-[6px] py-0.5">
            {THEME_OPTIONS.map(({ key, icon: Icon, text }) => (
              <button
                key={key}
                onClick={() => setTheme(key as "light" | "dark" | "system")}
                className={`flex items-center justify-center gap-2 rounded-[12px] px-3 py-2 transition-all duration-100 ${
                  theme === key
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <HugeiconsIcon
                  icon={Icon}
                  size={18}
                  className={`transition-all duration-75 ${
                    theme === key ? "text-foreground" : "text-muted-foreground"
                  }`}
                />
                <span>{text}</span>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  }, [view, theme]);

  return (
    <div
      ref={containerRef}
      className={cn("fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50")}
    >
      <div
        ref={hiddenRef}
        className="absolute left-[-9999px] top-[-9999px] invisible pointer-events-none"
      >
        <div className="rounded-[18px] bg-background/95 border border-border py-1">
          {content}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view !== "default" && (
          <motion.div
            key="submenu"
            initial={{
              opacity: 0,
              scaleY: 0.9,
              scaleX: 0.95,
              height: 0,
              width: 0,
              originY: 1,
              originX: 0.5,
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
              scaleX: 1,
              height: hiddenBounds.height || "auto",
              width: hiddenBounds.width || "auto",
              originY: 1,
              originX: 0.5,
            }}
            exit={{
              opacity: 0,
              scaleY: 0.9,
              scaleX: 0.95,
              height: 0,
              width: 0,
              originY: 1,
              originX: 0.5,
            }}
            transition={{
              duration: 0.3,
              ease: [0.45, 0, 0.25, 1],
            }}
            style={{
              transformOrigin: "bottom center",
            }}
            className="absolute bottom-[70px] overflow-hidden"
          >
            <div
              ref={elementRef}
              className="rounded-[18px] bg-background/95 backdrop-blur-xl border border-border"
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={view}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    filter: "blur(12px)",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="py-1"
                >
                  {content}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-1 bg-background/95 backdrop-blur-xl border border-border rounded-[18px] p-1 mt-3 z-10 shadow-lg">
        {MAIN_NAV.map(({ icon: Icon, name }) => (
          <button
            key={name}
            className={`p-3 rounded-[16px] transition-all ${
              view === name ? "bg-accent" : "hover:bg-muted"
            }`}
            onClick={() => setView(view === name ? "default" : (name as any))}
          >
            <HugeiconsIcon
              icon={Icon}
              size={22}
              className={`transition-all ${
                view === name ? "text-foreground" : "text-muted-foreground"
              }`}
            />
          </button>
        ))}

        <div className="w-px h-6 bg-border mx-1" />
        
        <a href="mailto:allenchandev25@gmail.com" target="_blank" className="p-3 rounded-[16px] transition-all hover:bg-muted text-muted-foreground hover:text-foreground">
          <MailIcon />
        </a>
        <a href="https://www.linkedin.com/in/allen-chandev-36100a347/" target="_blank" className="p-3 rounded-[16px] transition-all hover:bg-muted text-muted-foreground hover:text-foreground">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/allenchandev25-del" target="_blank" className="p-3 rounded-[16px] transition-all hover:bg-muted text-muted-foreground hover:text-foreground">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
