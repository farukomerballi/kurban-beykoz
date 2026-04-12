'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({ 
  phone, 
  message = "Merhaba, kurban hakkında bilgi almak istiyorum.",
  className = "",
  children
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${className}`}
    >
      <MessageCircle size={20} />
      {children || "WhatsApp'tan Yaz"}
    </button>
  );
}

export function FloatingWhatsAppButton({ phone }: { phone: string }) {
  const handleClick = () => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      aria-label="WhatsApp'tan ulaş"
    >
      <MessageCircle size={28} />
    </button>
  );
}
