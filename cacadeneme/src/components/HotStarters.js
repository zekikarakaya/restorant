import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const HotStarters = () => {
  const { t } = useTranslation();
  return (
    <div className='mt-28 container flex flex-col items-center gap-y-2'>
      
      <Link to="/menu">
        <button className='mt-4 bg-header-color rounded-md p-2 text-white'>{t('menu')}</button>
        </Link>
    
    <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gEF62_aiqG70-Os1I8v9D78v5jtmCN3XQQ&usqp=CAU" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Kalamar Tava</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://i.nefisyemektarifleri.com/2014/12/27/karides-tava-yapimi-foto.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karides Tava</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://www.mutfagimdantarifler.com/wp-content/uploads/2017/08/karides-guvec.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karides Güveç</h1>
            </div>
          </div>
      </div>
    
      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://cdn.yemek.com/mncrop/940/625/uploads/2024/01/midye-tava-onecikan.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Midye Tava</h1>
            </div>
          </div>
      </div>
    
      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://gabbiano.com.tr/wp-content/uploads/2023/10/gabbiano-ahtapot.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Ahtapot Izgara</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://www.yemek24.com/wp-content/uploads/2020/04/Kalamar-Izgara-Tarifi.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Kalamar Izgara</h1>
            </div>
          </div>
      </div>
    
      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://static.wixstatic.com/media/4fb7d6_c1c811d905ff4fb2ae7ba0009eaef5f8~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90/file.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karides Söğüş</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://i.lezzet.com.tr/images-xxlarge-recipe/karidesli_borek-6f7f5f63-4eb9-49b8-bf71-625a5cc0de07.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Karidesli Sigara Böreği</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/balik-osman-izgara-jumbo-karides-tarifi.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Jumbo Karides</h1>
            </div>
          </div>
      </div>

      <div className="card w-full h-[120px] md:h-[200px] shadow-xl rounded-xl">
          <div className="flex">
            <div className="w-1/3">
            <img src="https://i.ytimg.com/vi/VGbMEXXb4LA/sddefault.jpg" alt=""  className="w-full object-cover h-[120px] md:h-[200px] rounded-2xl"/>
            </div>
            <div className="relative w-2/3">
            <h1 className="absolute top-1/2 -translate-y-1/2 left-4">Balık Kavurma</h1>
            </div>
          </div>
      </div>

  </div>
  )
}

export default HotStarters