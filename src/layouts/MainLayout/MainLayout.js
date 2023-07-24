import React, { Component } from 'react';
import { Fragment } from "react";
import Header from "~/components/header/header.js";
import Footer from "~/components/footer/footer.js";
import Navigation from "~/components/navigation/navigation.js";



class MainLayout extends Component {
  render() {
   return( 
   <Fragment>
        <div className='' style={{backgroundColor: '#f3f3f3'}}>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    </Fragment>
   )
  }
}

export default MainLayout;