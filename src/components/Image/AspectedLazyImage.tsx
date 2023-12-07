import { useCallback, useEffect, useMemo, useState } from 'react'
import { useInView } from 'framer-motion'
import { forwardRef } from '../../utils/system'
import type { AspectedImageProps } from '../../components/Image/types'
import cx from '../../utils/cx'
import { GPUAcceleration, useDOMRef } from '../../utils/dom'
import { defaultPNG, loadAssetFile, normalizeWithRemoteSrc } from '../../components/Image/helper'

const AspectedLazyImage = forwardRef<AspectedImageProps, 'div'>(
  ({
    prefetch,
    src,
    defaultImage = defaultPNG,
    className,
    style = {},
    aspectRatio,
    lazyMargin = '200px',
    lazyRoot,
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

  const imageStyle = useMemo(
    () => ({
      backgroundImage: `url(${loaded ? imgSrc : normalizeWithRemoteSrc(defaultImage).src})`,
      // @ts-ignore add --tw-aspect-* variable
      '--tw-aspect-h': 1 / aspectRatio,
      ...GPUAcceleration
    }),
    [loaded, imgSrc, defaultImage, aspectRatio]
  )

  return (
    <div className={cx('block overflow-hidden', className)} style={style}>
      <div
        ref={domRef}
        className={
          cx('w-full bg-no-repeat bg-cover bg-center aspect-w-1')
        }
        style={imageStyle}
      />
    </div>
  )
})

export default AspectedLazyImage