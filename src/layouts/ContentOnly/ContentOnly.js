import React, { Component } from 'react';
import { Fragment } from "react";
import Header from "~/components/header/header.js";
import Footer from "~/components/footer/footer.js";
import Navigation from "~/components/navigation/navigation.js";



class ContentOnly extends Component {
  render() {
   return( 
   <Fragment>
        <div className=''>
            {this.props.children}
            <Footer/>
        </div>
    </Fragment>
   )
  }
}

export default ContentOnly;