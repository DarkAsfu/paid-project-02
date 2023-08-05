import useTitle from "../../../hooks/useTitle";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";

const Contact = () => {
    useTitle('RoyalCpaNetwork  | Contact')
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Location></Location>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;