"use client";

import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

const WHATSAPP = "https://wa.me/919159387204";
const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactButton(): ReactNode {
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    window.open(WHATSAPP, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      type="button"
      layout
      onClick={handleClick}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-label="Contact via WhatsApp"
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center bg-foreground px-5 text-sm font-medium text-background"
    >
      <motion.span
        layout="position"
        className="relative inline-flex items-center"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {open ? (
            <motion.span
              key="whatsapp"
              layout="position"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span className="tabular-nums">Chat on WhatsApp</span>
            </motion.span>
          ) : (
            <motion.span
              key="contact"
              layout="position"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Contact</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
}
