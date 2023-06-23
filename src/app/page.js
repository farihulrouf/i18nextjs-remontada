import React from "react"
import Link from "next/link"
import { useTranslation } from './i18n'
import SliderCarousel from "./components/Carousel/SliderCarousel"
import { Pangolin } from "next/font/google"
import MatchHome from "./components/MatchHome"
import Rules from "./components/Rules"
import Categories from "./components/Categories"
import TabMatch from "./components/TabMatch"
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <React.Fragment>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="w-62">
          <h3 className="text-3xl py-2 text-center">Choose language</h3>
          <div className="flex gap-4">

            <a className="w-32 hover:bg-yellow-500 p-1">
              <Link href='/en'>
                <img src="/assets/eng.png" className="w-full h-auto" alt="eng" />
                <h4 className="text-xl">English</h4>
              </Link>
            </a>
            <a className="w-32 hover:bg-yellow-500 p-1">
              <Link href='/ar'>
                <img src="/assets/uea.png" className="w-full h-auto" alt="eng" />
                <h4 className="text-xl">عربي</h4>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
