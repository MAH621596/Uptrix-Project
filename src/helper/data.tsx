import { RegionSvg, ProtocolSvg, IntegritySvg, TrendsSvg, LatenciesSvg, ComparisonSvg, AnalyticsApiSvg, CheckMarkSvg } from "@/components/svg";
import { FooterConnect, FooterLink, Envelope, Envelope2, Eye, Forgot, Key, Lock, OTP, Reset, Shield, User, Google, Apple } from "@/components/png";
import { redirect } from "next/dist/server/api-utils";

export const registerFields = [
  {
    id: "name",
    icon: User,
    type: "text",
    input_label: "Full Name",
    placeholder: "John Doe"
  },
  {
    id: "email",
    icon: Envelope,
    type: "text",
    input_label: "Email Address",
    placeholder: "name@example.com"
  },
  {
    id: "password",
    icon: Lock,
    eyeIcon: Eye,
    type: "password",
    input_label: "Password",
    placeholder: "***************"
  },
];

export const loginFields = [
  {
    id: "Email",
    icon: Envelope,
    type: "text",
    input_label: "Email Address",
    placeholder: "name@example.com"
  },
  {
    id: "Password",
    icon: Lock,
    eyeIcon: Eye,
    type: "password",
    input_label: "Password",
    placeholder: "***************"
  },
];

export const loginButtons = [
  {
    icon: Google,
    link_text: "Google",
  },
  {
    icon: Apple,
    link_text: "Apple",
  },
];

export const monitoringCardsData = [
    {
        id: 1,
        icon: <RegionSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Multi-Region Verification",
        description: "If a service goes down, we verify from 3+ independent regions to eliminate false positives."
    },
    {
        id: 2,
        icon: <IntegritySvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "SSL/TLS Integrity",
        description: "Continuous certificate chain checks. Get notified 30, 15, and 7 days before expiry."
    },
    {
        id: 3,
        icon: <ProtocolSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Custom Protocols",
        description: "Full support for HTTP/S, TCP, UDP, ICMP Ping, DNS, and custom SMTP/IMAP checks."
    },
];

export const dashboardCardsData = [
    {
        id: 1,
        icon: <RegionSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Multi-Region Verification",
        description: "If a service goes down, we verify from 3+ independent regions to eliminate false positives."
    },
    {
        id: 2,
        icon: <IntegritySvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "SSL/TLS Integrity",
        description: "Continuous certificate chain checks. Get notified 30, 15, and 7 days before expiry."
    },
    {
        id: 3,
        icon: <ProtocolSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Custom Protocols",
        description: "Full support for HTTP/S, TCP, UDP, ICMP Ping, DNS, and custom SMTP/IMAP checks."
    },
        {
        id: 4,
        icon: <TrendsSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Uptime Trends",
        description: "Calculate SLAs effortlessly with weekly/monthly uptime percentages down to 4 decimal places."
    },
    {
        id: 5,
        icon: <LatenciesSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Latencies Map",
        description: "Visualize response times globally. Identify which geographical regions are suffering from lag."
    },
    {
        id: 6,
        icon: <ComparisonSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Baseline Comparison",
        description: "Compare current performance against historical baselines to detect degradation."
    },
];

export const analyticsCardsData = [
    {
        id: 1,
        icon: <TrendsSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Uptime Trends",
        description: "Calculate SLAs effortlessly with weekly/monthly uptime percentages down to 4 decimal places."
    },
    {
        id: 2,
        icon: <LatenciesSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Latencies Map",
        description: "Visualize response times globally. Identify which geographical regions are suffering from lag."
    },
    {
        id: 3,
        icon: <ComparisonSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Baseline Comparison",
        description: "Compare current performance against historical baselines to detect degradation."
    },
    {
        id: 4,
        icon: <AnalyticsApiSvg className="fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Analytics API",
        description: "Feed your data into Grafana, Tableau, or custom internal dashboards with our REST API."
    },
];

export const precisionCardsData = [
    {
        id: 1,
        subcategory: "30s",
        description: "Min Interval"
    },
    {
        id: 2,
        subcategory: "2xx",
        description: "Status Valid"
    },
    {
        id: 3,
        subcategory: "JSON",
        description: "Payload Check"
    },
    {
        id: 4,
        subcategory: "POST",
        description: "Custom Methods"
    },
];

export const precisionContentData = [
    {
        id: 1,
        icon: <CheckMarkSvg className="min-w-[20px] min-h-[20px] fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Granular Intervals",
        description: "Choose from 30 seconds to 60 minutes for every single monitor. Calculate SLAs effortlessly with weekly/monthly uptime percentages down to 4 decimal places."
    },
    {
        id: 2,
        icon: <CheckMarkSvg className="min-w-[20px] min-h-[20px] fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Smart Status Matching",
        description: 'Define "Up" as specific status codes (e.g., allow 401 for auth endpoints).'
    },
    {
        id: 3,
        icon: <CheckMarkSvg className="min-w-[20px] min-h-[20px] fill-current text-[#10B77F] group-hover:scale-110" />,
        subcategory: "Keyword Assertion",
        description: "Ensure specific text or JSON keys are present in the response body."
    },
];

export const footerLinks = [
    {
        id: 1,
        heading: "Professional monitoring for modern infrastructure. Fast, reliable, and developer-first.",
        options: [
            FooterConnect,
            FooterLink,
        ]
    },
    {
        id: 2,
        heading: "Product",
        links: [
            "Uptime Monitoring",
            "Status Pages",
            "Incident Management",
            "API Monitoring",
        ]
    },
    {
        id: 3,
        heading: "Company",
        links: [
            "About Us",
            "Customers",
            "Security",
            "Contact",
        ]
    },
    {
        id: 4,
        heading: "Legal",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "SLA",
        ]
    },
];

export const footerSocialLinks = [
    {
        id: 1,
        link: "Twitter",
        redirect: "/twitter"
    },
    {
        id: 2,
        link: "GitHub",
        redirect: "/gitHub"
    },
    {
        id: 3,
        link: "LinkedIn",
        redirect: "/linkedIn"
    },
];