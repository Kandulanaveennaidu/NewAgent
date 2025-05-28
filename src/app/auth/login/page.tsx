
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';
import { Mail, KeyRound, Settings2, User, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

// Simple SVG for Microsoft logo
const MicrosoftLogo = () => (
  <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0H0V10H10V0Z" fill="#F25022"/>
    <path d="M21 0H11V10H21V0Z" fill="#7FBA00"/>
    <path d="M10 11H0V21H10V11Z" fill="#00A4EF"/>
    <path d="M21 11H11V21H21V11Z" fill="#FFB900"/>
  </svg>
);

// Simple SVG for Google logo
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.37 10H12.25V14.25H18.04C17.74 15.64 16.93 16.81 15.81 17.56V20.19H19.32C21.42 18.28 22.56 15.53 22.56 12.25Z" fill="#4285F4"/>
    <path d="M12.25 23C15.29 23 17.87 22 19.32 20.19L15.81 17.56C14.81 18.25 13.62 18.67 12.25 18.67C9.88 18.67 7.8 17.14 7 14.9H3.38V17.62C4.88 20.63 8.29 23 12.25 23Z" fill="#34A853"/>
    <path d="M7 14.9C6.75 14.17 6.62 13.38 6.62 12.5C6.62 11.62 6.75 10.83 7 10.1V7.38H3.38C2.37 9.31 1.75 11.28 1.75 12.5C1.75 13.72 2.37 15.69 3.38 17.62L7 14.9Z" fill="#FBBC05"/>
    <path d="M12.25 6.33C13.74 6.33 15.03 6.89 16.06 7.84L19.41 4.5C17.41 2.67 15.05 1 12.25 1C8.29 1 4.88 3.37 3.38 7.38L7 10.1C7.8 7.86 9.88 6.33 12.25 6.33Z" fill="#EA4335"/>
  </svg>
);


export default function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Column - Decorative */}
      <div className="relative hidden md:flex flex-1 flex-col justify-between p-8 bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-100 dark:from-slate-800 dark:via-slate-900 dark:to-gray-900 text-foreground">
        {/* Top Text */}
        <div>
          <p className="text-sm text-primary">All in One</p>
          <h1 className="mt-2 text-4xl font-bold">AI Video Generator</h1>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg mb-2">All-in-One, AI Video Generator</p>
          <div className="flex items-center justify-center gap-2">
            <AppLogoIcon className="h-16 w-16" />
            <span className="text-5xl font-bold text-primary">AI Avatar Agent</span>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-xs text-muted-foreground">
          <p>
            Free Welcome Credit &bull; Easy to Use &bull; No Credit Card Required
          </p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex w-full items-center justify-center p-6 md:w-[480px] md:p-12 lg:p-16 bg-card shadow-2xl flex-shrink-0 relative">
        <div className="absolute top-4 left-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" aria-label="Back to Home">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <ThemeToggleButton />
        </div>

        <div className="w-full max-w-md space-y-6 mt-12"> {/* Added mt-12 to push content down from new top buttons */}
          <div className="flex flex-col items-center text-center">
            <AppLogoIcon className="h-10 w-10 mb-2" />
            <h2 className="text-lg font-semibold text-foreground">
              welcome to AI Avatar Agent.
            </h2>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start text-sm">
              <GoogleLogo />
              <span className="ml-3 flex-grow text-center">Continue with Google</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm">
              <MicrosoftLogo />
              <span className="ml-3 flex-grow text-center">Continue with Microsoft</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm">
              <Settings2 className="h-5 w-5 text-muted-foreground" />
              <span className="ml-3 flex-grow text-center">Continue with SAML SSO</span>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>
          
          <p className="text-center text-sm font-medium text-foreground">
            {isSignUpMode ? 'Create an account with Email' : 'Sign in with Email'}
          </p>

          <form className="space-y-4">
            {isSignUpMode && (
              <div>
                <Label htmlFor="fullname" className="sr-only">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="fullname" type="text" placeholder="Full Name" className="pl-10" required />
                </div>
              </div>
            )}
            <div>
              <Label htmlFor="email" className="sr-only">Your email address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="Your email address" className="pl-10" required />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">Password</Label>
               <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="Password" className="pl-10" required />
              </div>
            </div>
            {isSignUpMode && (
              <div>
                <Label htmlFor="confirm-password" className="sr-only">Confirm Password</Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="confirm-password" type="password" placeholder="Confirm Password" className="pl-10" required />
                </div>
              </div>
            )}
            {!isSignUpMode && (
              <div className="text-right">
                <Link
                  href="#"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              {isSignUpMode ? 'Create Account' : 'Continue with email'}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            {isSignUpMode ? 'Already have an account?' : 'New User?'}{' '}
            <a
              href="#"
              onClick={toggleMode}
              className="font-medium text-primary hover:underline cursor-pointer"
            >
              {isSignUpMode ? 'Sign in' : 'Create account'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

    