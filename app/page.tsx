import HomeStructure from "@/page_structure/home";
import MenuStructure from "@/page_structure/menu";
import Product from "@/page_structure/product";

export default function Home() {
  return (
    <>
      {
        <section className="w-full h-full ">
          <Product/>
        </section>
      }
    </>
  );
}
