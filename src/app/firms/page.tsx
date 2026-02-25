"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  Search,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Lock,
  LogIn,
  LogOut,
  Database,
  Shield,
  SlidersHorizontal,
  Grid3X3,
  List,
  CheckCircle2,
  Users,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

interface Firm {
  id: string;
  name: string;
  city: string;
  state: string;
  principalArchitect: string | null;
  scaleCategory: string;
  tierCategory: string;
  primaryTypology: string;
  designOrientation: string;
  technicalOrientation: string;
  bimIntensity: string;
  internshipPotential: string | null;
  website: string | null;
  officialEmail: string | null;
}

interface Filters {
  cities: string[];
  states: string[];
  scales: string[];
  tiers: string[];
  typologies: string[];
  designs: string[];
  technicals: string[];
  bimLevels: string[];
  stateCitiesMap: Record<string, string[]>;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const ALL_VALUE = "__all__";
const ADMIN_EMAIL = "rishi272004@gmail.com";
const ADMIN_PASSWORD = "Pass@alpha272004";

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function FirmsPage() {
  const [firms, setFirms] = useState<Firm[]>([]);
  const [filters, setFilters] = useState<Filters>({
    cities: [], states: [], scales: [], tiers: [], typologies: [],
    designs: [], technicals: [], bimLevels: [], stateCitiesMap: {},
  });
  const [pagination, setPagination] = useState<Pagination>({
    page: 1, limit: 20, total: 0, totalPages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilters, setShowFilters] = useState(true);
  
  // Filter state
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState(ALL_VALUE);
  const [selectedState, setSelectedState] = useState(ALL_VALUE);
  const [selectedScale, setSelectedScale] = useState(ALL_VALUE);
  const [selectedTier, setSelectedTier] = useState(ALL_VALUE);
  const [selectedTypology, setSelectedTypology] = useState(ALL_VALUE);
  const [selectedBim, setSelectedBim] = useState(ALL_VALUE);
  const [selectedInternship, setSelectedInternship] = useState(ALL_VALUE);
  
  // Sorting
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  // Available cities
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  
  // Admin
  const [showAdminPortal, setShowAdminPortal] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [importing, setImporting] = useState(false);
  const [importMessage, setImportMessage] = useState('');

  // Fetch filter options
  useEffect(() => {
    fetch('/api/firms/filters')
      .then(res => res.json())
      .then(data => {
        setFilters(data);
        setAvailableCities(data.cities || []);
      })
      .catch(() => {});
  }, []);
  
  // State change handler
  const handleStateChange = useCallback((newState: string) => {
    setSelectedState(newState);
    if (newState === ALL_VALUE) {
      setAvailableCities(filters.cities);
    } else {
      setAvailableCities(filters.stateCitiesMap[newState] || []);
    }
    setSelectedCity(ALL_VALUE);
  }, [filters.cities, filters.stateCitiesMap]);
  
  // Sort handler
  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  
  // Fetch firms
  const fetchFirms = useCallback(async (page: number = 1) => {
    setLoading(true);
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', '20');
    params.set('sortBy', sortBy);
    params.set('sortOrder', sortOrder);
    
    if (search) params.set('search', search);
    if (selectedCity !== ALL_VALUE) params.set('city', selectedCity);
    if (selectedState !== ALL_VALUE) params.set('state', selectedState);
    if (selectedScale !== ALL_VALUE) params.set('scaleCategory', selectedScale);
    if (selectedTier !== ALL_VALUE) params.set('tierCategory', selectedTier);
    if (selectedTypology !== ALL_VALUE) params.set('primaryTypology', selectedTypology);
    if (selectedBim !== ALL_VALUE) params.set('bimIntensity', selectedBim);
    if (selectedInternship !== ALL_VALUE) params.set('internshipPotential', selectedInternship);
    
    try {
      const res = await fetch(`/api/firms?${params}`);
      const data = await res.json();
      setFirms(data.firms || []);
      setPagination(data.pagination || { page: 1, limit: 20, total: 0, totalPages: 0 });
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  }, [search, selectedCity, selectedState, selectedScale, selectedTier, selectedTypology, selectedBim, selectedInternship, sortBy, sortOrder]);
  
  useEffect(() => {
    fetchFirms(1);
  }, [fetchFirms]);
  
  // Clear filters
  const clearFilters = () => {
    setSearch('');
    setSelectedCity(ALL_VALUE);
    setSelectedState(ALL_VALUE);
    setSelectedScale(ALL_VALUE);
    setSelectedTier(ALL_VALUE);
    setSelectedTypology(ALL_VALUE);
    setSelectedBim(ALL_VALUE);
    setSelectedInternship(ALL_VALUE);
    setAvailableCities(filters.cities);
  };
  
  // Admin handlers
  const handleAdminLogin = () => {
    if (adminEmail === ADMIN_EMAIL && adminPassword === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      setLoginError('');
      setAdminPassword('');
    } else {
      setLoginError('Invalid credentials');
    }
  };
  
  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminEmail('');
    setAdminPassword('');
  };
  
  const triggerImport = async () => {
    setImporting(true);
    setImportMessage('');
    try {
      const res = await fetch('/api/firms/import', { method: 'POST' });
      const data = await res.json();
      setImportMessage(`Import complete: ${data.count} firms imported`);
      fetchFirms(1);
    } catch {
      setImportMessage('Import failed.');
    } finally {
      setImporting(false);
    }
  };
  
  const hasActiveFilters = search || 
    selectedCity !== ALL_VALUE || 
    selectedState !== ALL_VALUE || 
    selectedScale !== ALL_VALUE || 
    selectedTier !== ALL_VALUE || 
    selectedTypology !== ALL_VALUE || 
    selectedBim !== ALL_VALUE || 
    selectedInternship !== ALL_VALUE;

  const SortButton = ({ field, label }: { field: string; label: string }) => (
    <button
      onClick={() => handleSort(field)}
      className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-colors ${
        sortBy === field ? 'bg-neutral-100 text-neutral-900 font-medium' : 'text-neutral-500 hover:text-neutral-700'
      }`}
    >
      {label}
      {sortBy === field ? (
        sortOrder === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
      ) : (
        <ArrowUpDown className="h-3 w-3 opacity-40" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-neutral-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              ← Back to Platform
            </Link>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              <span className="font-medium">Firm Database</span>
            </div>
            <div className="w-24" />
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-8 sm:py-12 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
            Firm Intelligence Database
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            Structured discovery system for {pagination.total}+ architectural firms across India
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full overflow-x-hidden">
        
        {/* Filter Summary Bar */}
        <div className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
              {hasActiveFilters && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="gap-1">
                    {pagination.total} firms
                    <button onClick={clearFilters} className="ml-1 hover:text-neutral-900">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-neutral-100' : 'bg-white'}`}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-neutral-100' : 'bg-white'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filter Panel */}
          {showFilters && (
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-4 sm:p-5 lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-sm">Filters</h2>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
                      Clear
                    </Button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {/* Search */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                      <Input
                        placeholder="Firm name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 h-9 bg-white"
                      />
                    </div>
                  </div>
                  
                  {/* State */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">State</Label>
                    <Select value={selectedState} onValueChange={handleStateChange}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All states</SelectItem>
                        {filters.states.filter(s => s).map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* City */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">City</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All cities</SelectItem>
                        {availableCities.filter(c => c).map(c => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Scale */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">Scale</Label>
                    <Select value={selectedScale} onValueChange={setSelectedScale}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All scales</SelectItem>
                        {filters.scales.filter(s => s).map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Tier */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">Tier</Label>
                    <Select value={selectedTier} onValueChange={setSelectedTier}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All tiers</SelectItem>
                        {filters.tiers.filter(t => t).map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Typology */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">Typology</Label>
                    <Select value={selectedTypology} onValueChange={setSelectedTypology}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All</SelectItem>
                        {filters.typologies.filter(t => t).map(t => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* BIM */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">BIM Usage</Label>
                    <Select value={selectedBim} onValueChange={setSelectedBim}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All levels</SelectItem>
                        {filters.bimLevels.filter(b => b).map(b => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Internship */}
                  <div>
                    <Label className="text-xs text-neutral-500 mb-1.5 block">Internship Potential</Label>
                    <Select value={selectedInternship} onValueChange={setSelectedInternship}>
                      <SelectTrigger className="h-9 bg-white"><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value={ALL_VALUE}>All levels</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </aside>
          )}
          
          {/* Main List */}
          <main className="flex-1">
            {/* Sorting */}
            <div className="flex items-center gap-1 mb-4 flex-wrap">
              <span className="text-xs text-neutral-500 mr-2">Sort:</span>
              <SortButton field="name" label="Name" />
              <SortButton field="city" label="City" />
              <SortButton field="scaleCategory" label="Scale" />
              <SortButton field="internshipPotential" label="Internship" />
            </div>
            
            {/* Loading */}
            {loading ? (
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="animate-pulse p-5 rounded-xl bg-neutral-50">
                    <div className="h-4 bg-neutral-200 rounded w-1/3 mb-3" />
                    <div className="h-3 bg-neutral-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : firms.length === 0 ? (
              <div className="text-center py-16">
                <Building2 className="h-12 w-12 mx-auto text-neutral-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No firms found</h3>
                <p className="text-neutral-500 mb-4">Try adjusting your filters</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' ? 'grid sm:grid-cols-2 gap-4' : 'space-y-3'}>
                  {firms.map((firm) => (
                    <Link key={firm.id} href={`/firms/${firm.id}`}>
                      <div className="p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all bg-white">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-neutral-900">{firm.name}</h3>
                          {firm.internshipPotential === 'High' && (
                            <Badge className="bg-green-100 text-green-700 border-0 text-xs">High</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{firm.city}, {firm.state}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs font-normal">{firm.scaleCategory}</Badge>
                          <Badge variant="outline" className="text-xs font-normal">{firm.primaryTypology}</Badge>
                          {firm.bimIntensity && firm.bimIntensity !== 'None' && (
                            <Badge variant="secondary" className="text-xs font-normal">{firm.bimIntensity} BIM</Badge>
                          )}
                        </div>
                        
                        {firm.principalArchitect && (
                          <div className="flex items-center gap-2 mt-3 text-sm text-neutral-500">
                            <Users className="h-3.5 w-3.5" />
                            <span className="truncate">{firm.principalArchitect}</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page === 1}
                      onClick={() => fetchFirms(pagination.page - 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <Button
                            key={pageNum}
                            variant={pageNum === pagination.page ? 'default' : 'outline'}
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => fetchFirms(pageNum)}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page === pagination.totalPages}
                      onClick={() => fetchFirms(pagination.page + 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
      
      {/* Hidden Admin Portal */}
      <footer className="border-t border-neutral-100 mt-auto">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowAdminPortal(!showAdminPortal)}
              className="text-xs text-neutral-400 hover:text-neutral-500 flex items-center gap-1"
            >
              <Lock className="h-3 w-3" />
              <span>{showAdminPortal ? 'Hide Admin' : 'Admin'}</span>
            </button>
          </div>
          
          {showAdminPortal && (
            <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-6 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-neutral-600" />
                <h3 className="font-medium">Admin Portal</h3>
              </div>
              
              {!isAdminLoggedIn ? (
                <div className="space-y-3">
                  <Input
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="Email"
                    className="h-9"
                  />
                  <Input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Password"
                    className="h-9"
                    onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                  />
                  {loginError && <p className="text-xs text-red-500">{loginError}</p>}
                  <Button onClick={handleAdminLogin} className="w-full gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-green-700">Logged in</span>
                    <Button variant="ghost" size="sm" onClick={handleAdminLogout} className="h-7 text-xs">
                      <LogOut className="h-3 w-3 mr-1" />
                      Logout
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    onClick={triggerImport}
                    disabled={importing}
                  >
                    <Database className="h-4 w-4" />
                    {importing ? 'Importing...' : 'Re-import Data'}
                  </Button>
                  {importMessage && <p className="text-xs text-neutral-600">{importMessage}</p>}
                </div>
              )}
            </div>
          )}
          
          <div className="text-center mt-6 text-xs text-neutral-400">
            <p>Platform Created by Rushikesh Bhise</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
