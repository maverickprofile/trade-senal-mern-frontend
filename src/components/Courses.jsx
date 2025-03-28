import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import '/Assets/Algo.mp4';

const Courses = () => {
  return (
    <div className="bg-dark py-5" id="courses">
      <section className="py-5 px-3 text-center text-white">
        <h2 className="fs-2 mb-2">
          Become a <span className="text-primary">Pro Trader</span> today!
        </h2>
        <h2 className="fs-1 mb-2">
          <span className="text-primary">Trend, </span>
          <span className="text-primary">Volume, </span>
          <span className="text-primary">Point of Control</span>
        </h2>
        <p className="fs-4 text-white-50 mb-5">Your three best friends in trading</p>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="w-75 pb-5 mx-auto"
        >
          <SwiperSlide className="d-flex justify-content-center align-items-center">
            <div className="card text-bg-dark border-0 shadow-lg" style={{ maxWidth: '24rem' }}>
            <video
  src="/forex.mp4"
  className="card-img-top rounded-0"
  alt="Forex Trading"
  style={{ height: '12rem', objectFit: 'cover' }}
  autoPlay
  muted
  loop
/>

              <div className="card-body p-4">
                <h3 className="card-title fs-4 text-primary mb-3">Forex Trading Mastery</h3>
                <p className="card-text text-secondary">
                  Learn the fundamentals of forex trading and kickstart your journey.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center border-0 p-3">
                <button className="btn btn-primary text-dark fw-bold px-4 py-2">
                  Enroll Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center align-items-center">
            <div className="card text-bg-dark border-0 shadow-lg" style={{ maxWidth: '24rem' }}>
            <video
  src="/Algo.mp4"
  className="card-img-top rounded-0"
  alt="Forex Trading"
  style={{ height: '12rem', objectFit: 'cover' }}
  autoPlay
  muted
  loop
/>

              <div className="card-body p-4">
                <h3 className="card-title fs-4 text-primary mb-3">Algo Trading Mastery</h3>
                <p className="card-text text-secondary">
                  Explore high-level strategies used by professional traders.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center border-0 p-3">
                <button className="btn btn-primary text-dark fw-bold px-4 py-2">
                  Enroll Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center align-items-center">
            <div className="card text-bg-dark border-0 shadow-lg" style={{ maxWidth: '24rem' }}>
            <video
  src="/crypto.mp4"
  className="card-img-top rounded-0"
  alt="Forex Trading"
  style={{ height: '12rem', objectFit: 'cover' }}
  autoPlay
  muted
  loop
/>

              <div className="card-body p-4">
                <h3 className="card-title fs-4 text-primary mb-3">Algo Trading Mastery</h3>
                <p className="card-text text-secondary">
                  Master cryptocurrency trading with real-world techniques.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center border-0 p-3">
                <button className="btn btn-primary text-dark fw-bold px-4 py-2">
                  Enroll Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default Courses;