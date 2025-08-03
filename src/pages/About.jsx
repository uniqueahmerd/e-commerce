import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div className="flex flex-col gap-10  border-t border-gray-300 pt-10 mt-4">
      {/* top-part */}
      <div>
        <div className="text-center text-xl sm:text-2xl">
          <Tittle text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="flex flex-col sm:flex-row gap-20 sm:gap-14 mt-8 lg:items-center">
          <div className="sm:w-[40%] w-full">
            <img src={assets.about_img} />
          </div>
          <div className="w-full sm:w-[50%]">
            <div className="text-gray-500 text-lg flex flex-col gap-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita fugiat quia necessitatibus quis ducimus nostrum
                consectetur rerum excepturi. Beatae ut odio voluptas cumque iste
                corporis dicta, accusamus mollitia amet nam. Lorem ipsum dolor
                sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis animi ad sint ducimus praesentium consequuntur facilis
                labore deleniti nam soluta magnam cumque sed reiciendis ratione,
                incidunt rerum! Iure blanditiis nihil libero illo laboriosam
                impedit, provident autem, molestias esse voluptates nulla culpa
                soluta?
              </p>

              <p>
                <span className="text-black text-xg mb-5 font-bold block">
                  Our Mission
                </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                nobis tenetur repudiandae perferendis architecto eius excepturi
                totam, reiciendis porro, eaque dolor. Ipsa veritatis
                necessitatibus quas error esse non iste nemo recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* down parts */}
      <div className="flex flex-col gap-3">
        <div className="text-left text-lg">
          <Tittle text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="flex flex-col sm:flex-row gap-8  ">
          <div className="px-16 py-14 shadow-xl rounded-2xl flex flex-col gap-4 transition ease-in hover:scale-105 cursor-pointer">
            <p className="font-bold text-lg">Convenience</p>
            <p className="text-gray-500 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              animi. Deserunt consequuntur libero ipsam odio!
            </p>
          </div>
          <div className="px-16 py-14 shadow-xl rounded-2xl flex flex-col gap-4 transition ease-in hover:scale-105 cursor-pointer">
            <p className="font-bold text-lg">Convenience</p>
            <p className="text-gray-500 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              animi. Deserunt consequuntur libero ipsam odio!
            </p>
          </div>
          <div className="px-16 py-14 shadow-xl rounded-2xl flex flex-col gap-4 transition ease-in hover:scale-105 cursor-pointer">
            <p className="font-bold text-lg">Convenience</p>
            <p className="text-gray-500 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              animi. Deserunt consequuntur libero ipsam odio!
            </p>
          </div>
        </div>

        <Subscribe />
      </div>
    </div>
  );
};

export default About;
