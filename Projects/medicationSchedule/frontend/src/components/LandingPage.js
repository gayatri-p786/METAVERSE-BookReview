import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplitType from 'split-type';
import './mainStyle.css';

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const startAnimation = () => {
//       const heading = document.querySelector(".hero .main-content h1");
//       const buttonContainer = document.querySelector(".hero .buttons-container");

//       const init_value = heading.innerHTML;
//       const headingSplit = new SplitType(heading);

//       for (let i = 0; i < headingSplit.chars.length; i++) {
//         let char = headingSplit.chars[i];
//         char.style.setProperty("animation-delay", i * 0.05 + "s");
//       }

//       // after whole animation restore initial content so that newly formed characters don't interfere with other things like resizing
//       setTimeout(() => {
//         heading.innerHTML = init_value;
//         heading.style.lineHeight = "1.72em";

//         buttonContainer.style.opacity = "1";
//         buttonContainer.style.transform = "none";

//         let backgroundCircles = document.querySelectorAll(".background .circle");
//         for (let circle of backgroundCircles) {
//           circle.style.scale = "1";
//         }

//         setLoading(false); // Set loading to false after animation
//       }, headingSplit.chars.length * 0.05 * 1000 + 500);
//     };

//     startAnimation();
//   }, [loading]);

  return (
    <>
      {
        <div className="hero flexbox">
          <div className="main-content">
            <h1 style={{ marginBottom: '50px' }}>
              Experience Your Health <span className="highlight">Better</span> Than Ever
            </h1>

            <div className="flexbox buttons-container">
              <Link to="/signup">
                <button>Get Started</button>
              </Link>
              <Link to="/login">
                <button className="secondary">Login</button>
              </Link>
            </div>
          </div>

          <div className="background">
            <div className="circle" style={{ height: '80vw' }}></div>
            <div className="circle" style={{ height: '70vw' }}></div>
            <div className="circle" style={{ height: '60vw' }}></div>

            <img
              src="../media/heroImage.png"
              alt="Doctor Image signifying We are here to support you."
            />
          </div>
        </div>
      }
    </>
  );
};

export default LandingPage;
