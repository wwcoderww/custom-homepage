'use client';
import { useFilteredLinks } from '@/hooks/useFilteredLinks';
import { QuickLinkType } from '@/lib/types';
import { ReactNode, createContext, useContext, useState } from 'react';

type SidebarContextType = {
  paramName: string;
  filteredLinks: QuickLinkType[];
  selected: QuickLinkType | null;
  selectedID: string | null;
  setSelectedID: (id: string | null) => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('Using sidebar context outside provider');
  return context;
}

type SideBarProviderProps = {
  children: ReactNode;
  initialLinks: QuickLinkType[];
  paramName: string;
};

function SidebarProvider({
  initialLinks,
  paramName,
  children,
}: SideBarProviderProps) {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const filteredLinks = useFilteredLinks(initialLinks);
  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  return (
    <SidebarContext.Provider
      value={{
        selectedID,
        setSelectedID,
        filteredLinks,
        selected,
        paramName,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, useSidebarContext };
