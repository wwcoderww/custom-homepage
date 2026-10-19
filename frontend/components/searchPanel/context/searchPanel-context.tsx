'use client';
import { authClient } from '@/lib/auth-client';
import { useSearchParams } from 'next/navigation';
import { createContext, useContext } from 'react';

const SearchPanelContext = createContext<{
  paramName: string;
  tableName: string;
} | null>(null);

function useSearchPanelContext() {
  // To make new Param
  const params = useSearchParams();
  // Define context
  const context = useContext(SearchPanelContext);
  if (!context) throw new Error('Using SearchPanelContext outside of provider');
  // Variables
  const paramMode = 'mode' + context.paramName;
  const isEditing = params.get(paramMode) === 'edit';
  const isAdding = params.get(paramMode) === 'add';
  const userId = authClient.useSession().data?.user?.id;

  return { ...context, paramMode, isEditing, isAdding, userId };
}

export { SearchPanelContext, useSearchPanelContext };
