import "./style.scss";
import Effect from "../effect.js";

// Array of scene configurations where each object represents a separate scene
// with its own texture(url), text, and particle behavior settings
const texturesOptions = [
  {
    index: 0,
    url: "/img/1.jpg",
    quote:
      "<span style='color:#ff69b4'>CiCi Accessories</span> - Nâng tầm phong cách với phụ kiện thời trang cao cấp",
    threshold: 20,
    random: 4.0,
    depth: 1.5,
    size: 2,
    square: 0,
  },

  {
    index: 1,
    url: "/img/2.jpg",
    quote: "Chào bạn dành chút thời gian cùng chúng mình nhé!!!",
    threshold: 60,
    random: 1.0,
    depth: 1.0,
    size: 0.5,
    square: 1,
  },

  {
    index: 2,
    url: "/img/3.jpg",
    quote:
      "<span style='color:#6cc4bb'>CiCiTeam</span> - Đội ngũ trẻ trung, năng động và sáng tạo",
    threshold: 10,
    random: 1.0,
    depth: 2.0,
    size: 1.2,
    square: 0,
  },

  {
    index: 3,
    url: "/img/4.jpg",
    quote:
      "Trang sức <span style='color:#FF00FF'>sang trọng</span> - Tôn vinh vẻ đẹp của phái đẹp",
    threshold: 100,
    random: 2.0,
    depth: 2.0,
    maxDepth: 60,
    size: 1.5,
    square: 0,
  },

  {
    index: 4,
    url: "/img/5.jpg",
    quote:
      "Cùng đến <span style='color:#gold'>CiCi Accessories - 21 Chùa Láng</span> để tận hưởng không gian mua sắm thú vị",
    threshold: 80,
    random: 3.0,
    depth: 1.5,
    size: 1.3,
    square: 0,
  },
];
let effect = new Effect(texturesOptions);
effect.init();
