import React from 'react'
import Link from '@docusaurus/Link'
import styles from './SocialIcon.module.css'
import github from '../../assets/img/github.svg'
import home from '../../assets/img/home.svg'
import twitter from '../../assets/img/twitter.svg'

const Svgs = {
  github,
  home,
  twitter
}

type Props = {
  icon: keyof typeof Svgs
  to: string
  fill: string
}

export default function SocialIcon({ icon, to, fill }: Props) {
  const Svg = Svgs[icon]

  return (
    <Link key={to} className={styles.socialLink} to={to}>
      <Svg className={styles.socialIcon} style={{ fill }} />
    </Link>
  )
}
