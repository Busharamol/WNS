import Head from 'next/head'
import styles from '../styles/addProduct.module.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GET_ALL_CATEGORY, GET_ALL_PRODUCT } from '../Graphql/Queries';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../Graphql/Mutation';
import { useQuery, useMutation } from "@apollo/client"


function addProduct() {
    const { data } = useQuery(GET_ALL_PRODUCT);
    if (data) {
        // console.log(data);
    }
    const data1 = useQuery(GET_ALL_CATEGORY)
    var [id, setId] = useState("")
    var [p_name, setName] = useState("")
    var [description, setDes] = useState("")
    var [Rating, setRating] = useState("")
    var [price, setPrice] = useState("")
    var [discount, setDiscount] = useState("")
    var [org_price, setOrg] = useState("")
    var [img, setImg] = useState("")
    var [cat_name, setCat] = useState("")

    const [addProduct, setProduct] = useState([])


    if (!id) { id = addProduct.id }
    if (!p_name) { p_name = addProduct.p_name }
    if (!description) { description = addProduct.description }
    if (!Rating) { Rating = addProduct.Rating }
    if (!price) { price = addProduct.price }
    if (!discount) { discount = addProduct.discount }
    if (!org_price) { org_price = addProduct.org_price }
    if (!img) { img = addProduct.img }
    if (!cat_name) { cat_name = addProduct.cat_name }


    const [createProduct, { error }] = useMutation(CREATE_PRODUCT);
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
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
                            <a href="/category">Category</a>
                        </li>
                        <li>
                            <img src="/product.png" alt="product icon" height={20} width={20} />
                            <a>Add Product</a>
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
                    <h4 class="fw-bold mx-4 px-3 py-4 text-center" id={styles.category}>Add Product</h4>
                    <div class="card py-5" id={styles.card}>
                        <div id={styles.board} class="card-body bg-white text-center col-text-center">
                            <form class="form-inline" >
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3  d-flex " for="name">Name:</label>
                                    <input type="text" class="form-control w-75" id={styles.name} onChange={(event) => { setName(event.target.value); }} />
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="descr">Description:</label>
                                    <textarea class="form-control w-75" rows="5" id="comment" onChange={(event) => { setDes(event.target.value); }}></textarea>
                                </div>
                                <div class="form-group  my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="rating">Rating:</label>
                                    <input type="text" class="form-control w-75" id={styles.name} onChange={(event) => { setRating(event.target.value); }} />
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="price">Price:</label>
                                    <input type="text" class="form-control w-75" id={styles.name} onChange={(event) => { setPrice(event.target.value); }} />
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="discount">Discount:</label>
                                    <input type="text" class="form-control w-75" id={styles.name} onChange={(event) => { setDiscount(event.target.value); }} />
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="orgprice">Original Price:</label>
                                    <input type="text" class="form-control w-75" id={styles.name} onChange={(event) => { setOrg(event.target.value); }} />
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="cat">Category:</label>
                                    <select class="form-select w-75" aria-label="Default select example" onChange={(event) => { setCat(event.target.value); }}>
                                        {data1.data && (data1.data.getAllCategory.map((cat) => {
                                            return (
                                                <option>{cat.cat_name}</option>)
                                        }))}
                                    </select>
                                </div>
                                <div class="form-group my-3 ms-5">
                                    <label class="sr-only mx-3 d-flex" for="img">Image:</label>
                                    <input type="file" class="form-control w-75 " id={styles.name} onChange={(event) => { setImg(event.target.value); }} />
                                </div>
                                <a href='/addProduct' className='text-decoration-none d-flex '>
                                    <button type="submit" class="btn btn-default bg-dark text-white  ms-5" id={styles.btn}
                                        onClick={() => createProduct({
                                            variables: { p_name: p_name, description: description, Rating: Rating, price: price, discount: discount, org_price: org_price, img: img, cat_name: cat_name }
                                        })}>
                                        Add
                                    </button>
                                </a>
                            </form>
                        </div>
                    </div>
                    <div >
                        <table class="table table-light table-striped">
                            <thead>
                                <tr>
                                    <th id={styles.id} >ID</th>
                                    <th id={styles.id1}>NAME</th>
                                    <th id={styles.id2}>DESCRIPTION</th>
                                    <th id={styles.id3}>RATING</th>
                                    <th id={styles.id4}>PRICE</th>
                                    <th id={styles.id5}>DISCOUNT</th>
                                    <th id={styles.id6}>ORIGINAL PRICE</th>
                                    <th id={styles.id7}>CATEGORY</th>
                                    <th id={styles.id8}>IMAGE</th>
                                    <th id={styles.id9}></th>
                                </tr>
                            </thead>
                        </table>
                        <div>{data && (data.getAllProduct.map((product) => {
                            return (
                                <table class="table table-light table-striped">
                                    <tbody>
                                        <tr>
                                            <td id={styles.id}>{product.id}</td>
                                            <td id={styles.id1}><small>{product.p_name}</small></td>
                                            <td id={styles.id2}><small>{product.description}</small></td>
                                            <td id={styles.id3}><small>{product.Rating}</small></td>
                                            <td id={styles.id4}><small>{product.price}</small></td>
                                            <td id={styles.id5}><small>{product.discount}%</small></td>
                                            <td id={styles.id6}><small>{product.org_price}</small></td>
                                            <td id={styles.id7}><small>{product.cat_name}</small></td>
                                            <td id={styles.id8}><img src={product.img} /></td>
                                            <td id={styles.id9}><a href='/addProduct'><button className="text-decoration-none" id={styles.remove} onClick={() => { deleteProduct({ variables: { id: product.id } }) }}>remove</button></a></td>
                                            <td><button type="button" id={styles.remove} class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { setProduct(product) }}>update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        }))}
                        </div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Update Product</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3  d-flex " for="name">Name:</label>
                                                <input type="text" class="form-control w-75" id={styles.name} defaultValue={addProduct.p_name} onChange={(event) => { setName(event.target.value); }} />
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="descr">Description:</label>
                                                <textarea class="form-control w-75" rows="5" id="comment" defaultValue={addProduct.description} onChange={(event) => { setDes(event.target.value); }}></textarea>
                                            </div>
                                            <div class="form-group  my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="rating">Rating:</label>
                                                <input type="text" class="form-control w-75" id={styles.name} defaultValue={addProduct.Rating} onChange={(event) => { setRating(event.target.value); }} />
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="price">Price:</label>
                                                <input type="text" class="form-control w-75" id={styles.name} defaultValue={addProduct.price} onChange={(event) => { setPrice(event.target.value); }} />
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="discount">Discount:</label>
                                                <input type="text" class="form-control w-75" id={styles.name} defaultValue={addProduct.discount} onChange={(event) => { setDiscount(event.target.value); }} />
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="orgprice">Original Price:</label>
                                                <input type="text" class="form-control w-75" id={styles.name} defaultValue={addProduct.org_price} onChange={(event) => { setOrg(event.target.value); }} />
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="cat">Category:</label>
                                                <select class="form-select w-75" aria-label="Default select example" defaultValue={addProduct.cat_name} onChange={(event) => { setCat(event.target.value); }}>
                                                    {data1.data && (data1.data.getAllCategory.map((cat) => {
                                                        return (
                                                            <option>{cat.cat_name}</option>)
                                                    }))}
                                                </select>
                                            </div>
                                            <div class="form-group my-3 ms-5">
                                                <label class="sr-only mx-3 d-flex" for="img">Image:</label>
                                                <input type="file" class="form-control w-75 " id={styles.name} defaultValue={addProduct.img} onChange={(event) => { setImg(event.target.value); }} />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <a href='/addProduct'><button type="button" class="btn btn-primary" onClick={() => {
                                            updateProduct({
                                                variables: ({
                                                    id: id,
                                                    new_p_name: p_name,
                                                    new_description: description,
                                                    new_rating: Rating,
                                                    new_price: price,
                                                    new_discount: discount,
                                                    new_org_price: org_price,
                                                    new_img: img,
                                                    new_cat_name: cat_name
                                                })
                                            })
                                        }}>Update :)</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default addProduct;