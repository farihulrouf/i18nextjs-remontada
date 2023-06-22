
"use client"
import Image from 'next/image'
import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client'
import { Trans } from 'react-i18next/TransWithoutContext';
import { BsArrowRight } from 'react-icons/bs'
const SliderCarousel = ({ lng }) => {
  const { t } = useTranslation(lng, 'translation')
  //console.log(t)
  //console.log('hasil', t)
  return (
    <React.Fragment>

      <Carousel showThumbs={false} autoPlay={true} >

        <div className='relative'>

          <img src="assets/splash/splash_2.png" alt="splash2" />
          <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>

          <Link href="/login">
            <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>
            <Trans i18nKey="guessnow" t={t}>
                Guess Now
               </Trans>
              <BsArrowRight className='lg:block hidden' size={36} /></p>
          </Link>



        </div>
        <div className='relative'>

          <img src="assets/splash/splash_3.png" alt="ucl" />
          <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:right-20 right-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>
            <Trans i18nKey="guessmatch" t={t}>
            Guess Match
            </Trans>
</p>

          <Link href="/login">
            <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:right-20 right-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>
            <Trans i18nKey="guessnow" t={t}>
                Guess Now
               </Trans>
              <BsArrowRight className='lg:block hidden' size={36} /></p>
          </Link>


        </div>
        <div className='relative'>

          <img src="assets/splash/splash_4.png" alt="ucl" />
          <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>

          <Link href="/login">
            <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>
               <Trans i18nKey="guessnow" t={t}>
                Guess Now
               </Trans>
              <BsArrowRight className='lg:block hidden' size={36} /></p>
          </Link>

        </div>
        <div className='relative'>

          <img src="assets/splash/splash_5.png" alt="ucl" />
          <p className='absolute lg:px-8 px-2 lg:py-2 py-1 lg:bottom-40 bottom-20 lg:left-20 left-10 bg-indigo-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white'>يخمن  مباراة</p>

          <Link href="/login">
            <p className='absolute lg:px-4 px-2 lg:py-2 py-1 lg:bottom-20 bottom-10 lg:left-20 left-10 bg-yellow-500 bg-opacity-100 rounded-xl lg:text-4xl text-lg text-white flex items-center'>
            <Trans i18nKey="guessnow" t={t}>
                Guess Now
               </Trans>
              <BsArrowRight className='lg:block hidden' size={36} /></p>
          </Link>


        </div>

      </Carousel>
    </React.Fragment>
  );

}
export default SliderCarousel