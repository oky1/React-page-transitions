import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';


const animation = [
  'moveToLeft'           ,  // 0 / Move to left/ from righ         / timer 600
  'moveToRight'          ,  // 1 / Move to right/ from left        / timer 600
  'moveToTop'            ,  // 2 / Move to top/ from bottom        / timer 600
  'moveToBottom'         ,  // 3 / Move to bottom/ from top        / timer 600
  'fadeFromRight'        ,  // 4 / Fade / from right               / timer 700
  'fadeFromLeft'         ,  // 5 / Fade / from left                / timer 700
  'fadeFromBottom'       ,  // 6 / Fade / from bottom              / timer 700
  'fadeFromTop'          ,  // 7 / Fade / from top                 / timer 700
  'moveToLeftFade'       ,  // 8 / Fade left / Fade right          / timer 700
  'moveToRightFade'      ,  // 9 / Fade right / Fade left          / timer 700
  'moveToTopFade'        ,  // 10 / Fade top / Fade bottom         / timer 700
  'moveToBottomFade'     ,  // 11 / Fade bottom / Fade top         / timer 700
  'moveToLeftEasing'     ,  // 12 / Different easing / from right  / timer 700
  'moveToRightEasing'    ,  // 13 / Different easing / from left   / timer 700
  'moveToTopEasing'      ,  // 14 / Different easing / from bottom / timer 700
  'moveToBottomEasing'   ,  // 15 / Different easing / from top    / timer 700
  'scaleDownFromRight'   ,  // 16 / Scale down / from right        / timer 600
  'scaleDownFromLeft'    ,  // 17 / Scale down / from left         / timer 600
  'scaleDownFromBottom'  ,  // 18 / Scale down / from bottom       / timer 600
  'scaleDownFromTop'     ,  // 19 / Scale down / from top          / timer 600
  'scaleDownDown'        ,  // 20 / Scale down / scale down        / timer 600
  'scaleUpUp'            ,  // 21 / Scale up / scale up            / timer 800
  'scaleLeftUp'          ,  // 22 / Move to left / scale up        / timer 600
  'scaleRightUp'         ,  // 23 / Move to right / scale up       / timer 600
  'scaleTopUp'           ,  // 24 / Move to top / scale up         / timer 600
  'scaleBottomUp'        ,  // 25 / Move to bottom / scale up      / timer 600
  'scaleDownUp'          ,  // 26 / Scale down / scale up          / timer 800
  'glueLeftFromRight'    ,  // 27 / Glue left / from right         / timer 800
  'glueRightFromLeft'    ,  // 28 / Glue right / from left         / timer 800
  'glueBottomFromTop'    ,  // 29 / Glue bottom / from top         / timer 800
  'glueTopFromBottom'    ,  // 30 / Glue top / from bottom         / timer 800
  'flipRight'            ,  // 31 / Flip right                     / timer 1000
  'flipLeft'             ,  // 32 / Flip left                      / timer 1000
  'flipTop'              ,  // 33 / Flip top                       / timer 1000 
  'flipBottom'           ,  // 34 / Flip bottom                    / timer 1000
  'fall'                 ,  // 35 / Fall                           / timer 1000
  'newspaper'            ,  // 36 / Newspaper                      / timer 1000
  'pushLeftRight'        ,  // 37 / Push left  / from right        / timer 800
  'pushRightLeft'        ,  // 38 / Push right / from left         / timer 800
  'pushTopBottom'        ,  // 39 / Push top / from bottom         / timer 800
  'pushBottomTop'        ,  // 40 / Push bottom / from top         / timer 800
  'pullLeftRight'        ,  // 41 / Push left / pull right         / timer 800
  'pullRightLeft'        ,  // 42 / Push right / pull left         / timer 800
  'pullTopBottom'        ,  // 43 / Push top / pull bottom         / timer 800
  'pullBottomTop'        ,  // 44 / Push bottom / pull top         / timer 800
  'foldLeftRight'        ,  // 45 / Fold left / from right         / timer 700
  'foldRightLeft'        ,  // 46 / Fold right / from left         / timer 700
  'foldTopBottom'        ,  // 47 / Fold top / from bottom         / timer 700
  'foldBotoomTop'        ,  // 48 / Fold bottom / from top         / timer 700
  'unfoldRightLeft'      ,  // 49 / Move to right / unfold left    / timer 700
  'unfoldLeftRight'      ,  // 50 / Move to left / unfold right    / timer 700
  'unfoldBottomTop'      ,  // 51 / Move to bottom / unfold top    / timer 700
  'unfoldTopBottom'      ,  // 52 / Move to top / unfold bottom    / timer 700
  'roomLeft'             ,  // 53 / Room to left                   / timer 700
  'roomRight'            ,  // 54 / Room to right                  / timer 700
  'roomTop'              ,  // 55 / Room to top                    / timer 800
  'roomBottom'           ,  // 56 / Room to bottom                 / timer 800
  'cubeToLeft'           ,  // 57 / Cube to left                   / timer 600
  'cubeToRight'          ,  // 58 / Cube to right                  / timer 600
  'cubeToTop'            ,  // 59 / Cube to top                    / timer 600
  'cubeToBottom'         ,  // 60 / Cube to bottom                 / timer 600
  'carouselToLeft'       ,  // 61 / Carousel to left               / timer 800
  'carouselToRight'      ,  // 62 / Carousel to right              / timer 800
  'carouselToTop'        ,  // 63 / Carousel to top                / timer 800
  'carouselToBottom'     ,  // 64 / Carousel to bottom             / timer 800
  'sides'                ,  // 65 / Sides                          / timer 700
  'slide'                ,  // 66 / Slide                          / timer 1000
  'paperRight'           ,  // 67 / paper to right                 / timer 1000
  'paperLeft'            ,  // 68 / paper to left                  / timer 1000
  'paperMiddle'          ,  // 69 / paper middle                   / timer 1000
  'paperBottomLeft'      ,  // 70 / paper from bottom to left      / timer 1000
  'paperBottomRight'     ,  // 71 / paper from bottom toright      / timer 1000
  'paperTopLeft'         ,  // 72 / paper from top to left         / timer 1000
  'paperTopRight'        ,  // 73 / paper from top to right        / timer 1000
  'brickRight'           ,  // 74 / brick right top                / timer 1000
  'brickLeft'            ,  // 75 / brick left                     / timer 1000
  'bounceVertical'       ,  // 76 / bounce vertical                / timer 1000
  'bounceHorizontal'     ,  // 77 / bounce horizontal              / timer 1000
  'rotateRight'          ,  // 78 / rotate  to right               / timer 1000 
  'rotateLeft'           ,  // 79 / rotate  to left                / timer 1000
  'backfaceLeft'         ,  // 80 / backface left                  / timer 1000
  'backfaceRight'        ,  // 81 / backface right                 / timer 1000
  'backfaceTop'          ,  // 82 / backface top                   / timer 1000
  'backfaceBottom'       ,  // 83 / backface top                   / timer 1000
  'tv'                   ,  // 84 / tv                             / timer 1000
];

