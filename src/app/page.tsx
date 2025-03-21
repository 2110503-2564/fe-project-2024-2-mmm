import Image from "next/image";
import Banner from '@/components/Banner'
import ProductCard from '@/components/Card'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <ProductCard venueName='Room1' imgSrc='/img/room1.jpg'/>
        <ProductCard venueName='Room2' imgSrc='/img/room2.jpg'/>
        <ProductCard venueName='Room3' imgSrc='/img/room3.jpg'/>
      </div>
    </main>
  );
}