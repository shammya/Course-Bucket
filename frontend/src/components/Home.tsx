import { Grid, makeStyles } from "@material-ui/core";
import ImageSlider from "components/ImageCarousel";
import User from "layout/User";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CourseCarousel } from "./course/CourseCarousel";

const courses = [
  {
    title: "Free courses",
    courses: [
      {
        title: "Cyber Security A-Z™: Masterclass Course for Non-Techies",
        teacherName: "SecuritaxX Training",
        description: "description",
        price: 15.34,
        off: 10,
        rating: 4.7,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3999038_774b_3.jpg?0O6mWh_G8l9pF1oR_dGMPstU0RmR5gFUMv-vboXFLJolt16D-xtvP4Mt33KoSimt-0DNu7uEBu4A9NXepzIONkw9_uRAXpp2KJyfGhuckXI-uok6cMVFmkoBMAgGQ9cT",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3982702_080f.jpg?XhzgbicwFbp0aNwJnXU-vv9KTtW_2TNMYJPizj1oaLkASEAujVd9OHVJmsY8aBDibofLoBkpKNsWAiZtYEY8Pqk-dF3UaoPV3vC8jQQX2g3DfKDmKr7NhNTMBWewVg",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1236568_5ada_11.jpg?e_0Sx-UPqDJvyS2H1Q1pkqzWtQxIfolLpKyI-NJXKWubdn9EIQ9FRyuBCOnSmGpL8fhlaq4mEUM0A2HcR3w4jSNYTH3oDouIFqPvxqedilXccrDNZlDgHnIAgZ6PJj8YTw",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1973756_9eda_75.jpg?9T1i30Gg2W6jwGwByAQF_3UT4LRlkjLFSSExrFLHRaJiN1HLQKlCLEHOb5xBFEnts2xNbztVlgKTOU0kw2forcA2mvMSaqp1RsLmBN1MuACyFZrQmSoUhgaPEeYgufmWQQ",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/383250_6c28_10.jpg?JCCHILYNhk_gz28VD0TtBcbUSnaf6FDfTDcTfyCS1oNrAn44_HdndKVJodaBJWyiRdPA-TL--LVhaR5gHN1zUNIGUQbEwz0S_QOK9Taii8zNT2Go4vKFzitVY6CMiAhf",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-b.udemycdn.com/course/240x135/2755896_0718_2.jpg?secure=uqsrFIDRBc0b-6zV3mMT1A%3D%3D%2C1620852240",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/281138_ccf8_11.jpg?TprpjJMm8IQos4lS1CQffJPeyOwGOnN9CghuG5hNCt4LWMpR9aAQw9x5Oen1RAjY33HrgEKyRHODVoeoO3adz75AljciuiH3t0sifE98UVyYismSn8GUBLy-aY6Blypp",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1391482_1971_3.jpg?K524xlWzp_YC_-b670oyuKh3laRy_FmOilbl-FImB3Ps8omHpDejMT-vQsWlYnInYTEei_j9Oa4vtU9K0nyaY7MlloXYdMKbbgLWLpiPJqvlhPd8rSiDSaALcIKn5w_I#",
      },
    ],
  },
  {
    title: "Premium courses",
    courses: [
      {
        title: "Cyber Security A-Z™: Masterclass Course for Non-Techies",
        teacherName: "SecuritaxX Training",
        description: "description",
        price: 15.34,
        off: 10,
        rating: 4.7,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3999038_774b_3.jpg?0O6mWh_G8l9pF1oR_dGMPstU0RmR5gFUMv-vboXFLJolt16D-xtvP4Mt33KoSimt-0DNu7uEBu4A9NXepzIONkw9_uRAXpp2KJyfGhuckXI-uok6cMVFmkoBMAgGQ9cT",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3982702_080f.jpg?XhzgbicwFbp0aNwJnXU-vv9KTtW_2TNMYJPizj1oaLkASEAujVd9OHVJmsY8aBDibofLoBkpKNsWAiZtYEY8Pqk-dF3UaoPV3vC8jQQX2g3DfKDmKr7NhNTMBWewVg",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1236568_5ada_11.jpg?e_0Sx-UPqDJvyS2H1Q1pkqzWtQxIfolLpKyI-NJXKWubdn9EIQ9FRyuBCOnSmGpL8fhlaq4mEUM0A2HcR3w4jSNYTH3oDouIFqPvxqedilXccrDNZlDgHnIAgZ6PJj8YTw",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1973756_9eda_75.jpg?9T1i30Gg2W6jwGwByAQF_3UT4LRlkjLFSSExrFLHRaJiN1HLQKlCLEHOb5xBFEnts2xNbztVlgKTOU0kw2forcA2mvMSaqp1RsLmBN1MuACyFZrQmSoUhgaPEeYgufmWQQ",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/383250_6c28_10.jpg?JCCHILYNhk_gz28VD0TtBcbUSnaf6FDfTDcTfyCS1oNrAn44_HdndKVJodaBJWyiRdPA-TL--LVhaR5gHN1zUNIGUQbEwz0S_QOK9Taii8zNT2Go4vKFzitVY6CMiAhf",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-b.udemycdn.com/course/240x135/2755896_0718_2.jpg?secure=uqsrFIDRBc0b-6zV3mMT1A%3D%3D%2C1620852240",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/281138_ccf8_11.jpg?TprpjJMm8IQos4lS1CQffJPeyOwGOnN9CghuG5hNCt4LWMpR9aAQw9x5Oen1RAjY33HrgEKyRHODVoeoO3adz75AljciuiH3t0sifE98UVyYismSn8GUBLy-aY6Blypp",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1391482_1971_3.jpg?K524xlWzp_YC_-b670oyuKh3laRy_FmOilbl-FImB3Ps8omHpDejMT-vQsWlYnInYTEei_j9Oa4vtU9K0nyaY7MlloXYdMKbbgLWLpiPJqvlhPd8rSiDSaALcIKn5w_I#",
      },
    ],
  },
  {
    title: "Premium courses",
    courses: [
      {
        title: "Cyber Security A-Z™: Masterclass Course for Non-Techies",
        teacherName: "SecuritaxX Training",
        description: "description",
        price: 15.34,
        off: 10,
        rating: 4.7,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3999038_774b_3.jpg?0O6mWh_G8l9pF1oR_dGMPstU0RmR5gFUMv-vboXFLJolt16D-xtvP4Mt33KoSimt-0DNu7uEBu4A9NXepzIONkw9_uRAXpp2KJyfGhuckXI-uok6cMVFmkoBMAgGQ9cT",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/3982702_080f.jpg?XhzgbicwFbp0aNwJnXU-vv9KTtW_2TNMYJPizj1oaLkASEAujVd9OHVJmsY8aBDibofLoBkpKNsWAiZtYEY8Pqk-dF3UaoPV3vC8jQQX2g3DfKDmKr7NhNTMBWewVg",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1236568_5ada_11.jpg?e_0Sx-UPqDJvyS2H1Q1pkqzWtQxIfolLpKyI-NJXKWubdn9EIQ9FRyuBCOnSmGpL8fhlaq4mEUM0A2HcR3w4jSNYTH3oDouIFqPvxqedilXccrDNZlDgHnIAgZ6PJj8YTw",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1973756_9eda_75.jpg?9T1i30Gg2W6jwGwByAQF_3UT4LRlkjLFSSExrFLHRaJiN1HLQKlCLEHOb5xBFEnts2xNbztVlgKTOU0kw2forcA2mvMSaqp1RsLmBN1MuACyFZrQmSoUhgaPEeYgufmWQQ",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/383250_6c28_10.jpg?JCCHILYNhk_gz28VD0TtBcbUSnaf6FDfTDcTfyCS1oNrAn44_HdndKVJodaBJWyiRdPA-TL--LVhaR5gHN1zUNIGUQbEwz0S_QOK9Taii8zNT2Go4vKFzitVY6CMiAhf",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-b.udemycdn.com/course/240x135/2755896_0718_2.jpg?secure=uqsrFIDRBc0b-6zV3mMT1A%3D%3D%2C1620852240",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-c.udemycdn.com/course/240x135/1496052_f94e_3.jpg?Expires=1620843373&Signature=aeYgd-08tRLBMr8iaCzC~jetXQUM7O~O004Qm1NkPUAzbkhg6VERxOqp7UmdRus8OII8Ohhn24it1gVgWTFvTf7wlaM5HAQS2QyMLhWceNfqzG7pMsOSGzatUp7ahFX~0C8Bq~Gx5FGIlrQir~XfNLFZIvxLztw1H-~s7hH-TeFvb77kbgTVqWxmQVoPCbMb37IYbLEs6ECqVWPHZQKdO~JnpE-jc5DUooKommkyut6tqHgrFpUf5SApMEHv7pjdtOJA7WtR6XDsTm8cqVznJYCltnBrE7Fn3bO9tyryKHTgGodiI07HeUAE6Q3bwY9Z0PWHpv3dBplGu5aP9NuGIQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/281138_ccf8_11.jpg?TprpjJMm8IQos4lS1CQffJPeyOwGOnN9CghuG5hNCt4LWMpR9aAQw9x5Oen1RAjY33HrgEKyRHODVoeoO3adz75AljciuiH3t0sifE98UVyYismSn8GUBLy-aY6Blypp",
      },
      {
        title:
          "Machine Learning A-Z™: Hands-On Python & R In Data Science Machine Learning A-Z™: Hands-On Python & R In Data Science",
        teacherName: "Md. Mehedi Hasan",
        description: "description",
        price: 150,
        off: 10,
        rating: 2.5,
        numOfRating: 100,
        image:
          "https://img-a.udemycdn.com/course/240x135/1391482_1971_3.jpg?K524xlWzp_YC_-b670oyuKh3laRy_FmOilbl-FImB3Ps8omHpDejMT-vQsWlYnInYTEei_j9Oa4vtU9K0nyaY7MlloXYdMKbbgLWLpiPJqvlhPd8rSiDSaALcIKn5w_I#",
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    padding: theme.spacing(0, 4),
  },
}));

export const Home = (props) => {
  let match = useRouteMatch();
  const history = useHistory();
  console.log(props.location.state);
  const classes = useStyles();
  return (
    <User>
      <Grid container className={classes.homeContainer} direction="column">
        <Grid item>
          <ImageSlider />
        </Grid>
        <Grid item>
          {courses.map((courses) => (
            <CourseCarousel title={courses.title} courses={courses.courses} />
          ))}
        </Grid>
      </Grid>
    </User>
  );
};
