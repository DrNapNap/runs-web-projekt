import React from 'react';


const Event = (props) => {
    const allimg = props.allbil.map(c => {
        return (
            <div key={c.id} className="card col-12 col-lg-4 d-flex justify-content-center " >
                
                <img src={'/img/produk/' + c.skofoto} className="img-fluid" /><h3>{c.skotekst}</h3>
            </div>
        )
    })
    return (
        <div className="container-fluid">






            <div className="row">
                <div className="col-12 img mark3">
                    <div className=" mark3 ">
                    
    <div className="row col-12 mark3 mark4 d-flex justify-content-end">
                    <div className=" text-left display-3 btn-secondary mark3 col-12 col-lg-6 ">WE LOVE <span className="gule-1 ">RUNING</span></div>
                    </div>
         </div>
                    

                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-9 img-1 mark3"> 
               
    <div className="row col-12 col-lg-12 mark3 mark4">
                    <div className=" text-right display-3 col-8 btn-secondary mark3">NEXT EVENT</div>
                    </div>
         
                </div>
                <div className="col-12 col-lg-3 hey-col">
                    <h2 className="display-4 pa">EVENTS</h2>
                    <h5>COPENHAGEN
  <br />
                        MARATHON
  <h6>Den 29. maj 2018</h6>
                    </h5>
                    <br />
                    <h5>
                        AARHUS CITY RUN
                      
  <h6>Den 1. juni 2018</h6>
                    </h5>

                    <br />
                    <h5>
                        BERLIN MARATHON   
  <h6>Den 6. juni 2018</h6>
                    </h5>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <br/>
                        <div className="hey-col-1 col-12 col-lg-3 ">
                            <h2 className="display-4 shop shop-p">SHOP</h2>
                            <h4 className="shop-p">RUNINC SHOP</h4>
                            <h5 className="shop-p">Gratis fragt ved over kr. 500
          <p className="shop-1 ">Adidas</p>
                                <p className="shop-1 ">Adidas</p>
                                <p className="shop-1 ">Asics</p>
                                <p className="shop-1 ">Hummel</p>
                            </h5>
                        </div>
                        <div className="col-12 col-lg-9 d-flex justify-content-center ">
                        <div className="row col-12 d-flex justify-content-center">
                    <div className="display-3 black  ">SHOP</div>
                    <div className="col-12 d-flex flex-wrap">
                        {allimg}
                   </div></div>
</div>
                    </div>

                </div>
<div className="img-2 col-12 mark3 col-lg-6">   
<div className=" text-right display-3 col-12 col-lg-8 gule mark1-2">CONTACT</div>
    
</div>
                    <form className="form-group col-12 col-lg-6">
                        <h1 className="text-center mark1 display-4">SEND EN BESKED</h1>
<div className="d-flex justify-content-center flex-column w-50 m-auto">
                        <label for="exampleFormControlInput1">Navn</label>
                        <input type="navn" className="form-control gule" id="exampleFormControlInput1" placeholder="navn"/>
                    </div>
                        <div className="d-flex justify-content-center flex-column w-50 m-auto ">
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control gule " id="exampleFormControlInput1"
                                placeholder="name@example.com"/>
                       </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Text</label>
                            <textarea className="form-control gule " id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="">
                            <button type="button" className="btn btn-secondary padding">SEND BESKED</button>
                        </div> 
                        </div>
                            
                    </form>        
                   
<div className="col-12 col-lg-6 text-center btn-secondary mark3">
    <h1 className="text-center">RUNINC</h1>
    <p>kannikegade 12</p>
    <p>8000 Århus</p>
    <p>Telefon 26 13 26 96</p>
    <p className="mark2">info@runinc.dk</p>
</div>

</div>
           
        

</div>

    )

};



export default Event