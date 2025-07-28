import Image from "next/image"

const menuItems = [
  { title: "Avocado Toast", image: "/2.jpg" },
  { title: "Avocado Toast", image: "/3.jpg" },
  { title: "Avocado Toast", image: "/4.jpg" },
  { title: "Avocado Toast", image: "/2.jpg" },
  { title: "Avocado Toast", image: "/3.jpg" },
  { title: "Avocado Toast", image: "/4.jpg" },
  
 
]

export default function MenuPreview() {
  return (
    <section className="bg-[#f9f6f3] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
          We Serve
        </h2>
        <p className="text-[#444] max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed mb-16">
          It isn’t just coffee. We serve a variety of refreshments, snacks and delicacies
          to satisfy your taste buds and make sure you get the best experience with us.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square relative overflow-hidden rounded-sm shadow-lg group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="mt-5 text-lg md:text-xl font-light text-[#1a1a1a]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
