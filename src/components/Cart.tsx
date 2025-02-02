import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PayPalCheckout from './PayPalCheckout';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePaymentSuccess = () => {
    console.log('Payment successful');
    onClose();
  };

  const handlePaymentError = (error: Error) => {
    console.error('Payment failed:', error);
    alert('Payment failed. Please try again.');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 transition-opacity"
      onClick={handleOverlayClick}
    >
      <div className="absolute right-0 top-0 h-full w-96 bg-background shadow-xl transform transition-transform duration-300">
        <div className="flex justify-between items-center p-6 border-b border-background-card">
          <h2 className="text-2xl font-bold text-white">Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-background-card rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-primary hover:text-primary-dark" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] text-text-secondary">
            <p className="mb-2">Your cart is empty</p>
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              Continue Shopping
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 p-6">
              {items.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between items-start bg-background-card p-4 rounded-lg">
                  <div>
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-text-secondary">Size: {item.size}</p>
                    <p className="font-bold mt-2 text-primary">₹{item.price} × {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-background rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-text-secondary hover:text-primary" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-background-card p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg text-white">Total:</span>
                <span className="font-bold text-lg text-primary">₹{cartTotal}</span>
              </div>
              <PayPalCheckout
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;