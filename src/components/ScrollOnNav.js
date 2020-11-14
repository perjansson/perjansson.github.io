import { useEffect } from 'react'
import { globalHistory } from '@reach/router'

export const ScrollOnNav = () => {
  useEffect(
    () =>
      globalHistory.listen(({ location: { pathname } }) => {
        if (pathname && ['/home', '/whoami'].some(path => path === pathname)) {
          window.setTimeout(() => {
            const element =
              pathname === '/home'
                ? document.body
                : document.getElementById(pathname.replace('/', ''))

            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }, 150)
        }
      }),
    []
  )

  return null
}
