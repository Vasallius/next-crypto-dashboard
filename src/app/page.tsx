"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default function Home() {
  const handleClick = () => {
    console.log("test");
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-60 mx-4">
        <CardHeader className="text-center">Uptrend</CardHeader>
        <CardContent className="text-center">120</CardContent>
      </Card>
      <Card className="w-60 mx-4">
        <CardHeader className="text-center">Sideways</CardHeader>
        <CardContent className="text-center">120</CardContent>
      </Card>
      <Card className="w-60 mx-4">
        <CardHeader className="text-center">Downtrend</CardHeader>
        <CardContent className="text-center">120</CardContent>
      </Card>
    </div>
  );
}
