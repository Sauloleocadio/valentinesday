import confetti from "canvas-confetti";
const typesEmoji = ["😍", "😻", "💋", "🥰", "🫶🏻", "🩷", "💜", "💞"];

export function confettiEmoji() {
  const scalar = 2;
  const indexEmoji = Math.floor(Math.random() * typesEmoji.length);

  const love = confetti.shapeFromText({
    text: typesEmoji[indexEmoji],
    scalar,
  });

  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [love],
    scalar,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
    });

    confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
    });

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
