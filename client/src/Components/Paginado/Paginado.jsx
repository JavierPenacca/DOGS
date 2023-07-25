import React from "react";
// import { Link } from "react-router-dom";

import styles from "./Paginado.module.css";

const Paginado = ({ dogsPerPage, allDogs, paginado }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(allDogs.length / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.paginado}>
          {pageNumbers.map((number) => (

            // <li key={number}>
            //   <Link to={`/paginado/${number}`} onClick={() => paginado(number)}>
            //     {number}
            //   </Link>
            // </li>

            // <a href="#" key={number} onClick={() => paginado(number)}>
            //   {number}
            // </a>

            <a key={number} onClick={() => paginado(number)}>
              {number}
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginado;
