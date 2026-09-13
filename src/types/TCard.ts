export default interface ICardData {
  title: string;
  description: string;
  additional: string;
  link?: string;
  position?: number;
}

export interface ICardProps extends ICardData {
  handleClick: () => void;
  isOpened: boolean
}