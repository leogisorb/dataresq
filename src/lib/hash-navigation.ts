export function getPathFromHref(href: string): string {
  const hashIndex = href.indexOf('#');
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  return path || '/';
}

export function getHashFromHref(href: string): string | null {
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) return null;
  const hash = href.slice(hashIndex + 1);
  return hash.length > 0 ? hash : null;
}

export function scrollToHash(
  hash: string,
  options?: { updateHistory?: boolean },
): void {
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (options?.updateHistory !== false) {
    window.history.pushState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${id}`,
    );
  }
}
