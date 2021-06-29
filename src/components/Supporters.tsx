import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Supporters.module.css'
import supporters from '../../assets/json/supporters.json'
import supportersIgnore from '../../assets/json/supportersIgnore.json'
import FootIcon from '../../assets/img/foot.svg'

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

const text = [
  '小さな一歩目からあなたも都政参加を始めよう。ハッシュタグ「#全都民主主義で東京の夜明けを見よう」を使ってあなたの都政への願いをツイートしてください。',
  'あなたのアイコンにリンクを付けて全都黎明のサイトとGitHubに残します。'
].join('\n')

export default function Supporters() {
  return (
    <>
      <div className={styles.descriptionWrapper}>
        <div className={styles.gradient} />
        <div className={styles.supporterDescription}>
          <FootIcon className={styles.footIcon} />
          <h2 className={styles.supporterDescriptionTitle}>
            あなたが踏み出した一歩目を
            <br />
            全都黎明のサイトに刻もう
          </h2>
          <div className={styles.supporterText}>{text}</div>
          <div className="text--center">
            <Link
              className={styles.twitterLink}
              to="https://twitter.com/hashtag/全都民主主義で東京の夜明けを見よう"
            >
              #全都民主主義で東京の夜明けを見よう
            </Link>
          </div>
        </div>
      </div>
      <section className={styles.supporters}>
        <div className={styles.counter}>
          現在 <span>{filteredSupporters.length}</span> 人が
          <br className={styles.counterBreak} />
          意思表明のツイートをしました
        </div>
        <div className={styles.icons}>
          {filteredSupporters.map(({ id, icon }) => (
            <Supporter key={id} id={id} icon={icon} />
          ))}
        </div>
      </section>
    </>
  )
}
