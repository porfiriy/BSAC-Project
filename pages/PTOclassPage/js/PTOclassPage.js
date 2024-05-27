//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//кнопки ,выпускники 
let Alumni11ClassBtn = document.querySelector(".alumni-buttons__11-class");
let Alumni9ClassBtn = document.querySelector(".alumni-buttons__9-class");
let AlumniSSOClassBtn = document.querySelector(".alumni-buttons__SSO-class");
let AlumniPTOClassBtn = document.querySelector(".alumni-buttons__PTO-class");



// кнопки, уровень образования
let TopContainerEducationLvl = document.querySelector(".top-container__education-lvl");
let HigherEducationCompleteBtn = document.querySelector(".education-lvl-btn__higher-education-complete");
let SpecialEducationCompleteBtn = document.querySelector(".education-lvl-btn__secondary-special-education-complete");
let SecondarySpecialEducationPartTimeBtn = document.querySelector(".education-lvl-btn__secondary-special-education-part-time");
let Class9Btn = document.querySelector(".education-lvl-btn__9class");
let HigherEducationAbbreviatedeBtn = document.querySelector(".education-lvl-btn__higher-education-abbreviated");
let HigherEducationAbbreviatedPartTimeBtn = document.querySelector(".education-lvl-btn__higher-education-abbreviated-part-time");
let SecondarySpecialEducationPartTimeForPTOBtn = document.querySelector(".education-lvl-btn__secondary-special-education-part-time-for-PTO");


//контейнеры специальностей 
let AutomationTechnologicalProcessesAndProductionsBlock = document.querySelector(".passing-points__automation-technological-processes-and-productions-block");
let InfocommunicationSystemsAndNetworksBlock = document.querySelector(".passing-points__infocommunication-systems-and-networks-block");
let AppliedComputerScienceBlock = document.querySelector(".passing-points__applied-computer-science-block");
let MarketingBlock = document.querySelector(".passing-points__marketing-block");
let TechnicalOperationTelecommunicationSystemsAndNetworkSsecondarySpecialEducationCompleteBlock = document.querySelector(".passing-points__technical-operation-telecommunication-systems-and-networks__secondary-special-education-complete-block");
let SoftwareTestingSecondarySpecialEducationCompleteBlock = document.querySelector(".passing-points__software-testing__secondary-special-education-complete-block");
let TechnicalOperationRadioCommunicationBroadcastingAndTelevisionSystemsSecondarySpecialEducationCompleteBlock = document.querySelector(".passing-points__technical-operation-radio-communication-broadcasting-and-television-systems__secondary-special-education-complete-block");
let PostalActivitiesSecondarySpecialEducationCompleteBlock = document.querySelector(".passing-points__postal-activities__secondary-special-education-complete-block");
//среднее специальное заочное
let TechnicalOperationTelecommunicationSystemsAndNetworksSecondarySpecialEducationPartTimeBlock = document.querySelector(".passing-points__technical-operation-telecommunication-systems-and-networks__secondary-special-education-part-time-block");
let TechnicalOperationRadioCommunicationBroadcastingAndTelevisionSecondarySpecialEducationPartTimeBlock = document.querySelector(".passing-points__technical-operation-radio-communication-broadcasting-and-television__secondary-special-education-part-time-block");
let PostalActivitiesSecondarySpecialEducationPartTimeBlock = document.querySelector(".passing-points__postal-activities__secondary-special-education-part-time-block");
// выпускники 9-х классов
let SoftwareTesting9classBlock = document.querySelector(".passing-points__software-testing__9class-block");
let DevelopmentAndMaintenanceWebResources9classBlock = document.querySelector(".passing-points__development-and-maintenance-web-resources__9class-block");
let TechnicalPerationTelecommunicationSystemsAndNetworks9classBlock = document.querySelector(".passing-points__technical-peration-telecommunication-systems-and-networks__9class-block");
let InformationCableNetworks9classBlock = document.querySelector(".passing-points__information-cable-networks__9class-block");
let TechnicalOperationRadioCommunicationBroadcastingAndTelevision9classBlock = document.querySelector(".passing-points__technical-operation-radio-communication-broadcasting-and-television__9class-block");
let PostalActivities9classBlock = document.querySelector(".passing-points__postal-activities__9class-block");
//ВЫСШЕЕ ОБРАЗОВАНИЕ СОКРАЩЕННЫЙ ДЛЯ ССО 
let SystemsAndNetworksInfocommunicationsHigherEducationAbbreviatedBlock = document.querySelector(".passing-points__systems-and-networks-infocommunications__higher-education-abbreviated-block");
let PostalCommunicationHigherEducationAbbreviatedBlock = document.querySelector(".passing-points__postal-communication__higher-education-abbreviated-block");
// ВЫСШЕЕ ОБРАЗОВАНИЕ СОКРАЩЕННЫЙ ,ЗАОЧНО ДЛЯ ССО
let InfocommunicationSystemsAndNetworksHigherEducationAbbreviatedPartTimeBlock = document.querySelector(".passing-points__infocommunication-systems-and-networks__higher-education-abbreviated-part-time-block");
let PostalCommunicationHigherEducationAbbreviatedPartTimeBlock = document.querySelector(".passing-points__postal-communication__higher-education-abbreviated-part-time-block");
//СРЕДНЕЕ СПЕЦИАЛЬНОЕ ЗАОЧНОЕ ДЛЯ ПТО
let PostalActivitiesSecondarySpecialEducationPartTimeForPTOBlock = document.querySelector(".passing-points__postal-activities__secondary-special-education-part-time-for-PTO-block");



