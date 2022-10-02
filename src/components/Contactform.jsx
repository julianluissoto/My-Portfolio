import React, {useState, useEffect} from 'react'
import emailjs from'emailjs-com'
import './contact.css'
import styled from 'styled-components'

const Container = styled.div`
position: relative;

height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 100px;
margin: auto;

`;
const Form = styled.form`
max-width: 500px;

grid-template-columns: repeat(2, 1fr);
justify-content: center;
align-items: center;
text-align: center;
background-color: #fff;
box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
`;

const FormBody = styled.div`
   padding: 25px 40px;

`
const InputForm   = styled.input`
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: -1rem 1rem;
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 22px;
    transition: .3s;

    &:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

`
const FormTextArea = styled.textarea`
   width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: -1rem 1rem;
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 22px;
    transition: .3s;

    &:hover {
    background-color: rgba(0, 0, 0, 0.1)
    }
`
const Button = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #2ecc71;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s;


& :hover {
    background-color: #27ae60;
}
`


const Contactform = () => {
    const [status, setStatus] = useState('');
    useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
      }, [status]);
      
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        sending:'',
        message: ''
      });
      

    const handleSubmit= (e) => {
        setValues({
            sending:true
        })
    e.preventDefault();

    emailjs.send('gmail', 'template_0wt10li', values, 'DHjR6rMv5voecVMRP')
    .then(response => {
      
        setValues({
          fullName: '',
          email: '',
          role: '',
          sending:'',
          message: ''
        });
    })
    
    .then(response => {
           
            setValues({
              fullName: '',
              sending: '',
              email: '',
              role: '',
              message: ''
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });

        }




    const handlechange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }
    
 
   

  return (
   

<Container /* className="container" */>

		<Form /* className="contact-box" */ onSubmit={handleSubmit}>
			
			<FormBody /* className="right" */>
				<h2 className='title'>Contact Me</h2>
				<InputForm   value={values.fullName||''}  onChange={handlechange} name="fullName" type="text" placeholder="Your name" />
				<InputForm   value={values.email||''}   onChange={handlechange} name="email" type="email" placeholder="Your E-mail" />
				
				
				<FormTextArea  value = {values.message ||''}  onChange={handlechange} placeholder="Your message here" name="message" />
				<Button type="submit" >
        {values.sending?'Sending':'Send'}
                </Button>
        {status && renderAlert()}
                
			</FormBody>
		</Form  >
	</Container>




  )
  
    
    
}
export default Contactform
const renderAlert = () => {
    return (<div  >
      <p style={{color:'green', fontWeight:'bold'}}>Your message submitted successfully</p>
    </div>
  ) 
    }

 /* 
 */


 