'use client';
import { useSearchParams } from 'next/navigation';
import { createContext, useContext } from 'react';

const SearchPanelContext = createContext<{
  formFunc: (formData: FormData) => Promise<void>;
  paramName: string;
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

  return { ...context, paramMode, isEditing, isAdding };
}

export { SearchPanelContext, useSearchPanelContext };
