import React from 'react';
import "./home.css";
import PortfolioNavbar from '../../components/navbar/navbar';
import CustomText from '../../components/text/text';
import CustomTitle from '../../components/title/title';
import Button from '../../components/buttons/button';

const PortfolioHome: React.FC = () => {

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };


  return (
    <>
        <PortfolioNavbar/>
        <div className='home-text-container'>
          <CustomTitle text="I do code and make content about it!" size="55px"/>
          <CustomText text="I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform." size="18px"/>
        </div>
        <div className="home-button-container">
          <Button
            onClick={handleButtonClick}
            width={195}
            height={64}
            text="Get In Touch"
            backgroundColor="#FFF"
            borderColor="#FFF"
            textColor="#000"
          />
          <Button
            onClick={handleButtonClick}
            width={195}
            height={64}
            text="Download CV"
            backgroundColor="transparent"
            borderColor="#FFF"
            textColor="#FFF"
          />
        </div>
    </>
  );
};

export default PortfolioHome;
