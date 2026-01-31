import { Outlet } from 'react-router-dom';
import Footer1 from '../Components/Footer/Footer1';
import Header3 from '../Components/Header/Header3';
import ScrollToTop from './ScrollToTop';
import LanguageSync from '../Components/MultiLanguage/LanguageSync';

const Main = () => {
  return (
    <div className='main-page-area bg-color2'>
      <LanguageSync />
      <Header3></Header3>
      
      <ScrollToTop />
      
      <Outlet></Outlet>
      <Footer1></Footer1>
    </div>
  );
};

export default Main;