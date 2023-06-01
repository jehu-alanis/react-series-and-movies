import React, {Fragment }from 'react';
import FacebookLogin from 'react-facebook-login';


const Loginf = () => {
    

    const responseFacebook =  (response) => {
       
      //  console.log(response);        
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
   

</div>
</div>
</div>
</div>    
    </div>


    </Fragment>
    );
}
 
export default Loginf;