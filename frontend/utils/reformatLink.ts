export default function reformatLink(link: string) {
  let newLink = link.startsWith('http') ? link : 'https://' + link;
  if (!link.includes('.')) newLink += '.com';
  return newLink;
}
