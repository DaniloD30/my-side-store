import { Dispatch, SetStateAction, useMemo } from "react";
import styles from "./pagination.module.css";

type PaginationProps = {
  page: number;
  total: number;
  setPage: Dispatch<SetStateAction<number>>;
};
const Pagination = ({ page, total, setPage }: PaginationProps) => {
  const numPages = useMemo(() => {
    return Math.ceil(total / 10);
  }, [total]);

  const actualPage = (index: number) => page === index;

  return (
    <div className={styles.container}>
      <ul className={styles.page}>
        {page !== 1 && (
          <li
            className={styles.btn}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <span>{`<`}</span>
          </li>
        )}

        {[...Array(numPages)].map((_, index) => (
          <li
            key={index}
            className={`${
              actualPage(index + 1) ? styles.numberActive : styles.number
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </li>
        ))}

        {page !== numPages && (
          <li
            className={styles.btn}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <span>{`>`}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
