import  {CartWidget}  from "./CartWidget";


const NavBar = () =>{


    return(
        <nav>
            <CartWidget></CartWidget>

        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Us</a>
        </li>
        <li>
            <a href="">Contact </a>
        </li>

        </nav>

    )
}
export default NavBar;