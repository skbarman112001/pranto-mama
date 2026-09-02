import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'About.html'),
          scholarship: path.resolve(__dirname, 'Scholarship.html'),
          service: path.resolve(__dirname, 'Service.html'),
          contact: path.resolve(__dirname, 'Contact.html'),
          siScholarship: path.resolve(__dirname, 'Services/si-scholarship-support.html'),
          stipendiumHungaricum: path.resolve(__dirname, 'Services/stipendium-hungaricum-support.html'),
          cscScholarship: path.resolve(__dirname, 'Services/chinese-csc-scholarship-support.html'),
          cheveningScholarship: path.resolve(__dirname, 'Services/chevening-scholarship-support.html'),
          czechScholarship: path.resolve(__dirname, 'Services/czech-republic-scholarship-support.html'),
          fulbrightScholarship: path.resolve(__dirname, 'Services/fulbright-scholarship-support.html'),
          mextScholarship: path.resolve(__dirname, 'Services/mext-scholarship-support.html'),
          erasmusScholarship: path.resolve(__dirname, 'Services/erasmus-and-other-scholarships.html'),
          universitySelection: path.resolve(__dirname, 'Services/university-course-selection.html'),
          applicationAssistance: path.resolve(__dirname, 'Services/application-assistance.html'),
          sopLorGuidance: path.resolve(__dirname, 'Services/sop-lor-guidance.html'),
          visaSupport: path.resolve(__dirname, 'Services/visa-application-support.html'),
          usaEmailSupport: path.resolve(__dirname, 'Services/usa-email-application-support.html'),
          australiaEmailSupport: path.resolve(__dirname, 'Services/australia-email-application-support.html'),
          commonAppSupport: path.resolve(__dirname, 'Services/common-app-application-support.html'),
          oneToOneMentorship: path.resolve(__dirname, 'Services/one-to-one-counselling-mentorship.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
