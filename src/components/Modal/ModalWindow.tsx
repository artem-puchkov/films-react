import React from "react";

interface ModalProps {
    children: React.ReactNode
}

export function ModalWindow({ children }: ModalProps) {
    return (
        <div className="modal">
            <div className="modal-content">
                { children }
            </div>
        </div>
    );
}