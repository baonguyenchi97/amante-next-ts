"use client"

import { useState } from "react";
import Modal from "./ModalTemplateKit";

export default function FigmaCodePlugin() {
    const [showModal, setShowModal] = useState(false)


    const handleKakaoPay = () => {
        setShowModal(true)
    }
  
  
    return (
        <div>
            <div className="w-72 h-12 px-4 bg-yellow-400 rounded-sm justify-center items-center gap-1 inline-flex cursor-pointer" onClick={handleKakaoPay}>
                <img className="w-14 h-5" src="/assets/images/kakaopay.png" />
                <div className="text-center text-black text-base font-normal font-['Inter']">구매하기</div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
  );
}