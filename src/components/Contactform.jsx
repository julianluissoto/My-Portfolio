import React, {useState, useEffect} from 'react'
import emailjs from'emailjs-com'


import './contact.css'
import './loader.css'
/* const Box = styled.div`
display: flex;
background-color: ${props => props.theme.body};
height:400vh;
flex-direction: column;
` */
/* const Styledform = styled.form`
display: flex;
 */
/* background-color: ${props => props.theme.body};
align-content:space-evenly;
flex-direction: column;
width: 200px;
  height: 200px;
` */


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
   

<div className="container">

		<form className="contact-box" onSubmit={handleSubmit}>
			
			<div className="right">
				<h2 className='title'>Contact Me</h2>
				<input  className='field' value={values.fullName||''} defaultValue='Your name' onChange={handlechange} name="fullName" type="text" placeholder="Your name" />
				<input className='field' value={values.email||''} defaultValue ='Your E-mail'  onChange={handlechange} name="email" type="email" placeholder="Your E-mail" />
				
				
				<textarea className="field" value = {values.message ||''} defaultValue='inital value' onChange={handlechange} placeholder="Your message here" name="message" />
				<button type="submit"   className="btn">{values.sending?'Sending':'Send'}</button>
                {status && renderAlert()}
			</div>
		</form  >
	</div>




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


  {/* <Box>
        <h3 >CONTACT ME</h3>
        {status && renderAlert()} 
        <Box>
       
            <Styledform onSubmit={handleSubmit}>
        
                <input   value={values.fullName} onChange={handlechange} label="Full Name" name="fullName" type="text" placeholder="Your name" />
                <input value={values.email} onChange={handlechange} label="E-Mail" name="email" type="email" placeholder="Your E-mail" />
        
                <textarea value={values.message} onChange={handlechange} label="Your message here" name="message" />
               
            </Styledform>
            <button type="submit"
          
          >Send
       </button>
        </Box>
       
    </Box>  */}