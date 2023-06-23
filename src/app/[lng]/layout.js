import { dir } from "i18next"
import { languages } from "../i18n/settings"
import NavBar from "../components/NavBar"
//import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <NavBar lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  )
}
