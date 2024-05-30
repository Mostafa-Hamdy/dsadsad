- Analyses
   - Departments
      2 Domain(user, Admin) => مشكلة دى تكلفيتها هتكون اعلى 
      [x]1 Domin, Permission for users => كتير بردوو Admin تكلفة اقل بس هل هيكون حمل لما الموقع ينزل مرة واحدة ومش هستخدم ال 
      عشان ميتلعبش فيها display none تخلى الصفحة مش موجودة اصلاً ومينفعش تتعمل Permission بس ال 
   - Database
      - Locally
   - Features
      - 
- Wireframing
   - Mind Mapping
      4 pages(Admin panel, Dashboard, ), 4 compoents static, 2 compoents dynamics
   - tools
      - fonts
      - color
      - images
- Developments Departments
   - Libarary
      fonts(CDN), 
      autoprefixer, vuex-presies
   - 
   - Function Requirement 
      - add
         client, 
         selected client, 
         order from dashboard, 
         Selected order in cart
      - Edit
         client, 
         order from dashboard
      - timer 
         traking order 
   - Function Requirement Dashboard => ممكن دى تكون خاصة بيه انا او مش اى حد يتحكم فيها لسه هشوف
      - add
         order
      - Delete
         Client
         Order,


- Enhanceme for older Project => ايه اللى غيرتو من المشروع القديم وليه 
   [x]- use vite 
   [x]- add autoprefixer, Browser Compatapility 
   - use Relative path for go to Definitions components fast, and show suggestion
      import ClientCard from '../../../components/AdminComponents/Clients/ClientCard.vue';
      ومستخدمتهاش كتير path هرجعها عشان اسهل فى كتابة ال كتابة ال  
      import ClientCard from "./ClientCard.vue"; => ودى برضو اسهل فى لو هكتبر باث صغير 
   - @use, forward in scss 
   - فى مكانهم button, a استخدم ال 
   - css Naming convantions
      - ProductCard
      - 
- Enhanceme 
   - Search checkbox style 
   - Client List مش عاجبنى اوى 
   - كله مش عاجبنى Shadow ال 
      - client_list_header وبالأخص بتاع ال 
   - الاسكرول مختلف شويه فى جميع المتصفحات 
   - كله radius عايز اعدل ال 
   - move modal-title from BaseModal => Components عشان مش هيكون موجود فى جميع ال 
   - منفصل ولا لا components فى SideOrderModale, OrderDetails شوف لو تخرج ال 
- Add Feature 
   - UI
      - Tooltip in input field, 
         - Title Attrbuite || Custome 
   - UX 
      - معين لما يجى يطلب اوردر ميتلغبطشى يروح فى حتى تانى path فى User التحكم فى ال 
      - System على كيفية استخدام ال User عرف ال 
   - Clear All in Cart 
   - Time Data 
   - عايزك وانتا بتبحث فى الاوردر ترجع اى حاجة فيها مثلاً بصل
   - show navbar in dashboard only 
   - Accessapility 
   - how to selected search result
   - add steps Status Order
   - Comment Easly Used
      - ولما اضيفو بالون الاحمر يبقا يشيل والاخضر يضاف 
   - add client info in page
   - ممكن اضيف صورة المنتج برة مش جوة 
   - add function hide scroll after open modal in baseComponent
   - add electron 
   - add Database
      - indexedDB
- Remember
   - client-card, selected-client فى more-info عملت
      -عشان البيانات تتشاف بسهولها
      -او لما بتبحث بأى بيانات تتأكد منها بسهوله
      -بتاع اخر الصفحة ميتغييرش margin وعملتله اسكرول ليه مش للصفحة كلها ال componentes فى clients-list عملت ال 
- Receved Design UI/UX
   - Fonts
   - Color
