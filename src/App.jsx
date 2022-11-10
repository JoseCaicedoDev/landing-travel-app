import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='w-full h-14 hidden bg-white md:flex p-4 justify-between fixed z-10 dark:bg-gray-800'>
        <p className='text-xl text-primary font-black dark:text-white'>Travel Cai</p>
        <ul className='flex gap-6'>
          <li className='font-bold text-md text-primary dark:text-white'><a href="#home">Home</a></li>
          <li className='font-bold text-md text-primary dark:text-white'><a href="#recomendadas">Locations</a></li>
          <li className='font-bold text-md text-primary dark:text-white'><a href="#rentas_destacadas">Stays</a></li>
          <li className='font-bold text-md text-primary dark:text-white'><a href="#faqs">FAQS</a></li>
          <li className='font-bold text-md text-primary dark:text-white'><a href="#about_us">About Us</a></li>
        </ul>
        <div className='flex space-x-6'>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-current text-primary dark:text-white' fill-rule="evenodd" clip-rule="evenodd" d="M6 1.99997C4.93913 1.99997 3.92172 2.4214 3.17157 3.17155C2.42143 3.92169 2 4.93911 2 5.99997C2 7.06084 2.42143 8.07825 3.17157 8.8284C3.92172 9.57855 4.93913 9.99997 6 9.99997C7.06087 9.99997 8.07828 9.57855 8.82843 8.8284C9.57857 8.07825 10 7.06084 10 5.99997C10 4.93911 9.57857 3.92169 8.82843 3.17155C8.07828 2.4214 7.06087 1.99997 6 1.99997ZM1.13461e-07 5.99997C-0.00012039 5.05568 0.222642 4.12468 0.650171 3.28271C1.0777 2.44074 1.69792 1.71157 2.4604 1.1545C3.22287 0.597426 4.10606 0.228185 5.03815 0.0768059C5.97023 -0.0745733 6.92488 -0.00381595 7.82446 0.283323C8.72404 0.570462 9.54315 1.06587 10.2152 1.72927C10.8872 2.39266 11.3931 3.20531 11.6919 4.10111C11.9906 4.9969 12.0737 5.95056 11.9343 6.88452C11.795 7.81848 11.4372 8.70637 10.89 9.47597L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6948C15.5094 15.8802 15.2586 15.9854 14.9964 15.9876C14.7342 15.9899 14.4816 15.8891 14.293 15.707L9.477 10.891C8.57936 11.5293 7.52335 11.9081 6.42468 11.9861C5.326 12.0641 4.22707 11.8381 3.2483 11.3329C2.26953 10.8278 1.44869 10.063 0.875723 9.12232C0.30276 8.18165 -0.000214051 7.10141 1.13461e-07 5.99997Z" fill="#3F3F46" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-current text-primary dark:text-white' d="M15.293 11.293C13.8115 11.9631 12.161 12.1658 10.5614 11.8742C8.96175 11.5826 7.48895 10.8105 6.33919 9.66079C5.18944 8.51104 4.41734 7.03824 4.12574 5.4386C3.83415 3.83897 4.03691 2.18846 4.70701 0.70697C3.52758 1.23998 2.49505 2.05117 1.69802 3.07093C0.900987 4.09069 0.363244 5.28859 0.130924 6.56186C-0.101395 7.83512 -0.0213565 9.14574 0.364174 10.3813C0.749705 11.6168 1.42922 12.7404 2.34442 13.6556C3.25961 14.5708 4.38318 15.2503 5.61871 15.6358C6.85424 16.0213 8.16486 16.1014 9.43813 15.8691C10.7114 15.6367 11.9093 15.099 12.9291 14.302C13.9488 13.5049 14.76 12.4724 15.293 11.293Z" fill="#3F3F46" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-current text-gray-400' fill-rule="evenodd" clip-rule="evenodd" d="M2.78225 17.6464C4.4799 15.2799 7.48651 13.4999 12.4999 13.4999C17.5132 13.4999 20.5199 15.2799 22.2175 17.6464C23.8582 19.9336 24.1196 22.5552 24.1248 24.0058C24.13 25.4645 22.9071 26.4166 21.6533 26.4166H3.34642C2.09262 26.4166 0.869709 25.4645 0.874956 24.0058C0.880174 22.5552 1.1415 19.9336 2.78225 17.6464Z" fill="#F2F2F2" />
            <path className='fill-current text-gray-400' fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10.9166C15.3535 10.9166 17.6667 8.60339 17.6667 5.74992C17.6667 2.89645 15.3535 0.583252 12.5 0.583252C9.64653 0.583252 7.33334 2.89645 7.33334 5.74992C7.33334 8.60339 9.64653 10.9166 12.5 10.9166Z" fill="#F2F2F2" />
          </svg>
        </div>
      </nav>
      <section className='w-full'>
        {/* home */}
        <div className='bg-sanFrancisco lg:bg-sanFranciscoDesktop bg-cover bg-center h-[36rem] lg:h-[40rem]
        flex flex-col justify-between lg:justify-center items-center lg:items-start space-y-8 px-8 py-16' id="home">
          <div className='w-full h-full flex justify-center'>
            <div className='w-full flex justify-end'>
              <button className='w-14 h-8 bg-white md:hidden rounded-full flex justify-center items-center cursor-pointer z-10'>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='fill-current text-primary' d="M15.293 11.293C13.8115 11.9631 12.161 12.1658 10.5614 11.8742C8.96175 11.5826 7.48895 10.8105 6.33919 9.66079C5.18944 8.51104 4.41734 7.03824 4.12574 5.4386C3.83415 3.83897 4.03691 2.18846 4.70701 0.70697C3.52758 1.23998 2.49505 2.05117 1.69802 3.07093C0.900987 4.09069 0.363244 5.28859 0.130924 6.56186C-0.101395 7.83512 -0.0213565 9.14574 0.364174 10.3813C0.749705 11.6168 1.42922 12.7404 2.34442 13.6556C3.25961 14.5708 4.38318 15.2503 5.61871 15.6358C6.85424 16.0213 8.16486 16.1014 9.43813 15.8691C10.7114 15.6367 11.9093 15.099 12.9291 14.302C13.9488 13.5049 14.76 12.4724 15.293 11.293Z" fill="#3F3F46" />
                </svg>
              </button>
            </div>
            <div className='w-full flex flex-col absolute space-y-64 py-11
            items-center lg:space-y-0 lg:items-start lg:pt-36 lg:justify-start'>
              <input className='outline-none p-3 rounded-full shadow-sm
              transition duration-300 focus-within:shadow-sm focus:ring-2
              focus:w-11/12 lg:hidden' placeholder='San Francisco' type="search" name="" id="" />
              <div className='hidden h-auto md:w-1/3 lg:flex pb-6'>
                <p className='text-4xl ml-16 font-bold'>Find More Locations like this</p>
              </div>
              <button className='w-48 rounded-full bg-white text-lg text-primary
              font-semibold p-4 shadow-sm transition-all
              duration-500 ease-in-out hover:bg-primary hover:text-white transform
              hover:-translate-y-1 hover:scale-110 lg:ml-16'>Explore More</button>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='p-6' id="recomendadas">
          <p className='text-primary text-3xl font-semibold dark:text-white'>Our Recomendations</p>
          {/* list card */}
          <div className='w-auto h-80 items-center mt-6 overflow-x-auto
          overscroll-x-contain flex space-x-6 overflow-y-hidden'>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-norway bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700'>
                <p className='text-white font-bold text-xl px-4 py-2'>Norway</p>
                <p className='text-white text-base px-4'>Beautiful landscapes</p>
              </div>
            </div>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-new_york bg-cover'></div>
              <div className='w-full h-2/5 rounded-b-lg dark:bg-gray-800'>
                <p className='text-terciary font-bold text-xl px-4 py-2 dark:text-white'>New York</p>
                <p className='text-terciary text-base px-4 dark:text-white'>Concrete jungle</p>
              </div>
            </div>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-yosemite bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700'>
                <p className='text-white font-bold text-xl px-4 py-2'>Yosemite</p>
                <p className='text-white text-base px-4'>A break from the world</p>
              </div>
            </div>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-seatle bg-cover'></div>
              <div className='w-full h-2/5 rounded-b-lg dark:bg-gray-800'>
                <p className='text-terciary font-bold text-xl px-4 py-2 dark:text-white'>Seattle</p>
                <p className='text-terciary text-base px-4 dark:text-white'>Big City</p>
              </div>
            </div>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-switzerland bg-cover'></div>
              <div className='w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700'>
                <p className='text-white font-bold text-xl px-4 py-2'>Switzerland</p>
                <p className='text-white text-base px-4'>Big City</p>
              </div>
            </div>
            <div className='card'>
              <div className='w-full h-3/5 rounded-t-lg bg-new_york bg-cover'></div>
              <div className='w-full h-2/5 rounded-b-lg dark:bg-gray-800'>
                <p className='text-terciary font-bold text-xl px-4 py-2 dark:text-white'>New York</p>
                <p className='text-terciary text-base px-4 dark:text-white'>Concrete jungle</p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 w-full md:px-6' id="rentas_destacadas">
          <p className='text-primary text-3xl font-semibold pb-6 mt-6 dark:text-white'>Trending Stays</p>
          <div className='w-full h-full items-center justify-center flex flex-col gap-6'>
            <div className='w-full h-96 md:h-[35rem] bg-chicago bg-cover bg-bottom rounded-xl'>
              <p className='cardTitle1'>Chicago</p>
              <p className='text-base pl-8 mr-24'>2 rooms, bathroom and kitchen.</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-6'>
              <div className='w-full h-96 md:h-full bg-LA bg-center bg-cover rounded-xl md:row-span-2 md:col-span-3'>
                <p className='cardTitle'>Los Angeles</p>
                <p className='text-base pl-8 text-white mr-24'>4 rooms, 3 bathrooms,  kitchen and private pool.</p>
              </div>
              <div className='w-full h-96 md:h-full bg-miami bg-center bg-cover rounded-xl md:col-span-2'>
                <p className='cardTitle'>Miami</p>
                <p className='text-base pl-8 text-white mr-24'>3 rooms, 2 bathrooms,  kitchen and amazing
                  sea view.</p>
              </div>
              <div className='w-full h-96 md:full bg-bali bg-cover rounded-xl md:col-span-2'>
                <p className='cardTitle'>Bali</p>
                <p className='text-base pl-8 text-white mr-24'>2 rooms, 2 bathrooms,  kitchen and private
                  pool.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full pb-10' id="faqs">
          <div className='w-full h-full px-6 flex flex-col space-y-8'>
            <p className='text-3xl text-primary font-semibold mt-6  dark:text-white'>FAQS</p>
            <div>
              <p className='text-xl font-semibold text-primary dark:text-white'>Payment Methods</p>
              <p className='font-medium pt-2 dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-primary dark:text-white'>Cancellation Policy</p>
              <p className='font-medium pt-2 dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-primary dark:text-white'>Long Stays </p>
              <p className='font-medium pt-2 dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-primary dark:text-white'>Cancellation Policy</p>
              <p className='font-medium pt-2 dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-primary dark:text-white'>Cancellation Policy</p>
              <p className='font-medium pt-2 dark:text-white'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </div>
          </div>
        </div>
        <footer id='about_us' className='w-full h-auto bg-gray-200 p-6 space-y-2'>
          <p className='text-lg'>About Us</p>
          <p className='text-sm text-gray-500'>Investors</p>
          <p className='text-sm text-gray-500'>Jobs</p>
          <p className='text-sm text-gray-500'>Privacy policy</p>
          <p className='text-sm text-gray-500'>Terms and Conditions</p>
          <p className='text-sm text-gray-500'>Follow Us</p>
        </footer>
        <div className='w-full h-16 bg-white dark:bg-gray-800 sticky left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden' id="tab_bar">
          <a href="#home">
            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-current text-gray-300' d="M8.70704 0.293031C8.51951 0.105559 8.26521 0.000244141 8.00004 0.000244141C7.73488 0.000244141 7.48057 0.105559 7.29304 0.293031L0.293041 7.29303C0.110883 7.48163 0.0100885 7.73423 0.0123669 7.99643C0.0146453 8.25863 0.119814 8.50944 0.305222 8.69485C0.490631 8.88026 0.741443 8.98543 1.00364 8.9877C1.26584 8.98998 1.51844 8.88919 1.70704 8.70703L2.00004 8.41403V15C2.00004 15.2652 2.1054 15.5196 2.29293 15.7071C2.48047 15.8947 2.73482 16 3.00004 16H5.00004C5.26526 16 5.51961 15.8947 5.70715 15.7071C5.89468 15.5196 6.00004 15.2652 6.00004 15V13C6.00004 12.7348 6.1054 12.4805 6.29293 12.2929C6.48047 12.1054 6.73482 12 7.00004 12H9.00004C9.26526 12 9.51961 12.1054 9.70715 12.2929C9.89468 12.4805 10 12.7348 10 13V15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4805 15.8947 10.7348 16 11 16H13C13.2653 16 13.5196 15.8947 13.7071 15.7071C13.8947 15.5196 14 15.2652 14 15V8.41403L14.293 8.70703C14.4816 8.88919 14.7342 8.98998 14.9964 8.9877C15.2586 8.98543 15.5095 8.88026 15.6949 8.69485C15.8803 8.50944 15.9854 8.25863 15.9877 7.99643C15.99 7.73423 15.8892 7.48163 15.707 7.29303L8.70704 0.293031Z" fill="#3F3F46" />
            </svg>
          </a>
          <a href="#rentas_destacadas">
            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-current text-primary' fill-rule="evenodd" clip-rule="evenodd" d="M6 1.99997C4.93913 1.99997 3.92172 2.4214 3.17157 3.17155C2.42143 3.92169 2 4.93911 2 5.99997C2 7.06084 2.42143 8.07825 3.17157 8.8284C3.92172 9.57855 4.93913 9.99997 6 9.99997C7.06087 9.99997 8.07828 9.57855 8.82843 8.8284C9.57857 8.07825 10 7.06084 10 5.99997C10 4.93911 9.57857 3.92169 8.82843 3.17155C8.07828 2.4214 7.06087 1.99997 6 1.99997ZM1.13461e-07 5.99997C-0.00012039 5.05568 0.222642 4.12468 0.650171 3.28271C1.0777 2.44074 1.69792 1.71157 2.4604 1.1545C3.22287 0.597426 4.10606 0.228185 5.03815 0.0768059C5.97023 -0.0745733 6.92488 -0.00381595 7.82446 0.283323C8.72404 0.570462 9.54315 1.06587 10.2152 1.72927C10.8872 2.39266 11.3931 3.20531 11.6919 4.10111C11.9906 4.9969 12.0737 5.95056 11.9343 6.88452C11.795 7.81848 11.4372 8.70637 10.89 9.47597L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6948C15.5094 15.8802 15.2586 15.9854 14.9964 15.9876C14.7342 15.9899 14.4816 15.8891 14.293 15.707L9.477 10.891C8.57936 11.5293 7.52335 11.9081 6.42468 11.9861C5.326 12.0641 4.22707 11.8381 3.2483 11.3329C2.26953 10.8278 1.44869 10.063 0.875723 9.12232C0.30276 8.18165 -0.000214051 7.10141 1.13461e-07 5.99997Z" fill="#3F3F46" />
            </svg>
          </a>
          <a href="#recomendadas">
            <svg width="30" height="30" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-current text-gray-300' fill-rule="evenodd" clip-rule="evenodd" d="M1.172 2.17202C1.92211 1.42214 2.93934 1.00087 4 1.00087C5.06066 1.00087 6.07789 1.42214 6.828 2.17202L8 3.34302L9.172 2.17202C9.54099 1.78998 9.98237 1.48525 10.4704 1.27561C10.9584 1.06598 11.4833 0.955633 12.0144 0.951018C12.5455 0.946402 13.0722 1.04761 13.5638 1.24873C14.0554 1.44986 14.502 1.74687 14.8776 2.12244C15.2532 2.49801 15.5502 2.94462 15.7513 3.4362C15.9524 3.92779 16.0536 4.45451 16.049 4.98562C16.0444 5.51674 15.934 6.04162 15.7244 6.52964C15.5148 7.01765 15.21 7.45903 14.828 7.82802L8 14.657L1.172 7.82802C0.422116 7.07791 0.000854492 6.06068 0.000854492 5.00002C0.000854492 3.93936 0.422116 2.92213 1.172 2.17202Z" fill="#3F3F46" />
            </svg>
          </a>
          <button>
            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-current text-gray-300' d="M15.293 11.293C13.8115 11.9631 12.161 12.1658 10.5614 11.8742C8.96175 11.5826 7.48895 10.8105 6.33919 9.66079C5.18944 8.51104 4.41734 7.03824 4.12574 5.4386C3.83415 3.83897 4.03691 2.18846 4.70701 0.70697C3.52758 1.23998 2.49505 2.05117 1.69802 3.07093C0.900987 4.09069 0.363244 5.28859 0.130924 6.56186C-0.101395 7.83512 -0.0213565 9.14574 0.364174 10.3813C0.749705 11.6168 1.42922 12.7404 2.34442 13.6556C3.25961 14.5708 4.38318 15.2503 5.61871 15.6358C6.85424 16.0213 8.16486 16.1014 9.43813 15.8691C10.7114 15.6367 11.9093 15.099 12.9291 14.302C13.9488 13.5049 14.76 12.4724 15.293 11.293Z" fill="#3F3F46" />
            </svg>
          </button>
          <a href="">
            <svg width="30" height="30" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-current text-gray-300' fill-rule="evenodd" clip-rule="evenodd" d="M2.78225 17.6464C4.4799 15.2799 7.48651 13.4999 12.4999 13.4999C17.5132 13.4999 20.5199 15.2799 22.2175 17.6464C23.8582 19.9336 24.1196 22.5552 24.1248 24.0058C24.13 25.4645 22.9071 26.4166 21.6533 26.4166H3.34642C2.09262 26.4166 0.869709 25.4645 0.874956 24.0058C0.880174 22.5552 1.1415 19.9336 2.78225 17.6464Z" fill="#F2F2F2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10.9166C15.3535 10.9166 17.6667 8.60339 17.6667 5.74992C17.6667 2.89645 15.3535 0.583252 12.5 0.583252C9.64653 0.583252 7.33334 2.89645 7.33334 5.74992C7.33334 8.60339 9.64653 10.9166 12.5 10.9166Z" fill="#F2F2F2" />
            </svg>
          </a>
        </div>
      </section>
    </>

  )
}

export default App