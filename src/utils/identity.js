import { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
// You must run this once before trying to interact with the widget
if (process.browser) { 
  netlifyIdentity.init();
}

const useIdentity = () => {
  if (process.browser) {
    const [user, setUser] = useState(null);
    useEffect(()=> {
      const user = netlifyIdentity.currentUser();
      if ( user ){
        setUser(user);
      } else {
        netlifyIdentity.open();
        netlifyIdentity.on('login', user => {
          setUser(user);
        });
      }
    });
    return user;
  } else {
    return null;  
  }
}

export default useIdentity;