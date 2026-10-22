export type QuickLinkType = {
  name: string;
  link: string;
  id: string;
  displayOrder: number;
  group: number;
};

export type BackEndResponseType = {
  success: boolean;
  errors?: string | { field: string; message: string }[] | unknown;
};
