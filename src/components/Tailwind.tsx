const TailWind = () => {
  return (
    <div className="relative bg-[url('https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg?crop=0.780xw:0.950xh;0.141xw,0.0497xh&resize=768:*')] h-screen bg-center bg-cover">
      <header className="pt-5 flex justify-between font-bold items-center">
        <div className="ml-8">
          <svg
            className="w-32 cursor-pointer"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            ></path>
          </svg>
        </div>
        <nav className=" hidden lg:inline">
          <ul className="flex space-x-2 text-sm ">
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Model S
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Model 3
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Model X
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Model Y
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Solar Roof
            </li>
            <li className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">
              Solar Panel
            </li>
          </ul>
        </nav>

        <div>
          <ul className="flex space-x-4 mr-2 text-sm">
            <li className="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
              Shop
            </li>
            <li className="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
              Account
            </li>
            <li className="cursor-pointer hover:rounded-full hover:bg-slate-300 py-1 px-3">
              Menu
            </li>
          </ul>
        </div>
      </header>
      <div className=" flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
        <h1 className="text-[40px] m-auto font-bold">Model 3</h1>
        <p className="whitespace-nowrap">
          Order Online for<span>Touchless Delivery</span>
        </p>
      </div>
      <div className="absolute bottom-[80px] left-[50%] translate-x-0">
        <button>Custom Order</button>
        <button></button>
      </div>
    </div>
  );
};
export default TailWind;