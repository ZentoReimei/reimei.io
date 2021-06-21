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
          東京は<span className={styles.strongNumber}>51</span>%の大人が都政を自分で決めた
        </h1>
        <p>
          <a
            className={styles.subTitle}
            href="https://twitter.com/hashtag/全都民主主義で東京の夜明けを見よう"
            target="_brank"
          >
            #全都民主主義で東京の夜明けを見よう
          </a>
        </p>
      </div>
    </header>
  )
}

const textBlocks: { title: string; contents: string[] }[] = [
  {
    title: '2017年都議選の投票率は51.28%',
    contents: [
      '今の都政は半分ちょっとの都民によって民主主義が守られている。みんなが納得できる未来のためにあと半分の力が必要だ。',
      '駅前に立ってメガホンで呼びかけても投票率は上がらないなら、仕組みを変えていこうじゃないか。自然と誰もが投票に行きたくなる東京をともに作っていこう。'
    ]
  },
  {
    title: '投票率95％で明日を変える全都民主主義',
    contents: [
      '95％もあれば、やってくる未来は全都民の選択の結果と言えるのではないだろうか？全都民参加の民主主義、それが全都民主主義。',
      '良い結果も悪い結果も全都民で決めて変えていける未来をともに作ろう。'
    ]
  },
  {
    title: '時代とともに民主主義もアップデート',
    contents: [
      '社会が変わっているのなら、民主主義も変えていかないと時代遅れな仕組みになってしまう。昨日まで正しかったことが、明日も正しいわけじゃないから。',
      '一人一人が出来ることから都政を変えていける未来を見たい。新しい仕組みを作るには、全都民が投票している健全な民主主義が必要だ。',
      '全都民主主義で東京の夜明けを見よう。'
    ]
  }
]

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
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
