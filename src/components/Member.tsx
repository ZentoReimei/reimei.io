import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Member.module.css'
import SocialIcon from './SocialIcon'
import SolufaIcon from '../../assets/img/solufa.svg'
import YosukeIcon from '../../assets/img/yosuke.svg'

const MemberList = [
  {
    name1: '全都黎明代表',
    name2: 'Solufa',
    old: 32,
    Icon: SolufaIcon,
    links: [
      { to: 'https://github.com/solufa', icon: 'github' as const, fill: 'black' },
      { to: 'https://twitter.com/m_mitsuhide', icon: 'twitter' as const, fill: '#1d9Bf0' }
    ],
    description: 'Webエンジニア'
  },
  {
    name1: '会計責任者',
    name2: '木下ようすけ',
    old: 35,
    Icon: YosukeIcon,
    links: [
      { to: 'https://kinoshita-yosuke.com', icon: 'home' as const, fill: 'none' },
      { to: 'https://twitter.com/kinoyosuke', icon: 'twitter' as const, fill: '#1d9Bf0' }
    ],
    description: '都議会議員候補'
  }
]

function Member({ Icon, name1, name2, old, links, description }: typeof MemberList[number]) {
  return (
    <div className={styles.memberCard}>
      <Icon className={styles.icon} />
      <div className="margin-top--md">
        <div className={styles.name}>
          {name1}
          <br />
          {name2}
        </div>
        <div className={styles.old}>
          /<span className={styles.small}>old</span> {old}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      {links.map(({ to, icon, fill }) => (
        <SocialIcon key={to} icon={icon} to={to} fill={fill} />
      ))}
    </div>
  )
}

const text = [
  '全都黎明は2021年1月に旗上げし、3月に設立した政治団体です。Webエンジニア以外に主婦や経営者も含めた20名近いメンバーが仕事の合間に出来ることを協力し合って都議選の準備を進めてきました。',
  '政治に無関係だった普通の都民が未来を変えるために集まっています。右も左も関係なく全都民主主義に賛同するメンバーによる、完全に独立な政治団体です。'
].join('\n')

export default function Members() {
  return (
    <section>
      <h2 className={styles.memberTitle}>
        Webエンジニアが作った
        <br />
        政治団体「全都黎明」
      </h2>
      <div className={styles.memberText}>{text}</div>
      <Link to="/docs/missionstatement" className={styles.statementLink}>
        全都黎明の綱領を見る
      </Link>
      <div className={styles.iconArea}>
        {MemberList.map((props, idx) => (
          <Member key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
