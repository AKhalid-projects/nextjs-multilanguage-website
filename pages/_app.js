import "../styles/tailwind.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import BlogPost from "../components/BlogPost";
import Feature from "../components/Feature";
import FeaturedPosts from "../components/FeaturedPosts";
import Grid from "../components/Grid";
import Page from "../components/Page";
import PostsList from "../components/PostsList";
import Text from "../components/Text";
import Teaser  from "../components/Teaser";
import FeaturedCourses from "../components/FeaturedCourses";
import Course from "../components/Course";
import CoursesList from "../components/CoursesList";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";


const components = {
  feature: Feature,

  "featured-posts": FeaturedPosts,
  "featured-courses": FeaturedCourses,

  grid: Grid,
  page: Page,

  post: BlogPost,
  course: Course,

  "selected-posts": PostsList,
  "selected-courses": CoursesList,

  "about-section": AboutSection,
  "contact-section": ContactSection,
  
  teaser: Teaser,
  text: Text,

  hero: PrimaryFeatures,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
