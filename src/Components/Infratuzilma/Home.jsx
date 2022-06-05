import React from 'react'
import {
  Container, Navbar, Logodiv, Con, Infra, QartaSection,
  Ozbekiston, Bar, MyWidgetsIcon, MyRocketLounchIcon, MyPhoneIcon,
  Mapuzb, ImgKora, Imgdiv, MyLocationOnIcon, MyLocationOnIconXorazm,
  Xorazmdiv, Novoidiv, MyLocationOnIconNovoi, MyLocationOnIconBuxoro, Buxorodiv,
  Jizzaxdiv, MyLocationOnIconJizzax, Samarqanddiv, Karshidiv, MyLocationOnIconKarshi,
  Termizdiv, MyLocationOnIconTermiz, Tashkentdiv, MyLocationOnIconTashkent, Toshdiv,
  Andijondiv, MyLocationOnIconAndijon, Namangandiv,
  MyLocationOnIconNamangan, Ferganadiv, MyLocationOnIconFer, MainContainer, MainMatn,
  Operator, Krug1, Krug2, Krug3, Qwer, Krug4, Logika, MainMaps, Item,Digital,AndijonMaps,
  AndMaps,AndijonSH,MyLocationOnIconAndijonSH,JalaquduqSh,MyLocationOnIconJalaquduqSH,XujabotSH,
  MyLocationOnIconXujabotSH,BuloqboshiSH,MyLocationOnIconBuloqboshiSH,Marxamat, MarxamatSH,
  ImgMarxamatBinosi,AndojonSHa,ImgAndijonBinosi,PaxtabodSH,ImgPaxdabodBinosi,IzboskanSH
  ,Oltinkul,ImgIzboskanBinosi,ImgOltinkulBinosi,BaliqchiSH,UlugnorSH,ImgBaliqchiBinosi,ImgUlugnorBinosi,
  BostonSH,ImgBostonBinosi,ShaxrixonSHA,ImgShaxrixonBinosi,AsakaSH,ImgAsakaBinosi,ImgQurgontepaBinosi,
  Harakatlar,Harakatdiv,Griddiv,Cardlar,LiniDiv,Img, Border,Paragraov,Span1,PPP,Span2,PP2,Paragraov2,
  ItKompaniya,MapsUzb,H33,PP3,H111,Promax,PEY,HHH1,IMGG
} from './style'

//Material-icons
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
//Images from
import Logo from '../../Img/LogoNav.png'
import Maps from '../../Img/Group 664.png'
import Kora from '../../Img/Kora.png'
import Xorazm from '../../Img/horazm.png'
import Navoi from '../../Img/Navoi.png'
import Buxoro from '../../Img/Buxara.png'
import Jizzax from '../../Img/Jizzax.png'
import Karshi from '../../Img/Karshi.png'
import Samarqand from '../../Img/Samarqand.png'
import Termiz from '../../Img/Termiz.png'
import Tashkent from '../../Img/Tashkent.png'
import Tosh from '../../Img/Tosh.png'
import Andijon from '../../Img/Andijan.png'
import Namangan from '../../Img/Namangan.png'
import Far from '../../Img/Fergana.png'
import MainImg from '../../Img/mainrasm.png'
import Marxamatt from '../../Img2/Marxamat.png'
// ________________________________________________
import MarxamatBinosi from '../../Img2/MarxamatBinosi.png'
import AndijonBinosi from '../../Img2/BrandAnd.png'
import Paxtabod from '../../Img2/Paxtabod.png'
import Andijonn from '../../Img2/Andijon.png'
import XonabodQurgontepaa from '..//../Img2/XonabodQurgontepa.png'
import Jalaquduq from '../../Img2/Jalaquduq.png'
import Xujabot from '../../Img2/xujabot.png'
import Buloqboshi from '../../Img2/buloqboshi.png'
import AndijonSHa from '../../Img2/AndijonSh.png'
import IzboskanSHa from '../../Img2/Izboskan.png'
import OltinkulSHa from '../../Img2/Oltinkul.png'
import Baliqshi from '../../Img2/Balikchi.png'
import Ulugnor from '../../Img2/Ulugnor.png'
import BostonSHA from '../../Img2/Boston.png'
import ShaxrixonSH from '../../Img2/Shaxrixon.png'
import AsakaSHA from '../../Img2/Asaka.png'

