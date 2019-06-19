import React , {Component} from 'react';
import './Section.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';
  import $ from 'jquery';

class Home extends Component{
    render(){
        return(
            <div className="home">
                Home
            </div>
        )
    }
}

class Album extends Component{
    render(){
        return(
          <div className="album">
            Album
          </div>
        )
    }
}

class Songs extends Component{
  render(){
    return(
      <div className="song-content">
          Song Content
      </div>
    )
  }
}

class AllCards extends Component{
    render(){
        return(
            <div className="allCards">
              allCards
            </div>
        )
    }
}

class Favourite extends Component{
    render(){
        return(
          <div className="favourite">
              favourite
          </div>
        )
    }
}

class Profile extends Component{
    render(){
        return(
            <div className="profile">
                Profile
            </div>
        )
    }
}

class Section extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeLink  : "Home",
            isMax : false
        }
    }

    componentDidMount = ()=> {

    }
    toggleActive = (value)=>{
        this.setState({activeLink : value});
    }

    toggleStyle = (value)=>{
      let isMax = value==="enter"?true:false;
      this.setState({isMax});
    }
    render(){
        return(
            <div className="section container-fluid">
                <Router>
                <div className={"section-aside " +(this.state.isMax?"":"navWidth")}>
                    <ul onMouseEnter={this.toggleStyle.bind(this,"enter")} onMouseLeave={this.toggleStyle.bind(this,"leave")}>
                        <Link to="/">
                            <li className={"section-nav-link " + (this.state.activeLink==='Home'?'active':'')} onClick={this.toggleActive.bind(this,"Home")}>
                                <div className="row">
                                    <div className="mr-auto">Home</div>
                                    <div className="ml-auto"><i className="fa fa-home" aria-hidden="true"></i></div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/album">
                            <li className={"section-nav-link " + (this.state.activeLink==='Albums'?'active':'')} onClick={this.toggleActive.bind(this,"Albums")}>
                                <div className="row">
                                    <div className="mr-auto">Albums</div>
                                    <div className="ml-auto"><i className="fa fa-folder-open-o" aria-hidden="true"></i></div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/favourites">
                            <li className={"section-nav-link " + (this.state.activeLink==='Favourites'?'active':'')} onClick={this.toggleActive.bind(this,"Favourites")}>
                                <div className="row">
                                    <div className="mr-auto">Favourites</div>
                                    <div className="ml-auto"><i className="fa fa-heart" aria-hidden="true"></i></div>
                                </div>
                            </li>
                        </Link>
                        <Link to="/profile">
                            <li className={"section-nav-link " + (this.state.activeLink==='Profile'?'active':'')} onClick={this.toggleActive.bind(this,"Profile")}>
                                <div className="row">
                                    <div className="mr-auto">Profile</div>
                                    <div className="ml-auto"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                </div>
                            </li>
                        </Link>
                            <li className="section-nav-link">
                                <div className="row" onClick={this.logout}>
                                    <div className="mr-auto">
                                      <div>Login</div>
                                    </div>
                                    <div className="ml-auto"><i className="fa fa-sign-out" aria-hidden="true"></i></div>
                                </div>
                            </li>
                    </ul>
                </div>
                <div className="section-content">
                    <div className={"section-content-album " + (this.state.isMax?'section-aside-width':'')}>
                    <Switch>
                        <Redirect exact from="/" to="/home"/>
                        <Route exact path="/home" render={()=><Home/>}/>
                        <Route exact path="/album" render = {()=><Album title="Albums"/>}/>
                        <Route exact path="/song" render = {()=><Songs/>}/>
                        <Route path="/allcards" render={()=><AllCards/>}/>
                        <Route exact path="/favourites" render = {()=><Favourite />}/>
                        <Route exact path="/profile" render = {()=><Profile />}/>
                    </Switch>
                    </div>
                </div>
                </Router>
            </div>
        )
    }
}

export default Section;
