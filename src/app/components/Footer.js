
"use client"
import Image from 'next/image'
import React, { useState } from 'react';
//import ReactFlagsSelect from "react-flags-select";
import Link from 'next/link';
import {
    AiOutlineHome, AiOutlineMail,
    AiOutlinePhone, AiOutlineFacebook,
    AiOutlineInstagram, AiOutlineTwitter
}
    from 'react-icons/ai';
import { useTranslation } from '../i18n/client'
import Menu from './Menu';
import { Trans } from 'react-i18next/TransWithoutContext';
const Footer = ({ lng }) => {
    const { t } = useTranslation(lng, 'footer')
    //console.log(t)
    //console.log('hasil', t)
    return (
        <div className="w-full bg-gray-700">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full flex flex-wrap p-4">
                    <div className="w-1/2 text-white sm:w-1/3">
                        <h1 className="text-2xl">
                            <Trans i18nKey="about" t={t}>
                                About Us
                            </Trans>
                        </h1>
                        <p className="py-6 text-sm sm:max-w-sm w-40">
                        <Trans i18nKey="desc1" t={t}>
                        website information about description
                            </Trans>
                        </p>
                        <input type="text" placeholder="Email" className="py-2 p-2 sm:mt-1 mt-4" />
                        <div className="mt-4 sm:mt-2 mb-2">
                            <button className="border-2 border-yellow-600 text-wihite py-2 px-8">
                                <Trans i18nKey="getintouch" t={t}>
                                    GET IN TOUCH
                                </Trans>
                            </button>

                        </div>
                    </div>
                    <div className="w-1/2 text-white sm:w-1/3">
                        <h1 className="text-2xl">
                            <Trans i18nKey="link" t={t}>
                                Link
                            </Trans>
                        </h1>
                        <ul className="list-none mt-6">
                            <a>
                                <li className="mb-2 hover:text-yellow-500">
                                    <Link href="/about">
                                        <Trans i18nKey="about" t={t}>
                                            About us
                                        </Trans>
                                    </Link>
                                </li>
                            </a>
                            <a>
                                <li className="mb-2 hover:text-yellow-500">
                                    <Link href="/about">
                                        <Trans i18nKey="contact" t={t}>
                                            Contact us
                                        </Trans>

                                    </Link>
                                </li>
                            </a>
                            <a>
                                <li className="mb-2 hover:text-yellow-500">
                                    <Link href="/term">
                                        <Trans i18nKey="term" t={t}>
                                            Term & Condition
                                        </Trans>
                                    </Link>
                                </li>
                            </a>

                        </ul>
                    </div>
                    <div className="w-full sm:w-1/3 opacity-100">

                        <div className="p-4 text-white">
                            <Link href="/">
                                <div className="flex items-center bg-blue-900 px-4">

                                    <img src='/logo.svg' className='w-16 h-auto' alt="logo" /> <span className="text-white text-2xl"></span>
                                </div>
                            </Link>


                            <p className="text-white text-sm mt-6 mb-4 max-w-sm">
                                <Trans i18nKey="desc" t={t}>
                                website information about description
                                </Trans>
                            </p>
                            <div className="flex space-x-2 items-center py-2">
                                <AiOutlineHome size={30} color="yellow" /> <p className="ml-2">
                                    <Trans i18nKey="address" t={t}>
                                        lorem ipsum
                                    </Trans>
                                </p>
                            </div>
                            <div className="flex space-x-2 items-center py-2">
                                <AiOutlineMail size={30} color="yellow" /> <p className="ml-2">
                                    <Trans i18nKey="email" t={t}>

                                        info@remontaa.com
                                    </Trans></p>
                            </div>
                            <div className="flex space-x-2 items-center py-2">
                                <AiOutlinePhone size={30} color="yellow" /> <p className="ml-2">+628xxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 flex justify-between px-2 py-1">
                    <p className="text-white">©                         <Trans i18nKey="years" t={t}>2023</Trans>  |
                        <Trans i18nKey="design" t={t}>
                            Designed
                        </Trans>
                        <Trans i18nKey="remontadaa" t={t}>
                            Remontada
                        </Trans>
                    </p>
                    <div className="w-36  flex">
                        <AiOutlineFacebook size={30} color="white" />
                        <AiOutlineInstagram size={30} color="white" />
                        <AiOutlineTwitter size={30} color="white" />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Footer