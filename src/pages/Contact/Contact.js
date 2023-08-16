import React, { Component } from 'react';
import FooterOnly from '~/layouts/FooterOnly/FooterOnly.js';
import Tabs from '~/components/tabs/tabs';
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import './contact.css'

function Contact() {
    return (
        <FooterOnly>
          <div className='contact'>
            <iFrame src="https://tawk.to/chat/64da2a5594cf5d49dc6a4e9b/1h7q3anhe" width="680" height="480" allowfullscreen></iFrame>
          </div>
        </FooterOnly>
    );
  }

export default Contact;