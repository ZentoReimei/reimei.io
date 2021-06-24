import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './Member.module.css'
import SocialIcon from './SocialIcon'

const MemberList = [
  {
    title: '全都黎明代表 Solufa (31)',
    icon: 'https://avatars1.githubusercontent.com/solufa?s=200',
    links: [
      { to: 'https://github.com/solufa', icon: 'github' as const },
      { to: 'https://twitter.com/m_mitsuhide', icon: 'twitter' as const }
    ],
    description: 'TypeScriptオープンソース開発者'
  },
  {
    title: '会計責任者 木下ようすけ (36)',
    icon: 'https://kinoshita-yosuke.com/wp-content/themes/kinoshita-yosuke/dist/assets/img/profile_img@2x.png',
    links: [
      { to: 'https://kinoshita-yosuke.com', icon: 'home' as const },
      { to: 'https://twitter.com/kinoyosuke', icon: 'twitter' as const }
    ],
    description: '2021年東京都議会議員候補者'
  }
]

function Member({ icon, title, links, description }: typeof MemberList[number]) {
  return (
    <div className="col col--6 text--center margin-top--lg">
      <img className={styles.icon} src={icon} loading="lazy" alt={title} />
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {links.map(({ to, icon }) => (
        <SocialIcon key={to} icon={icon} to={to} fill="#fff" />
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
    <section className={styles.members}>
      <h2 className="text--center">Webエンジニアが作った政治団体「全都黎明」</h2>
      {texts.map((t) => (
        <div key={t} className={styles.text}>
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
