const root = document.getElementById('root') as HTMLDivElement;

const anchorTags = (href: string, textNode: string): string => {
  let result = `<a href="${href}">${textNode}</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result = `<li>${children}</li>`;
  return result;
};

const totalElement = () => {
  let result = liTags(anchorTags('#YS', '연승'));
  return result;
};

root.innerHTML = `
<ul>
  ${totalElement()}
</ul>
`;
