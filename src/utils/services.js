import { environments } from './env.js';
import axios from 'axios';
const API_ENDPOINTS = {
  singup: `/auth/signup`,
  login: `/auth/login`,
  xeroauth: '/xero/auth',
  getApplications: '/applications',
  getCashFlow: '/cash-flow',
  profitloss: '/profit-loss',
  executiveSummary: '/executive-summary',
  chat: '/chat'
};

const headers = {
  'ngrok-skip-browser-warning': 69420
};

export const signup = async (fullname, email, password) => {
  let isSuccess = false;
  try {
    const apiPayload = {
      email: email,
      password: password,
      username: fullname
    };
    console.log(apiPayload);
    const result = await axios.post(`${environments.apiUrl}${API_ENDPOINTS.singup}`, apiPayload, { headers: headers });
    console.log(result.data);
    const data = result.data;
    if (data.status === 'success') {
      isSuccess = true;
    }
    console.log(data.message);
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return isSuccess;
};
export const xeroAuth = async () => {
  let isSuccess = true;
  try {
    await axios.get(`${environments.apiUrl}${API_ENDPOINTS.xeroauth}`, { headers: headers });
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return isSuccess;
};
export const login = async (email, password) => {
  let isSuccess = false;
  let data = {};
  try {
    const apiPayload = {
      email: email,
      password: password
    };
    console.log(apiPayload);
    const result = await axios.post(`${environments.apiUrl}${API_ENDPOINTS.login}`, apiPayload, { headers: headers });
    console.log(result.data);
    const response_data = result.data;
    if (response_data.status === 'success') {
      isSuccess = true;
      data = response_data;
    }
    console.log(response_data.message);
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};

export const getConnectedApplications = async () => {
  let isSuccess = false;
  let data = {};
  try {
    const result = await axios.get(`${environments.apiUrl}${API_ENDPOINTS.getApplications}`, { headers: headers });
    console.log('res', result.data);
    data = result.data;
    isSuccess = true;
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};
export const getCashFlowBarChartData = async () => {
  let isSuccess = false;
  let data = {};
  try {
    const result = await axios.get(`${environments.apiUrl}${API_ENDPOINTS.getCashFlow}`, { headers: headers });
    console.log('res', result.data);
    data = result.data;
    isSuccess = true;
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};
export const getProfitLossData = async () => {
  let isSuccess = false;
  let data = {};
  try {
    const result = await axios.get(`${environments.apiUrl}${API_ENDPOINTS.profitloss}`, { headers: headers });
    console.log('res', result.data);
    data = result.data;
    isSuccess = true;
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};
export const getExecutiveSummary = async () => {
  let isSuccess = false;
  let data = {};
  try {
    const result = await axios.get(`${environments.apiUrl}${API_ENDPOINTS.executiveSummary}`, { headers: headers });

    data = result.data;
    isSuccess = true;
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};
export const chat = async (message) => {
  let isSuccess = false;
  let data = {};
  try {
    const result = await axios.post(
      `${environments.apiUrl}${API_ENDPOINTS.chat}`,
      {
        message: message
      },
      { headers: headers }
    );
    console.log('res', result.data);
    data = result.data;
    isSuccess = true;
  } catch (error) {
    console.log(error.message);
    isSuccess = false;
  }

  return { isSuccess, data };
};

// export const updatePersonality = async (apiPayload) => {
//   let isSuccess = false;
//   let result;
//   let data;

//   try {
//     ({ data } = await axios.put(`${environments.apiUrl}${API_ENDPOINTS.deletePersonality}`, apiPayload));

//     if (data.responseCode === 2000) {
//       isSuccess = true;
//       result = data.response;
//     } else if (data.responseCode === 5000) {
//       isSuccess = false;
//       result = data.response;
//     }
//   } catch (error) {
//     console.error(error);
//     isSuccess = false;
//   } finally {
//     return {
//       isSuccess: isSuccess,
//       data: result
//     };
//   }
// };
