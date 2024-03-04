import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti'
//internal import 
import Style from './SideBar.module.css';
import images from '../../../img';
import Button from "../../Button/Button";


const SideBar = ({ setOpenSideMenu }) => {
  //---------USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);



  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  // creating functions

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }

  }

  const openHelpMenu = () => {
    if (!openDiscover) {
      setOpenHelp(true);
    } else {
      // setOpenHelp(false);
      setOpenHelp(false);
    }

  }

  const closeSideBar = () => {
    setOpenSideMenu(false)
  }

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />

      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p> Discover the most outstanding articles on all topics of NFT</p>
        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
        </div>
        <div className={Style.sideBar_menu}>
          <div>
            <div
              className={Style.sideBar_menu_box}
              onClick={() => openDiscoverMenu()}
            >
              <p>Discover</p>
              <TiArrowSortedDown />
            </div>

            {openDiscover && (
                <div className={Style.sideBar_discover}>
                  {discover.map((el, i) => (
                    <p key={i + 1}>
                      {/* <Link href={{ pathname: `${el.link}` }}>{el.name} </Link> */}
                      <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                    </p>
                  ))}
                </div>
              )}
          </div>
        {/* </div> */}


        <div>
          <div className={Style.sideBar_menu_box}
            onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedUp />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, i) => (
                  <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )}

        </div>
      </div>


      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={()=>{}}></Button>
        <Button btnName="Connect Wallet" handleClick={()=>{}}></Button>
      </div>
    </div>
  )
}

export default SideBar