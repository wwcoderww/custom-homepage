'use client';
import { loadLinks } from '@/actions/searchPanel-actions';
import { authClient } from '@/lib/auth-client';
import { QuickLinkType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext, useState } from 'react';
import { useFilteredLinks } from '../hooks/useFilterLinks';
import { useSearchParams } from 'next/navigation';

type LinksProviderType = {
  children: ReactNode;
  paramName: string;
  tableName: string;
};

type LinksContextType = {
  selected: QuickLinkType | null;
  filteredLinks: QuickLinkType[];
  selectedID: string | null;
  setSelectedID: (value: string | null) => void;
  paramName: string;
  tableName: string;
  paramMode: string;
  isAdding: boolean;
  isEditing: boolean;
  userId: string;
};

const LinksContext = createContext<LinksContextType | null>(null);

function LinksProvider({ children, paramName, tableName }: LinksProviderType) {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const { data: authData, isPending } = authClient.useSession();
  const userId = authData?.user?.id;

  const { data: links = [], isLoading } = useQuery({
    queryKey: ['links', tableName, userId],
    queryFn: async () => {
      if (!userId) return [];
      return await loadLinks(userId, tableName);
    },
    enabled: !!userId,
  });
  const params = useSearchParams();
  const paramMode = 'mode' + paramName;
  const isEditing = params.get(paramMode) === 'edit';
  const isAdding = params.get(paramMode) === 'add';
  const filteredLinks = useFilteredLinks(links);
  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  if (isPending || isLoading) return <div>Loading...</div>;
  if (!userId) return <div>Please login</div>;

  return (
    <LinksContext.Provider
      value={{
        selected,
        selectedID,
        setSelectedID,
        filteredLinks,
        paramName,
        tableName,
        paramMode,
        isEditing,
        isAdding,
        userId,
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
