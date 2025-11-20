export type Product = {
  slug: string;
  name: string;
  desc: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "nem-chua",
    name: "Nem Chua nhỏ",
    desc: `Nem chua là một trong những đặc sản làm nên tên tuổi của xứ Thanh, ai đến đây mà
    chẳng muốn dừng chân lại thưởng thức nem chua cũng như mua đôi ba chục nem về làm quà cho người thân.`,
    image: "/images/nem-chua.jpg.webp",
  },
  {
    slug: "nem-coi",
    name: "Nem Cối",
    desc: `Nem cối của NEM THANH có cách làm và sử dụng giống với nem chua nhưng nem cối được 
    thiết kế to hơn nhằm phục vụ nhu cầu đa dạng của khách hàng. Nem cối phù hợp cho những khách 
    hàng muốn mua mang đi xa biếu làm quà hoặc được bày trong mâm cỗ rất đẹp và sang trọng.`,
    image: "/images/nem-coi.jpg",
  },
  {
    slug: "nem-nuong",
    name: "Nem Nướng",
    desc: `Nem Nướng Thanh Hóa là đặc sản của của vùng đất Thọ Xuân. Đây là loại nem đã được 
    lên men chua và gần gũi với thực khách khi đến Thanh Hóa. Nem nướng cũng được làm từ các 
    nguyên liệu chính như thịt nạc, bì lợn, gia vị, tiêu, tỏi, ớt, thính, lá đinh lăng như nem chua.`,
    image: "/images/nem-nuong.jpg.webp",
  },
  {
    slug: "nem-thinh",
    name: "Nem Thính",
    desc: `Đây là món ăn cầu kỳ với nguyên liệu chính từ thịt lợn, thính gạo rang thơm, lá ổi, lá đinh 
    lăng cùng với sự kết hợp của nhiều loại gia giảm khác như tiêu, tỏi, ớt… làm bật lên cái hương vị thơm ngon khó quên này.`,
    image: "/images/nem-thinh.jpg.webp",
  },
];
