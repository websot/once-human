export interface Track {
  title: string;
  src: string;
  cover: string;
}

export const tracks: Track[] = [
  {
    title: 'Nalcott Wasteland (Ambient)',
    src: '/audio/track-1.wav',
    cover: '/img/track-1.jpg',
  },
  {
    title: 'Deviant Dreams',
    src: '/audio/track-2.wav',
    cover: '/img/track-2.jpg',
  },
  {
    title: 'Silent Storm',
    src: '/audio/track-3.wav',
    cover: '/img/track-3.jpg',
  },
];
