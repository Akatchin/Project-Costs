import styles from "./contactForm.module.css"

function ContactInput({type, text, id, name, placeholder, classe, handleOnChange, value, handleSubmit}) {
    
    return (
        <div className={styles.div_Form}>
            <label htmlFor={name}>{text}</label>
            <input 
                className={classe}
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}
                onClick={handleSubmit}
            />
        </div>
    )
}

export default ContactInput