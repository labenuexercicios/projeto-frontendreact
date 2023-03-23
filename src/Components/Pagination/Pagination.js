import { PaginationButton, Button } from "./PaginationStyle"


export default function PaginationQuantity({ totalPosts, postsPerPage, currentPage, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationButton>
      {pages.map((page, index) => {
        return <Button
        key={index} 
        onClick={() => setCurrentPage(page)}
        className={page === currentPage ? 'active' : ''}>{page}</Button>
      })
      }
    </PaginationButton>
  );
}
