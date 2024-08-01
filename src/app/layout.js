import ThemeChange from '@/components/theme-change'
import 'cn-fontsource-fz-shu-song-z-01-regular/font.css'
import './globals.css'

export const metadata = {
  title: "Rynkis' Texts",
  description: "a pure text editor"
}

export default function RootLayout({ children }) {
  return (
    <html lang='zh-CN'>
      <body>
        {children}
        <ThemeChange />
      </body>
    </html>
  )
}
