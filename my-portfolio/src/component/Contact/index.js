import React, {Component} from 'react';
import './styles.css';

class Contact extends Component {
  render() {
    return(
      <div className="contact" id="CONTACT">
        <div className="container">
          <h3>Hire me</h3>
          <form action="#">

            <div className="contact-group">
              <label for="inputName">Full name :</label>
              <input type="text" placeholder="Faadia Langeveldt" required />
            </div>

            <div className="contact-group">
              <label for="inputMail" >Email Add:</label>
              <input type="email" id="inputMail" placeholder="faadialangeveldt.10@gmail.com" required />
            </div>

            <div className="contact-group">
              <label for="inputMessage">Message :</label>
              <textarea name="message" cols="40" rows="10" required></textarea>
            </div>

            <div className="contact-group">
              <button type="submit" value="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;