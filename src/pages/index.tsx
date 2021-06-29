import React from 'react'
import clsx from 'clsx'
import Head from '@docusaurus/Head'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import Logo from '../../static/img/logo.svg'
import VideoWrapper from '../components/VideoWrapper'
import Message from '../components/Message'
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
        <div className={styles.messageContent}>
          <Message />
        </div>
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
