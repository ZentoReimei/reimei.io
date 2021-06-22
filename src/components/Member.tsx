import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './Member.module.css'
import svg0 from '../../static/img/undraw_docusaurus_mountain.svg'
import svg1 from '../../static/img/undraw_docusaurus_tree.svg'

const FeatureList = [
  {
    title: '全都黎明代表 Solufa',
    Svg: svg0,
    icon: 'https://avatars1.githubusercontent.com/solufa?s=200',
    link: {
      to: '',
      label: ''
    },
    description: 'TypeScriptオープンソース開発者'
  },
  {
    title: '会計責任者 木下ようすけ',
    Svg: svg1,
    icon: 'https://kinoshita-yosuke.com/wp-content/themes/kinoshita-yosuke/dist/assets/img/profile_img@2x.png',
    link: {
      to: '',
      label: ''
    },
    description: '2021年東京都議会議員候補者'
  }
]

function Feature({ icon, title, link, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.icon} src={icon} loading="lazy" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link className="button button--secondary button--lg" to={link.to}>
        {link.label}
      </Link>
    </div>
  )
}

const texts = [
  '全都黎明は2021年1月に旗上げし、3月に設立した政治団体です。Webエンジニア以外に主婦や経営者も含めた20名近いメンバーが仕事の合間や休日に出来ることを協力し合って都議選の準備を進めてきました。',
  '政治に無関係だった普通の都民が東京の未来を自分で決める仕組みを作ろうと集まっています。右も左も関係なく全都民主主義に賛同するメンバーによる、完全に自律的な政治団体です。'
]

export default function HomepageFeatures() {
  return (
    <section className={styles.members}>
      <h2 className="text--center">Webエンジニアが作った政治団体「全都黎明」</h2>
      {texts.map(t => <div key={t} className={styles.text}>{t}</div>)}
      <div className={styles.features}>
        <div className={clsx('row', styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
