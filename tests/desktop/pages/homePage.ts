export class HomePage {
    //header
    menuNavigationOne = "(//span[contains(@class,'content content_text')])[1]";
    menuNavigationTwo = "(//span[contains(@class,'content content_text')])[2]";
    menuNavigationThree = "(//span[contains(@class,'content content_text')])[3]";
    blogNavigation = "(//a[contains(@class,'content content_text')])[1]";
    menuLanguage = "(//div[@class='switch-language']//div)[1]";
    menuLanguageRus = "(//a[text()[normalize-space()='Rus']])[1]";
    menuLanguageEng = "(//a[text()[normalize-space()='Eng']])[1]";
    btnCabinet = "(//a[text()[normalize-space()='Личный кабинет']])[1]";
    divMenuContainer = "(//div[@class='container'])[2]";
    formAutorization = "(//div[contains(@class,'auth-form auth__form')]//div)[1]";

    //slider
    blockSlider = "//button[contains(@class,'tawk-custom-color tawk-custom-border-color')]"
    blockSliderOne = "//div[@class='main-cover-card main-cover-card-1']";
    blockSliderTwo = "//div[@class='main-cover-card main-cover-card-2']";
    swiperSliderLeft = "(//div[@class='main-swiper-actions__wrapper']//div)[1]";
    swiperSliderRight = "(//div[@class='main-swiper-actions__wrapper']//div)[3]";
    h1TxtSliderOne = "text=Надежная защита ";
    h2TxtSliderTwo = "//h2[contains(.,'МиссияDDoS-Guard')]";
    btnSliderOne = "(//a[text()[normalize-space()='Подключить']])[1]";
    btnSliderTwo = "(//a[text()[normalize-space()='Подключить']])[2]";

    //services
    blockServices = "(//section[@class='content-block main-services']//div)[1]";
    servicesL7 = "(//a[@class='main-services__card'])[1]";
    servicesL3 = "(//a[@class='main-services__card'])[2]";
    servicesCloudDedicated = "(//a[@class='main-services__card'])[3]";
    servicesCloudVds = "(//a[@class='main-services__card'])[4]";
    servicesCloudHosting = "(//a[@class='main-services__card'])[5]";
    servicesWaf = "(//a[@class='main-services__card'])[6]";

    //ServicesQuiz Quiz
    blockServicesQuiz = "main-services__quiz";
    btnServicesQuiz = "//button[text()[normalize-space()='Начать']]";
    popUpServicesQuiz = "//div[@role='dialog']";
    wrapperPopUp = "(//div[@role='dialog']//div)[1]";
    
    //navigationPopUp Quiz
    nextPopUpServicesQuiz = "//button[text()[normalize-space()='Далее']]";
    cancelBtnPopUpServicesQuiz = "//button[text()[normalize-space()='Отмена']]"
    backBtnPopUpServicesQuiz = "//button[text()[normalize-space()='Назад']]";
    moreLinkServicesQuiz = "//a[contains(.,'Подробнее')]";

    //txtPopUp Quiz
    txtPopUpServicesQuizOne = "text=Что нужно защитить?";
    txtPopUpServicesQuizTwo = "text=Перенести ваш сайт на наш хостинг?";
    txtPopUpServicesQuizThree = "text=Какой у вас проект?";

    //PopUpOne Quiz
    radioBtnWebsiteQuiz = "//label[text()='Сайт']";
    radioBtnNetworkQuiz = "//label[text()='Сетевую инфраструктуру']";
    radioBtnOtherQuiz = "//label[text()='Другое']";

    //SitePopUpTwo Quiz
    siteRadioBtnPopUpServicesQuizOne = "//label[text()='Да']";
    siteRadioBtnPopUpServicesQuizTwo = "//label[text()='Нет']";

    //SitePopUpThree Quiz
    siteThreePopUpRadioBtnOne = "//label[text()='Лендинг']";
    siteThreePopUpRadioBtnTwo = "//label[text()='Сайт-визитка']";
    siteThreePopUpRadioBtnThree = "//label[text()='E-commerce']";
    siteThreePopUpRadioBtnFour = "//label[text()='СМИ']";
    siteThreePopUpRadioBtnFive = "//label[text()='Высоконагруженный проект']";

    //otherPopUp Quiz
    otherPopUpServicecQuizRadioOne = "//label[text()='Сервер']";
    otherPopUpServicecQuizRadioTwo = "//label[text()='Средненагруженный проект']";
    otherPopUpServicecQuizRadioThree = "//label[text()='Высоконагруженный проект']";
    
    //SelectionService Quiz
    selectionServiceOne = "text = Вам подойдет услуга «Защищенный хостинг»";
    selectionServiceTwo = "text = Вам подойдет услуга «Защита и ускорение сайта»";
    selectionServiceThree = "text = Вам подойдет услуга «Защищенный выделенный сервер»";
    selectionServiceFour = "text = Вам подойдет услуга «Защита сети»";
    selectionServiceFive = "text = Вам подойдет услуга «Защищенный VDS»";


    //Reviews
    blockReviews = "//section[@class='content-block main-sponsors']";

    //TabReviews
    txtTabOne = "//span[text()='E-commerce']";
    txtTabTwo = "//span[text()='Телеком']";
    txtTabThree = "//span[text()='Финтех']";
    txtTabFour = "//span[text()='Телеканалы']";
    txtTabFive = "//span[text()='СМИ']";
    txtTabSix = "//span[text()='Туризм']";
    txtTabSeven = "//span[text()='Интернет-технологии']";
    txtTabEight = "//span[text()='Другое']";
    tabReviewsList = [this.txtTabOne, this.txtTabTwo, this.txtTabThree,
                    this.txtTabFour,this.txtTabFive,this.txtTabSix,
                    this.txtTabSeven, this.txtTabEight];

    //blockSpace
    blockSpace = "(//section[@id='personal_area']//div)[1]";
    spaceNext = "(//div[@class='main-swiper-actions__arrow main-swiper-actions__arrow-next'])[2]";
    spacePrev = "//div[@class='main-swiper-actions__arrow main-swiper-actions__arrow-prev']"; 
    titleSpaceOne = "(//p[text()='Дашборд'])[1]";
    titleSpaceTwo = "//p[text()='Статистика']";
    titleSpaceThree = "(//p[text()='Атаки'])[2]";
    btnSpaceSignIn = "//a[text()[normalize-space()='Войти']]";

    //blockCaseStudies 
    blockCaseStudies = "(//section[@class='content-block main-reviews']//div)[1]";
    caseStudiesNext = "(//div[contains(@class,'main-swiper-actions__pagination main-swiper-actions__pagination--bullets')]/following-sibling::div)[3]";
    caseStudiesPrev = "(//div[@class='main-swiper-actions__arrow main-swiper-actions__arrow-prev'])[2]";
    nameCaseOne = "//b[text()='Алексей Чекушкин']";
    nameCaseTwo = "//b[text()='Павел Арбузов']";
    nameCaseThree = "//b[text()='Команда Tilda']";


    //ReadBlog
    btnReadBlog = "//a[text()[normalize-space()='Читать']]";


    //FAQBlock
    itemOneFaq = "(//p[@class='main-faq__item__title'])[1]";
    itemTwoFaq = "(//p[@class='main-faq__item__title'])[2]";
    itemThreeFaq = "(//p[@class='main-faq__item__title'])[3]";
    itemFourFaq = "(//p[@class='main-faq__item__title'])[4]";
    itemFiveFaq = "(//p[@class='main-faq__item__title'])[5]";
    itemSixFaq = "(//p[@class='main-faq__item__title'])[6]";

    txtItemOneFaq = "//strong[text()='DDoS-атака']";
    txtItemTwoFaq = "//strong[text()='Недоступностью ресурса.']";
    txtItemThreeFaq = "//p[text()=', от которых DDoS-Guard помогает защититься. В случае атак неизвестного типа или большой мощности дежурный штат наших инженеров обеспечит своевременную адаптацию системы фильтрации для минимизации вредоносного воздействия.']";
    txtItemFourFaq = "//p[text()='Защита от DDoS-атак на уровнях L3-L7 OSI строится на базе собственной геораспределенной сети фильтрации DDoS-Guard с большой канальной и вычислительной мощностью. Весь входящий трафик анализируется, выявляются аномалии и подозрительная активность. Вредоносные пакеты и запросы отбрасываются, а легитимные — проходят к ресурсу клиента.']";
    txtItemFiveFaq = "//strong[text()='DDoS-Guard']";
    txtItemSixFaq = "//p[text()='Мы предоставляем услуги с использованием собственной сети центров обработки трафика. Канальные и вычислительные мощности сети позволяют фильтровать атаки в сотни Гбит/с. Мы не выставляем дополнительные счета за вредоносный трафик при реальной DDoS-атаке на ваш веб-ресурс. Легитимная полоса, указанная в услуге, всегда доступна целиком.']";

    //blockForm



    //blockFooter
    //FooterData
    logoFooter = "//p[text()='DDoS-Guard']";
    phoneFooterOne = "//p[text()='+7 (800) 333-17-63']";
    phoneFooterTwo = "//p[text()='+7 (495) 215-03-87']";
    emailContact = "//a[contains(.,'info@ddos-guard.net')]";
    socialIconOne = "(//a[@class='social-networks__link'])[1]";
    socialIconTwo = "(//a[@class='social-networks__link'])[2]";

    //footerNavigationsGroup
    linkOneFooterNavigationsGroup = "(//a[text()[normalize-space()='Защита и ускорение сайтов']])[1]";
    linkTwoFooterNavigationsGroup = "(//a[text()[normalize-space()='Защищенный хостинг']])[1]";
    linkThreeFooterNavigationsGroup = "(//a[text()[normalize-space()='Защищенный VDS']])[1]";
    linkFourFooterNavigationsGroup = "(//a[text()[normalize-space()='Защищенные выделенные сервера']])[1]";
    linkFiveFooterNavigationsGroup = "(//a[text()[normalize-space()='Защита Сети']])[1]";
    linkSixFooterNavigationsGroup = "(//a[text()[normalize-space()='Bot Mitigation']])[2]";
    linkSevenFooterNavigationsGroup = "(//a[text()[normalize-space()='WAF']])[2]";





    //MobileLocators

    //Header
    headerWrapperActiv = "(//div[@class='header__wrapper']//div)[1]";
    headerMobileWrapperClose = "//div[@class='header__burger active']";
    headerMobileWrapper = "//div[@class='header-mobile-burger header-mobile-burger--active']";
    btnDropdownOne = "(//li[@class='dropdown header-mobile-navbar__item-content']//button)[1]";
    btnDropdownTwo = "(//li[@class='dropdown header-mobile-navbar__item-content']//button)[2]";
    btnDropdownThree = "(//li[@class='dropdown header-mobile-navbar__item-content']//button)[3]";
    dropdownListOne = "(//ul[@class='dropdown-list'])[1]";
    dropdownListTwo = "(//ul[@class='dropdown-list'])[2]";
    dropdownListThree = "(//ul[@class='dropdown-list'])[3]";
    btnDropdownLang = "(//li[contains(@class,'dropdown dropdown-item')]//button)[1]"
    dropdownLang = "//button[@class='dropdown__title active']/following-sibling::ul[1]"
    btnCabinetHeaderMobile = "(//a[text()[normalize-space()='Личный кабинет']])[2]"
    formAutorizationMobile = "auth-form__right"

};