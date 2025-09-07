import React, { useState } from 'react';
import { Shield, Zap, Crown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { MagicalButton } from '../ui/MagicalButton';
import { RuneSymbol } from '../ui/RuneSymbol';

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign-in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Mystical Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Portal Frame */}
        <div className="bg-gray-800/40 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 shadow-2xl">
          {/* Header with Animated Runes */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <Shield className="w-16 h-16 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              CHRONIX VAULT
            </h1>
            <p className="text-gray-300 mt-2 text-lg">
              Enter the Mystical FinTech Realm
            </p>
          </div>

          {/* Rune Decorations */}
          <div className="flex justify-center space-x-8 mb-8">
            <RuneSymbol symbol="ᚠ" className="text-cyan-400 animate-bounce" />
            <RuneSymbol symbol="ᚦ" className="text-purple-400 animate-bounce delay-300" />
            <RuneSymbol symbol="ᚨ" className="text-cyan-400 animate-bounce delay-700" />
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-300">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Cast Investment Spells</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Crown className="w-5 h-5 text-purple-400" />
              <span>Unlock Mystical Achievements</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Secure Vault Protection</span>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <MagicalButton
            onClick={handleGoogleSignIn}
            loading={isLoading}
            className="w-full py-4"
          >
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Enter with Google Magic</span>
            </div>
          </MagicalButton>

          {/* Mystical Footer */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>Protected by Ancient Norse Encryption</p>
            <div className="flex justify-center space-x-2 mt-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;