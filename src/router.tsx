import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import AIAutomation from "./pages//services/AIAutomation";
import SeoGeo from "./pages/services/SeoGeo";
import SocialMedia from "./pages/services/SocialMedia";
import VisualProduction from "./pages/services/VisualProduction";
import WebDevelopment from "./pages/services/WebDevelopment";

import OnboardingPage from "./pages/company/OnboardingPage";
import CaseStudiesPage from "./pages/company/CaseStudiesPage";
import SystemsPage from "./pages/company/OurSystemsPage";
import PrivacyPolicyPage from "./pages/company/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/company/TermsOfServicePage";
import Contact from "./pages/Contact";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Services */}
        <Route
          path="/ai-automation"
          element={
            <Layout>
              <AIAutomation />
            </Layout>
          }
        />
        <Route
          path="/seo-geo"
          element={
            <Layout>
              <SeoGeo />
            </Layout>
          }
        />
        <Route
          path="/social-media"
          element={
            <Layout>
              <SocialMedia />
            </Layout>
          }
        />
        <Route
          path="/visual-production"
          element={
            <Layout>
              <VisualProduction />
            </Layout>
          }
        />
        <Route
          path="/web-development"
          element={
            <Layout>
              <WebDevelopment />
            </Layout>
          }
        />

        {/* Company */}
        <Route
          path="/onboarding"
          element={
            <Layout>
              <OnboardingPage />
            </Layout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <Layout>
              <CaseStudiesPage />
            </Layout>
          }
        />
        <Route
          path="/systems"
          element={
            <Layout>
              <SystemsPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfServicePage />
            </Layout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
