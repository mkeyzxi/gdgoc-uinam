import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import type { MotionProps } from 'framer-motion';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      {...({
        className: "absolute cursor-grab",
        style: { x, y, rotateX, rotateY },
        drag: true,
        dragConstraints: { top: 0, right: 0, bottom: 0, left: 0 },
        dragElastic: 0.6,
        whileTap: { cursor: "grabbing" },
        onDragEnd: handleDragEnd,
      } as MotionProps)}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
  onReady?: () => void; // dipanggil ketika semua gambar sudah siap
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onReady
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format'
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format'
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format'
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format'
        }
      ]
  );

  const [loadedCount, setLoadedCount] = useState(0);

  // Ketika semua gambar sudah loaded, panggil onReady()
  useEffect(() => {
    if (cards.length > 0 && loadedCount >= cards.length) {
      onReady?.();
    }
  }, [loadedCount, cards.length, onReady]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              {...({
                className: "rounded-2xl overflow-hidden border-4 border-white",
                onClick: () => sendToBackOnClick && sendToBack(card.id),
                animate: {
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                },
                initial: false,
                transition: {
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                },
                style: {
                  width: cardDimensions.width,
                  height: cardDimensions.height,
                },
              } as MotionProps)}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                loading='lazy'
                className="w-full h-full object-cover pointer-events-none"
                onLoad={handleImageLoad} // ✅ panggil ketika gambar selesai dimuat
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
