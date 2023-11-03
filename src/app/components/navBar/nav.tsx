import Link from 'next/link'
import styles from '../navBar/nav.module.css'

const links = [
    {
        label: "Home",
        route: "/"
    }, {
        label: "About",
        route: "./about"
    }, {
        label: "Posts",
        route: "./posts"
    }
]

export default function Posts() {
    return (
        <div>
            <ul className={styles.ulNavBar}>
                {links.map(({ label, route }) => (
                    <li className={styles.liNavBar} key={route}>
                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )

}