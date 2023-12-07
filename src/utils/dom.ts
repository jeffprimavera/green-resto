/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This code is taken from @nextui-org/nextui
 */

import {
    Ref,
    RefObject,
    MutableRefObject,
    useImperativeHandle,
    useRef,
    CSSProperties,
  } from "react";
  import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
  
  export function useDOMRef<T extends HTMLElement = HTMLElement>(
    ref?: RefObject<T | null> | Ref<T | null>,
  ) {
    const domRef = useRef<T>(null);
  
    useImperativeHandle(ref, () => domRef.current);
  
    return domRef;
  }
  
  export interface ContextValue<T> {
    ref?: MutableRefObject<T>;
  }
  
  // Syncs ref from context with ref passed to hook
  export function useSyncRef<T>(context: ContextValue<T | null>, ref: RefObject<T>) {
    useIsomorphicLayoutEffect(() => {
      if (context && context.ref && ref && ref.current) {
        context.ref.current = ref.current;
  
        return () => {
          if (context.ref?.current) {
            context.ref.current = null;
          }
        };
      }
    }, [context, ref]);
  }
  
  export function on<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    // eslint-disable-next-line @typescript-eslint/ban-types
    ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
  ): void {
    if (obj && obj.addEventListener) {
      obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
    }
  }
  
  export function off<T extends Window | Document | HTMLElement | EventTarget>(
    obj: T | null,
    // eslint-disable-next-line @typescript-eslint/ban-types
    ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
  ): void {
    if (obj && obj.removeEventListener) {
      obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
    }
  }
  
  export function stop(e: React.MouseEvent | React.PointerEvent | React.DragEvent | React.TouchEvent) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  
  export const GPUAcceleration: CSSProperties = {
    // @ts-ignore use webkit prefix and dont conflict with transform
    '--webkit-transform': 'translateZ(0)',
    // WebkitTransform: 'translateZ(0)'
  }
  
  export * from './device'