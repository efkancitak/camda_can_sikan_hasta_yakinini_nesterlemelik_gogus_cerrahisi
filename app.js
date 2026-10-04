const topics = [
  {
    id: "muayene-tani", no: "01", title: "Muayene ve invaziv tanı", priority: 5,
    summary: "Göğüs cerrahisi muayenesi, insizyonlar, rezeksiyonlar ve tanı yöntemlerini doğru sınıflandırma.",
    high: [
      "Tüp torakostomi genellikle orta aksiller hat 5. interkostal aralıktan uygulanır. Pnömotoraksta solunum sesleri azalır ve perküsyon hipersonardır; efüzyonda sesler azalır fakat matite alınır.",
      "Noninvaziv: akciğer grafisi, toraks BT/USG, MRI, anjiyografi, EKO, kemik sintigrafisi ve PET. İnvaziv: bronkoskopi, TTİAB/Tru-cut, EBUS-İA, EUS-İA, mediastinoskopi, mediastinotomi, skalen biyopsi, torakoskopi ve torakotomi.",
      "Rijit bronkoskopi; endobronşiyal kitle biyopsisi, masif hemoptizi, yabancı cisim ve trakeobronşiyal stenozun mekanik dilatasyonunda kullanılır.",
      "TTİAB ve Tru-cut periferik lezyonlarda BT veya USG eşliğinde yapılır. En sık komplikasyon pnömotorakstır; kanama, hemoptizi ve hemotoraks gelişebilir.",
      "Mediastinoskopi N2/N3 evreleme ve mediastinal lenf nodu örneklemesi için; mediastinotomi özellikle ön mediasten ve istasyon 5-6 için öne çıkar.",
      "VATS tüm plevral boşluğu doğrudan görmeyi, plevra/parankim/mediasten biyopsisini ve ipsilateral lenf nodu örneklemesini sağlar."
    ],
    traps: [
      "Bir cevap PDF’sinde invaziv ve noninvaziv başlıkları ters yazılmış. Sınıflandırmada sunum slaydı esas alındı.",
      "Santral/hiler kitlede ilk invaziv seçim bronkoskopi; periferik lezyonda TTİAB/Tru-cut düşün."
    ],
    source: "İnvazif tanı yöntemleri s.2-31; Muayene s.2-46; 2022 çıkmış s.6"
  },
  {
    id: "hiperhidroz", no: "02", title: "Hiperhidroz", priority: 4,
    summary: "Primer-sekonder ayrımı, tanı kriterleri, ölçüm testleri ve sempatektomi seviyeleri.",
    high: [
      "Primer hiperhidroz en sık tiptir; avuç içi, ayak tabanı ve/veya aksillada lokalize aşırı terleme yapar ve emosyonel stresle tetiklenebilir.",
      "Tanı: en az 6 aylık fokal görünür terleme, sekonder neden yokluğu ve şu özelliklerden en az ikisi: bilateral-simetrik, günlük yaşamı bozma, haftada en az bir epizod, 25 yaşından önce başlangıç, aile öyküsü, uykuda olmaması.",
      "Nişasta-iyot testi terleme paternini; gravimetrik test mg/dk cinsinden miktarı gösterir.",
      "İlk seçenek topikal antiperspiranlardır. İyontoforez palmoplantar bölge için; botulinum toksini aksiller ve palmar bölge için kullanılır.",
      "Torakoskopik sempatektomi seviyeleri: yüz T2, palmar T3, aksiller T4. Palmar için sunumun başka slaydında T3-4 ifadesi de geçer.",
      "Komplikasyonlar: hemotoraks, pnömotoraks, cerrahi amfizem, brakiyal pleksus yaralanması, Horner ve kompansatuvar hiperhidroz."
    ],
    traps: ["Ekrin bezler klitoris, glans penis, labia minör, dış kulak yolu ve dudaklar dışında her yerde bulunur.", "Primer tip sıcak ve soğuk havalarda görülebilir."],
    source: "Hiperhidroz s.1-28; İnvazif tanı yöntemleri s.32-58; Çıkmış s.1"
  },
  {
    id: "gogus-duvari", no: "03", title: "Göğüs duvarı tümörleri ve deformiteler", priority: 5,
    summary: "Primer tümörler, güvenlik marjı, pektus, Poland ve sternal defektlerin sınav eşikleri.",
    high: [
      "Primer toraks duvarı tümörlerinin önemli bölümü maligndir. En sık malign yumuşak doku tümörü desmoid; primer kemik tümörlerinde en sık malign tümör kondrosarkomdur.",
      "Sternum tümörleri kostalara göre daha yüksek malignite oranı taşır. Sternumun en sık malign tümörü sorularda kondrosarkom olarak işaretlenir.",
      "Geniş rezeksiyon ve 2-4 cm güvenlik marjı anlatılır. Kemik iliği boyunca ilerleyen yüksek dereceli tümörlerde en az 4 cm marj vurgulanır.",
      "Rekonstrüksiyon genellikle 5 cm’den büyük defektlerde; posterior alanda skapula örtüsü varsa 10 cm’den küçük defektte gerekmeyebilir.",
      "En sık deformite pektus ekskavatumdur. Haller indeksi normal 2,5; 3,25 ve üzeri operasyon eşiğidir.",
      "Operasyon zamanı: pektus ekskavatum/karinatum 10-16 yaş; kosta agenezisi en geç 2 yaş; sternal cleft ve ektopia kordis neonatal; Poland postpubertal."
    ],
    traps: ["Poland: pektoralis majör/minör ve meme dokusu yokluğu, el anomalileri. Doğar doğmaz ameliyat edilmez.", "Nuss pektus ekskavatumda, Abramson pektus karinatumda kullanılır."],
    source: "Göğüs duvarı tümörleri ve deformiteler s.2-78; 2022 çıkmış s.1,3,6"
  },
  {
    id: "konjenital", no: "04", title: "Konjenital akciğer hastalıkları", priority: 5,
    summary: "Trakeobronşiyal ve pulmoner anomaliler, sekestrasyon ayrımı ve acil tablolar.",
    high: [
      "Trakeobronşiyal anomaliler: trakeal agenezi/atrezi, trakeomalazi, stenoz/ring, trakeal bronkus/divertikül, laringotrakeoözofageal kleft, bronşiyal atrezi ve bronkojenik kist.",
      "Pulmoner anomaliler: aksesuar lob, agenezi/aplazi/hipoplazi, sekestrasyon, konjenital lober amfizem, pulmoner kistler ve konjenital kistik adenomatoid malformasyon.",
      "En sık konjenital akciğer hastalığı pulmoner sekestrasyondur: normal bronşiyal-vasküler yapılardan ayrılmış, sistemik arterle beslenen akciğer dokusu.",
      "Ekstralober: ayrı plevrası vardır, çoğunlukla sol alt lob-diyafram arasında, sistemik venöz drenaj. İntralober: parankim içinde, çoğunlukla sol alt lob, pulmoner vene drene olur ve tedavisi lobektomidir.",
      "Trakeomalazi elastik ve bağ doku kaybıdır; ekstratorasik bölüm inspiryumda, intratorasik bölüm ekspiryumda kollabe olur.",
      "Trakeal bronkus çoğunlukla sağda, karinadan 2 cm yukarıdan çıkar; karsinoid gelişim riski taşır."
    ],
    traps: ["Trakeal agenezi/atrezi polihidroamnioz yapabilir; oligohidroamnioz beklenmez.", "Konjenital lober amfizem en sık sol üst lobdadır; acil lobektomi gerekebilir."],
    source: "Konjenital Akciğer Hastalıkları s.2-38; Cerrahi sorular s.2-4; Çıkmış 2022 s.3"
  },
  {
    id: "benign-ozofagus", no: "05", title: "Benign özofagus ve koroziv yaralanma", priority: 4,
    summary: "Leiomyom, kistler, biyopsi tuzakları ve koroziv madde yaklaşımı.",
    high: [
      "En sık benign özofagus tümörü leiomyomdur; orta-alt üçte, düzgün sınırlı submukozal lezyon olarak görülür. Tedavi semptomatik olguda enükleasyondur.",
      "Leiomyom ve şüpheli kistlerde iğne aspirasyonu/biyopsi abse, mediastinit ve cerrahi yapışıklık riski nedeniyle önerilmez.",
      "Özofagus duplikasyon kisti özofagus duvarında yer alır, iki kas tabakası vardır ve epitel ile döşelidir. Vertebral anomali varsa nöroenterik kist düşün.",
      "Hemanjiom biyopsisinde masif kanama riski vardır. Granüler hücreli tümör <1 cm ve asemptomatikse izlenebilir; >1 cm, semptom, hızlı büyüme veya malignite şüphesinde eksizyon düşünülür.",
      "Alkaliler likefaksiyon nekrozu; asitler koagülasyon nekrozu ve daha çok gastrik hasar yapar.",
      "Koroziv alımda kusturma, gastrik lavaj, nötralizasyon ve rutin nazogastrik sonda faydasız/zararlı olabilir; ilk 24 saatte fleksibl özofagoskopi temel değerlendirmedir."
    ],
    traps: ["Akut komplikasyonlar içinde striktür yoktur; striktür ortalama 2 hafta içinde gelişen geç komplikasyondur.", "Suda eriyen kontrast tercih edilir; baryum şimik etkisi nedeniyle tercih edilmez."],
    source: "Benign özofagial hastalıklar s.2-41; Çıkmış s.4-6"
  },
  {
    id: "ozofagus-kanseri", no: "06", title: "Özofagus kanserinde cerrahi", priority: 4,
    summary: "Risk, histoloji, TNM katmanları ve görüntülemenin rolü.",
    high: [
      "En önemli semptom progresif disfajidir. Başlıca riskler tütün ve alkol; akalazya, kostik striktür, tylosis, radyasyon ve bazı viral enfeksiyonlar da kaynakta sayılır.",
      "Yassı hücreli kanser çoğunlukla üst 2/3 ve multisentrik; adenokarsinom çoğunlukla alt 1/3/kardia ve daha invaziv yerleşim gösterir.",
      "Özofagusun serozası yoktur. T1 mukoza/submukoza, T2 muskularis propria, T3 adventisya, T4 komşu yapılar.",
      "N1: 1-2, N2: 3-6, N3: 7 veya daha fazla bölgesel lenf nodu.",
      "T evresi için EUS; uzak metastaz için PET-BT öne çıkar.",
      "Kötü prognoz: ileri yaş, geniş submukozal yayılım, geç semptom ve erken komşu organ yayılımı."
    ],
    traps: ["Endoskopide normal mukoza görülmesi tek başına kötü prognoz işareti değildir.", "M faktörünü belirlemede kaynak sorusu PET-BT’yi doğru kabul eder."],
    source: "Özofagus Kanserinde Cerrahi s.2-15; Çıkmış s.5-6; 2022 çıkmış s.2"
  },
  {
    id: "hemoptizi", no: "07", title: "Hemoptizi", priority: 5,
    summary: "Masif hemoptizi tanımı, ayırıcı tanı, hava yolu güvenliği ve embolizasyon.",
    high: [
      "Hemoptizi alt solunum yolu kaynaklı kanamadır. Sunum masifi 24 saatte >200-400 mL olarak verir; aciller sunumunda nicel aralıkların yanında gaz alışverişini bozan kanama nitel tanımdır.",
      "Kaynaklar: bronşektazi, tüberküloz, akciğer tümörü, fungus topu, nekrotizan pnömoni; ayrıca mitral darlık, KKY, vasküler nedenler ve ilaçlar.",
      "Kanamanın %90’dan fazlası yüksek basınçlı bronşiyal arterlerden gelir.",
      "Hemoptizi öksürükle, taze kırmızı ve köpüklü/alkali kanla; hematemez bulantı-kusma, kahve telvesi görünümü, asidik reaksiyon ve gıda artığı ile ayrılır.",
      "İlk adım hava yolu, oksijen ve hemodinamik stabilizasyondur. Kanayan taraf aşağıda tutulur; hipoksi/distres varsa entübasyon ve aspirasyon gerekir.",
      "Bronşiyal arter embolizasyonu %75-90 etkili olabilir ancak nüks mümkündür; cerrahi mümkünse elektif planlanır."
    ],
    traps: ["Normal akciğer grafisi hemoptiziyi dışlamaz. Malignite riski veya devam eden kanamada BT ve FOB gerekir.", "Asidik reaksiyon hemoptizi değil, hematemez lehinedir."],
    source: "Hemoptizi s.2-10; Aciller s.40-41; Çıkmış soru PDF’leri"
  },
  {
    id: "trakea", no: "08", title: "Trakeanın cerrahi hastalıkları", priority: 4,
    summary: "Primer trakea tümörleri, postentübasyon stenoz ve bronkoskopi güvenliği.",
    high: [
      "En sık malign primer trakea tümörleri skuamöz hücreli karsinom ve adenoid kistik karsinomdur.",
      "İlk semptom dispne/solunum yetmezliğidir; darlık arttıkça wheezing ve stridor görülür. Hemoptizi skuamöz tümörde daha sık, benignlerde genellikle yoktur.",
      "Tanı radyoloji ve bronkoskopiyle konur. Üç boyutlu BT lümen daralmasını ölçer; MR çevre dokularla ilişkiyi gösterir.",
      "Trakeal tümörde bronkoskopi kanama ve tam obstrüksiyon riski nedeniyle ameliyathanede yapılmalıdır.",
      "Sunuma göre en sık benign trakea tümörü kondromdur; ardından papillom, fibrom ve hemanjiyom gelir.",
      "Postentübasyon trakeal stenozun en sık nedeni yüksek basınçlı kafla uzun entübasyondur. En iyi preoperatif tanı yöntemi rijit bronkoskopidir."
    ],
    traps: ["Bir soru notunda papillom işaretlenmiş olsa da ders slaytı açıkça kondromu en sık benign tümör olarak verir.", "Trakeal tümörde biyopsi sıradan poliklinik işlemi gibi planlanmaz; hava yolu güvenliği belirleyicidir."],
    source: "Trakeanın cerrahi hastalıkları s.2-20; Göğüs cerrahisi sorular s.12,15-16"
  },
  {
    id: "plevra-pnomotoraks", no: "09", title: "Plevra, pnömotoraks ve ampiyem", priority: 5,
    summary: "Pnömotoraks yönetimi, Light kriterleri, parapnömonik sıvı ve ampiyem evreleri.",
    high: [
      "Pnömotoraks visseral ve parietal plevra arasına hava girmesidir: basit, açık ve tansiyon tipleri kaynaklarda sık sorulur.",
      "Tansiyon pnömotoraks klinik tanıdır; radyolojik doğrulama için tedavi geciktirilmez. İğne/parmak dekompresyonundan sonra tüp torakostomi zorunludur.",
      "Stabil hasta: solunum sayısı <24/dk, istirahatte dispne yok, nabız 60-120, normal kan basıncı, oda havasında satürasyon >%90, hemotoraks yok.",
      "Light: plevra protein/serum protein >0,5; plevra LDH/serum LDH >0,6; plevra LDH serum üst normalinin 2/3’ünden fazla. Bir tanesi bile varsa eksüda.",
      "Ampiyem: evre 1 eksüdatif, evre 2 fibrinopürülan, evre 3 organize/fibrotoraks. Tedavi antibiyotik ve drenajdan VATS/dekortikasyona ilerler.",
      "Pnömotoraks cerrahi endikasyonları: 7+ gün hava kaçağı, nüks/bilateral, drene edilemeyen hemotoraks, ekspanse olmayan akciğer, riskli meslek veya merkeze uzaklık."
    ],
    traps: ["Açık pnömotoraksta yara üç tarafı kapalı pansumanla örtülür; tamamen kapatmak tansiyona dönüştürebilir.", "Küçük pnömotoraks tek başına cerrahi endikasyon değildir."],
    source: "Plevranın cerrahi hastalıkları s.2-88; Cerrahi sorular s.5-6; Çıkmış 2022 s.1,4-6"
  },
  {
    id: "tos", no: "10", title: "Torasik outlet sendromu", priority: 5,
    summary: "Basının anatomisi, provokasyon testleri, EMG eşikleri ve cerrahi endikasyon.",
    high: [
      "TOS, toraks üst çıkışında A/V subclavia ve brakiyal pleksusun basıya uğramasıdır. En sık semptom ağrı; en sık ameliyat endikasyonu motor defekt ve parestezidir.",
      "Adson: derin nefes, başı aynı tarafa çevirme; radial nabız azalması/kaybı. Kostoklaviküler: asker pozisyonu. Wright: 180° hiperabdüksiyon. Roos: 90° abdüksiyon-eksternal rotasyon.",
      "Arter basısı soğukluk/solukluk ve trofik bozukluk; venöz bası Paget-Schroetter ile ödem, venöz dolgunluk ve morarma yapar.",
      "EMG/ulnar iletim: normal çıkış 72 m/sn; 66-69 hafif, 60-65 ılımlı, 55-59 orta, <55 şiddetli bası.",
      "Sunumda FTR için UNCV >60 m/sn, cerrahi için <60 m/sn eşiği verilir. Radyolojik kemik patolojisi ve başarısız FTR de önemlidir.",
      "Cerrahi basıyı kaldırır: 1. kosta/servikal kosta rezeksiyonu, skalenektomi ve fibromüsküler bantların serbestleştirilmesi."
    ],
    traps: ["Karpal tünelde Tinel pozitiftir ve radyoloji genellikle normaldir; TOS’ta servikal kosta/kemik anomali görülebilir.", "Radyolojik anomali var ama semptom yoksa kaynak ameliyat önermiyor."],
    source: "TOS s.2-41; Sözlü/çıkmış soru PDF’leri"
  },
  {
    id: "kist-hidatik", no: "11", title: "Kist hidatik", priority: 5,
    summary: "Bulaş zinciri, katmanlar, rüptür bulguları ve parankim koruyucu cerrahi.",
    high: [
      "Etken Echinococcus granulosus’un larva formudur. Ana konak köpek/kurt/çakal; yumurtalar dışkı ile sebze-meyveye, insana oral yolla geçer.",
      "Katmanlar: dışta perikist (konağın dokusu), ektokist/kutiküla, içte endokist/germinatif tabaka; buradan protoskoleks ve kız veziküller gelişir.",
      "En sık karaciğer (%55), sonra akciğer (%26). Öksürük, yan ağrısı ve hemoptizi; rüptürde kaya suyu ve membran çıkarma, bronkospazm/şok olabilir.",
      "Grafide hilal, çift kubbe ve nilüfer belirtileri; tanıda grafi/BT, skoleks, indirekt hemaglütinasyon, ELISA ve eozinofili kullanılır. Negatif seroloji dışlatmaz.",
      "Temel cerrahi prensip maksimum akciğer dokusu bırakmak, kisti çıkarmak, bronş ağızlarını dikmek ve boşluğu kapatmaktır. Medikal tedavi albendazol 10 mg/kg/gün.",
      "Lobektomi: medikale yanıtsız pulmoner süpürasyon, aynı lobda multipl kist, ciddi kanama veya bronşektaziye neden olan kist."
    ],
    traps: ["En sık tutulan organ akciğer değil karaciğerdir.", "Horner kistin tipik bulgusu değil, basıya bağlı nadir sonuç olarak anlatılır."],
    source: "Kist Hidatik s.2-12; Cerrahi sorular s.3-4; sözlü notları"
  },
  {
    id: "bronsiektazi-abse", no: "12", title: "Bronşektazi ve akciğer absesi", priority: 4,
    summary: "Kalıcı bronş dilatasyonu, lokalize-diffüz ayrımı ve kaviter enfeksiyon yaklaşımı.",
    high: [
      "Bronşektazi bronş duvar destrüksiyonu ile gelişen kalıcı dilatasyondur. Kronik öksürük, pürülan bronkore, hemoptizi ve tekrarlayan enfeksiyon yapar.",
      "Tanıda BT akut enfeksiyon atağından 6-8 hafta sonra; bronkoskopi yabancı cisim/tümör ayrımı ve kültür için kullanılır.",
      "Cerrahi: BT ile lokalize hastalık, yeterli rezerv, irreversibl dönem, uzun süren semptom ve medikale direnç.",
      "Akciğer absesi parankimde püy birikimidir; grafide hava-sıvı seviyeli kavite, iki haftadan uzun öksürük/ateş/gece terlemesi/hemoptizi ve kötü kokulu balgam tipiktir.",
      "Dünyada en sık aerobik etken kaynakta Klebsiella pneumoniae; anaerobikler Bacteroides, Fusobacterium ve Peptostreptococcus olarak sayılır.",
      "Antibiyotik temel tedavidir; yanıtsızlık, malignite veya yabancı cisim şüphesinde bronkoskopi, uygun olguda drenaj ve seçilmiş hastada cerrahi."
    ],
    traps: ["Akciğer absesi ve ampiyem aynı şey değildir: biri parankim içi kavite, diğeri plevral boşlukta püy.", "Metronidazol tek başına yeterli seçenek olarak verilmez; beta-laktamla kombinasyon vurgulanır."],
    source: "Bronşektazi s.1-18; Göğüs cerrahisi sorular s.6-7,13-14"
  },
  {
    id: "mediasten", no: "13", title: "Mediasten ve timoma", priority: 5,
    summary: "Kompartman ezberi, belirteçler, germ hücreli tümörler ve myastenia gravis.",
    high: [
      "Anterior mediastende en sık timoma; orta mediastende kistler/lenfadenopatiler; posterior mediastende en sık nörojenik tümörler.",
      "Anterior için 4T: thymoma, teratoma/germ hücreli, terrible lymphoma, thyroid.",
      "Biyokimyasal belirteçler: AFP, beta-HCG, LDH; seminomda AFP ve beta-HCG genellikle normal, LDH yüksek olabilir. Nonseminomatözlerde AFP/beta-HCG yükselir.",
      "Timoma ile myasthenia gravis, kırmızı hücre aplazisi ve hipogamaglobulinemi ilişkilidir.",
      "Myasteniklerin yaklaşık %10’unda timoma, %70’inde timik hiperplazi verilir. Timomalı tüm hastalar timektomi adayıdır.",
      "Mediastinal kitleler VCSS, Horner, rekürren laringeal sinir paralizisi ve plevral/perikardiyal efüzyon yapabilir."
    ],
    traps: ["Nörofibrom anterior değil posterior kompartmandadır.", "Bochdalek hernisi posterior diyafram kaynaklıdır; orta mediasten kitlesi değildir."],
    source: "Mediasten s.2-33; 2022 çıkmış s.2-6"
  },
  {
    id: "toraks-travmasi", no: "14", title: "Toraks travması", priority: 5,
    summary: "ABC, hayatı tehdit eden altılı, hemotoraks eşikleri ve duvar yaralanmaları.",
    high: [
      "Primer değerlendirme: hava yolu obstrüksiyonu, tansiyon pnömotoraks, açık pnömotoraks, masif hemotoraks, yelken göğüs ve kardiyak tamponad.",
      "Sekonder: pulmoner/miyokard kontüzyonu, trakeobronşiyal-özofagus yaralanması, aort/büyük damar ve diyafram yaralanması.",
      "Künt travmada en sık eşlik eden yaralanma ekstremite fraktürüdür (%54).",
      "Masif hemotoraks/torakotomi: ilk drenaj >1500 mL; 2-4 saatte >200 mL/saat; 6-8 saatte durmayan kanama; 24 saatte >1500 mL; hemodinamik instabilite veya büyük damar/kalp yaralanması.",
      "Yelken göğüs ardışık en az üç kostanın iki yerden kırılmasıyla serbest segment ve paradoksal solunum oluşturur; mortalite/morbiditeyi pulmoner kontüzyon ve solunum yetmezliği belirler.",
      "Sternum fraktürü lateral akciğer grafisi/BT ile değerlendirilir; miyokard kontüzyonu, büyük damar yaralanması ve tamponad eşlik edebilir."
    ],
    traps: ["Pulmoner kontüzyon genellikle cerrahi öncelikli değildir; yakın izlem ve destek tedavisi gerekir.", "Yatarak çekilen normal akciğer grafisi, az miktardaki kanı veya erken kontüzyonu dışlamaz."],
    source: "Toraks travmaları s.2-117; 2022 çıkmış s.1-6; göğüs cerrahisi sorular s.6,10-16"
  },
  {
    id: "akciger-tumorleri", no: "15", title: "Akciğer tümörleri ve soliter nodül", priority: 5,
    summary: "Kanser tipleri, nodül kalsifikasyonu, PET tuzakları ve cerrahi kontrendikasyonlar.",
    high: [
      "En sık primer akciğer kanseri adenokarsinomdur. Adenokarsinom daha periferik; skuamöz ve küçük hücreli daha santral eğilimlidir.",
      "Benign nodül kalsifikasyonları: santral, diffüz, popcorn, laminer. Malign lehine: retiküler, noktasal, amorf ve ekzantrik.",
      "Soliter pulmoner nodülde atelektazi, hiler dolgunluk, plevral efüzyon ve perikardiyal efüzyon eşlik etmemelidir.",
      "PET yanlış negatif: karsinoid, müsinöz adenokarsinom, preinvaziv/minimal invaziv lezyonlar ve kontrolsüz hiperglisemi. Enfeksiyon ve inflamasyon yanlış pozitiftir.",
      "Akciğer kanserinde N3, M1, malign plevral efüzyon ve çoğu T4/N2 cerrahiye engeldir. Soliter beyin metastazı seçilmiş hastada mutlak dışlama değildir.",
      "Hamartom en sık benign akciğer tümörüdür; yağ dansitesi ve popcorn kalsifikasyon, <2,5 cm periferik tanılı lezyonda takip seçeneği."
    ],
    traps: ["Wedge rezeksiyon non-anatomiktir; segmentektomi anatomiktir.", "PET’te hiperglisemi yanlış negatiflik yapar; küçük hücreli kanser yüksek metabolik aktiviteyle güçlü tutulum gösterir."],
    source: "Akciğerin diğer tümörleri s.2-79; 2022 çıkmış s.1,3,4,6; soru PDF’leri"
  },
  {
    id: "aciller", no: "16", title: "Göğüs cerrahisi acilleri", priority: 5,
    summary: "Acilde ilk bakı, spontan plevral olaylar, yabancı cisim ve özofagus perforasyonu.",
    high: [
      "İlk sıra A-B-C-D-E; dispnede önce hava yolu açılır. Tansiyon pnömotoraks şüphesinde görüntüleme beklenmez.",
      "Spontan aciller: pnömotoraks, hemotoraks, hemopnömotoraks, pnömomediastinum, masif hemoptizi ve spontan özofagus rüptürü.",
      "Yabancı cisimde tam üst hava yolu obstrüksiyonu ani morarma/apne; ana bronşta tek taraflı wheezing ve tekrarlayan pnömoni görülür. Grafi %80 normal olabilir.",
      "Özofagus yabancı cismi en sık birinci anatomik darlıkta; tanı konunca ödem ve perforasyon riski nedeniyle çıkarılmalıdır.",
      "Boerhaave tam kat spontan özofagus rüptürü; Mallory-Weiss mukozal yırtıktır. Mackler triadı kaynakta alkol, göğüs ağrısı ve ciltaltı amfizemi olarak verilir.",
      "Özofagus perforasyonunda suda eriyen kontrastlı pasaj grafisi ve BT; erken tanı/girişim sağkalımın temelidir."
    ],
    traps: ["Yabancı cisim görünmüyorsa körlemesine parmakla çıkarma yapılmaz.", "Özofagusun serozası yoktur; mediastinal/plevral sepsis hızla gelişebilir."],
    source: "Göğüs cerrahisi acilleri s.2-78; Muayene ve travma sunumları"
  }
];

