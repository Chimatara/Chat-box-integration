
// Initialize EmailJS
emailjs.init('cF36crfi065a-APCz');

const app = Vue.createApp({

  data() {
    return {

      menuOpen: false,

      isScrolled: false,

      stats: [
        { number: "500+", label: "Events Catered"   },
        { number: "12",   label: "Years Experience" },
        { number: "98%",  label: "Happy Clients"    },
        { number: "3",    label: "Cities Covered"   },
      ],

      testimonials: [
        {
          quote: "Mama's Table made our wedding unforgettable. The jollof rice alone had guests asking for the chef's number.",
          author: "Chisom & Emeka, Lagos Wedding 2024"
        },
        {
          quote: "We've used them for three company retreats. Consistent quality, professional staff, zero stress for us.",
          author: "Tunde Adeleke, HR Director, Zenith Corp"
        },
        {
          quote: "I booked them for my mum's 70th and they exceeded every expectation. Highly recommended.",
          author: "Fatima Bello, Abuja"
        },
      ],

      whyUs: [
        {
          icon: "🥘",
          title: "100% Fresh Ingredients",
          text: "We source locally every morning. Nothing frozen, nothing pre-packaged. Your guests taste the difference."
        },
        {
          icon: "👨‍🍳",
          title: "Trained Professional Chefs",
          text: "Our kitchen team trained across Nigeria and abroad. Every dish is prepared to the same high standard, every time."
        },
        {
          icon: "📋",
          title: "Custom Menus for Every Event",
          text: "No two events are the same. We work with you to design a menu that fits your theme, budget, and guest list."
        },
        {
          icon: "⏱️",
          title: "Always On Time",
          text: "We arrive early, set up fully, and serve on schedule. Your event timeline is our timeline."
        },
        {
          icon: "🌿",
          title: "Dietary Options Available",
          text: "Vegetarian, vegan, gluten-free, or allergy-specific — just let us know and we'll accommodate every guest."
        },
        {
          icon: "📞",
          title: "Dedicated Event Coordinator",
          text: "From first enquiry to final cleanup, one coordinator manages everything so you don't have to worry."
        },
      ],

      activeCategory: "All",
      categories: ["All", "Starters", "Mains", "Desserts", "Drinks"],

      menuItems: [
        { emoji: "🥗", name: "Suya Salad",               description: "Grilled suya strips on fresh greens with a smoky groundnut dressing.",    category: "Starters"  },
        { emoji: "🍲", name: "Catfish Pepper Soup",       description: "Rich, aromatic broth with tender catfish and traditional spices.",        category: "Starters"  },
        { emoji: "🧆", name: "Akara Bites",               description: "Crispy black-eyed pea fritters served with a chilli dipping sauce.",      category: "Starters"  },
        { emoji: "🍛", name: "Party Jollof Rice",         description: "Our signature smoky jollof — the dish guests always talk about.",          category: "Mains"     },
        { emoji: "🍗", name: "Peppered Chicken",          description: "Oven-roasted chicken in a bold, layered pepper sauce.",                    category: "Mains"     },
        { emoji: "🐐", name: "Peppered Goat Meat",        description: "Slow-cooked goat in a deep, rich pepper sauce. Finger-licking good.",     category: "Mains"     },
        { emoji: "🍚", name: "Egusi Soup & Pounded Yam",  description: "Silky pounded yam with hearty egusi soup and assorted meat.",             category: "Mains"     },
        { emoji: "🐟", name: "Grilled Tilapia & Fried Rice", description: "Whole grilled tilapia served with fragrant party fried rice.",          category: "Mains"     },
        { emoji: "🍮", name: "Chin Chin & Puff Puff",     description: "Classic Nigerian sweet snacks for your dessert station.",                  category: "Desserts"  },
        { emoji: "🎂", name: "Custom Event Cake",         description: "Tiered cakes designed and baked to order for your occasion.",              category: "Desserts"  },
        { emoji: "🍌", name: "Boli & Groundnut",          description: "Roasted plantain with salted groundnuts — a nostalgic crowd-pleaser.",     category: "Desserts"  },
        { emoji: "🍹", name: "Zobo Punch",                description: "Chilled hibiscus drink with ginger and pineapple.",                        category: "Drinks"    },
        { emoji: "🥤", name: "Chapman",                   description: "Nigeria's favourite party drink, made fresh on the day.",                  category: "Drinks"    },
        { emoji: "🫖", name: "Kunu & Fura da Nono",       description: "Traditional northern drinks, smooth and refreshing.",                      category: "Drinks"    },
      ],

      form: {
        name:    "",
        email:   "",
        event:   "",
        guests:  "",
        message: "",
      },

      formSubmitted: false,
    }
  },

  methods: {

    closeMenu() {
      this.menuOpen = false;
    },

    scrollToContact() {
      this.closeMenu();
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    },

    handleScroll() {
      // window.scrollY is how many pixels the user has scrolled down
      this.isScrolled = window.scrollY > 40;
    },

    submitForm() {
      if (!this.form.name || !this.form.email) {
        alert("Please fill in your name and email before submitting.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.form.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      emailjs.send('service_3dej85m', 'template_du69k4c', {
        from_name: this.form.name,
        from_email: this.form.email,
        event_type: this.form.event,
        guest_count: this.form.guests,
        message: this.form.message,
      }).then((response) => {
        console.log("Email sent successfully:", response);
        this.formSubmitted = true;

        this.form = {
          name:    "",
          email:   "",
          event:   "",
          guests:  "",
          message: "",
        };
      }).catch((error) => {
        alert("Error sending form. Please try again.");
        console.error("EmailJS error:", error);
      });
    },

  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

});

app.mount("#app");