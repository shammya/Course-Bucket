import React from "react";
import SimpleReactFooter from "./SimpleReactFooter";

const Footer = () => {
  const description =
    "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const title = "About Us";
  const columns = [
    {
      title: "Account",
      resources: [
        {
          name: "Account Setting",
          link: "/profile-details",
        },
        {
          name: "My Course",
          link: "/my-course",
        },
        {
          name: "Create Course",
          link: "/create-course",
        },
      ],
    },
    {
      title: "Student Section",
      resources: [
        {
          name: "Review",
          link: "/dashboard/review",
        },
        {
          name: "FAQ",
          link: "/dashboard/faq",
        },
        {
          name: "Enrolled Student",
          link: "/dashboard/review",
        },
        {
          name: "Purchase History",
          link: "/dashboard/purchase-history",
        },
      ],
    },
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      // linkedin="fluffy_cat_on_linkedin"
      // facebook="fluffy_cat_on_fb"
      // twitter="fluffy_cat_on_twitter"
      // instagram="fluffy_cat_live"
      // youtube="UCFt6TSF464J8K82xeA?"
      // pinterest="fluffy_cats_collections"
      copyright="Mehedi && Shammya"
      iconColor="black"
      backgroundColor="#445F67"
      fontColor="white"
      copyrightColor="darkgrey"
    />
  );
};

export default Footer;
