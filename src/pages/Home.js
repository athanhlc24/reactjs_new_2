import React, { useEffect, useState } from "react";
import { get } from './../services/product.service'; 
import { NavLink } from "react-router-dom";
function Home(props){
  const [products,setProduct] = useState([]);
  const  getProducts = async()=>{
      try {
          const rs = await get();
          setProduct(rs);
      } catch (error) {
          
      }
     

  }
  useEffect(()=>{

  });//COMPONENT DID UPDATE
  useEffect( ()=>{
      getProducts();
  },[]);//COMPONENT DID MOUNT
  useEffect(()=>{

  },[products]);// RUN WHEN PRODUCTS UPDATE
    return (
        <section>
            <div className='container'>
            <div className='row'>
                <div className="col-3">
                    <h3> danh mục</h3>
                </div>
                <div className="col-9">
                <h3>Danh sách sản phẩm</h3>
                {
                    products.map((e,k)=>{
                    return (
                        <div key={k} className='col-3'>
                        <div className="card">
                            <img src={e.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.description}</p>
                            <span className='text-danger'>{e.price}</span>
                            <NavLink to={"/product/"+e.id} className="btn btn-primary">Buy</NavLink>
                            </div>
                        </div>
                        </div>
                    )
                    })
                }
                </div>
                </div>
            </div>
        </section>
    );
  }


export default Home;