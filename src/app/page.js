"use client"

import { reset } from '@/components/reiniciar'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <div className={styles.center}>
      <form id="formId" action="https://docs.google.com/forms/u/3/d/e/1FAIpQLScmCfYptBZk8VUjrXUk3qQ16TP-2-oHN6aT4DqeBzxxailBEw/formResponse" method="post">
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='name'>Nome</label>
          <input type='text' id='name' name='entry.184592984' className={styles.inputField} required/>  
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='email'>Email</label>
          <input type='text' id='email' name='entry.1775019266' className={styles.inputField} required/>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='subject'>Assunto</label>
          <input type='text' id='subject' name='entry.1874650118' className={styles.inputField} required/>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='message'>Mensagem</label>
          <textarea type='text-area' id='message' name='entry.1658217200' className={styles.inputFieldMessage} required/>
        </div>
        <button type='submit' className={styles.botaoForm} onClick={reset}>Enviar</button>
      </form>
    </div>
  )
} 
