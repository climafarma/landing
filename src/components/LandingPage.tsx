import { useState } from 'react';
import { ArrowRight, CheckCircle2, ThermometerSun, Bell, Download, LayoutDashboard, Server, Headphones, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

type PackageType = 'starter' | 'professional' | 'enterprise';

interface Package {
  id: PackageType;
  name: string;
  description: string;
  price: number;
  features: string[];
  badge?: string;
}

export function LandingPage() {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    pharmacyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
  });

  const features = [
    {
      icon: ThermometerSun,
      title: t('feature.realtime.title'),
      description: t('feature.realtime.description'),
    },
    {
      icon: Bell,
      title: t('feature.alerts.title'),
      description: t('feature.alerts.description'),
    },
    {
      icon: Download,
      title: t('feature.export.title'),
      description: t('feature.export.description'),
    },
    {
      icon: LayoutDashboard,
      title: t('feature.dashboard.title'),
      description: t('feature.dashboard.description'),
    },
    {
      icon: Server,
      title: t('feature.reliable.title'),
      description: t('feature.reliable.description'),
    },
    {
      icon: Headphones,
      title: t('feature.support.title'),
      description: t('feature.support.description'),
    },
  ];

  const benefits = [
    {
      title: t('benefits.compliance'),
      description: t('benefits.compliance.desc'),
    },
    {
      title: t('benefits.safety'),
      description: t('benefits.safety.desc'),
    },
    {
      title: t('benefits.efficiency'),
      description: t('benefits.efficiency.desc'),
    },
  ];

  const packages: Package[] = [
    {
      id: 'starter',
      name: t('portal.starter'),
      description: t('portal.starter.desc'),
      price: 49,
      features: [
        t('portal.starter.gateway'),
        t('portal.starter.sensors'),
        t('portal.starter.support'),
        t('portal.starter.warranty'),
      ],
    },
    {
      id: 'professional',
      name: t('portal.professional'),
      description: t('portal.professional.desc'),
      price: 89,
      badge: t('portal.professional.badge'),
      features: [
        t('portal.professional.gateway'),
        t('portal.professional.sensors'),
        t('portal.professional.support'),
        t('portal.professional.warranty'),
      ],
    },
    {
      id: 'enterprise',
      name: t('portal.enterprise'),
      description: t('portal.enterprise.desc'),
      price: 0,
      features: [
        t('portal.enterprise.gateway'),
        t('portal.enterprise.sensors'),
        t('portal.enterprise.support'),
        t('portal.enterprise.warranty'),
        t('portal.enterprise.custom'),
      ],
    },
  ];

  const handleOrderClick = (packageId: PackageType) => {
    setSelectedPackage(packageId);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order submission
    setIsDialogOpen(false);
    toast.success(t('portal.success'), {
      description: t('portal.success.message'),
    });
    
    // Reset form
    setFormData({
      pharmacyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
    });
    setSelectedPackage(null);
  };

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl tracking-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToPricing}>
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('features')}>
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border shadow-2xl">
                <ImageWithFallback
                  src="/main.png"
                  alt="ClimaFarma Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2>{t('features.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3>{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-xl">
                <ImageWithFallback
                  src="/second.png"
                  alt="Pharmacy Storage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2>{t('benefits.title')}</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3>{benefit.title}</h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2>{t('portal.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('portal.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative flex flex-col ${
                  pkg.badge ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {pkg.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {pkg.badge}
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-6">
                  <div>
                    {pkg.price > 0 ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl">€{pkg.price}</span>
                        <span className="text-muted-foreground">/ {t('portal.month')}</span>
                      </div>
                    ) : (
                      <div className="text-2xl">{t('portal.contact.sales')}</div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.badge ? 'default' : 'outline'}
                    onClick={() => handleOrderClick(pkg.id)}
                  >
                    {pkg.id === 'enterprise' ? t('portal.contact.sales') : t('portal.order')}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-white">{t('cta.title')}</h2>
              <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToPricing}
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{t('portal.form.title')}</DialogTitle>
            <DialogDescription>
              {selectedPackageData?.name} - 
              {selectedPackageData?.price ? ` €${selectedPackageData.price}/${t('portal.month')}` : ` ${t('portal.contact.sales')}`}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="pharmacyName">{t('portal.form.pharmacy')}</Label>
                <Input
                  id="pharmacyName"
                  value={formData.pharmacyName}
                  onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">{t('portal.form.contact')}</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('portal.form.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t('portal.form.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">{t('portal.form.address')}</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  rows={3}
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
              >
                {t('portal.form.cancel')}
              </Button>
              <Button type="submit">
                {t('portal.form.submit')}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