const pastQuestions = [
  ["Pnömotoraks nedir, tipleri nelerdir?", "Visseral ve parietal plevra arasına hava girmesidir. Kaynaklarda basit, açık ve tansiyon tipleri verilir.", "Plevra / pnömotoraks", "Buna bak mutlaka s.5; Cerrahi sorular s.5"],
  ["Tansiyon pnömotoraksta tedavi neden görüntüleme beklemez?", "Klinik tanıdır. Basınçlı hava venöz dönüşü bozup şoka götürebilir; acil iğne/parmak dekompresyonu ve ardından tüp torakostomi gerekir.", "Plevra / pnömotoraks", "Plevra sunumu s.31-32"],
  ["Stabil pnömotoraks hastasının kriterleri nelerdir?", "Solunum <24/dk, istirahatte dispne yok, nabız 60-120, normal kan basıncı, oda havasında satürasyon >%90 ve hemotoraks yok.", "Plevra / pnömotoraks", "Cerrahi sorular s.6"],
  ["Light kriterlerini yazınız.", "Plevra protein/serum protein >0,5; plevra LDH/serum LDH >0,6; plevra LDH serum üst normal sınırının 2/3’ünden fazla. Bir ölçütün varlığı eksüda için yeterlidir.", "Plevra / pnömotoraks", "Plevra sunumu s.57"],
  ["Pnömotoraksta cerrahi endikasyonlarından biri değildir?", "Küçük/lateral pnömotoraks tek başına cerrahi endikasyon değildir. 7+ gün kaçak, nüks, bilateral, drene edilemeyen hemotoraks ve ekspanse olmayan akciğer endikasyonlardandır.", "Plevra / pnömotoraks", "Buna bak mutlaka s.13"],
  ["Plevral sıvının varlığı ve yapısı hakkında kesin bilgi hangi yöntemle alınır?", "Torasentez.", "Plevra / pnömotoraks", "2022 çıkmış s.4"],
  ["Şilotoraksı diğer efüzyonlardan ayıran temel özellik nedir?", "Yüksek trigliserid ve şilomikron varlığı; kaynakta trigliserid >1,2 mmol/L ve kolesterol/trigliserid <1 verilir.", "Plevra / pnömotoraks", "2022 çıkmış s.1; Plevra s.74"],
  ["Ampiyemin evrelerini yazınız.", "Evre 1 eksüdatif, evre 2 fibrinopürülan, evre 3 organize/fibrotoraks.", "Plevra / pnömotoraks", "Plevra s.65"],
  ["Akciğer absesi ile ampiyem arasındaki temel fark nedir?", "Abse akciğer parankimi içinde püy içeren kavite; ampiyem plevral boşlukta püy birikimidir.", "Bronşektazi / abse", "Bronşektazi s.9; sözlü notu"],
  ["Akciğer absesinde tipik grafi bulgusu nedir?", "Hava-sıvı seviyesi veren kaviter lezyon.", "Bronşektazi / abse", "Bronşektazi s.9-10"],
  ["Akciğer absesinde en sık aerobik etken hangisidir?", "Klebsiella pneumoniae (kaynak sunuma göre).", "Bronşektazi / abse", "Bronşektazi s.16"],
  ["Bronşektaziyi tanımlayınız.", "Bronş duvarı destrüksiyonu ile birlikte gelişen kalıcı ve geri dönüşümsüz bronş dilatasyonu.", "Bronşektazi / abse", "Buna bak mutlaka s.12; Bronşektazi s.1"],
  ["Masif hemoptizide ilk yaklaşım nedir?", "Hava yolu açıklığı, oksijen ve hemodinamik stabilizasyon. Kanayan taraf aşağı; hipoksi/distres varsa entübasyon ve aspirasyon.", "Hemoptizi", "Hemoptizi s.6"],
  ["Hemoptizi ve hematemez arasında üç fark yazınız.", "Hemoptizi öksürükle, taze kırmızı-köpüklü ve alkali; hematemez kusmayla, kahve telvesi/gıda artığı içerebilir ve asidiktir.", "Hemoptizi", "Hemoptizi s.5; Buna bak mutlaka s.7-8"],
  ["Hemoptizinin en sık damar kaynağı nedir?", "Bronşiyal arterler, %90’dan fazla.", "Hemoptizi", "Hemoptizi s.4"],
  ["Pulmoner sekestrasyon nedir?", "Normal bronşiyal-vasküler yapılardan ayrılan ve bir veya daha fazla sistemik arterle beslenen akciğer dokusudur.", "Konjenital", "Konjenital s.27"],
  ["İntralober ve ekstralober sekestrasyon farkı nedir?", "Ekstralober ayrı plevral örtüye sahip ve sistemik vene drene; intralober parankim içinde, çoğunlukla pulmoner vene drene olur.", "Konjenital", "Cerrahi sorular s.2-3"],
  ["En sık konjenital akciğer hastalığı hangisidir?", "Pulmoner sekestrasyon.", "Konjenital", "Konjenital s.27; çoklu çıkmış"],
  ["Trakeomalazi hangi anatomik kayıpla karakterizedir?", "Trakeada elastik doku ve bağ doku kaybı.", "Konjenital", "Çıkmış 25-26 s.3"],
  ["Trakeal bronkusta hangi tümörün gelişim riski artar?", "Karsinoid tümör.", "Konjenital", "Konjenital s.15; örnek sorular s.2"],
  ["Konjenital trakeobronşiyal anomalilerden beş örnek veriniz.", "Trakeal agenezi/atrezi, trakeomalazi, trakeal stenoz/ring, trakeal bronkus/divertikül, bronşiyal atrezi; bronkojenik kist de sayılabilir.", "Konjenital", "Buna bak mutlaka s.4"],
  ["Kist hidatik etkeni ve bulaş yolu nedir?", "E. granulosus larva formu; ana konak köpek/kurt/çakal dışkısından sebze-meyveye, insana çoğunlukla oral yolla.", "Kist hidatik", "Kist Hidatik s.2-4"],
  ["Kist hidatiğin katmanlarını sayınız.", "Perikist, ektokist/kutiküla ve endokist/germinatif tabaka.", "Kist hidatik", "Kist Hidatik s.5; sözlü notları"],
  ["Kist hidatikte lobektomi ne zaman gerekir?", "Medikale yanıtsız pulmoner süpürasyon, aynı lobda multipl kist, ciddi kanama veya bronşektaziye yol açan kist.", "Kist hidatik", "Kist Hidatik s.12"],
  ["Kist hidatik en sık hangi organı tutar?", "Karaciğer (%55), ardından akciğer (%26).", "Kist hidatik", "Kist Hidatik s.7"],
  ["TOS tanımı nedir?", "Toraks üst çıkışında A/V subclavia ve brakiyal pleksusun basıya uğramasıdır.", "TOS", "TOS s.2-5"],
  ["TOS fizik muayene testlerini sayınız.", "Adson, kostoklaviküler/Halsted, hiperabdüksiyon/Wright ve abdüksiyon-eksternal rotasyon/Roos.", "TOS", "TOS s.22-25"],
  ["TOS’ta cerrahi için ulnar iletim eşiği nedir?", "Kaynakta UNCV <60 m/sn cerrahi; >60 m/sn FTR olarak verilir.", "TOS", "TOS s.29,33"],
  ["TOS’ta en sık ameliyat endikasyonu olan semptom nedir?", "Motor defekt ve parestezi.", "TOS", "Buna bak mutlaka s.15"],
  ["Ön mediastenin en sık tümörü nedir?", "Timoma.", "Mediasten", "Buna bak mutlaka s.5; 2022 çıkmış s.4"],
  ["Posterior mediastende en sık kitle hangisidir?", "Nörojenik tümör.", "Mediasten", "Mediasten s.2; Buna bak mutlaka s.16"],
  ["Mediasten lezyonlarında üç biyokimyasal belirteç yazınız.", "AFP, beta-HCG ve LDH.", "Mediasten", "Buna bak mutlaka s.11"],
  ["Timoma ile sık ilişkili sistemik hastalık hangisidir?", "Myasthenia gravis.", "Mediasten", "Çıkmış 25-26 s.4; Mediasten s.18"],
  ["Mediasten kitlelerinden hangisi anterior kompartmandan kaynaklanmaz?", "Nörofibrom; posterior mediasten kökenlidir.", "Mediasten", "Buna bak mutlaka s.14; 2022 çıkmış s.3"],
  ["Toraks travmasında primer değerlendirmedeki ölümcül altılıyı sayınız.", "Hava yolu obstrüksiyonu, tansiyon pnömotoraks, açık pnömotoraks, masif hemotoraks, yelken göğüs ve kardiyak tamponad.", "Toraks travması", "Travma s.8"],
  ["Künt toraks travmasında en sık eşlik eden yaralanma nedir?", "Ekstremite fraktürü (%54).", "Toraks travması", "Travma s.4"],
  ["Pulmoner kontüzyonda uygun yaklaşım nedir?", "Yakın yoğun bakım izlemi ve destek tedavisi; cerrahi öncelikli değildir.", "Toraks travması", "Çıkmış 25-26 s.2; 2022 çıkmış s.2"],
  ["Masif hemotoraksta acil torakotomi eşiği nedir?", "İlk tüp drenajında >1500 mL veya 2-4 saat boyunca >200 mL/saat; devam eden kanama ve instabilite de endikasyondur.", "Toraks travması", "Göğüs cerrahisi sorular s.10,15"],
  ["Yelken göğüste mortalite ve morbiditeyi belirleyen temel durum nedir?", "Pulmoner kontüzyon ve buna bağlı hipoventilasyon/hipoksi; paradoksal hareket tablonun bulgusudur.", "Toraks travması", "2022 çıkmış s.5; travma sunumu"],
  ["Sternum fraktürüyle hangi kardiyak komplikasyon birlikte düşünülebilir?", "Miyokard kontüzyonu; EKG değişikliği ve troponin yüksekliği destekler.", "Toraks travması", "Çıkmış 25-26 s.3"],
  ["En sık görülen göğüs duvarı deformitesi hangisidir?", "Pektus ekskavatum.", "Göğüs duvarı", "Çoklu çıkmış; Göğüs duvarı s.27"],
  ["Haller indeksi için operasyon eşiği nedir?", "3,25 ve üzeri.", "Göğüs duvarı", "Göğüs duvarı s.43"],
  ["Poland sendromunun temel özellikleri nelerdir?", "Pektoralis majör/minör yokluğu veya hipoplazisi, meme dokusu anomalisi ve ipsilateral el anomalileri.", "Göğüs duvarı", "Göğüs duvarı s.62; 2022 çıkmış s.1"],
  ["Primer toraks duvarının en sık malign yumuşak doku tümörü nedir?", "Desmoid tümör.", "Göğüs duvarı", "Göğüs duvarı s.4,6; sözlü notu"],
  ["En sık benign özofagus tümörü hangisidir?", "Leiomyom.", "Özofagus", "Benign özofagus s.9; 2022 çıkmış s.4"],
  ["Koroziv özofagus yanığında akut dönem komplikasyonu olmayan hangisidir?", "Striktür; geç dönemde ortalama iki hafta içinde gelişir.", "Özofagus", "Çıkmış s.4"],
  ["Özofagus kanserinde T evresini en iyi hangi yöntem değerlendirir?", "Endosonografi/EUS.", "Özofagus", "2022 çıkmış s.2"],
  ["Özofagus kanserinde M faktörünü en iyi hangi yöntem değerlendirir?", "PET-BT.", "Özofagus", "Çıkmış s.5"],
  ["Trakeanın en sık benign tümörü nedir?", "Ders slaydına göre kondrom. Bir soru notunda papillom işaretli; slaytla çeliştiği için kondrom esas alındı.", "Trakea", "Trakea s.14; Buna bak mutlaka s.9"],
  ["Postentübasyon trakeal stenozda en iyi preoperatif tanı yöntemi nedir?", "Rijit bronkoskopi.", "Trakea", "Trakea s.18"],
  ["Akciğer kanserinde en sık histolojik tip hangisidir?", "Adenokarsinom.", "Akciğer tümörleri", "Buna bak mutlaka s.12; Çıkmış 25-26 s.1"],
  ["Benign nodül kalsifikasyonlarını sayınız.", "Santral, diffüz, popcorn ve laminer.", "Akciğer tümörleri", "Buna bak mutlaka s.6; sorular s.12"],
  ["PET-BT’de yanlış negatiflik yapabilen üç durum nedir?", "Karsinoid, müsinöz adenokarsinom, preinvaziv/minimal invaziv tümör; kontrolsüz hiperglisemi de yanlış negatiflik yapabilir.", "Akciğer tümörleri", "Göğüs cerrahisi sorular s.13"],
  ["Hangi akciğer rezeksiyonu anatomik değildir?", "Wedge/kama rezeksiyon.", "Akciğer tümörleri", "2022 çıkmış s.3"],
  ["Akciğer kanserinde cerrahiye mutlak engel olan nodal evre hangisidir?", "N3.", "Akciğer tümörleri", "Diğer tümörler s.37; Buna bak mutlaka s.2"],
  ["CT eşliğinde ince iğne biyopsisinin en sık komplikasyonu nedir?", "Pnömotoraks.", "Muayene / tanı", "Çıkmış 25-26 s.3; İnvazif tanı s.11"],
  ["Santral, hiler kaynaklı 6 cm spiküler kitlede ilk invaziv yöntem nedir?", "Bronkoskopi.", "Muayene / tanı", "2022 çıkmış s.6"],
  ["Rijit bronkoskopi komplikasyonlarından beşini sayınız.", "Pnömotoraks, kanama/hemoptizi, hipoksemi, bronş perforasyonu, larinks ödemi ve bronkospazm.", "Muayene / tanı", "İnvazif tanı s.6; örnek sorular s.2"]
].map((q, index) => ({ id: `q${index + 1}`, question: q[0], answer: q[1], topic: q[2], source: q[3] }));

