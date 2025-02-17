import menu from "./images/menu.png";
import menu_white from "./images/menu-white.png";
import menu_dark from './images/menu-dark.png';

export const Header = () =>
{
    window.addEventListener("scroll", function(){
        var nav = document.querySelector(".navbar");
        nav.classList.toggle("sticky", window.scrollY > 150);
    })

  
    return(
        <div>
            <section id="hero-section">
                <div  className="hero-content ">
                    <h1>{"Embark on a new journey"}</h1>
                </div>
            </section>
            <nav className="navbar">
                <div className="navbar-brand">Trip Tips</div>

                <div className="navlist"><ul>
                   <li className="navitem">Home</li>
                   <a><li className="navitem">Blog</li></a> 
                    <a><li className="navitem">Explore</li></a>
                    <a><li className="navitem">Gallery</li></a>
                    <img className= "menu-dark" src={menu_dark} alt=""/>
                    <img className="menu-white" src={menu_white} alt="" />
                </ul>
                
                </div>
        
            </nav>

        </div>
        
    );
    
  
}