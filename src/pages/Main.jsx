import React from 'react';
import Title from '../components/Title';
import './main.css';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';
import Form from '../components/Form';


const Main = () => {
  return (
    <div className="main-container">
        <div className="main-left">
            <StopCircleIcon className='mat-icon'/>
            <Title variant={'h4'} title='Let Us Help Run Your Freelance Business'/>            
            <Paragraph variant={'body1'} text='Our registration proccess is easy
            and fast, taking no more than 5 minutes of your time to complete!'
            />
            <Card />
        </div>
        <div className="main-right">
            <Title variant={'h4'} title='Get Started !'/>
            <Paragraph variant={'body1'} text='Create Your Free Account Now!'/>
            <Form />
        </div>
    </div>
  )
}

export default Main;