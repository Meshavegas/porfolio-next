import { SubTitle } from "./small/subtitle";
import { Title } from "./small/title";

export const NewsLetter = async () => {
  // const services = await getServices();

  return (
    <div className="md:px-20 px-4 flex md:flex-row flex-col bg-gray pt-20 pb-20 gap-3">
      <div className="w-full md:w-3/4">
        <Title title="Subcribbe" isCenter="true" />
        <SubTitle
          paragraphe="Nous vous enverrons régulièrement des articles sur les dernières
          tendances en développement web, des conseils pour améliorer votre site
          web ou votre application mobile, des offres spéciales sur nos services
          et des interviews de développeurs web."
          isCenter="left"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-semibold">
          Inscrivez-vous à notre newsletter pour recevoir des conseils et des
          offres exclusives sur le développement web !
        </div>
        <div className="input">
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900  border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center 
                  text-white  cursor-pointer bg-base 
                  border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 
                  focus:ring-4 focus:ring-primary-300  
                  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
