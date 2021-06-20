import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import VideoWrapper from '../components/VideoWrapper'

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.background} />
      <div className={clsx('container', styles.container)}>
        <h1 className={styles.heroTitle}>
          東京は<span className={styles.strongNumber}>55</span>%の大人が知事を自分で選ぶ
        </h1>
        <p className={styles.subTitle}>全都民主主義でともに夜明けを見よう</p>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title="投票率95％の全都民主主義で明日を変える政治団体"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={styles.video}>
        <VideoWrapper />
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
