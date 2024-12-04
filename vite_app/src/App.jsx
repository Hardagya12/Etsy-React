import React from 'react';
import './App.css';

// Import all images
import EtsyLogo from './images/Etsy_logo.svg.png';
import PortraitImage from './images/il_300x300.png';
import BirthstoneJewelryImage from './images/il_300x300 (1).png';
import KidsNameJumpersImage from './images/il_300x300.6036400426_hwdx.avif';
import PersonalisedBarwareImage from './images/il_300x300.3707333275_f68j.webp';
import ServingBoardsImage from './images/il_300x300.5418982727_2dzo.avif';
import WreathsImage from './images/il_300x300.6436562193_lyv8.avif';
import DigitalPrintsImage from './images/il_300x300.5460954945_9tu4.webp';
import WallPaintingsImage from './images/il_300x300.4144763037_cm8c.webp';
import SignsImage from './images/il_300x300.5200553974_4yjs.webp';
import WallDecorImage from './images/il_300x300.6407827866_a38f.webp';
import ChristmasDecorationsImage from './images/il_300x300.3411607173_jmb6.webp';

const EtsyClone = () => {
  return (
    <>
    <div>
      {/* Header */}
      <header>
        <img src={EtsyLogo} alt="Etsy Logo" height="40px" width="80px" />
        <button id="category">
          <i className="fa-solid fa-list" style={{ color: 'rgb(0, 0, 0)' }}></i>
          Categories
        </button>
        <input id="searchbar" type="search" placeholder="Search for anything" />
        <button id="signin">Sign In</button>
        <i className="fa-solid fa-heart" style={{ color: 'rgb(0, 0, 0)', fontSize: '20px' }}></i>
        <i className="fa-solid fa-gift" style={{ color: 'rgb(0, 0, 0)', fontSize: '20px' }}></i>
        <i className="fa-solid fa-basket-shopping" style={{ color: 'rgb(0, 0, 0)', fontSize: '20px' }}></i>
      </header>

      {/* Header 2 */}
      <header>
        <div id="header2">
          <a href="">
            <i className="fa-solid fa-gift" style={{ color: 'rgb(0, 0, 0)' }}></i> Gifts
          </a>
          <a href="#">Cyber Deals</a>
          <a href="#">Home Favourites</a>
          <a href="#">Fashion Finds</a>
          <a href="#">Registry</a>
        </div>
      </header>
      <hr />
      <br />

      {/* Main */}
      <h1 style={{ textAlign: 'center', fontWeight: 50 }}>Discover the most popular Etsy finds at every price</h1>
      <br />
      <br />

      {/* Flex Container */}
      <div className="flex-container">
        <div className="flex-item">
          <img src={PortraitImage} alt="Personalised Portraits" />
          <p>Personalised Portraits</p>
        </div>
        <div className="flex-item">
          <img src={BirthstoneJewelryImage} alt="Birthstone Jewelry" />
          <p>Birthstone Jewelry</p>
        </div>
        <div className="flex-item">
          <img src={KidsNameJumpersImage} alt="Kid's Name Jumpers" />
          <p>Kid's Name Jumpers</p>
        </div>
        <div className="flex-item">
          <img src={PersonalisedBarwareImage} alt="Personalised Barware" />
          <p>Personalised Barware</p>
        </div>
        <div className="flex-item">
          <img src={ServingBoardsImage} alt="Personalised Serving Boards" />
          <p>Personalised Serving Boards</p>
        </div>
        <div className="flex-item">
          <img src={WreathsImage} alt="Wreaths" />
          <p>Wreaths</p>
        </div>
      </div>
      <br />
      <br />

      {/* Featured Categories */}
      <h1>Featured Categories</h1>
      <div className="image-container">
        <div className="image-box">
          <img src={DigitalPrintsImage} alt="Digital Prints" />
          <p>Digital Prints</p>
        </div>
        <div className="image-box">
          <img src={WallPaintingsImage} alt="Wall Paintings" />
          <p>Wall Paintings</p>
        </div>
        <div className="image-box">
          <img src={SignsImage} alt="Signs" />
          <p>Signs</p>
        </div>
        <div className="image-box">
          <img src={WallDecorImage} alt="Wall Decor" />
          <p>Wall Decor</p>
        </div>
        <div className="image-box">
          <img src={SignsImage} alt="Signs" />
          <p>Signs</p>
        </div>
        <div className="image-box">
          <img src={ChristmasDecorationsImage} alt="Christmas Decorations" />
          <p>Christmas Decorations</p>
        </div>
      </div>
    </div>

    <div className="text_container">
  <div id="heading_etsy">
    <h1 style={{ paddingTop: '30px', fontWeight: 400 }}>What is Etsy?</h1>
    <a href="">
      <p>Read our wonderfully weird story</p>
    </a>
  </div>
  <div className="text_container1">
    <div id="sub-heading1">
      <h2 style={{ paddingBottom: '15px', fontWeight: 550 }}>A community doing good</h2>
      <p>
        Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.
      </p>
    </div>
    <div id="sub-heading2">
      <h2 style={{ paddingBottom: '15px', fontWeight: 550 }}>Support independent creators</h2>
      <p>
        There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
      </p>
    </div>
    <div id="sub-heading3">
      <h2 style={{ paddingBottom: '15px', fontWeight: 550 }}>Peace of mind</h2>
      <p>
        Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
      </p>
    </div>
  </div>
  <h1 style={{ textAlign: 'center', fontSize: '20px' }}>Have a question? Well, we’ve got some answers.</h1>
  <div id="help_btn">
    <button id="helo_btn">Go To Help Center</button>
  </div>
</div>

<div className="container-foot">
  <h4 style={{ fontSize: '15px', display: 'flex', justifyContent: 'center', paddingTop: '40px' }}>
    Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.
  </h4>
  <div className="search-container" style={{ marginLeft: '30%', paddingTop: '20px' }}>
    <input type="search" className="search-input" placeholder="Enter Your Email" />
    <button className="subscribe_btn">Subscribe</button>
  </div>
</div>

<div className="Etsypowered">
  <h2 style={{ fontSize: '15px', marginTop: '30px', color: 'white' }}>
    Etsy is powered by 100% renewable electricity.
  </h2>
</div>

<main>
  <footer>
    <div className="container-footer">
      <div id="footer-app">
        <div>
              <img src={EtsyLogo} alt="Etsy Logo"
            style={{ height: '100px', width: '100px', borderRadius: '20px' }}
            id="app"
          />
        </div>
        <div id="downloadbtn">
          <button
            id="btn-footer"
            style={{
              height: '55px',
              width: '180px',
              borderRadius: '30px',
              color: 'white',
              backgroundColor: 'rgb(43, 43, 250)',
              fontWeight: 'bold',
            }}
          >
            Download the Etsy App
          </button>
        </div>
      </div>

      <div className="footer-menu">
        <div id="shop">
          <h3 style={{ fontSize: 'large', marginTop: '30px' }}>Shop</h3>
          <p>Gift Card</p>
          <p>Etsy Registry</p>
          <p>Sitemap</p>
          <p>Etsy blog</p>
          <p>Etsy United Kingdom</p>
          <p>Etsy Germany</p>
          <p>Etsy Canada</p>
        </div>
        <div id="sell">
          <h3 style={{ fontSize: 'large', marginTop: '30px' }}>Sell</h3>
          <p>Sell on Etsy</p>
          <p>Teams</p>
          <p>Forums</p>
          <p>Affiliates & Creators</p>
          <p>Gift Card</p>
        </div>
        <div id="about">
          <h3 style={{ fontSize: 'large', marginTop: '30px' }}>About</h3>
          <p>Etsy Inc.</p>
          <p>Policies</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Impact</p>
          <p>Legal imprint</p>
        </div>
        <div id="help">
          <h3 style={{ fontSize: 'large', marginTop: '30px' }}>Help</h3>
          <p>Help Centre</p>
          <p>Privacy settings</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
            <i className="fa-brands fa-facebook-f" style={{ color: '#ffffff' }}></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</main>

    </>
  );
  
};


export default EtsyClone;
