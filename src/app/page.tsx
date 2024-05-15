import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {

  const getFromAPI = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      // Gestione della risposta
      console.log(response.data);
    } catch (error) {
      // Gestione degli errori
      console.error('Errore nella richiesta:', error);
    }
  }


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={() => (getFromAPI())}>CLICCA</button>
      </div>
    </main>
  );
}
