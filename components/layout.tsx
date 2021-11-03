import { NextComponentType } from 'next'

export default function Layout({ children: any }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  )
}