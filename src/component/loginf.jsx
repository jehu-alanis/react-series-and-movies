import React, {Fragment }from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';


const Loginf = () => {
    

    const responseFacebook =  (response) => {
       
      //  console.log(response);        
       window.location.href = '/peliculas';
        localStorage.setItem("logged", true);
        

       
      }
 
      const responseGoogle = (response) => {
        window.location.href = '/peliculas';
        localStorage.setItem("logged", true);
        }


    return (
        <Fragment>
        <div className="container p-4">
        <div className="row">
        
<div className="col-md-4 mx-auto">
    <div className="card text-center">
      <div className="card-header">   
      <h2>BIENVENIDO</h2>     
    
      <div className="form-group">
      
      <FacebookLogin
       appId="486788962200910"
       autoLoad={false}
       fields="name,email,picture"
       size="small"
       
    ///   onClick={componentClicked}
       callback={responseFacebook} 
    
    icon="fa-facebook"/>
   
     </div>
   
<p>O</p>


     <div className="form-group">
<GoogleLogin
    clientId="128873676278-533nttib1u4osjh2isgp38lk5jt9h2bq.apps.googleusercontent.com"
 //   buttonText="LOGIN"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
     </div>

</div>
</div>
</div>
</div>    
    </div>


    </Fragment>
    );
}
 
export default Loginf;