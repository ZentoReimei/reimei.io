import React from 'react'
import styles from './Message.module.css'

const textBlocks: {label: string; title: string; content: string }[] = [
  {
    label: '現在',
    title: '2017年都議選の投票率は51.28%',
    content: [
      '今の都政は約半数の都民によって民主主義が守られている。みんなが希望を持てる未来を作るためには1,395万人全員の意思が必要だ。街頭で呼びかけても投票率が上がらないなら、仕組みを変えていこうじゃないか。',
      '誰もが投票に行きたくなる東京をともに作っていこう。'
    ].join('\n')
  },
  {
    label: '4年後',
    title: '投票率95％で明日を変える全都民主主義',
    content: [
      '投票権がある人もない人も含めて全都民が参加する民主主義、それが全都民主主義。その未来の一歩目は投票率を95％に上げることから始まる。',
      '良い結果も悪い結果も全都民で選択して納得できる未来をともに作ろう。'
    ].join('\n')
  },
  {
    label: '未来',
    title: '明日が変わる時代に明日変われる都政',
    content: [
      '昨日正しかったことが、明日には変わっていく新しい時代を我々は生きている。同じ速さで変われる都政を作るには、全都民の意思を束ねる新しい仕組みが必要だ。',
      '全都民主主義で東京の夜明けを見よう。'
    ].join('\n')
  }
]

export default function Message() {
  return (
    <>
    {textBlocks.map((block) => (
      <div key={block.title} className={styles.messageWrapper}>
        <div className={styles.messageDot} />
        <div className={styles.messageMain}>
          <div className={styles.messageLabel}>{block.label}</div>
          <div className={styles.messageTexts}>
          <h2 className={styles.messageTitle}>{block.title}</h2>
          <div className={styles.messageContent}>
            {block.content}
          </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}
