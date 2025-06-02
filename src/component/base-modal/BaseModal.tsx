import React from "react";
import BaseIcon from "@/component/base-icon/index";

interface BaseModalProps {
    isShown: boolean;
    headerText?: string;
    bodyText?: string;
    children?: React.ReactNode;
}

export default function BaseModal({
    isShown,
    headerText = "Confirm",
    bodyText = "Are you sure ?",
    children,
}: BaseModalProps) {
    return (
        isShown && (
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto ">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all py-4 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center flex flex-col gap-4">
                                <div className="flex">
                                    <p className="text-lg font-medium leading-6 text-gray-900 mr-auto w-6">{headerText}</p>
                                    <BaseIcon name="delete" className="h-6 w-6 ml-auto" />
                                </div>
                                <p className="text-xl font-medium text-pink-600 text-center">{bodyText}</p>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 flex gap-8 justify-center">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}