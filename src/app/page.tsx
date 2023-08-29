"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

interface ApiResponse {
  message: string;
}

interface SetupsApi {
  EMA4xMA8: string[];
  FOB: any[];
  FOD: any[];
  _timeframe: string;
  downtrend: string[];
  sideways: string[];
  timetaken: number;
  uptrend: string[];
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [setupsData, setSetupsData] = useState<SetupsApi | null>(null);

  useEffect(() => {
    axios.get("http://holy-lake-1350.fly.dev").then((response) => {
      setData(response.data);
    });
    axios.get("http://holy-lake-1350.fly.dev/setups/4h").then((response) => {
      setSetupsData(response.data);
    });
  }, []);

  const handleClick = () => {
    console.log("test");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center">
        <Card className="w-60 mx-4">
          <CardHeader className="text-center">Uptrend</CardHeader>
          <CardContent className="text-center">
            {setupsData?.uptrend.length}
          </CardContent>
        </Card>
        <Card className="w-60 mx-4">
          <CardHeader className="text-center">Sideways</CardHeader>
          <CardContent className="text-center">
            {setupsData?.sideways.length}
          </CardContent>
        </Card>
        <Card className="w-60 mx-4">
          <CardHeader className="text-center">Downtrend</CardHeader>
          <CardContent className="text-center">
            {setupsData?.downtrend.length}
          </CardContent>
        </Card>
      </div>
      <div className="w-3/4">
        <h1>UPTREND</h1>
        {setupsData &&
          setupsData.uptrend.map((symbol: string, index: number) => (
            <Badge key={symbol}>{symbol}</Badge>
          ))}
      </div>
      <div className="w-3/4">
        <h1>SIDEWAYS</h1>
        {setupsData &&
          setupsData.sideways.map((symbol: string, index: number) => (
            <Badge key={symbol}>{symbol}</Badge>
          ))}
      </div>
      <div className="w-3/4">
        <h1>DOWNTREND</h1>
        {setupsData &&
          setupsData.downtrend.map((symbol: string, index: number) => (
            <Badge key={symbol}>{symbol}</Badge>
          ))}
      </div>
    </div>
  );
}
