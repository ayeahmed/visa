document.addEventListener('DOMContentLoaded', function() {

  const languages = [
    "Afrikaans (Afrikaans)", "Albanian (Shqip)", "Amharic (አማርኛ)", "Arabic (العربية)", "Armenian (Հայերեն)",
    "Azerbaijani (Azərbaycan dili)", "Basque (Euskara)", "Belarusian (Беларуская)", "Bengali (বাংলা)", "Bosnian (Bosanski)",
    "Bulgarian (Български)", "Catalan (Català)", "Cebuano (Cebuano)", "Chinese (Simplified) (简体中文)", "Chinese (Traditional) (繁體中文)",
    "Corsican (Corsu)", "Croatian (Hrvatski)", "Czech (Čeština)", "Danish (Dansk)", "Dutch (Nederlands)", "English (English)",
    "Esperanto (Esperanto)", "Estonian (Eesti)", "Finnish (Suomi)", "French (Français)", "Frisian (Frysk)", "Galician (Galego)",
    "Georgian (ქართული)", "German (Deutsch)", "Greek (Ελληνικά)", "Gujarati (ગુજરાતી)", "Haitian Creole (Kreyòl ayisyen)",
    "Hausa (Hausa)", "Hawaiian (ʻŌlelo Hawaiʻi)", "Hebrew (עברית)", "Hindi (हिन्दी)", "Hmong (Hmoob)", "Hungarian (Magyar)",
    "Icelandic (Íslenska)", "Igbo (Asụsụ Igbo)", "Indonesian (Bahasa Indonesia)", "Irish (Gaeilge)", "Italian (Italiano)",
    "Japanese (日本語)", "Javanese (Basa Jawa)", "Kannada (ಕನ್ನಡ)", "Kazakh (Қазақ тілі)", "Khmer (ខ្មែរ)", "Kinyarwanda (Ikinyarwanda)",
    "Korean (한국어)", "Kurdish (Kurdî)", "Kyrgyz (Кыргызча)", "Lao (ລາວ)", "Latin (Latina)", "Latvian (Latviešu)", "Lithuanian (Lietuvių)",
    "Luxembourgish (Lëtzebuergesch)", "Macedonian (Македонски)", "Malagasy (Malagasy)", "Malay (Bahasa Melayu)", "Malayalam (മലയാളം)",
    "Maltese (Malti)", "Maori (Māori)", "Marathi (मराठी)", "Mongolian (Монгол)", "Myanmar (Burmese) (မြန်မာ)", "Nepali (नेपाली)",
    "Norwegian (Norsk)", "Nyanja (Chichewa) (Chinyanja)", "Odia (Oriya) (ଓଡ଼ିଆ)", "Pashto (پښتو)", "Persian (فارسی)", "Polish (Polski)",
    "Portuguese (Português)", "Punjabi (ਪੰਜਾਬੀ)", "Romanian (Română)", "Russian (Русский)", "Samoan (Gagana Samoa)", "Scots Gaelic (Gàidhlig)",
    "Serbian (Српски)", "Sesotho (Sesotho)", "Shona (ChiShona)", "Sindhi (سنڌي)", "Sinhala (Sinhalese) (සිංහල)", "Slovak (Slovenčina)",
    "Slovenian (Slovenščina)", "Somali (Soomaali)", "Spanish (Español)", "Sundanese (Basa Sunda)", "Swahili (Kiswahili)", "Swedish (Svenska)",
    "Tagalog (Filipino) (Tagalog)", "Tajik (Тоҷикӣ)", "Tamil (தமிழ்)", "Tatar (Татар)", "Telugu (తెలుగు)", "Thai (ไทย)", "Turkish (Türkçe)",
    "Turkmen (Türkmen)", "Ukrainian (Українська)", "Urdu (اردو)", "Uyghur (ئۇيغۇرچە)", "Uzbek (Oʻzbek)", "Vietnamese (Tiếng Việt)",
    "Welsh (Cymraeg)", "Xhosa (isiXhosa)", "Yiddish (ייִדיש)", "Yoruba (Yorùbá)", "Zulu (isiZulu)"
];

                  
  const visaStatuses = ["F-1", "DACA", "H-1B", "J-1", "B-1/B-2", "L-1", "O-1", "P-1", "R-1", "TN", "E-2", "EB-5"];
  const countries = ["United States", "Canada", "Mexico", "United Kingdom", "Germany", "France", "India", "China", "Japan", "Australia", "Brazil", "South Africa", "Nigeria", "Russia", "Italy", "Spain", "South Korea", "Argentina", "Saudi Arabia", "Turkey", "Netherlands", "Sweden", "Switzerland", "Belgium", "Norway", "Austria", "Denmark", "Finland", "Ireland", "New Zealand", "Singapore", "Malaysia", "Thailand", "Vietnam", "Philippines", "Indonesia", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", "Afghanistan", "Iran", "Iraq", "Syria", "Jordan", "Lebanon", "Israel", "Palestine", "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Sudan", "Ethiopia", "Kenya", "Uganda", "Tanzania", "Ghana", "Ivory Coast", "Senegal", "Cameroon", "Angola", "Zimbabwe", "Zambia", "Mozambique", "Botswana", "Namibia", "Mauritius", "Seychelles", "Fiji", "Papua New Guinea", "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati", "Tuvalu", "Nauru", "Palau", "Micronesia", "Marshall Islands"];

  const languageSelect = document.createElement('select');
  languages.forEach(language => {
      const option = document.createElement('option');
      option.value = language;
      option.textContent = language;
      languageSelect.appendChild(option);
  });

  const visaSelect = document.createElement('select');
  visaStatuses.forEach(status => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = status;
      visaSelect.appendChild(option);
  });

  const countrySelect = document.createElement('select');
  countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
  });

  const globeIcon = document.createElement('div');
  globeIcon.innerHTML = '🌍❤️';
  globeIcon.style.fontSize = '50px';

  const languageLabel = document.createElement('label');
  languageLabel.textContent = 'Select your language: ';
  languageLabel.appendChild(languageSelect);

  const visaLabel = document.createElement('label');
  visaLabel.textContent = "What's your visa status? ";
  visaLabel.appendChild(visaSelect);

  const countryLabel = document.createElement('label');
  countryLabel.textContent = "What country are you from? ";
  countryLabel.appendChild(countrySelect);

  const uploadLabel = document.createElement('label');
  uploadLabel.textContent = 'Upload your documents: ';
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';
  uploadInput.accept = '.pdf, .jpeg, .png';
  uploadLabel.appendChild(uploadInput);

  const questionLabel = document.createElement('label');
  questionLabel.textContent = 'What can we help you find? ';
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionLabel.appendChild(questionInput);

  document.body.appendChild(globeIcon);
  document.body.appendChild(languageLabel);

  languageSelect.addEventListener('change', function() {
      globeIcon.style.position = 'absolute';
      globeIcon.style.top = '10px';
      globeIcon.style.left = '50%';
      globeIcon.style.transform = 'translateX(-50%)';
      globeIcon.style.fontSize = '100px';

      document.body.appendChild(visaLabel);
  });

  visaSelect.addEventListener('change', function() {
      document.body.appendChild(countryLabel);
  });

  countrySelect.addEventListener('change', function() {
      document.body.innerHTML = '';
      document.body.appendChild(globeIcon);
      document.body.appendChild(uploadLabel);
  });

  uploadInput.addEventListener('change', function() {
      document.body.appendChild(questionLabel);
  });
});
