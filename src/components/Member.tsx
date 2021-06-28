import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './Member.module.css'
import SocialIcon from './SocialIcon'
import SolufaIcon from '../../assets/img/solufa.svg'
import YosukeIcon from '../../assets/img/yosuke.svg'

const MemberList = [
  {
    title: (
      <>
        全都黎明代表
        <br />
        Solufa / 32
      </>
    ),
    Icon: SolufaIcon,
    links: [
      { to: 'https://github.com/solufa', icon: 'github' as const, fill: 'black' },
      { to: 'https://twitter.com/m_mitsuhide', icon: 'twitter' as const, fill: '#1d9Bf0' }
    ],
    description: 'TypeScriptオープンソース開発者'
  },
  {
    title: (
      <>
        会計責任者
        <br />
        木下ようすけ / 36
      </>
    ),
    Icon: YosukeIcon,
    links: [
      { to: 'https://kinoshita-yosuke.com', icon: 'home' as const, fill: 'black' },
      { to: 'https://twitter.com/kinoyosuke', icon: 'twitter' as const, fill: '#1d9Bf0' }
    ],
    description: '2021年東京都議会議員候補者'
  }
]

function Member({ Icon, title, links, description }: typeof MemberList[number]) {
  return (
    <div className="col col--6 text--center margin-top--lg">
      <Icon className={styles.icon} />
      <div className="margin-top--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {links.map(({ to, icon, fill }) => (
        <SocialIcon key={to} icon={icon} to={to} fill={fill} />
      ))}
    </div>
  )
}

const texts = [
  '全都黎明は2021年1月に旗上げし、3月に設立した政治団体です。Webエンジニア以外に主婦や経営者も含めた20名近いメンバーが仕事の合間に出来ることを協力し合って都議選の準備を進めてきました。',
  '政治に無関係だった普通の都民が未来を変える仕組みを作ろうと集まっています。右も左も関係なく全都民主主義に賛同するメンバーによる、完全に独立な政治団体です。'
]

export default function Members() {
  return (
    <section>
      <h2 className="text--center">Webエンジニアが作った政治団体「全都黎明」</h2>
      {texts.map((t) => (
        <div key={t} className={styles.mmeberText}>
          {t}
        </div>
      ))}
      <Link to="/docs/missionstatement" className={styles.statementLink}>
        全都黎明の綱領を見る
      </Link>
      <div className={styles.features}>
        <div className={clsx('row', styles.row)}>
          {MemberList.map((props, idx) => (
            <Member key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
