import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men's Fashion",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image:
      "https://www.lee.in/media/wysiwyg/Home_Page_Category_Section_-Outerwear_11zon_1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women's Fashion",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image:
      "https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/700x800px-Only-Shirts-Website_09022024.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kid's Fashion",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image:
      "https://images-static.nykaa.com/uploads/eab1fbb6-fc08-4071-9179-a222e3568e7b.jpg?tr=w-480,cm-pad_resize",
  },
  {
    _id: uuid(),
    categoryName: "Beauty",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image:
      "https://images-static.nykaa.com/creatives/7ef1d36c-6fcc-415f-a7a5-ac8ee1187240/default.jpg?tr=w-600,cm-pad_resize",
  },
];
