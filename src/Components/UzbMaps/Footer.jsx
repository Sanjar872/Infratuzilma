import React from 'react'
import { Container,BoX,Brendlar,Kompaniya,PANd,BredRasmlar,BredRasmlar5, BredRasmlar6 } from './style'
//images Footer
import rasm1 from '../../ImgFoter/1rasm.png'
import rasm2 from '../../ImgFoter/2rasm.png'
import rasm3 from '../../ImgFoter/3rasm.png'
import rasm4 from '../../ImgFoter/4rasm.png'
import rasm5 from '../../ImgFoter/5rasm.png'

import Uztelecom from '../../ImgFoter/Uzonline.png'
import Mobiuz from '../../ImgFoter/Mobiuz.png'
import Beeline from '../../ImgFoter/Beeline.png'
import Perfectum from '../../ImgFoter/Pefectom.png'
import Uccell from '../../ImgFoter/Uceel.png'
const Footer = () => {
  return (
    <Container>
      <Brendlar>
            <div class="div1"> <h1>Andijona Pochta Xizmatlari</h1></div>
          <div class="parent">
            <div class="div2"><BredRasmlar src={rasm1} alt="" /></div>
            <div class="div2"><BredRasmlar src={rasm2} alt="" /> </div>
            <div class="div2"><BredRasmlar src={rasm3} alt="" /></div>
            <div class="div2"><BredRasmlar5 src={rasm4} alt="" /> </div>
            <div class="div2"><BredRasmlar6 src={rasm5} alt="" /></div>
          </div>

      </Brendlar>

    <BoX>
      <div>
        <Kompaniya src={Uztelecom} alt="" />
        <Kompaniya src={Mobiuz} alt="" />
        <Kompaniya src={Beeline} alt="" />
        <Kompaniya src={Perfectum} alt="" />
        <Kompaniya src={Uccell} alt="" />
      </div>
      
          <PANd>Andijonda Mobil Operatorlari, uyali telefon kompaniyalar</PANd>
      
    </BoX>
    </Container>
  )
}

export default Footer