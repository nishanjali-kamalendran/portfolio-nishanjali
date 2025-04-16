import { useState, useEffect } from 'react';

export default function NetflixMemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  
  // Content category icons (representing Netflix genres/content)
  const cardIcons = ['🎬', '📺', '🍿', '👑', '🎭', '🔍', '🧟', '💀'];
  
  useEffect(() => {
    initializeGame();
  }, []);
  
  useEffect(() => {
    let timer;
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);
  
  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setGameOver(true);
    }
  }, [solved, cards]);
  
  const initializeGame = () => {
    // Create pairs of cards and shuffle them
    const initialCards = [...cardIcons, ...cardIcons]
      .map((icon, index) => ({ id: index, icon, flipped: false, solved: false }))
      .sort(() => Math.random() - 0.5);
    
    setCards(initialCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setMoves(0);
    setGameOver(false);
    setTimeElapsed(0);
    setGameStarted(false);
  };
  
  const handleCardClick = id => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    
    if (disabled) return;
    if (flipped.length === 0) {
      setFlipped([id]);
    } else if (flipped.length === 1) {
      if (flipped[0] === id) return; // Same card clicked twice
      
      setDisabled(true);
      setFlipped([...flipped, id]);
      setMoves(moves + 1);
      
      // Check if cards match
      const firstCard = cards.find(card => card.id === flipped[0]);
      const secondCard = cards.find(card => card.id === id);
      
      if (firstCard.icon === secondCard.icon) {
        setSolved([...solved, firstCard.id, secondCard.id]);
        setFlipped([]);
        setDisabled(false);
      } else {
        // If cards don't match, flip them back after a delay
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-black text-white">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">NETFL<span className="text-red-700">I</span>X MEMORY</h1>
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-xl font-medium">Episodes: {moves}</div>
          <div className="text-xl font-medium">Binge Time: {formatTime(timeElapsed)}</div>
        </div>
        
        <button 
          onClick={initializeGame}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium"
        >
          New Season
        </button>
      </div>
      
      {gameOver && (
        <div className="mb-6 p-4 bg-gray-900 border border-red-600 rounded-lg text-center w-full max-w-md">
          <h2 className="text-2xl font-bold text-red-600">Season Complete!</h2>
          <p className="mt-2">You binged through {moves} episodes in {formatTime(timeElapsed)}.</p>
          <p className="text-sm mt-2 text-gray-400">Rate this show? 👍 👎</p>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-4 max-w-md">
        {cards.map(card => (
          <div
            key={card.id}
            className={`aspect-square h-24 perspective-500 cursor-pointer ${solved.includes(card.id) || flipped.includes(card.id) ? 'rotate-y-180' : ''}`}
            onClick={() => !card.solved && !flipped.includes(card.id) && handleCardClick(card.id)}
          >
            <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${solved.includes(card.id) ? 'opacity-70' : ''}`}>
              {/* Card Back - Netflix themed */}
              <div className="absolute w-full h-full bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl transform rotate-y-0 backface-hidden border-2 border-red-800">
                N
              </div>
              
              {/* Card Front */}
              <div className="absolute w-full h-full bg-gray-900 rounded flex items-center justify-center text-4xl transform rotate-y-180 backface-hidden shadow-lg border border-gray-800">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-sm text-gray-400 text-center max-w-md">
        <p>Flip cards to find matching pairs. Complete the season by matching all content.</p>
        <p className="mt-2 text-xs">Recommended for you based on your viewing history.</p>
      </div>
    </div>
  );
}