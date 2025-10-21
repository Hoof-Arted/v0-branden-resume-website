"use client"

import { useState, useEffect } from "react"
import { X, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function LinkedInBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has previously dismissed the banner
    const dismissed = localStorage.getItem("linkedin-banner-dismissed")
    if (!dismissed) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("linkedin-banner-dismissed", "true")
  }

  const handleConnect = () => {
    window.open("https://linkedin.com/in/brandenwachtel", "_blank")
    handleDismiss()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-3 pr-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Connect with me on LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Stay updated on the latest in AI innovations digital transformations, and reach out to discuss!
                </p>
                <Button onClick={handleConnect} size="sm" className="w-full">
                  Connect Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
