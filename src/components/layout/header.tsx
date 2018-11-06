import * as React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// const Header = () => (
 
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Dropdown
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a className="dropdown-item" href="#">Action</a>
//                 <a className="dropdown-item" href="#">Another action</a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link disabled" href="#">Disabled</a>
//             </li>
//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//         </div>
//         </nav>
//   );
  export class Header  extends React.Component<{}, {}> {
 
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-light">
            // <a className="navbar-brand" href="#">Navbar</a>
            // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //     <span className="navbar-toggler-icon"></span>
            // </button>

            // <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //     <ul className="navbar-nav mr-auto">
            //     <li className="nav-item active">
            //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">Link</a>
            //     </li>
            //     <li className="nav-item dropdown">
            //         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //         Dropdown
            //         </a>
            //         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //         <a className="dropdown-item" href="#">Action</a>
            //         <a className="dropdown-item" href="#">Another action</a>
            //         <div className="dropdown-divider"></div>
            //         <a className="dropdown-item" href="#">Something else here</a>
            //         </div>
            //     </li>
            //     <li className="nav-item">
            //         <a classNameName="nav-link disabled" href="#">Disabled</a>
            //     </li>
            //     </ul>
            // </div>
            // </nav>
            <div className="ui large menu">
            <a className="active item">
                Home
            </a>
            <a className="item">
                {/* <Link to="/login" replace >Messages</Link> */}
            </a>
          
            <div className="right menu">
                <div className="item">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search mail..." />
                        <i className="search icon"></i>
                    </div>
                </div>
                <div className="ui dropdown item">
                Language 
                <i className="dropdown icon"></i>
                <div className="menu">
                    <a className="item">English</a>
                    <a className="item">Russian</a>
                    <a className="item">Spanish</a>
                </div>
                </div>
                <div className="item">
                    <div className="ui primary button">Sign Up</div>
                </div>
            </div>
            </div>
        );
    }
  }
  export default Header;