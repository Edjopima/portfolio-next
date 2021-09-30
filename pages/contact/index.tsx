import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import github from '../../public/images/github.svg'
import twitter from '../../public/images/twitter.svg'
import linkedin from '../../public/images/linkedin.svg'
import instagram from '../../public/images/instagram.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stagger } from '../../animations/stagger';
import { fadeInUp } from '../../animations/fadeInUp';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject,setSubject] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [messageStatus, setMessageStatus] = useState('SEND');
  const [error, setError] = useState('');

  function validateEmail(email:string) {
    const re:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendMessage = () => {
    if ( !email || !message || !name || !subject ) {
      setError('Please fill in all fields');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email');
    }
    else {
      setButtonDisabled(true);
      setMessageStatus('SENDING');
      fetch('https://portfolio-server-nodemailer.herokuapp.com/sendMail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            email,
            subject,
            message
        })
        })
        .then(response => response.json())
        .then(data=>setMessageStatus('SENT'))
        .catch(error => setError('Error sending message'));
    }
  }
  const clearInputs = () => {
    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
    setMessageStatus('SEND');
    setButtonDisabled(false);
    setError('');
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      className={styles.contactMe}
    >
      <motion.div 
        className={styles.contactMe}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,transition: { duration: 0.6 }}} 
      >
        <h1>Contact Me</h1>
        {error && <p className={styles.error}>{error}</p>}
        <input type="text" placeholder='NAME' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='SUBJECT' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
        <textarea placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <div className={styles.buttonContainer}>
          <Button
            type='primary'
            color='blue'
            onClick={sendMessage}
            disabled={buttonDisabled}
          >
            {messageStatus}
          </Button>
          <Button
            type='secondary'
            color='blue'
            onClick={clearInputs}
            >
            Clear
          </Button>
        </div>
        <motion.div 
          className={styles.socialContainer}
          variants={stagger}
        >
          <motion.a variants={fadeInUp} href="https://github.com/edjopima" target="_blank" >
            <Image src={github} width={30} height={30}/>
          </motion.a>
          <motion.a variants={fadeInUp} href="https://twitter.com/edjopima" target="_blank" >
            <Image src={twitter} width={30} height={30}/>
          </motion.a>
          <motion.a variants={fadeInUp} href="https://www.linkedin.com/in/edjopima/" target="_blank" >
            <Image src={linkedin} width={30} height={30}/>
          </motion.a>
          <motion.a variants={fadeInUp} href="https://www.instagram.com/edjopima/" target="_blank" >
            <Image src={instagram} width={30} height={30}/>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;