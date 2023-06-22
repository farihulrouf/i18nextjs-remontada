"use client"
import React from "react"
import Image from "next/image"
import { useTranslation } from '../i18n/client'
import { Trans } from 'react-i18next/TransWithoutContext';
const Rules = ({ lng }) => {
    const { t } = useTranslation(lng, 'translation')
    //console.log(t)
    return (
        <React.Fragment>
            <div className="p-4 flex flex-wrap justify-center gap-4 mb-8">
                <div className="lg:w-72 w-full bg-blue-900 flex justify-between items-center space-x-4 p-4 hover:bg-yellow-500">
                <img src="/assets/rubik_2.png" alt="ucl" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>

                    {/*<Image
                        src="/assets/rubik_2.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
                    */}
                    <p className="text-white text-xl w-48">
                        <Trans i18nKey="guestday" t={t}>
                            Guess Matchday
                        </Trans>
                    </p>
                </div>
                <div className="lg:w-72 w-full bg-blue-900 flex justify-between items-center space-x-4 p-4 hover:bg-yellow-500">
                <img src="/assets/rubik_1.png" alt="ucl" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/>

                    {/*<Image
                        src="/assets/rubik_1.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
                */}
                    <p className="text-white text-xl w-48">
                        <Trans i18nKey="winprizes" t={t}>
                             Win a lot of prizes                        
                        </Trans>
                    </p>
                </div>
                <div className="lg:w-72 w-full bg-blue-900 flex justify-between items-center space-x-4 p-4 hover:bg-yellow-500">
                 <img src="/assets/rubik_3.png" alt="ucl" className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]"/> 

                    {/*<Image
                        src="/assets/rubik_3.png"
                        width={64}
                        height={64}
                        alt="Picture of the author"
                    />
            */}
                    <p className="text-white text-xl w-48">
                    <Trans i18nKey="partgame" t={t}>

                             Be part of the game
                    </Trans>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Rules