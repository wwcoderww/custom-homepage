'use client';
import { QuickLinkType } from '@/lib/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFilteredLinks } from '../hooks/useFilterLinks';
import { loadLinks } from '@/actions/searchPanel-actions';
import { authClient } from '@/lib/auth-client';
import { useQuery } from '@tanstack/react-query';

type LinkListProviderProps = {
  children: ReactNode;
  paramName: string;
  tableName: string;
};

type LinkListContextType = {
  selected: QuickLinkType | null;
  filteredLinks: QuickLinkType[];
  selectedID: string | null;
  setSelectedID: (value: string | null) => void;
  paramName: string;
  tableName: string;
};

const LinkListContext = createContext<LinkListContextType | null>(null);

function LinkListProvider({
  children,
  paramName,
  tableName,
}: LinkListProviderProps) {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const { data } = authClient.useSession();
  const userId = data?.user?.id;

  const { data: links = [] } = useQuery({
    queryKey: ['links', tableName, userId],
    queryFn: async () => {
      if (!userId) return [];
      return await loadLinks(userId, tableName);
    },
    enabled: !!userId,
  });

  const filteredLinks = useFilteredLinks(links);
  const selected = filteredLinks.find((item) => item.id === selectedID) || null;

  return (
    <LinkListContext.Provider
      value={{
        selected,
        selectedID,
        setSelectedID,
        filteredLinks,
        paramName,
        tableName,
      }}
    >
      {children}
    </LinkListContext.Provider>
  );
}

function useLinkListContext() {
  const context = useContext(LinkListContext);
  if (!context) throw new Error('LinkListContext used outside provider');
  return context;
}

export { LinkListProvider, useLinkListContext };
