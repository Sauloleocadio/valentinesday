import { useCallback, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { imagesLink } from "./mocks/imagesLink";
import { romanticProgrammingMessages } from "./mocks/romanticProgrammingMessages";
import music from "./sounds/music.mp3";
import { confettiEmoji } from "./utils/confetti";

export function useApp() {
  const [startMessage, setStartMessage] = useState(false);
  const [message, setMessage] = useState(romanticProgrammingMessages[0]);
  const intervalRef = useRef(null);
  const [infinitePlayed, setInfinitePlayed] = useState(false);
  const [play] = useSound(music, {
    onend: () => {
      console.info("Sound ended!");
      setInfinitePlayed(true);
    },
    onloadstart: () => {
      setInfinitePlayed(false);
    },
  });

  const romanticMessages = useCallback(() => {
    const indexMessage = Math.floor(
      Math.random() * romanticProgrammingMessages.length
    );
    return romanticProgrammingMessages[indexMessage];
  }, []);

  const generatePathImage = useCallback(() => {
    const indexImage = Math.floor(Math.random() * imagesLink.length);
    return imagesLink[indexImage];
  }, []);

  useEffect(() => {
    if (startMessage) {
      confettiEmoji();
      intervalRef.current = setInterval(() => {
        setMessage(romanticMessages());
        confettiEmoji();
      }, 7000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [startMessage, romanticMessages, play]);

  useEffect(() => {
    if (infinitePlayed) {
      play();
    }
  }, [infinitePlayed, play]);

  return {
    message,
    setStartMessage,
    startMessage,
    generatePathImage,
    play,
  };
}
