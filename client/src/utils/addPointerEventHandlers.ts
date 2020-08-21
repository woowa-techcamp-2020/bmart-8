type Handler = (evt: PointerEvent) => void;
type Args = {
  onDown: Handler;
  onMove: Handler;
  onUp: Handler;
};

// This returns remove handler function
export default function addPointerEventHandlers(
  dom: any,
  { onDown, onMove, onUp }: Args
): any {
  dom.addEventListener('pointerdown', onDown);
  dom.addEventListener('pointermove', onMove);
  dom.addEventListener('pointerup', onUp);

  return () => {
    dom.removeEventListener('pointerdown', onDown);
    dom.removeEventListener('pointermove', onMove);
    dom.removeEventListener('pointerup', onUp);
  };
}
