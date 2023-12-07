import { GPUAcceleration } from '../../utils/dom'
import { forwardRef } from '../../utils/system'
import cx from '../../utils/cx'
import { BackgroundImageProps } from './types'
import { useEffect, useState } from 'react'
import { loadAssetFile } from './helper'
import { merge } from 'lodash'

const BackgroundImage = forwardRef<BackgroundImageProps, 'div'>(({
  src,
  className,
  style,
  ...props
}, ref) => {
  const [imgSrc, setImgSrc] = useState<string>()

  useEffect(
    () => {
      loadAssetFile(src ? typeof src === 'string' ? src : src.src : '', setImgSrc)
    },
    [src]
  )

  return (
    <div
      ref={ref}
      className={cx('w-full h-full bg-center bg-no-repeat bg-cover', className)}
      style={
        merge({ backgroundImage: `url(${imgSrc})` }, GPUAcceleration, style)
      }
      {...props} />
  )
})

export default BackgroundImage