import CartWidget from "./CartWidget/CartWidget";

function NavBar () {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <h1>KIUT</h1>
                    </a>
                </li>
                <li>
                    <a href="/">carteras</a>
                </li>
                <li>
                    <a href="/">accesorios</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar;