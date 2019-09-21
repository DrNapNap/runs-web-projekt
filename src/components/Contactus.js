import React from 'react';


const Contactus = () => {
    return (
        <div className="container-fluid">
            <div className="row ">

                <div className="img-2 col-6">


                </div>




                <form className="form-group col-6">
                    <h1 className="text-center display-4">SEND EN BESKED</h1>
                    <div className="d-flex justify-content-center flex-column w-50 m-auto">
                        <label for="exampleFormControlInput1">Navn</label>
                        <input type="navn" className="form-control gule" id="exampleFormControlInput1" placeholder="navn" />
                    </div>
                    <div className="d-flex justify-content-center flex-column w-50 m-auto ">
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control gule" id="exampleFormControlInput1"
                                placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Text</label>
                            <textarea className="form-control gule border" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="">
                            <button type="button" className="btn btn-secondary padding">SEND BESKED</button>
                        </div>
                    </div>

                </form>

                <div className="col-6 text-center btn-secondary">
                    <h1 className="text-center">RUNINC</h1>
                    <p className="">kannikegade 12</p>
                    <p>8000 Århus</p>
                    <p>Telefon 26 13 26 96</p>
                    <p className="mark2 ">info@runinc.dk</p>
                </div>

            </div>


        </div>

    )
};



export default Contactus