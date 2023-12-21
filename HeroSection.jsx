import image from '../assets/christian-lambert-vmIWr0NnpCQ-unsplash.jpg'

export function HeroSection() {
  return (
    <div className="relative w-full pb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex text-white max-w-max items-center space-x-2 rounded-full bg-[#0B8185] p-1">
            <div className="rounded-full bg-[#7c2b10d0] p-1 px-2">
              <p className="text-sm font-medium">Luxurious&apos;</p>
            </div>
            <p className="text-sm font-medium">Find Your Hotel &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
            Discover amazing Hotels and Enjoy a <span className='text-[#0B8185] capitalize'>memorable stay</span>
          </h1>
          <p className="mt-8 text-lg">
          If you’ve been looking forward to planning a well-deserved vacation to your dream destination, then the perfect time has arrived.Hotel deals for 2023, NH Hotel Group is bringing you the perfect opportunity to book your accommodation for that trip you have been thinking about for so long.
Whether you’re planning next family vacation, a romantic getaway with your significant other, your next great solo adventure, or an approaching business trip, you won’t want to miss out on our hotel sales, available for our convenient NH hotels at many sought-after international destinations
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 rounded object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
