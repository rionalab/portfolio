import React from 'react'
import HomepageSectionBanner from './comps/homepage-section-banner/HomepageSectionBanner'
import HomepageSectionAbout from './comps/homepage-section-about/HomepageSectionAbout'
import HomepageSectionQuote from './comps/homepage-section-quote/HomepageSectionQuote'
import Sticky from './comps/sticky/Sticky'
import MainContextProvider from './context/MainContext'
import './assets/css/global.scss'

export default function Tirtagracia() {
    return (
        <MainContextProvider>
            <Sticky />
            <HomepageSectionBanner />
            <HomepageSectionAbout />
            <HomepageSectionQuote />
        </MainContextProvider>
    )
}
