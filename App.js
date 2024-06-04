import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
      return (
        <div class="header">
            <div className="logo"><img src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"></img></div>
            <div className="navItem">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
      )
}

const Restrocard = () => {
      return (
        <div className="restroCard">
            <div className="restroCardImage">
                 <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
            </div>
            <div className="restroCardContent">
                <h2 className="restroCardheading">Chinese Wok</h2>
                <div className="ratingTime">
                    <span className="rating">4.2•</span>
                    <span className="timing">25-30 mins</span>
                </div>
                <div className="cusine">Chinese, Asian, Tibetan, Desserts</div>
                <div className="address">Mayur Vihar</div>
            </div>
        </div>
      )
}

const BodyComponent = () => {
    return (
        <div className="bodyContainer">
             <div className="search">Search</div>
            <div className="restroCardContainer">
                <Restrocard/>
                <Restrocard/>
                <Restrocard/>
                <Restrocard/>
                <Restrocard/>
                <Restrocard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <BodyComponent/>
            {/* Footer */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
   
