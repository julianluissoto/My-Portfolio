import React, {useState, useEffect} from 'react'
import emailjs from'emailjs-com'
import styled from 'styled-components';


const Box = styled.div`
display: flex;
background-color: ${props => props.theme.body};
height:400vh;
flex-direction: column;
`
const StyledForm = styled.form`

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
        
        message: ''
      });
      

    const handleSubmit= (e) => {
    e.preventDefault();

    emailjs.send('gmail', 'template_0wt10li', values, 'DHjR6rMv5voecVMRP')
    .then(response => {
      
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
    })
    
    .then(response => {
           
            setValues({
              fullName: '',
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
   

    <Box>
        <h3 >CONTACT ME</h3>
       {status && renderAlert()} 
      <StyledForm onSubmit={handleSubmit}>
        
        <input value={values.fullName} onChange={handlechange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <input value={values.email} onChange={handlechange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
        
        <textarea value={values.message} onChange={handlechange} label="Your message here" name="message" />
        <button type="submit"
          
        >Send
        </button>
      </StyledForm>
    </Box>
    
    
  )
}

 const renderAlert = () => {
    return (<div  >
      <p>Your message submitted successfully</p>
    </div>
  ) 
    }
export default Contactform