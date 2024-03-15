import React from "react";
import Image from "next/image";
import Subscribe from "../components/Subscribe";

const page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto  bg-white shadow-md">
        <div className="bg-gray-100 w-full text-center  flex items-center justify-center ">
          {/* <Image src="https://www.shutterstock.com/image-photo/ai-technology-artificial-intelligence-man-using-2263545623" alt="Banner" width={200}  height={100} className=" h-96 w-full" /> */}
          <Image
            src="/privacy-img/privacy_policy-min.png"
            alt="Banner"
            width={200}
            height={100}
            className=" h-96 w-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black shadow-md">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-8 gap-10 ">
          <div className=" md:col-span-2 sm:col-span-1">
            <h3 className="text-3xl font-semibold  pb-4">
              Notion Business Solution (NBS) Privacy Policy: Your Privacy Matters
            </h3>
            <p className="font-normal mt-2 leading-loose">
              At Tekpill, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your personal information when you use our website. By
              accessing and using Tekpill, you consent to the practices
              described in this Privacy Policy.
            </p>
            <ul className="marker:text-black list-decimal pl-5 space-y-3 mt-6  leading-loose ">
              <li>
                {" "}
                <span className="font-semibold">Information We Collect : </span>
                <ul className="list-square marker:text-sky-400  list-inside">
                  <li>
                    {" "}
                    Personal Information  : We may collect personal information,
                    such as your name and email address, when you voluntarily
                    submit it through our contact forms or subscribe to our
                    newsletters.
                  </li>
                  <li>
                    Non-Personal Information : We automatically collect certain
                    non-personal information, such as your IP address, browser
                    type, and device information, to enhance your experience on
                    Tekpill. This information is collected through cookies and
                    similar technologies.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  How We Use Your Information
                </span>

                <ul className="list-square marker:text-sky-400  list-inside">
                  <li>
                    {" "}
                    Personal Information : We use personal information to respond
                    to your inquiries, send newsletters, and communicate with
                    you regarding Tekpill&apos;s services and updates.
                  </li>
                  <li>
                    {" "}
                    Non-Personal Information : Non-personal information is used
                    for analytical purposes to improve our website, track user
                    trends, and gather demographic information. This data is
                    aggregated and does not identify individual users.
                  </li>
                </ul>
              </li>

              <li>
                {" "}
                <span className="font-semibold">Third-Party Links : </span>
                Tekpill may contain links to third-party websites. These links
                are provided for your convenience, and Tekpill does not endorse
                or have control over the content or policies of these external
                sites. Your use of third-party websites is at your own risk.
              </li>

              <li>
                {" "}
                <span className="font-semibold">
                  Cookies and Similar Technologies :
                </span>
                Tekpill uses cookies to enhance your browsing experience.
                Cookies are small files stored on your device that allow us to
                recognize you and remember your preferences. You can manage or
                disable cookies through your browser settings, but please note
                that some features of Tekpill may be affected.
              </li>

              <li>
                {" "}
                <span className="font-semibold">Third-Party Links : </span>
                Tekpill may contain links to third-party websites. We are not
                responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party websites you visit.
              </li>

              <li>
                {" "}
                <span className="font-semibold">Data Security : </span>
                Tekpill employs reasonable security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, and destruction. However, no method of transmission
                over the internet or electronic storage is completely secure,
                and we cannot guarantee absolute security.
              </li>

              <li>
                <span className="font-semibold">Children&apos;s Privacy : </span>
                Tekpill is not directed at individuals under the age of 13. We
                do not knowingly collect or maintain personal information from
                children under 13. If we become aware that a child under 13 has
                provided us with personal information, we will take appropriate
                steps to delete such information.
              </li>

              <li>
                <span className="font-semibold">
                  Changes to the Privacy Policy :
                </span>
                Tekpill may update this Privacy Policy from time to time. Any
                changes will be effective immediately upon posting the updated
                policy on the website. It is your responsibility to review this
                Privacy Policy periodically for changes.
              </li>

              <li>
                {" "}
                <span className="font-semibold">Your Choices : </span>
                <ul className="list-square marker:text-sky-400 list-inside">
                  <li>
                    {" "}
                    Opt-Out : You may opt-out of receiving newsletters or
                    marketing communications by following the unsubscribe
                    instructions provided in the communication.
                  </li>
                  <li>
                    Cookies : You can manage or disable cookies through your
                    browser settings.
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">Contact Us : </span>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at people@notion.business.
              </li>
            </ul>
            Thank you for entrusting Tekpill with your information. We are
            dedicated to maintaining the privacy and security of your personal
            data while providing you with valuable content and services related
            to technology and gadgets.
            <Subscribe />
          </div>

          <div className=" md:col-span-1 sm:col-span-1">
            <div className="bg-gray-100 w-full h-60 text-center flex items-center justify-center ">
              {" "}
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-96 text-center mt-12 flex items-center justify-center ">
              {" "}
              Google add space
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
