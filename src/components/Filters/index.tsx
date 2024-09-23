"use client";
import { Action } from "@/functions/reducer";
import styles from "./filters.module.css";

//TODO: Testes Unitarios

export default function Filters({
  categories,
  nameSearch,
  dispatch,
  category,
}: {
  nameSearch: string;
  category: string;
  categories?: Array<string>;
  dispatch: (action: Action) => void;
}) {
  return (
    <div className={styles.containerFilters}>
      <div className={styles.group}>
        <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          value={nameSearch}
          className={styles.textField}
          placeholder="Search"
          type="search"
          maxLength={255}
          onChange={(e) =>
            dispatch({ type: "SET_NAME_SEARCH", payload: e.target.value })
          }
        />
      </div>
      <div>
        <select
          value={category}
          className={styles.selectCategory}
          onChange={(e) =>
            dispatch({ type: "SET_CATEGORY", payload: e.target.value })
          }
        >
          <option value="">Categoria</option>
          {categories?.map((category, index) => (
            <option key={`${index}+${category}`} value={category}>
              {" "}
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className={styles.selectCategory}
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          Resetar Filtros
        </button>
      </div>
    </div>
  );
}
