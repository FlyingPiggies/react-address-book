import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import { Navbar } from 'react-bootstrap';
import styles from './styles.styl';


//@connect(null, {
//  search,
//})
export default class HeaderPanel extends Component {
  
  render() {
    return (
    <div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">Contacts</div>
				<div className="navbar-collapse collapse">
				  <ul className="nav navbar-nav">
				    <li className="active"><a href="#">Home</a></li>
				    <li><a href="#add">Add Contact</a></li>
				  </ul>
				</div>
			</div>
		</nav>
      </div>
    );
  }
}
