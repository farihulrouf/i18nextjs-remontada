//import { termcondition } from "@/components/data"
"use client"
import { useRouter } from 'next/navigation';
import { useTranslation } from "../../i18n/client"
import { Trans } from 'react-i18next/TransWithoutContext';
const Term = ({ params: { lng } }) => {
    const router = useRouter();
    const { t } = useTranslation(lng, 'term')

    return (
        <div className="max-w-screen-xl mx-auto sm:px-24 px-8 py-8">
            <p className="text-md font-bold">
                <Trans i18nKey="termcondition" t={t}>

                    Term and condition
                </Trans>
            </p>
            <h3 className='text-2xl'>
                <Trans i18nKey="scoopeservice" t={t}>
                    Scope Our Services
                </Trans>
            </h3>
            <p className="text-sm py-4 ml-6" >
            <Trans i18nKey="terdesc" t={t}>
                Know your stuff? Be in with a chance to Win our £100k Remontadaa 6 jackpot Promotion by correctly predicting correct scores in six matches.Should more than one participant successfully predict six scores then the £100k jackpot is shared equally between all those that were successful.Similarly, all participants predicting five scores correctly will share £2,500.Further information can be found in the FAQs.
                </Trans>
            </p>
            <p className="text-sm py-4 ml-6" >
            <Trans i18nKey="terdesc" t={t}>
                Know your stuff? Be in with a chance to Win our £100k Remontadaa 6 jackpot Promotion by correctly predicting correct scores in six matches.Should more than one participant successfully predict six scores then the £100k jackpot is shared equally between all those that were successful.Similarly, all participants predicting five scores correctly will share £2,500.Further information can be found in the FAQs.
                </Trans>
            </p>
            <p className="text-sm py-4 ml-6" >
            <Trans i18nKey="terdesc" t={t}>
                Know your stuff? Be in with a chance to Win our £100k Remontadaa 6 jackpot Promotion by correctly predicting correct scores in six matches.Should more than one participant successfully predict six scores then the £100k jackpot is shared equally between all those that were successful.Similarly, all participants predicting five scores correctly will share £2,500.Further information can be found in the FAQs.
                </Trans>
            </p>
            <p className="text-sm py-4 ml-6" >
            <Trans i18nKey="terdesc" t={t}>
                Know your stuff? Be in with a chance to Win our £100k Remontadaa 6 jackpot Promotion by correctly predicting correct scores in six matches.Should more than one participant successfully predict six scores then the £100k jackpot is shared equally between all those that were successful.Similarly, all participants predicting five scores correctly will share £2,500.Further information can be found in the FAQs.
                </Trans>
            </p>

        </div>
    )
}
export default Term