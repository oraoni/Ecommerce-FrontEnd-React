import React from 'react';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

    const openMenu=() =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>&#9776;</button>
                        <Link to="/" >Gamer's Hub</Link>
                    </div>
                    <div className="header-links">
                        <p href="cart.html">Cart</p>
                        <p href="signin.html">Sign in</p>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Archeage</a>
                        </li>
                        <li>
                            <a href="index.html">Tibia</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/product/:_id" component={ProductScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                        
                    </div>

                </main>
                <footer className="footer">
                    All rights reserved.
                </footer>
            </div>
        </BrowserRouter>    
  );
}

export default App;
