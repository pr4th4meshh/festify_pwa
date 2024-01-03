import { useState, useEffect } from 'react';

const Success = () => {
  // Simulating loading state with a timeout
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading after 2 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Clear timeout on unmount (cleanup)
    return () => clearTimeout(timeout);
  }, []);

  // If loading is true, render the loading indicator
  if (loading) {
    return (
     <div className='h-full bg-red-500' >Successss..</div>
    );
  }

  // Once loading is done, return the main content or next screen
  return <>
  </>
};


export default Success;
