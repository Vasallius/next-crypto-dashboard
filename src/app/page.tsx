"use client";
import { Button } from "@/components/ui/button";
export default function Home() {
  const handleClick = () => {
    console.log("test");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
}
