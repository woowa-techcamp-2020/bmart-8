// useEffect에 사용할 util function
export default function addEventListenerEvent(
  dom: HTMLElement | Document,
  type: string,
  fn: (e?: Event) => void
) {
  dom.addEventListener(type, fn);
  return () => dom.removeEventListener(type, fn);
}
