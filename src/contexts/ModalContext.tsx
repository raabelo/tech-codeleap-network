"use client";

import Modal from "@/components/molecules/Modal";
import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
    openModal: (options: {
        title: string;
        content?: ReactNode;
        submitButton: ReactNode;
        handleClose?: () => void;
    }) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modalOptions, setModalOptions] = useState<{
        title: string;
        content?: ReactNode;
        submitButton: ReactNode;
        handleClose?: () => void;
    } | null>(null);

    const openModal = (options: {
        title: string;
        content?: ReactNode;
        submitButton: ReactNode;
        handleClose?: () => void;
    }) => {
        setModalOptions(options);
    };

    const closeModal = () => {
        if (modalOptions?.handleClose) modalOptions.handleClose();
        setModalOptions(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {modalOptions && (
                <Modal
                    title={modalOptions.title}
                    content={modalOptions.content}
                    submitButton={modalOptions.submitButton}
                    handleClose={closeModal}
                />
            )}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within ModalProvider");
    return context;
}
