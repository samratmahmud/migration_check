import Link from "next/link";
import React from "react";

let contain = [
  {
    pic: "./picture/Frame 36.svg",
    name: "To Work",
    title:
      "Sit porta diam ultrices cursus fames elementum, vulputate dolor commodo. Dictum quis est, urna nulla non elementum. Odio lectus penatibus et sollicitudin nunc non massa. Urna cras laoreet in egestas. Enim vestibulum sit tristique lorem ut dignissim ipsum, orci est.",
  },
  {
    pic: "./picture/Frame 36 (1).svg",
    name: "Got Married",
    title:
      "Vestibulum tincidunt cursus nunc, egestas commodo molestie nibh mattis cursus. Consequat aliquet arcu, accumsan purus pretium sed porta. Vulputate amet, enim volutpat non a massa neque. Nullam nunc, egestas arcu, in amet, odio lacus sed. Ut adipiscing quisque amet mauris odio velit.",
  },
  {
    pic: "./picture/Frame 36 (2).svg",
    name: "To Study",
    title:
      "Vitae nunc nisi, auctor sed non morbi curabitur. Eget sit orci, erat id mauris, sagittis. Tristique magna lorem aenean eu in quam elementum. Velit enim neque, odio mus et imperdiet nulla sed feugiat. Proin sit massa amet dolor tempor nisi augue quam.",
  },
  {
    pic: "./picture/Frame 36 (3).svg",
    name: "To Volunteer",
    title:
      "Ac non, mattis cum ut nisi, quis habitant vulputate morbi. Nec pellentesque id id ut orci sed sit. Senectus ullamcorper sapien, a luctus laoreet urna. Nec pellentesque leo nullam pharetra neque. Id libero fringilla iaculis ipsum cras rhoncus.",
  },
  {
    pic: "./picture/Frame 36 (4).svg",
    name: "Join Family",
    title:
      "Magna sagittis potenti id eget. Nibh consectetur massa gravida commodo id non scelerisque a, in. Id venenatis sed duis diam in elementum pellentesque. Massa et scelerisque cras sit volutpat. Gravida ut non aliquam tincidunt.",
  },
  {
    pic: "./picture/Frame 36 (5).svg",
    name: "To Start a Business",
    title:
      "Dignissim id orci, in ultrices fermentum. Pretium, amet, et amet aliquam. Pharetra in risus, quis semper semper faucibus mauris quis. Fermentum, ultricies vitae aliquet auctor nibh imperdiet semper tempor ac. At nisi lacus non arcu, sed adipiscing.",
  },
];

function Container() {
  return (
    <div className="container">
      <div className="max-w-[540px] lg:text-3xl text-xl font-bold text-gray-800 mb-4 m-auto text-center">
        Live your dream in Germany
      </div>
      <div className="max-w-[480px] text-sm lg:mb-16 mb-7 text-neutral-500 m-auto text-center">
        We are strategy consultants who work with startup strategies and help
        promote and sell your product
      </div>
      <div className="grid lg:grid-cols-3 justify-between gap-7 md:mb-16 mb-7">
        {contain.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:max-w-[350px] lg:p-7 p-3 border-[2px] border-amber-200 rounded-2xl"
          >
            <div className="">
              <img className="" src={item.pic} alt="" />
            </div>
            <div className="lg:max-w-[270px] text-center">
              <div className="text-base font-bold text-gray-800 mb-4">
                {item.name}
              </div>
              <div>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link href={"/"}>
          <button className="flex gap-2 p-3 hover:bg-slate-100 rounded-2xl m-auto text-center md:mb-36 mb-10">
            <span className="text-sm font-bold bg-100 text-linear">
              All Services
            </span>
            <span>
              <img src="./picture/Icon.svg" alt="" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Container;
