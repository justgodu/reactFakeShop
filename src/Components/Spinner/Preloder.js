import Loader from 'react-loader-spinner'
import React from "react";
import "./preloader.css";

export default class Preloder extends React.Component {
  //other logic
    render() {
     return(
      <div className="loader_container">
        <div className="loader_style">

         <Loader
         type="Oval"
         color="#FAEBD7"
         height={100}
         width={200}
          //3 secs
         margin={"auto"}
         />
        </div>
        </div>

     );
    }
 }
