export default function StackingSections() {
  const cards = [
    {
      title: "Chemical Manufacturing",
      text: "High-quality chemical manufacturing solutions.",
    },
    {
      title: "Chemical Logistics",
      text: "Reliable chemical storage and logistics.",
    },
    {
      title: "Laboratory Services",
      text: "Professional testing and analytical services.",
    },
    {
      title: "Technical Support",
      text: "Expert support for your chemical requirements.",
    },
  ];

  return (
    <section className="bg-black">
      {cards.map((card, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen flex items-center justify-center p-6"
        >
          <div className="w-full max-w-6xl h-[70vh] rounded-[3rem] bg-white p-10 md:p-20 shadow-2xl">
            <span className="text-sm text-red-600 font-bold">
              0{index + 1}
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-bold text-black">
              {card.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-500">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}