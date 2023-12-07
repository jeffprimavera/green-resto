interface LazyImageProps extends LazyComponentProps {
    src?: string | StaticImageData
    prefetch?: boolean
    defaultImage?: string
  }
  
  export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>, LazyImageProps {
  
  }
  
  export interface AspectedImageProps extends LazyImageProps {
    aspectRatio: number
    className?: string
  }
  
  export interface ClipImageProps extends LazyImageProps {
    defaultImage?: string
    className?: string
    grid: [width: number, height: number]
    size: number
    index: [x: number, y: number]
  }
  
  export interface BackgroundImageProps {
    src?: string | StaticImageData
    className?: string
  }