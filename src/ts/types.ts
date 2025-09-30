export interface Emoji {
  character: string;
  codePoint: string;
  group: string;
  slug: string;
  subGroup: string;
  unicodeName: string;
}

export interface Card extends Emoji {
  id: string;
  isFlipped: boolean;
  isMatched: boolean;
}
