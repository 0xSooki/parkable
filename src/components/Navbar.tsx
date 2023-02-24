export default function Navbar() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top transparent">
          <h1 className="navbar-brand">Parkable</h1>

        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#top" title="home"><i className="fa fa-code fa-lg"></i></a>
          </div>
  
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">Dashboash</a></li>
              <li><a href="#skills">Services</a></li>
              <li><a href="#skills">Log in</a></li>

            </ul>
          </div>
        </div>
      </nav>
    )
}