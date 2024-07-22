import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";

const Terms = () => (
  <>
    <Header />
    <div className="max-w-4xl mx-auto p-8 mt-24">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using b2um.com, you agree to comply with and be bound
          by these terms and conditions. If you do not agree to these terms,
          please do not use this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Description of Services
        </h2>
        <p className="mb-4">
          b2um.com is a digital account marketplace that connects buyers and
          sellers of digital accounts. We provide a platform for users to list,
          sell, and purchase digital accounts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. User Registration</h2>
        <p className="mb-4">
          To use certain features of our website, users must register and create
          an account. Users agree to provide accurate and complete information
          during registration and to keep this information updated.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. User Responsibilities
        </h2>
        <p className="mb-4">
          Users are responsible for maintaining the confidentiality of their
          account information and for all activities that occur under their
          account. Users agree not to use the website for any unlawful or
          prohibited activities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Prohibited Conduct</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Post or transmit any content that is illegal, harmful, or violates
            the rights of others.
          </li>
          <li className="mb-2">
            Engage in fraudulent activities or transactions.
          </li>
          <li className="mb-2">
            Use the website to distribute malware or other harmful software.
          </li>
          <li className="mb-2">
            Interfere with the operation of the website or disrupt the servers
            or networks connected to the website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Listing and Selling</h2>
        <p className="mb-4">
          Sellers must ensure that the digital accounts they list are
          legitimate, accurate, and comply with all applicable laws and
          regulations. Sellers are responsible for the accuracy of the
          information provided in their listings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Buying</h2>
        <p className="mb-4">
          Buyers are responsible for reviewing the listings carefully before
          making a purchase. b2um.com does not guarantee the accuracy or
          legitimacy of any listings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Payment and Fees</h2>
        <p className="mb-4">
          All transactions on the website are subject to applicable fees. Users
          agree to pay all fees and charges associated with their use of the
          website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Disputes</h2>
        <p className="mb-4">
          In the event of a dispute between users, b2um.com may, but is not
          obligated to, assist in resolving the dispute. Users agree to resolve
          disputes directly with each other.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          10. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on the website, including text, graphics, logos, and
          images, is the property of b2um.com or its content suppliers and is
          protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          11. Limitation of Liability
        </h2>
        <p className="mb-4">
          b2um.com is not liable for any direct, indirect, incidental, or
          consequential damages arising from the use or inability to use the
          website or any content or transactions conducted through the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">12. Indemnification</h2>
        <p className="mb-4">
          Users agree to indemnify and hold b2um.com, its affiliates, and their
          respective officers, directors, employees, and agents harmless from
          any claims, liabilities, damages, and expenses arising from their use
          of the website or violation of these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">13. Changes to Terms</h2>
        <p className="mb-4">
          b2um.com reserves the right to modify these terms at any time. Users
          are encouraged to review the terms periodically. Continued use of the
          website after any changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">14. Termination</h2>
        <p className="mb-4">
          b2um.com reserves the right to terminate or suspend any user's account
          at any time for any reason, including but not limited to a breach of
          these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">15. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country/State], without regard to its conflict
          of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">16. Contact Information</h2>
        <p className="mb-4">
          For any questions or concerns regarding these terms, please
          <Link to="/contact">
            <span> Contact</span>{" "}
          </Link>
          us.
        </p>
      </section>
    </div>
    <Footer />
  </>
);

export default Terms;
