"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "./printStyle.module.css";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Modal from "react-modal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./pdfStyle.css";
import OYOBanner from "../../../public/assets/OYO-banner.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1080px",
    padding: "0px",
  },
};

const PrintPage = () => {
  const contentRef = useRef();
  const [pdfUrl, setPdfUrl] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [expend, setExpend] = useState(false);
  const [expend2, setExpend2] = useState(false);

  function afterOpenModal() {
    // subtitle.style.color = "#f00";
  }

  const handlePrint = () => {
    const content = contentRef.current;

    html2canvas(content, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      const pdfBlob = pdf.output("blob");

      const pdfUrl = URL.createObjectURL(pdfBlob);
      setIsOpen(true);
      setPdfUrl(pdfUrl);
    });
  };

  return (
    <div className='max-w-screen-xl mx-auto pt-16'>
      <div className='p-2 m-2'>
        <h2 className='text-[#1ab64f] text-[28px] font-extrabold'>
          Great! Your stay is confirmed.
        </h2>
        <p className='text-base text-[#222] font-semibold'>
          You will soon receive an email confirmation on rocky@dey.com
        </p>
        <button
          onClick={() => {
            setExpend(true);
            handlePrint();
          }}
          className='mt-8 text-base font-bold border-2 border-[#222] rounded-sm px-16 py-2'>
          Print
        </button>
      </div>
      <div className={`${styles.print_div}`}>
        <div ref={contentRef} className='pt-[26px] px-[32px]'>
          <div className='text-[#222] flex justify-between'>
            <div>
              <h3 className='text-2xl font-bold mb-3'>Booking Id</h3>
              <h4 className='text-2xl'>TM9Z3861</h4>
            </div>
            <div>
              <p className='text-sm'>Booked by Cold on Thu, 1 Aug 2024</p>
            </div>
          </div>
          <div className='border border-[#d6d6d6] my-6'></div>
          <div className='flex'>
            <div className='flex-1 max-w-[75%] text-[#222]'>
              <h3 className='text-lg font-bold'>
                Collection O Pixel Avenue near Embassy Tech Village
              </h3>
              <h3 className='text-lg font-bold mt-10'>
                Townhouse Pixel Avenue Near Embassy Tech Park
              </h3>
              <p className='text-sm mt-2'>
                No 1, Bhoganahalli,Survey 128/6, Near Flipkart, Varth Hobli,
                Bangalore
              </p>
              <div className='mt-10 text-sm font-bold'>
                <span>Hotel Direction</span>
              </div>
              <div className='mt-10 text-sm font-bold'>
                <span>Landmark:</span>
              </div>
            </div>
            <div className='flex-1 max-w-[25%]'>
              <Image
                width={400}
                height={400}
                className='w-fit '
                src='https://i.ibb.co/hx6dnbj/room5img1.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='border border-[#d6d6d6] my-6'></div>
          <div className='flex'>
            <div className='flex-1 max-w-[75%] text-[#222] grid grid-cols-3 gap-5'>
              <div>
                <p className='text-sm'>Primary Guest</p>
                <h5 className='mt-1 text-base font-semibold'>Cold</h5>
              </div>
              <div>
                <p className='text-sm'>Check In</p>
                <h5 className='mt-1 text-base font-semibold'>2024-08-01</h5>
              </div>
              <div>
                <p className='text-sm'>Check In Time</p>
                <h5 className='mt-1 text-base font-semibold'>12:00 PM</h5>
              </div>
              <div>
                <p className='text-sm'>Mobile Number</p>
                <h5 className='mt-1 text-base font-semibold'>7543074253</h5>
              </div>
              <div>
                <p className='text-sm'>Check Out</p>
                <h5 className='mt-1 text-base font-semibold'>2024-08-02</h5>
              </div>
              <div>
                <p className='text-sm'>Check Out Time</p>
                <h5 className='mt-1 text-base font-semibold'>11:00 AM</h5>
              </div>
              <div>
                <p className='text-sm'>Email Address</p>
                <h5 className='mt-1 text-base font-semibold'>rocky@dey.com</h5>
              </div>
            </div>
            <div className='flex-1 max-w-[25%] text-[#222] space-y-5'>
              <div>
                <h3 className='text-[32px] font-semibold'>1 Night</h3>
              </div>
              <div className='text-sm flex'>
                <div className='max-w-[50%] flex-auto'>
                  <p>1 Guest</p>
                </div>
                <div className='max-w-[50%]'>
                  <p>1 Room</p>
                  <h5 className='text-base font-semibold'>Classic</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-[#d6d6d6] my-6'></div>
          <div className='text-[#222]'>
            <div>
              <h3 className='text-lg font-bold mb-6'>Payment Details</h3>
            </div>
            <div className=''>
              <div
                onClick={() => {
                  setExpend(!expend);
                  setExpend2(false);
                }}
                className='cursor-pointer border border-color8 px-4 py-[10px] flex items-center justify-between'>
                <div>
                  <p className='text-base'>Total payable amount</p>
                </div>
                <div className='flex items-center gap-3'>
                  <h5 className='text-base font-bold'>₹1670</h5>
                  {expend ? (
                    <IoIosArrowUp className='text-sm' />
                  ) : (
                    <IoIosArrowDown className='text-sm' />
                  )}
                </div>
              </div>
              {expend && (
                <div>
                  <div className='border-l border-r border-color8 px-4 py-[10px] flex items-center justify-between'>
                    <div>
                      <p className='text-sm'>Room charges for</p>
                    </div>
                    <div>
                      <p className='text-sm'>1 Room x 1 Night</p>
                    </div>
                    <div>
                      <h5 className='text-base font-bold'>₹3340</h5>
                    </div>
                  </div>
                  <div
                    onClick={() => setExpend2(!expend2)}
                    className={`border cursor-pointer border-color8 px-4 py-[10px] ${
                      expend2 && "space-y-5"
                    }`}>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <p className='text-sm'>Discounts</p>
                        {expend2 ? (
                          <IoIosArrowUp className='text-sm' />
                        ) : (
                          <IoIosArrowDown className='text-sm' />
                        )}
                      </div>
                      <div>
                        <h5 className='text-base font-bold'>-₹1670</h5>
                      </div>
                    </div>
                    {expend2 && (
                      <div className='flex items-center justify-between text-[#00000080]'>
                        <div>
                          <p className='text-sm'>Coupon: OYOFESTIVE50</p>
                        </div>
                        <div>
                          <h5 className='text-base font-bold'>-₹1670</h5>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='text-[#222] border-l border-r border-b border-color8 px-4 py-[10px] flex items-center justify-between'>
                    <div>
                      <p className='text-base font-bold'>
                        Total payable amount
                      </p>
                    </div>
                    <div>
                      <h5 className='text-[32px] font-bold'>₹1670</h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='pb-[26px] px-[32px]'>
          <div className='pt-4 pb-8 text-[#222]'>
            <div className='px-4 flex items-center'>
              <div className='max-w-[60%] flex-1'>
                <p className='text-sm leading-7'>
                  Your payment option is Pay At Hotel. You will receive a call
                  from us closer to the check-in date to confirm your arrival.
                  In case of no response, the booking may be cancelled. Pay
                  ₹1670 online now for a smoother check-in experience.
                </p>
              </div>
              <div className='max-w-[40%] flex-1'>
                <button className='flex items-center gap-1 justify-center rounded bg-[#1ab64f] text-color4 py-[10px] w-full text-center max-w-[60%] mx-auto'>
                  <span className='text-base font-semibold'>Pay Now</span>
                  <IoIosArrowDown className='text-xs' />
                </button>
              </div>
            </div>
          </div>
          <div className='m-4'>
            <Image
              src={OYOBanner}
              alt=''
              width={500}
              height={200}
              className='w-full h-full rounded-md cursor-pointer'
            />
          </div>
          <div className='flex pt-[18px] text-[#222]'>
            <div className='flex-1 max-w-[50%]'>
              <h4 className='text-lg font-bold'>Things to Know</h4>
            </div>
            <div className='flex-1 max-w-[50%] p-5'>
              <p className='text-sm font-bold'>
                Something not right?{" "}
                <span className='text-[#ee2a24] text-base cursor-pointer'>
                  Chat with us
                </span>{" "}
                for help.
              </p>
              <p className='text-base font-semibold text-[#ee2a24] mt-2 cursor-pointer'>
                Cancel Booking
              </p>
              <p className='text-base font-semibold text-[#ee2a24] mt-4 cursor-pointer'>
                Read OYO&apos;s Terms and Condition
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        {pdfUrl && (
          <div>
            <iframe src={pdfUrl} width='100%' height='700px' />
            <div className='bg-[#525659] flex justify-end gap-5 px-[150px] py-2'>
              <a
                className='px-8 font-medium py-2 border-none rounded-3xl text-[#047db7] bg-[#a8c7fa]'
                href={pdfUrl}
                download='webpage.pdf'>
                Print
              </a>
              <button
                className='border font-medium cursor-pointer border-[#047db7] text-[#a8c7fa] px-5 py-2 rounded-full'
                onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PrintPage;
