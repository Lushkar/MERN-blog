import React, {Component, useState} from 'react';
import hamburger from '../icons/hamburger_menu.svg';
import github from '../icons/icons8-github.svg';
import home from '../icons/icons8-home.svg';

class NavBar extends Component {


    state = {
        open: false
    }


    handleMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        // Get all the icons and pre process here or in component did mount




        return (
            <nav className='nav-bar'>
                <h1 className="blog-title">Ahad's Mundane Adventures</h1>
                <button className='menu-button' onClick={this.handleMenu}>
                    <img src={hamburger} alt="menu-button"/>
                </button>
                {this.state.open && <Menu/>}
            </nav>
        );
    }
}

class Menu extends Component {
    

    render() {

        return(
            <div className="menu">
                <ul>
                    <NavItem icon={home} link=''>Home</NavItem>
                </ul>
            </div>
        )
    }
}

function NavItem(props) {
    return(
        <li className="nav-item">
            <a href={props.link} className="nav-icon">
                
                {props.children}
            </a>
        </li>
    )
}




export default NavBar;