//кнопки стоимость обучения
let WantKnowPaymentInfoBtn1 = document.querySelector(".completed-reception__want-know-payment-info-container1");
let PaymentInfoContainer1 = document.querySelector(".completed-reception__payment-info-container1");
let WantKnowPaymentInfoBtn2 = document.querySelector(".completed-reception__want-know-payment-info-container2");
let PaymentInfoContainer2 = document.querySelector(".completed-reception__payment-info-container2");
let WantKnowPaymentInfoBtn3 = document.querySelector(".completed-reception__want-know-payment-info-container3");
let PaymentInfoContainer3 = document.querySelector(".completed-reception__payment-info-container3");

//Отдельные блоки ,контейнеры
let PassingPointsTopContainer = document.querySelector(".passing-points__top-container");
let PassingPointsBottomContainer = document.querySelector(".passing-points__bottom-container");
let TopContainerListAlumniButtonsContainer = document.querySelector(".top-container__list-alumni-buttons");
let ListAlumniButtonsTwoItemContainer = document.querySelectorAll(".list-alumni-buttons__two-item-container");
let TopContainerSubtitle = document.querySelector('.top-container__subtitle');
let BottomContainerColumnsDescription = document.querySelector('.bottom-container__columns-description');



//при нажатии на  выпускников ПТО
AlumniPTOClassBtn.addEventListener('click', function () {
   //добавляем клас актив
   AlumniPTOClassBtn.classList.add('active');

   //меняем стили и позицию кнопок
   TopContainerListAlumniButtonsContainer.style = "flex-direction: row;";
   ListAlumniButtonsTwoItemContainer.forEach(function (element) {
      element.style.margin = "0px";
   });
   // размещаем текст "ВЫБЕРИ ТО ЧТО ПОДХОДИТ ИМЕННО ТЕБЕ" ниже
   TopContainerListAlumniButtonsContainer.parentNode.insertBefore(TopContainerSubtitle, TopContainerListAlumniButtonsContainer.nextSibling);
   TopContainerSubtitle.style = "margin: 21px 0 0px 40px;";
   TopContainerEducationLvl.style = "display: flex;";

   //Логика при активной кнопке выпускников 11-го
   if (AlumniPTOClassBtn.classList.contains('active')) {
      //активируем ей цвет
      AlumniPTOClassBtn.style = "background-color: #2A3FFF; color: #fff; border: 1px solid #22222200; height: 100px;";


      //включаем нужный уровень образования
      SecondarySpecialEducationPartTimeForPTOBtn.style = "display: flex;";

      //выключаем ненужный уровень образования
      HigherEducationCompleteBtn.style = "display: none;";
      SpecialEducationCompleteBtn.style = "display: none;";
      Class9Btn.style = "display: none;";
      HigherEducationAbbreviatedeBtn.style = "display: none;";
      HigherEducationAbbreviatedPartTimeBtn.style = "display: none;";
      SecondarySpecialEducationPartTimeBtn.style = "display: none;";

      //Активация кнопки высшего сокращенный срок ,заочная форма в ССО
      SecondarySpecialEducationPartTimeForPTOBtn.onclick = function () {
         SecondarySpecialEducationPartTimeForPTOBtn.style = "display: flex; background-color: #2A3FFF; color: #fff;";

         //Включаем видимость блока со специальностями и уменьшаем top container 
         PassingPointsBottomContainer.style = "display: flex;";

         //Загружаем на страницу список нужных специальностей ДЛЯ ЭТОЙ КНОПКИ
         PostalActivitiesSecondarySpecialEducationPartTimeForPTOBlock.style = "display: flex;";

         //УДАЛЯЕМ СО СТРАНИЦЫ список НЕ нужных специальностей ДЛЯ ЭТОЙ КНОПКИ
         SystemsAndNetworksInfocommunicationsHigherEducationAbbreviatedBlock.style.display = "none";
         PostalCommunicationHigherEducationAbbreviatedBlock.style.display = "none";
         AutomationTechnologicalProcessesAndProductionsBlock.style = "display: none;";
         InfocommunicationSystemsAndNetworksBlock.style = "display: none;";
         AppliedComputerScienceBlock.style = "display: none;";
         MarketingBlock.style = "display: none;";
         TechnicalOperationTelecommunicationSystemsAndNetworksSecondarySpecialEducationPartTimeBlock.style = "display: none;";
         TechnicalOperationRadioCommunicationBroadcastingAndTelevisionSecondarySpecialEducationPartTimeBlock.style = "display: none;";
         PostalActivitiesSecondarySpecialEducationPartTimeBlock.style = "display: none;";
         SoftwareTesting9classBlock.style = "display: none;";
         DevelopmentAndMaintenanceWebResources9classBlock.style = "display: none;";
         TechnicalPerationTelecommunicationSystemsAndNetworks9classBlock.style = "display: none;";
         InformationCableNetworks9classBlock.style = "display: none;";
         TechnicalOperationRadioCommunicationBroadcastingAndTelevision9classBlock.style = "display: none;";
         PostalActivities9classBlock.style = "display: none;";
         TechnicalOperationTelecommunicationSystemsAndNetworkSsecondarySpecialEducationCompleteBlock.style = "display: none;";
         SoftwareTestingSecondarySpecialEducationCompleteBlock.style = "display: none;";
         TechnicalOperationRadioCommunicationBroadcastingAndTelevisionSystemsSecondarySpecialEducationCompleteBlock.style = "display: none;";
         PostalActivitiesSecondarySpecialEducationCompleteBlock.style = "display: none;";
         InfocommunicationSystemsAndNetworksHigherEducationAbbreviatedPartTimeBlock.style = "display: none;";
         PostalCommunicationHigherEducationAbbreviatedPartTimeBlock.style = "display: none;";
      }
   }
});








