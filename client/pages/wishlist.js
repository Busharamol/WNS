import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/wishlist.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function wishlist() {
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
                                <input class="bg-white" type="text" placeholder="search"></input>
                            </div>
                        </div>
                        <div className={styles.n2}>
                            <a href='/category'>
                                <img src="/refresh.png" height={27} width={27} />
                            </a>
                        </div>
                    </div>
                    <h4 class="fw-bold mx-4 px-3 py-4 text-center" id={styles.category}>Wishlist</h4>
                </section>

            </main>
        </div>
    )
}
export default wishlist;