import BoderLIni from '../../Img2/Borderlin.png'
import BoderRasm from '../../Img2/RasmPage.png'
import Footer from '../UzbMaps/Footer';
const Home = () => {
  return (
    <Container>
      <Con>
        {/* <Navbar>
          <Logodiv>
            <img src={Logo} alt="" />
          </Logodiv>
          <ul>
            <li>ASOSIY</li>
            <li>TEXNOPARK</li>
            <li>IT TA’LIM</li>
            <li>STARTAPLAR</li>
            <li>LOYIHALAR</li>
            <li>RAQAMLASHTIRISH</li>
            <li>BIZNES</li>
            <li>INFRATUZILMA</li>
          </ul>
          <select>
            <option value="1">UZ</option>
            <option value="2">RU</option>
          </select>

        </Navbar> */}

      </Con>
      <Infra>
        <h1>INFRATUZILMA</h1>
      </Infra>

      <QartaSection>
        {/* <Bar>
          <ul>
            <li><MyWidgetsIcon /></li>
            <li></li>
            <li><MyRocketLounchIcon /></li>
            <li><MyPhoneIcon /></li>

          </ul>
        </Bar> */}
        <Ozbekiston>
          <H33>Oʻzbekistondagi IT markazlar</H33>
          <PP3>
            Bugungi kunga qadar O‘zbekistonning ko‘plab hududlarida IT markazlari tashkil etilgan. Bundan ko'zlangan maqsad qiziquvchan yoshlarni IT ta’limga rag'batlantirish, ularning innovatsion loyihalarini qo'llab quvvatlash va aholi turmush sharoitini yaxshilash kabi masalalar ilgari surilgan.
          </PP3>
        </Ozbekiston>

        <Mapuzb>
          <MapsUzb>
            <Img src={Maps} alt="" />
          </MapsUzb>

          <Tooltip title="QORAQALPOKISTON" placement="right" enterDelay={55} leaveDelay={0}>
            <Imgdiv>
              <ImgKora src={Kora} alt="" />
              <MyLocationOnIcon />
            </Imgdiv>
          </Tooltip>
          <Tooltip title="XORAZM" placement="left" enterDelay={55} leaveDelay={0}>
            <Xorazmdiv>
              <img src={Xorazm} alt="" />
              <MyLocationOnIconXorazm />
            </Xorazmdiv>
          </Tooltip>
          <Tooltip title="NOVOI" placement="right-start" enterDelay={55} leaveDelay={0}>
            <Novoidiv>
              <img src={Navoi} alt="" />
              <MyLocationOnIconNovoi />
            </Novoidiv>
          </Tooltip>
          <Tooltip title="BUKHARA" placement="right-start" enterDelay={55} leaveDelay={0}>
            <Buxorodiv>
              <img src={Buxoro} alt="" />
              <MyLocationOnIconBuxoro />

            </Buxorodiv>
          </Tooltip>
          <Tooltip title="DJIZZAK" placement="top" enterDelay={55} leaveDelay={0}>
            <Jizzaxdiv>
              <img src={Jizzax} alt="" />
              <MyLocationOnIconJizzax />
            </Jizzaxdiv>
          </Tooltip>
          <Tooltip title="KARSHI" placement="top" enterDelay={55} leaveDelay={0}>
            <Karshidiv>
              <img src={Karshi} alt="" />
              <MyLocationOnIconKarshi />
            </Karshidiv>
          </Tooltip>
          <Tooltip title="SAMARKAND" placement="top" enterDelay={55} leaveDelay={0}>
            <Samarqanddiv>
              <img src={Samarqand} alt="" />
              <MyLocationOnIconKarshi />

            </Samarqanddiv>
          </Tooltip>
          <Tooltip title="TERMIZ" placement="top" enterDelay={55} leaveDelay={0}>
            <Termizdiv>
              <img src={Termiz} alt="" />
              <MyLocationOnIconTermiz />
            </Termizdiv>
          </Tooltip>
          <Tooltip title="TASHKENT" placement="top-end" enterDelay={55} leaveDelay={0}>
            <Tashkentdiv >
              <img src={Tashkent} alt="" />
              <MyLocationOnIconTashkent />
            </Tashkentdiv>
          </Tooltip>
          <Tooltip>
            <Toshdiv>
              <img src={Tosh} alt="" />
            </Toshdiv>
          </Tooltip>
          <Tooltip title="ANDIJON" placement="top-end" enterDelay={55} leaveDelay={0}>
            <Andijondiv>
              <img src={Andijon} alt="" />
              <MyLocationOnIconAndijon />
            </Andijondiv>
          </Tooltip>
          <Tooltip title="FERGHANA" placement="top-end" enterDelay={55} leaveDelay={0}>
            <Namangandiv>
              <img src={Namangan} alt="" />
              <MyLocationOnIconNamangan />
            </Namangandiv>
          </Tooltip>
          <Tooltip title="FERGHANA" placement="top-end" enterDelay={55} leaveDelay={0}>
            <Ferganadiv>
              <img src={Far} alt="" />
              <MyLocationOnIconFer />
            </Ferganadiv>
          </Tooltip>
          <Operator>
            <MyPhoneIcon />
            <h1>1227</h1>
          </Operator>
        </Mapuzb>
      </QartaSection>
      {/* ____________________________________________  */}


      <MainContainer>
        <MainMatn>
          <H111>Andijon viloyatida IT markazlar </H111>
          <Promax>Respublikamizda boshqa viloyatlarga qaraganda Andijon viloyatida IT sohasiga qiziquvchi yoshlar soni tobora ortib borayotganligi tufayli viloyatdagi IT markazlari soni 37 nafarga yetdi. </Promax>
        </MainMatn>

        <Qwer>
          {/* <Logika> */}
          <img style={{border:'1px solid green' }} src={MainImg} alt="" />

          {/* </Logika> */}
          <Krug1>
            <div>
            <p>2022</p>
            <span>37Та</span>
            </div>
          </Krug1>
          <Krug2>
            <p>2021</p>
            <span>21Та</span>
          </Krug2>
          <Krug3>
            <p>2020</p>
            <span>8Та</span>
          </Krug3>
          <Krug4>
            <p>2020</p>
            <span>8Та</span>
          </Krug4>
        </Qwer>

      </MainContainer>
      <br /><br /><br /><br />
      <MainMaps>
        <Digital>
            <HHH1>	“Digital City” Texnopark</HHH1>
            <PEY>Digital City texnoparki Andijon viloyatidagi yetakchi IT markazlardan biridir. 5,6 gektar maydonda qurib bitkazilgan, 4 kavatli 3,5 ming kv.m. ni tashkil etadigan ushbu majmua axborot texnologiyalari va innovatsion loyihalarni qo‘llab-quvvatlash, dasturiy mahsulotlar eksportini yo‘lga qo‘yish va 50 dan ortiq IT sohasida xizmat ko‘rsatadigan korxonalarni joylashtirish uchun mo‘ljallangan. </PEY>
        </Digital>
        <div style={{display:'flex', justifyContent:'center',width:'700px;',alignItems:'center', height:'500px',border:'1px solid red;'}}>
        <AndijonMaps>
          
            
          
              <AndMaps>
                <img  src={Andijonn} alt="" />
              </AndMaps>
              <Tooltip title="QURGONTEPA" placement="top-end" enterDelay={55} leaveDelay={0}>
                <AndijonSH>
                <img src={XonabodQurgontepaa} alt="" />
                <ImgQurgontepaBinosi src={MarxamatBinosi} alt="" />
                
                </AndijonSH>
              </Tooltip>
              <Tooltip title="JALAQUDUQ" placement="top-end" enterDelay={55} leaveDelay={0}>
                <JalaquduqSh>
                  <img src={Jalaquduq} alt="" />
                <MyLocationOnIconJalaquduqSH src={MarxamatBinosi} alt="" />

                </JalaquduqSh>
              </Tooltip>
              <Tooltip  title="XUJAOBOT" placement="top-end" enterDelay={55} leaveDelay={0}>
                <XujabotSH>
                  <img src={Xujabot} alt="" />
                <MyLocationOnIconXujabotSH src={MarxamatBinosi} alt="" />

                </XujabotSH>
              </Tooltip>
              <Tooltip  title="BULOQBOSHI" placement="top-end" enterDelay={55} leaveDelay={0}>
                <BuloqboshiSH>
                  <img src={Buloqboshi} alt="" />
                <MyLocationOnIconBuloqboshiSH  src={MarxamatBinosi} alt="" />
                </BuloqboshiSH>
              </Tooltip>
              <Tooltip title="MARXAMAT" placement="top-end" enterDelay={55} leaveDelay={0}>
                <MarxamatSH>
                  <img src={Marxamatt} alt="" />
                  <ImgMarxamatBinosi src={MarxamatBinosi} alt="" />
                </MarxamatSH>
              </Tooltip>
              <Tooltip title="ANDIJON" placement="top-end" enterDelay={55} leaveDelay={0}>
                <AndojonSHa>
                  <img src={AndijonSHa} alt="" />
                  <ImgAndijonBinosi src={AndijonBinosi} alt="" />

                </AndojonSHa>
              </Tooltip>
              <Tooltip title="PAXTAOBOD" placement="top-end" enterDelay={55} leaveDelay={0}>
                <PaxtabodSH>
                  <img src={Paxtabod} alt="" />
                  <ImgPaxdabodBinosi src={MarxamatBinosi} alt="" />
                </PaxtabodSH>
              </Tooltip>
              <Tooltip title="IZBOSKAN" placement="top" enterDelay={55} leaveDelay={0}>
                <IzboskanSH>
                  <img src={IzboskanSHa} alt="" />
                  <ImgIzboskanBinosi src={MarxamatBinosi} alt="" />
                </IzboskanSH>
              </Tooltip>
              <Tooltip title="OLTINKUL" placement="top" enterDelay={55} leaveDelay={0}>
                <Oltinkul >
                  <img src={OltinkulSHa} alt="" />
                  <ImgOltinkulBinosi src={MarxamatBinosi} alt="" />
                </Oltinkul>
              </Tooltip>
              <Tooltip title="BALIQCHI" placement="top" enterDelay={55} leaveDelay={0}>
                <BaliqchiSH>
                  <img src={Baliqshi} alt="" />
                  <ImgBaliqchiBinosi src={MarxamatBinosi} alt="" />

                </BaliqchiSH>
              </Tooltip>
              <Tooltip title="ULUGNOR" placement="top" enterDelay={55} leaveDelay={0}>
                <UlugnorSH>
                  <img src={Ulugnor} alt="" />
                  <ImgUlugnorBinosi src={MarxamatBinosi} alt="" />

                </UlugnorSH>
              </Tooltip>
              <Tooltip title="BUZ" placement="top" enterDelay={55} leaveDelay={0}>
                <BostonSH>
                  <img src={BostonSHA} alt="" />
                  <ImgBostonBinosi src={MarxamatBinosi} alt="" />

                </BostonSH>
              </Tooltip>
              <Tooltip title="SHAXRIXON" placement="top" enterDelay={55} leaveDelay={0}>
                <ShaxrixonSHA>
                  <img src={ShaxrixonSH} alt="" />
                  <ImgShaxrixonBinosi src={MarxamatBinosi} alt="" />

                </ShaxrixonSHA>
              </Tooltip>
              <Tooltip title="ASAKA" placement="top" enterDelay={55} leaveDelay={0}>
                <AsakaSH>
                  <img src={AsakaSHA} alt="" />
                  <ImgAsakaBinosi src={MarxamatBinosi} alt="" />

                </AsakaSH>
              </Tooltip>
        </AndijonMaps>
        </div>

      </MainMaps>
      {/* _______________________ */}

      <Harakatlar>
        <Harakatdiv>
          <h1>Harakatlar Strategiyasi</h1>
          <h3>Axborot texnologiyalari va kommunikasiyalarini rivojlantirish vazirligining 2017 yilda amalga oshiradigan CHORA-TADBIRLAR DASTURI</h3>
        </Harakatdiv>
        
      </Harakatlar>
        <Griddiv>
          <Cardlar>
              <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni rivojlantirish rag’batlantirish</p></div>
              <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni rivojlantirish rag’batlantirish</p></div>
              <div><p>xavsizlik, diniy bag’rikenglik va millitlar aro totuvlikni taminlash</p></div>
              <div><p>QONUN USTUVORLIGINI TA’MINLASH, SUD-HUQUQ TIZIMINI ISLOH QILISH</p></div>

          </Cardlar>
        </Griddiv>
        <LiniDiv>
       
          <div>
            <IMGG src={BoderLIni} alt="" />
          </div>
          <Border>
          <Paragraov>
              <span>
                <p>O’ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING “YAGONA INTERAKTIV DAVLAT XIZMATLARI PORTALI ORQALI ELEKTRON DAVLAT XIZMATLARINI TAKOMILLASHTIRISH CHORA-TADBIRLARI TO’G’RISIDA”GI QARORI LOYIHASI</p>
              </span>
              <span>
                <p>FAOLIYATNING 40 TURI BO’YICHA ELEKTRON LITSENZIYALASH PORTALINI YO’LGA QO’YISH</p>
              </span>
              <span>
                <p>“YAGONA DARCHA” MARKAZLARIDA AVTOMATLASHTIRILGAN AXBOROT VA DAVLAT XIZMATLARI UCHUN TO’LOVLARNING BILLING TIZIMINI YARATISH</p>
              </span>
              <span>
                <p>HUDUDLARDA “YAGONA DARCHA” MARKAZLARI VA “O’ZBEKISTON POCHTASI” AJ BO’LINMALARIDA 250 TA INFOKIOSKANI O’RNATISH</p>
              </span>
              <span>
                <p>RESPUBLIKA HUDUDLARIDA 66 TA YUQORI QUVVATLI VA 328 TA KAM QUVVATLI RAQAMLI TELEVIDENIE UZATKICHLARINI O’RNATISH VA ISHGA TUSHIRISH </p>
              </span>
              <span>
                <p>RESPUBLIKA HUDUDLARIDA MOBIL ALOQA OPERATORLARNING 1843 TA BAZA STANSIYALARINI O’RNATISH </p>
              </span>  <span>
                <p>RESPUBLIKA HUDUDLARIDA 2300 KM OPTIK TOLALI ALOQA LINIYALARINI QUIRSH</p>
              </span>  <span>
                <p>YOSHLARNING BO’SH VAQTDAN OQILONA FOYDALANISHLARI VA ULARNING IMKONIYATLARINI OSHIRISH UCHUN O’YINLAR - MILLIY MOBIL INTERNETNI TASHKIL ETISH</p>
              </span>  <span>
                <p>RESPUBLIKA HUDUDLARIDA AHOLI VA TADBIRKORLIK SUB’EKTLARI UCHUN INTERNET ORQALI DAVLAT XIZMATLARIDAN FOYDALANISHNI O’RGATISH BO’YICHA KOMPYUTER SAVODXONLIGI VA MALAKALARNI OSHIRISH </p>
              </span>
              

            </Paragraov>
            <img src={BoderRasm} alt="" />
            
            <Paragraov2>
            <span>
                <p>RESPUBLIKA HUDUDLARIDA AHOLI VA TADBIRKORLIK SUB’EKTLARI UCHUN INTERNET ORQALI DAVLAT XIZMATLARIDAN FOYDALANISHNI O’RGATISH BO’YICHA KOMPYUTER SAVODXONLIGI VA MALAKALARNI OSHIRISH </p>
              </span>
              <span>
                <p>DASTURIY MAHSULOTLARNI ISHLAB CHIQARISHNI RAG’BATLANTIRISH UCHUN INNOVATSIYALAR MARKAZINI BUNYOD ETISH </p>
              </span>
              <span>
                <p>“ELEKTRON HUKUMAT” DOIRASIDA AXBOROT XAVFSIZLIGI TIZIMINING MONITORINGI</p>
              </span>
              <span>
                <p>DAVLAT ORGANLARIDA KADRLAR POTENSIALI HISOBINI YURITISH UCHUN YAGONA IDORALARARO “KADRLAR” TIZIMINI JORIY ETISH </p>
              </span>
              <span>
                <p>IMS TEXNOLOGIYALARI NEGIZIDA KOMMUTATSIYA MARKAZLARINI ZAMONAVIYLASHTIRISH </p>
              </span>
              <span>
                <p>KIBERXAVFSIZLIK SOHASIDA QONUNCHILIK BAZASINI TAKOMILLASHTIRISH</p>
              </span>
              <span>
                <p>YOSHLAR UCHUN TA’LIM VA MAORIF SOHASIDA ZAMONAVIY AXBOROT IMKONIYATLARI HAMDA, MULTIMEDIA MAHSULOTLARINI YARATISH. MILLIY KONTENTNI RIVOJLANTIRISH VA TAG’RIB QILISH</p>
              </span>
              <span>
                <p>ELEKTRON SUD PROTSESSI IJRONI AMALGA OSHIRISHNING ZAMONAVIY SHAKLLARI HAMDA USULLARINI JORIY ETISH</p>
              </span>
            </Paragraov2>

          </Border>
        </LiniDiv>
        <ItKompaniya>
          
          <h1>IT Kompaniyalar</h1>
          <br />
         <p> 5.Xozrida Andijonda ko'plab IT kompaniyalar turli yo'nalishlarda o'z ish faoliyatini olib bormoqdalar: <br /> pochta, aloqa va internet xizmatlari bilan xalq turmush darajasining yaxshilanishiga, ijtimoiy <br /> extiyojlarning qondirilishiga, iqtisodning o'sishi hamda fan-texnika taraqqiyotining jadallashishiga <br /> xizmat qilishmoqda.</p>
          
        </ItKompaniya>
        <Footer/>
    </Container>
  )
}

export default Home