export interface IBookShelfSection {
    name: string;
    filters: string[];
    books: IBook[];
}

export interface IBook {
    title: string;
    cover?: string;
    detail?: string;
    author?: string;
}
