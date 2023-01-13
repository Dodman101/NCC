const Navbar = () =>{
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <i class="logo"></i>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navlinks">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">The Church</a></li>
                                <li><a class="dropdown-item" href="#">Leadership</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ministries
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Children</a></li>
                                <li><a class="dropdown-item" href="#">Teens</a></li>
                                <li><a class="dropdown-item" href="#">Youth</a></li>
                                <li><a class="dropdown-item" href="#">Mens Fellowship</a></li>
                                <li><a class="dropdown-item" href="#">WWK</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    
                        
                    </ul>

                </div>
            </div>
            </nav>
    )
}

export default Navbar;