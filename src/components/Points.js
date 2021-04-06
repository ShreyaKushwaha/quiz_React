import React from "react";


function Points(props){
    
    return(
        <div className="pts">
            <p>Correct Answers : {props.ca}/{props.dataa}</p>
        </div>

    );
}

export default Points
