import {
  Activity,
  ArrowRight,
  Braces,
  Check,
  CreditCard,
  Database,
  MonitorSmartphone,
  Server,
  ShieldCheck,
} from "lucide-react";

import type { ArticleTheme } from "@/data/articles";
import type { Locale } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ArticleArtworkProps = {
  theme: ArticleTheme;
  locale: Locale;
  variant?: "card" | "hero";
  className?: string;
};

const labels = {
  id: {
    cqrs: "Diagram jalur command dan query pada CQRS",
    contract: "Diagram kontrak yang menghubungkan backend dan frontend",
    ledgerbank:
      "Diagram transfer aman dari API LedgerBank ke database dan event broker",
    command: "COMMAND",
    query: "QUERY",
    write: "Write model",
    read: "Read model",
    event: "event",
    backend: "BACKEND",
    frontend: "FRONTEND",
    contractLabel: "API CONTRACT",
    verified: "Terverifikasi",
    transfer: "TRANSFER",
    protected: "Konsisten & terlindungi",
  },
  en: {
    cqrs: "Diagram of command and query paths in CQRS",
    contract: "Diagram of a contract connecting backend and frontend",
    ledgerbank:
      "Diagram of a secure transfer from the LedgerBank API to the database and event broker",
    command: "COMMAND",
    query: "QUERY",
    write: "Write model",
    read: "Read model",
    event: "event",
    backend: "BACKEND",
    frontend: "FRONTEND",
    contractLabel: "API CONTRACT",
    verified: "Verified",
    transfer: "TRANSFER",
    protected: "Consistent & protected",
  },
} as const;

