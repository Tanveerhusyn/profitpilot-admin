import React, { useState } from 'react';
import { Dialog, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

const pricingData = [
  {
    mainTitle: 'Freebie',
    infoNote: 'Ideal for individuals who need quick access to basic features.',
    isSelected: false,
    monthlyPrice: 2,
    yerlyPrice: 20,
    getIn: [
      {
        rightIcon: true,
        description: '20,000+ of PNG & SVG graphics'
      },
      {
        rightIcon: true,
        description: 'Access to 100 million stock images'
      },
      {
        rightIcon: false,
        description: 'Instant Access to our design system'
      },
      {
        rightIcon: false,
        description: 'Create teams to collaborate on designs'
      }
    ]
  },
  {
    mainTitle: 'Professional',
    monthlyPrice: 5,
    yerlyPrice: 50,
    infoNote: 'Ideal for individuals who need quick access to basic features.',
    isSelected: true,
    getIn: [
      {
        rightIcon: true,
        description: '20,000+ of PNG & SVG graphics'
      },
      {
        rightIcon: true,
        description: 'Access to 100 million stock images'
      },
      {
        rightIcon: false,
        description: 'Instant Access to our design system'
      },
      {
        rightIcon: false,
        description: 'Create teams to collaborate on designs'
      }
    ]
  },
  {
    mainTitle: 'Enterprise',
    infoNote: 'Ideal for individuals who need quick access to basic features.',
    isSelected: false,
    monthlyPrice: 10,
    yerlyPrice: 100,
    getIn: [
      {
        rightIcon: true,
        description: '20,000+ of PNG & SVG graphics'
      },
      {
        rightIcon: true,
        description: 'Access to 100 million stock images'
      },
      {
        rightIcon: false,
        description: 'Instant Access to our design system'
      },
      {
        rightIcon: false,
        description: 'Create teams to collaborate on designs'
      }
    ]
  }
];
const RightIcon = ({ fillColor }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect width="32" height="32" rx="16" fill="#E8EDFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
        fill={fillColor}
      />
    </svg>
  );
};
const CloseIcon = ({ fillColor }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="32" height="32" rx="16" fill="#F7F8F9" />
    <path
      d="M20.2421 20.2426C20.5025 19.9822 20.5025 19.5601 20.2421 19.2997L16.9428 16.0004L20.243 12.7001C20.5034 12.4397 20.5034 12.0176 20.243 11.7573C19.9827 11.4969 19.5606 11.4969 19.3002 11.7573L15.9999 15.0576L12.6997 11.7573C12.4393 11.4969 12.0172 11.4969 11.7568 11.7573C11.4965 12.0176 11.4965 12.4397 11.7568 12.7001L15.0571 16.0004L11.7578 19.2997C11.4974 19.5601 11.4974 19.9822 11.7578 20.2426C12.0181 20.5029 12.4402 20.5029 12.7006 20.2426L15.9999 16.9432L19.2993 20.2426C19.5597 20.5029 19.9818 20.5029 20.2421 20.2426Z"
      fill={fillColor}
    />
  </svg>
);

const Subscription = ({ open, handleClose }) => {
  const [monthPrice, setMonthPrice] = useState(true);
  return (
    <Dialog
      fullScreen
      maxWidth="lg"
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '98vw',
          minHeight: '98vh',
          background: 'whtie',
          position: 'relative',
          padding: '100px 10px'
        }
      }}
    >
      {/* heading section  */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-auto px-6 text-center justify-center text-2xl sm:text-3xl md:text-4xl h-full">
          <span className="font-medium">Our Pricing Plan</span>
          <span className="text-sm mt-4 text-[#F4CE24]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id
            repudiandae ea, deleniti laborum in neque eveniet.
          </span>
          <div className="text-base mt-8 md:mt-12 gap-4 flex items-center justify-center pl-5 mb-4">
            <span>Monthly </span>
            <div className="items-center flex">
              <label htmlFor="small-toggle" className="inline-flex relative cursor-pointer">
                <input type="checkbox" value="" onClick={() => setMonthPrice(!monthPrice)} id="small-toggle" className="sr-only peer" />
                <div className="w-9 h-5 flex-1 align-middle bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#FBBC00]"></div>
              </label>
            </div>
            <span>Yearly</span>
          </div>
        </div>

        {/* pricing section   */}
        <div className="flex flex-col lg:flex-row gap-6 h-full px-5 justify-center">
          {pricingData.map((data, index) => (
            <div
              className={`flex flex-col h-[fit-content] max-w-[300px] py-6 px-5 sm:px-10 lg:w-auto xl:w-[378px] rounded-xl shadow-md ${
                data?.isSelected ? `bg-[#061A2A] text-white` : 'bg-white text-black'
              }`}
              style={{
                border: '2px solid #F4CE24'
              }}
              key={index}
            >
              <div className="flex flex-col text-left">
                <div className="flex flex-col gap-3">
                  <span className="text-2xl">{data?.mainTitle}</span>
                  <span>{data?.infoNote}</span>
                </div>
                <div className="flex items-center gap-3 my-4">
                  <span className="text-6xl font-semibold">${monthPrice ? data?.monthlyPrice : data?.yerlyPrice}</span>
                  <span className="font-light">/&nbsp;&nbsp;{monthPrice ? 'Month' : 'Year'}</span>
                </div>
                <button className={`w-full border-[1px] rounded py-2.5 text-[#061A2A] ${data?.isSelected ? 'bg-white' : 'bg-[#F4CE24]'}`}>
                  Get Started Now
                </button>
                <div className="mt-10 space-y-3">
                  {data?.getIn?.map((description, index) => (
                    <div className="flex items-center gap-4 max-w-xs" key={index}>
                      <div className="w-8 h-8">
                        {description?.rightIcon ? <RightIcon fillColor={`#061A2A`} /> : <CloseIcon fillColor={`#061A2A`} />}
                      </div>
                      <span className="font-small text-base">{description?.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 0
        }}
      >
        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="fullscreen" sx={{ marginRight: 2 }}>
          <CloseOutlined />
        </IconButton>
      </div>
    </Dialog>
  );
};
export default Subscription;
