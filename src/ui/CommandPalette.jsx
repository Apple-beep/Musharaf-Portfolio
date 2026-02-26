import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_ITEMS = [
  { id: "about", prefix: "→", label: "About", action: { type: "scroll", target: "about" } },
  { id: "experience", prefix: "→", label: "Experience", action: { type: "scroll", target: "experience" } },
  { id: "projects", prefix: "→", label: "Projects", action: { type: "scroll", target: "projects" } },
  { id: "skills", prefix: "→", label: "Skills", action: { type: "scroll", target: "skills" } },
  {
    id: "certifications",
    prefix: "→",
    label: "Certifications",
    action: { type: "scroll", target: "certifications" },
  },
  { id: "contact", prefix: "→", label: "Contact", action: { type: "scroll", target: "contact" } },
  {
    id: "resume",
    prefix: "↓",
    label: "Download Resume",
    action: { id: "resume", type: "url", target: "/resume.pdf" },
  },
  {
    id: "github",
    prefix: "⌥",
    label: "GitHub Profile",
    action: { type: "url", target: "https://github.com/Apple-beep", openInNewTab: true },
  },
  {
    id: "linkedin",
    prefix: "⌥",
    label: "LinkedIn Profile",
    action: { type: "url", target: "https://linkedin.com/in/musharaf-khan-pathan", openInNewTab: true },
  },
];

export default function CommandPalette({ commands, onExecute }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);

  const items = useMemo(() => {
    if (!Array.isArray(commands) || !commands.length) return DEFAULT_ITEMS;

    const commandMap = new Map(commands.map((item) => [item.id, item]));
    return DEFAULT_ITEMS.map((item) => ({
      ...item,
      action: commandMap.get(item.id) ?? item.action,
    }));
  }, [commands]);

  const filteredItems = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items;
    return items.filter((item) => item.label.toLowerCase().includes(value));
  }, [items, query]);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const executeItem = useCallback(
    (item) => {
      if (!item) return;
      onExecute(item.action);
      closePalette();
    },
    [closePalette, onExecute],
  );

  useEffect(() => {
    const onKeydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }

      if (!open) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((value) => (filteredItems.length ? (value + 1) % filteredItems.length : 0));
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((value) =>
          filteredItems.length ? (value - 1 + filteredItems.length) % filteredItems.length : 0,
        );
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        executeItem(filteredItems[activeIndex]);
      }
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [activeIndex, closePalette, executeItem, filteredItems, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    setActiveIndex(0);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[999] bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) closePalette();
            }}
          >
            <motion.div
              className="absolute left-1/2 top-[20%] w-[min(560px,90vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(13,13,24,0.98)] shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,212,255,0.08)]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, skills, projects..."
                autoFocus
                className="w-full border-none border-b border-[rgba(255,255,255,0.08)] bg-transparent px-5 py-[18px] text-[1rem] text-[#F1F5F9] outline-none placeholder:text-[#475569]"
              />

              <div className="max-h-[360px] overflow-y-auto p-2">
                {filteredItems.length ? (
                  filteredItems.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => executeItem(item)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-[8px] px-[14px] py-[11px] text-left text-[0.9rem] transition-all duration-150 ${
                          isActive
                            ? "bg-[rgba(0,212,255,0.08)] text-[#F1F5F9]"
                            : "text-[#94A3B8] hover:bg-[rgba(0,212,255,0.08)] hover:text-[#F1F5F9]"
                        }`}
                      >
                        <span
                          className="inline-block w-5 text-[0.8rem] text-[#00D4FF]"
                          style={{ fontFamily: "'Courier New', monospace" }}
                        >
                          {item.prefix}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-[#94A3B8]">No results found.</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-28 right-4 z-40 inline-flex items-center gap-2 rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[rgba(13,13,24,0.9)] px-[14px] py-2 text-[0.75rem] text-[#94A3B8] backdrop-blur-[10px] transition-all duration-200 hover:border-[rgba(0,212,255,0.3)] hover:text-[#00D4FF] sm:bottom-24 sm:right-5 md:bottom-40 md:right-7"
        >
          <span>Press</span>
          <span
            className="rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.07)] px-[6px] py-[1px] text-[0.72rem] text-[#94A3B8]"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            {isMac ? "⌘K" : "Ctrl+K"}
          </span>
          <span>to explore</span>
        </button>
      ) : null}
    </>
  );
}
