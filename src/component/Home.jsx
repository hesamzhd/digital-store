import { useState, useEffect } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";
import data from './data.json'
import { json } from "react-router-dom";

const Home = () => {
    const [item, setItem] = useState(data.products)
    const [sort, setSort] = useState('asc')
    const [store , setStore] = useState([])

    const sortProduct = (event) => {
        setSort(event.target.value)
        if(sort === 'asc'){
            setItem(data.products.sort((a,b) => (a.id < b.id ? 1 : -1)))
        }
        if(sort === 'desc'){
            setItem(data.products.sort((a,b) => (a.id > b.id ? 1 : -1)))
        }
    }

    const sortBrand = (event) => {
        if(event.target.value === ""){
            setItem(data.products)
        }
        else{
            setItem(data.products.filter((product) => (product.availableBrand == event.target.value)))
        }
    }

    const addToStore = (item) => {
        const exist = store.find((element) => element.id === item.id)
        if(exist){
            setStore(store.map((element) => element.id === item.id ? {...exist, qty: exist.qty + 1} : element))
        }else{
            setStore([...store , {...item, qty: 1}])
        }

    }

    const removeOfStore = (p) => {
        if(p.qty === 1){
            const newstore = store.filter((item) => item.id !== p.id)
            setStore(newstore)
        }else{
            setStore(store.map((element) => element.id === p.id ? {...p, qty: p.qty - 1} : element))
        }
    }

 
    return (
        <div className="container">
            <header>
                <a href="#">
                    فروشگاه من
                </a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count={item.length} sortProduct={sortProduct} sortBrand={sortBrand} />
                        <Products item={item} addToStore={addToStore} />
                    </div>
                    <div className="sidebar">
                        <Cart store={store} removeOfStore={removeOfStore} />
                    </div>
                </div>
            </main>
            <footer>
                توسعه توسط من و اون
            </footer>
        </div>
    );
}

export default Home;