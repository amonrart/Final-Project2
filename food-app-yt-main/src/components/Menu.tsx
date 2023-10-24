import Image from "next/image";
import React from 'react'
import MenuCard from "./MenuCard";

const menuData = [
    {
        img: "/cake.avif",
        title: "เค้กช็อคโกแลต",
        desc: "2x tuna sahimi, 1x noodles",
        price: "200 บาท",
    },
    { 
        img: "/Fried kale with crispy.jpg",
        title: "คะน้าหมูกรอบ",
        desc: "2x tuna sahimi, 1x noodles",
        price: "50 บาท",
    },
    {
        img: "/Fried kale with crispy.jpg",
        title: "Italian Fried kale with crispy",
        desc: "2x tuna sahimi, 1x noodles",
        price: "50 บาท",
    },
    {
        img: "/Fried kale with crispy.jpg",
        title: "Italian Fried kale with crispy",
        desc: "2x tuna sahimi, 1x noodles",
        price: "50 บาท",
    },
]
const Menu = () => {
    return  (
      <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-accent">เมนู</span>
          </h2>
          <p className="text-gray-700">
             <br />
          </p>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
            <li className="bg-accent text-white p-1">Appetizers</li>
        </ul>


        <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
            <div className="w-fit mx-auto">
              <Image
                className="w-{100%] max-w-[400px] h-auto"
                src="/menu_left.png"
                width={500}
                height={500}
                alt="dish"
              />  
            </div>


            <div className="grid w-fit max-auto sm:grid-cols-2 gap4">
              {menuData.map((item, index) => (
                <MenuCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
   );
};

export default Menu;