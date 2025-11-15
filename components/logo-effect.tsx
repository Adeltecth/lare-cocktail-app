"use client";

export default function LogoEffect() {
  const logos = [
    "/sponsor/s1.png",
    "/sponsor/s3.png",
    "/sponsor/s2.png",
    "/sponsor/s1.png",
    "/sponsor/s2.png",
    "/sponsor/s4.png",
  ];

  return (
    <section className="relative  -mb-6 py-4 overflow-hidden border-0">
        

      {/* Scrolling sponsor logos */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {logos.concat(logos).map((img, idx) => (
            <img
              key={idx}
              src={img}
              sizes="100"
              alt={`Sponsor Logo ${idx}`}
              className="h-10 w-auto mx-4 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
