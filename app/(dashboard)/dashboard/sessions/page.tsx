/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key, useEffect , useState} from "react";
import TerminalComponent from "./sessionId/page";


type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  

 
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <TerminalComponent />
      </div>
    </>
  );
}
