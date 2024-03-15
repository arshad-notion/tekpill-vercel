import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const footer = () => {
  return (
    <div className=' bg-tpblue '>
      {/* <Link to="/" className="block   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 p-6 bg-white border relative  border-gray-200    hover:border-sky-300  hover:shadow-lg  ">  home </Link>
          <Link to="/news" className="block   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 p-6 bg-white border relative  border-gray-200    hover:border-sky-300  hover:shadow-lg  ">  news </Link> */}

      <div className="max-w-7xl mx-auto ">


        <div className=" grid md:grid-cols-12 sm:grid-cols-1 gap-2 justify-center justify-items-center">
          <div className=" col-span-3 ">
            <Image
              src="/tekpillwhite.svg"
              alt="Tekpill"
              width={120}
              height={100}
              className="mt-12"
            /></div>

          <div className='col-span-9'>
            <div className=" grid md:grid-cols-7 sm:grid-cols-2 gap-2 mt-12 pb-2 text-white  text-sm uppercase">
              <div className="hover:ease-in duration-300   hover:scale-105"><Link href="/">Home</Link></div>
              <div className="hover:ease-in duration-300   hover:scale-105"><Link href="/news">News</Link></div>
              <div className="hover:ease-in duration-300  hover:scale-105"><Link href="/phonefinder">Phone Finder</Link></div>
              <div className="hover:ease-in duration-300  hover:scale-105"><Link href="/coverage">Coverage</Link></div>
              <div className="hover:ease-in duration-300  hover:scale-105"><Link href="/contact">Contact us</Link></div>
              <div className="hover:ease-in duration-300  hover:scale-105"><Link href="/privacy">Privacy</Link></div>
              <div className="hover:ease-in duration-300  hover:scale-105"><Link href="/terms">Terms of use</Link></div>

            </div>

            <div className=" grid md:grid-cols-12 sm:grid-cols-1 mt-12 pb-8  ">

              <div className="md:col-span-6 sm:col-span-8  text-white">
                <div className='flex flex-nowrap items-center'>
                  <div className='text-xl font-bold '>Social Media </div>
                  <div className='pl-4'><Image
                    src="/social_icons/fb.svg"
                    alt="Facebook"
                    width={200}
                    height={100}
                    className=" flex w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  /> </div>
                  <div className='pl-4'><Image
                    src="/social_icons/ig.svg"
                    alt="Facebook"
                    width={200}
                    height={100}
                    className=" flex w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  /> </div>

                  <div className='pl-4'><Image
                    src="/social_icons/yt.svg"
                    alt="Facebook"
                    width={200}
                    height={100}
                    className=" flex w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  /> </div>

                  <div className='pl-4'><Image
                    src="/social_icons/li.svg"
                    alt="Facebook"
                    width={200}
                    height={100}
                    className=" flex w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  /> </div>

                  <div className='pl-4'><Image
                    src="/social_icons/x.svg"
                    alt="Facebook"
                    width={200}
                    height={100}
                    className=" flex w-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 cursor-pointer "
                  /> </div>

                </div>
              </div>


              <div className="md:col-span-6 sm:col-span-1 md:text-right  text-sm text-white sm:mt-3 sm:text-center">Notion Business Solutions Pvt.Ltd © 2024. All Rights Reserved.</div>



              {/* <div className="pl-10 float-end text-sm">Notion Business Solutions Pvt.Ltd © 2024. All Rights Reserved.</div> */}
            </div>




          </div>

        </div>
      </div>







    </div>

  )
}

export default footer
