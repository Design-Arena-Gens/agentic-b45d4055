"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  CircleDollarSign,
  Gauge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Car = {
  id: number;
  name: string;
  brand: string;
  bodyStyle: string;
  fuelType: string;
  price: number;
  mileage: number;
  year: number;
  transmission: string;
  horsepower: number;
  drivetrain: string;
  location: string;
  image: string;
  featuredScore: number;
  tags: string[];
};

type SelectOption = {
  label: string;
  value: string;
};

const inventory: Car[] = [
  {
    id: 1,
    name: "2024 Tesla Model S Plaid",
    brand: "Tesla",
    bodyStyle: "Sedan",
    fuelType: "Electric",
    price: 108990,
    mileage: 1200,
    year: 2024,
    transmission: "Automatic",
    horsepower: 1020,
    drivetrain: "AWD",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.94,
    tags: ["Autopilot", "Carbon Fiber", "0-60 in 1.99s"],
  },
  {
    id: 2,
    name: "2023 BMW M4 Competition xDrive",
    brand: "BMW",
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    price: 87450,
    mileage: 9800,
    year: 2023,
    transmission: "Automatic",
    horsepower: 503,
    drivetrain: "AWD",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1617813489435-1fa1f6ab7c80?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.91,
    tags: ["Executive Package", "Carbon Roof", "Harman Kardon"],
  },
  {
    id: 3,
    name: "2022 Audi Q8 Prestige 55 TFSI",
    brand: "Audi",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    price: 68990,
    mileage: 15800,
    year: 2022,
    transmission: "Automatic",
    horsepower: 335,
    drivetrain: "AWD",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.82,
    tags: ["Air Suspension", "Panoramic Roof", "Bang & Olufsen"],
  },
  {
    id: 4,
    name: "2024 Mercedes-Benz GLE 450 4MATIC",
    brand: "Mercedes-Benz",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    price: 77420,
    mileage: 2400,
    year: 2024,
    transmission: "Automatic",
    horsepower: 375,
    drivetrain: "AWD",
    location: "Los Angeles, CA",
    image:
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.88,
    tags: ["MBUX Hyperscreen", "AMG Line", "Driver Assistance"],
  },
  {
    id: 5,
    name: "2021 Porsche 911 Carrera S",
    brand: "Porsche",
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    price: 124500,
    mileage: 9200,
    year: 2021,
    transmission: "PDK",
    horsepower: 443,
    drivetrain: "RWD",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.97,
    tags: ["Sport Chrono", "Rear-Axle Steering", "Burmester Audio"],
  },
  {
    id: 6,
    name: "2020 Lexus RX 450h F SPORT",
    brand: "Lexus",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    price: 45990,
    mileage: 27200,
    year: 2020,
    transmission: "Automatic",
    horsepower: 308,
    drivetrain: "AWD",
    location: "Denver, CO",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.73,
    tags: ["Mark Levinson", "Triple-Beam LED", "One Owner"],
  },
  {
    id: 7,
    name: "2023 Ford Bronco Raptor",
    brand: "Ford",
    bodyStyle: "SUV",
    fuelType: "Gasoline",
    price: 89200,
    mileage: 3100,
    year: 2023,
    transmission: "Automatic",
    horsepower: 418,
    drivetrain: "4WD",
    location: "Salt Lake City, UT",
    image:
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.86,
    tags: ["HOSS 4.0", "37\" Tires", "Ford Co-Pilot360"],
  },
  {
    id: 8,
    name: "2022 Range Rover Autobiography LWB",
    brand: "Land Rover",
    bodyStyle: "SUV",
    fuelType: "Hybrid",
    price: 139900,
    mileage: 5400,
    year: 2022,
    transmission: "Automatic",
    horsepower: 523,
    drivetrain: "AWD",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1523980412194-7eeffa0b5b4d?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.95,
    tags: ["Executive Seating", "Meridian 3D", "Rear Seat Entertainment"],
  },
  {
    id: 9,
    name: "2024 BMW i4 eDrive40 Gran Coupe",
    brand: "BMW",
    bodyStyle: "Sedan",
    fuelType: "Electric",
    price: 62520,
    mileage: 850,
    year: 2024,
    transmission: "Automatic",
    horsepower: 335,
    drivetrain: "RWD",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.79,
    tags: ["M Sport", "Driving Assistant Pro", "320 Mile Range"],
  },
  {
    id: 10,
    name: "2023 Toyota GR Supra 3.0 Premium",
    brand: "Toyota",
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    price: 58900,
    mileage: 4800,
    year: 2023,
    transmission: "Manual",
    horsepower: 382,
    drivetrain: "RWD",
    location: "Phoenix, AZ",
    image:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=1600&q=80&auto=format&fit=crop",
    featuredScore: 0.77,
    tags: ["Driver Assistance", "Adaptive Suspension", "Brembo Brakes"],
  },
];

