'use client';
import { QuickLinkType } from '@/lib/types';
import { ReactNode, createContext, useContext, useState } from 'react';
import { useFilteredLinks } from '../hooks/useFilterLinks';

type LinkListContextType = {
  selected: QuickLinkType | null;
  filteredLinks: QuickLinkType[];
  selectedID: string | null;
  setSelectedID: (value: string | null) => void;
  paramName: string;
  tableName: string;
  functionName: string;
};

const LinkListContext = createContext<LinkListContextType | null>(null);

function useLinkListContext() {
  const context = useContext(LinkListContext);
  if (!context) throw new Error('LinkListContext used outside provider');
  return context;
}

type LinkListProviderProps = {
  children: ReactNode;
  unFilteredLinks: QuickLinkType[];
  paramName: string;
  functionName: string;
  tableName: string;
};

function LinkListProvider({
  children,
  unFilteredLinks,
  paramName,
  functionName,
  tableName,
}: LinkListProviderProps) {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const filteredLinks = useFilteredLinks(unFilteredLinks);
  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  return (
    <LinkListContext.Provider
      value={{
        selected,
        selectedID,
        setSelectedID,
        filteredLinks,
        paramName,
        functionName,
        tableName,
      }}
    >
      {children}
    </LinkListContext.Provider>
  );
}

export { LinkListProvider, useLinkListContext };