- Create Develop Invairoment 
   - Reset, rules in css
   - Custom Property(color, fonts, transition, ...)
   <!-- ! css class(base-components, base-pages) هشوف النقطة دى عشان رغم انها غلط بس بتوفر -->- use articla tag in pages, and section in Real components 
   مش افضل حاجة Readabillity بس دا فى ال SEO وانا عملت كدا عشان مش بستهدف 
   - Base Components
      - modal(theCart, productInfo, productSide, addclient)
         - BaseElement(overLay, close, )
      - input
      - 
   - tooltip(search, )
   - layer Elements z-index
      - buttonCart 1 
      - Cart 2 
   - وانا شغال لوحدى 
      - فى الاخر transition هضيف 
      - 
   - scss
      - before, after انا مش شايف اى منفعه فى & غير فى ال 
      طويلة كدا naming طب ايه لازمة تسمية ال 
      product__side-order
      product__side-order__list
      product__side-order__list__item

      scss طب ما انا ممكن اسمى اسم واحد واعمل كدا فى ال 
      .product{
         .side-order-list{
            side-item {
               
            }
         }
      }
- Issues
   - client View
      - مش متثبت height لما بتبحث فى بيطلع فوق شويه ودا عشان ال 
      - height بيقف على اد ال position: sticky;ال 
      - بيجى فى الهاتف مش مضبوط Modal ال 
      - client cardعشان اشوف لو اسم العميل زيادة اعمل فيها ايه عشان بردوو اشيل الاستايل الزيادى اللى فى ال 
      - فى ساعتها لازم ادوس على حاجة وارجع تانى props فى المتصفح مش بتغيير ال vue ليه فى اضافات 
      - ضيف صفحت الخطأ لو روحت لصفحة مش موجودة 
   - ManuView
      - كمان sideOrder لما بدوس على معلومات الاوردر بيفتح ال 
      *DEBUG - use stop modifier 
   - فى الهاتف مش بيظهر كلها navbar 
   - بتاع صفحة كدا مش بيجى صح المحتوى بيجى من تحت كدا ويطلع على فوق transition ساعات ال 
   - Modal
      - كنت عايز اجيبة من تحت خالص بقيم الاصفار modal content ال 
         bottom: 0;
         ف القيم دى مش هتتنفز workFlow بيكون حاجز مكانة فى ال relative بس افتكرت ان ال 
      - والبعض لا header هيكون فيها components عشان فى slots استخدمت ال 
- New Info 
   نفسة element الكلام دا لل 
   - معاها scroll مش بيحرك ال padding ال 
   - معاها scroll بيحرك ال margin ال 
   - محدد height وهتضيف معاه  scroll ال هيكون معاه components لل padding يفضل جداً جداً تضيف ال 
   رئيسى padding ضيفلها scroll والصفحات اللى ملهاش 
   مباشر هتستخدم الطريقة دى افضل فى كذا حاجة components لل scroll لما تضيف ال 
   -positio: sticky; لو العنصر اللى فوق هيكون 
   -للعنصر اللى فوق positio: sticky; مش هتحتاج تضيف 

   - Animatable => <!-- SEARCH: -->العناصر القابلة للتحريك 
      - height 
      - visiability => fade-out بيشتغل بس فى Transition  
   - box-shadow <!-- SEARCH: -->
      - بيجى من تحت العنصر 
      - لو عايز تجيب عنصر ابن على عنصر 
      - عنصر ابن على عنصر ابن اخر من نفس الاب shadow لو عايز تجيب 
         - بس مش افل حل position: sticky; بتضيف 
   - عليه هتشوف الصح ايه hover صح ولا لا اعمل Selector وتشوف ال scss بدل ما تجرب ال 
   هتضيف المعلومات  الجديدة هنا ولا فى المشروع جوه
   - css
      - html {
         background-color: red;
         كمان scroll بيغيير خلفية ال
         body مش بيحجم الخلفية زى ال 
      }
   - js فى ال change بيستخدمو ال 
      هنا مش هتكون افضل حاجة Click ال keyboard وهتستخدم ال checkbox عشان مثلا لو هتشتغل على 
      وكمان افضل فى الاداء 
- Qustion
   - custom property || scss varible ما الافضل استخدام متغييرات 
