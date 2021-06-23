import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Recruitment.module.css'

const texts = [
  '新たなボランティアスタッフを募集します。候補者が当選した場合は公約実行のための調査や支援、落選した場合は次回選挙に向けた戦略立案や広報が主な作業です。次回選挙での全都黎明公認候補の募集は新チーム編成後に行います。',
  'SNS運営、ウェブデザイナー、プランナー、政界経験者、マネージャー、OSSコミッター、ウェブエンジニアなど東京の未来を変えるためにあなたの貢献が必要です。'
]

export default function Recruitment() {
  return (
    <section className={styles.recruitment}>
      <h2 className="text--center">選挙後の全都黎明を支えてくれるボランティア募集</h2>
      {texts.map((t) => (
        <div key={t} className={styles.text}>
          {t}
        </div>
      ))}
      <Link className={styles.twitterLink} to="/docs/recruitment">
        ボランティアスタッフ募集要項を見る
      </Link>
    </section>
  )
}
