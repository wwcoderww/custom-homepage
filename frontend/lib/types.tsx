export type QuickLinkType = {
  name: string;
  link: string;
  id: string;
  display_order: number;
};

export type BackEndResponseType = {
  success: boolean;
  errors?: string | { field: string; message: string }[] | unknown;
};