- Research 
   -  75 E.G  شوف بيتعاملو السعر والعملة ازاى بينسقة كل واحد لوحدة ولا ايه  
   - title-pages شوف تنسيق لل 
   - وهتظهر امتا tooltip ازاى وايه اللى ليه tooltip شوف هتدخل ال 
   - ليه بيضيفو كود لكل منتج وليه بيعرضو فى الصفحة
   - شوف ازاى لما تطبع الشيك مرة او مرتيين 
   - input:focus .group::before { كيفية عمل اكشن على الابن والتحكم فى الاب
   - height: -webkit-fill-available; => تقريباً بتاخد المساحة الباقية 
- New 
   - use stop modifier 
   - absluote || fixed
      absluote =>  بيأثر على العنصر كمان margin لو العنصر الاب ليه 
      fixed => بيكون بالنسبة للشاشه فوق خالص 
- for Learning 
   - Box shadow 
      شادو components بيدو ازاى ل 





هل هفضل ضايف الصفحات فى فولدر منفصل 
   Cilents
      CilentsView
   Dashboard
      DashboardView


زيادة كود ع الفاضى مثلاً هنا class انا شايف ان فى 
field {
   input {}
   span {}  => عشان نفس العنصر class ممكن هنا وتحت نضيف 
   span {}
   label {}
}
<div class="field">
   <input
      v-bind="$attrs"
      class="field__input"
      required
      @input="$emit('update:modelValue', $event.target.value)"
   />
   <span class="field__highlight"></span>
   <span class="field__bar"></span>
   <label v-if="label" class="field__label">{{ label }}</label>
</div>



- settings ممكن تضيف فى صفحة ال 
   - edit fonts, theme, dark, language


- dark mode 
   - class مش لازم ال localstorage فى ال darkMode: false ممكن تضيف 



how import bookmarks from chromeDev to Edge Dev 


عشان تكون البيانات جت قبل تحميل الصفحة created فى Api هما بيضيفو ال 
- get Api Data from Api 
   -get data in promises in created methods 
   -eqal data with null 
   -add if in template for sure data is available 
- get Api Data from json file 

- محتاج اتعلمهم عشان المشروع واقف عليهم 
   - Naming convantions 
   - design pattern vue components 

Client صفحة لل client-modal هل هنحتاج نضيف مع ال 
وازاى هنضيف سهولة الوصول لها 
وايه هينزل مع الصفحة database وايه اللى هيجى من ال 

صحيحة Router كيفية كتابة 



:key=""  => يضاف ليفرق الدوم من القوائم الجديدة والقديمة 
يجب أن يكون لدى الأطفال من نفس الوالد المشترك مفاتيح فريدة. سوف تتسبب المفاتيح المكررة في حدوث أخطاء في العرض.


vue2 && vue3, vue-router3 && vue-router4, ...شوف ايه الفرق بين 
واى مكتبة عشان تعرف الفرق عشان تعرف انتا بتكتبة قديم ولا جديد 

top layer تضاف على ال 
.stop => فقط event يقوم بتنفيذ هذا ال 
event.stopPropagation()


شوف قصة الايكون 


عموماً هو لما توصل للمحتوى ينزل lazy load مصطلح ال 


npx browserslist@latest --update-db

فوق خالص devtools اللى بتظهر فى ال root folder شوف قصة ال 

margin ومش بستخدم ال gap عشان استخدم ال display: flex || grid;انا احياناً كتير بستخدم  



<li>Quantity</li><li>QTY</li>

وبيخرج النص من الصور copy بياخد النص Qtranslte بتاعت text recognition || Extractor هسخدم ال 
color(bgc, active, hover), padding, fonts هنقل ال 


function || if الاول ولا forLoopال js فى ال logic اتعلم كويس ال 


دى حلوة جداً ليه مثلاً BaseComponents فكرة ان انتا تعمل 
فى حتى تانية مش هتضايق فى حاجة Button كلها عشان لو استخدمت ال Button هتضيف فيه اعدادات ال BaseButton انتا عامل 
وهتضيف بقا 



- لما تكون عايز تقسم المساحة على الابناء بالتساوى 
   - for flex
      .parent {
         display: flex;

         .child {
            flex: 1 1 0;
         }
      }
   - for grid
      .parent {
         display: grid;
         grid-template-columns: repeat(3, 1fr);

         grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));  => دى ديناميك شوية  

      }



Clients, Manu او تشيل لينك ال Dashboard يا تخفية من كل الصفحات الا ال nav ال 
Nested Route او ممكن نعمله 

كيفية اعطاء صلاحيات مدير عن كابتن عن ويتر
URL Direct ميتحركش من ال User كيفية التحكم فى ال 
how to can't selected img 


بتاعت الوندوز مش دقيقة اوى هل كله كدا color-picker ال 

