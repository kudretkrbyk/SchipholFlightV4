# SchipholFlightV4

Uygulama vite ve tailwind şablonu kullanılarak kurulmuştur.

Gereklilikler:
 
 "axios",    "date-fns",    "prop-types",    "react",    "react-dom",    "react-icons",    "react-router-dom"
 Uygulama ilk açıldığında bu şekilde görünmektedir. Uçuşlar gelene kadar kullanıcıya uçuşlar yükleniyor mesajı iletilir. SortBy kısmında yer alan filtrelerin nasıl çalıştığı gösterilmiştir.
 ![Demo GIF](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/GIFS/output000.gif)

 
 Uçuşun kalkış noktasına ve iniş noktasına göre filtrelenmesi şekilde gösterilmiştir. İniş kısmına schiphol harici bir bilgi geldiğinde kalkış kısmı otomatik olarak schiphol girilmektedir. Ters durumda ise kalkış kısmında schiphol harici bilgi girildiğinde iniş kısmına otomatik olarak schiphol girilmektedir. Bu algoritmanın sebebi API servisinden alınan bilgilerin ya schiphol iniş ya da schiphol kalkış uçuşlarına ait olmasıdır. 
 ![Demo GIF](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/GIFS/output001.gif)
 
 Rezervasyon yapılan uçuşlar sayfası, anasayfada yer alan profil simgesine tıklandığında açılmaktadır. Bu sayfada görev dosyalarında gösterildiği şekilde tanımlanmıştır. Bu kısımda bir filtreleme ya da CRDU işlemleri istenmediğinden gerçekleştirilmemiştir. 
 ![Demo GIF](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/GIFS/output002.gif)
 
 Aşağıdaki görselde de MongoDB veri tabanında kayıt edilen uçuşlar görünmektedir. 
 ![Demo GIF](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/GIFS/output003.gif)
 ![image](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/SSImages/anasayfa.PNG)
 ![image](https://github.com/kudretkrbyk/SchipholFlightV4/blob/main/client/src/assets/SSImages/ucuslar.PNG)