const brandOptions: SelectOption[] = [
  { label: "All brands", value: "All" },
  ...Array.from(new Set(inventory.map((car) => car.brand)))
    .sort()
    .map((brand) => ({ label: brand, value: brand })),
];

const bodyStyleOptions: SelectOption[] = [
  { label: "All body styles", value: "All" },
  ...Array.from(new Set(inventory.map((car) => car.bodyStyle)))
    .sort()
    .map((style) => ({ label: style, value: style })),
];

const fuelTypeOptions: SelectOption[] = [
  { label: "All fuel types", value: "All" },
  ...Array.from(new Set(inventory.map((car) => car.fuelType)))
    .sort()
    .map((fuel) => ({ label: fuel, value: fuel })),
];

const budgetOptions: SelectOption[] = [
  { label: "Any Budget", value: "any" },
  { label: "Under $40K", value: "under-40" },
  { label: "$40K - $70K", value: "40-70" },
  { label: "$70K - $120K", value: "70-120" },
  { label: "$120K+", value: "120-plus" },
];

const sortOptions: SelectOption[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Model Year", value: "newest" },
  { label: "Lowest Mileage", value: "mileage" },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

const heroStats = [
  { label: "Vehicles Delivered", value: "2.4K+" },
  { label: "Concierge Partners", value: "34" },
  { label: "Verified Reviews", value: "4.9★" },
];

type ExperienceHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const experienceHighlights: ExperienceHighlight[] = [
  {
    title: "Precision Certified",
    description:
      "200+ point mechanical validation and digital history reports for every vehicle.",
    icon: ShieldCheck,
  },
  {
    title: "Concierge Financing",
    description:
      "Tailored lease and loan structures with in-house underwriters and instant approvals.",
    icon: CircleDollarSign,
  },
  {
    title: "48-Hour Delivery",
    description:
      "Schedule seamless white-glove delivery nationwide with live vehicle tracking.",
    icon: CalendarCheck,
  },
  {
    title: "Performance Insights",
    description:
      "Advanced telemetry and ownership analytics to optimize every driving experience.",
    icon: Gauge,
  },
];

const testimonials = [
  {
    name: "Camila Jensen",
    title: "Founder, Jensen Studio",
    quote:
      "Ignition Motors transformed the way we procure executive vehicles. The digital appraisal and delivery flow was effortless.",
  },
  {
    name: "Marcus Reid",
    title: "Product Lead, Loopware",
    quote:
      "Their concierge financing team handled everything in 48 hours. I had transparent pricing and a bespoke payment plan.",
  },
  {
    name: "Alicia Gomez",
    title: "Director, Horizon Ventures",
    quote:
      "From immersive virtual tours to white-glove delivery, the service quality consistently exceeds premium dealership experiences.",
  },
];

const ownershipTimeline = [
  {
    step: "01",
    title: "Discover Your Match",
    description:
      "Filter by lifestyle, tech, and performance benchmarks. Schedule immersive virtual experiences instantly.",
  },
  {
    step: "02",
    title: "Curate the Deal",
    description:
      "Collaborate 1:1 with specialists to align pricing, trade-in, and financing in a transparent workspace.",
  },
  {
    step: "03",
    title: "Deliver & Delight",
    description:
      "Confirm delivery, unlock personalized onboarding, and track maintenance in your ownership portal.",
  },
];

function CarCard({ car }: { car: Car }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-lg shadow-slate-950/60 transition hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-slate-950/60">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          priority={car.featuredScore > 0.9}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
          {car.bodyStyle}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{car.brand}</span>
            <span>{car.year}</span>
          </div>
          <h3 className="text-xl font-semibold text-white">{car.name}</h3>
        </header>
        <dl className="grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <dt className="text-slate-400">Price</dt>
            <dd className="text-base font-semibold text-white">
              {currencyFormatter.format(car.price)}
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <dt className="text-slate-400">Mileage</dt>
            <dd className="text-base font-semibold text-white">
              {numberFormatter.format(car.mileage)} mi
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <dt className="text-slate-400">Drivetrain</dt>
            <dd className="font-semibold text-white">{car.drivetrain}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <dt className="text-slate-400">Horsepower</dt>
            <dd className="font-semibold text-white">{car.horsepower} hp</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <footer className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <div className="text-sm text-slate-400">{car.location}</div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Reserve Now
          </Link>
        </footer>
      </div>
    </article>
  );
}

