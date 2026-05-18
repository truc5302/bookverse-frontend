export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  content: string;
}


export interface BookDetail{
  id: string,
    title: string,
    author: string,
    year: number,
    content: string,
    reviews: Review[],
    images: BookImage[]
}

export interface BookImage{
  id: string;
  imageUrl: string;
}

export interface Review{
  id: string;
  reviewContent: string;
  reviewerName: string;
}
