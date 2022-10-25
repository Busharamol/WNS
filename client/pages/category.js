import Head from 'next/head'
import styles from '../styles/category.module.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CREATE_CATEGORY } from "../Graphql/Mutation"
import { DELETE_CATEGORY } from "../Graphql/Mutation"
import { useQuery, useMutation } from "@apollo/client"
import { GET_ALL_CATEGORY } from '../Graphql/Queries';

function category() {
    const [cat_name, setName] = useState("")
    const [createCategory, { error }] = useMutation(CREATE_CATEGORY);
    const { data } = useQuery(GET_ALL_CATEGORY);
    if (data) {
        console.log(data);
    }
    const [deleteCategory] = useMutation(DELETE_CATEGORY);
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
                        <h4 class="fw-bold">Wire and Switch</h4>
                    </div>
                    <div className={styles.items}>
                        <li>
                            <img src="/cd.png" alt="customer icon" height={30} width={30} />
                            <a href=".">Customer Details</a>
                        </li>
                        <li>
                            <img src="/banner.png" alt="banner icon" height={30} width={30} />
                            <a href="/banner">Banner</a>
                        </li>
                        <li>
                            <img src="/cat.png" alt="category icon" height={20} width={20} />
                            <a>Category</a>
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
                            <div class="d-lg-none">
                                <img className={styles.menubtn} src='/menu.png' height={20} width={20} />
                            </div>
                            <div className={styles.search}>
                                <img src="/search-512.jpg" height={20} width={20} />
                                <input class="bg-white text-dark" type="text" placeholder="search"></input>
                            </div>
                        </div>
                        <div className={styles.n2}>
                            <a href='/category'>
                                <img src="/refresh.png" height={27} width={27} />
                            </a>
                        </div>
                    </div>
                    <h4 class="fw-bold mx-4 px-3 py-4 text-center" id={styles.category}>Add category</h4>
                    <div class="card py-5" id={styles.card}>
                        <div id={styles.board} class="card-body bg-white text-center col-text-center">
                            <input className="bg-white text-dark " type="text" placeholder="eg:Low Voltage Switch Gears" onChange={(event) => { setName(event.target.value); }}></input>
                        </div>
                        <div id={styles.btn}>
                            <a href='/category' className='text-decoration-none'><input type="button" value="add" className="d-block mx-4 my-3 bg-dark text-white px-2 " onClick={() => createCategory({ variables: { cat_name: cat_name } })} /></a>
                        </div>
                    </div>
                    <div className='my-5 mx-5'>
                        <table class="table table-light table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                        </table>
                        <div>{data && (data.getAllCategory.map((cat) => {
                            return (
                                <table class="table table-light table-striped">
                                    <tbody>
                                        <tr>
                                            <td className='w-25'>{cat.id}</td>
                                            <td className='w-50'>{cat.cat_name}</td>
                                            <td><a href='/category' className='text-decoration-none'><button class="text-decoration-none" id={styles.remove} onClick={() => { deleteCategory({ variables: { id: cat.id } }) }}>remove</button></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        }))}</div>
                        
                    </div>
                </section>

            </main>
        </div>
    )
}
export default category;