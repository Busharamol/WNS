import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import $ from "jquery"
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <>
            <button class="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <img id="demo" className={styles.menubtn} src='/menu.png' height={30} width={30} />
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header" className={styles.logo}>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <img src="/ws.png" />
                    <h4 class="fw-bold">Wire and Switch</h4>

                </div>
                <div class="offcanvas-body">
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
                </div>
            </div>
        </>
    )
}
