import React from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm">
                {title && <h3 className="text-lg font-bold mb-4">{title}</h3>}
                <div>{children}</div>
                <button
                    onClick={onClose}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}