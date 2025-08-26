import { useLang } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { changeLanguage, language } = useLang();

  return (
    <div>
      <button disabled={language === 'en'} onClick={() => changeLanguage('en')}>EN</button>
      <button disabled={language === 'ar'} onClick={() => changeLanguage('ar')}>AR</button>
    </div>
  );
}
