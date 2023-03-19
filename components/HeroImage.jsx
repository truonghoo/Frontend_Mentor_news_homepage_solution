'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import heroDesktopImage from '../public/images/image-web-3-desktop.jpg'
import heroMobileImage from '../public/images/image-web-3-mobile.jpg'
import s from '../styles/HeroImage.module.css'

export default function HeroImage() {
  const [heroImage, setHeroImage] = useState(heroMobileImage)

  const handleImage = useCallback(() => {
    let innerW = window.innerWidth
    if (innerW < 425) {
      setHeroImage(heroMobileImage)
    } else {
      setHeroImage(heroDesktopImage)
    }
  }, [heroImage])
  useEffect(() => {
    window.addEventListener('resize', handleImage)

    return () => window.removeEventListener('resize', handleImage)
  }, [handleImage])

  return (
    <div className={s.heroImageContainer}>
      <Image
        src={heroImage}
        alt='hero image'
        fill
        priority
        className={s.heroImg}
      />
    </div>
  )
}
