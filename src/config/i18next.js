import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const userLang = localStorage.getItem('languaje')
const defaultLocale = userLang || navigator.language
i18n
  .use(initReactI18next)
  .init({
    resources:{
      en:{
        translation:{
          Type:'Type',
          EspecialAtack:'Attack Especial',
          Def:'Defense'    
        }
      },
      es:{
        translation:{
          Type:'Tipo',
          EspecialAtack:'Ataque especial',
          Def:'Defensa'
        }
      }
    },
    lng: defaultLocale,
    fallbackLng: 'es',
    interpolation:{
      escapeValue:false
    }
  })