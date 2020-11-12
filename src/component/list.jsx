import React,{ useEffect,useState,Fragment } from "react";
import Card from "../component/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const List =()=>{

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=b4b5bba';


    const [pelis, setPelis] = useState(
{
        data: [],
        loading: true,
        searchTerm: "",
        error: "",
    });

     

    const getMovie = async () => {
      // search
      const res = await fetch(`${API}&s=marvel&y=2019`)
      const resJSON = await res.json()
  

      if (resJSON) {
          setPelis({
            data: resJSON.Search,
            loading: false,
            error: "",
           
          });
        }

    };
 





      useEffect(() => {
        // const res = await fetch("../../assets/data.json");
       
     
     
     
        getMovie();
      }, []);


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (pelis.searchTerm === "") {
          return setPelis({ ...pelis, error: "Please write a valid text / Por favor escriba un texto valido" });
        }
    
        const response = await fetch(`${API}&s=${pelis.searchTerm}`);
        const data = await response.json();
    
        if (!data.Search) {
          return setPelis({ ...pelis, error: "There are no results. / Sin resultados." });
        }
    
        return setPelis({
          data: data.Search,
          searchTerm: "",
          error: "",
        });
      };



      const { data,loading} = pelis;

      if (loading) {
        return <div>Loading...
          <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
             


        </div>;
      }

return(
    <Fragment>
    <div className="row sticky-top">
            <div className="col-md-4 offset-md-4 p-4 ">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search Movies or Series"
                  onChange={(e) => setPelis({...pelis, searchTerm: e.target.value })}
                  value={pelis.searchTerm}
                  autoFocus
                />
              </form>
              <p className="text-white">{pelis.error ? pelis.error : ""}</p>
            </div>
          </div>

    <div className="row pt-4">
        {data.map((movie,i) => {
         return <Card movie={movie} key={i}/>
        }
        )
        }
      </div>
      </Fragment>
)

}


export default List;