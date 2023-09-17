import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type PostInfo = {
  userNick: string | undefined | null
  userName: string | undefined | null
  postText: string
  postDate: string
  userPhoto: string
}
