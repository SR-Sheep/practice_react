import React from "react";
import { Component } from "react";

class Content extends Component{

    render(){
        console.log("Content render");

        return(
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language
            </article>
        );
    }
}

export default Content;