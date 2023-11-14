import styles, { layout } from "../style";
import { Lagos } from "../constants";
import ScrollReveal from "scrollreveal";

ScrollReveal().reveal(".company", {
  origin: "top",
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});

const Logos = () => (
  <section id="features" className="min-h-custom py-6 flex justify-center">
    <div className="flex flex-row flex-wrap justify-center items-center w-[80%] mb-[150px] gap-4">
      {Lagos.map((logo) => (
        <img
          src={logo.src}
          alt={logo.title}
          className="company w-[200px] md:w-[250px] ss:w-[150px] mx-10"
        />
      ))}
      <p className="text-white font-[700] text-4xl ">Powered By ICP Blockchain</p>
    </div>
  </section>
);

export default Logos;
