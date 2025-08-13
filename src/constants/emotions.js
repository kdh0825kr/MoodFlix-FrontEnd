import { BsEmojiSmile, BsEmojiFrown, BsEmojiSunglasses } from 'react-icons/bs';
import { GiPeaceDove } from 'react-icons/gi';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

export const emotions = [
  { id: 'happy', icon: BsEmojiSmile, text: '행복해요', color: '#FFD700' },
  { id: 'sad', icon: BsEmojiFrown, text: '슬퍼요', color: '#87CEEB' },
  { id: 'excited', icon: BsEmojiSunglasses, text: '신나요', color: '#FF6B6B' },
  { id: 'peaceful', icon: GiPeaceDove, text: '평온해요', color: '#98FB98' },
  { id: 'romantic', icon: FaHeart, text: '로맨틱해요', color: '#FF69B4' },
  { id: 'anxious', icon: FaHeartBroken, text: '불안해요', color: '#DDA0DD' }
];
