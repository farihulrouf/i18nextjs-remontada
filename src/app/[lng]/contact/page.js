"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useTranslation } from "../../i18n/client"
import { Trans } from 'react-i18next/TransWithoutContext';
const Contact = ({ params: { lng } }) => {
    const router = useRouter();
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
            <div className="max-w-screen-xl mx-auto sm:px-24 px-8 py-8">
                <div className="w-full flex">
                    <div className="w-1/2 sm:flex hidden">
                        <Image
                            src="/assets/splash/kick_2.png"
                            width={438}
                            height={870}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <p className="mb-8">
                        <Trans i18nKey="descabout" t={t}>

                            decryption information about the site   
                        </Trans>                    
                         </p>
                        <input type="text" placeholder="Full Name" className="px-2 py-2 mb-6 border sm:w-2/3 w-full rounded-md" />
                        <input type="text" placeholder="Email" className="px-2 py-2 mb-6 border sm:w-2/3 w-full rounded-md" />
                        <textarea className="resize rounded-md border sm:w-2/3 w-full px-2 py-2 h-48 mb-2" placeholder="Description" />
                        <div className="mt-2 w-2/3 ">
                            <button className="bg-yellow-500 px-4 py-2 rounded-lg">
                            <Trans i18nKey="sendnow" t={t}>
                                Send Now
                            </Trans>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contact