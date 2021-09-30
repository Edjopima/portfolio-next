import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';
import github from '../../public/images/github.svg'
import twitter from '../../public/images/twitter.svg'
import linkedin from '../../public/images/linkedin.svg'
import instagram from '../../public/images/instagram.svg'
import Image from 'next/image';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject,setSubject] = useState('');

  const sendMessage = () => {
    console.log(email, message, name, subject);
  }
  const clearInputs = () => {
    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
  }

  return (
    <div className={styles.contactMe}>
      <h1>Contact Me</h1>
      <input type="text" placeholder='NAME' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='SUBJECT' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      <textarea placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <div className={styles.buttonContainer}>
        <Button
          type='primary'
          color='blue'
          onClick={sendMessage}
        >
          Send
        </Button>
        <Button
          type='secondary'
          color='blue'
          onClick={clearInputs}
          >
          Clear
        </Button>
      </div>
      <div className={styles.socialContainer}>
        <a href="https://github.com/edjopima" target="_blank" >
          <Image src={github} width={30} height={30}/>
        </a>
        <a href="https://twitter.com/edjopima" target="_blank" >
          <Image src={twitter} width={30} height={30}/>
        </a>
        <a href="https://www.linkedin.com/in/edjopima/" target="_blank" >
          <Image src={linkedin} width={30} height={30}/>
        </a>
        <a href="https://www.instagram.com/edjopima/" target="_blank" >
          <Image src={instagram} width={30} height={30}/>
        </a>
      </div>
    </div>
  );
}

export default Contact;