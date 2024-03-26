import react from "react";
import NewsContext from "./newsContext";

//NewsState can be understand as Layout and NewsContext can be unserstood and Navbar and footer component
const NewsState = (props)=>{
    const state = {
        name:"Harish",
        appName: "BharatNews"
    }
    
    return(
        //sending state and function as props to the NewsContext so that any component/page using this NewsContext can use the state as well as update function
        <NewsContext.Provider value={state}>   
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;