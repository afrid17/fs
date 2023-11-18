import HomeStructure from "@/page_structure/home";
import MenuStructure from "@/page_structure/menu";

export default function Home() {
  return (
    <>
      {
        <section className="w-full h-full ">
          <MenuStructure />
        </section>
      }
    </>
  );
}
