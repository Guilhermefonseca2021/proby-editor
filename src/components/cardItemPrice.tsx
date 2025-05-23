
type CardItemPrice = {
    title: string,
    desc: string,
    price: number,
    cta: string,
}

export default function CardItemPrice({title, desc, price, cta}: CardItemPrice) {
  return (
    <div className="bg-gray-200 rounded-xl">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{desc}</p>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-black">
                ${price}
              </span>
              <span className="text-base font-medium text-gray-500"> /mo </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8">
        <a aria-describedby="tier-company" className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" href="#">
          {cta}
        </a>
      </div>
    </div>
  )
}
