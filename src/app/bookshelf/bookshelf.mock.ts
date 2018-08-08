import { IBookShelfSection } from './bookshelf.interface';
export const data: IBookShelfSection[] = [
    {
        name: 'Đọc nhiều nhất',
        books: [
            {
                title: 'Angular Cơ Bản'
            }
        ],
        filters: ['Tất cả', 'Kỹ thuật', 'Cơ bản']
    },
    {
        name: 'Miễn phí HOT',
        books: [
            {
                title: 'Angular Cơ Bản'
            },
            {
                title: 'Angular Cơ Bản'
            },
            {
                title: 'Angular Cơ Bản'
            }
        ],
        filters: ['Tất cả', 'Kỹ thuật', 'Cơ bản']
    }
];
