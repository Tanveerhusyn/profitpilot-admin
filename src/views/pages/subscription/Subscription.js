// import React, { useEffect, useState } from 'react';

// import { CircularProgress as Spinner } from '@mui/material';

// import './subscription.css';
// const Subscription = () => {
//   const [packages, setPackages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMonthly, setIsMonthly] = useState(true);
//   const [selectedPackage, setSelectedPackage] = useState();
//   const [loadingStates, setLoadingStates] = useState({});
//   const [selectedValue, setSelectedValue] = React.useState(0);
//   console.log(loading, selectedPackage);
//   const handleChange = (event, newValue) => {
//     setSelectedValue(newValue);
//     setIsMonthly(!isMonthly);
//   };
//   const handlePayment = async (packageId) => {
//     console.log('packageId', packageId);
//   };
//   const handleButtonClick = (packageItem) => {
//     setLoadingStates((prevLoadingStates) => ({
//       ...prevLoadingStates,
//       [packageItem.id]: true
//     }));

//     setSelectedPackage(packageItem);
//     handlePayment(packageItem.id);

//     // Simulate a delay (you can remove this in your actual implementation)
//     setTimeout(() => {
//       setLoadingStates((prevLoadingStates) => ({
//         ...prevLoadingStates,
//         [packageItem.id]: false
//       }));
//     }, 2000);
//   };

//   useEffect(() => {
//     setLoading(false);

//     async function fetchData() {
//       const result = {
//         data: {
//           packages: [
//             {
//               subscriptionId: 1,
//               packageName: 'Basic',
//               packagePrice: '10',
//               packageCredits: 100,
//               packageTenure: 'Monthly',
//               isNewCustomer: true
//             },
//             {
//               subscriptionId: 2,
//               packageName: 'Standard',
//               packagePrice: '20',
//               packageCredits: 200,
//               packageTenure: 'Yearly',
//               isNewCustomer: false
//             },
//             {
//               subscriptionId: 3,
//               packageName: 'Premium',
//               packagePrice: '30',
//               packageCredits: 300,
//               packageTenure: 'Monthly',
//               isNewCustomer: false
//             }
//             // Add more packages if needed
//           ]
//         }
//       };

//       const currentSubscriptionId = 2; // Example of current subscription ID for button text logic

//       const refined = result.data.packages.map((data) => {
//         return {
//           id: data.subscriptionId,
//           type: data.packageName,
//           price: data.packagePrice,
//           credits: [
//             {
//               for: 'Free',
//               points: [
//                 { name: `${data.packageCredits} Credits`, isActive: true },
//                 { name: 'Search', isActive: true },
//                 { name: 'Chat', isActive: false },
//                 { name: 'Support', isActive: true },
//                 { name: 'Create Avatar', isActive: false },
//                 { name: 'Custom User Name', isActive: false }
//               ]
//             },
//             {
//               for: 'Basic',
//               points: [
//                 { name: `${data.packageCredits} Credits`, isActive: true },
//                 { name: 'Search', isActive: true },
//                 { name: 'Chat', isActive: true },
//                 { name: 'Support', isActive: true },
//                 { name: 'Create Avatar', isActive: true },
//                 { name: 'Custom User Name', isActive: false }
//               ]
//             },
//             {
//               for: 'Standard',
//               points: [
//                 { name: `${data.packageCredits} Credits`, isActive: true },
//                 { name: 'Search', isActive: true },
//                 { name: 'Chat', isActive: true },
//                 { name: 'Support', isActive: true },
//                 { name: 'Create Avatar', isActive: true },
//                 { name: 'Custom User Name', isActive: true }
//               ]
//             },
//             {
//               for: 'Professional',
//               points: [
//                 { name: `${data.packageCredits} Credits`, isActive: true },
//                 { name: 'Search', isActive: true },
//                 { name: 'Chat', isActive: true },
//                 { name: 'Support', isActive: true },
//                 { name: 'Create Avatar', isActive: true },
//                 { name: 'Custom User Name', isActive: true }
//               ]
//             }
//           ],
//           tenure: data.packageTenure,
//           buttonText: data.isNewCustomer ? 'Get Started' : data.subscriptionId < currentSubscriptionId ? 'Downgrade' : 'Upgrade'
//         };
//       });

