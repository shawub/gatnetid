# GATNETID
A PoC demonstration of OAuth using Netlify Identity. The PoC is built with Gatsby static site builder, deployed on Netlify an dusing Netlify functions as a backend.

## Prerequisites
- Node 
- Gatsby CLI
- A netlify account
- A github account

## React Hooks for State Managment

```javascript
import React, { useState, useEffect } from 'react';
...

const IndexPage = () => {

  const [userObj, setUserObj] = useState({
    isAuthenticated: false,
    user: null
  });

  useEffect(()=> {
    // You must run this once before trying to interact with the widget
    netlifyIdentity.init();
    netlifyIdentity.open('login');
    console.log(userObj.user);
    return () => {
      netlifyIdentity.logout();
    };
  })

  ...

```