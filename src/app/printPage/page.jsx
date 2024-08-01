"use client";
import HtmlToPdf from "@/utilities/HtmlToPdf";
import WebPageToPdf from "@/utilities/WebPageToPdf";
import React, { useState } from "react";

const PrintPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-16'>
      <HtmlToPdf />
    </div>
  );
};

export default PrintPage;
