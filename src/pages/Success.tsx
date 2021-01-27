import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'
import {FaRegCheckCircle} from 'react-icons/fa';

import "../styles/pages/success.scss";

const Success:React.FC = () => {
    return (
        <Layout>
            <section className="success">
                <FaRegCheckCircle size="75px" className="success__icon" color="green" />
                <h2 className="success__title">Trank's You</h2>
                <p className="success__info"> Your order is comming in days</p>
                <Link to='/' className="success__button">Back to Home</Link>
            </section>
        </Layout>
    )
}

export default Success
