import React from 'react';
import Card from './Card';

const Usuario = ({ user }) => {
  return (
    <Card id={user.id}>
      {user ? (
            <div className="polaroid">
                <img className="photo" src={user.image} alt="" />

                <div className="caption">
                    <h3>{user.firstname} {user.lastname}</h3>
                    <p> Usuário: <b>{user.username}</b></p>
                    <p> E-mail: <b>{user.email}</b></p>
                    
                    <a href=""><h4>{user.website}</h4></a>
                </div>
            </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </Card>
  );
};

export default Usuario;