export function ArticleArtwork({
  theme,
  locale,
  variant = "card",
  className,
}: ArticleArtworkProps) {
  const t = labels[locale];
  const isHero = variant === "hero";

  if (theme === "cqrs") {
    return (
      <div
        role="img"
        aria-label={t.cqrs}
        className={cn(
          "relative overflow-hidden bg-slate-950 text-white",
          isHero ? "min-h-[22rem] rounded-2xl p-6 sm:p-8" : "h-44 p-5",
          className,
        )}
      >
        <div
          className="absolute -right-16 -top-16 size-52 rounded-full bg-cyan-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-10 size-56 rounded-full bg-blue-600/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: isHero ? "32px 32px" : "24px 24px",
          }}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[0.65rem] font-bold tracking-[0.2em] text-blue-200/70">
            <span>CQRS</span>
            <span className="font-mono">01 / 02</span>
          </div>

          <div
            className={cn(
              "grid items-center",
              isHero
                ? "my-auto grid-cols-[1fr_auto_1fr] gap-3 sm:gap-5"
                : "mt-7 grid-cols-[1fr_auto_1fr] gap-2",
            )}
          >
            <div className="rounded-xl border border-blue-300/20 bg-blue-400/10 p-3 backdrop-blur-sm sm:p-4">
              <div className="flex items-center gap-2 text-blue-200">
                <Braces className={cn(isHero ? "size-5" : "size-4")} />
                <span className="text-[0.6rem] font-bold tracking-[0.16em] sm:text-xs">
                  {t.command}
                </span>
              </div>
              {isHero && (
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/75">
                  <Database className="size-4 text-blue-300" />
                  {t.write}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-2 text-cyan-300">
              <ArrowRight className={cn(isHero ? "size-6" : "size-4")} />
              {isHero && (
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2 py-1 font-mono text-[0.6rem]">
                  {t.event}
                </span>
              )}
            </div>

            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 backdrop-blur-sm sm:p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <Database className={cn(isHero ? "size-5" : "size-4")} />
                <span className="text-[0.6rem] font-bold tracking-[0.16em] sm:text-xs">
                  {t.query}
                </span>
              </div>
              {isHero && (
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/75">
                  <MonitorSmartphone className="size-4 text-cyan-300" />
                  {t.read}
                </div>
              )}
            </div>
          </div>

          {isHero && (
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
              <span>intent → state</span>
              <span>projection → view</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (theme === "ledgerbank") {
    return (
      <div
        role="img"
        aria-label={t.ledgerbank}
        className={cn(
          "relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-cyan-950 text-white",
          isHero ? "min-h-[22rem] rounded-2xl p-6 sm:p-8" : "h-44 p-5",
          className,
        )}
      >
        <div
          className="absolute -right-16 -top-16 size-52 rounded-full bg-emerald-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -left-10 size-56 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(135deg, white 1px, transparent 1px)",
            backgroundSize: isHero ? "28px 28px" : "20px 20px",
          }}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between text-[0.65rem] font-bold tracking-[0.2em] text-emerald-200/70">
            <span>LEDGERBANK</span>
            <span className="font-mono">03 / 03</span>
          </div>

          <div
            className={cn(
              "grid items-center",
              isHero
                ? "my-auto grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 sm:gap-4"
                : "mt-6 grid-cols-[1fr_auto_1fr_auto_1fr] gap-1.5",
            )}
          >
            <div className="grid justify-items-center gap-2 text-center">
              <span
                className={cn(
                  "grid place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10",
                  isHero ? "size-14" : "size-9",
                )}
              >
                <CreditCard className={cn(isHero ? "size-6" : "size-4")} />
              </span>
              <span className="text-[0.55rem] font-bold tracking-[0.12em] text-emerald-200 sm:text-[0.65rem]">
                {t.transfer}
              </span>
            </div>

            <ArrowRight className="size-3 text-emerald-300 sm:size-4" />

            <div
              className={cn(
                "grid place-items-center rounded-xl border border-white/15 bg-white/10",
                isHero ? "min-h-24 px-5" : "min-h-14 px-3",
              )}
            >
              <Database
                className={cn(
                  "text-cyan-300",
                  isHero ? "size-8" : "size-5",
                )}
              />
              {isHero && (
                <span className="mt-2 font-mono text-[0.6rem] text-white/50">
                  POSTGRESQL
                </span>
              )}
            </div>

            <ArrowRight className="size-3 text-cyan-300 sm:size-4" />

            <div className="grid justify-items-center gap-2 text-center">
              <span
                className={cn(
                  "grid place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10",
                  isHero ? "size-14" : "size-9",
                )}
              >
                <Activity className={cn(isHero ? "size-6" : "size-4")} />
              </span>
              <span className="text-[0.55rem] font-bold tracking-[0.12em] text-cyan-200 sm:text-[0.65rem]">
                EVENT
              </span>
            </div>
          </div>

          {isHero && (
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
              <span>atomic transfer → outbox → event</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-300/80">
                <ShieldCheck className="size-3.5" />
                {t.protected}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={t.contract}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 text-white",
        isHero ? "min-h-[22rem] rounded-2xl p-6 sm:p-8" : "h-44 p-5",
        className,
      )}
    >
      <div
        className="absolute -left-12 top-0 size-48 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-0 size-56 rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: isHero ? "24px 24px" : "18px 18px",
        }}
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[0.65rem] font-bold tracking-[0.2em] text-indigo-200/70">
          <span>CONTRACT FIRST</span>
          <span className="font-mono">02 / 02</span>
        </div>

        <div
          className={cn(
            "grid items-center",
            isHero
              ? "my-auto grid-cols-[1fr_auto_1.1fr_auto_1fr] gap-2 sm:gap-3"
              : "mt-6 grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-1.5",
          )}
        >
          <div className="grid justify-items-center gap-2 text-center">
            <span
              className={cn(
                "grid place-items-center rounded-xl border border-indigo-300/20 bg-indigo-300/10",
                isHero ? "size-14" : "size-9",
              )}
            >
              <Server className={cn(isHero ? "size-6" : "size-4")} />
            </span>
            <span className="text-[0.55rem] font-bold tracking-[0.12em] text-indigo-200 sm:text-[0.65rem]">
              {t.backend}
            </span>
          </div>

          <ArrowRight className="size-3 text-indigo-300 sm:size-4" />

          <div
            className={cn(
              "rounded-xl border border-cyan-200/30 bg-white/10 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-sm",
              isHero ? "px-3 py-5 sm:px-5" : "px-2 py-3",
            )}
          >
            <Braces
              className={cn(
                "mx-auto text-cyan-300",
                isHero ? "size-7" : "size-4",
              )}
            />
            <p
              className={cn(
                "font-bold tracking-[0.1em]",
                isHero ? "mt-3 text-xs" : "mt-1 text-[0.5rem]",
              )}
            >
              {t.contractLabel}
            </p>
            {isHero && (
              <p className="mt-2 font-mono text-[0.6rem] text-white/45">
                openapi.yaml
              </p>
            )}
          </div>

          <ArrowRight className="size-3 text-cyan-300 sm:size-4" />

          <div className="grid justify-items-center gap-2 text-center">
            <span
              className={cn(
                "grid place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10",
                isHero ? "size-14" : "size-9",
              )}
            >
              <MonitorSmartphone
                className={cn(isHero ? "size-6" : "size-4")}
              />
            </span>
            <span className="text-[0.55rem] font-bold tracking-[0.12em] text-cyan-200 sm:text-[0.65rem]">
              {t.frontend}
            </span>
          </div>
        </div>

        {isHero && (
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
            <span>schema + behavior</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-300/80">
              <Check className="size-3.5" />
              {t.verified}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
