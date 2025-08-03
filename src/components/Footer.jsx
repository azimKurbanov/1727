import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Black from '../assets/Black.svg';


const slidesData = [
  {
    id: 1,
    title: "Методы и формулы расчета торговой наценки",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Ассортимент продуктового ассортимента",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Что такое сезонность продаж",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Анализ конкурентов в бизнесе",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Стратегии увеличения прибыли",
    image: "https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
  },
];




function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < slidesData.length - 3 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    setTouchStart(null); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 mb-[50px]">
            <div className='flex gap-150 justify-center mt-[20px] '>
            <p className='text-[25px] text-black font-medium'>База знаний </p>
            <button className='w-[122px] h-[32px] rounded-2xl bg-green-500 text-white'>База знаний </button>
        </div>
        

        <div className="relative">
          
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide >= slidesData.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swiper Container */}
          <div className="overflow-hidden mx-12" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.3333}%)` }}
            >
              {slidesData.map((slide) => (
                <div key={slide.id} className="w-1/3 flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-3 text-sm leading-tight">
                        {slide.title}
                      </h3>
                      <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors">
                        Читать статью
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(slidesData.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentSlide / 3) === index ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
       
      </div>
      <img className='mt-[110px]' src={Black} alt={Black}/>
    </div>
     
    
  );
  
}

 


export default App;