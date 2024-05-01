import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const MainFoods = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-28 container flex flex-col items-center gap-y-2'>
      
      <Link to="/menu">
        <button className='mt-4 bg-header-color rounded-md p-2 text-white'>{t('menu')}</button>
        </Link>
      
      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/9247/uploads/urunresimleri/buyuk/levrek-fileto-252f.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Levrek</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/cupra-nasil-pisirilir-tavada-firinda-ve-izgarada-pisirme-yontemi-74f55271-b72e-46b7-9fc3-7d4c088b3bcf.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Çupra</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://www.tarifinisevdim.com/uploads/recipe-photos/1920x1280/balik-koftesi-0931d2.Jpeg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Balık Köfte</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://floryabalik.com/resimler/1564499240_Icerik.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Balık Şiş</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/ogt/barbun-baligi.webp" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Barbun</h1>
              </div>
            </div>
        </div>

        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/b2/a7/70/karisik-deniz-mahsulleri.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karışık Deniz Ürünleri Tabağı</h1>
              </div>
            </div>
        </div>
      
        <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
            <div className="flex">
              <div className="w-1/3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkR8myngKzVSPhCJLHyoeyYMqPXHU2Za0mw&usqp=CAU" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
              </div>
              <div className="relative w-2/3">
              <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Köfte</h1>
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

export default MainFoods