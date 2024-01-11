import { Navigate } from 'react-router-dom';

// ==============================|| ROUTING RENDER ||============================== //
export default function Protected({ children }) {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children; // If logged in, render the children components
}
