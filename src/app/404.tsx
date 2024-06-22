import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000); // You can adjust the delay time as needed

    // Clear the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl mb-8">Redirecting to the home page...</p>
    </div>
  );
};

export default Custom404;
