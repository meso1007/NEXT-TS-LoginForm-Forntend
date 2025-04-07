// app/page.tsx
"use client"; // これを追加して Client Component として指定
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header title="Welcome to My Website" />
      <Hero/>
    </div>
  );
};

export default HomePage;
