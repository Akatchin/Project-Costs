import Form from "./contact/form"
import styles from "../components/contact/contactForm.module.css"


function Contact() {
    return (
        <div  className={styles.contact_Center}>
            <Form/>
        </div>
    )
}

export default Contact