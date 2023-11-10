import { ICard } from "./ICard";

export interface IModal {
  character: ICard | null;
  isOpen: boolean;
  onClose: () => void;
}
