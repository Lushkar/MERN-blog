import React, {Component} from 'react';
import hamburger from '../icons/hamburger_menu.svg'

class NavBar extends Component {

    handleMenu = () => {
        console.log(`Need to implement a function to handle menu in NavBar`)
    }

    render() {
        return (
            <nav className='nav-bar'>
                <h1 className="blog-title">Ahad's Mundane Adventures</h1>
                <button className='menu-button' onClick={this.handleMenu}>
                    <img src={hamburger} alt="menu-button"/>
                </button>
            </nav>
        );
    }
}


export default NavBar;