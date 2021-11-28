import React, { useEffect } from "react";
import imgOne from "./Images/userone.png";
import imgTwo from "./Images/usertwo.png";
import imgThree from "./Images/userthree.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import testimonial from "../Components/images/Testimonials BG.png";

function Testimonial() {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 300,
  //     duration: 2000,
  //     easing: "ease-in-out",
  //     delay: 200,
  //   });
  // });
  return (
    <>
      <div className="testimonials">
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          Less process,
          <br />
          more productivity
        </h1>
        <p className="text-light" style={{ fontFamily: "futurabook" }}>
          No more email chains, no more print-and-scan change
          <br /> requests, no more missed deadlines. We've simplified the <br />
          design process so you can see results faster and we can
          <br /> put more time into what we do best, design...
        </p>

        <div data-aos="fade-in" className="testimonials">
          <h2
            style={{ fontFamily: "futuramedium" }}
            className=" animate__animated animate__zoomIn animate__infinite animate__slower"
          >
            Testimonials
          </h2>
          <div className="cardsTest">
            {/* <img src={testimonial} alt="" /> */}
            <div className="testcards">
              <div className="testcards1 animate__animated animate__bounce animate__infinite animate__slower">
                <img src={imgOne} alt="" width="100px" height="100px" />
              </div>
              <div className="testcards2 animate__animated animate__bounce animate__infinite animate__slower">
                <img src={imgTwo} alt="" width="100px" height="100px" />
              </div>
              <div className="testcards3 animate__animated animate__bounce animate__infinite animate__slower">
                <img src={imgThree} alt="" width="100px" height="100px" />
              </div>
            </div>
            <div className="text">
              <div className="client">
                <h3 className="client-head">Client name</h3>
                <p
                  data-aos="fade-left"
                  className="color"
                  style={{ fontFamily: "futurabook" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae laboriosam ipsum consequatur atque at! Tempore nam
                  dolorum fugiat iusto dolores quo blanditiis, nesciunt,
                  officiis pariatur suscipit delectus veritatis quidem, dolor
                  vitae non.
                </p>
              </div>
              <div className="client">
                <h3 className="client-head">Client name</h3>
                <p
                  data-aos="fade-up"
                  className="color"
                  style={{ fontFamily: "futurabook" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae laboriosam ipsum consequatur atque at! Tempore nam
                  dolorum fugiat iusto dolores quo blanditiis, nesciunt,
                  officiis pariatur suscipit delectus veritatis quidem, dolor
                  vitae non.
                </p>
              </div>
              <div className="client">
                <h3 className="client-head">Client name</h3>
                <p
                  data-aos="fade-right"
                  className="color"
                  style={{ fontFamily: "futurabook" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae laboriosam ipsum consequatur atque at! Tempore nam
                  dolorum fugiat iusto dolores quo blanditiis, nesciunt,
                  officiis pariatur suscipit delectus veritatis quidem, dolor
                  vitae non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/futura\ medium\ bt.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura\ Book.ttf");
        }
        .testimonials h1,
        h2 {
          color: #ffe462;
          // color: white;
          text-align: center;
        }
        .testimonials {
          // background-image: url("./Components/images/Testimonials\ BG.png");
          // z-index: 1;
          margin-top: 10%;
          margin-bottom: 10%;
        }
        .testimonials p {
          text-align: center;
          color: white;
        }
        .testimonials h2 {
          font-size: 55px;
        }
        .cardsTest {
          margin-top: 100px;
          height: 300px;
          // background-color: #f7d6cd;
          // background-image: url("./Components/images/Testimonials\ BG.png");
        }
        .testcards {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .testcards1,
        .testcards3 {
          // background-img: #187e8a;
          // background-image: url("./Components/images/userone.png");
        }
        .testcards2 {
          // background-color: #ffc857;
        }
        .testcards1,
        .testcards2,
        .testcards3 {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          margin-bottom: 100px;
          position: abosolute;
          margin-top: -50px;
        }
        .text {
          display: flex;
          flex-direction: row;
          text-align: center;
          justify-content: space-evenly;
          color: black;
          margin-top: -100px;
          padding: 0 50px 0 50px;
        }
        .text .client {
          align-items: center;
          margin-top: -15px;
          width: 260px;
          height: 300px;
          -webkit-backdrop-filter: blur(4px) saturate(200%);
          background-color: rgba(114, 114, 114, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          box-sizing: border-box;
          overflow: hidden;
          word-wrap: break-word;
        }
        .client-head {
          color: white;
          padding-top: 20px;
        }
        .text p {
          font-size: 14px;
          padding-top: 20px;
        }
        @media screen and (max-width: 1150px) {
          .cardsTest {
            width: auto;
            display: flex;
            flex-direction: row;
            height: 1200px;
            justify-content: center;
          }
          .testcards {
            display: flex;
            flex-direction: column;
          }
          .text {
            display: flex;
            flex-direction: column;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            margin-top: 0;
          }
        }
        @media screen and (max-width: 800px) {
          .cardsTest {
            margin-top: 50px;
            height: 1200px;
          }
          .text {
            margin-top: 0;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .client {
            margin-bottom: 50px;
            margin-top: 50px;
          }
          .testcards {
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            width: 150px;
            height: 150px;
          }
        }
        @media screen and (max-width: 500px) {
          .testimonials p {
            width: 45%;
            margin: 0 auto;
            color: white;
          }
          .text {
            padding: 0;
          }
          .testcards1,
          .testcards2,
          .testcards3 {
            width: 100px;
            height: 100px;
            margin-right: -50px;
            margin-left: 50px;
          }
          .text .client {
            width: 300px;
          }
          .testcards {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .color {
          }
        }
      `}</style>
    </>
  );
}

export default Testimonial;
