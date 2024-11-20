import React, { useState, useRef } from "react";

type Card = {
  id: string;
  content: React.ReactNode; // Allows each card to have different content
};

const DraggableCards = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      content: (
        <h3>
          Card 1: <span>Special Text</span>
        </h3>
      ),
    },
    {
      id: "2",
      content: <img src="https://via.placeholder.com/100" alt="Placeholder" />,
    },
    { id: "3", content: <p>Card 3: A simple paragraph with more text.</p> },
    {
      id: "4",
      content: <button onClick={() => alert("Clicked!")}>Card 4 Button</button>,
    },
  ]);

  const draggedItem = useRef<number | null>(null);

  const handleDragStart = (index: number) => {
    draggedItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    const draggedIndex = draggedItem.current;
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(draggedIndex, 1);
    updatedCards.splice(index, 0, movedCard);

    draggedItem.current = index;
    setCards(updatedCards);
  };

  const handleDragEnd = () => {
    draggedItem.current = null;
  };

  return (
    <div className="flex p-6 h-80">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="border-8 border-gray-300 border-solid"
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            cursor: "grab",
            transition: "transform 0.2s ease, background-color 0.2s ease",
            ...(draggedItem.current === index && {
              backgroundColor: "#e0e0e0",
              transform: "scale(1.05)",
            }),
          }}
        >
          {card.content}
        </div>
      ))}
    </div>
  );
};

export default DraggableCards;
