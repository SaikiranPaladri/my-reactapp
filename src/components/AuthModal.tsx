// AuthModal.tsx

import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  const [error, setError] = useState<string | null>(null);

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in:', user);
      onClose(); // Close the modal after successful login
    } catch (error) {
      console.error(error);
      setError('Error signing in with Google. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      {/* Google Sign-In Button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Sign in with Gmail
      </button>

      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
