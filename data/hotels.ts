import { FaWifi } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSwimming } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { GoCodespaces } from "react-icons/go";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaCoffee} from 'react-icons/fa'



export const rooms = [
  {
    id: 1,
    name: "Presidential Suite",
    slug: "presidential-suite",
    description:
      "Our most luxurious suite, designed for royalty and top executives. The Presidential Suite offers panoramic city views, a private jacuzzi, a personal butler, and access to an exclusive lounge. Perfect for those who want nothing but the best.",
    price: 25000,
    
    image:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    amenities: [
      "King-size bed",
      "Private Jacuzzi",
      "Personal Butler",
      "City View",
      "Smart Home Controls",
    ],
    secAmenities: [
      {icon: FaWifi, text: "free wifi"},
      {icon: MdOutlineFreeBreakfast, text: "complimentary coffee"},
      {icon: TbSwimming, text: "pool access"},
    ],
    previewImage: [
      "https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg",
      "https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg",
      "https://images.pexels.com/photos/52988/swim-water-diving-underwater-52988.jpeg",
    ]
  },
  {
    id: 2,
    name: "Executive Suite",
    slug: "executive-suite",
    description:
      "A blend of elegance and comfort, the Executive Suite is perfect for business travelers and leisure seekers alike. Enjoy spacious living, dedicated workspace, and world-class hospitality.",
    price: 75000,
    currency: "USD",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    amenities: [
      "King-size bed",
      "Workspace & Desk",
      "Lounge Area",
      "High-Speed Wi-Fi",
      "Complimentary Breakfast",
    ],
     secAmenities: [
      {icon: TbSwimming, text: "pool access"},
      {icon: TbMassage, text: "massage"},
      {icon: GiJugglingClubs, text: "juggling clubs"},
    ],
    previewImage: [
      "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg",
      "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
      "https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg",
    ]
  },
  {
    id: 3,
    name: "Deluxe Room",
    slug: "deluxe-room",
    description:

      "Designed for modern comfort, the Deluxe Room offers stunning interiors, luxury bedding, and a warm ambiance. Ideal for couples or solo travelers looking for a relaxing retreat.",
    price: 40000,
    currency: "USD",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    amenities: [
      "Queen-size bed",
      "Rainfall Shower",
      "Smart TV",
      "Mini Bar",
      "Pool Access",
    ],
      
     secAmenities: [
      {icon: GoCodespaces, text: "codespaces"},
      {icon: FaRegChessPawn, text: "chess"},
      {icon: FaCoffee, text: "complimentary coffee"},
    ],
    previewImage: [
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg",
      "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg",
      "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg",
    ]
  },
  {
    id: 4,
    name: "Standard Room",
    slug: "standard-room",
    description:
      "A cozy space with all the essentials, crafted with Hotelio’s signature style. The Standard Room is affordable yet elegant, ensuring comfort without compromise.",
    price: 15000,
    currency: "USD",
    image:
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg",
    amenities: [
      "Double Bed",
      "Smart TV",
      "Work Desk",
      "24/7 Room Service",
    ],
     secAmenities: [
      {icon: FaWifi, text: "free wifi"},
      {icon: FaUmbrellaBeach, text: "beach access"},
      {icon: TbSwimming, text:"pool access"},
    ],
    previewImage: [
      "https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg",
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
      "https://images.pexels.com/photos/1827354/pexels-photo-1827354.jpeg",
    ]
  },
];
