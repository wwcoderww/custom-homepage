export default function reformatLink(link: string) {
  return link.startsWith('http') ? link : 'https://' + link;
}
