import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

import '../styles/pages/notfound.scss';
const NotFound:React.FC = () => {
    return (
        <Layout titlePage="404 Not Found">
            <section className="pagenotfound">
                <h2 className="pagenotfound__title">Oooops !</h2>
                <p className="pagenotfound__info">We can’t seem to find a page you are looking for </p>
                <Link className="pagenotfound__button" to="/">Back to home</Link>
            </section>
        </Layout>
    )
}

export default NotFound
