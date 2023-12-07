import { useEffect, useMemo, useState } from 'react'
import type { ClipImageProps } from './types'
import { forwardRef } from '../../utils/system'
import { GPUAcceleration, useDOMRef } from '../../utils/dom'
import { defaultPNG, loadAssetFile, normalizeWithRemoteSrc } from './helper'
import cx from '../../utils/cx'

const ClipImage = forwardRef<ClipImageProps, 'div'>(
  ({
    src,
    defaultImage = defaultPNG,
    className,
    style = {},
    grid,
    size,
    index,
  }, ref
) => {
  const domRef = useDOMRef(ref)

  const [imgSrc, setImgSrc] = useState<string>()

  useEffect(
    () => {
      loadAssetFile(src ? typeof src === 'string' ? src : src.src : '', setImgSrc)
    },
    [src]
  )

  const imageStyle = useMemo(
    () => ({
      backgroundImage: `url(${imgSrc || normalizeWithRemoteSrc(defaultImage).src})`,
      backgroundPositionX: -size * index[0],
      backgroundPositionY: -size * index[1],
      backgroundSize: `${size * grid[0]}px ${size * grid[1]}px`,
      ...GPUAcceleration
    }),
    [imgSrc, defaultImage, size, index, grid]
  )

  return (
    <div
      className={cx('block overflow-hidden', className)}
      style={{
        width: size,
        height: size,
        ...style
      }}
    >
      <div
        ref={domRef}
        className={
          cx('w-full h-full bg-no-repeat')
        }
        style={imageStyle}
      />
    </div>
  )
})

export default ClipImage