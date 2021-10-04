import React from "react";
import "./GetInvolvedCarousel.css";
// import { GetInvolvedCar } from "../../../static/navigation_links";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles1.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function GetInvolvedCarousel() {
  return (
    <div className="GetInvolvedCarousel">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper1"
        navigation={true}
      >
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">
            Friend of New Heritage Foundation
          </h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">BUY NOW</button>
            <button className="get_carouselBtnWhite">195 zł</button>
          </div>
          <p className="get_carouselDesc">
            You can become a Friend of New Heritage Poland for an annual
            subscription of 195 PLN and join a lively and active community of
            like-minded individuals, keen to protect Poland's vibrant heritage.
            In addition to knowing that your money goes straight to the front
            line of conservation work, allowing us to campaign for the historic
            environment and employ dedicated conservation advisers who travel
            across Poland giving expert advice on planning applications
            affecting heritage buildings and gardens. <br /> In addition you
            will receive:
          </p>
          <p
            style={{ lineHeight: 1.5, paddingTop: "50px" }}
            className="get_carouselDesc"
          >
            A complimentary NHP publication when joining <br />
            NHP's biannual newsletter <br />
            Discounts on NHP publications <br />
            Priority booking and discounts on events <br />
            Access to our online library <br />
            Press releases and campaign updates <br />
            Notification of member events including lectures, walks and country
            visits
          </p>
        </SwiperSlide>
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">Become a Saviour</h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">BUY NOW</button>
            <button className="get_carouselBtnWhite">800 zł</button>
          </div>
          <p className="get_carouselDesc">
            For 800 PLN per year, you can become a Saviour of Poland's heritage,
            and enjoy greater involvement with our work. In addition to knowing
            that your money goes straight to the front line of conservation
            work, allowing us to campaign for the historic environment and
            employ dedicated Conservation Advisers who travel across Poland
            giving expert advice on planning applications affecting heritage
            buildings and gardens, you will receive:{" "}
          </p>
          <p
            style={{ lineHeight: 1.5, paddingTop: "50px" }}
            className="get_carouselDesc"
          >
            A complimentary NHP publication when joining <br />
            NHP's biannual newsletter <br />
            Discounts on NHP publications <br />
            Priority booking and discounts on events <br />
            Access to our online library <br />
            Press releases and campaign updates <br />
            Notification of member events including lectures, walks and country
            visits
          </p>
        </SwiperSlide>
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">Volunteer work</h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">CONTACT IS NOW</button>
          </div>
          <p className="get_carouselDesc">
            There are many projects that represent New Heritage Foundation’ key
            principles of Guardianship, Discovery, Showmanship and Independence
            which would not have been possible without support from donations.
            You can become a volunteer worker with us and gain much interested
            experience. Making new friends, working in amazing places and
            knowing that you're helping a great cause - three fabulous reasons
            to get volunteering! <br /> <br />
            Another great way to become a volunteer is to share with us any
            particular information of the historic houses that need saving.
            Perhaps there is one in your village or on a farm or in the middle
            of your town. Perhaps you know people who have stories to tell about
            these houses and the people who have lived in them? <br /> <br />
            If you do, we need your help. Every story matters. <br /> <br />
            However, if you know of a house but don’t know any stories, tell us
            and we can try to point you in the right direction. Perhaps you
            could start by asking friends and relatives what they remember. Take
            some pictures and tell us what you feel about the house.{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">Become a Curator</h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">CONTACT IS NOW</button>
          </div>
          <p className="get_carouselDesc">
            If a heritage house is in your area and it needs help and protection
            don't hesitate to contact with us. You can become a custos (latin)
            curator of the house and we will supply you of all the know how and
            help you will need.
          </p>
        </SwiperSlide>
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">Become a Guardian</h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">CONTACT IS NOW</button>
          </div>
          <p className="get_carouselDesc">
            A curator is a manager or overseer. Many heritage buildings are
            abandoned or in a sorry state. If you know of a heritage building
            near you that needs help and you don't know where to start, contact
            us and we will do our best to support you. Consider becoming the
            voluntary guardian of the building by providing us with a record of
            the building’s condition. We will make this public, thus raising
            awareness of the problem. <br />
            <br />
            Awareness is the first step to renovation. <br />
            <br />
            Traditionally, a curator or keeper of a cultural heritage
            institution is a content specialist charged with an institution's
            collections and involved with the interpretation of heritage
            material including historical artefacts. A public-private historic
            preservation program that offers the opportunity for outside parties
            to lease unique historic houses and buildings. If you know a
            heritage building in your area that needs help and you don't know
            where to start contact us and we can guide and support you. You can
            become the curator or the guardian of the building. It will only
            require a bit of your time and we will supply the rest. We can slow
            down the deteriorating process by far, through regular visits to the
            buildings in need.
          </p>
        </SwiperSlide>
        <SwiperSlide className="carousel_items1">
          <h1 className="get_carouselTitle">Adopt a house</h1>
          <div className="get_btns">
            <button className="get_carouselBtnRed">CONTACT IS NOW</button>
          </div>
          <p className="get_carouselDesc">
            Securing the roof and foundations is just the beginning of the house
            restoration process. The challenging and enjoyable task of returning
            the interiors to their former glory still lies ahead. Here is where
            you can make a personal impact. Adopt a room, a corridor or even a
            staircase and watch, in the comfort of your home, as your donation
            helps to bring the space back to life. Receive regular video updates
            of the progress and have the opportunity to talk to the restorers
            during their painstaking work. Your contribution to the restored
            space will be recognised with a bronze plaque bearing your name,
            linking you to the house in perpetuity. <br />
            <br />
            Now what you need to do is to choose a house from our portfolio or
            contact us directly below for any further information.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GetInvolvedCarousel;
