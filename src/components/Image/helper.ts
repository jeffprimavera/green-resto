import { Capacitor } from "@capacitor/core"
import config from "../../config"
import sleep from "../../utils/sleep"

export const defaultPNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='

type NormalizedImageSrc = {
  remote?: boolean
  src: string
}

// 根据图片加载情况，记录是否应该从远端加载资源
// 没有配置config.staticAssetsHost的情况下，loadNextStaticAssetFromRemote默认为false
let loadNextStaticAssetFromRemote = !config.staticAssetsHost ? false : undefined
const NEXT_STATIC_PATH = '/_next/static/media/'

export const normalizeWithRemoteSrc = (src: string): NormalizedImageSrc => {
  if (!src) return { src: '' }
  if (src.startsWith('__remote/') && config.remoteAssetsHost) {
    return {
      remote: true,
      src: `${config.remoteAssetsHost}${src.replace('__remote', '')}`,
    }
  }
  if (src.startsWith(NEXT_STATIC_PATH) && !Capacitor.isNativePlatform() && config.staticAssetsHost) {
    return {
      remote: true,
      src: `${config.staticAssetsHost}${src.replace(NEXT_STATIC_PATH, '/')}`,
    }
  }
  return {
    src
  }
}

export const loadAssetFile = async (src: string | undefined, callback: (src: string) => void, normalized?: NormalizedImageSrc) => {
  if (!src) return
  if (!normalized) {
    normalized = normalizeWithRemoteSrc(src)
  }
  const source = normalized.src
  if (source.endsWith('.riv')) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (typeof loadNextStaticAssetFromRemote === 'undefined') {
        await sleep(100)
        continue
      }
      if (!loadNextStaticAssetFromRemote && config.staticAssetsHost) {
        console.log('connect remote static assets host failed, load rive file from local hosting')
      }
      // rive 文件直接判断loadNextStaticAssetFromRemote，来决定是从远端加载还是从本地加载
      callback(loadNextStaticAssetFromRemote ? normalized.src : src)
      return
    }
  } else {
    const image = new Image()
    image.onload = () => {
      if (config.staticAssetsHost) {
      // 如果图片加载远端失败，而是从本地开始加载，设置loadNextStaticAssetFromRemote为false
        if (source.startsWith(NEXT_STATIC_PATH)) {
          loadNextStaticAssetFromRemote = false
        } else if (source.startsWith(config.staticAssetsHost)) {
          loadNextStaticAssetFromRemote = true
        }
      }
      callback(source)
    }
    image.onerror = () => {
      // console.error(err)
      if (normalized && normalized.remote) loadAssetFile(src, callback, { src })
    }
    image.src = source
  }
}