&:hover::before {

بسرعة vue-components فى css ايه حل عدم ظهور مقترحات ال 

لقاء المتابعين رقم {007} => بص بصة على الكومنت دى 

لو استخدمت الصورة كذا مرة فى الموقع تعتبر مرة واحدة 


how to show keyboard after foucs input 

learn search princpol pattern in prodect 

how to create glasses effect 


فى فرق بين الخبرة والمعرفة 


refraz => اعد صياغة هذه الجملة 
VR => 
VR => 


<!--
   - مبيكنش ليها مكان فى الصفحة JS لما بتتعمل ب tooltip احلا حاجة فى ال 
   - input مش بيضافو على before, after ال  
-->

how use sass senior developer in vue project
what's best practes components structure in vue 
how to create css framework as senior front-end
how to planning my project 
what's benefits from add icon in separate components in vue js
what's use naming convantion in css as senior front-end developer 
naming convantion css in vue js 
how to create tab category with product in vue app 
how to create theme(dark, light) ios with css 
css ب ios كيفية عمل استيل مثل 
UI as fornt-end developer ما افضل المواقع لتغذية البصرية لل 
click and drag ب scroll كيفية جعل ال 
وايه افضل استخدماتها slot ايه افضل استفادة من ال 
فى المشروع عندك صح استخدامهم props, emit شوف ال 
naming convantion in js شوف ال 


Prisma

كانى هدوس على لينك ودانى على صفحة كدا vue فى ctrl + click لما دوست على 
وجرب دوسها كدا مع اى حاجة تانى


box-sizing => layers كانها element بيخلى ال 
اكبر child dimantions ولل parent demantions واللى بيخلى العنصر يخرج بره لو انتا محدد لل 
box-sizing => افهمها كويس ثالث 

بداية اى عنصر من فوق شمال لاى اب له 

windows بتاعت ال Rouler هستخدم ال 
windows بتاعت المتصفح لو مش بتجيب نفس اللون بالضبط هستخدم بتاعت   coloer-picer وهشوف ال 

before, after لتوسيط العنصر الاكثر استخدامناً لل translate تقريباً ال 

اسماء station بأسماء اماكنهم وياريت تقولوهم سمو ال table سمى اسم ال

baseCard || TableCard خد بالك فى فرق بين ال 
TableCard => TableCard دا لو هتستخدمو لل 
baseCard => system دا لو هتستخدم فى كذا حتى فى ال
components طب ودا هيفرق فى ايه عشان لو هتدخل البيانات مباشراً فى ال 
قيس على كدا اى حاجة 


animation, transitions


color-schema => dark-mode automatic بتعمل ال 
اعرف اكتر عن ال 

على قد المحتوى height متنساش ال 


بيفرق property هل ترتيب ال 


مش افضل طريقة لاحتراف فى اى حاجة Documntations ال 
ما هو الا توثيق فقط Documntations ال 
Documntations, Video, facebook, Books ذاكر من ال 
الكتب مرجع بترجعلها وقت اللزوم 
مميزات الفيديو بتتديك خبرات سنين من المبرمج اللبيشرح 
لو نسيت حاجة مينفعش افتح الفيديو تانى Documntations ال 
مش معنى ان انتا عملت تصميم مش معنى انا انتا جامد 
tabs وامتا استخدم ال Route امتا استخدم ال 

how to custome validation 
data- 

formater, volar, pretter, eslint,  شوف هتستخدم انى 
volar => انا حالياً هستخدمو 

هو بيشتغل بس هل دا صح custom tag  هل ينفع اشتغل ب 
   Dom tree علق ومش عايز يتشال من ال fff اسمة tag ضيفت 

ctrl + shift + c => in vscode open cmd 

عادى بس فكره هما عاملينها ازاى terminal وهشتغل من ال watch scss همسح اضافة 

cursor: pointer; => href بس لازم تضيف ال By default in tag a 
foucs(input, accessapility) بيظهر فى حالة ال outline ال 

h, ...هل ال * بتحتوى على ال 


history محفظش ال  edge dev متصفح ال 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

مواقع وظائف 
جلسدور - انديد - لينكيدان 


unit test,
من الاسكيتش بشكل احترافى UI ابنى ال,
framework ader,
بيعرف يعمل فريم ورك بنفسة 

لغة الجافاسكريبت غريبة عن اللغات التانية 


منفصل components ما الفائدة التى تعود عليه من اضافة الايكون فى 




ممكن تشتغل بيها فى مجال الويب عادى java EE ال 


هل دا صح ولا غلط شوف :root انتا ضايف كل ;كاتيجورى فى 


interylevel => مستوى متوسط 


ليه بدل ما يعملو كدا 
<button class="btn btn-primary"></button>
<button class="btn btn-secondary"></button>

.btn {}
.btn-primary {}
.btn-secondary {}

يعملو كدا 
<button class="btn-primary"></button>
<button class="btn-secondary"></button>

[class*="btn"]  => كدا احسن btn btn-primary انا شايف ان مش لازم انى اعمل كدا 
.btn-primary {}
.btn-secondary {}


كويس BaseInput هتفهم ال 

:label="'Search'"

.5 = 50%


<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="active">
<path d="M197.3 170.7h-160A37.4 37.4 0 010 133.3v-96A37.4 37.4 0 0137.3 0h160a37.4 37.4 0 0137.4 37.3v96a37.4 37.4 0 01-37.4 37.4zM37.3 32c-3 0-5.3 2.4-5.3 5.3v96c0 3 2.4 5.4 5.3 5.4h160c3 0 5.4-2.4 5.4-5.4v-96c0-3-2.4-5.3-5.4-5.3zm0 0M197.3 512h-160A37.4 37.4 0 010 474.7v-224a37.4 37.4 0 0137.3-37.4h160a37.4 37.4 0 0137.4 37.4v224a37.4 37.4 0 01-37.4 37.3zm-160-266.7c-3 0-5.3 2.4-5.3 5.4v224c0 3 2.4 5.3 5.3 5.3h160c3 0 5.4-2.4 5.4-5.3v-224c0-3-2.4-5.4-5.4-5.4zm0 0M474.7 512h-160a37.4 37.4 0 01-37.4-37.3v-96a37.4 37.4 0 0137.4-37.4h160a37.4 37.4 0 0137.3 37.4v96a37.4 37.4 0 01-37.3 37.3zm-160-138.7c-3 0-5.4 2.4-5.4 5.4v96c0 3 2.4 5.3 5.4 5.3h160c3 0 5.3-2.4 5.3-5.3v-96c0-3-2.4-5.4-5.3-5.4zm0 0M474.7 298.7h-160a37.4 37.4 0 01-37.4-37.4v-224A37.4 37.4 0 01314.7 0h160A37.4 37.4 0 01512 37.3v224a37.4 37.4 0 01-37.3 37.4zM314.7 32c-3 0-5.4 2.4-5.4 5.3v224c0 3 2.4 5.4 5.4 5.4h160c3 0 5.3-2.4 5.3-5.4v-224c0-3-2.4-5.3-5.3-5.3zm0 0" /></svg>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
<svg viewBox="0 1 511 512" fill="currentColor">
<path d="M498.7 222.7L289.8 13.8a46.8 46.8 0 00-66.7 0L14.4 222.6l-.2.2A47.2 47.2 0 0047 303h8.3v153.7a55.2 55.2 0 0055.2 55.2h81.7a15 15 0 0015-15V376.5a25.2 25.2 0 0125.2-25.2h48.2a25.2 25.2 0 0125.1 25.2V497a15 15 0 0015 15h81.8a55.2 55.2 0 0055.1-55.2V303.1h7.7a47.2 47.2 0 0033.4-80.4zm-21.2 45.4a17 17 0 01-12.2 5h-22.7a15 15 0 00-15 15v168.7a25.2 25.2 0 01-25.1 25.2h-66.8V376.5a55.2 55.2 0 00-55.1-55.2h-48.2a55.2 55.2 0 00-55.2 55.2V482h-66.7a25.2 25.2 0 01-25.2-25.2V288.1a15 15 0 00-15-15h-23A17.2 17.2 0 0135.5 244L244.4 35a17 17 0 0124.2 0l208.8 208.8v.1a17.2 17.2 0 010 24.2zm0 0" /></svg>
<svg viewBox="0 0 512 512" fill="currentColor">
<path d="M467 76H45a45 45 0 00-45 45v270a45 45 0 0045 45h422a45 45 0 0045-45V121a45 45 0 00-45-45zm-6.3 30L287.8 278a44.7 44.7 0 01-63.6 0L51.3 106h409.4zM30 384.9V127l129.6 129L30 384.9zM51.3 406L181 277.2l22 22c14.2 14.1 33 22 53.1 22 20 0 38.9-7.9 53-22l22-22L460.8 406H51.3zM482 384.9L352.4 256 482 127V385z" /></svg>
<svg viewBox="0 0 512 512" fill="currentColor">
<path d="M272 512h-32c-26 0-47.2-21.1-47.2-47.1V454c-11-3.5-21.8-8-32.1-13.3l-7.7 7.7a47.1 47.1 0 01-66.7 0l-22.7-22.7a47.1 47.1 0 010-66.7l7.7-7.7c-5.3-10.3-9.8-21-13.3-32.1H47.1c-26 0-47.1-21.1-47.1-47.1v-32.2c0-26 21.1-47.1 47.1-47.1H58c3.5-11 8-21.8 13.3-32.1l-7.7-7.7a47.1 47.1 0 010-66.7l22.7-22.7a47.1 47.1 0 0166.7 0l7.7 7.7c10.3-5.3 21-9.8 32.1-13.3V47.1c0-26 21.1-47.1 47.1-47.1h32.2c26 0 47.1 21.1 47.1 47.1V58c11 3.5 21.8 8 32.1 13.3l7.7-7.7a47.1 47.1 0 0166.7 0l22.7 22.7a47.1 47.1 0 010 66.7l-7.7 7.7c5.3 10.3 9.8 21 13.3 32.1h10.9c26 0 47.1 21.1 47.1 47.1v32.2c0 26-21.1 47.1-47.1 47.1H454c-3.5 11-8 21.8-13.3 32.1l7.7 7.7a47.1 47.1 0 010 66.7l-22.7 22.7a47.1 47.1 0 01-66.7 0l-7.7-7.7c-10.3 5.3-21 9.8-32.1 13.3v10.9c0 26-21.1 47.1-47.1 47.1zM165.8 409.2a176.8 176.8 0 0045.8 19 15 15 0 0111.3 14.5V465c0 9.4 7.7 17.1 17.1 17.1h32.2c9.4 0 17.1-7.7 17.1-17.1v-22.2a15 15 0 0111.3-14.5c16-4.2 31.5-10.6 45.8-19a15 15 0 0118.2 2.3l15.7 15.7a17.1 17.1 0 0024.2 0l22.8-22.8a17.1 17.1 0 000-24.2l-15.7-15.7a15 15 0 01-2.3-18.2 176.8 176.8 0 0019-45.8 15 15 0 0114.5-11.3H465c9.4 0 17.1-7.7 17.1-17.1v-32.2c0-9.4-7.7-17.1-17.1-17.1h-22.2a15 15 0 01-14.5-11.2c-4.2-16.1-10.6-31.6-19-45.9a15 15 0 012.3-18.2l15.7-15.7a17.1 17.1 0 000-24.2l-22.8-22.8a17.1 17.1 0 00-24.2 0l-15.7 15.7a15 15 0 01-18.2 2.3 176.8 176.8 0 00-45.8-19 15 15 0 01-11.3-14.5V47c0-9.4-7.7-17.1-17.1-17.1h-32.2c-9.4 0-17.1 7.7-17.1 17.1v22.2a15 15 0 01-11.3 14.5c-16 4.2-31.5 10.6-45.8 19a15 15 0 01-18.2-2.3l-15.7-15.7a17.1 17.1 0 00-24.2 0l-22.8 22.8a17.1 17.1 0 000 24.2l15.7 15.7a15 15 0 012.3 18.2 176.8 176.8 0 00-19 45.8 15 15 0 01-14.5 11.3H47c-9.4 0-17.1 7.7-17.1 17.1v32.2c0 9.4 7.7 17.1 17.1 17.1h22.2a15 15 0 0114.5 11.3c4.2 16 10.6 31.5 19 45.8a15 15 0 01-2.3 18.2l-15.7 15.7a17.1 17.1 0 000 24.2l22.8 22.8a17.1 17.1 0 0024.2 0l15.7-15.7a15 15 0 0118.2-2.3z" />
<path d="M256 367.4c-61.4 0-111.4-50-111.4-111.4s50-111.4 111.4-111.4 111.4 50 111.4 111.4-50 111.4-111.4 111.4zm0-192.8a81.5 81.5 0 000 162.8 81.5 81.5 0 000-162.8z" /></svg>
<svg viewBox="0 0 512 512" fill="currentColor">
<path d="M255.2 468.6H63.8a21.3 21.3 0 01-21.3-21.2V64.6c0-11.7 9.6-21.2 21.3-21.2h191.4a21.2 21.2 0 100-42.5H63.8A63.9 63.9 0 000 64.6v382.8A63.9 63.9 0 0063.8 511H255a21.2 21.2 0 100-42.5z" />
<path d="M505.7 240.9L376.4 113.3a21.3 21.3 0 10-29.9 30.3l92.4 91.1H191.4a21.2 21.2 0 100 42.6h247.5l-92.4 91.1a21.3 21.3 0 1029.9 30.3l129.3-127.6a21.3 21.3 0 000-30.2z" /></svg>



box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);


