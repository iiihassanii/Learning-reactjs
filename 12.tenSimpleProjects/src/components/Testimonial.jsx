import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Absolutely amazing service! The visual identity created was spot on and truly elevated our brand.",
      author: "Alice Johnson, Tech Solutions Inc.",
    },
    {
      quote:
        "The website development exceeded our expectations. Fast, responsive, and beautifully designed!",
      author: "Michael Smith, Smith & Co.",
    },
    {
      quote:
        "The automated WhatsApp chat saved us hours of customer service work. Highly recommended!",
      author: "Samantha Lee, Ecom Trends",
    },
    {
      quote:
        "Great experience with outsource management! Helped us streamline our processes effectively.",
      author: "David Brown, LogiTech Solutions",
    },
    {
      quote:
        "The professional product visualization brought our designs to life! Couldn't be happier.",
      author: "Emma Wilson, Wilson Fashion",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-dvh w-full flex flex-col justify-center items-center bg-zinc-200">
      <div className=" p-10 bg-white drop-shadow-2xl shadow-black rounded-xl">
        <div className="text-center font-serif text-zinc-400">
          {testimonials[currentIndex].quote}
        </div>
        <div className="font-bold">-{testimonials[currentIndex].author}</div>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 rounded-xl text-white cursor-pointer mt-8"
          >
            prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 rounded-xl text-white cursor-pointer mt-8"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
