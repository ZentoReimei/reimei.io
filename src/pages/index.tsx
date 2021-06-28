import React from 'react'
import clsx from 'clsx'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import Logo from '../../static/img/logo.svg'
import VideoWrapper from '../components/VideoWrapper'
import Member from '../components/Member'
import Supporters from '../components/Supporters'
import SocialIcon from '../components/SocialIcon'
// import Recruitment from '../components/Recruitment'

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.gradient} />
      <div className={styles.heroContent}>
        <Logo className={styles.headerLogo} />
        <h1 className={styles.heroTitle}>
          1395万人<span className={styles.smallText}>で</span>
          <br />
          4年後<span className={styles.smallText}>の</span>希望
          <span className={styles.smallText}>を</span>
          <br className={styles.heroTitleBreak} />
          作ろう
        </h1>
        <p className={styles.subTitle}>
          全都民主主義で
          <br />
          東京の明日を変える政治団体
        </p>
      </div>
    </header>
  )
}

const textBlocks: { title: string; contents: string[] }[] = [
  {
    title: '2017年都議選の投票率は51.28%',
    contents: [
      '今の都政は約半数の都民によって民主主義が守られている。みんなが希望を持てる未来を作るためには1,395万人全員の意思が必要だ。街頭で呼びかけても投票率が上がらないなら、仕組みを変えていこうじゃないか。',
      '誰もが投票に行きたくなる東京をともに作っていこう。'
    ]
  },
  {
    title: '投票率95％で明日を変える全都民主主義',
    contents: [
      '投票権がある人もない人も含めて全都民が参加する民主主義、それが全都民主主義。その未来の一歩目は投票率を95％に上げることから始まる。',
      '良い結果も悪い結果も全都民で選択して納得できる未来をともに作ろう。'
    ]
  },
  {
    title: '明日が変わる時代に明日変えられる都政',
    contents: [
      '昨日正しかったことが、明日には変わっていく新しい時代を我々は生きている。同じ速さで変われる都政を作るには、全都民の意思を束ねる新しい仕組みが必要だ。',
      '全都民主主義で東京の夜明けを見よう。'
    ]
  }
]

const links = [
  { to: 'https://github.com/ZentoReimei/reimei.io', icon: 'github' as const, fill: 'black' },
  { to: 'https://twitter.com/ZentoReimei', icon: 'twitter' as const, fill: '#1d9Bf0' }
]

function ContentTitle(props: { main: string; sub: string }) {
  return (
    <div className={styles.contentTitle}>
      <div className={styles.contentTitleMain}>{props.main}</div>
      <div className={styles.contentTitleSub}>{props.sub}</div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout title="投票率95％の全都民主主義で東京の明日を変える政治団体">
      <Head>
        <meta name="keywords" content="ぜんとれいめい,全都黎明,都議選,東京都議会議員選挙" />
      </Head>
      <HomepageHeader />
      <main className={styles.main}>
        <ContentTitle main="Message" sub="メッセージ" />
        <VideoWrapper />
        {textBlocks.map((block) => (
          <React.Fragment key={block.title}>
            <h2 className={styles.textBlockTitle}>{block.title}</h2>
            {block.contents.map((content) => (
              <div key={content} className={styles.textBlockContent}>
                {content}
              </div>
            ))}
          </React.Fragment>
        ))}
        <div className={clsx('text--center', styles.socials)}>
          {links.map(({ to, icon, fill }) => (
            <SocialIcon key={to} icon={icon} to={to} fill={fill} />
          ))}
        </div>
      </main>
      <div className={clsx(styles.member)}>
        <ContentTitle main="Member" sub="メンバー" />
        <div className={styles.memberContent}>
          <Member />
        </div>
      </div>
      <div className={styles.main}>
        <Supporters />
        <Logo className={styles.footerLogo} />
        {/* <Recruitment /> */}
      </div>
    </Layout>
  )
}
