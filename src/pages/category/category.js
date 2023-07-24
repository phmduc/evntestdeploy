import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';

class Category extends Component {
  render() {
    return (
        <FooterOnly>
            <Tabs/>
        </FooterOnly>
    );
  }
}

export default Category;