import React from 'react';


const Shop = (props) => {


    const allimg = props.allbil.map(c => {
        return (
            <div key={c.id} className="card w h-50" >
                
                <img src={'/img/produk/' + c.skofoto} className="img-fluid" /><h3>{c.skotekst}</h3>
            </div>
        )
    })


    return (


        <div className="container-fluid">

            <div className="row">
                <div className="hey-col-1 col-5 h-e">
                    <h2 className="display-4 shop shop-p">SHOP</h2>
                    <h4 className="shop-p">RUNINC SHOP</h4>
                    <h5 className="shop-p">Gratis fragt ved over kr. 500</h5>
                    <p className="shop-1 ">Adidas</p>
                    <p className="shop-1 ">Adidas</p>
                    <p className="shop-1 ">Asics</p>
                    <p className="shop-1 ">Hummel</p>


                </div>
                <div className="row  col-7">
                    <div className="display-3 black     ">SHOP</div>


                    <div className="col-12 flex-wrap d-flex">


                        {allimg}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop