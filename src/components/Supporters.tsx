import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Supporters.module.css'
import supporters from '../../assets/json/supporters.json'
import supportersIgnore from '../../assets/json/supportersIgnore.json'

const filteredSupporters = supporters.filter(({ id }) => !supportersIgnore.includes(id))

function Supporter(props: { id: string; icon: string }) {
  return (
    <Link key={props.id} to={`https://twitter.com/${props.id}`} className={styles.statementLink}>
      <img
        className={styles.supporterIcon}
        src={`https://pbs.twimg.com/profile_images/${props.icon}_80x80.jpg`}
        loading="lazy"
        alt={props.id}
      />
    </Link>
  )
}

const texts = [
  '小さな一歩目からあなたも都政参加を始めよう。ハッシュタグ「#全都民主主義で東京の夜明けを見よう」を使ってあなたの都政への願いをツイートしてください。',
  'あなたのアイコンにリンクを付けて全都黎明がGitHubとこのサイトに残します。'
]

export default function Supporters() {
  return (
    <section className={styles.supporters}>
      <h2 className="text--center">あなたが踏み出した一歩目を全都黎明のサイトに刻もう</h2>
      {texts.map((t) => (
        <div key={t} className={styles.text}>
          {t}
        </div>
      ))}
      <Link
        className={styles.twitterLink}
        to="https://twitter.com/hashtag/全都民主主義で東京の夜明けを見よう"
      >
        #全都民主主義で東京の夜明けを見よう
      </Link>
      <div className={styles.counter}>
        現在<span>{filteredSupporters.length}</span>人が意思表明のツイートをしました
      </div>
      <div className={styles.icons}>
        {filteredSupporters.map(({ id, icon }) => (
          <Supporter key={id} id={id} icon={icon} />
        ))}
      </div>
    </section>
  )
}
