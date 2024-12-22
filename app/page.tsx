import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PieChart, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Analyze Your Customer Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Powerful AI-driven analysis to understand customer sentiment and
              detect fake reviews. Make data-driven decisions with confidence.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Sentiment Analysis
                </h3>
                <p className="text-muted-foreground">
                  Automatically analyze customer reviews to understand sentiment
                  and emotional tone.
                </p>
              </Card>
              <Card className="p-6">
                <ShieldCheck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Fake Review Detection
                </h3>
                <p className="text-muted-foreground">
                  Identify potentially fake reviews using advanced machine
                  learning algorithms.
                </p>
              </Card>
              <Card className="p-6">
                <PieChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Visual Insights</h3>
                <p className="text-muted-foreground">
                  Get clear visual representations of your review analysis with
                  interactive charts.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Review Sentinel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
