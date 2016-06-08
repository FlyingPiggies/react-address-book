import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

import { addContact, updateContact } from 'app/actions/contacts';
import styles from './cool.styl';

@connect(null, {
  addContact,
  updateContact,
})
export default class SearchPanel extends Component {
  static propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    details: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    addContact: PropTypes.func,
    updateContact: PropTypes.func,
  };

  save = () => {
    const firstName = findDOMNode(this.refs.fname).value;
    const lastName = findDOMNode(this.refs.lname).value;
    const details = findDOMNode(this.refs.details).value;
    const type = findDOMNode(this.refs.contacttype).value;
    const title = findDOMNode(this.refs.title).value;
    const email = findDOMNode(this.refs.email).value;
    const phone = findDOMNode(this.refs.phone).value;
    const address = findDOMNode(this.refs.address).value;

    //New fields
    const stuff = { firstName, lastName, details, type, title, email, phone, address };
    if(this.props.id) {
      this.props.updateContact(this.props.id, stuff);
    } else {
      this.props.addContact(stuff);
    }

  }



  render() {
    const { firstName, lastName, details, type, title, email, phone, address } = this.props;
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="fname">First name:</label>
            <input className={styles.form_input} id="fname" ref="fname" type="text" value={firstName} />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="lname">Last name:</label>
            <input className={styles.form_input} id="lname" ref="lname" type="text" value={lastName} />
          </div>

          <div className="form-group col-md-4"> 
            <label htmlFor="title">Title:</label> 
            <select className={styles.form_select} id="title" ref="title" defaultValue={title}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms" >Ms</option>
            </select> 
          </div>

        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="contacttype">Contact Type:</label>
            <select className={styles.form_select} id="contacttype" ref="contacttype" defaultValue={type}>
              <option value="Personal" >Personal</option>
              <option value="Business" >Business</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="email">Email:</label>
            <input className={styles.form_input} id="email" ref="email" type="text" value={email} />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="phone">Phone:</label>
            <input className={styles.form_input} id="phone" ref="phone" type="text" value={phone} />
          </div>
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input className={styles.form_input} type="text" id="address" ref="address" value={address} />
        </div>
        <br />
        <label htmlFor="details">Details:</label>
        <textarea id="details" ref="details" className={styles.form_field} placeholder={`Describe yourself... make it brief... we don't want to know too much...\nSimple things...\n\nSo, what's your bank details?`}>{details}</textarea>
        <br />
        <div className={styles.button_wrapper}>
          <button className={`btn btn-default`} onClick={this.save}>Save</button>
        </div>
      </form>
    );
  }
}
