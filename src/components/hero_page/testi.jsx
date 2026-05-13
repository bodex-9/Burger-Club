import { IoStarSharp } from "react-icons/io5";
import { testimonials } from "../testdata/data_1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const Testi = () => {
  return (
    <div>
      <section className="testi p-10">
        <h2 className="test text-3xl font-bold text-center mb-6">
          Customer Reviews
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="card bg-white flex mx-auto items-center p-5 max-w-150 h-60 mt-2 rounded-2xl shadow-2xl">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={user.image}
                />

                <div className="ml-4">
                  <h3 className="font-semibold text-xl ml-11">{user.name}</h3>
                  <p className="tracking-tighter mt-3 text-sm text-gray-700 mx-10">
                    {user.review}
                  </p>
                  <div className="stars flex justify-start ml-11 mt-3 text-amber-300">
                    {[...Array(user.rating)].map((_, index) => (
                      <IoStarSharp key={index} className="mr-2" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testi;
