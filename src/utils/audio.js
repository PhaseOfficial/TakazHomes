const CLICK_SOUND_URL = 'https://www.soundjay.com/buttons_c2026/sounds/button-22.mp3';

let audio = null;

export const playClickSound = () => {
  try {
    if (!audio) {
      audio = new Audio(CLICK_SOUND_URL);
      audio.volume = 0.4; // Set a reasonable volume
    } else {
      audio.currentTime = 0;
    }
    audio.play().catch(err => {
      // Browsers often block audio until the first user interaction
      // We can ignore this as it's expected behavior
      console.debug('Audio play prevented', err);
    });
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export const setupGlobalClickSound = () => {
  const handleClick = (e) => {
    const target = e.target.closest('button, a, .cursor-pointer');
    if (target) {
      playClickSound();
    }
  };

  document.addEventListener('click', handleClick);
  return () => document.removeEventListener('click', handleClick);
};
