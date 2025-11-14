import { clsx, type ClassValue } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"
import {create} from "zustand"

type modalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const documentTitle = (title:string) => {

  React.useEffect(() => {
    document.title = `BandBoost | ${title}`;
  }, [title]);
}

export const useOpenNotification = create<modalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useOpenMobile = create<modalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
