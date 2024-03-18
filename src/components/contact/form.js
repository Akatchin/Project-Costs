import ContactInput from "./contactInput"
import { useEffect, useRef, useState } from "react"
import styles from "./contactForm.module.css"

function Form (e, handleSubmit) {
        const [form, setForm] = useState({
            name: '',
            email: '',
            telefone: '',
            id:''
        })

    const submit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/form", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-type': 'application/json'
            },
        }).then((res) => res.json())
            .catch((err) => console.log(err))
    }

 
    return (    
       
       <form className={styles.form} onSubmit={submit}>
            <ContactInput 
                classe={styles.input_Form}
                type="text"
                text="Nome"
                name="name"
                id={Math.random()}
                handleOnChange={(e) => 
                    setForm((prev) => ({...prev, name: e.target.value, id: e.target.id}))}
                placeholder="Digite seu nome"
                />
            <ContactInput 
                classe={styles.input_Form}
                type="email"
                text="Email"
                name="email"
                placeholder="Digite seu email"
                handleOnChange={(e) => 
                    setForm((prev) => ({...prev, email: e.target.value}))}
                value={form.email}
                />
            <ContactInput 
                classe={styles.input_Form}
                type="tel"
                text="Telefone"
                name="phone"
                handleOnChange={(e) => 
                    setForm((prev) => ({...prev, telefone: e.target.value}))}
                placeholder="Digite seu telefone para contato"
                
                />
            <ContactInput
                classe={styles.input_Button}
                 type="submit"
                 name="submit"
                 value="Enviar"
                handleSubmit={submit}
                 />
        </form>
      
    )
}

export default Form