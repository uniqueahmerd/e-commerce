import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContex } from "../contex/ShopContex";
import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import RelatedProducts from "../components/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContex);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduct = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return productData ? (
    <div className=" border-gray-300 border-t pt-10 mt-4 transition-opacity ease-in duration-500 opacity-100">
      {/* products data */}
      <div className="flex gap-7 md:items-start flex-col sm:flex-row">
        {/* product images */}

        <div className="flex-1 flex flex-col-reverse gap-3">
          <div className="flex sm:flex-row sm:gap-3.5  justify-between  sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>
        {/* ----------- product info -------- */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl mt-2">{productData.name}</h1>
          <div className="flex gap-1 mt-2 items-center">
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_icon} className="w-3.5" />
            <img src={assets.star_dull_icon} className="w-3.5" />
            <p className="ml-1">(122)</p>
          </div>
          <p className="font-bold text-2xl mt-5">
            {currency} {productData.price}
          </p>
          <p className="text-gray-500 w-4/5 mt-5">{productData.description}</p>
          <div className="my-8">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-2 mt-4">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`bg-gray-200 py-2 px-4 rounded-sm  ${
                    item === size ? "border-black border" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="mt-5 py-3 px-6 bg-black text-white active:bg-gray-700"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          <hr className="text-gray-300 mt-14 text-sm" />
          <div className="text-gray-500 mt-7 flex flex-col gap-1 text-sm">
            <p>100% Original. </p>
            <p> Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days. </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Decscription
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-5 border border-gray-200 p-6 text-gray-500 text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            omnis sequi dolorem, porro, doloremque sint tempora enim eaque
            pariatur, quod officia. Quam modi ex beatae tenetur dignissimos
            numquam repellat quae ratione explicabo excepturi ea velit error
            voluptatibus, magnam mollitia ullam. Alias, quasi perspiciatis
            laborum iste quidem corrupti quas impedit quae dolorem! Adipisci
            maiores cum earum architecto repellat, aspernatur natus? Quis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            necessitatibus soluta sint minima. Voluptatum hic esse veritatis
            error, quibusdam repellendus temporibus quos, modi animi
            perferendis, dolorum fugit odit illum sit!
          </p>
        </div>
      </div>
      {/* -------dispaly related products */}
      <div className="mt-30">
        <div className="text-center text-xl sm:text-2xl">
          <Tittle text1={"RELATED"} text2={"PRODUCTS"} />

          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
