export interface ICard {
    id: string,
    title?: string,
    imageURL: string,
    imageFull?: string,
    description?: string,
    descriptionModal?: string,
    onPress?:() => void;
}