import styled from "styled-components"
import { useNavContext } from "../context/navigation"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

const Menu = styled.div`
   .menu-icon {
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
   }
   .menu-icon .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
   }
   .menu-icon div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
   }
   .menu-icon span {
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--bar-bg, #000);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
   }
   .menu-icon span:first-of-type {
      top: 0;
   }
   .menu-icon span:last-of-type {
      bottom: 0;
   }
   .menu-icon.active span:first-of-type,
   .menu-icon .menu-icon__cheeckbox:checked + div span:first-of-type {
      transform: rotate(45deg);
      top: 5px;
   }
   .menu-icon.active span:last-of-type,
   .menu-icon .menu-icon__cheeckbox:checked + div span:last-of-type {
      transform: rotate(-45deg);
      bottom: 5px;
   }
   .menu-icon.active:hover span:first-of-type,
   .menu-icon.active:hover span:last-of-type,
   .menu-icon:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
   .menu-icon:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
   }
   @media (min-width: 1024px) {
      .menu-icon:hover span:first-of-type {
         width: 26px;
      }
      .menu-icon:hover span:last-of-type {
         width: 12px;
      }
   }
`
export default function HamburgerMenu({ disablemenu }) {
   const [menuOpen, setMenuOpen, modalOpen, setModalOpen] = useNavContext()
   return (
      <>
         <Menu>
            <div className=" menu-icon">
               <input
                  onChange={() => setMenuOpen(!menuOpen)}
                  disabled={disablemenu}
                  checked={menuOpen}
                  className="menu-icon__cheeckbox"
                  type="checkbox"
               />
               <div>
                  <span></span>
                  <span></span>
               </div>
            </div>
         </Menu>
      </>
   )
}
