import React from "react";

import { useTranslation } from "../i18n";

function LanguageSwitcher({lng}) {

    const { i18n } = useTranslation(lng, 'footer')

  return (

    <div className="select">

      <select

        value={i18n.lng}

        onChange={(e) =>

          i18n.changeLanguage(e.target.value)

        }

      >

        <option value="en">English</option>

        <option value="ar">عربي</option>

      </select>

    </div>

  );

}

export default LanguageSwitcher;