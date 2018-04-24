import React, {Component} from 'react';
import './styles.css';

class About extends Component {
  render(){
    return(
      <div className="wrapper" id="ABOUT">
	      <div className="square">
		      <div className="diamond"></div>
	      </div>

	    <div className="about about-content">
        <h3>About Faadia Langeveldt</h3>
		      <p>I'm extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas for unforgettable and creative web designs.</p>

		      <p>I am competitive when need be, with an approach focusing on functionality. I have a high desire to learn, grown and develop as well as help others in these aspects.</p>
					
		      <p>I believe in maintaining high standards and possess excellent critical thinking and problem solving ability. I demonstrate a high degree of competence at all times and a continuing appetite to learn more.</p>
      </div>
      <hr />
    </div>
    
    );
  }
}

export default About;