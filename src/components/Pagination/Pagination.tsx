import Pagination from "@mui/material/Pagination";
import { ChangeEvent } from "react";

interface PaginationProps {
  onPageChange: (page: number) => void;
}

export default function PagesPagination({ onPageChange }: PaginationProps) {
  const handleChangePage = (_: ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Pagination
      count={400}
      color="primary"
      onChange={handleChangePage}
      sx={{
        position: "absolute",
        bottom: 40,
        right: 310,
      }}
    />
  );
}
