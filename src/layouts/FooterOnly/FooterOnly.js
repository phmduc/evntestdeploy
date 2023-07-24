import React, { Component } from 'react';
import { Fragment } from "react";
import Footer from "~/components/footer/footer.js";



class FooterOnly extends Component {
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

export default FooterOnly;