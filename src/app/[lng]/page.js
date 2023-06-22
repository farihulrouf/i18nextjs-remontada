import React from "react"
import Link from "next/link"
import { useTranslation } from "../i18n"
import SliderCarousel from "../components/Carousel/SliderCarousel"
import { Pangolin } from "next/font/google"
import MatchHome from "../components/MatchHome"
import Rules from "../components/Rules"
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <React.Fragment>
      <SliderCarousel lng={lng}/>
      <div className='max-w-screen-xl mx-auto'>
        <MatchHome lng={lng} />
        <Rules lng={lng} />
      </div>

      {/*
        <Link href={`/${lng}/second-page`}>
          {t('to-second-page')}
        </Link>
    */}
    </React.Fragment>
  )
}
