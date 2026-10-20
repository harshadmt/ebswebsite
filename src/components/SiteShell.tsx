"use client";

import React from "react";
import { ModalProvider, useModal } from "@/context/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteProgressBar from "@/components/RouteProgressBar";
import InitialPreloader from "@/components/InitialPreloader";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { openApplyModal } = useModal();

  return (
    <div className="min-h-screen flex flex-col bg-[#f1fcf8] text-[#131d1c]">
      {/* Precision hairline route transition bar */}
      <RouteProgressBar />

      {/* Initial smooth luxury preloader */}
      <InitialPreloader />

      <Header onOpenApply={() => openApplyModal("builder")} />
      <main className="flex-1 w-full pt-24 sm:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ShellInner>{children}</ShellInner>
    </ModalProvider>
  );
}