const predictions = [
  [96, "Pnömotoraks: tanım, tip, stabil hasta ve tedavi", "Beş ayrı soru dosyasında tekrar ediyor; hem yazılı hem sözlü listelerinde var.", "Tanım → basit/açık/tansiyon → stabil kriterleri → gözlem/aspirasyon/tüp → cerrahi endikasyonları."],
  [94, "Light kriterleri ve transüda-eksüda ayrımı", "Dört soru kaynağı ve sözlü listesinde doğrudan sorulmuş.", "0,5 protein; 0,6 LDH; serum üst normal LDH’nin 2/3’ü. Bir tanesi pozitifse eksüda."],
  [93, "Toraks travmasında ilk bakı ve hemotoraks eşikleri", "Vaka soruları, sözlü ve testlerde aynı karar noktaları dönüyor.", "ABC → ölümcül altılı → tüp → ilk drenaj 1500 mL / 200 mL-saat → torakotomi."],
  [92, "Konjenital anomaliler ve pulmoner sekestrasyon", "Dört kaynakta hem sayma hem karşılaştırma biçiminde sorulmuş.", "Trakeobronşiyal liste + pulmoner liste + en sık sekestrasyon + intra/ekstra farkı."],
  [91, "Kist hidatik: bulaş, katman, klinik ve tedavi", "Yazılı, sözlü ve vaka notlarında tekrarlı.", "E. granulosus → köpek/dışkı/sebze → karaciğer/akciğer → perikist-ektokist-endokist → parankim koruyucu cerrahi."],
  [90, "İnvaziv ve noninvaziv tanı yöntemleri", "En az dört soru belgesinde birebir istenmiş.", "İki sütun ezberi; santral kitle bronkoskopi, periferik kitle TTİAB, mediasten mediastinoskopi/VATS."],
  [89, "Mediasten kompartmanları ve timoma", "Anterior/posterior yerleşim, belirteç ve MG birlikteliği sık tekrarlanıyor.", "Anterior timoma/4T; orta kist-LAP; posterior nörojenik; AFP-betaHCG-LDH; timoma-MG."],
  [88, "TOS testleri ve cerrahi eşiği", "Dört soru kaynağında tanım, test ve ameliyat ölçütü sorulmuş.", "A/V subclavia + pleksus; Adson/Halsted/Wright/Roos; UNCV <60 m/sn ve motor defekt."],
  [87, "Göğüs duvarı deformiteleri ve ameliyat zamanı", "Pektus ve Poland testlerde, ameliyat yaşları klasik soru olarak geçiyor.", "En sık ekskavatum; Haller ≥3,25; pektuslar 10-16; cleft/ektopia neonatal; Poland postpubertal."],
  [86, "Hemoptizi-hematemez ayrımı ve masif hemoptizi yönetimi", "Tanım, fark ve yaklaşım soruları ayrı belgelerde tekrarlanıyor.", "Öksürük/taze köpüklü alkali → hava yolu → kanayan taraf aşağı → BT/FOB → embolizasyon."],
  [84, "Akciğer kanseri cerrahi kontrendikasyonları", "N3/M1, malign efüzyon ve seçilmiş metastazlar defalarca soruluyor.", "N3, M1, malign plevral efüzyon; çoğu T4/N2; soliter beyin metastazı mutlak dışlama değil."],
  [83, "Soliter pulmoner nodül kalsifikasyonu ve PET tuzakları", "Kalsifikasyon desenleri ile PET yanlış negatifleri birden fazla testte var.", "Benign: santral-diffüz-popcorn-laminer; malign: retiküler-noktasal-amorf-ekzantrik; karsinoid/müsinöz/hiperglisemi."],
  [82, "Bronşektazi ve akciğer absesi", "Vaka, tanım ve etken soruları üç kaynakta çıkmış.", "Kalıcı bronş dilatasyonu → lokalize/diffüz → BT; abse parankimde püy + hava-sıvı; Klebsiella."],
  [81, "Benign özofagus tümörleri ve biyopsi tuzakları", "Leiomyom, kist ve hemanjiom notları tekrar ediyor.", "En sık leiomyom; EUS; leiomyom/kist/hemangiomda biyopsi riskleri; semptomatikte cerrahi."],
  [80, "Trakeal tümörler ve postentübasyon stenoz", "Kondrom, malign tipler ve rijit bronkoskopi klasikleşmiş.", "Malign: skuamöz + adenoid kistik; benign en sık kondrom; stenoz nedeni yüksek basınçlı kaf; tanı rijit bronkoskopi."],
  [78, "Hiperhidroz tanı kriterleri ve sempatektomi seviyeleri", "Tanı kriterleri, nişasta-iyot ve T2-T3-T4 sıralaması birçok soruda.", "6 ay + sekonder neden yok + 2 kriter; yüz T2, el T3, aksilla T4; kompansatuvar terleme."],
  [76, "Özofagus kanseri T ve M evreleme yöntemi", "EUS ve PET-BT ayrımı sınav formatında sorulmuş.", "T için EUS; M için PET-BT; T1 mukoza/submukoza, T2 kas, T3 adventisya, T4 komşu."],
  [75, "Plevral efüzyonda tanı ve ampiyem yönetimi", "Torasentez, evreler ve drenaj sözlü listesinde.", "Görüntüleme → torasentez → Light → pH/LDH/glukoz → antibiyotik + drenaj → VATS/dekortikasyon."],
  [73, "Koroziv özofagus yaralanması", "Akut/geç komplikasyon ve işe yaramayan işlemler çıkmış.", "Alkali likefaksiyon, asit koagülasyon; ilk 24 saatte endoskopi; kusturma/lavaj/nötralizasyon yok; geçte striktür."],
  [72, "Yelken göğüs ve pulmoner kontüzyon", "Travma vakalarında tanım, mortalite nedeni ve tedavi ayrımı soruluyor.", "Serbest segment/paradoksal solunum; asıl risk kontüzyon-hipoksi; destek, ağrı kontrolü, ventilasyon."]
].map((p, index) => ({ id: `p${index + 1}`, chance: p[0], title: p[1], why: p[2], skeleton: p[3] }));

