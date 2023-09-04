"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { TimeframeButton } from "./../components/ui/timeframe-button";

interface SetupsApi {
  EMA4xMA8: string[];
  FOB: any[];
  FOD: any[];
  _timeframe: string;
  downtrend: string[];
  sideways_reversal: string[];
  sideways_consolidation: string[];
  timetaken: number;
  uptrend: string[];
  uptrend_retrace: string[];
  DE: string[];
}
const uri =
  "mongodb+srv://Jed:Mongodb7262@cluster0.pnai4cc.mongodb.net/?retryWrites=true&w=majority";

export default function Home() {
  const [setupsData, setSetupsData] = useState<SetupsApi | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get("https://holy-lake-1350.fly.dev/setups/4h").then((response) => {
      setSetupsData(response.data);
    });
  }, []);
  const handleClick = (timeframe: string, handleResponse: () => void) => {
    setIsLoading(true);
    if (timeframe == "1h") {
      axios
        .get("https://1h-vm.fly.dev/1h/results")
        .then((response) => {
          setSetupsData(response.data);
        })
        .catch((error) => {
          // Handle error if needed
        })
        .finally(() => {
          setIsLoading(false);
          handleResponse(); // Call the handleResponse callback
        });
    } else {
      axios
        .get(`https://holy-lake-1350.fly.dev/setups/${timeframe}`)
        .then((response) => {
          setSetupsData(response.data);
        })
        .catch((error) => {
          // Handle error if needed
        })
        .finally(() => {
          setIsLoading(false);
          handleResponse(); // Call the handleResponse callback
        });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl mt-4">Crypto Dashboard</h1>
        <div className="flex gap-2">
          <TimeframeButton handleClick={handleClick} timeframe="1m" />
          <TimeframeButton handleClick={handleClick} timeframe="5m" />
          <TimeframeButton handleClick={handleClick} timeframe="15m" />
          <TimeframeButton handleClick={handleClick} timeframe="1h" />
          <TimeframeButton handleClick={handleClick} timeframe="4h" />
          <TimeframeButton handleClick={handleClick} timeframe="1d" />
        </div>
        <div className="flex flex-wrap justify-center">
          <Card className="w-full sm:w-60 mx-4 my-2 sm:my-0">
            <CardHeader className="text-center">Uptrend</CardHeader>
            <CardContent className="text-center">
              {setupsData?.uptrend.length}
            </CardContent>
          </Card>
          <Card className="w-full sm:w-60 mx-4 my-2 sm:my-0">
            <CardHeader className="text-center">Uptrend-Retrace</CardHeader>
            <CardContent className="text-center">
              {setupsData?.uptrend_retrace.length}
            </CardContent>
          </Card>
          <Card className="w-full sm:w-60 mx-4 my-2 sm:my-0">
            <CardHeader className="text-center">Sideways-Reversal</CardHeader>
            <CardContent className="text-center">
              {setupsData?.sideways_reversal.length}
            </CardContent>
          </Card>
          <Card className="w-full sm:w-60 mx-4 my-2 sm:my-0">
            <CardHeader className="text-center">
              Sideways-Consolidation
            </CardHeader>
            <CardContent className="text-center">
              {setupsData?.sideways_consolidation.length}
            </CardContent>
          </Card>
          <Card className="w-full sm:w-60 mx-4 my-2 sm:my-0">
            <CardHeader className="text-center">Downtrend</CardHeader>
            <CardContent className="text-center">
              {setupsData?.downtrend.length}
            </CardContent>
          </Card>
        </div>

        <div className="w-3/4">
          <h1>FOD</h1>
          {setupsData?.FOD &&
            setupsData.FOD.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>FOB</h1>
          {setupsData?.FOD &&
            setupsData.FOB.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>DE</h1>
          {setupsData?.DE &&
            setupsData.DE.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>EMA4xMA8</h1>
          {setupsData?.EMA4xMA8 &&
            setupsData.EMA4xMA8.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>UPTREND</h1>
          {setupsData?.uptrend &&
            setupsData.uptrend.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>UPTREND-RETRACE</h1>
          {setupsData?.uptrend_retrace &&
            setupsData.uptrend_retrace.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
        <div className="w-3/4">
          <h1>SIDEWAYS-REVERSAL</h1>
          {setupsData?.sideways_reversal &&
            setupsData.sideways_reversal.map(
              (symbol: string, index: number) => (
                <Badge key={symbol}>{symbol}</Badge>
              )
            )}
        </div>
        <div className="w-3/4">
          <h1>SIDEWAYS-CONSOLIDATION</h1>
          {setupsData?.sideways_consolidation &&
            setupsData.sideways_consolidation.map(
              (symbol: string, index: number) => (
                <Badge key={symbol}>{symbol}</Badge>
              )
            )}
        </div>
        <div className="w-3/4">
          <h1>DOWNTREND</h1>
          {setupsData?.downtrend &&
            setupsData.downtrend.map((symbol: string, index: number) => (
              <Badge key={symbol}>{symbol}</Badge>
            ))}
        </div>
      </div>
    </>
  );
}
