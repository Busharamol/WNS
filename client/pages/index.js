import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GET_ALL_USERS } from "../Graphql/Queries"
import { useQuery, useMutation } from "@apollo/client"
import { DELETE_USER } from "../Graphql/Mutation"

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);
  if (data) {
    console.log(data);
  }
  const [deleteUser, { error }] = useMutation(DELETE_USER);
  return (
    <div id={styles.container}>
      <Head>
        <title>Wire and Switch</title>
        <meta name="description" content="site for wire and switch" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.main}>
        <section id={styles.menu}>
          <div className="d-sm-offcanvas offcanvas-start" tabindex="-1" id={styles.offcanvasExample} aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header" id={styles.logo}>
              <button id={styles.bn} type="button" class="d-lg-none d-md-none d-block btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <img src="/ws.png" />
              <h4 className="fw-bold">Wire and Switch</h4>
            </div>
            <div className="offcanvas-body">
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
                <li>
                  <img src="/product.png" alt="product icon" height={20} width={20} />
                  <a href="/addProduct">Add Product</a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.interface}>
          <div className={styles.navigation}>
            <div className={styles.n1}>
              <div className="d-lg-none">
                <button className="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <img id={styles.demo} className={styles.menubtn} src='/menu.png' height={30} width={30} />
                </button>
              </div>
              <div className={styles.search}>
                <img src="/search-512.jpg" height={20} width={20} />
                <input className="bg-white text-dark" type="text" placeholder="search"></input>
              </div>
            </div>
            <div className={styles.n2}>
              <a href='.'>
                <img src="/refresh.png" height={27} width={27} />
              </a>
            </div>
          </div>
          <h4 className="fw-bold mx-4 px-3 py-4" id={styles.customer}>Customer Details</h4>
          <div className="justify-content-between" id={styles.table}>
            <table id={styles.tbl1} >
              <tr id={styles.tr1}>
                <th id={styles.td11} >ID</th>
                <th id={styles.td12} >NAME</th>
                <th id={styles.td13}>USERNAME</th>
                <th id={styles.td14} >ADDRESS</th>
                <th id={styles.td15}></th>
                <th id={styles.td15}></th>
                <th id={styles.td15}></th>
              </tr>
            </table>
            <div>{data && (data.getAllUsers.map((user) => {
              return (
                <table class="justify-content-between" id={styles.table}>
                  <tr id={styles.tr}>
                    <td id={styles.td}>{user.id}</td>
                    <td id={styles.td1}>{user.name}</td>
                    <td id={styles.td2}>{user.username}</td>
                    <td id={styles.td3}>{user.address}</td>
                    <td id={styles.td4}><a href='/product' className="text-decoration-dark text-dark">view products</a></td>
                    <td id={styles.td5}><a href='/wishlist' className="text-decoration-dark text-dark">view wishlist</a></td>
                    <td><a href='.'><button class="text-decoration-none" id={styles.remove} onClick={() => { deleteUser({ variables: { id: user.id } }) }}>remove</button></a></td>
                  </tr>
                </table>
              )
            }))}</div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default ListOfUsers
