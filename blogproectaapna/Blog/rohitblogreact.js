import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Card(props) {
  return (
    <div className='box'>
      <img className="image" src={props.image} alt='image' width='150px' />
      <div className="block">
        <p className="show">CATEGORY</p>
        <h4><b />{props.head}</h4>
        <p className="clearBtn">{props.description}</p>
        <a className="sxprova" href={props.link}>Read Full Story here...</a>
      </div>
    </div>

  );
}


ReactDOM.render(
  <>
    <h3 className="heading_style">Related Blogs</h3>
    <div className="container">

      <Card image="https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg"
        head="What you want to know about HTML"
        description="Description:- HTML is referred to as the foundational language of the web and 
                     rightly so because HTML is responsible for the basic structure of the web pages
                     as it creates the skeleton of the web pagedeac."
        link="https://www.konfinity.com/5-best-blogs-for-html"
      />

      <Card image="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        head="What you want to know about CSS"
        description="Description:-CSS is growing in scope and power with each passing year. It's a
                     great time to be a web developer,but it can be challenging to stay up-to-date with the 
                     latest features which is explained here in blog"
        link="https://blog.logrocket.com/the-latest-features-of-css-in-2021/"
      />

      <Card image="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg"
        head="What you want to know about Javascript"
        description="Description:-JavaScript is used by almost every website on the internet,Each
                     Each of these sites demonstrates technical expertise  I looked at the depth of each blog’s 
                     technical content and the usefulness of that content."


        link="https://draft.dev/learn/javascript-blogs"
      />
    </div>
  </>,
  document.getElementById('root')
);