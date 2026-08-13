export const pl = {
  navbar: {
    home: "Strona główna",
    menu: "Menu",
    projects: "Projekty",
    skills: "Umiejętności",
    about: "O mnie",
    contact: "Kontakt",
  },

  hero: {
    availability: "Dostępny do współpracy",

    titleLine1: "Buduję rzeczy,",
    titleLine2: "które",
    titleAccent: "działają.",

    description:
      "Jestem Krzysztof Buda. Tworzę backendy, API, aplikacje Android oraz rozwiązania łączące software ze światem rzeczywistym.",

    projectsButton: "Zobacz projekty",
    contactButton: "Kontakt",

    currentFocusLabel: "AKTUALNIE",
    currentFocusValue: "Rozwijam własne projekty",

    scroll: "Przewiń",
  },

  projects: {
    eyebrow: "WYBRANE PROJEKTY",

    title:
      "Najlepiej pokazuje mnie to, co zbudowałem.",

    description:
      "Od aplikacji mobilnych i backendu, przez bazy danych, aż po systemy współpracujące z rzeczywistym sprzętem.",

    viewProject: "Zobacz projekt",

    screenshotPlaceholder:
      "MIEJSCE NA SCREENSHOT",

    details: {
      back: "Wróć do projektów",
      about: "O projekcie",
      architecture: "Architektura",
      gallery: "Galeria",

      screenshotPlaceholder:
        "Miejsce na screenshot aplikacji",

      architecturePlaceholder:
        "Diagram architektury projektu dodamy tutaj później.",
    },

    mobileWaiter: {
        title: "Mobilny Kelner",
        subtitle: "ANDROID / POS",

        status: "W trakcie rozwoju",

        description:
            "Rozwijany system mobilnej obsługi gastronomii składający się z aplikacji Android oraz lokalnego serwera REST API integrującego urządzenia mobilne z istniejącym systemem POS i bazą danych Firebird.",

        problem: {
            title: "Problem",

            description:
            "Celem projektu jest umożliwienie kelnerowi pracy bezpośrednio z urządzenia mobilnego, przy jednoczesnym zachowaniu integracji z istniejącym środowiskiem gastronomicznym. Aplikacja nie zastępuje systemu POS — rozszerza go o mobilny interfejs i bezpieczną komunikację z lokalnym serwerem.",
        },

        architecture: {
            title: "Architektura",

            description:
                "System został podzielony na aplikację Android oraz lokalny backend. Klient mobilny komunikuje się z serwerem przez REST API i JSON, a backend odpowiada za autoryzację, logikę biznesową oraz dostęp do bazy Firebird systemu POS.",

            diagram: {
                mobileClient: "KLIENT MOBILNY",
                localServer: "LOKALNY SERWER",
                posDatabase: "BAZA POS",

                mobileTechnologies:
                "Kotlin · Jetpack Compose",

                serverTechnologies:
                "Python · JWT · Logika biznesowa",

                databaseTechnologies:
                "Użytkownicy · Rachunki · Zamówienia",

                apiConnection: "REST API / JSON",
                repositoryConnection: "Repozytoria",
            },
        },

        currentState: {
            title: "Co działa obecnie",

            items: [
            "Logowanie użytkownika za pomocą PIN-u.",
            "Autoryzacja oparta o JWT.",
            "Identyfikacja urządzenia mobilnego.",
            "Konfiguracja adresu lokalnego serwera.",
            "Obsługa języka polskiego, angielskiego i ukraińskiego.",
            "Motyw systemowy, jasny i ciemny.",
            "Backend oparty o FastAPI z podziałem na routery, serwisy i repozytoria.",
            "Integracja backendu z bazą danych Firebird.",
            "Podstawowa obsługa użytkowników, uprawnień, rachunków i pozycji zamówień.",
            ],
        },

        highlights: {
            title: "Najciekawsze elementy techniczne",

            items: [
            "Integracja nowoczesnej aplikacji Android z istniejącym środowiskiem POS.",
            "Oddzielenie klienta mobilnego od bezpośredniego dostępu do bazy danych.",
            "Warstwowa architektura backendu: router → service → repository → baza danych.",
            "Komunikacja REST API pomiędzy aplikacją a lokalnym serwerem.",
            "Autoryzacja JWT powiązana z użytkownikiem i urządzeniem.",
            "Projektowanie z zachowaniem kompatybilności od Androida 9.",
            ],
        },

        roadmap: {
            title: "Dalszy rozwój",

            items: [
            "Główny panel pracy kelnera po zalogowaniu.",
            "Synchronizacja danych z systemem POS.",
            "Pełna obsługa stolików i rachunków.",
            "Dodawanie i edycja pozycji zamówień.",
            "Obsługa komentarzy i modyfikatorów pozycji.",
            "Rozszerzenie obsługi urządzeń i drukowania.",
            "Dalsze testy integracyjne backendu i aplikacji mobilnej.",
            ],
        },

            gallery: {
            title: "Aktualny interfejs",

            description:
                "Interfejs aplikacji jest nadal rozwijany. Poniższe ekrany pokazują aktualny stan projektu, w tym logowanie, menu oraz konfigurację aplikacji.",

            featuredAlt:
                "Mobilny Kelner — ekran logowania PIN",

            loginAlt:
                "Mobilny Kelner — ekran logowania",

            menuAlt:
                "Mobilny Kelner — menu aplikacji",

            connectionAlt:
                "Mobilny Kelner — konfiguracja połączenia",

            settingsAlt:
                "Mobilny Kelner — ustawienia aplikacji",
            },
    },

    garage: {
      title: "System zarządzania garażem",
      subtitle: "IOT / BACKEND / ANDROID",

      description:
        "Kompletny system łączący aplikację Android, serwer HTTP, Raspberry Pi oraz bazę danych MySQL. System steruje bramą garażową, alarmem i oświetleniem.",
    },

    pizza: {
      title: "Aplikacja do zamawiania pizzy",
      subtitle: "APPLICATION / DATABASE",

      description:
        "Dwuosobowy projekt aplikacji do obsługi zamówień wraz z integracją i obsługą bazy danych.",
    },

    calculator: {
      title: "Kalkulator elektroniczny",
      subtitle: "C++ / DESKTOP",

      description:
        "Aplikacja desktopowa napisana w C++ do obliczania podstawowych zależności i parametrów elektronicznych.",
    },
  },

  skills: {
    eyebrow: "TECHNOLOGIE I UMIEJĘTNOŚCI",

    title:
      "Narzędzia dobieram do problemu.",

    description:
      "Najczęściej pracuję przy backendzie, aplikacjach Android, bazach danych oraz rozwiązaniach łączących oprogramowanie ze sprzętem.",

    backend: "Backend & API",
    mobile: "Mobile",
    databases: "Bazy danych",
    systems: "Systemy & sieci",
    embedded: "Embedded & elektronika",
    tools: "Narzędzia",
  },

  about: {
    eyebrow: "O MNIE",

    title:
      "Software to tylko część układanki.",

    lead:
      "Najbardziej interesują mnie projekty, w których kod rozwiązuje rzeczywisty problem — szczególnie gdy łączy się z urządzeniami, siecią lub istniejącym systemem.",

    paragraph1:
      "Moje zaplecze wywodzi się z mechatroniki oraz elektroniki i telekomunikacji. Dzięki temu patrzę na aplikację nie tylko od strony kodu, ale również całego środowiska, w którym ma działać.",

    paragraph2:
      "Rozwijam się przede wszystkim w Pythonie, backendzie, API, Kotlinie i Androidzie. W pracy miałem również kontakt z sieciami, urządzeniami, bazami Firebird oraz wdrażaniem i diagnozowaniem systemów działających u klientów.",

    philosophyLabel: "SPOSÓB MYŚLENIA",

    philosophy:
      "Lubię wiedzieć nie tylko jak coś napisać, ale również dlaczego działa — i co znajduje się po drugiej stronie API.",

    timeline: {
      mechatronics: {
        title: "Technik Mechatronik",
        subtitle:
          "ZST Mechanik · Jelenia Góra",

        description:
          "Pierwsze mocne połączenie mechaniki, elektroniki, automatyki oraz programowania.",
      },

      university: {
        title:
          "Elektronika i Telekomunikacja",

        subtitle:
          "Politechnika Wrocławska",

        description:
          "Studia ze specjalizacją Elektronika Cyfrowa i dalszy rozwój w kierunku programowania oraz systemów cyfrowych.",
      },

      electronics: {
        title: "Serwis elektroniki",
        subtitle: "VLAB Serwis",

        description:
          "Diagnostyka urządzeń, naprawa elektroniki, lutowanie, odzyskiwanie danych oraz praca ze sprzętem na poziomie praktycznym.",
      },

      it: {
        title:
          "Systemy, wdrożenia i software",

        subtitle:
          "Środowisko gastronomiczne / POS",

        description:
          "Konfiguracja urządzeń i sieci, wdrożenia systemów, obsługa baz danych, raportowanie oraz rozwijanie własnych narzędzi i aplikacji.",
      },
    },
  },

  contact: {
    eyebrow: "KONTAKT",

    title: "Zbudujmy coś razem.",

    description:
      "Jeśli masz ofertę pracy, ciekawy projekt albo po prostu chcesz porozmawiać o technologii — napisz.",

    status:
      "Dostępny do nowych możliwości",
  },

  footer: {
    builtWith: "Zbudowano przy użyciu",
  },
} as const;