import '@/app/globals.css'
import LogoGen from '../components/logo'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-start bg-violet-500 lg:col-span-5 lg:h-full xl:col-span-6">
              <div className="hidden lg:relative lg:block lg:p-12">
                <h2 className="mt-6 text-2xl flex items-center justify-start gap-1">
                  <LogoGen
                    color1="#fff"
                    color2="#fff"
                    color3="#fff"
                    width="300px"
                    height="200px"
                  />
                </h2>
              </div>
            </section>
            {children}
          </div>
        </section>
      </body>
    </html>
  )
}