max-height: 0;
max-height: 100vh;  => وكدا هتفتح على المحتوى بالضبط Animatble خاصية 
Dynamic Animatble كمان فيها Units ال 




Transparant | Opacity => ايه الفرق بينهم 


div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}


div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}


border: 1px solid red;  => shorthand بتشيل كذا قيمة بتكون property اى 

font:
   24px "Helvetica",
   sans-serif;


background: hwb(50deg 30% 40%);
background: hwb(0.5turn 10% 0% / .5);



how to qustions 
but I’ll try to give you some feedback on this code
can you example 
What are the ways to  => ما هى طرق 
How to check the date of this doc => كيفية التحقق 


انى افضل 
"name": "Caprisioza", 
"title": "Caprisioza", 


-webkit-background-clip: text;
background-clip: text;

text-overflow: clip;

border-collapse: separate;
border-spacing: 0px 0px;
caption-side: top;
empty-cells: show;
table-layout: auto;


in Browser 
ctrl + l = focus in link 
ctrl + shift + l = focus in link, past, enter


fetch, axios هتستخدم ال 
simulate an HTTP request
لو الموقع بيفتح على الانترنت وعايز ترتب اولويات نزول الحاجه 


vite 
js مع تعديلات ال Reload ليه لازم تعمل 



computed: {
   serchInput(e) {
      console.log(e)  => computed طلع هنا نتائج مختلفه شوفها بس هنا عشان دى  param ال 
   },
},