const quickTables = [
  { title: "Pnömotoraks – hemotoraks – kontüzyon", headers: ["Tablo", "Oskültasyon", "Perküsyon / grafi", "İlk yaklaşım"], rows: [
    ["Pnömotoraks", "Azalmış/yok", "Hipersonorite, plevra hattı", "Stabile göre gözlem/aspirasyon/tüp"],
    ["Tansiyon pnömotoraks", "Tek taraflı kayıp", "Hipersonorite, mediastinal karşı şift", "Görüntüleme beklemeden dekompresyon, sonra tüp"],
    ["Hemotoraks", "Azalmış", "Matite, sıvı", "Tüp torakostomi; eşik varsa torakotomi"],
    ["Pulmoner kontüzyon", "Raller/azalma", "Parankimal infiltrasyon", "Yoğun izlem ve destek tedavisi"]
  ]},
  { title: "Light kriterleri ve sıvı paternleri", headers: ["Ölçüt", "Eksüda eşiği", "Hatırlatma"], rows: [
    ["Protein oranı", ">0,5", "Plevra proteini / serum proteini"],
    ["LDH oranı", ">0,6", "Plevra LDH / serum LDH"],
    ["Mutlak LDH", "> serum üst normalinin 2/3’ü", "Bir kriter yeterli"],
    ["Transüda", "Hidrostatik ↑ / onkotik ↓", "Kalp yetmezliği, siroz, nefrotik"],
    ["Eksüda", "Geçirgenlik ↑", "Malignite, enfeksiyon, hemotoraks, şilotoraks"]
  ]},
  { title: "Mediasten kompartman haritası", headers: ["Anterior", "Orta", "Posterior"], rows: [
    ["Timoma (en sık)", "Kistler", "Nörojenik tümör (en sık)"],
    ["Lenfoma", "Lenfadenopati", "Nörofibrom / schwannom"],
    ["Germ hücreli tümör", "Perikardiyal/bronkojenik kist", "Nöroenterik lezyon"],
    ["Tiroid/paratiroid", "Büyük damar yapıları", "Bochdalek hernisi"]
  ]},
  { title: "Sekestrasyon karşılaştırması", headers: ["Özellik", "Ekstralober", "İntralober"], rows: [
    ["Plevra", "Ayrı visseral plevra", "Akciğer parankimi içinde"],
    ["Sıklık", "%24", "%74"],
    ["Yer", "%90 sol alt lob-diyafram arası", "%97 sol alt lob"],
    ["Arter", "Aorta, çoğunlukla abdominal", "İnen/abdominal aorta"],
    ["Ven", "Sistemik ven", "Pulmoner ven"],
    ["Önemli ipucu", "Eşlik eden anomaliler", "Sol-sol şant, sırtta pansistolik üfürüm"]
  ]},
  { title: "Nodül kalsifikasyonu ve PET", headers: ["Başlık", "Benign / düşük tutulum", "Malign / yüksek risk"], rows: [
    ["Kalsifikasyon", "Santral, diffüz, popcorn, laminer", "Retiküler, noktasal, amorf, ekzantrik"],
    ["PET yanlış negatif", "Karsinoid, müsinöz adeno, preinvaziv, hiperglisemi", "Küçük hücreli genellikle güçlü tutar"],
    ["PET yanlış pozitif", "Enfeksiyon, inflamasyon", "Sonucu klinik/radyolojiyle bağdaştır"]
  ]},
  { title: "Hemoptizi – hematemez", headers: ["Özellik", "Hemoptizi", "Hematemez"], rows: [
    ["Eylem", "Öksürük", "Bulantı-kusma"],
    ["Görünüm", "Taze kırmızı, köpüklü, pıhtılı", "Kahve telvesi, gıda artığı"],
    ["Reaksiyon", "Alkali", "Asidik"],
    ["Eşlik", "Solunumsal yakınma", "GİS öyküsü"]
  ]},
  { title: "Travma torakotomi eşikleri", headers: ["Durum", "Eşik / bulgu", "Karar"], rows: [
    ["İlk tüp drenajı", ">1500 mL", "Acil torakotomi"],
    ["Devam eden drenaj", ">200 mL/saat, 2-4 saat", "Acil torakotomi"],
    ["Uzamış kanama", "6-8 saatte durmama", "Cerrahi değerlendirme"],
    ["24 saat toplam", ">1500 mL", "Cerrahi değerlendirme"],
    ["Diğer", "Kalp/büyük damar, tamponad, instabilite", "Acil girişim"]
  ]},
  { title: "Hiperhidroz cerrahi seviyeleri", headers: ["Bölge", "Seviye", "Özel not"], rows: [
    ["Yüz", "T2", "Bradikardi riski"],
    ["Palmar", "T3", "Bir slaytta T3-4 ifadesi de var"],
    ["Aksiller", "T4", "Kunt lifleri de koterize edilmeli"],
    ["Plantar", "Lomber blokaj", "Torakal sempatektomi alanı değil"]
  ]}
];

