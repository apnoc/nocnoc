import React from 'react'
import styles from '../styles/Home.module.css'

const Tweet =({ text,  url }) => {
    return <>
        <nav className={styles.nav__links}>
            <ul >
                <li> <a href={url}>{text}</a> </li>
            </ul>
        </nav>
    </>
}

export default  Tweet