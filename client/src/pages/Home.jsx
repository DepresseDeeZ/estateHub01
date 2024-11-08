import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import Blogs from "../components/Blogs";
import bannerImg from "../assets/banner.png";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage/homePage";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <HomePage />
        {/* <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          EstateHub is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div> */}

        {/* New Section (HomePage content) */}
        {/* <div className="flex gap-6 items-center">
          <div className="flex-[3]">
            <div className="flex flex-col justify-center gap-10">
              <h1 className="text-4xl lg:text-[36px] font-bold text-slate-700 leading-[1.2]">
                Find Real Estate & Get Your Dream Place
              </h1>
              <p className="text-gray-600 text-lg lg:text-[16px] leading-[1.6]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                explicabo suscipit cum eius, iure est nulla animi consequatur
                facilis id pariatur fugit quos laudantium temporibus dolor ea
                repellat provident impedit!
              </p>
              <div className="flex justify-between lg:hidden">
                <div className="text-center">
                  <h1 className="text-2xl lg:text-[32px] font-semibold text-slate-700">
                    16+
                  </h1>
                  <h2 className="text-gray-600 text-base lg:text-[16px] font-medium">
                    Years of Experience
                  </h2>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl lg:text-[32px] font-semibold text-slate-700">
                    200
                  </h1>
                  <h2 className="text-gray-600 text-base lg:text-[16px] font-medium">
                    Award Gained
                  </h2>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl lg:text-[32px] font-semibold text-slate-700">
                    2000+
                  </h1>
                  <h2 className="text-gray-600 text-base lg:text-[16px] font-medium">
                    Property Ready
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2] bg-[#fcf5f3] relative hidden lg:flex items-center">
            <img
              className="w-[115%] absolute right-0 lg:w-[105%]"
              src="/bg.png"
              alt="real-estate"
            />
          </div>
        </div> */}

        {/* Link to Start Search */}
        <div></div>
        <SearchBar />
        {/* <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link> */}
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale, and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-5xl mx-auto px-4 ">
        <Blogs />
        <div className="max-padd-container py-4 overflow-x-hidden">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export default function Home() {
//   const [offerListings, setOfferListings] = useState([]);
//   const [saleListings, setSaleListings] = useState([]);
//   const [rentListings, setRentListings] = useState([]);
//   SwiperCore.use([Navigation]);
//   console.log(offerListings);
//   useEffect(() => {
//     const fetchOfferListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?offer=true&limit=4");
//         const data = await res.json();
//         setOfferListings(data);
//         fetchRentListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchRentListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=rent&limit=4");
//         const data = await res.json();
//         setRentListings(data);
//         fetchSaleListings();
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchSaleListings = async () => {
//       try {
//         const res = await fetch("/api/listing/get?type=sale&limit=4");
//         const data = await res.json();
//         setSaleListings(data);
//       } catch (error) {
//         log(error);
//       }
//     };
//     fetchOfferListings();
//   }, []);
//   return (
//     <div>
//       {/* top */}
//       <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
//         <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
//           Find your next <span className="text-slate-500">perfect</span>
//           <br />
//           place with ease
//         </h1>
//         <div className="text-gray-400 text-xs sm:text-sm">
//           EstateHub is the best place to find your next perfect place to live.
//           <br />
//           We have a wide range of properties for you to choose from.
//         </div>
//         <HomePage />
//         <Link
//           to={"/search"}
//           className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
//         >
//           Let's get started...
//         </Link>
//       </div>

//       {/* swiper */}
//       <Swiper navigation>
//         {offerListings &&
//           offerListings.length > 0 &&
//           offerListings.map((listing) => (
//             <SwiperSlide>
//               <div
//                 style={{
//                   background: `url(${listing.imageUrls[0]}) center no-repeat`,
//                   backgroundSize: "cover",
//                 }}
//                 className="h-[500px]"
//                 key={listing._id}
//               ></div>
//             </SwiperSlide>
//           ))}
//       </Swiper>

//       {/* listing results for offer, sale and rent */}

//       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
//         {offerListings && offerListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent offers
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?offer=true"}
//               >
//                 Show more offers
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {offerListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {rentListings && rentListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent places for rent
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=rent"}
//               >
//                 Show more places for rent
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {rentListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//         {saleListings && saleListings.length > 0 && (
//           <div className="">
//             <div className="my-3">
//               <h2 className="text-2xl font-semibold text-slate-600">
//                 Recent places for sale
//               </h2>
//               <Link
//                 className="text-sm text-blue-800 hover:underline"
//                 to={"/search?type=sale"}
//               >
//                 Show more places for sale
//               </Link>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               {saleListings.map((listing) => (
//                 <ListingItem listing={listing} key={listing._id} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="max-w-5xl mx-auto px-4 ">
//         <Blogs />
//         <div className="max-padd-container py-4 overflow-x-hidden">
//           <img src={bannerImg} alt="" />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
