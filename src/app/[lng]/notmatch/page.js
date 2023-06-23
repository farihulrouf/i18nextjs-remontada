"use client"
import React from "react"
import Image from "next/image"
import { useTranslation } from "../../i18n/client"
import { Trans } from 'react-i18next/TransWithoutContext';
const NotMatch = ({ params: { lng } }) => {
    // const router = useRouter();
    const { t } = useTranslation(lng, 'translation')

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
            <div className="max-w-screen-xl mx-auto px-24 py-8">
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-gray-500 sm:text-3xl text-lg text-center">
                        <Trans i18nKey="nomatch" t={t}>

                            There are no matches to predict now
                        </Trans>
                    </h2>
                    <Image
                        src="/assets/splash/notfound.png"
                        width={400}
                        height={400}
                        alt="notfound"
                    />

                </div>
            </div>
        </React.Fragment>
    )
}
export default NotMatch