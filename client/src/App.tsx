import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // JSON-LD Structured Data for LocalBusiness
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "株式会社士（SAMURAI CORPORATION）",
      "image": "https://www.samurai-cleaning.osaka.jp/logo.png",
      "description": "大阪を拠点に民泊清掃・ホテル清掃・ハウスクリーニング・店舗清掃を専門とする清掃サービス企業",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "大阪府大阪市浪速区元町3丁目1-3 第6辻本ビル201号",
        "postalCode": "556-0022",
        "addressLocality": "大阪市",
        "addressRegion": "大阪府",
        "addressCountry": "JP"
      },
      "telephone": "080-5706-1234",
      "url": "https://www.samurai-cleaning.osaka.jp",
      "sameAs": [
        "https://www.instagram.com/osaka.cleaning.samurai/"
      ],
      "areaServed": "大阪府",
      "priceRange": "¥¥",
      "serviceType": ["民泊清掃", "ホテル清掃", "ハウスクリーニング", "店舗清掃", "残置物回収"]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
