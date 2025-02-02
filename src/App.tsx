import React, { useState } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import About from './components/About';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        {showAnnouncement && (
          <div className="fixed w-full z-50 top-0 bg-primary/90 backdrop-blur-sm text-white py-3 px-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex-1" />
              <p className="text-center font-extrabold text-sm flex-grow">
                GET <span className="mx-2 text-black">15% OFF</span> WITH "REDME"{' '}
                <span className="mx-2 text-black">RAISE THE BOLD ENERGY</span> 🚀
              </p>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="flex-1 flex justify-end"
              >
                <X className="w-5 h-5 hover:rotate-90 transition-transform" />
              </button>
            </div>
          </div>
        )}

        <div className={showAnnouncement ? 'mt-12' : ''}>
          <Navbar />
        </div>
        
        <main className="flex-grow">
          <div className="relative">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ 
                backgroundImage: 'url("https://images.hdqwalls.com/wallpapers/lightning-storm-red-sky-5k-2d.jpg")',
                backgroundAttachment: 'fixed'
              }}
            />
            <div className="container mx-auto px-4 py-16 relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Premium Collection</span>
                </div>
                <h1 className="font-archivo text-6xl font-bold mb-4 tracking-tight text-primary hover:text-white transition-colors duration-300 ease-in-out">
                  ALTAIRA
                </h1>
                <p className="text-lg text-text-secondary">DRIP SO HIGH , IT’S IN ORBIT</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          <About />
        </main>

        <div className="relative border-t border-primary/10 py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ 
              backgroundImage: 'url("https://c.wallhere.com/photos/b2/46/Lust_Envy_Gluttony_Greed_homunculus-188931.jpg!d")',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Join the Digital Revolution</h3>
              <p className="text-text-secondary mb-6">Subscribe for exclusive drops and special offers</p>
              
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 text-white placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span className="font-bold">Join</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="relative border-t border-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ 
              backgroundImage: 'url("https://c.wallhere.com/photos/b2/46/Lust_Envy_Gluttony_Greed_homunculus-188931.jpg!d")',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="container mx-auto px-4 py-8 relative">
            <div className="text-center space-y-2">
              <div className="text-primary font-extrabold text-lg">
                © 2025 ALTAIRA®
              </div>
              <div className="text-primary/80 font-extrabold text-sm">
                All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;