updated() {
   console.log(this.prodData);
},


شوف فديوهات الراجل دا بيختصر 
Do You Know This CSS Color-Changing Text Trick


how to add hover | active in Devtools
Devtools الملغية فى ال property كيفية ظهور ال 



<!-- دى هتغير فى الاب كمان ولا فى الابن بس props عايز اعرف ال  -->
<!-- 
   عشان هو فى الاصل مش بتاعة بتاع الابRead Only لو عملت كدا النتيجة مش هتتغير عشان المتغيير يعتبر 
   ولو اتغيير فى الاب يتغيير فى الابن عادى لكن العكس لا 
   يقولك كدا warn هيظهرلك vue و

   [تحذير Vue]: تجنب تحور خاصية مباشرة حيث سيتم الكتابة فوق القيمة كلما أعيد عرض المكون الأصلي. بدلا من ذلك، استخدم خاصية بيانات أو محسوبة استنادا إلى قيمة الخاصية. الدعامة التي يتم تحويرها: "النتيجة"
   [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "score"
-->
Vue.component('ChildA',{
  template:` 
<div id="child-a"> 
<h2>Child A</h2> 
<pre>data {{ this.$data }}</pre> 
<hr/> 
<button @click="changeScore">Change Score</button> 
<span>Score: {{ score }}</span> 
</div>`,
  props: ["score"],
  methods: {
    changeScore() {
      this.score = 200;
    }
  }
})

<!-- ودا بيأكد ان القيمة الاصلية اتغيرت 
   $forceUpdate => vue مضمنة فى methods 
-->
Vue.component('ParentA',{
  template:` 
<div id="parent-a"> 
<h2>Parent A</h2> 
<pre>data {{ this.$data }}</pre> 
<button @click="reRender">Rerender Parent</button> 
<hr/> 
<child-a :score="score"/> 
<child-b/> 
</div>`,
  data() {
    return {
      score: 100
    }
  },
  methods: {
    reRender() {
      this.$forceUpdate();
    }
  }
})