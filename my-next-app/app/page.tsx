import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Image
        src="https://www.maledivy-levne.cz/wp-content/uploads/2022/06/caste-dotazy-maledivy.png"
        alt="Image"
        width={300}
        height={200}
      />
    </div>
  );
}