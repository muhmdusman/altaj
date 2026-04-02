'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

const DISMISS_STORAGE_KEY = 'pwa-install-dismissed';
const DISMISS_FOR_DAYS = 7;

function wasDismissedRecently(): boolean {
  const dismissedAt = localStorage.getItem(DISMISS_STORAGE_KEY);
  if (!dismissedAt) {
    return false;
  }

  const dismissedTime = Number.parseInt(dismissedAt, 10);
  if (Number.isNaN(dismissedTime)) {
    return false;
  }

  const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
  return daysSinceDismissed < DISMISS_FOR_DAYS;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [dismissedRecently, setDismissedRecently] = useState(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        })
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream;
    setIsIOS(iOS);

    // Check if already installed
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as NavigatorWithStandalone).standalone === true;
    setIsStandalone(standalone);

    const dismissed = wasDismissedRecently();
    setDismissedRecently(dismissed);

    // iOS does not emit beforeinstallprompt, so show manual install card.
    if (iOS && !standalone && !dismissed) {
      setShowInstallPrompt(true);
    }

  }, []);

  useEffect(() => {
    // Listen for beforeinstallprompt event (Chrome, Edge, Samsung)
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      if (!dismissedRecently && !isStandalone) {
        setShowInstallPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      setShowIOSHelp(false);
      setIsStandalone(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [dismissedRecently, isStandalone]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSHelp((current) => !current);
      }
      return;
    }

    // Show install prompt
    await deferredPrompt.prompt();

    // Wait for user response
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);

    if (outcome === 'accepted') {
      setShowInstallPrompt(false);
    }

    // Clear the prompt
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setShowIOSHelp(false);
    setDismissedRecently(true);
    // Store dismissal in localStorage to not show again for a while
    localStorage.setItem(DISMISS_STORAGE_KEY, Date.now().toString());
  };

  const canPromptInstall = Boolean(deferredPrompt);
  const shouldRenderPrompt =
    showInstallPrompt &&
    !isStandalone &&
    !dismissedRecently &&
    (canPromptInstall || isIOS);

  // Don't show if standalone mode
  if (!shouldRenderPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-lg shadow-2xl z-50 animate-slide-up">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-white hover:text-gray-200"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="flex items-start gap-3 pr-6">
        <Image src="/icon-192x192.png" alt="Al Taj" width={48} height={48} className="rounded-lg" />
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Install Al Taj App</h3>
          <p className="text-sm text-white/90 mb-3">
            Get quick access and enjoy an app-like experience!
          </p>

          <button
            onClick={handleInstallClick}
            className="bg-white text-amber-700 px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors w-full"
          >
            {canPromptInstall ? 'Install Now' : 'How To Install'}
          </button>

          {isIOS && !canPromptInstall && showIOSHelp && (
            <p className="text-xs text-white/85 mt-2">
              Tap the share button, then choose &quot;Add to Home Screen&quot;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
