import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cx = (...inputs: ClassValue[]) =>
  twMerge(clsx(...inputs))

export default cx