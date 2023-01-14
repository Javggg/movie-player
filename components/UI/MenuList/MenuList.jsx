import { useRouter } from 'next/router'

// Components
import Link from 'next/link'

const MenuList = () => {
    const router = useRouter()

    return (
        <>
            <Link href="/">
                <a className={router.pathname === '/' ? 'selected' : ''}>
                    Inicio
                </a>
            </Link>
            <Link href="/watchlist">
                <a className={router.pathname === '/watchlist' ? 'selected' : ''}>
                    Por ver
                </a>
            </Link>
            <Link href="/request">
                <a className={router.pathname === '/request' ? 'selected' : ''}>
                    Solicitar Película
                </a>
            </Link>
            <Link href="/profile">
                <a className={router.pathname === '/profile' ? 'selected' : ''}>
                    Mi Perfil
                </a>
            </Link>
        </>
    )
}

export default MenuList
