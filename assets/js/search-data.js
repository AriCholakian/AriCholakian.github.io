// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "published research that I have participated in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-a-fire-upon-the-deep",
          title: 'A Fire upon the Deep',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/A_Fire_upon_the_Deep/";
            },},{id: "books-consider-phlebas",
          title: 'Consider Phlebas',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Consider_Phlebas/";
            },},{id: "books-dune-messiah",
          title: 'Dune Messiah',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Dune_Messiah/";
            },},{id: "books-ender-39-s-game",
          title: 'Ender&amp;#39;s Game',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Enders_Game/";
            },},{id: "books-fahrenheit-451",
          title: 'Fahrenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Fahrenheit_451/";
            },},{id: "books-flowers-for-algernon",
          title: 'Flowers for Algernon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Flowers_for_Algernon/";
            },},{id: "books-gateway",
          title: 'Gateway',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Gateway/";
            },},{id: "books-hyperion",
          title: 'Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Hyperion/";
            },},{id: "books-leviathan-wakes",
          title: 'Leviathan Wakes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Leviathan_Wakes/";
            },},{id: "books-nineteen-eighty-four",
          title: 'Nineteen Eighty-Four',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Nineteen_Eighty-Four/";
            },},{id: "books-parable-of-the-sower",
          title: 'Parable of the Sower',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Parable_of_the_sower/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Project_Hail_Mary/";
            },},{id: "books-rendezvous-with-rama",
          title: 'Rendezvous with Rama',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Rendezvous_with_Rama/";
            },},{id: "books-ringworld",
          title: 'Ringworld',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Ringworld/";
            },},{id: "books-the-dispossessed",
          title: 'The Dispossessed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Dispossessed/";
            },},{id: "books-dune",
          title: 'Dune',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Dune_Encyclopedia/";
            },},{id: "books-the-fall-of-hyperion",
          title: 'The Fall of Hyperion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Fall_of_Hyperion/";
            },},{id: "books-the-forever-war",
          title: 'The Forever War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Forever_War/";
            },},{id: "books-the-hitch-hiker-39-s-guide-to-the-galaxy",
          title: 'The Hitch Hiker&amp;#39;s Guide to the Galaxy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Hitch_Hikers_Guide_to_the_Galaxy/";
            },},{id: "books-the-lathe-of-heaven",
          title: 'The Lathe of Heaven',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Lathe_of_Heaven/";
            },},{id: "books-the-left-hand-of-darkness",
          title: 'The Left Hand of Darkness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Left_Hand_of_Darkness/";
            },},{id: "books-the-lord-of-the-rings",
          title: 'The Lord of the Rings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Lord_of_the_Rings/";
            },},{id: "books-the-martian",
          title: 'The Martian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Martian/";
            },},{id: "books-the-stars-my-destination",
          title: 'The Stars My Destination',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Stars_My_Destination/";
            },},{id: "books-the-three-body-problem",
          title: 'The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_Three_Body_Problem/";
            },},{id: "books-the-moon-is-a-harsh-mistress",
          title: 'The Moon is a Harsh Mistress',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_moon_is_a_harsh_mistress/";
            },},{id: "books-the-player-of-games",
          title: 'The Player of Games',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The_player_of_games/";
            },},{id: "books-we-are-legion-we-are-bob-bobiverse",
          title: 'We Are Legion (We are Bob, Bobiverse)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/We_Are_Legion/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-autonomous-rescue-robot",
          title: 'Autonomous Rescue Robot',
          description: "The Infamous Robot Summer!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%69.%63%68%6F%6C%61%6B%69%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ari-mesrob-cholakian", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AriCholakian", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://engphys.ubc.ca", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AriCholakian/resume/releases/latest/download/resume.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
