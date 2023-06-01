import React, {Fragment}from 'react';
import { Link  } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-copyright text-center py-3">
        
          &copy; {new Date().getFullYear()} Copyright: Jehu Alanis Ozuna
        
      </div>
      <div className="footer-copyright text-center py-3">
      <Link to='/politica'>Privacy Policy 
        </Link>
        </div>
        </Fragment>
    );
}
 
export default Footer;