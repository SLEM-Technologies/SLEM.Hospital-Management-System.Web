
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Patients } from "../data/constant";



export default function BillingDetail() {
    const [step, setStep] = useState(1);
    const { id } = useParams();
    const selectedID = Number(id);
    const billingDetails = Patients;
    const [activeItem, setActiveItem] = useState<'insurance' | 'history' | 'outstanding' | null>('insurance');
  
    const handleInsuranceClick = () => {
      if (step > 1) {
        setStep(s => s - 1);
      }
      setActiveItem('insurance');
    };
  
    const handleHistoryClick = () => {
      if (step < 2) {
        setStep(s => s + 1);
      }
      setActiveItem('history');
    };
    const handleOutstandingClick = () => {
        if (step < 3) {
          setStep(s => s + 1);
        }
        setActiveItem('outstanding');
      };
  
    return (
      <div>
        {billingDetails.map((item, index) => {
          if (selectedID !== index) return null;
  
          return (
            <div className="w-full relative min-h-screen flex flex-col" key={index}>
                 <h1 className='font-bold text-center leading-tight tracking-wide text-xl mb-6'>Billing Information</h1>
              <div className="w-full md:w-[50%] flex flex-col md:flex-row  items-start md:items-center md:mx-auto">
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl  ${activeItem === 'insurance' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleInsuranceClick}
                  >
                    Insurance
                  </p>
                  <div className={`${activeItem === 'insurance' ? 'h-3 border-b-2 w-full border-primaryBlue' : 'border-b w-full h-3 border-gray-500'}`}></div>
                 
                </div>
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'history' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleHistoryClick}
                  >
                    History
                  </p>
                  <div className={`${activeItem === 'history' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
                </div>
                <div className="flex flex-col items-center w-full md:w-[50%]">
                  <p
                    className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'outstanding' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                    onClick={handleOutstandingClick}
                  >
                    Outstanding
                  </p>
                  <div className={`${activeItem === 'outstanding' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
                </div>
            
              </div>
       
              <div className="w-full md:w-[50%] mx-auto  mt-4">
                {activeItem === 'insurance' && <InsuranceDetail item={item} />}
                {activeItem === 'history' && <HistoryDetail item={item} />}
                {activeItem === 'outstanding' && <OutStandingDetail item={item} />}
                
              </div>
              
            </div>
            
          );
        })}
      </div>
    );
  }
  
  function InsuranceDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col'>
        <h2 className='font-bold text-primaryBlue leading-tight tracking-wide text-xl mb-2'>
          Insurance Details
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Provider: {item.insuranceProvider}.</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Policy Number: {item.issurancePolicyNumber}</p>
      </div>
    );
  }
  
  function HistoryDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col md:flex-row justify-between items-center bg-white p-4 border rounded-md space-y-4 md:space-y-0'>
        <p className='text-gray-400 font-bold  leading-tight tracking-wide'>{item.billingDate}</p>
        <p className='text-gray-500 text-xl font-bold leading-tight tracking-wide'>${item.billingAmount}</p>
        <p className='text-xl font-bold leading-tight text-green-500 tracking-wide'>{item.billingStatus}</p>
      </div>
    );
  }

  function OutStandingDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col md:flex-row justify-between items-center bg-white p-4 border rounded-md space-y-4'>
        <p className='text-gray-400 font-bold  leading-tight tracking-wide'>{item.outstandingBillsDate}</p>
        <p className='text-gray-500 text-xl font-bold  leading-tight tracking-wide'>${item.outstandingBillsAmount}</p>
        <p className='leading-tight text-red-600 tracking-wide'>{item.outstandingBillsStatus}</p>
        <button className='bg-primaryBlue px-2 rounded-md w-12 h-10 font-bold text-white'>Pay</button>
      </div>
    );
  }
