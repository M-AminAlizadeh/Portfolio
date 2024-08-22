import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <ContactForm />
      <SocialLinks />
    </div>
  );
};

export default ContactPage;
