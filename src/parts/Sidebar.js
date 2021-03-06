import React from 'react'
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        
             <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{position: 'fixed'}}>
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Playlist">Playlist</Link>

              </li>
              
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
             
            </ul>
          </div>
        </nav>
    )
}
