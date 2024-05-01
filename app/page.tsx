import Link from "next/link";
export default function Home() {

  return (
    <div>
      <p>Página Home</p>
      <Link href={"/login"}>Página de login</Link>
    </div>
  );
}
