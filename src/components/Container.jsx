import React, { memo }  from  'react';
import useFetch from '../effects/use-fetch.effect';
import Usuario from './Usuario';
import './Container.css';


function Container(){

    const users = useFetch(
        'https://fakerapi.it/api/v1/users?_quantity=20'
        //'https://jsonplaceholder.typicode.com/users'
    );
    
  
    const renderUsers = (user) => {
      return(<Usuario user={user} key={user.id} />)
    }
  
    return(
        <div className='container'>
          {Array.isArray(users) && users.map(renderUsers)}
        </div>
      )
  }
  
  export default memo(Container);
