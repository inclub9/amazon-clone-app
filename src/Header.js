import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import "./Header.css"
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                {/*1st link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, User</span>
                        <span className="header__optionLineTwo">Sign</span>
                    </div>
                </Link>
                {/*2st link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>
                {/*3st link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">You</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                {/*  number of items in the basket  */}
                <span className="header__optionLineTwo header__basketCount">2</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header