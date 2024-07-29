"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./styles.module.css";

const Nearby = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <h2 className='text-[22px] font-bold'>What&apos;s nearby?</h2>
      <div className='mt-5 border border-color8 pt-5 pl-5 rounded'>
        <div className='flex items-center gap-6 font-semibold'>
          <div
            className={`w-6 h-6 rounded-full border-2 ${styles.nearby_shadow}`}></div>
          <h3>Super OYO Prafula Devi Near Rajarhat Chowmatha</h3>
        </div>
        <div className='mt-3 flex gap-7 items-center mb-6'>
          <CiLocationOn className='text-2xl' />
          <input
            className='border border-color7 pl-4 pr-36  rounded py-2'
            type='text'
            placeholder='Find distance from a place'
          />
        </div>
        <div className=''>
          <div className=''>
            <Tabs>
              <TabList className='flex gap-6 border-b border-color8'>
                <Tab
                  className={`font-semibold cursor-pointer ${
                    activeTab === "tab1" &&
                    "!text-color10 !border-b-2 pb-1 !border-color10"
                  }`}
                  onClick={() => setActiveTab("tab1")}>
                  Places to visit
                </Tab>
                <Tab
                  className={`font-semibold cursor-pointer ${
                    activeTab === "tab2" &&
                    "!text-color10 !border-b-2 pb-1 !border-color10"
                  }`}
                  onClick={() => setActiveTab("tab2")}>
                  Restaurants
                </Tab>
                <Tab
                  className={`font-semibold cursor-pointer ${
                    activeTab === "tab3" &&
                    "!text-color10 !border-b-2 pb-1 !border-color10"
                  }`}
                  onClick={() => setActiveTab("tab3")}>
                  Transportation
                </Tab>
              </TabList>

              <div className='flex gap-5'>
                <div className='lg:w-[45%]'>
                  <TabPanel className='mt-3'>
                    <ul className='space-y-2'>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          The Majestic Suites
                        </p>
                        <p className='text-sm text-color6'>2.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          The Orient City Center 2 Chinar Park NewTown
                        </p>
                        <p className='text-sm text-color6'>3.9kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Golden Heaven Hotel & Restaurant
                        </p>
                        <p className='text-sm text-color6'>5.8kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Netaji Subhash Chandra Bose International Airport
                        </p>
                        <p className='text-sm text-color6'>5.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>Teghoria</p>
                        <p className='text-sm text-color6'>5.7kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Tata Medical Centre
                        </p>
                        <p className='text-sm text-color6'>5.8kms</p>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel className='mt-3'>
                    <ul className='space-y-2'>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          The Majestic Suites
                        </p>
                        <p className='text-sm text-color6'>2.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          The Orient City Center 2 Chinar Park NewTown
                        </p>
                        <p className='text-sm text-color6'>3.9kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Golden Heaven Hotel & Restaurant
                        </p>
                        <p className='text-sm text-color6'>5.8kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          California Restaurent Cum Bar
                        </p>
                        <p className='text-sm text-color6'>6.6kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>Sher E Punjab</p>
                        <p className='text-sm text-color6'>6.9kms</p>
                      </li>
                    </ul>
                  </TabPanel>
                  <TabPanel className='mt-3'>
                    <ul className='space-y-2'>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Netaji Subhash Chandra Bose International Airport
                        </p>
                        <p className='text-sm text-color6'>5.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>Teghoria</p>
                        <p className='text-sm text-color6'>5.7kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Tata Medical Centre
                        </p>
                        <p className='text-sm text-color6'>5.8kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Netaji Subhash Chandra Bose International Airport
                        </p>
                        <p className='text-sm text-color6'>5.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Dum Dum Airport 1 No. Gate
                        </p>
                        <p className='text-sm text-color6'>6.0kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Shree Balaji Computers
                        </p>
                        <p className='text-sm text-color6'>5.9kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>
                          Madhyamgram Chowrasta
                        </p>
                        <p className='text-sm text-color6'>7.4kms</p>
                      </li>
                      <li className='flex gap-5 justify-between items-center'>
                        <p className='font-medium text-sm'>Durganagar</p>
                        <p className='text-sm text-color6'>7.4kms</p>
                      </li>
                    </ul>
                  </TabPanel>
                </div>
                <div className='lg:w-[55%]'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.516092394622!2d90.3627763!3d23.8066807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709b35123df%3A0x6b77ed6f8ff908b5!2sSuper%20OYO%20Prafula%20Devi%20Near%20Rajarhat%20Chowmatha!5e0!3m2!1sen!2sbd!4v1659270734142!5m2!1sen!2sbd'
                    width='100%'
                    height={300}
                    allowFullScreen=''
                    loading='lazy'
                    className='border-0'></iframe>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nearby;
