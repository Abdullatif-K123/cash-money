import "./App.css";
import HomeMain from "./components/home/HomeMain";
import Withdraw from "./components/deposit&withdraw/Withdraw";
import Charging from "./components/deposit&withdraw/Charging";
import CashToCash from "./components/deposit&withdraw/CashToCash";
import Layout from "./components/layout/Layout";
import TouchSub from "./components/touch/TouchSub";
import TouchMain from "./components/touch/TouchMain";
import Alfa  from "./components/alfa/Alfa";
import AlfaDollars from "./components/alfa/AlfaDollars";
import AlfaDollarSub from "./components/alfa/AlfaDollarSub";
import AlfaDaily from "./components/alfa/AlfaDaily";
import AlfaDailySub from "./components/alfa/AflaDailySub";
import AlfaCards from "./components/alfa/AlfaCards";
import AlfaCardSub from "./components/alfa/AlfaCardSub";
import Alfa24 from "./components/alfa/Alfa24";
import Alfa24Sub from "./components/alfa/Alfa24Sub";
import Alfa4G from "./components/alfa/Alfa4G";
import Alfa4GSub from "./components/alfa/Alfa4GSub";
import Alfa2hNet from "./components/alfa/AlfaNet2h";
import Alfa2hNetSub from "./components/alfa/AlfaNet2hSub";
import AlfaNetWeek from "./components/alfa/AlfaNetWeek";
import AlfaNetWeekSub from "./components/alfa/AlfaNetWeekSub";
import Alfa20Min from "./components/alfa/Alfa20Min";
import Alfa20MinSub from "./components/alfa/Alfa20MinSub";
import AlfaShare from "./components/alfa/AlfaShare";
import AlfaShareSub from "./components/alfa/AlfaShareSub";
import SingUp from "./components/account/SingUp";
import SignIn from "./components/account/SingIn";
import SectionThree from "./components/home/SectionThree";
import SectionTwo from "./components/home/SectionTwo";
import ContactUs from "./components/account/ContactUs";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Layout>
      
        <Routes>
           <Route index element={<HomeMain/>} />
           <Route path="/withdraw" element={<Withdraw/>}/>
           <Route path="/charging-account" element={<Charging/>}/>
           <Route path="/cashtocash" element={<CashToCash/>}/>
           <Route path="touch/other" element={<TouchSub/>}/>
           <Route path="touch/mine"  element={<TouchMain/>}/>
           <Route path="partners"  element={<SectionThree/>}/>
           <Route path="our-services"  element={<SectionTwo/>}/>
           <Route exact path ="/alfa" element={<Alfa/>}/>
           <Route path="alfa/dollars-mine" element={<AlfaDollars/>}/>
           <Route path="alfa/dollars-other" element={<AlfaDollarSub/>}/>
           <Route path="alfa/daily-mine" element={<AlfaDaily/>}/>
           <Route path="alfa/daily-other" element={<AlfaDailySub/>}/>
           <Route path="alfa/cards-mine" element={<AlfaCards/>}/>
           <Route path="alfa/cards-other" element={<AlfaCardSub/>}/>
           <Route path="alfa/wifi24-mine" element={<Alfa24/>}/>
           <Route path="alfa/wifi24-other" element={<Alfa24Sub/>}/>
           <Route path="alfa/fourG-mine" element={<Alfa4G/>}/>
           <Route path="alfa/fourG-other" element={<Alfa4GSub/>}/>
           <Route path="alfa/twohours-mine" element={<Alfa2hNet/>}/>
           <Route path="alfa/twohours-other" element={<Alfa2hNetSub/>}/>
           <Route path="alfa/week-mine" element={<AlfaNetWeek/>}/>
           <Route path="alfa/week-other" element={<AlfaNetWeekSub/>}/>
           <Route path="alfa/twentymin-mine" element={<Alfa20Min/>}/>
           <Route path="alfa/twentymin-other" element={<Alfa20MinSub/>}/>
           <Route path="alfa/share-mine" element={<AlfaShare/>}/>
           <Route path="alfa/share-other" element={<AlfaShareSub/>}/>
           <Route path="/signup" element={<SingUp/>}/>
           <Route path="/signIn" element={<SignIn/>}/>
           <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
       
    </Layout>
  );
}

export default App;