const flashcards = [
  ["Light: protein oranı?", ">0,5"], ["Light: LDH oranı?", ">0,6"], ["Light: mutlak LDH?", "Serum üst normalinin 2/3’ünden fazla"],
  ["Tansiyon pnömotoraks: tanı türü?", "Klinik tanı; görüntüleme için tedavi geciktirilmez"], ["Stabil hasta satürasyonu?", "Oda havasında >%90"],
  ["Pnömotoraksta kalıcı hava kaçağı cerrahi eşiği?", "7 gün ve üzeri"], ["Açık pnömotoraks pansumanı?", "Üç tarafı kapalı"],
  ["Masif hemotoraks ilk drenaj eşiği?", ">1500 mL"], ["Devam eden hemotoraks drenaj eşiği?", ">200 mL/saat, 2-4 saat"],
  ["Künt travmada en sık eşlik eden yaralanma?", "Ekstremite fraktürü"], ["Sternum fraktüründe kardiyak eşlik?", "Miyokard kontüzyonu"],
  ["Yelken göğüs tanımı?", "Ardışık en az 3 kostanın iki yerden kırılmasıyla serbest segment ve paradoksal solunum"],
  ["En sık konjenital akciğer hastalığı?", "Pulmoner sekestrasyon"], ["İntralober sekestrasyon venöz drenajı?", "Pulmoner ven"],
  ["Trakeomalazide kaybolan yapılar?", "Elastik ve bağ doku"], ["Trakeal bronkusta artan tümör riski?", "Karsinoid"],
  ["Kist hidatik etkeni?", "Echinococcus granulosus larvası"], ["Kist hidatik katmanları?", "Perikist – ektokist/kutiküla – endokist/germinatif"],
  ["Kist hidatik en sık organ?", "Karaciğer, sonra akciğer"], ["Kist hidatik medikal tedavi?", "Albendazol 10 mg/kg/gün"],
  ["TOS’ta klasik test?", "Adson"], ["TOS cerrahi UNCV eşiği?", "<60 m/sn"], ["TOS en sık ameliyat semptomu?", "Motor defekt ve parestezi"],
  ["Anterior mediasten en sık tümör?", "Timoma"], ["Posterior mediasten en sık tümör?", "Nörojenik tümör"], ["Timoma birlikteliği?", "Myasthenia gravis"],
  ["Mediasten belirteç üçlüsü?", "AFP – beta-HCG – LDH"], ["En sık benign özofagus tümörü?", "Leiomyom"],
  ["Özofagus kanseri T evreleme?", "EUS"], ["Özofagus kanseri M evreleme?", "PET-BT"], ["Özofagusta olmayan tabaka?", "Seroza"],
  ["En sık göğüs duvarı deformitesi?", "Pektus ekskavatum"], ["Haller operasyon eşiği?", "≥3,25"],
  ["En sık malign yumuşak doku göğüs duvarı tümörü?", "Desmoid"], ["Pektus ekskavatum ameliyatı?", "Nuss (veya açık Ravitch)"],
  ["En sık benign trakea tümörü?", "Kondrom"], ["En sık malign trakea tümörleri?", "Skuamöz hücreli ve adenoid kistik"],
  ["Postentübasyon stenoz tanısı?", "Rijit bronkoskopi"], ["Hemoptizi damar kaynağı?", "Bronşiyal arterler >%90"],
  ["Masif hemoptizide pozisyon?", "Kanayan taraf aşağı"], ["En sık akciğer kanseri?", "Adenokarsinom"], ["Non-anatomik rezeksiyon?", "Wedge"],
  ["Benign nodül kalsifikasyonları?", "Santral, diffüz, popcorn, laminer"], ["PET yanlış negatif tümör?", "Karsinoid veya müsinöz adenokarsinom"],
  ["Bronşektazi tanımı?", "Duvar destrüksiyonuyla kalıcı bronş dilatasyonu"], ["Akciğer absesi grafi?", "Hava-sıvı seviyeli kavite"],
  ["Akciğer absesi en sık aerobik etken?", "Klebsiella pneumoniae (kaynağa göre)"], ["TTİAB en sık komplikasyon?", "Pnömotoraks"],
  ["Hiperhidroz yüz/el/aksilla seviyeleri?", "T2 / T3 / T4"], ["Primer hiperhidroz tanısında süre?", "En az 6 ay"]
].map((item, index) => ({ id: `f${index + 1}`, front: item[0], back: item[1] }));

