/**
 * Unbind `target` event `eventName`'s callback `listener`.
 */

export default function on<K extends keyof DocumentEventMap>(
  target: Element | Window,
  eventName: K,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions = false
): void {
  target.removeEventListener(eventName, listener, options);
}
