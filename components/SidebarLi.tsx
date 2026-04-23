import React from 'react';

type SideBarLiProps = {
  label: string;
};

export default function SidebarLi({ label }: SideBarLiProps) {
  return <li className="p-4">{label}</li>;
}
