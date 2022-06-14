export const goToAnchor = (id: string) => {
  const anchorElement = document.getElementById(id)
  if (!!anchorElement) {
    const yOffset = -100;
    const y = anchorElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
}