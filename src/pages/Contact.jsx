import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import Subscribe from "../components/Subscribe";

const Contact = () => {
  return (
    <div className="flex flex-col border-t border-gray-300 pt-10 mt-4">
      <div className="flex flex-col gap-7">
        <div className="text-center text-xl sm:text-2xl">
          <Tittle text1={"CONTACT"} text2={"US"} />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center lg:items-start  sm:gap-10 ">
          {/* left side */}
          <div className="sm:w-[40%]">
            <img src={assets.contact_img} />
          </div>
          {/* right side */}
          <div className="flex flex-col gap-9  mt-9 sm:mt-16 justify-center sm:w-[400px]">
            <div className="text-gray-500 ">
              <p className="text-black text-lg font-bold mb-7">Our Store</p>
              <p>54709 willms Station </p>
              <p>Suite 350, Washington, USA</p>
            </div>
            <div className="text-gray-500 ">
              <p>Tel:(+234) 7064662295</p>
              <p>Email:admin@forever.com</p>
            </div>

            <div className="text-gray-500 ">
              <p className="text-black text-lg font-bold mb-5">
                Careers at Forever
              </p>
              <p>Learn more about our terms and job openings</p>
              <button className="border border-gray-800 px-6 py-3 mt-6 hover:bg-black hover:text-white transition ease-in-out duration-500 text-gray-800">
                Explore jobs
              </button>
            </div>
          </div>
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Contact;
