'use client';
import styles from './page.module.scss';

import { useEffect, useState } from 'react';

export default function Index() {
  const [status, setStatus] = useState('Verificando...');

  useEffect(() => {
    fetch('api/health')
      .then((response) => response.json())
      .then((data) => setStatus(data.status))
      .catch((error) => setStatus('Erro ao conectar com API'));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.header}>
              <h3 className={styles.subtitle}>Bem-vindo ao</h3>
              <h1 className={styles.title}>Vínculo App</h1>
            </div>
            <div>{status}</div>
            <div className={styles.actions}>
              <button className={styles.button}>Iniciar jornada</button>
              <button className={styles.buttonSecondary}>
                Já tenho uma conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
