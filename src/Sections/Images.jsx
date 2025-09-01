const imgData = [
  "../src/imgs/p1.jpg",
  "../src/imgs/p2.jpg",
  "../src/imgs/p3.jpg",
  "../src/imgs/p4.jpg",
  "../src/imgs/p5.jpg",
];

// /Users/sahilsaini/Desktop/Official Portfolio/src/Imgs/p1.jpg

export default function Images() {
  return (
    <section className="my-18 py-2 *:even:rotate-3 flex justify-center items-center gap-6 *:aspect-[calc(4/5)] overflow-hidden">
      {imgData.map((img) => {
        return (
          <img
            src={img}
            alt={img}
            className="w-1/3 object-cover rounded-xl rotate-[-3deg]"
          />
        );
      })}
    </section>
  );
}
