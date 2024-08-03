function redirectToLanguageSubdomain() {
    const userLanguage = navigator.language || navigator.userLanguage; // Access user's language
    const languageCode = userLanguage.substring(0, 2).toLowerCase(); // Extract the language code (e.g., 'en', 'fr')

    const supportedLanguages = ['en', 'fr']; // List of supported languages

    if (supportedLanguages.includes(languageCode)) {
      const newUrl = `${languageCode}.john-ogletree.com`; // Construct the new URL
      window.location.href = newUrl; // Redirect to the language-specific subdomain
    } else {
      // Handle unsupported languages (optional)
      window.location.href = 'en.john-ogletree.com'; // Default to English
    }
  }
  redirectToLanguageSubdomain();