import { useMemo } from "react";
import styles from "./pagination.module.css";
import { Action } from "@/functions/reducer";

type PaginationProps = {
  page: number;
  total: number;
  dispatch: (action: Action) => void;
};
const Pagination = ({ page, total, dispatch }: PaginationProps) => {
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
            onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
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
            onClick={() => dispatch({ type: "SET_PAGE", payload: index + 1 })}
          >
            {index + 1}
          </li>
        ))}

        {page !== numPages && (
          <li
            className={styles.btn}
            onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
          >
            <span>{`>`}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
