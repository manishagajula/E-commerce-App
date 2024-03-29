import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "ADIDAS",
    description: "Men Indian Cricket ODI Fan Polo Collar Jersey",
    discounted_price: "799",
    original_price: "999",
    rating: 4.4,
    size: "44",
    image:
      "https://assets.myntassets.com/assets/images/25099214/2023/9/26/2749b9d6-1191-45bf-b280-2d430c3053f91695731103781-ADIDAS-Men-Indian-Cricket-ODI-Fan-Jersey-Printed-Polo-Collar-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 230,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "HERE&NOW",
    description: "Men Black Slim Fit Casual Shirt",
    discounted_price: "1899",
    original_price: "599",
    rating: 4.3,
    size: "40",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26274460/2023/12/6/993caf3e-785c-4877-801e-860d0df0159f1701861217628BewakoofMenBlackPrintedT-shirt1.jpg",
    // image:

    //   "https://assets.myntassets.com/h_480,q_100,w_360/v1/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
    categoryName: "Men's Fashion",
    reviews: 544,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Blackberrys",
    description: "Cotton India Slim Fit Printed Formal Shirt",
    discounted_price: "1536",
    original_price: "2195",
    rating: 4.9,
    size: "439",
    image:
      "https://sslimages.shoppersstop.com/sys-master/images/h11/h2f/31083577802782/FA3BB33B2NA21FL_BLUE.jpg_2000Wx3000H",
    categoryName: "Men's Fashion",
    reviews: 1,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Powerlook",
    description: "Colourblocked Shirt Collar Ribbed Sweatshirt",
    discounted_price: "1394",
    original_price: "1499",
    rating: 4.1,
    size: "32",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUG0YuVNaRh3tW0wUmsg2pF0UsPG3RLNncrcigzTReBThupFqH0dufejIzvROMxcysbk1PjF8_SCsHgqwbKCjL7VvWENteRznjfBkh_5n25Y9Bv7fjHk4T",
    categoryName: "Men's Fashion",
    reviews: 9,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Roadster",
    description: "Men Blue Self Designed Striped Pullover Sweater",
    discounted_price: "934",
    original_price: "1699",
    rating: 4.4,
    size: "44",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/o/h/-original-imagvqbkznwnffr7.jpeg?q=70",
    categoryName: "Men's Fashion",
    reviews: 34,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Mast & Harbour",
    description: "Men Black Solid Bomber Jacket",
    discounted_price: "1119",
    original_price: "3999",
    rating: 4.0,
    size: "44",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11973436/2020/12/10/f6d08c30-d9db-4f47-aa1e-e2f84f81d0d31607594555900-Mast--Harbour-Men-Jackets-5771607594554159-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 45,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Arrow",
    description: "Men Solid Watertight II Rain Jacket",
    discounted_price: "6999",
    original_price: "5499",
    rating: 4.4,
    size: "44",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21854762/2023/2/9/cb9fc736-7901-4900-9c51-5e2f2461fdfe1675939596253-Columbia-Mens-Orange-Colour-Polyester-Watertight-II-Jacket-4-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 230,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "ADIDAS",
    description: "Men Indian Cricket ODI Fan Polo Collar Jersey",
    discounted_price: "799",
    original_price: "999",
    rating: 4.4,
    size: "44",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/f/7/g/xxl-pink-1-otus-original-imagjg3gbywghznh.jpeg?q=70",
    categoryName: "Men's Fashion",
    reviews: 230,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Peter England",
    description: "Self Design Slim-Fit Single-Breasted Two-Piece Formal Suit",
    discounted_price: "5199",
    original_price: "7999",
    rating: 4.5,
    size: "44",
    image:
      "https://assets.myntassets.com/assets/images/24267860/2023/7/31/a57b3018-1ac7-4568-afd2-0fb2659f98551690784195339MenGreyTexturedSlimFitFormalTwoPieceSuit1.jpg",
    categoryName: "Men's Fashion",
    reviews: 1,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: " VAN HEUSEN",
    description: "Men Navy Blue Striped Single-Breasted Formal Blazer",
    discounted_price: "6089",
    original_psrice: "6999",
    rating: 3.6,
    size: "42",
    image:
      "https://imagescdn.planetfashion.in/img/app/product/7/776292-8963027.jpg?auto=format&w=494.40000000000003",
    categoryName: "Men's Fashion",
    reviews: 3,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: " VAN HEUSEN",
    description: "Men Navy Blue Striped Single-Breasted Formal Blazer",
    discounted_price: "6089",
    original_psrice: "6999",
    rating: 3.6,
    size: "42",
    image:
      "https://rukminim2.flixcart.com/image/850/1250/xif0q/t-shirt/1/g/j/xl-591079-bewakoof-original-imagwywb6ry2bvsp.jpeg?q=90&crop=true",
    categoryName: "Men's Fashion",
    reviews: 3,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: " VAN HEUSEN",
    description: "Men Navy Blue Striped Single-Breasted Formal Blazer",
    discounted_price: "6089",
    original_psrice: "6999",
    rating: 3.6,
    size: "42",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/p/x/a/xxl-569164-bewakoof-original-imagngb2s6fsyewh.jpeg?q=90",
    categoryName: "Men's Fashion",
    reviews: 3,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: " VAN HEUSEN",
    description: "Men Navy Blue Striped Single-Breasted Formal Blazer",
    discounted_price: "6089",
    original_psrice: "6999",
    rating: 3.6,
    size: "42",
    image:
      "https://images.bewakoof.com/original/men-s-black-batman-poster-graphic-printed-oversized-t-shirt-555257-1672916150-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 3,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: " VAN HEUSEN",
    description: "Men Navy Blue Striped Single-Breasted Formal Blazer",
    discounted_price: "6089",
    original_psrice: "6999",
    rating: 3.6,
    size: "42",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26117264/2023/12/22/250426ad-916c-41d2-acc3-e4b9db18206a1703233431085-The-Souled-Store-Men-Navy-Blue-Printed-Sweatshirt-4551703233-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 3,
    inStock: true,
    deliveryTime: "2-3 business days",
  },
  {
    _id: uuid(),
    title: "Campus Sutra",
    description: "Cable Knit Cable Knit Woollen Pullover",
    discounted_price: "1039",
    original_psrice: "1999",
    rating: 4.1,
    size: "42",
    image:
      "https://assets.myntassets.com/assets/images/25373430/2023/10/7/23367a57-182b-429c-bc19-957d99e5c5b11696643967685CampusSutraMenSeaGreenCableKnitWoollenPullover1.jpg",
    categoryName: "Men's Fashion",
    reviews: 440,
    inStock: true,
    deliveryTime: "2-3 business days",
    // 48%OFF
  },
  {
    _id: uuid(),
    title: "The Indian Garage Co",
    description: "Graphic Printed Hooded Sweatshirt",
    discounted_price: "879",
    original_psrice: "2749",
    rating: 4.6,
    size: "41",
    image:
      "https://assets.myntassets.com/assets/images/25449384/2023/12/11/1ec19ae9-6b1f-45ef-9630-865a19c15b781702273312811-The-Indian-Garage-Co-Graphic-Printed-Hooded-Sweatshirt-40117-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 49,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (68% OFF)
  },
  {
    _id: uuid(),
    title: "FUGAZEE",
    description: "Colourblocked Cotton Pullover Sweatshirt",
    discounted_price: "899",
    original_price: "2999",
    rating: 4.3,
    size: "32",
    image:
      "https://www.fugazee.com/cdn/shop/files/3_73569a62-4669-4bb0-9c68-2b99178bb7db.jpg?v=1700887508&width=860",
    categoryName: "Men's Fashion",
    reviews: 4,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (70% OFF)
  },
  {
    _id: uuid(),
    title: "Mast & Harbour",
    description: "Solid Hooded Sweatshirt",
    discounted_price: "739",
    original_price: "1999",
    rating: 4.3,
    size: "32",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/sweatshirt/j/l/7/xl-men-hod-1-moyzikh-original-imaghs3degxgt2uv.jpeg?q=20",
    categoryName: "Men's Fashion",
    reviews: 17,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (63% OFF)
  },
  {
    _id: uuid(),
    title: "HIGHLANDER",
    description: "Typography Printed Hooded Sweatshirt",
    discounted_price: "549",
    original_price: "1849",
    rating: 2.2,
    size: "32",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25866704/2023/11/11/b24e2101-6ab9-47fc-b1c1-dfddb60951eb1699704532848HIGHLANDERMenCoffeeBrownPrintedHoodedSweatshirt1.jpg",
    categoryName: "Men's Fashion",
    reviews: 1,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (Rs. 1300 OFF)
  },
  {
    _id: uuid(),
    title: "VEIRDO",
    description: "Blue Typography Printed Hooded Fleece Pullover Sweatshirt",
    discounted_price: "804",
    original_price: "2299",
    rating: 3.1,
    size: "36",
    image:
      "https://veirdo.in/cdn/shop/files/Veirdo-in-Blue-Men-s-Hooded-Neck-Hoodie-Veirdo-4256_804x.progressive.jpg?v=1705011349",
    categoryName: "Men's Fashion",
    reviews: 5,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (65% OFF)
  },
  {
    _id: uuid(),
    title: "WROGN",
    description: "Graphic Applique Hooded Sweatshirt",
    discounted_price: "1374",
    original_price: "2499",
    rating: 4.3,
    size: "36",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRjG_6axaGxSvNhU5ZkyOuaAPtF2HPTohdFWOQmMP2LWAxGJN48JWzRCXyopzePrJ4xtHU1ou3qAgiVD6mBh3nWIa2ojIyVEtUJe3Jgv6l",
    categoryName: "Men's Fashion",
    reviews: 43,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (45% OFF)
  },
  {
    _id: uuid(),
    title: "COLOR CAPITAL",
    description: "Oversized Hoodie Sweatshirt",
    discounted_price: "1333",
    original_price: "2299",
    rating: 4.3,
    size: "36",
    image:
      "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/26920224/2024/1/14/0a1da910-0009-440a-9ef9-30a8a6eec57b1705248219345COLORCAPITALUnisexWhiteHoodedSweatshirt1.jpg",
    categoryName: "Men's Fashion",
    reviews: 43,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (42% OFF)
  },
  {
    _id: uuid(),
    title: "UNRL",
    description: "Graphic Printed Hooded Sweatshirt",
    discounted_price: "1872",
    original_price: "2496",
    rating: 3.8,
    size: "36",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24660918/2023/10/27/fbd3c44e-f5dd-4ee1-a766-8d2f326b344c1698385174176-UNRL-Men-Sweatshirts-7301698385173786-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 43,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (25% OFF)
  },
  {
    _id: uuid(),
    title: "Roadster",
    description: "Men Blue Solid Hooded Sweatshirts",
    discounted_price: "439",
    original_price: "999",
    rating: 3.5,
    size: "32",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20602340/2022/11/11/16108a1a-8b60-4281-8078-afb4f29d8c5c1668141257042-Roadster-Men-Solid-Sleeveless-Hooded-Sweatshirts-51116681412-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 43,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (56% OFF)
  },
  {
    _id: uuid(),
    title: "BAESD",
    description: "Colourblocked Hooded Long Sleeves Fleece Pullover Sweatshirt",
    discounted_price: "699",
    original_price: "1999",
    rating: 5,
    size: "32",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26329538/2023/12/27/9c26a5f0-bc8e-4f42-8cc6-8a235194b8721703674414096-BAESD-Men-White-Printed-Hooded-Sweatshirt-3491703674413805-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 2,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (65% OFF)
  },
  {
    _id: uuid(),
    title: "The Indian Garage Co",
    description: "Hooded Long Sleeves Pullover",
    discounted_price: "659",
    original_price: "1999",
    rating: 3.6,
    size: "32",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/h/r/x/-original-imagtr6hxch4zcmj.jpeg?q=70&crop=false",
    categoryName: "Men's Fashion",
    reviews: 101,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (67% OFF)
  },
  {
    _id: uuid(),
    title: "HIGHLANDER",
    description: "Typography Printed Oversized Sweatshirt",
    discounted_price: "580",
    original_price: "2149",
    rating: 3.9,
    size: "32",
    image:
      "https://getketchadmin.getketch.com/product/8905980506271/300/HLSS000885_1.JPG",
    categoryName: "Men's Fashion",
    reviews: 27,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (73% OFF)
  },
  {
    _id: uuid(),
    title: "INVICTUS",
    description: "Regular Fit Pullover Sweatshirt",
    discounted_price: "809",
    original_price: "1798",
    rating: 3.9,
    size: "32",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23249690/2023/9/29/34628336-50bb-4cf0-91fc-81f53041e4cd1695988175778-INVICTUS-Men-Sweatshirts-6201695988175235-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 12,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (55% OFF)
  },
  {
    _id: uuid(),
    title: "MASCLN SASSAFRAS",
    description: "Printed Hooded Cotton Sweatshirt",
    discounted_price: "749",
    original_price: "2499",
    rating: 3.1,
    size: "32",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26255126/2023/12/5/7a470a6c-27f4-4011-9203-fd41cb1d2e401701790778031MASCLNSASSAFRASMenBluePrintedHoodedSweatshirt1.jpg",
    categoryName: "Men's Fashion",
    reviews: 8,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (70% OFF)
  },
  {
    _id: uuid(),
    title: "Mast & Harbour",
    description: "Brand Logo Printed Hooded Sweatshirt",
    discounted_price: "747",
    original_price: "2199",
    rating: 4.4,
    size: "32",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23644156/2023/10/16/70fbe416-cb28-4509-a13e-0853814604cb1697435216931-Mast--Harbour-Men-Sweatshirts-7681697435216610-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 34,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (66% OFF)
  },
  {
    _id: uuid(),
    title: "INVICTUS",
    description: "Drop Shoulder Sweatshirt",
    discounted_price: "719",
    original_price: "1798",
    rating: 4.5,
    size: "32",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23249700/2023/9/29/5547e256-c304-41de-b99c-fb0ab4ab3d171695986840259-INVICTUS-Men-Sweatshirts-4361695986839863-5.jpg",
    categoryName: "Men's Fashion",
    reviews: 8,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (60% OFF)
  },
  {
    _id: uuid(),
    title: "Mr Bowerbird",
    description: "Tailored Fit Pullover Sweater",
    discounted_price: "1481",
    original_price: "3799",
    rating: 4.0,
    size: "30",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/22689370/2023/12/28/983a56b3-6a50-446e-a6d2-dc6d79e582901703748474082-Mr-Bowerbird-Tailored-Fit-Pullover-Sweater-6001703748473671-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 21,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (61% OFF)
  },
  {
    _id: uuid(),
    title: "Roadster",
    description:
      "The Lifestyle Co. Men Rust Brown Acrylic Self-Striped Pullover",
    discounted_price: "645",
    original_price: "1699",
    rating: 4.2,
    size: "40",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/18337586/2022/10/27/8515b605-db0c-4792-8486-2f53ed139c6f1666852411693-Roadster-Men-Maroon-Striped-Striped-Pullover-984166685241104-1.jpg",
    categoryName: "Men's Fashion",
    reviews: 76,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (62% OFF)
  },
  {
    _id: uuid(),
    title: "Bewakoof",
    description:
      "Official Disney Merchandise Unisex Can't Beat Me Mickey Cartoon Print T-shirt",
    discounted_price: "699",
    original_price: "1499",
    rating: 4.2,
    size: "40",
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/0/tr:w-960,/30215eaBEK-391711_1.jpg?rnd=20200526195200",
    categoryName: "Women's Fashion",
    reviews: 50,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (Rs. 800 OFF)
  },
  {
    _id: uuid(),
    title: "Bewakoof",
    description: "Tropical Vibes",
    discounted_price: "699",
    original_price: "899",
    rating: 4.2,
    size: "40",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/19041916/2023/12/12/b93a3b2a-0a43-4f8f-9b54-f41bfd9e0d251702377436700-Bewakoof-Women-Black--brown-Typography-Printed--Applique-Ove-12.jpg",
    categoryName: "Women's Fashion",
    reviews: 50,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (Rs. 10 OFF)
  },
  {
    _id: uuid(),
    title: "H&M",
    description: "Boys Printed Hoodie",
    discounted_price: "999",
    original_price: "1299",
    rating: 4.2,
    size: "2-4Y",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/26542186/2023/12/20/c80cb03a-5fd1-42cc-b8a1-a6153499068b1703075812428HMBoysPrintedHoodie1.jpg",
    categoryName: "Kids Fashion",
    reviews: 150,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (Rs. 10 OFF)
  },
  {
    _id: uuid(),
    title: "H&M",
    description: "Girls Pure Cotton Sustainable TShirt",
    discounted_price: "1076",
    original_price: "2690",
    rating: 4.5,
    size: "2-4Y",
    image:
      "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57073273_02_D5.jpg?ts=1689930230049&imwidth=312&imdensity=2",
    categoryName: "Kids Fashion",
    reviews: 130,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (60% OFF)
  },
  {
    _id: uuid(),
    title: "M.A.C",
    description: "M.A.C. Mini Matte Lipstick 1.8g - Ruby Woo",
    discounted_price: "1000",
    original_price: "1450",
    rating: 4.5,
    size: "0-2ML",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231215/BRMy/657c7116ddf7791519d3177c/-473Wx593H-4919419790-rubywoo-MODEL.jpg",
    categoryName: "Beauty",
    reviews: 212,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (60% OFF)
  },
  {
    _id: uuid(),
    title: "M.A.C",
    description: "Prep + Prime Fix+ Primer with Cucumber & Green Tea - 100 ml",
    discounted_price: "1000",
    original_price: "1450",
    rating: 4.6,
    size: "50ML",
    image:
      "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/9590429/2022/5/10/da65eef1-61c2-4345-a246-b51b125659691652181260994-MAC-Prep--Prime-Fix-Original-100-ml-9071652181260787-1.jpg",
    categoryName: "Beauty",
    reviews: 929,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (60% OFF)
  },
  {
    _id: uuid(),
    title: "Benefit Cosmetics",
    description: "The POREfessional Pore Primer 22 ml",
    discounted_price: "2000",
    original_price: "3300",
    rating: 4.8,
    size: "20-25ML",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/14411296/2023/12/5/03a5006e-762b-47d2-9450-ed221dabb8d51701775294777BenefitCosmeticsThePOREfessionalPorePrimer22ml1.jpg",
    categoryName: "Beauty",
    reviews: 58,
    inStock: true,
    deliveryTime: "2-3 business days",
    // (60% OFF)
  },
];
