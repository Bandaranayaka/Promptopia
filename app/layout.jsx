import '@styles/globals.css';

export const metadata = {
    title: "Promtopia",
    description: 'Discover & Share AI Prompts'
}

const Rootlayout = () => {
  return (
    <html lang="eng">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

        <main className="app">
            {children}
        </main>
        </body>
    </html>
  )
}

export default Rootlayout;