function ExperienceCard({
  highlight,
}: {
  highlight: ExperienceHighlight;
}) {
  const Icon = highlight.icon;
  return (
    <div className="glass-panel relative flex h-full flex-col gap-4 rounded-3xl p-8 shadow-lg shadow-slate-950/60 transition hover:border-white/20 hover:bg-white/10">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
      <p className="text-sm leading-relaxed text-slate-300">
        {highlight.description}
      </p>
    </div>
  );
}

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedBodyStyle, setSelectedBodyStyle] = useState<string>("All");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("All");
  const [selectedBudget, setSelectedBudget] = useState<string>("any");
  const [sortOrder, setSortOrder] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredInventory = useMemo(() => {
    const matchesBudget = (car: Car) => {
      switch (selectedBudget) {
        case "under-40":
          return car.price < 40000;
        case "40-70":
          return car.price >= 40000 && car.price <= 70000;
        case "70-120":
          return car.price > 70000 && car.price <= 120000;
        case "120-plus":
          return car.price > 120000;
        default:
          return true;
      }
    };

    const byFilters = inventory.filter((car) => {
      const byBrand =
        selectedBrand === "All" || car.brand === selectedBrand;
      const byBody =
        selectedBodyStyle === "All" || car.bodyStyle === selectedBodyStyle;
      const byFuel =
        selectedFuelType === "All" || car.fuelType === selectedFuelType;
      const bySearch =
        searchQuery.trim().length === 0 ||
        `${car.brand} ${car.name} ${car.tags.join(" ")}`.toLowerCase().includes(
          searchQuery.toLowerCase(),
        );

      return byBrand && byBody && byFuel && matchesBudget(car) && bySearch;
    });

    const sorted = [...byFilters];
    switch (sortOrder) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sorted.sort((a, b) => b.year - a.year);
        break;
      case "mileage":
        sorted.sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        sorted.sort((a, b) => b.featuredScore - a.featuredScore);
    }
    return sorted;
  }, [
    selectedBrand,
    selectedBodyStyle,
    selectedFuelType,
    selectedBudget,
    sortOrder,
    searchQuery,
  ]);

  const averageMileage =
    filteredInventory.reduce((total, car) => total + car.mileage, 0) /
      (filteredInventory.length || 1);

  const averagePrice =
    filteredInventory.reduce((total, car) => total + car.price, 0) /
      (filteredInventory.length || 1);

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="section-wrapper flex flex-wrap items-center justify-between gap-4 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-emerald-400 text-lg font-bold text-slate-950">
              IM
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-white">
                Ignition Motors
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Premium Carsales
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-slate-200">
            <a href="#inventory" className="transition hover:text-white">
              Inventory
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Stories
            </a>
            <a href="#contact" className="transition hover:text-white">
              Concierge
            </a>
          </nav>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Book a Consultation
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
          <div className="section-wrapper relative grid gap-16 py-24 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
                Drive smarter
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Your next performance vehicle, curated and delivered in days.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                  Explore a digital-first marketplace for luxury, electric, and
                  performance vehicles. Compare trims, unlock transparent offers,
                  and orchestrate white-glove delivery anywhere in the country.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#inventory"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Browse inventory
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Build a trade-in plan
                </Link>
              </div>
              <dl className="grid gap-6 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-panel rounded-3xl px-6 py-5 text-center"
                  >
                    <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-3 text-2xl font-semibold text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/80 p-6 shadow-2xl shadow-slate-950/60">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1519444793793-458b1c08d26c?w=1600&q=80&auto=format&fit=crop"
                    alt="Ignition Motors flagship"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <div className="space-y-1">
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-300">
                          Spotlight build
                        </div>
                        <div className="text-lg font-semibold text-white">
                          2024 Porsche Taycan Turbo S
                        </div>
                      </div>
                      <div className="text-right text-xs uppercase tracking-[0.3em] text-slate-400">
                        0-60 in 2.4s
                        <br />
                        WLTP 290 mi
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Live financing benchmark</span>
                    <span className="rounded-full bg-emerald-500/80 px-3 py-1 text-xs font-semibold text-slate-950">
                      3.7% APR
                    </span>
                  </div>
                  <div className="w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400"
                      style={{ width: "68%" }}
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Updated hourly with partner lender data and loyalty
                    incentives for qualified buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="inventory"
          className="relative -mt-24 pb-24 pt-12 sm:-mt-32 lg:-mt-40"
        >
          <div className="section-wrapper">
            <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/60 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-8 pb-10">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                      Curated inventory, ready for delivery
                    </h2>
                    <p className="max-w-2xl text-base text-slate-300">
                      Filter by driving profile, compare specs in real time, and
                      secure white-glove delivery with guaranteed pricing.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                    <div className="rounded-full border border-white/10 px-4 py-2">
                      {filteredInventory.length} vehicles
                    </div>
                    <div className="rounded-full border border-white/10 px-4 py-2">
                      Avg price {currencyFormatter.format(averagePrice)}
                    </div>
                    <div className="rounded-full border border-white/10 px-4 py-2">
                      Avg mileage {numberFormatter.format(Math.round(averageMileage))} mi
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/60">
                  <div className="grid gap-4 lg:grid-cols-[2fr,auto]">
                    <div className="flex flex-wrap items-center gap-3">
                      <input
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="h-11 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-white focus:bg-white/10"
                        placeholder="Search by model, trim, or feature"
                        type="search"
                        aria-label="Search inventory"
                      />
                      <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        className="h-11 w-full rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white focus:bg-white/10 sm:w-60"
                        aria-label="Sort inventory"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Link
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                      Request concierge match
                    </Link>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <FilterSelect
                      label="Brand"
                      value={selectedBrand}
                      onChange={setSelectedBrand}
                      options={brandOptions}
                    />
                    <FilterSelect
                      label="Body style"
                      value={selectedBodyStyle}
                      onChange={setSelectedBodyStyle}
                      options={bodyStyleOptions}
                    />
                    <FilterSelect
                      label="Fuel type"
                      value={selectedFuelType}
                      onChange={setSelectedFuelType}
                      options={fuelTypeOptions}
                    />
                    <FilterSelect
                      label="Budget"
                      value={selectedBudget}
                      onChange={setSelectedBudget}
                      options={budgetOptions}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredInventory.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              {filteredInventory.length === 0 && (
                <div className="mt-10 rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-slate-300">
                  No vehicles match the selected filters. Adjust your criteria
                  or{" "}
                  <Link
                    href="#contact"
                    className="font-semibold text-white underline underline-offset-4"
                  >
                    connect with concierge
                  </Link>{" "}
                  for a custom search.
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="experience" className="relative pb-24">
          <div className="section-wrapper">
            <div className="mb-12 flex flex-col gap-4 text-center">
              <span className="mx-auto inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
                Ownership elevated
              </span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Streamlined journeys from discovery to delivery
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-300">
                We combine data-backed recommendations with human expertise to
                orchestrate every milestone of your next automotive investment.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experienceHighlights.map((highlight) => (
                <ExperienceCard key={highlight.title} highlight={highlight} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="relative pb-24"
        >
          <div className="section-wrapper">
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-10 shadow-2xl shadow-slate-950/60 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
                <div className="space-y-6">
                  <p className="uppercase tracking-[0.3em] text-slate-400">
                    Clients who lead the curve
                  </p>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Built for leaders who expect more than a showroom tour.
                  </h2>
                  <p className="text-base text-slate-300">
                    We provide transparent pricing, precision certification, and
                    concierge operations so you can focus on what matters: the
                    drive.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-emerald-400" />
                      Verified vendor network
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-sky-400" />
                      Immersive virtual showrooms
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-slate-950/40"
                    >
                      <p className="text-sm leading-relaxed text-slate-200">
                        “{testimonial.quote}”
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            {testimonial.title}
                          </div>
                        </div>
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-24">
          <div className="section-wrapper">
            <div className="grid gap-10 lg:grid-cols-3">
              {ownershipTimeline.map((phase) => (
                <div
                  key={phase.step}
                  className="glass-panel rounded-[2rem] p-8 shadow-lg shadow-slate-950/60"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Phase {phase.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative pb-28"
        >
          <div className="section-wrapper">
            <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-sky-500/10 via-slate-900/90 to-slate-900/80 p-10 shadow-2xl shadow-slate-950/60 lg:grid-cols-[1.1fr,0.9fr] lg:p-16">
              <div className="space-y-6">
                <p className="uppercase tracking-[0.3em] text-slate-200">
                  Concierge access
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Start your bespoke acquisition plan today.
                </h2>
                <p className="text-base text-slate-100">
                  Share your wishlist, trade-in details, and preferred finance
                  structure. Our specialists respond within one business hour.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-100">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    Trusted vendor network
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2">
                    <CircleDollarSign className="h-4 w-4 text-sky-300" />
                    Flexible ownership models
                  </div>
                </div>
              </div>
              <form className="glass-panel grid gap-4 rounded-[2rem] p-8 text-sm">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jordan Blake"
                    className="h-12 rounded-full border border-white/20 bg-white/10 px-4 text-white outline-none transition focus:border-white focus:bg-white/20"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Business email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="hello@company.com"
                    className="h-12 rounded-full border border-white/20 bg-white/10 px-4 text-white outline-none transition focus:border-white focus:bg-white/20"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="vehicle" className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Vehicle interest
                  </label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    className="h-12 rounded-full border border-white/20 bg-white/10 px-4 text-white outline-none transition focus:border-white focus:bg-white/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a flagship model
                    </option>
                    {inventory.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.brand} {car.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Goals & timeline
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Share trade-in details, subscription interest, or delivery city."
                    className="rounded-3xl border border-white/20 bg-white/10 p-4 text-white outline-none transition focus:border-white focus:bg-white/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Request concierge introduction
                </button>
                <p className="text-xs text-slate-300">
                  By submitting, you consent to secure communications from
                  Ignition Motors. No spam—unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90 py-10">
        <div className="section-wrapper flex flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900">
              IM
            </span>
            <span>Ignition Motors © {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#inventory" className="transition hover:text-white">
              Inventory
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Clients
            </a>
            <a href="#contact" className="transition hover:text-white">
              Concierge
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Crafted in Next.js · Deployed to Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
};

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps) {
  return (
    <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
      {label}
      <select
        className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-white focus:bg-white/10"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