const cases = [
  { id: "c1", title: "Ani dispne + hipotansiyon + tek taraflı sessizlik", diagnosis: "Tansiyon pnömotoraks", steps: ["Klinik tanıyı koy; grafi için bekleme.", "Yüksek akımlı oksijen ve monitörizasyon.", "Acil iğne veya parmak dekompresyonu.", "Ardından tüp torakostomi.", "Sürekli yeniden değerlendirme ve eşlik eden travmayı ara."], source: "Plevra s.31-33; travma s.8" },
  { id: "c2", title: "Travma + tüpte 1600 mL kan", diagnosis: "Masif hemotoraks", steps: ["ABC, iki geniş damar yolu, kan hazırlığı.", "Tüp torakostomi ve drenaj miktarını kaydet.", "İlk drenaj >1500 mL ise acil torakotomi.", "Devam eden >200 mL/saat drenaj veya instabilite de cerrahi endikasyon.", "Kalp ve büyük damar yaralanmasını değerlendir."], source: "Travma ve soru PDF’leri" },
  { id: "c3", title: "Bir su bardağı kan + solunum sıkıntısı", diagnosis: "Masif/tehdit eden hemoptizi", steps: ["Hava yolunu güvenceye al, oksijen ve dolaşımı destekle.", "Kanayan tarafı aşağı yatır.", "Grafi ve kontrastlı BT ile odak/etiyoloji ara.", "FOB ile lokalizasyon ve endobronşiyal kontrol.", "Bronşiyal arter embolizasyonu; uygun ve kontrolsüz olguda cerrahi."], source: "Hemoptizi s.6-10" },
  { id: "c4", title: "Plevral sıvı saptandı", diagnosis: "Efüzyon algoritması", steps: ["Öykü, muayene, grafi/USG/BT.", "Torasentez ile sıvıyı al.", "Light kriterleriyle transüda-eksüda ayır.", "pH, glukoz, LDH, hücre ve mikrobiyolojiye göre komplike sıvı/ampiyemi tanı.", "Transüdada etiyoloji; eksüdada torasentez/kateter/tüp, gerekirse VATS-plöredezis/dekortikasyon."], source: "Plevra s.57-67" },
  { id: "c5", title: "Kol yukarıda ağrı + uyuşma + nabız azalması", diagnosis: "Torasik outlet sendromu", steps: ["Damar ve nörolojik semptomları ayır.", "Adson, kostoklaviküler, Wright ve Roos testleri.", "PA akciğer/lateral servikal grafi, Doppler; gerektiğinde 3B BT/anjiyografi.", "EMG ile UNCV ölç.", ">60 m/sn ise FTR; <60 m/sn, kemik patoloji veya başarısız FTR’de cerrahi."], source: "TOS s.21-34" },
  { id: "c6", title: "Kötü kokulu balgam + hava-sıvı seviyeli kavite", diagnosis: "Akciğer absesi", steps: ["Grafi ve BT ile kavite/efüzyonu değerlendir.", "Balgam ve kültür; aspirasyon riskini sorgula.", "Anaeropları kapsayan uygun antibiyotik.", "Efüzyon/ampiyem varsa plevral örnek ve drenaj.", "Yanıtsızlık veya tümör/yabancı cisim şüphesinde bronkoskopi; seçilmiş olguda drenaj/cerrahi."], source: "Bronşektazi s.9-18" },
  { id: "c7", title: "Kaya suyu + membran çıkarma", diagnosis: "Rüptüre akciğer kist hidatiği", steps: ["Hava yolu, bronkospazm ve anafilaktik tabloyu değerlendir.", "Grafi/BT ile yer ve komplikasyonu saptar.", "Seroloji negatif olsa da hastalığı dışlama.", "Parankim koruyucu cerrahi: kisti çıkar, bronş ağızlarını dik, boşluğu kapat.", "Endikasyona göre albendazol; belirli şartlarda lobektomi."], source: "Kist Hidatik s.7-12" },
  { id: "c8", title: "Şiddetli kusma + göğüs ağrısı + ciltaltı amfizem", diagnosis: "Boerhaave sendromu", steps: ["Tam kat özofagus rüptüründen şüphelen.", "Oral alımı kes, sıvı ve geniş spektrum antibiyotik başla.", "Boyun-göğüs-üst abdomen grafileri.", "Suda eriyen kontrastlı özofagografi ve BT.", "Erken cerrahi/endoskopik kontrol ve mediastinal-plevral drenaj planla."], source: "Aciller s.61-71" }
];

