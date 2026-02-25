"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  Building2,
  Layers,
  Globe,
  Mail,
  ExternalLink,
  Briefcase,
  Cpu,
  GraduationCap,
  Clock,
  Share2,
  Sparkles,
} from "lucide-react";
import { FirmAIResearchButton } from "@/components/ai-research-button";

interface Firm {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  principalArchitect: string | null;
  yearEstablished: number | null;
  scaleCategory: string;
  tierCategory: string;
  primaryTypology: string;
  secondaryTypology: string | null;
  designOrientation: string;
  technicalOrientation: string;
  bimIntensity: string;
  internshipPotential: string | null;
  siteExposure: string | null;
  researchIntensity: string | null;
  website: string | null;
  officialEmail: string | null;
  category?: string | null;
  notes: string | null;
  createdAt: string;
}

export default function FirmDetailPage() {
  const params = useParams();
  const router = useRouter();
  const firmId = params.id as string;
  
  const [firm, setFirm] = useState<Firm | null>(null);
  const [relatedFirms, setRelatedFirms] = useState<Firm[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`/api/firms/${firmId}`)
      .then(res => res.json())
      .then(data => {
        setFirm(data.firm);
        setRelatedFirms(data.relatedFirms);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [firmId]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-200 rounded w-1/3 mb-4" />
            <div className="h-4 bg-neutral-200 rounded w-1/2 mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 h-64 bg-neutral-200 rounded" />
              <div className="h-64 bg-neutral-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!firm) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="h-12 w-12 mx-auto text-neutral-300 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Firm not found</h2>
          <Button onClick={() => router.push('/firms')}>Back to Firms</Button>
        </div>
      </div>
    );
  }
  
  const getInternshipColor = (potential: string | null) => {
    switch (potential) {
      case 'High': return 'bg-green-600';
      case 'Medium': return 'bg-yellow-600';
      case 'Low': return 'bg-neutral-500';
      default: return 'bg-neutral-400';
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/firms">Edit in Admin</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">{firm.name}</h1>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4" />
                <span>{firm.city}, {firm.state}, {firm.country}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              {firm.website && (
                <Button asChild>
                  <a href={firm.website} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Globe className="h-4 w-4" />
                    Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
              {firm.officialEmail && (
                <Button variant="outline" asChild>
                  <a href={`mailto:${firm.officialEmail}`} className="gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3">
            {firm.internshipPotential && (
              <Badge className={`${getInternshipColor(firm.internshipPotential)} text-white`}>
                Internship: {firm.internshipPotential}
              </Badge>
            )}
            <Badge variant="outline">{firm.scaleCategory}</Badge>
            <Badge variant="outline">{firm.tierCategory}</Badge>
            <Badge variant="outline">{firm.bimIntensity} BIM</Badge>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {firm.principalArchitect && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-neutral-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-neutral-500">Principal Architect</p>
                        <p className="font-medium">{firm.principalArchitect}</p>
                      </div>
                    </div>
                  )}
                  
                  {firm.yearEstablished && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-neutral-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-neutral-500">Year Established</p>
                        <p className="font-medium">{firm.yearEstablished}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-neutral-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Scale Category</p>
                      <p className="font-medium">{firm.scaleCategory}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-neutral-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Tier Category</p>
                      <p className="font-medium">{firm.tierCategory}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Classification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Classification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Primary Typology</p>
                    <Badge variant="secondary">{firm.primaryTypology}</Badge>
                  </div>
                  
                  {firm.secondaryTypology && (
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Secondary Typology</p>
                      <Badge variant="outline">{firm.secondaryTypology}</Badge>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Design Orientation</p>
                    <Badge variant="outline">{firm.designOrientation}</Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Technical Orientation</p>
                    <Badge variant="outline">{firm.technicalOrientation}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Internship Intelligence */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Internship Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-neutral-50">
                    <p className="text-sm text-neutral-500 mb-1">Internship Potential</p>
                    <p className="text-lg font-semibold">{firm.internshipPotential || 'N/A'}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-neutral-50">
                    <p className="text-sm text-neutral-500 mb-1">Site Exposure</p>
                    <p className="text-lg font-semibold">{firm.siteExposure || 'N/A'}</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-neutral-50">
                    <p className="text-sm text-neutral-500 mb-1">Research Intensity</p>
                    <p className="text-lg font-semibold">{firm.researchIntensity || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-lg border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-4 w-4 text-neutral-500" />
                    <span className="text-sm font-medium">BIM Usage</span>
                  </div>
                  <p className="text-lg font-semibold">{firm.bimIntensity}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <FirmAIResearchButton
                  firmName={firm.name}
                  firmType={firm.category || firm.scaleCategory}
                  scale={firm.scaleCategory}
                  typology={firm.primaryTypology}
                  designOrientation={firm.designOrientation}
                />
                {firm.website && (
                  <Button variant="outline" className="w-full justify-start gap-2" asChild>
                    <a href={firm.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
                {firm.officialEmail && (
                  <Button variant="outline" className="w-full justify-start gap-2" asChild>
                    <a href={`mailto:${firm.officialEmail}`}>
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                )}
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Profile
                </Button>
              </CardContent>
            </Card>
            
            {/* Related Firms */}
            {relatedFirms.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Firms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {relatedFirms.slice(0, 5).map(related => (
                    <Link
                      key={related.id}
                      href={`/firms/${related.id}`}
                      className="block p-3 rounded-lg hover:bg-neutral-50 border border-neutral-100"
                    >
                      <p className="font-medium text-sm truncate">{related.name}</p>
                      <p className="text-xs text-neutral-500">{related.city}, {related.state}</p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
            
            {/* Data Source */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Clock className="h-4 w-4" />
                  <span>Added {new Date(firm.createdAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
