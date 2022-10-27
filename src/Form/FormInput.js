import React from 'react'

export default function FormInput(props) {
  return (
    <div>
            <form onSubmit={props.OnSubmitForm}>
                <div>
                    <label>Full Name : </label>
                    <input type="text" placeholder='Full Name' onChange={props.HandleOnChange('fullname')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="text" placeholder='salary' onChange={props.HandleOnChange('salary')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
    </div>
  )
}
