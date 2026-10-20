"use client";

import React, { createContext, useContext, useState } from "react";
import ApplicationModal from "@/components/ApplicationModal";
import SyllabusModal from "@/components/SyllabusModal";

interface ModalContextType {
  openApplyModal: (track?: string) => void;
  closeApplyModal: () => void;
  openSyllabusModal: (programmeName: string) => void;
  closeSyllabusModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("builder");

  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState("Entrepreneur Builder");

  const openApplyModal = (track = "builder") => {
    setSelectedTrack(track);
    setApplyOpen(true);
  };

  const closeApplyModal = () => {
    setApplyOpen(false);
  };

  const openSyllabusModal = (programmeName: string) => {
    setSelectedProgramme(programmeName);
    setSyllabusOpen(true);
  };

  const closeSyllabusModal = () => {
    setSyllabusOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openApplyModal,
        closeApplyModal,
        openSyllabusModal,
        closeSyllabusModal,
      }}
    >
      {children}
      <ApplicationModal
        isOpen={applyOpen}
        onClose={closeApplyModal}
        defaultTrack={selectedTrack}
      />
      <SyllabusModal
        isOpen={syllabusOpen}
        onClose={closeSyllabusModal}
        programmeName={selectedProgramme}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
