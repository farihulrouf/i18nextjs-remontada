"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useTranslation } from "../../i18n/client"
import { Trans } from 'react-i18next/TransWithoutContext';
const About = ({ params: { lng } }) => {
    const router = useRouter();
    const { t } = useTranslation(lng, 'aboutpage')

    return (
        <React.Fragment>
            <div className="mb-2">
                <Image
                    src="/assets/splash/splash_about.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    alt="pic"
                />
            </div>
            <div className="max-w-screen-xl mx-auto sm:px-24 px-8 py-8">
                <div className="w-full flex">
                    <div className="sm:w-1/2 w-full">
                        <h4 className="text-xl text-semibold">
                            <Trans i18nKey="ourstory" t={t}>
                                Our Story
                            </Trans>
                        </h4>
                        <p className="py-6">
                            <Trans i18nKey="ourstorytext" t={t}>
                                consisting of Remontadaa, Remontadaa Bet and Virgin Bet was demerged from the  Group of companies in September 2019. Remontadaa was previously acquired in Remontadaa 2017 as a means of moving into the sports media industry, while Virgin Bet was launched in 2019 following a partnership with Virgin to enter the sports betting market. Following the demerger, Remontadaa Groups sits within the Anzo Group of companies.",

                            </Trans>

                        </p>
                        <h4 className="text-xl text-semibold">
                            <Trans i18nKey="ourbusiness" t={t}>
                                Our Business
                            </Trans>
                        </h4>
                        <p className="py-6">
                            <Trans i18nKey="ourbusinesstext" t={t}>
                                Whether it is Remontaaa delivering real-time sports updates or free-to-air live streams to its users across 200 territories, or Remontadaa Bet  offering innovative and trusted sportsbook betting opportunities, we bring our audiences closer than ever to the sports they love and enrich their experiences with our best-in-class products."
                            </Trans>

                        </p>
                        <h4 className="text-lg text-semibold">
                            <Trans i18nKey="aboutremontadaatext" t={t}>
                                Founded in 1998, LiveScore is a global sports media business and real-time sports updates and results provider and live streaming service with an audience spanning across 200 territories. LiveScore delivers premium content and engaging products that enhance the experience of fans across a number of major sports."
                            </Trans>
                        </h4>

                    </div>
                    <div className="w-1/2 sm:flex hidden">
                        <Image
                            src="/assets/splash/kick_2.png"
                            width={438}
                            height={870}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default About