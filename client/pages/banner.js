import Head from 'next/head'
import styles from '../styles/banner.module.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CREATE_BANNER } from "../Graphql/Mutation"
import { DELETE_BANNER } from "../Graphql/Mutation"
import { useMutation } from '@apollo/client';
import { GET_ALL_BANNERS } from '../Graphql/Queries';
import { useQuery } from "@apollo/client"

const banner = () => {
    const [img, setimg] = useState("")
    const [createBanner, { error }] = useMutation(CREATE_BANNER);

    const { data } = useQuery(GET_ALL_BANNERS);
    if (data) {
        console.log(data);
    }
    const [deleteBanner] = useMutation(DELETE_BANNER);
    return (
        <div className={styles.container}>
            <Head>
                <title>Wire and Switch</title>
                <meta name="description" content="site for wire and switch" />
                <link rel="icon" href="/icon.png" />
            </Head>

            <main className={styles.main}>
                <section id={styles.menu}>
                    <div className={styles.logo}>
                        <img src="/ws.png" />
                        <h4 className="fw-bold">Wire and Switch</h4>
                    </div>
                    <div className={styles.items}>
                        <li>
                            <img src="/cd.png" alt="customer icon" height={30} width={30} />
                            <a href=".">Customer Details</a>
                        </li>
                        <li>
                            <img src="/banner.png" alt="banner icon" height={30} width={30} />
                            <a>Banner</a>
                        </li>
                        <li>
                            <img src="/cat.png" alt="category icon" height={20} width={20} />
                            <a href="/category">Category</a>
                        </li>
                        <li>
                            <img src="/product.png" alt="product icon" height={20} width={20} />
                            <a href="/addProduct">Add Product</a>
                        </li>
                    </div>
                </section>
                <section id={styles.interface}>
                    <div className={styles.navigation}>
                        <div className={styles.n1}>
                            <div className="d-lg-none">
                                <img className={styles.menubtn} src='/menu.png' height={20} width={20} />
                            </div>
                            <div className={styles.search}>
                                <img src="/search-512.jpg" height={20} width={20} />
                                <input className="bg-white text-dark" type="text" placeholder="search"></input>
                            </div>
                        </div>
                        <div className={styles.n2}>
                            <a href='/banner'>
                                <img src="/refresh.png" height={27} width={27} />
                            </a>
                        </div>
                    </div>
                    <h4 className="fw-bold mx-4 px-3 py-4 text-center" id={styles.banner}>Add Banner</h4>
                    <div className="card py-5" id={styles.card}>
                        <div id={styles.board} className="card-body bg-white text-center">
                            <input type="file" name="image" onChange={(event) => { setimg(event.target.value); }} />
                            <a href='/banner' className='text-decoration-none'><input type="button" value="add" className="d-block mx-4 my-3 bg-dark text-white px-2 " onClick={() => createBanner({ variables: { img: img } })} /></a>
                        </div>
                    </div>
                    <table id={styles.tbl} className="bg-white">
                        <tr className={styles.tr}>
                            <th id={styles.th} >ID</th>
                            <th id={styles.th1} >Image</th>
                        </tr>
                    </table>
                    <div>{data && (data.getAllBanners.map((Banner) => {
                        return (
                            <table className="justify-content-between bg-white " id={styles.table}>
                                <tr id={styles.tr}>
                                    <td id={styles.td}>{Banner.id}</td>
                                    <td id={styles.td1}><img src="Banner.img"></img></td>
                                    <td><a href='/banner'><button className="text-decoration-none" id={styles.remove} onClick={() => { deleteBanner({ variables: { id: Banner.id } }) }}>remove</button></a></td>
                                </tr>
                            </table>
                        )
                    }))}</div>
                </section>
            </main>
        </div>
    )
}
export default banner;