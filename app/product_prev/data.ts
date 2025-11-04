export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  facebook_link: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Servo Motor 9g",
    description: "เซอร์โวขนาดเล็ก น้ำหนักเบา เหมาะกับโดรนและหุ่นยนต์ขนาดเล็ก",
    price: "฿120",
    image: "/images/products/servo9g.jpg",
    category: "Servo",
    facebook_link: "https://m.me/tmcthaimathatronic",
  },
  {
    id: 2,
    name: "Aluminium Frame",
    description: "โครงสร้างอะลูมิเนียมน้ำหนักเบา แข็งแรง เหมาะกับงาน DIY และโดรน",
    price: "฿450",
    image: "/images/products/aluminium.jpg",
    category: "Frame",
    facebook_link: "https://m.me/tmcthaimathatronic",
  },
  {
    id: 3,
    name: "DC Motor 12V",
    description: "มอเตอร์กระแสตรงขนาด 12V ความเร็วสูง ใช้ได้กับโปรเจ็กต์ทั่วไป",
    price: "฿180",
    image: "/images/products/dcmotor.jpg",
    category: "Motor",
    facebook_link: "https://m.me/tmcthaimathatronic",
  },
];
