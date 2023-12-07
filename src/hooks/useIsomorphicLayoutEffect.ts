import { useEffect, useLayoutEffect } from 'react'

const isSSR = () =>
  typeof window === 'undefined' ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)

/**
 * Use this to read layout from the DOM and synchronously
 * re-render if the isSSR returns true. Updates scheduled
 * inside `useIsomorphicLayoutEffect` will be flushed
 * synchronously in the browser, before the browser has
 * a chance to paint.
 */
const useIsomorphicLayoutEffect = isSSR() ? useEffect : useLayoutEffect

export default useIsomorphicLayoutEffect