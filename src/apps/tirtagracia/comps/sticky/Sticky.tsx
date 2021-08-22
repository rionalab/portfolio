import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import Menu from './menu/Menu'
import Share from './Share'
import ToTop from './ToTop'

export default function Sticky() {
    return (
        <>
            <ToTop />
            <Logo />
            <BurgerMenu />
            <Share />
            <Menu />
        </>
    )
}
