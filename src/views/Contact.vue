<script>
  import feather from "feather-icons";
  import ContactForm from "@/components/contact/ContactForm.vue";
  import ContactDetails from "@/components/contact/ContactDetails.vue";

  export default {
    components: {
      ContactForm,
      ContactDetails,
    },
    data: () => {
      return {
        contacts: [
          {
            id:1,
            name: "Go to Linkedin profile",
            icon: "linkedin",
            redirect: true,
            url: "https://www.linkedin.com/in/miguel-ch",
          },
          {
            id: 2,
            name: "Go to Github profile",
            icon: "github",
            redirect: true,
            url: "https://github.com/miguel-ch"
          },
          {
            id: 3,
            name: "Click to mail me",
            icon: "mail",
            redirect: true,
            url: "mailto:miguelchaparroripe8@gmail.com"
          },
        ],
      };
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
</script>

<template>
  <div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
