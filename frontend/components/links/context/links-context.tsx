'use client';
import { loadLinks } from '@/actions/searchPanel-actions';
import { authClient } from '@/lib/auth-client';
import { QuickLinkType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode, createContext, useContext, useState } from 'react';
import { useFilteredLinks } from '../hooks/useFilterLinks';

type LinksProviderType = {
  children: ReactNode;
  paramName: string;
  group: number;
};

type LinksContextType = {
  selected: QuickLinkType | null;
  filteredLinks: QuickLinkType[];
  selectedID: string | null;
  setSelectedID: (value: string | null) => void;
  paramName: string;
  group: number;
  paramMode: string;
  isAdding: boolean;
  isEditing: boolean;
  isViewing: boolean;
  userId: string;
};

const LinksContext = createContext<LinksContextType | null>(null);

function LinksProvider({ children, paramName, group }: LinksProviderType) {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const { data: authData } = authClient.useSession();
  const userId = authData?.user?.id;

  const { data: links = [] } = useQuery({
    queryKey: ['links', userId],
    queryFn: async () => {
      if (!userId) return [];
      const databaseLinks = await loadLinks(userId);
      localStorage.setItem('links', JSON.stringify(databaseLinks));
      return databaseLinks;
    },
    enabled: !!userId,
    placeholderData: () => {
      if (typeof window !== 'undefined') {
        const localLinks = localStorage.getItem('links');
        if (localLinks) return JSON.parse(localLinks);
      }
      return [];
    },
  });

  const params = useSearchParams();
  const paramMode = 'mode' + paramName;
  const isViewing = params.get(paramMode) === 'view';
  const isAdding = params.get(paramMode) === 'add';
  const isEditing = params.get(paramMode) === 'edit';
  const filteredLinks = useFilteredLinks(links, group, paramName);
  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  if (!userId)
    return (
      <div className="flex h-full items-center justify-center text-lg">
        <Link href={'/auth'}>Please login</Link>
      </div>
    );

  return (
    <LinksContext.Provider
      value={{
        selected,
        selectedID,
        setSelectedID,
        filteredLinks,
        paramName,
        group,
        paramMode,
        isEditing,
        isAdding,
        userId,
        isViewing,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
}

function useLinksContext() {
  const context = useContext(LinksContext);
  if (!context) throw new Error('LinkListContext used outside provider');
  return context;
}

export { LinksProvider, useLinksContext };
