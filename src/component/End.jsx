import React from 'react';
import './End.css'
import { Container } from 'react-bootstrap';

function End() {
  return (
    <>
   <Container>
    <div className="text-center mb-5 mt-4">
          <h2 className="contact-heading">The End of <span className='text-primary'>Beginning</span></h2>
          <div className="contact-heading-underline mx-auto"></div>
        </div>
        
        <img src="/krishna.png" alt="krishna" className="krishna"/>
        
        <div className="content">
            <h1 className=' Gita '>From Bhagavad Gita</h1>
            <p className='mt-5 text-warning'>यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥ </p>
            <p> ( इसका अर्थ है, "जब-जब धर्म की हानि होती है, और अधर्म का उत्थान होता है, तब-तब मैं स्वयं प्रकट होता हूँ।" )</p>
            <p className='mt-5 text-warning'> कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥ </p>
            <p> ( इसका अर्थ है, "कर्म करना तुम्हारा अधिकार है, फल की प्राप्ति नहीं। कर्म को फल की इच्छा के बिना करो, कर्म से मत सँकोचो।" )</p>
        </div>
        </Container>
    </>
  )
}

export default End