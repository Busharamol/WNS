import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import $ from "jquery"
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
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
          <div id="abc" className={styles.items}>
            <li>
              <img src="/cd.png" alt="customer icon" height={30} width={30} />
              <a>Customer Details</a>
            </li>
            <li>
              <img src="/banner.png" alt="banner icon" height={30} width={30} />
              <a href="/banner">Banner</a>
            </li>
            <li>
              <img src="/cat.png" alt="category icon" height={20} width={20} />
              <a href="/category">Category</a>
            </li>
          </div>
        </section>
        <section id={styles.interface}>
          <div className={styles.navigation}>
            <div className={styles.n1}>
              <div class="d-lg-none">
                <img id="demo" className={styles.menubtn} src='/menu.png' height={20} width={20} />
              </div>
              <div className={styles.search}>
                <img src="/search-512.jpg" height={20} width={20} />
                <input type="text" placeholder="search"></input>
              </div>
            </div>
            <div className={styles.n2}>
              <a href='.'>
                <img src="/refresh.png" height={27} width={27} />
              </a>
            </div>
          </div>
          <h4 class="fw-bold mx-4 px-3 py-4" id={styles.customer}>Customer Details</h4>
          {/* <div className={styles.values}>
            <div className={styles.valbox} >
              <img src='/user.png' height={70} width={70}/>
              <div>
                <h5>1,007</h5>
                <span>New Users</span>
              </div>
            </div>
          </div> */}
          <div className={styles.board}>
            <table id={styles.tbl} class="w-75 table-sm">
              <tr className={styles.tr}>
                <th id={styles.th} class="py-3">ID</th>
                <th id={styles.th} class="ps-5">NAME</th>
                <th id={styles.th} >ADDRESS</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  <h6>1</h6>
                </td>
                <td id={styles.people}>
                  <img src='User2.png' width={30} height={30} />
                  <div className='people'>
                    <h6>Busharamol P N</h6>
                    <p>busharamol10@gmail.com</p>
                  </div>
                </td>
                <td className={styles.td}>
                  <div className='people1'>
                    <h6>Peedika parambil</h6>
                    <p>Veliathunad,683511</p>
                  </div>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my order</a>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my wishlist</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.block}>block</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.remove}>remove</a>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <h6>2</h6>
                </td>
                <td id={styles.people}>
                  <img src='User2.png' width={30} height={30} />
                  <div className='people'>
                    <h6>Daniel</h6>
                    <p>daniel@gmail.com</p>
                  </div>
                </td>
                <td>
                  <div className='people1'>
                    <h6>veliyaparamb</h6>
                    <p>Neerikod,683512</p>
                  </div>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my order</a>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my wishlist</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.block}>block</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.remove}>remove</a>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <h6>3</h6>
                </td>
                <td id={styles.people}>
                  <img src='User2.png' width={30} height={30} />
                  <div>
                    <h6>Bisty</h6>
                    <p>bisty@gmail.com</p>
                  </div>
                </td>
                <td>
                  <div className='people1'>
                    <h6>Chemban house</h6>
                    <p>Thrissur,680125</p>
                  </div>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my order</a>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my wishlist</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.block}>block</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.remove}>remove</a>
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <h6>4</h6>
                </td>
                <td id={styles.people}>
                  <img src='User2.png' width={30} height={30} />
                  <div className={styles.peopledes}>
                    <h6>Shon</h6>
                    <p>shon@gmail.com</p>
                  </div>
                </td>
                <td>
                  <div className='people1'>
                    <h6>Thotalil</h6>
                    <p>Perumbavur,683522</p>
                  </div>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my order</a>
                </td>
                <td>
                  <a href='#' id={styles.edit} class="text-decoration-none">my wishlist</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.block}>block</a>
                </td>
                <td>
                  <a href='#' class="text-decoration-none" id={styles.remove}>remove</a>
                </td>
              </tr>
            </table>
          </div>
        </section>

      </main>
    </div>
  )
}
