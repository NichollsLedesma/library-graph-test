export interface IAuthor {
    id:string;
    name: string;
}

export interface IBook {
    name: string;
    authorId: string;
    author: IAuthor;
  }