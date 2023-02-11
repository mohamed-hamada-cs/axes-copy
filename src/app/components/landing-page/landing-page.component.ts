import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  ChangeLang() {
    var lang = document.getElementById('changelang')?.innerHTML;
    if (lang == 'Ar') {
      this.Objects = this.Objects_ar;
      document.getElementById('changelang')!.innerHTML = 'En';
    } else {
      this.Objects = this.Objects_en;
      document.getElementById('changelang')!.innerHTML = 'Ar';
    }
  }

  Objects_en = [
    {
      Title: 'Marketing',
      Describtion: `It's not just design and advertising, there's a Lot of stuff behind it.
      You should build your business on integrated marketing plans,
      all of which contribute to enhancing the visibility of your brand
      with a noticeable increase in your sales, and Axes will offer you
      that at the best prices in the market.`,
      Img: 'assets/Pics/Services1.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'en',
      Cat: 'OnlineMarketing',
      Dirc: true,
    },
    {
      Title: 'Branding',
      Describtion: `If someone said to you: Do you Leave your identity, of course
      you will refuse ! 
      So do not accept your brand to be without a real identity.
      Axes will present it to you in a special way.`,
      Img: 'assets/Pics/Services2.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Lg: 'en',
      Cat: 'Branding',
      Dirc: false,
    },
    {
      Title: 'Video Production',
      Describtion: `Many times you want to create a high quality and pro-
      fessional videos in order to promote your business as
      an entrepreneur or to engage your audience if you are
      a content creator, and with Axes we will provide you
      with the best equipment you need with a team with
      great experience in the field, to end up with the best
      video Possible form and quality.`,
      Img: 'assets/Pics/Services3.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'en',
      Cat: 'VideoProduction',
      Dirc: true,
    },
    {
      Title: 'Video Production',
      Describtion: `What is the best time to take a photo?
      Yes, the best time is when Axes cameras capture it, because
      we offer you a distinctive set of equipment that helps to
      bring out the image in its full splendor and the best quality,
      and through which it attracts your audience.`,
      Img: 'assets/Pics/Services4.png',
      sec_Background: 'blackSec',
      But_background: 'blueBut',
      Lg: 'en',
      Cat: 'VideoProduction',
      Dirc: false,
    },
    {
      Title: 'Websites',
      Describtion: `If I asked you what you think about the look of your
      company, what do you think?
      Yes, in the style , the Scenery and other things, This is
      exactly the point that I want to reach. We do not give a
      free template .. We create.`,
      Img: 'assets/Pics/Services5.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'en',
      Cat: 'WebDevelopment',
      Dirc: true,
    },
    {
      Title: 'Mobile Applications',
      Describtion: `It is the field that you must have thought about or will be
      thinking about in the very near future.. Simply why not the
      next useful application is your idea?`,
      Img: 'assets/Pics/Services6.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Lg: 'en',
      Cat: 'DesktopMobileDevelopment',
      Dirc: false,
    },
    ,
  ];
  Objects_ar = [
    {
      Title: 'تسـويـق',
      Describtion: `لا يتعلق الأمر بالتصميم والإعلان فقط ، فهناك الكثير من الأشياء وراءه.
      يجب أن تبني عملك على خطط تسويقية متكاملة ،
      كل ذلك يساهم في تعزيز ظهور علامتك التجارية
      مع زيادة ملحوظة في مبيعاتك ، وسوف تقدم لك Axes
      بأفضل الأسعار في السوق.`,
      Img: 'assets/Pics/Services1.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'ar',
      Cat: 'OnlineMarketing',
      Dirc: true,
    },
    {
      Title: 'العلامة التجارية',
      Describtion: `إذا قال لك أحدهم: هل تترك هويتك بالطبع
      سوف ترفض!
      لذلك لا تقبل أن تكون علامتك التجارية بدون هوية حقيقية.
      Axes ستقدمها لك بطريقة خاصة.`,
      Img: 'assets/Pics/Services2.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Lg: 'ar',
      Cat: 'Branding',
      Dirc: false,
    },
    {
      Title: 'انتاج الفيديو',
      Describtion: `في كثير من الأحيان تريد إنشاء جودة عالية واحترافية
      مقاطع فيديو احترافية للترويج لعملك كـ
      رائد أعمال أو لإشراك جمهورك إذا كنت كذلك
      منشئ محتوى ، وسنوفر لك مع Axes
      بأفضل المعدات التي تحتاجها مع فريق
      خبرة كبيرة في المجال لتنتهي مع الأفضل
      فيديو ممكن الشكل والجودة.`,
      Img: 'assets/Pics/Services3.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'ar',
      Cat: 'VideoProduction',
      Dirc: true,
    },
    {
      Title: 'انتاج الفيديو',
      Describtion: `ما هو أفضل وقت لالتقاط صورة؟
      نعم ، أفضل وقت تلتقطه كاميرات Axes ، لأنه
      نقدم لكم مجموعة مميزة من المعدات التي تساعد على
      يبرز الصورة بكامل روعتها وبأفضل جودة ،
      والتي من خلالها تجذب جمهورك.`,
      Img: 'assets/Pics/Services4.png',
      sec_Background: 'blackSec',
      But_background: 'blueBut',
      Lg: 'ar',
      Cat: 'VideoProduction',
      Dirc: false,
    },
    {
      Title: 'مواقع الويب',
      Describtion: `إذا سألتك ما هو رأيك في شكل شركتك ، ما رأيك؟
      نعم ، في الأسلوب والمشهد وأشياء أخرى ، هذا هو
      بالضبط النقطة التي أريد الوصول إليها. نحن لا نعطي قالب مجاني .. نحن ننشئ.`,
      Img: 'assets/Pics/Services5.png',
      sec_Background: 'whiteSec',
      But_background: 'blueBut',
      Lg: 'ar',
      Cat: 'WebDevelopment',
      Dirc: true,
    },
    {
      Title: 'تطبيقات الهاتف الجوال',
      Describtion: `إنه المجال الذي يجب أن تكون قد فكرت فيه أو ستفكر فيه في المستقبل القريب جدًا .. ببساطة لماذا لا يكون التطبيق المفيد التالي هو فكرتك؟`,
      Img: 'assets/Pics/Services6.png',
      sec_Background: 'blueSec',
      But_background: 'blackBut',
      Lg: 'ar',
      Cat: 'DesktopMobileDevelopment',
      Dirc: false,
    },
    ,
  ];
  Objects = this.Objects_en;
  constructor() {}

  ngOnInit(): void {}
}
