import photo from '../components/phonebook.png';
import { Image, Text, Title, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <>
      <Title>Welcome to contacts management platform!</Title>
      <Wrapper>
        <Text>
          We're delighted to have you here. This is your space to effortlessly
          save and organize your contacts. Please register or sign in to start
          using the application. Enjoy!
        </Text>
        <Image src={photo} alt="phone book" />
      </Wrapper>
    </>
  );
};

export default Home;
