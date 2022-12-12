import React from 'react'
import s from './auth.module.scss'

function Regster() {
  return (
    <div className="w-full h-full">
      <form className={s.auth_form}>
        <label className={s.inp_bar_label}>
          Enter your name
          <input type='text'></input>
        </label>
      </form>
    </div>
  )
}

export default Regster