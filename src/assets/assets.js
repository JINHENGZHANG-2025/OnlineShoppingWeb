import junimo from './junimo.png'
import logo from './logo.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import stardrop from './stardrop.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_icon from './support_icon.png'
import cross_icon from './cross_icon.png'


export const assets = {
  junimo,
  logo,
  cart_icon,
  menu_icon,
  profile_icon,
  search_icon,
  stardrop,
  exchange_icon,
  quality_icon,
  support_icon,
  cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Nec Cotten Top",
        description: "A lighweight, usually one",
        price: 100,
        image: [junimo],
        category : "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
        {
        _id: "aaaab",
        name: "Men V Nec Fit Top",
        description: "A lighweight, usually one",
        price: 200,
        image: [logo,search_icon],
        category : "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    }
]