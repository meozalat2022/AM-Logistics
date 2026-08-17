"use client";
import { motion, AnimatePresence } from "framer-motion";

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
              
              {/* Icon */}
              <div className="mb-4 text-5xl">✅</div>

              <h3 className="mb-2 text-2xl font-bold">{title}</h3>
              <p className="mb-6 text-gray-600">{message}</p>

              <button
                onClick={onClose}
                className="rounded-md bg-blue-900 px-6 py-3 text-white hover:bg-orange-500 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
