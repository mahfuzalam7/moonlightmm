import { useState, useEffect } from 'react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const [showLoveResponse, setShowLoveResponse] = useState(false);
  const [buttonsHidden, setButtonsHidden] = useState(false);

  useEffect(() => {
    // Falling petals animation
    const createFallingPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.top = '-50px';
      petal.textContent = '🌸';

      document.body.appendChild(petal);

      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 6000);
    };

    const petalInterval = setInterval(createFallingPetal, 3000);

    return () => {
      clearInterval(petalInterval);
    };
  }, []);

  const createHeartBurst = (x: number, y: number) => {
    const burstContainer = document.createElement('div');
    burstContainer.className = 'heart-burst';
    burstContainer.style.left = x + 'px';
    burstContainer.style.top = y + 'px';

    const hearts = ['💕', '💖', '💝', '💗', '💓'];

    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart-particle';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.transform = `rotate(${i * 45}deg) translateY(-20px)`;
      burstContainer.appendChild(heart);
    }

    document.body.appendChild(burstContainer);

    setTimeout(() => {
      if (document.body.contains(burstContainer)) {
        document.body.removeChild(burstContainer);
      }
    }, 2000);
  };

  const handleLoveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createHeartBurst(x, y);
    setShowLoveResponse(true);
    setButtonsHidden(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-warm-white">
      <title>For Mehwish, With All My Love</title>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Heart className="w-6 h-6 text-deep-rose" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-5 h-5 text-dusty-rose" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <Star className="w-7 h-7 text-deep-rose" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-15" style={{ animationDelay: '0.5s' }}>
          <Heart className="w-5 h-5 text-dusty-rose" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center professional-gradient overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-deep-rose rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-dusty-rose rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-soft-pink rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <img 
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Beautiful moon" 
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-deep-rose animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="font-quicksand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 tracking-wide">
            Dear Mehwish
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-rose-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 font-nunito font-medium leading-relaxed max-w-3xl mx-auto px-4">
            You are the gentle light that guides my heart through every season of life
          </p>
          <div className="flex justify-center space-x-4 opacity-60">
            <Heart className="w-6 h-6 text-deep-rose animate-pulse" />
            <Sparkles className="w-6 h-6 text-dusty-rose animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-6 h-6 text-deep-rose animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>

      {/* Poetry Section */}
      <section className="py-16 sm:py-24 md:py-32 elegant-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 tracking-wide">
                Words of the Heart
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-deep-rose mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-baby-pink backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-12 shadow-lg border border-rose-quartz/30 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-deep-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-rose/20 transition-colors">
                    <Heart className="w-6 h-6 text-deep-rose" />
                  </div>
                  <blockquote className="font-dancing text-lg sm:text-xl md:text-2xl text-charcoal font-medium leading-relaxed mb-4">
                    "In your eyes I found my home, in your smile my peace"
                  </blockquote>
                  <cite className="font-nunito text-sm text-charcoal font-medium not-italic">— Rumi</cite>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-cotton-candy backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-12 shadow-lg border border-mauve/30 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-dusty-rose/20 transition-colors">
                    <Star className="w-6 h-6 text-dusty-rose" />
                  </div>
                  <blockquote className="font-dancing text-base sm:text-lg md:text-xl text-charcoal font-medium leading-relaxed mb-4">
                    "I choose to love you in silence... For in silence I find no rejection. I choose to adore you from a distance... For distance shields me from pain."
                  </blockquote>
                  <cite className="font-nunito text-sm text-charcoal font-medium not-italic">— Rumi</cite>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-pearl backdrop-blur-sm rounded-lg p-12 shadow-lg border border-champagne/40 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-deep-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-deep-rose/20 transition-colors">
                    <Sparkles className="w-6 h-6 text-deep-rose" />
                  </div>
                  <blockquote className="font-dancing text-xl md:text-2xl text-charcoal leading-relaxed mb-4">
                    "Every heartbeat whispers your name, every breath carries my love"
                  </blockquote>
                  <cite className="font-nunito text-sm text-soft-gray not-italic">— Khalil Gibran</cite>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-powder-blue backdrop-blur-sm rounded-lg p-12 shadow-lg border border-mint/40 hover:shadow-xl transition-all duration-500 group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-dusty-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-dusty-rose/20 transition-colors">
                    <Heart className="w-6 h-6 text-dusty-rose" />
                  </div>
                  <blockquote className="font-dancing text-xl md:text-2xl text-charcoal leading-relaxed mb-4">
                    "If I could give you one gift, it would be to see yourself through my eyes"
                  </blockquote>
                  <cite className="font-nunito text-sm text-soft-gray not-italic">— Anonymous</cite>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Love Question Section */}
      <section className="py-32 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-quicksand text-4xl md:text-5xl font-light text-white mb-12 tracking-wide">
                A Question from My Heart
              </h2>
              <div className="w-24 h-0.5 bg-white/50 mx-auto mb-16"></div>
              <p className="font-dancing text-2xl md:text-3xl text-white/90 mb-16 leading-relaxed">
                Mehwish, would you share this beautiful journey of love with me?
              </p>
            </ScrollReveal>

            {!buttonsHidden && (
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
                <button 
                  onClick={handleLoveClick}
                  className="group bg-white/95 hover:bg-white text-charcoal font-quicksand font-medium text-xl px-16 py-5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/20"
                >
                  <span className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-deep-rose group-hover:scale-110 transition-transform" />
                    <span>Yes, Always</span>
                  </span>
                </button>
                <button 
                  onClick={handleLoveClick}
                  className="group bg-transparent hover:bg-white/10 text-white font-quicksand font-medium text-xl px-16 py-5 rounded-lg border-2 border-white/50 hover:border-white transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Of Course</span>
                  </span>
                </button>
              </div>
            )}

            {showLoveResponse && (
              <ScrollReveal>
                <div className="mt-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-dancing text-2xl md:text-3xl text-white leading-relaxed max-w-2xl mx-auto">
                    Your love is the most beautiful gift I could ever receive. Thank you for making my heart complete.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>





      {/* Beautiful Bouquet Section */}
      <section className="py-16 sm:py-24 md:py-32 sophisticated-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 tracking-wide">
                A Bouquet of Love for You
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-deep-rose mx-auto mb-4 sm:mb-6"></div>
              <p className="font-nunito text-base sm:text-lg text-charcoal font-medium max-w-2xl mx-auto px-4">
                Like beautiful flowers, my love for you blooms eternal and grows more beautiful with each passing day
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="bg-baby-pink backdrop-blur-sm rounded-lg p-12 sm:p-16 shadow-2xl border border-rose-quartz/30 text-center">
                {/* Decorative Flower SVG */}
                <div className="mb-8">
                  <svg className="w-32 h-32 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Flower petals */}
                    <g transform="translate(100,100)">
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(0)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(45)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(90)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(135)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(180)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(225)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(270)" />
                      <ellipse cx="0" cy="-30" rx="15" ry="25" fill="hsl(330, 60%, 75%)" opacity="0.8" transform="rotate(315)" />
                      {/* Center */}
                      <circle cx="0" cy="0" r="12" fill="hsl(45, 80%, 70%)" />
                    </g>
                    {/* Stem */}
                    <rect x="95" y="130" width="10" height="60" fill="hsl(120, 40%, 45%)" />
                    {/* Leaves */}
                    <ellipse cx="85" cy="150" rx="8" ry="15" fill="hsl(120, 50%, 50%)" transform="rotate(-30 85 150)" />
                    <ellipse cx="115" cy="160" rx="8" ry="15" fill="hsl(120, 50%, 50%)" transform="rotate(30 115 160)" />
                  </svg>
                </div>

                <h3 className="font-quicksand text-2xl sm:text-3xl font-medium text-charcoal mb-6">
                  For You, My Beloved Mehwish
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-4 text-charcoal">
                    <Heart className="w-5 h-5 text-deep-rose" />
                    <span className="font-nunito text-sm">Pure Love</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-charcoal">
                    <Sparkles className="w-5 h-5 text-dusty-rose" />
                    <span className="font-nunito text-sm">Eternal Devotion</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-charcoal">
                    <Star className="w-5 h-5 text-deep-rose" />
                    <span className="font-nunito text-sm">Endless Beauty</span>
                  </div>
                </div>

                <p className="font-dancing text-lg sm:text-xl md:text-2xl text-charcoal font-medium leading-relaxed mb-4">
                  "This bouquet represents all the love in my heart—each petal a memory, each bloom a promise of tomorrow"
                </p>
                <p className="font-nunito text-sm text-charcoal font-medium italic">— With all my love</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Poetry Section */}
      <section className="py-16 sm:py-24 md:py-32 elegant-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-quicksand text-2xl sm:text-3xl md:text-4xl font-light text-charcoal mb-4 sm:mb-6 tracking-wide">
                  Words That Speak My Heart
                </h2>
                <div className="w-12 sm:w-16 h-0.5 bg-deep-rose mx-auto"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-cotton-candy backdrop-blur-sm rounded-lg p-8 sm:p-12 md:p-16 shadow-2xl border border-mauve/30 relative">
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-deep-rose/20 text-4xl sm:text-6xl leading-none">"</div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-deep-rose/20 text-4xl sm:text-6xl leading-none">"</div>

                <div className="relative z-10">
                  <blockquote className="font-dancing text-lg sm:text-xl md:text-2xl text-charcoal font-medium leading-relaxed space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <p>"I choose to love you in silence…</p>
                    <p>For in silence I find no rejection.</p>
                    <p>I choose to love you in loneliness…</p>
                    <p>For in loneliness no one owns you but me.</p>
                    <p>I choose to adore you from a distance…</p>
                    <p>For distance shields me from pain.</p>
                    <p>I choose to kiss you in the wind…</p>
                    <p>For the wind is gentler than my lips.</p>
                    <p>I choose to hold you in my dreams…</p>
                    <p>For in my dreams, you have no end."</p>
                  </blockquote>

                  <div className="text-center pt-4 sm:pt-6 border-t border-gray-200">
                    <cite className="font-nunito text-sm text-charcoal font-medium not-italic">— Rumi</cite>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Heartfelt Letter Section */}
      <section className="py-32 sophisticated-gradient relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-pearl backdrop-blur-sm rounded-lg p-12 md:p-16 shadow-2xl border border-champagne/40">
                <div className="text-center mb-12">
                  <h2 className="font-quicksand text-3xl md:text-4xl font-light text-charcoal mb-6 tracking-wide">
                    From My Heart to Yours
                  </h2>
                  <div className="w-16 h-0.5 bg-deep-rose mx-auto"></div>
                </div>

                <div className="font-dancing text-xl md:text-2xl text-charcoal leading-relaxed space-y-8">
                  <p className="text-soft-gray">Dear Mehwish,</p>
                  <ScrollReveal>
                    <p>You are poetry written in the language of grace, a melody that my heart has been waiting to hear. Every morning brings the gift of knowing you exist in this world, and every evening ends with gratitude for the light you bring to my life.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={200}>
                    <p>Your presence transforms ordinary moments into memories worth treasuring. The way you see the world, with such kindness and wonder, reminds me of all the beauty I had forgotten to notice.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={400}>
                    <p>I never understood the true meaning of home until I found it in your smile, in the gentle way you listen, in the peace that surrounds you wherever you go.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={600}>
                    <p>This is not merely a confession of love, but a promise of devotion—to honor the precious gift of knowing you, to cherish every shared moment, and to love you with the depth and sincerity your beautiful heart deserves.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={800}>
                    <div className="text-center pt-8 border-t border-gray-200">
                      <p className="text-soft-gray mb-2">With endless love and respect,</p>
                      <p className="font-medium text-charcoal">Your devoted companion</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Admiration Section */}
      <section className="py-32 professional-gradient relative overflow-hidden">
        <div className="container mx-auto px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-quicksand text-4xl md:text-5xl font-light text-charcoal mb-6 tracking-wide">
                What Makes You Extraordinary
              </h2>
              <div className="w-16 h-0.5 bg-deep-rose mx-auto mb-6"></div>
              <p className="font-nunito text-lg text-soft-gray max-w-2xl mx-auto">
                The countless beautiful qualities that make my heart choose you, again and again
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="bg-pearl backdrop-blur-sm rounded-lg p-8 shadow-lg border border-champagne/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-deep-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-deep-rose/20 transition-colors">
                  <Heart className="w-8 h-8 text-deep-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-charcoal mb-3">Your Gentle Gaze</h3>
                <p className="font-nunito text-sm text-soft-gray">The way your eyes speak a language of kindness that my heart understands</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-powder-blue backdrop-blur-sm rounded-lg p-8 shadow-lg border border-mint/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-dusty-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dusty-rose/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-dusty-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-charcoal mb-3">Your Radiant Joy</h3>
                <p className="font-nunito text-sm text-soft-gray">The way your laughter fills empty spaces with warmth and light</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-pearl backdrop-blur-sm rounded-lg p-8 shadow-lg border border-champagne/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-deep-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-deep-rose/20 transition-colors">
                  <Star className="w-8 h-8 text-deep-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-charcoal mb-3">Your Beautiful Spirit</h3>
                <p className="font-nunito text-sm text-soft-gray">The rare combination of strength and gentleness that defines who you are</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="bg-powder-blue backdrop-blur-sm rounded-lg p-8 shadow-lg border border-mint/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-dusty-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dusty-rose/20 transition-colors">
                  <Heart className="w-8 h-8 text-dusty-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-charcoal mb-3">Your Elegant Presence</h3>
                <p className="font-nunito text-sm text-soft-gray">How you carry yourself with such natural grace and dignity</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="bg-pearl backdrop-blur-sm rounded-lg p-8 shadow-lg border border-champagne/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-deep-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-deep-rose/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-deep-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-gray-800 mb-3">Your Compassionate Heart</h3>
                <p className="font-nunito text-sm text-gray-600">The endless well of kindness that makes the world better</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <div className="bg-powder-blue backdrop-blur-sm rounded-lg p-8 shadow-lg border border-mint/40 hover:shadow-xl transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-dusty-rose/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-dusty-rose/20 transition-colors">
                  <Star className="w-8 h-8 text-dusty-rose" />
                </div>
                <h3 className="font-quicksand text-lg font-medium text-gray-800 mb-3">Your Melodic Voice</h3>
                <p className="font-nunito text-sm text-gray-600">Every word carries the music that my soul has been waiting to hear</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-32 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-12 animate-pulse">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-quicksand text-4xl md:text-5xl font-light text-white mb-8 tracking-wide">
                Forever Yours, Mehwish
              </h2>
              <div className="w-24 h-0.5 bg-white/50 mx-auto mb-12"></div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-dancing text-2xl md:text-3xl text-white/90 mb-16 leading-relaxed max-w-3xl mx-auto">
                This isn't an ending, but the beautiful beginning of a story written by two hearts that found their way to each other
              </p>
            </ScrollReveal>

            <div className="flex justify-center space-x-8 mb-16 opacity-60">
              <Heart className="w-6 h-6 text-white animate-pulse" />
              <Sparkles className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Star className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <ScrollReveal delay={400}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-3xl mx-auto">
                <blockquote className="font-dancing text-xl text-white/90 italic mb-4 leading-relaxed">
                  "In a world full of temporary things, you are a perpetual feeling."
                </blockquote>
                <cite className="font-nunito text-sm text-white/70 not-italic">— Sanober Khan</cite>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}