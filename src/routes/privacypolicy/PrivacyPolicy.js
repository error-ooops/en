import React from "react";
import BannerSubroute from "../../components/banner-linkedfooter/BannerSubroute";
import Header from "../../components/header/Header";
import "./PrivacyPolicy.css";
import { NavLink } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="privacypolicy">
      <Header />
      <BannerSubroute
        title="Privacy Policy"
        content="The privacy and security of your personal information is extremely  important to us. This privacy policy explains how and why we use your  personal data, to make sure you stay informed and can be confident about  giving us your information."
      />
      <div className="pp_content">
        <h1 className="pp__title">
          Your personal data is in safe hands with us
        </h1>
        <p className="pp__mainText"> We do: use your personal data to help us provide a great experience for
        you. This includes tailoring the information we share to ensure you find
        it relevant, useful and timely. <br /><br /> We do: respect your privacy and work
        hard to ensure we meet strict regulatory requirements. <br /><br /> We don’t: sell
        your personal data to third parties. <br /><br /> We’ll always protect your personal
        data and, as part of this, we regularly review our privacy notice so
        that you can see how we use your data and what your options are. If
        there are any further changes to the ‘General Data Protection
        Regulation’ (or GDPR) or related laws, we may need to amend this
        statement in the future. <br /> <br />
         A few quick notes: <ul>
             <li>This privacy policy explains
        what data we collect as well as how and why we use your personal data</li>
        <li>The policy applies to you if you’re a supporter of the Trust (whether
        that’s as a member, donor, volunteer, tenant, customer or employee) or
        use any of our services, visit our website, use our mobile app, email,
        call or write to us. In certain circumstances we may also provide an
        extra privacy notice, which will always refer to this page</li>
        <li>
        We’ll never
        sell your personal data. We will only share it with organisations we
        work with who meet our high privacy standards.
        </li>
         </ul>
          Fundacja New Heritage
        (“New Heritage”, “us”, “we” or “our”) is committed to protecting the
        privacy and confidentiality of Personal Information we may collect. New
        Heritage has created this privacy policy (“Privacy Policy”) to advise
        you about our information practices, such as the types of information we
        collect and how we may use that information, and to inform you about
        your privacy rights and how the law protects you. We urge you to read
        this Privacy Policy carefully to understand our policies and practices
        regarding your Personal Information and how we will treat it. By
        visiting any part of our Websites (as defined below) or otherwise
        providing New Heritage with Personal Information by any means, you
        accept and agree to the practices described in this Privacy Policy and
        your continued use of the Websites (following the posting of a revised
        privacy policy) means that you accept and agree to the terms of the
        revised privacy policy, so please check the policy periodically for
        updates. <br /><br /> Individuals in the European Union (“EU”) should be sure to read
        the important information provided below, in addition to the other
        provisions in this Privacy Policy. <br /><br /> I. IMPORTANT INFORMATION AND WHO WE
        ARE  <br /><br /> A. Application of this privacy policy <br /> <br /> This Privacy Policy applies to
        www.nheritage.org and all other websites, features, or online services
        that are owned or controlled by New Heritage and that post a link to
        this Privacy Policy (collectively, the “Websites”), whether accessed via
        computer, mobile device, or otherwise. Note, however, this Privacy
        Policy does not apply to use of unaffiliated websites that link to our
        Websites. Once you enter another website (whether through an
        advertisement, service, or content link), be aware that we are not
        responsible for the privacy practices of such other websites. <br /> <br /> B. Purpose
        of this privacy policy This Privacy Policy aims to give you information
        on how New Heritage collects and uses your Personal Information through
        your use of the Websites, including any information you may provide
        through the Websites when you sign up for an account, sign up to receive
        information or communications from us, purchase a product or service, or
        request further services or information from us. <br /><br /> It is important that
        you read this Privacy Policy together with any other privacy notice or
        fair processing notice we may provide on specific occasions when we are
        collecting or using Personal Information about you so that you are fully
        aware of how and why we are using your information. This Privacy Policy
        supplements the other notices and is not intended to override them. <br /><br /> C.
        Children <br /><br /> The Websites are not designed for, or directed to, children
        under the age of 16 and New Heritage does not intentionally collect
        information about anyone under the age of 16 on the Websites. If New
        Heritage discovers that it has inadvertently collected Personal
        Information from anyone younger than the age of 16, we will attempt to
        delete the information as soon as possible. If you believe that we might
        have any Personal Information from a child under 16, please contact us
        at privacy@nheritage.org. <br /><br /> D. Changes to the privacy policy and your duty
        to inform us of changes <br /><br /> This version was last updated on September 10,
        2020 and historic versions can be obtained by contacting us. <br /><br /> We reserve
        the right, at any time and without notice, to add to, change, update or
        modify this Privacy Policy, simply by posting such change, update or
        modification on the Websites. Any such change, update or modification
        will be effective immediately upon posting on the Websites. If we make
        material changes to this Privacy Policy, we will notify you by email.
        However, unless you consent, New Heritage will not use your Personal
        Information in a manner materially different than what was stated in our
        posted Privacy Policy at the time your Personal Information was
        collected. Please check this Privacy Policy regularly to ensure you are
        aware of any changes in our practices. <br /><br /> It is important that the Personal
        Information we hold about you is accurate and current. Please keep us
        informed if your Personal Information changes during your relationship
        with us. You are responsible for maintaining the accuracy of the
        information you submit to us, such as your contact information. If you
        contact us with changes, we will make good faith efforts to make
        requested changes in our then-active databases as soon as reasonably
        practicable. Note, however, that information may persist internally for
        our administrative purposes and that residual data may remain on backup
        media or for other reasons.</p>
      </div>
      <div className="footer__bottom">
        <p>
          Copyright © 2021 New Heritage Poland — Wszelkie prawa zastrzeżone.
        </p>
        <ul className="footer__bottomCollection">
          <li className="footer__bottomItem">
            {" "}
            <NavLink to="/">PRIVACY POLICY</NavLink>
          </li>
          <li className="footer__bottomItem">
            {" "}
            <NavLink to="/">STATUTE</NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
