"use client"
import { useState } from 'react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'; // Adjust the import path as per your project structure

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Email successfully submitted');
        setEmail('');
        setSubmitted(true);
      } else {
        setMessage('Failed to submit email');
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 30)"
        gradientBackgroundEnd="rgb(0, 0, 60)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="80%"
        blendingValue="hard-light"
        interactive={true}
        containerClassName="h-screen w-screen relative overflow-hidden top-0 left-0"
      >
        <header className="flex justify-center items-center py-6 px-10 relative z-10">
          <div className="text-2xl font-bold">LeaderLens</div>
        </header>

        <section className="flex flex-col items-center justify-center text-center py-40 relative z-10">
          <h1 className="text-5xl font-bold mb-4">Join now.</h1>
          <p className="text-xl mb-8 px-10 md:px-96 pt-6">
            Step into the world of successful business leaders through the eyes of a high schooler. LeaderLens brings you unique and inspiring interviews with CEOs, offering a fresh perspective on their journeys, challenges, and triumphs. Join us as we delve into the minds of these influential individuals and uncover the secrets to their success. Explore their stories, learn valuable lessons, and get motivated by the incredible paths they have taken.
          </p>
          <form className="flex flex-col items-center max-w-lg w-full px-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-4 px-4 py-3 rounded bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {submitted ? (
              <p className="px-8 py-3 my-4 bg-gray-700 text-white rounded">Check your email for updates</p>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 my-4 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition-colors duration-300"
              >
                Get more info
              </button>
            )}
          </form>
          {message && <p className="text-white mt-4">{message}</p>}
        </section>
      </BackgroundGradientAnimation>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Past Interviews</h2>
          <p className="text-xl text-center mb-12">
            Dive into the insights and stories of CEOs we&apos;ve interviewed. Discover their journeys, their wisdom, and what makes them tick.
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-white rounded-lg p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-white text-center text-3xl font-bold">More to come</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white border-opacity-25 my-12 mx-4" />

      <section className="py-20 pb-40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Published Newsletters</h2>
          <p className="text-xl text-center mb-12">
            Stay tuned for our latest newsletters packed with insights and updates.
          </p>
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg border-2 border-white rounded-lg p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-white text-center text-3xl font-bold">More to come</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-10 bg-gray-800 text-center">
        <p>&copy; 2024 LeaderLens. All rights reserved.</p>
      </footer>
    </main>
  );
}
