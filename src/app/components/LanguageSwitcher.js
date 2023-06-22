import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

function LanguageSwitcher() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );
  //console.log(locale)

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a>
                {locale === "en" ? "English" : locale === "ar" ? "عربى" : null}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  
  );

}

export default LanguageSwitcher;