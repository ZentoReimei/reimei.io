import React from 'react'
import styles from './VideoWrapper.module.css'

export default function VideoWrapper() {
  return (
    <div>
      <div className={styles.container}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/OJZhXi1qnyE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
