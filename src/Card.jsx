import React from 'react';
import GitHubCalendar from 'github-calendar';

import './github-calendar-responsive.css'

class Card extends React.Component {
  state = {
    user: this.props.user
  }

  componentDidMount = () => {
    const cal = document.querySelector( `.${ this.state.user.login }` );
    new GitHubCalendar( cal, this.state.user.login, { responsive: true } );
  };

  render()  {
    return (
      <div className='card-wrapper'>
        <section className='card'>
          <img src={ `${ this.state.user.avatar_url }` } alt='user' />
          <div className='card-info'>
            <h3 className='name'>{ this.state.user.name }</h3>
            <p className='username'>{ this.state.user.login }</p>
            <p className='location'>Location: { this.state.user.location }</p>
            <p className='profile'>Profile: <a href={ `${ this.state.user.url }` } >{ this.state.user.url }</a></p>
            <p className='followers'>Followers: { this.state.user.followers }</p>
            <p className='following'>Following: { this.state.user.following }</p>
            <p className='bio'>Bio: { this.state.user.bio }</p>
          </div>
        </section>
        <div className={ `calendar ${ this.state.user.login }` }></div>
      </div>
    );
  };
  
}

export default Card;