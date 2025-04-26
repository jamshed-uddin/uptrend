import { Button } from "@/components/ui/button";
import { CheckCheck, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="flex flex-col items-center">
        <CheckCircleIcon className="w-10 h-10 text-green-600" />
        <h1 className="text-xl font-medium">Order placed successfully</h1>
      </div>
      <div className="mt-5 flex gap-3">
        <Button>
          <Link href={"/"}>Continue shopping</Link>
        </Button>
        <Button>
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;