const sources = [
  ["0-İK Göğüs Cerrahisinde Muayene.pptx", "46 slayt", "Muayene, deformite, rezeksiyon ve temel fizik bulgular"],
  ["0-İK İnvazif Tanı Yöntemleri.pptx", "58 slayt", "Bronkoskopi, biyopsi, mediastinoskopi ve VATS"],
  ["1- Hiperhidroz.pptx", "28 slayt", "Tanı, ölçüm ve tedavi seviyeleri"],
  ["2- Göğüs Duvarı Tümörleri ve Deformiteler.pptx", "78 slayt", "Tümörler, rekonstrüksiyon ve pektus"],
  ["3- Konjenital Akciğer Hastalıkları.ppt", "38 slayt", "Trakeobronşiyal ve pulmoner anomaliler"],
  ["4_5911129142631343941.pdf", "2 sayfa", "El yazılı kurul soru notları"],
  ["4- Benign Özofagial Hastalıklar.pptx", "41 slayt", "Benign tümör, kist ve koroziv yaralanma"],
  ["5- Özofagus Kanserinde Cerrahi.pptx", "21 slayt", "Risk, TNM ve cerrahi çerçeve"],
  ["6- Hemoptizi.pptx", "23 slayt", "Masif hemoptizi ve yönetim"],
  ["7- Trakeanın Cerrahi Hastalıkları.pptx", "22 slayt", "Trakea tümörleri ve stenoz"],
  ["8- Plevranın Cerrahi Hastalıkları.ppt", "88 slayt", "Pnömotoraks, efüzyon, ampiyem ve plevra tümörleri"],
  ["9- TOS new.pptx", "41 slayt", "Torasik outlet sendromu"],
  ["10- Kist Hidatik.ppt", "14 slayt", "Bulaş, tanı ve cerrahi"],
  ["11- Bronşektazi.ppt", "18 slayt", "Bronşektazi ve akciğer absesi"],
  ["13- Mediasten.pptx", "33 slayt", "Kompartmanlar, timoma ve MG"],
  ["14-15 Toraks Travması.ppt", "117 slayt", "Travma, hemotoraks ve hayatı tehdit eden tablolar"],
  ["16- Akciğerin Diğer Tümörleri.ppt", "79 slayt", "Nodül, kanser, karsinoid ve metastaz"],
  ["17- Göğüs Cerrahisi Acilleri.ppt", "78 slayt", "Acil yaklaşım, yabancı cisim ve perforasyon"],
  ["Buna Bak Mutlaka.pdf", "20 sayfa", "64 soru ve el yazılı cevaplar"],
  ["Cerrahi Sorular - Cevaplar.pdf", "6 sayfa", "Klasik sorular ve kısa yanıtlar"],
  ["Çıkmış.pdf", "15 sayfa", "Test, klasik ve sözlü soru havuzu"],
  ["Çıkmış 25-26.pdf", "6 sayfa", "Yeni çıkmış testler ve notlar"],
  ["Göğüs Cerrahisi D Grubu Çıkmışlar.pdf", "1 sayfa", "D grubu soru listesi"],
  ["Göğüs Cerrahisi Sorular.pdf", "20 sayfa", "75 örnek soru ve vaka"],
  ["IMG 2022 Çıkmış.pdf", "6 sayfa", "2022 staj sınavı"],
  ["WP Sözlü.pdf", "1 sayfa", "Sözlü başlıkları ve el yazısı özet"],
  ["WP_260224_114014 2.pdf", "5 sayfa", "Açıklamalı test sayfaları"],
  ["WP_260224_114014.pdf", "5 sayfa", "Aynı dosyanın ikinci kopyası"],
].map((s, index) => ({ index: index + 1, name: s[0], pages: s[1], scope: s[2] }));

const state = {
  view: "dashboard",
  topic: null,
  filter: "Tümü",
  flashIndex: 0,
  starred: new Set(JSON.parse(localStorage.getItem("gc-starred") || "[]")),
  doneTopics: new Set(JSON.parse(localStorage.getItem("gc-topics") || "[]")),
  knownCards: new Set(JSON.parse(localStorage.getItem("gc-cards") || "[]")),
  doneCases: new Set(JSON.parse(localStorage.getItem("gc-cases") || "[]")),
};

const esc = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const stars = n => "★".repeat(n) + "☆".repeat(5 - n);
const persist = () => {
  localStorage.setItem("gc-starred", JSON.stringify([...state.starred]));
  localStorage.setItem("gc-topics", JSON.stringify([...state.doneTopics]));
  localStorage.setItem("gc-cards", JSON.stringify([...state.knownCards]));
  localStorage.setItem("gc-cases", JSON.stringify([...state.doneCases]));
  updateProgress();
};

function progressValue() {
  const total = topics.length + flashcards.length + cases.length;
  return Math.round(((state.doneTopics.size + state.knownCards.size + state.doneCases.size) / total) * 100);
}

function updateProgress() {
  const value = progressValue();
  document.querySelector("#side-progress-label").textContent = `${value}%`;
  document.querySelector("#side-progress-bar").style.width = `${value}%`;
  document.querySelectorAll(".dial").forEach(d => { d.style.setProperty("--p", `${value}%`); d.querySelector("strong").textContent = `${value}%`; });
}

function pageHead(id, eyebrow, title, lede, stat, statLabel) {
  return `<header class="page-head"><div><p class="eyebrow">${eyebrow}</p><h2 id="${id}">${title}</h2>${lede ? `<p class="lede">${lede}</p>` : ""}</div>${stat ? `<div class="header-stat"><strong>${stat}</strong><span>${statLabel}</span></div>` : ""}</header>`;
}

function renderDashboard() {
  const target = document.querySelector("#view-dashboard");
  const top = predictions.slice(0, 6);
  target.innerHTML = `
    <div class="dashboard-grid">
      <section class="hero-board">
        <span class="hero-stamp">910 SLAYT/SAYFA • 28 KAYNAK</span>
        <h1 id="dashboard-title">Çamda Can Sıkan Hasta Yakınını <span>Neşterlemelik</span> Göğüs Cerrahisi</h1>
        <div class="hero-actions"><button class="primary" data-view="predictions">★ Yüksek olasılıktan başla</button><button class="secondary" data-view="manage">✓ Hastalığı yönet</button></div>
        <div class="rapid-strip">
          <button data-view="predictions"><b>01</b>Çıkma potansiyeli<small>20 tahmin</small></button>
          <button data-view="tables"><b>02</b>Eşikler ve tablolar<small>8 hızlı tablo</small></button>
          <button data-view="cards"><b>03</b>Kart turu<small>${flashcards.length} kart</small></button>
          <button data-view="past"><b>04</b>Çıkmış turu<small>${pastQuestions.length} soru</small></button>
        </div>
      </section>
      <aside class="monitor">
        <div class="progress-dial"><p class="eyebrow">kurul monitörü</p><div class="dial"><div><strong>${progressValue()}%</strong><small>tamamlandı</small></div></div><small>${state.doneTopics.size} konu • ${state.knownCards.size} kart • ${state.doneCases.size} vaka</small></div>
        <div class="priority-list">${top.map((p, i) => `<div><span class="rank">${String(i + 1).padStart(2, "0")}</span><span>${esc(p.title)}</span><span class="stars">${Math.round(p.chance / 20)}★</span></div>`).join("")}</div>
      </aside>
    </div>
    <div class="section-kicker"><h3>Bugün kapatılacak konu haritası</h3><button class="secondary" data-view="topics">Tüm notları aç</button></div>
    <div class="topic-grid">${topics.slice(0, 8).map(topicCard).join("")}</div>`;
}

function topicCard(topic) {
  const done = state.doneTopics.has(topic.id);
  return `<article class="topic-card ${done ? "completed" : ""}"><div class="meta"><span>${topic.no}</span><span class="stars">${stars(topic.priority)}</span></div><h3>${esc(topic.title)}</h3><p>${esc(topic.summary)}</p><footer><span class="source-pill">${topic.high.length} yüksek verim noktası</span><button class="tiny-button" data-topic="${topic.id}">Aç</button></footer></article>`;
}

function renderTopics() {
  const target = document.querySelector("#view-topics");
  if (state.topic) {
    const t = topics.find(x => x.id === state.topic);
    target.innerHTML = `<button class="back-button" data-topic-back>← Konu haritası</button><article class="topic-detail">${pageHead("topics-title", `KONU ${t.no}`, esc(t.title), esc(t.summary), `${t.priority}/5`, "çıkma önceliği")}
      <div class="detail-grid"><div><section class="note-block"><h3>Yüksek verim anlatım</h3><ul>${t.high.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section><section class="note-block danger"><h3>Dikkat edilmesi gereken yerler</h3><ul>${t.traps.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section></div><aside><section class="note-block gold"><h3>Kaynak izi</h3><p>${esc(t.source)}</p></section><button class="${state.doneTopics.has(t.id) ? "secondary" : "primary"}" data-complete-topic="${t.id}">${state.doneTopics.has(t.id) ? "Tamamlandı ✓" : "Konuyu tamamla"}</button></aside></div></article>`;
  } else {
    target.innerHTML = `${pageHead("topics-title", "16 BÖLÜMLÜK ÇALIŞMA ATLASI", "Konu anlatımları", "Slaytların ana cümleleri, çıkmış soruların yönü ve sınav tuzakları birlikte işlendi.", `${state.doneTopics.size}/${topics.length}`, "tamamlanan konu")}<div class="topic-grid">${topics.map(topicCard).join("")}</div>`;
  }
}

function renderPast() {
  const target = document.querySelector("#view-past");
  const filters = ["Tümü", "★ İşaretli", ...new Set(pastQuestions.map(q => q.topic))];
  let rows = pastQuestions;
  if (state.filter === "★ İşaretli") rows = rows.filter(q => state.starred.has(q.id));
  else if (state.filter !== "Tümü") rows = rows.filter(q => q.topic === state.filter);
  target.innerHTML = `${pageHead("past-title", "ÇIKMIŞ + SÖZLÜ + VAKA", "Çıkmış sorular", "", rows.length, "gösterilen soru")}
    <div class="filter-row">${filters.map(f => `<button class="filter-chip ${f === state.filter ? "active" : ""}" data-filter="${esc(f)}">${esc(f)}</button>`).join("")}</div>
    <div class="question-list">${rows.length ? rows.map(q => `<article class="question-card" data-question-card="${q.id}"><div class="meta"><span>${esc(q.topic)}</span><span>${esc(q.source)}</span></div><h3>${esc(q.question)}</h3><button class="star-button ${state.starred.has(q.id) ? "active" : ""}" data-star="${q.id}" aria-label="Soruyu yıldızla">★</button><button class="secondary" data-answer="${q.id}">Cevabı göster</button><div class="answer"><strong>Cevap</strong><p>${esc(q.answer)}</p></div></article>`).join("") : `<div class="empty">Bu filtrede soru yok.</div>`}</div>`;
}

