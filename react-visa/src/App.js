document.addEventListener('DOMContentLoaded', function() {
document.body.style.background = '#ffdcec'

  const languages = [
    "Afrikaans (Afrikaans)", "Albanian (Shqip)", "Amharic (አማርኛ)", "Arabic (العربية)", "Armenian (Հայերեն)",
    "Azerbaijani (Azərbaycan dili)", "Basque (Euskara)", "Belarusian (Беларуская)", "Bengali (বাংলা)", "Bosnian (Bosanski)",
    "Bulgarian (Български)", "Catalan (Català)", "Cebuano (Cebuano)", "Chinese (Simplified) (简体中文)", "Chinese (Traditional) (繁體中文)",
    "Corsican (Corsu)", "Croatian (Hrvatski)", "Czech (Čeština)", "Danish (Dansk)", "Dutch (Nederlands)", "English (English)",
    "Esperanto (Esperanto)", "Estonian (Eesti)", "Finnish (Suomi)", "French (Français)", "Frisian (Frysk)", "Galician (Galego)",
    "Georgian (ქართული)", "German (Deutsch)", "Greek (Ελληνικά)", "Gujarati (ગુજરાતી)", "Haitian Creole (Kreyòl ayisyen)",
    "Hausa (Hausa)", "Hawaiian ('Ōlelo Hawai'i)", "Hebrew (עברית)", "Hindi (हिन्दी)", "Hmong (Hmoob)", "Hungarian (Magyar)",
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
      //option.style.scale = '1.5'
      option.textContent = language;
      option.text.fontSize = '40px';
      languageSelect.appendChild(option);
  });

  const visaSelect = document.createElement('select');
  visaStatuses.forEach(status => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = status;
      option.text.fontSize = '40px';
      visaSelect.appendChild(option);
  });

  const countrySelect = document.createElement('select');
  countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      option.text.fontSize = '40px';
      countrySelect.appendChild(option);
  });

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.textAlign = 'center';
  container.style.height = '50vh'; // Initial position
  container.style.width = '100vw';
  container.style.transition = 'height 0.5s ease'; // Smooth transition for height change
  document.body.appendChild(container);

  // Create the globe icon
  const globeIcon = document.createElement('div');
  globeIcon.innerHTML = '🌍';
  globeIcon.style.fontSize = '70px';
  container.appendChild(globeIcon);

  // Create the language label (initially hidden)
  const languageLabel = document.createElement('label');
  languageLabel.textContent = 'Select your language: ';
  languageLabel.style.fontSize = '20px';
  languageLabel.style.display = 'none'; // Hide initially
  languageLabel.style.transition = 'height 0.5s ease, opacity 0.5s ease';
  languageLabel.appendChild(languageSelect);
  container.appendChild(languageLabel);

  // create visa question (initially hidden)
  const visaLabel = document.createElement('label');
  visaLabel.textContent = "What's your visa status?";
  visaLabel.style.fontSize = '20px';
  visaLabel.style.display = 'none'; // Hide initially
  visaLabel.style.transition = 'height 0.5s ease, opacity 0.5s ease';
  visaLabel.appendChild(visaSelect);
  container.appendChild(visaLabel);

  // Function to show the language label and move the container
  function showLanguageLabel() {
    container.style.height = '40vh'; // Move container up
    languageLabel.style.display = 'block'; // Show the language label
  }

  // Function to show the visa question
  function showVisaQuestion() {
    container.style.height = '35vh';
    visaLabel.style.display = 'block'; // Show the visa question

  }

  // Delay before showing the language label
  setTimeout(showLanguageLabel, 2000); // Adjust the delay as needed (2000ms = 2 seconds)

// Event listener for language selection
  languageSelect.addEventListener('change', function() {
    showVisaQuestion();
    document.body.appendChild(visaLabel);
  });

  const countryLabel = document.createElement('label');
  countryLabel.textContent = "What country are you from? ";
  countryLabel.appendChild(countrySelect);
  countryLabel.style.fontSize = '20px';
  countryLabel.style.display = 'none'; // Hide initially
  countryLabel.style.transition = 'height 0.5s ease, opacity 0.5s ease';
  countryLabel.appendChild(countrySelect);
  container.appendChild(countryLabel);

  // Function to show the visa question
  function showCountryQuestion() {
    container.style.height = '30vh';
    countryLabel.style.display = 'block'; // Show the visa question
  }

// Event listener for language selection
  visaSelect.addEventListener('change', function(){
    showCountryQuestion();
    document.body.appendChild(countryLabel);
    setTimeout(showUploadPrompt, 2000);
  });

  const uploadLabel = document.createElement('label');
  uploadLabel.textContent = 'Upload your documents: ';
  uploadLabel.style.position = 'relative';
  uploadLabel.style.display = 'none';
  uploadLabel.style.fontSize = '20px';
  uploadLabel.style.transition = 'height 0.5s ease, opacity 0.5s ease';
  uploadLabel.style.alignItems = 'center';
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';
  uploadInput.accept = '.pdf, .jpeg, .png';
  uploadInput.style.display = 'none';
  uploadInput.style.transition = 'height 0.5s ease, opacity 0.5s ease';
  uploadLabel.appendChild(uploadInput);
  container.appendChild(uploadLabel);

    // Function to show the visa question
    function showUploadPrompt() {
      hidePreviousQuestions();
      uploadInput.style.display = 'block';
      uploadLabel.style.display = 'block';  
    }
  
    function hidePreviousQuestions() {
      languageLabel.style.display = 'none'; // Show the language label
      countryLabel.style.display = 'none';
      visaLabel.style.display = 'none';
      container.remove(countryLabel);
      container.remove(languageLabel);
      container.remove(visaLabel);
    }

  const questionLabel = document.createElement('label');
  questionLabel.textContent = 'What can we help you find? ';
  const questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionLabel.appendChild(questionInput);

  document.body.appendChild(globeIcon);
  document.body.appendChild(languageLabel);

  // visaSelect.addEventListener('change', function() {
  //     document.body.appendChild(countryLabel);
  // });

  countrySelect.addEventListener('change', function() {
      document.body.innerHTML = '';
      document.body.appendChild(globeIcon);
      document.body.appendChild(uploadLabel);
  });

  uploadInput.addEventListener('change', function() {
      document.body.appendChild(questionLabel);
  });
});
