import { useCallback, useEffect, useMemo, useState } from 'react'
import { useInView } from 'framer-motion'
import { forwardRef } from '../../utils/system'
import type { ImageProps } from './types'
import { useDOMRef } from '../../utils/dom'
import { defaultPNG, normalizeWithRemoteSrc, loadAssetFile } from './helper'

const LazyImage = forwardRef<ImageProps, 'img'>(
  ({
    prefetch,
    src,
    alt = '',
    lazyMargin = '200px',
    lazyRoot,
    defaultImage = defaultPNG,
    ...imageProps
  }, ref
) => {
  const domRef = useDOMRef(ref)
  const inView = useInView(domRef, {
    root: lazyRoot,
    once: true,
    margin: lazyMargin,
  })
  const [imgSrc, setImgSrc] = useState<string>()
  const [loaded, setLoaded] = useState(false)

  const setImage = useCallback(
    (src: string) => {
      setImgSrc(src)
      setLoaded(true)
    },
    []
  )

  useEffect(
    () => {
      setLoaded(false)
    },
    [src]
  )

  const propSrc = useMemo(
    () => src && (typeof src === 'string' ? src : src.src),
    [src]
  )


  useEffect(
    () => {
      if (!loaded && inView && propSrc) {
        loadAssetFile(propSrc, setImage)
      }
    },
    [inView, loaded, setImage, propSrc]
  )

  useEffect(
    () => {
      if (!loaded && prefetch && propSrc) {
        loadAssetFile(propSrc, setImage)
      }
    },
    [loaded, prefetch, setImage, propSrc]
  )

  return (
    <img
      ref={domRef}
      src={loaded ? imgSrc : normalizeWithRemoteSrc(defaultImage).src}
      {...imageProps}
      alt={alt} />
  )
})

export default LazyImage