// components/CoffeeTestimonials.jsx
import Image from "next/image";

const testimonials = [
  {
    name: "Marko",
    image: "/testimonial.jpg",
    text: "Kafić je prelep, sa opuštenom atmosferom i pažljivo biranom muzikom. Hrana je sveža i ukusna, ali vikendom zna biti gužva pa je najbolje doći ranije. Sve pohvale za domaći hleb i kvalitetne sastojke!",
  },
  {
    name: "Marija",
    image: "/testimonial.jpg",
    text: "Topla atmosfera i odličan doručak! Svako Dobro je pravo malo utočište u srcu Dorćola. Kafa je vrhunska, a doručak bogat i kreativan. Posebno preporučujem tost sa avokadom i poširanim jajima. Prava kombinacija za lagani početak dana!",
  },
  {
    name: "Julija",
    image: "/testimonial.jpg",
    text: "Uživala sam u svakoj sekundi provedenoj ovde. Kafa je aromatična i pripremljena s puno pažnje, a domaći kolači su pravi hit. Idealno mesto za miran predah od gradske vreve. Svaka preporuka!",
  },
  {
    name: "Anastasija",
    image: "/testimonial.jpg",
    text: "Ako volite dobar brunch, ovo je mesto za vas! Omleti su savršeno pripremljeni, a kolači su prava poslastica. Osoblje je ljubazno i profesionalno. Definitivno mesto kojem ću se vraćati!",
  },
  {
    name: "Petar",
    image: "/testimonial.jpg",
    text: "Kao veliki ljubitelj kafe, mogu reći da je ovde prave sa puno pažnje i kvaliteta. Espresso je savršen, a flat white je jedan od najboljih u gradu. Sjajno mesto za jutarnji ritual uz dobru knjigu.",
  },
];

export default function Testimonials() {
  const leftColumn = testimonials.slice(0, 2);
  const rightColumn = testimonials.slice(2);

  return (
    <section className="bg-[#e7e2de] min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl  font-medium text-gray-900 mb-6">
            Our Coffee Fans <br /> Speak!
          </h2>
          <div className="w-10 h-[2px] bg-[#a16a52]" />
          <div className="w-16 h-0.5 bg-brown-600" />
        </div>

        {/* Layout */}
        <div className="hidden lg:flex justify-around items-center max-w-5xl mx-auto">
          {[leftColumn, rightColumn].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col space-y-8 items-center">
              {column.map(({ name, image, text }, idx) => (
                <TestimonialCard
                  key={`${colIdx}-${idx}`}
                  name={name}
                  image={image}
                  text={text}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden grid grid-cols-1 gap-8">
          {testimonials.map(({ name, image, text }, idx) => (
            <TestimonialCard key={idx} name={name} image={image} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, image, text }) {
  return (
    <div className="bg-white p-6 flex flex-col justify-between lg:w-[480px] w-full">
      <p className="text-gray-800 mb-4">{text}</p>
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 relative mr-3">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
    </div>
  );
}
