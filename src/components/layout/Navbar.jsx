import { useState } from "react";
import { Button } from "../../GlobalStyles";
import popcorn from "../../assets/popcorn28x28.png";
import {
  Nav,
  NavbarContainer,
  MenuIcon,
  NavLogo,
  MenuItem,
  MenuItemBtn,
  MenuLinkBtn,
  Menu,
  MenuLink,
} from "./Navbar/Navbar";

const Navbar = () => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <MenuIcon onClick={handleClick}>
              {click ? (
                <img src={popcorn} alt={popcorn} />
              ) : (
                <img src={popcorn} alt={popcorn} />
                // <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFFJREFUSEvtlEkKADAIA83/H52eu1APZQShnquTBaqAR/D9+IA04fqIbDuVdXkgaRK9OcABL+pPu/Ud4A7wDnAAHlF/AN4BDujfwXewJoD/pgNrVBgZX2h0sgAAAABJRU5ErkJggg==" />
              )}
            </MenuIcon>
            Pop ● MOVIES
          </NavLogo>

          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink to="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/vistas">Films</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/vistas">Series</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/vistas">
                <i class="bx bx-bookmark"></i>
                Ya la vi
              </MenuLink>
            </MenuItem>
            <MenuItemBtn>
              {<Button /> ? (
                <MenuLinkBtn to="/">
                  <Button primary>Aca Algo</Button>
                </MenuLinkBtn>
              ) : (
                <MenuLinkBtn to="/">
                  <Button primary>Aca Algo</Button>
                </MenuLinkBtn>
              )}
            </MenuItemBtn>
          </Menu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
