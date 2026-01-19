import { siteConfig } from "@/content/site";

export const metadata = {
  title: siteConfig.contact.title,
  description: siteConfig.contact.description,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}