function renderPredictions() {
  document.querySelector("#view-predictions").innerHTML = `${pageHead("predictions-title", "TEKRAR SIKLIĞI + SORU BİÇİMİ", "Çıkma ihtimali olan sorular", "Yüzdeler resmi olasılık değil; yalnızca gönderdiğiniz çıkmışlar, sözlü listeleri ve sunumlardaki vurguların birlikte değerlendirilmesidir.", "20", "öncelikli soru kümesi")}
    <div class="prediction-list">${predictions.map((p, i) => `<article class="prediction-card"><div class="chance">%${p.chance}</div><div><div class="meta"><span>ÖNCELİK ${String(i + 1).padStart(2, "0")}</span><span>${p.chance >= 90 ? "Çok yüksek" : p.chance >= 80 ? "Yüksek" : "Güçlü aday"}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.why)}</p><details><summary>Cevap iskeleti</summary><p>${esc(p.skeleton)}</p></details></div></article>`).join("")}</div>`;
}

function renderTables() {
  document.querySelector("#view-tables").innerHTML = `${pageHead("tables-title", "EŞİKLERİ TEK BAKIŞTA TOPLA", "Hızlı tablolar", "Son tekrar için sayısal eşikler, karşılaştırmalar ve kompartman haritaları.", quickTables.length, "hızlı tablo")}${quickTables.map(t => `<section class="table-wrap"><h3>${esc(t.title)}</h3><table><thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></section>`).join("")}`;
}

function renderCards() {
  const f = flashcards[state.flashIndex];
  document.querySelector("#view-cards").innerHTML = `${pageHead("cards-title", "AKTİF HATIRLAMA", "Öğrenme kartları", "Kartı çevir, cevabı söyle ve bildiğin kartları işaretle. Sıra bu cihazda saklanır.", `${state.knownCards.size}/${flashcards.length}`, "bilinen kart")}
    <div class="flash-stage"><button class="flash-card" id="flash-card" aria-label="Kartı çevir"><div><p class="eyebrow">KART ${state.flashIndex + 1} / ${flashcards.length}</p><h3>${esc(f.front)}</h3><p class="flash-answer">${esc(f.back)}</p><small>Çevirmek için tıkla</small></div></button><aside class="flash-controls"><button class="primary" data-known="${f.id}">${state.knownCards.has(f.id) ? "Biliniyor ✓" : "Biliyordum"}</button><button class="secondary" data-next-card>Sonraki kart</button><button class="secondary" data-random-card>Rastgele kart</button></aside></div>`;
}

function renderManage() {
  document.querySelector("#view-manage").innerHTML = `${pageHead("manage-title", "VAKADAN İLK İŞLEME", "Hastalığı Yönet", "Vaka cümlesinden tanıya, ilk stabilizasyondan cerrahi eşiğe kadar kısa karar akışları.", `${state.doneCases.size}/${cases.length}`, "tamamlanan vaka")}
    <div class="case-list">${cases.map(c => `<article class="case-card"><p class="eyebrow">VAKA AKIŞI</p><h3>${esc(c.title)}</h3><p><strong>Olası tanı:</strong> ${esc(c.diagnosis)}</p><ol class="case-steps">${c.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol><footer><span class="source-pill">${esc(c.source)}</span> <button class="tiny-button" data-case="${c.id}">${state.doneCases.has(c.id) ? "Tamamlandı ✓" : "Akışı tamamla"}</button></footer></article>`).join("")}</div>`;
}

function renderSources() {
  document.querySelector("#view-sources").innerHTML = `${pageHead("sources-title", "28 DOSYALIK ROTA", "Çam Sakura’dan Aydın’a Uzanan Bir Kaynak Haritası", "Her notun hangi soru kümesini beslediğini gösteren kaynak dökümü. İçerik yalnızca bu dosyalardan üretildi.", "910", "toplam slayt/sayfa")}
    <div class="conflict-box"><strong>Kaynak çelişkileri düzeltildi:</strong> “Cerrahi sorular - cevaplar” PDF’sinde invaziv/noninvaziv başlıkları ters; trakea soru notunda “papillom” işaretli olsa da ders slaytı “kondrom (en sık)” diyor. Çalışma alanında sunum sınıflandırması esas alındı ve çelişkiler açıkça notlandı.</div>
    <div class="source-grid">${sources.map(s => `<article class="source-card"><span class="source-index">${String(s.index).padStart(2, "0")}</span><div><h3>${esc(s.name)}</h3><p><strong>${esc(s.pages)}</strong><br>${esc(s.scope)}</p></div></article>`).join("")}</div>`;
}

function renderSearch(query) {
  const q = query.trim().toLocaleLowerCase("tr-TR");
  const target = document.querySelector("#view-search");
  if (!q) return;
  const results = [];
  topics.forEach(t => { const hay = [t.title, t.summary, ...t.high, ...t.traps].join(" ").toLocaleLowerCase("tr-TR"); if (hay.includes(q)) results.push({ type: "Konu", title: t.title, text: t.summary, action: `data-topic="${t.id}"` }); });
  pastQuestions.forEach(x => { const hay = `${x.question} ${x.answer} ${x.topic}`.toLocaleLowerCase("tr-TR"); if (hay.includes(q)) results.push({ type: "Çıkmış soru", title: x.question, text: x.answer, action: `data-view="past"` }); });
  predictions.forEach(x => { const hay = `${x.title} ${x.why} ${x.skeleton}`.toLocaleLowerCase("tr-TR"); if (hay.includes(q)) results.push({ type: "Tahmin", title: x.title, text: x.skeleton, action: `data-view="predictions"` }); });
  target.innerHTML = `${pageHead("search-title", "ARAMA", `“${esc(query)}” için sonuçlar`, "Konu anlatımı, çıkmış soru, cevap iskeleti ve kartlar birlikte tarandı.", results.length, "sonuç")}
    <div class="search-results">${results.length ? results.slice(0, 80).map(r => `<article class="search-result"><p class="eyebrow">${esc(r.type)}</p><button ${r.action}><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p></button></article>`).join("") : `<div class="empty">Eşleşme bulunamadı. Daha kısa bir terim dene.</div>`}</div>`;
  showView("search", false);
}

function renderAll() {
  renderDashboard(); renderTopics(); renderPast(); renderPredictions(); renderTables(); renderCards(); renderManage(); renderSources(); updateProgress();
}

function showView(name, clearSearch = true) {
  state.view = name;
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === `view-${name}`));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  document.querySelector(".sidebar").classList.remove("open");
  document.querySelector("#mobile-menu").setAttribute("aria-expanded", "false");
  if (clearSearch && name !== "search") document.querySelector("#global-search").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 1800);
}

document.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { showView(viewButton.dataset.view); return; }
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) { state.topic = topicButton.dataset.topic; renderTopics(); showView("topics"); return; }
  if (event.target.closest("[data-topic-back]")) { state.topic = null; renderTopics(); return; }
  const complete = event.target.closest("[data-complete-topic]");
  if (complete) { const id = complete.dataset.completeTopic; state.doneTopics.has(id) ? state.doneTopics.delete(id) : state.doneTopics.add(id); persist(); renderTopics(); renderDashboard(); toast("Konu ilerlemesi güncellendi."); return; }
  const filter = event.target.closest("[data-filter]");
  if (filter) { state.filter = filter.dataset.filter; renderPast(); return; }
  const answer = event.target.closest("[data-answer]");
  if (answer) { const card = document.querySelector(`[data-question-card="${answer.dataset.answer}"]`); card.classList.toggle("open"); answer.textContent = card.classList.contains("open") ? "Cevabı kapat" : "Cevabı göster"; return; }
  const star = event.target.closest("[data-star]");
  if (star) { const id = star.dataset.star; state.starred.has(id) ? state.starred.delete(id) : state.starred.add(id); persist(); renderPast(); toast("Yıldızlı soru listesi güncellendi."); return; }
  if (event.target.closest("#flash-card")) { document.querySelector("#flash-card").classList.toggle("revealed"); return; }
  const known = event.target.closest("[data-known]");
  if (known) { const id = known.dataset.known; state.knownCards.has(id) ? state.knownCards.delete(id) : state.knownCards.add(id); persist(); renderCards(); renderDashboard(); return; }
  if (event.target.closest("[data-next-card]")) { state.flashIndex = (state.flashIndex + 1) % flashcards.length; renderCards(); return; }
  if (event.target.closest("[data-random-card]")) { state.flashIndex = Math.floor(Math.random() * flashcards.length); renderCards(); return; }
  const caseButton = event.target.closest("[data-case]");
  if (caseButton) { const id = caseButton.dataset.case; state.doneCases.has(id) ? state.doneCases.delete(id) : state.doneCases.add(id); persist(); renderManage(); renderDashboard(); return; }
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = current === "light" ? "dark" : "light";
  localStorage.setItem("gc-theme", document.documentElement.dataset.theme);
});

document.querySelector("#mobile-menu").addEventListener("click", event => {
  const sidebar = document.querySelector(".sidebar"); sidebar.classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", sidebar.classList.contains("open") ? "true" : "false");
});

let searchTimer;
document.querySelector("#global-search").addEventListener("input", event => {
  clearTimeout(searchTimer); const value = event.target.value; searchTimer = setTimeout(() => value.trim() ? renderSearch(value) : showView("dashboard", false), 120);
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search").focus(); }
  if (event.key === "Escape") { document.querySelector("#global-search").value = ""; showView("dashboard", false); }
});

document.documentElement.dataset.theme = localStorage.getItem("gc-theme") || "light";
document.querySelector("#topic-count").textContent = topics.length;
document.querySelector("#past-count").textContent = pastQuestions.length;
document.querySelector("#prediction-count").textContent = predictions.length;
document.querySelector("#card-count").textContent = flashcards.length;
renderAll();

const entryGate = document.querySelector("#entry-gate");
const entryForm = document.querySelector("#entry-form");
const entryError = document.querySelector("#entry-error");

function closeEntryGate() {
  localStorage.setItem("gc-entry-complete", "1");
  document.body.classList.remove("gate-open");
  entryGate.hidden = true;
}

if (localStorage.getItem("gc-entry-complete") === "1") {
  document.body.classList.remove("gate-open");
  entryGate.hidden = true;
} else {
  window.setTimeout(() => document.querySelector("#visitor-name").focus(), 80);
}

entryForm.addEventListener("submit", event => {
  if (entryForm.dataset.connected !== "true") {
    event.preventDefault();
    entryError.textContent = "Yanıt sistemi hazırlanıyor. Birazdan tekrar dene.";
    return;
  }
  entryError.textContent = "";
  const button = entryForm.querySelector(".entry-submit");
  button.disabled = true;
  button.textContent = "Yanıt gönderiliyor…";
  window.setTimeout(closeEntryGate, 900);
});
