import React from 'react';

const Card = ( props ) => {
  const user = props.user;
  
  return (
    <section className='card'>
      <img src={ `${ user.avatar_url }` } alt='user' />
      <div className='card-info'>
        <h3 className='name'>{ user.name }</h3>
        <p className='username'>{ user.login }</p>
        <p className='location'>Location: { user.location }</p>
        <p className='profile'>Profile: <a href={ `${ user.url }` } >{ user.url }</a></p>
        <p className='followers'>Followers: { user.followers }</p>
        <p className='following'>Following: { user.following }</p>
        <p className='bio'>Bio: { user.bio }</p>
      </div>
    </section>
  );
}

export default Card;