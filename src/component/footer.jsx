import React, {Fragment}from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-copyright text-center py-3">
        
          &copy; {new Date().getFullYear()} Copyright: Jehu Alanis Ozuna
        
      </div>
        </Fragment>
    );
}
 
export default Footer;