//       setPackages(refined);
//       setSelectedPackage(null);
//       setLoading(false);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div
//       className="col-12 d-lg-flex flex-column align-items-center sub-container container mx-0"
//       style={{ marginBottom: '100px', minWidth: '100vw' }}
//     >
//       <div className="row position-relative">
//         <div className="col-12 d-flex flex-column justify-content-center align-items-center p-4">
//           <div className="options-sub col-12 d-flex">
//             {['Monthly', 'Yearly'].map((option, index) => (
//               <button
//                 key={index}
//                 style={{
//                   background: selectedValue === index && 'var(--Linear)',
//                   color: selectedValue === index && 'white',
//                   border: 'none'
//                 }}
//                 onClick={(e) => handleChange(e, index)}
//                 className={`option_btns-sub me-1 d-flex flex-wrap-wrap m-1 ${selectedValue === index ? 'selected' : ''}`}
//               >
//                 {option}
//                 {option === 'Yearly' && (
//                   <span
//                     className="mx-2"
//                     style={{
//                       color: selectedValue === index ? '#fff' : '#10B981'
//                     }}
//                   >
//                     (2 months free)
//                   </span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           gap: '5px'
//         }}
//         className="d-flex justify-content-center align-items-center package-row  flex-wrap-wrap"
//       >
//         {packages
//           .filter((item) => {
//             if (isMonthly) {
//               return item.tenure === 'Monthly';
//             } else {
//               return item.tenure === 'Yearly' || item.type === 'Free';
//             }
//           })
//           .map((packageItem) => {
//             return (
//               <div
//                 style={{
//                   maxWidth: '400px',
//                   maxHeight: '600px',
//                   padding: 0
//                 }}
//                 key={packageItem.id}
//                 className="d-flex justify-content-center align-items-center "
//               >
//                 <div
//                   style={{
//                     marginTop: '13px',
//                     marginBottom: '13px',
//                     backgroundColor: '#131D27',
//                     position: 'relative',
//                     minHeight: '420px',
//                     width: '100%'
//                   }}
//                   className="pay-card mx-2 d-flex flex-column justify-content-between align-items-start p-3 gap-2"
//                 >
//                   {packageItem.type === 'Standard' && (
//                     <svg
//                       style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: '37%'
//                       }}
//                       width="100"
//                       height="30"
//                       viewBox="0 0 65 18"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M0 0H65V13C65 15.7614 62.7614 18 60 18H5C2.23858 18 0 15.7614 0 13V0Z" fill="#10B981" />
//                       <path
//                         d="M15.61 8.12C15.61 8.47333 15.5267 8.80667 15.36 9.12C15.1933 9.43333 14.9267 9.69 14.56 9.89C14.1933 10.0833 13.7233 10.18 13.15 10.18H11.89V13H10.75V6.05H13.15C13.6833 6.05 14.1333 6.14333 14.5 6.33C14.8733 6.51 15.15 6.75667 15.33 7.07C15.5167 7.38333 15.61 7.73333 15.61 8.12ZM13.15 9.25C13.5833 9.25 13.9067 9.15333 14.12 8.96C14.3333 8.76 14.44 8.48 14.44 8.12C14.44 7.36 14.01 6.98 13.15 6.98H11.89V9.25H13.15ZM19.8673 13.07C19.2206 13.07 18.6239 12.92 18.0773 12.62C17.5373 12.3133 17.1073 11.89 16.7873 11.35C16.4739 10.8033 16.3173 10.19 16.3173 9.51C16.3173 8.83 16.4739 8.22 16.7873 7.68C17.1073 7.14 17.5373 6.72 18.0773 6.42C18.6239 6.11333 19.2206 5.96 19.8673 5.96C20.5206 5.96 21.1173 6.11333 21.6573 6.42C22.2039 6.72 22.6339 7.14 22.9473 7.68C23.2606 8.22 23.4173 8.83 23.4173 9.51C23.4173 10.19 23.2606 10.8033 22.9473 11.35C22.6339 11.89 22.2039 12.3133 21.6573 12.62C21.1173 12.92 20.5206 13.07 19.8673 13.07ZM19.8673 12.08C20.3273 12.08 20.7373 11.9767 21.0973 11.77C21.4573 11.5567 21.7373 11.2567 21.9373 10.87C22.1439 10.4767 22.2473 10.0233 22.2473 9.51C22.2473 8.99667 22.1439 8.54667 21.9373 8.16C21.7373 7.77333 21.4573 7.47667 21.0973 7.27C20.7373 7.06333 20.3273 6.96 19.8673 6.96C19.4073 6.96 18.9973 7.06333 18.6373 7.27C18.2773 7.47667 17.9939 7.77333 17.7873 8.16C17.5873 8.54667 17.4873 8.99667 17.4873 9.51C17.4873 10.0233 17.5873 10.4767 17.7873 10.87C17.9939 11.2567 18.2773 11.5567 18.6373 11.77C18.9973 11.9767 19.4073 12.08 19.8673 12.08ZM29.3991 8.12C29.3991 8.47333 29.3157 8.80667 29.1491 9.12C28.9824 9.43333 28.7157 9.69 28.3491 9.89C27.9824 10.0833 27.5124 10.18 26.9391 10.18H25.6791V13H24.5391V6.05H26.9391C27.4724 6.05 27.9224 6.14333 28.2891 6.33C28.6624 6.51 28.9391 6.75667 29.1191 7.07C29.3057 7.38333 29.3991 7.73333 29.3991 8.12ZM26.9391 9.25C27.3724 9.25 27.6957 9.15333 27.9091 8.96C28.1224 8.76 28.2291 8.48 28.2291 8.12C28.2291 7.36 27.7991 6.98 26.9391 6.98H25.6791V9.25H26.9391ZM31.6163 6.05V10.48C31.6163 11.0067 31.753 11.4033 32.0263 11.67C32.3063 11.9367 32.693 12.07 33.1863 12.07C33.6863 12.07 34.073 11.9367 34.3463 11.67C34.6263 11.4033 34.7663 11.0067 34.7663 10.48V6.05H35.9063V10.46C35.9063 11.0267 35.783 11.5067 35.5363 11.9C35.2897 12.2933 34.9597 12.5867 34.5463 12.78C34.133 12.9733 33.6763 13.07 33.1763 13.07C32.6763 13.07 32.2197 12.9733 31.8063 12.78C31.3997 12.5867 31.0763 12.2933 30.8363 11.9C30.5963 11.5067 30.4763 11.0267 30.4763 10.46V6.05H31.6163ZM38.5306 12.08H40.8806V13H37.3906V6.05H38.5306V12.08ZM46.024 11.58H43.114L42.614 13H41.424L43.914 6.04H45.234L47.724 13H46.524L46.024 11.58ZM45.704 10.65L44.574 7.42L43.434 10.65H45.704ZM52.4166 13L50.8166 10.22H49.9466V13H48.8066V6.05H51.2066C51.74 6.05 52.19 6.14333 52.5566 6.33C52.93 6.51667 53.2066 6.76667 53.3866 7.08C53.5733 7.39333 53.6666 7.74333 53.6666 8.13C53.6666 8.58333 53.5333 8.99667 53.2666 9.37C53.0066 9.73667 52.6033 9.98667 52.0566 10.12L53.7766 13H52.4166ZM49.9466 9.31H51.2066C51.6333 9.31 51.9533 9.20333 52.1666 8.99C52.3866 8.77667 52.4966 8.49 52.4966 8.13C52.4966 7.77 52.39 7.49 52.1766 7.29C51.9633 7.08333 51.64 6.98 51.2066 6.98H49.9466V9.31Z"
//                         fill="white"
//                       />
//                     </svg>
//                   )}
//                   <div className="w-100 d-flex flex-column justify-content-center align-items-start p-2">
//                     <div className="w-100 d-flex flex-wrap-wrap flex-column justify-content-between align-items-center divider-dev">
//                       <div className="d-flex flex-column justify-content-center align-items-center">
//                         <p className="card-main-text">{packageItem.type}</p>
//                         <p className="card-price-description">{isMonthly ? 'Billed Monthly' : 'Billed Yearly'}</p>
//                       </div>
//                       <p className="card-price-text">
//                         <span className="card-price-amount">${packageItem.price} </span>
//                         {isMonthly ? '/ Month' : '/ Year'}
//                       </p>
//                     </div>
//                     <div className="d-flex justify-content-center align-items-center gap-2">
//                       {packageItem.credits.map((credit, idx) => {
//                         return (
//                           <>
//                             {credit.for == packageItem.type && (
//                               <div key={idx} className="d-flex flex-column justify-content-start align-items-center">
//                                 {credit.points.map((point, idx) => {
//                                   return (
//                                     <div key={idx} className="d-flex w-100 justify-content-left gap-2 align-items-center">
//                                       {point.isActive ? (
//                                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                           <path
//                                             d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z"
//                                             fill="#10B981"
//                                           />
//                                         </svg>
//                                       ) : (
//                                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                           <path
//                                             d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
//                                             fill="#9B9996"
//                                           />
//                                         </svg>
//                                       )}
//                                       <p className="card-sub-text">{point.name}</p>
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             )}
//                           </>
//                         );
//                       })}
//                     </div>
//                   </div>
//                   <div className="w-100">
//                     <button
//                       className={`card-button${packageItem.id === 1 ? '-current' : ''}`}
//                       onClick={() => handleButtonClick(packageItem)}
//                       disabled={packageItem.id === 1 || loadingStates[packageItem.id] || packageItem.id === 1}
//                     >
//                       {loadingStates[packageItem.id] ? (
//                         <Spinner style={{ height: '25px', width: '25px' }} size="sm" animation="border" variant="light" />
//                       ) : packageItem.id === 1 ? (
//                         'Current plan'
//                       ) : (
//                         packageItem.buttonText
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Subscription;

import React from 'react';

function Subscription() {
  return <div>Subscription</div>;
}

export default Subscription;
