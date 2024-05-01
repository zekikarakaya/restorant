import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Mezeler = () => {
  const { t } = useTranslation();
  const mezeler ="Humus MuammaraHaydariAli NazikLakerdaDeniz BörülcesiAtom"
  return (
    <div className='mt-28 container flex flex-col items-center gap-y-2'>
      
      <Link to="/menu">
        <button className='mt-4 bg-header-color rounded-md p-2 text-white'>{t('menu')}</button>
        </Link>
      
      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://cdn.yemek.com/mnresize/940/940/uploads/2020/06/kolay-humus-tarifi.jpeg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Humus</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://i.ytimg.com/vi/mEMR-bIP5TE/maxresdefault.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Babagannuş</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://www.chezmaman.com.tr/wp-content/uploads/2022/06/Muhammara-Tarifi-4-scaled.jpeg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Muhammara</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://i.nefisyemektarifleri.com/2020/07/29/fava-9.jpeg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Fava</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://cdn.ye-mek.net/App_UI/Img/out/650/2023/04/orijinal-haydari-resimli-yemek-tarifi(11).jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Haydari</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/blok/d/atom.webp" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Atom</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://i.lezzet.com.tr/images-xxlarge-recipe/girit-zeytin-salatasi-4639bcb6-90c1-471f-a3f0-3db2cf1c4af8.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Zeytin Salatası</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://static.daktilo.com/sites/1456/uploads/2023/12/12/karides-ve-ispanak-malatya-soz.webp" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karidesli Makarna</h1>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Mezeler