let counter = 0;
let numAnimation = 84; 
let timer = 1000;

class Example extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {num:animation[numAnimation]}
  // }
  
   render(){
    return (
      <div>
          <ul className="page-nav">
            {/*<li><Link to="/page1" activeStyle={{ opacity: '1' }}>Page 1</Link></li>
            <li><Link to="/page2" activeStyle={{ opacity: '1' }}>Page 2</Link></li>*/}
            <li>{animation[numAnimation]}</li>
          </ul>

          <ReactCSSTransitionGroup
            component="div"
            className='perspective'
            transitionName={animation[numAnimation]} 
            transitionEnterTimeout={timer}
            transitionLeaveTimeout={timer}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
     </div>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', 
      animation
    };
    this.onInputChange = (e) => 
    this.setState({inputValue: e.target.value});
  }

  _handleClick(i){
    numAnimation = i;
    counter++;
  }
  
  render() {
    return (
      <div className="component-List">
        <input type="text" onChange={this.onInputChange}/>
        <div className="scroll">
          <ul>
            {this.state.animation.map((item,i) => (
              <li key={i}  
              style={item.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1? {'display':'block'} : {'display':'none'} }
                >
              <Link onClick={this._handleClick.bind(this, i)} to={(counter % 2 === 0)? '/page2' : '/page1'}> {item}</Link></li>))}
          </ul>
        </div>
      </div>
    );
  }
}

class Index extends React.Component{
  render(){
  return (
    <div className="page index">
      <h1><strong>React</strong>Transitions</h1>
        <List />
    </div> )
  }
}

class Page1 extends React.Component{
  render(){
  return (
    <div className="page page-1">
      <h1><strong>React</strong>Transitions</h1>
           <List />
    </div> )
  }
}

class Page2 extends React.Component{
  render(){
  return (
    <div className="page page-2">
      <h1><strong>React</strong>Transitions</h1>
         <List />
    </div> )
  }
}


render((
  <Router history={browserHistory}>
    <Route path="/" component={Example}>
      <IndexRoute component={Index}/>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('example'))
