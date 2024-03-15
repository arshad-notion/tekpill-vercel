import React, { FunctionComponent } from "react";
import Subscribe from "../components/Subscribe";

interface IReviewProps {}

const Reviews: FunctionComponent<IReviewProps> = (props) => {
  return (
    <div className=" px-32 bg-gray-200">
      <div className="">
        <img
          src="/reviews-img/image-1.png"
          alt=""
          className=" w-full h-full"
        ></img>
      </div>
      <div className=" flex flex-wrap px-6 bg-gray-50 pt-32">
        <div className="w-2/3">
          <div className="w-[637] h-10 flex flex-wrap justify-between mb-6">
            <div>
              <h1 className=" text-4xl text-black leading-10 ml-4">Reviews</h1>
            </div>
            <div className=" text-sm mr-8 w-68">
              <button
                className="text-white bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-290 font-medium rounded-lg text-sm px-10 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                type="button"
              >
                <form action={"#"}>
                  <label className=" pr-6">Choose a brands: </label>
                  <select className=" text-black">
                    <option value="All brands">All brands</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Motorola">Motorola</option>
                    <option value="One Plus">One Plus</option>
                  </select>
                </form>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mb-10 bg-gray-100 items-center justify-center">
            <div className=" w-[290px] h-44 mx-4 my-4 bg-white">
              <a href="xiaomi_13t_pro_long_term-review-2673.php">
                <img
                  src="https://fdn.gsmarena.com/imgroot/reviews/24/xiaomi-13t-pro-long-term/-347x151/gsmarena_001.jpg"
                  alt=""
                />
              </a>
              <h3 className="review-item-title text-center">
                <a href="xiaomi_13t_pro_long_term-review-2673.php">
                  Xiaomi 13T Pro long-term review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 mx-4 my-4 bg-white">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-a15-5g/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_a15_5g-review-2671.php">
                  Samsung Galaxy A15 5G review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/realme-12-pro-plus/-347x151/gsmarena_000.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="realme_12_pro_plus-review-2668.php">
                  Realme 12 Pro+ review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/-347x151/gsmarena_003.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_s24_ultra-review-2670.php">
                  Samsung Galaxy S24 Ultra review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/redmi-note-13-5g/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="xiaomi_redmi_note_13_5g-review-2667.php">
                  Xiaomi Redmi Note 13 5G review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/oneplus-12r/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="oneplus_12r-review-2665.php">OnePlus 12R review</a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-plus/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_s24_plus-review-2664.php">
                  Samsung Galaxy S24+ review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_s24-review-2663.php">
                  Samsung Galaxy S24 review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/redmi-note-13-pro/-347x151/gsmarena_003.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="xiaomi_redmi_note_13_pro_5g-review-2660.php">
                  Xiaomi Redmi Note 13 Pro 5G review
                </a>
              </h3>
            </div>

            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-a15/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_a15-review-2662.php">
                  Samsung Galaxy A15 4G review
                </a>
              </h3>
            </div>

            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-a25/-347x151/gsmarena_002.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_a25-review-2661.php">
                  Samsung Galaxy A25 review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/oneplus-12/rev23/-347x151/gsmarena_002.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="oneplus_12-review-2659.php">OnePlus 12 review</a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/infinix-hot-40-pro/-347x151/gsmarena_000.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="infinix_hot_40_pro-review-2658.php">
                  Infinix Hot 40 Pro review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/xiaomi-redmi-note-13-pro-4g/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="xiaomi_redmi_note_13_pro_4g-review-2657.php">
                  Xiaomi Redmi Note 13 Pro 4G review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-series-handson/-347x151/gsmarena_000.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="samsung_galaxy_s24_ultra_s24_plus_s24_handson-review-2656.php">
                  Samsung Galaxy S24 Ultra, S24+ and S24 hands-on review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/23/asus-rog-phone-8-pro/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="asus_rog_phone_8_pro-review-2650.php">
                  Asus ROG Phone 8/8 Pro review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/xiaomi-poco-m6-pro/-347x151/gsmarena_002.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="xiaomi_poco_m6_pro-review-2655.php">
                  Poco M6 Pro review
                </a>
              </h3>
            </div>
            <div className=" w-[290px] h-44 bg-white mx-4 my-4">
              <img
                src="https://fdn.gsmarena.com/imgroot/reviews/24/poco-x6-pro/-347x151/gsmarena_001.jpg"
                alt=""
              />
              <h3 className="review-item-title text-center">
                <a href="poco_x6_pro-review-2653.php">Poco X6 Pro review</a>
              </h3>
            </div>
          </div>
          <div>
            <Subscribe />
          </div>
        </div>
        <div className="w-1/3 h-[900px] flex flex-wrap bg-gray-200 text-center justify-center">
          <div className=" bg-gray-400 w-full mx-4 my-4 ">Advertisements</div>
          <div className=" bg-gray-400 w-full  mx-4 my-4">Advertisements</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
