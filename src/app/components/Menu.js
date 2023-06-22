import React from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
const Menu = ({ t, lng }) => {


    return <div className="px-2 md:px-0 py-2 space-y-2 md:space-y-0 md:space-x-2 font-medium text-teal-200 text-sm">
        <a

            className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/">
                <Trans i18nKey="home" t={t}>
                    Home
                </Trans>
            </Link>
        </a>
        <a

            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/about">
                <Trans i18nKey="about" t={t}>

                    About
                </Trans>
            </Link>
        </a>
        <a

            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/contact">
                <Trans i18nKey="contact" t={t}>

                    Contact Us
                </Trans>
            </Link>
        </a>
        <a

            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <Link href="/term">
                <Trans i18nKey="term" t={t}>

                    Termn and Condition
                </Trans>
            </Link>
        </a>
        <div

            className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
            <div className='flex space-x-2'>
            <Link href={`/en`}>
                    En
                </Link>
                <Link href={`/ar`}>
                    Ar
                </Link>
            </div>

        </div>
    </div>
}

export default Menu;