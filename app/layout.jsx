import Nav from '@components/Nav';
import '@styles/globals.css';
export const metadata = {
  title: 'Simple Blog Post',
  description: 'Discover and share Post',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div>
          </div>
        </div>
        <main className='app'>
          <Nav></Nav>
          {children}
        </main>
      </body>
    </html>
  )
}
