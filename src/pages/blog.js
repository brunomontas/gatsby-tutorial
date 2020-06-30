import React from 'react'
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

function blog() {
    return (
        <Layout>
            <div className={styles.page}>
            <h1 >This is our blog page.</h1>
            </div>
        </Layout>
    )
}

export default blog

