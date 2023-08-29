"use client";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Button } from "./button";

type TimeframeButtonProps = {
  timeframe: string;
  handleClick: (timeframe: string, handleResponse: () => void) => void;
};

export function TimeframeButton({
  timeframe,
  handleClick,
}: TimeframeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClickInternal = () => {
    setIsLoading(true);
    handleClick(timeframe, handleResponse);
  };

  const handleResponse = () => {
    setIsLoading(false);
  };

  return (
    <Button onClick={handleClickInternal} disabled={isLoading}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <ClipLoader color="#ffffff" loading={isLoading} />
        </div>
      ) : (
        timeframe
      )}
    </Button>
  );
}
