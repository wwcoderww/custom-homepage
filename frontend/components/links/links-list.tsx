import SidebarOverlay from './linkList/overlay';
import SidebarUl from './linkList/links-list';

export default async function LinksList() {
  return (
    <>
      <SidebarOverlay />
      <SidebarUl />
    </>
  );
}
