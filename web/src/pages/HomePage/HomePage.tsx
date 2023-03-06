import { Link as RwLink, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { Button, Link } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link component={RwLink} to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
