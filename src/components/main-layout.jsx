import React from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { Navbar } from './navbar'

export const MainLayout = ({children}) => {
  return (
    <>
    <Navbar />
    <Header />
    {children}
    <Footer />
    </>
  )
}
