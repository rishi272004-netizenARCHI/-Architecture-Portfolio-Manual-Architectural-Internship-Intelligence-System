"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  ArrowLeft,
  Search,
  Sliders,
  MapPin,
  Users,
  Layers,
  Leaf,
  Briefcase,
  Cpu,
  ExternalLink,
  Star,
  Filter,
} from "lucide-react";

// Sample firm data
const sampleFirms = [
  {
    id: "1",
    name: "Morphogenesis",
    city: "Delhi NCR",
    scale: "Large",
    style: "Sustainable",
    exposure: "Design-heavy",
    bim: "Heavy",
    typology: "Institutional",
    description: "Award-winning architecture firm known for sustainable design and institutional projects.",
  },
  {
    id: "2",
    name: "Sanjay Puri Architects",
    city: "Mumbai",
    scale: "Mid-size",
    style: "Contextual",
    exposure: "Design-heavy",
    bim: "Moderate",
    typology: "Residential",
    description: "Known for innovative residential design with strong contextual response.",
  },
  {
    id: "3",
    name: "CP Kukreja Architects",
    city: "Delhi NCR",
    scale: "Large",
    style: "Corporate",
    exposure: "Technical-heavy",
    bim: "Heavy",
    typology: "Commercial",
    description: "Large-scale commercial and institutional architecture with technical excellence.",
  },
  {
    id: "4",
    name: "Biome Environmental Solutions",
    city: "Bengaluru",
    scale: "Mid-size",
    style: "Sustainable",
    exposure: "Design-heavy",
    bim: "Moderate",
    typology: "Residential",
    description: "Sustainable architecture practice focused on environmental design.",
  },
  {
    id: "5",
    name: "Studio Lotus",
    city: "Delhi NCR",
    scale: "Mid-size",
    style: "Contextual",
    exposure: "Design-heavy",
    bim: "Moderate",
    typology: "Institutional",
    description: "Design-led practice known for culturally responsive institutional projects.",
  },
  {
    id: "6",
    name: "HCP Design",
    city: "Ahmedabad",
    scale: "Large",
    style: "Contextual",
    exposure: "Technical-heavy",
    bim: "Heavy",
    typology: "Institutional",
    description: "Established firm known for institutional and urban design projects.",
  },
  {
    id: "7",
    name: "Opolis",
    city: "Mumbai",
    scale: "Small",
    style: "Minimal",
    exposure: "Design-heavy",
    bim: "Low",
    typology: "Residential",
    description: "Boutique studio focused on minimal residential and interior projects.",
  },
  {
    id: "8",
    name: "RMA Architects",
    city: "Mumbai",
    scale: "Mid-size",
    style: "Contextual",
    exposure: "Research-heavy",
    bim: "Moderate",
    typology: "Institutional",
    description: "Research-oriented practice with focus on institutional and cultural projects.",
  },
];

const filterOptions = {
  scale: ["All", "Solo", "Small", "Mid-size", "Large", "Corporate"],
  style: ["All", "Minimal", "Contextual", "Parametric", "Corporate", "Sustainable", "Urban"],
  exposure: ["All", "Design-heavy", "Technical-heavy", "BIM-heavy", "Site-heavy", "Research-heavy"],
  bim: ["All", "Heavy", "Moderate", "None"],
  typology: ["All", "Residential", "Institutional", "Commercial", "Urban", "Interior", "Mixed"],
};

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    scale: "All",
    style: "All",
    exposure: "All",
    bim: "All",
    typology: "All",
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredFirms = sampleFirms.filter(firm => {
    const matchesSearch = firm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          firm.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesScale = filters.scale === "All" || firm.scale === filters.scale;
    const matchesStyle = filters.style === "All" || firm.style === filters.style;
    const matchesExposure = filters.exposure === "All" || firm.exposure === filters.exposure;
    const matchesBim = filters.bim === "All" || firm.bim === filters.bim;
    const matchesTypology = filters.typology === "All" || firm.typology === filters.typology;
    
    return matchesSearch && matchesScale && matchesStyle && matchesExposure && matchesBim && matchesTypology;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Platform
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">Firm Intelligence Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/book">Enter Book</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Internship Intelligence Dashboard
          </h1>
          <p className="text-neutral-600">
            Comprehensive database of Indian architectural firms with detailed classification for strategic internship targeting.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-b border-amber-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-amber-800">
            <strong>Notice:</strong> This is an educational system. Firm listings are informational. Rankings are research-indexed, not endorsements. Internship opportunities are not guaranteed.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <Input
                placeholder="Search firms by name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Sliders className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 pt-4 border-t border-neutral-100">
              <div>
                <Label className="text-xs text-neutral-500 mb-1 block">Scale</Label>
                <Select value={filters.scale} onValueChange={(value) => setFilters({...filters, scale: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.scale.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs text-neutral-500 mb-1 block">Style</Label>
                <Select value={filters.style} onValueChange={(value) => setFilters({...filters, style: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.style.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs text-neutral-500 mb-1 block">Exposure</Label>
                <Select value={filters.exposure} onValueChange={(value) => setFilters({...filters, exposure: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.exposure.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs text-neutral-500 mb-1 block">BIM Usage</Label>
                <Select value={filters.bim} onValueChange={(value) => setFilters({...filters, bim: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.bim.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs text-neutral-500 mb-1 block">Typology</Label>
                <Select value={filters.typology} onValueChange={(value) => setFilters({...filters, typology: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.typology.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-500">
            Showing {filteredFirms.length} firms
          </p>
        </div>
      </section>

      {/* Firm Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFirms.map((firm) => (
              <Card key={firm.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{firm.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-neutral-500 mt-1">
                        <MapPin className="h-3 w-3" />
                        {firm.city}
                      </div>
                    </div>
                    <Badge variant="secondary">{firm.scale}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 mb-4">{firm.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Layers className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-500">Style:</span>
                      <span>{firm.style}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-500">Exposure:</span>
                      <span>{firm.exposure}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Cpu className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-500">BIM:</span>
                      <span>{firm.bim}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-3 w-3 text-neutral-400" />
                      <span className="text-neutral-500">Typology:</span>
                      <span>{firm.typology}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Star className="h-3 w-3 mr-1" />
                      Shortlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-500">
              Architecture Internship Portfolio Manual — Firm Intelligence Dashboard
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <Link href="/" className="hover:text-neutral-900">Platform</Link>
              <Link href="/book" className="hover:text-neutral-900">Master Index</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
