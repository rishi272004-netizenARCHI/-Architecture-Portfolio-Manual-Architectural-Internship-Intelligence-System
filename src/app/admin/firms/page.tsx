"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Building2,
  Plus,
  Search,
  Edit,
  Trash2,
  Upload,
  Download,
  BarChart3,
  MapPin,
  Users,
  Layers,
  RefreshCw,
  X,
} from "lucide-react";

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
  bimIntensity: string;
  internshipPotential: string | null;
  isActive: boolean;
}

interface Stats {
  totalFirms: number;
  byCity: { city: string; count: number }[];
  byScale: { scale: string; count: number }[];
  byTier: { tier: string; count: number }[];
  byTypology: { typology: string; count: number }[];
  byBim: { bim: string; count: number }[];
  byInternship: { potential: string; count: number }[];
}

const scaleOptions = ['Solo', 'Small', 'Mid-size', 'Large', 'Corporate'];
const tierOptions = ['Metro', 'Regional', 'Emerging'];
const typologyOptions = ['Residential', 'Institutional', 'Commercial', 'Urban', 'Interior', 'Mixed', 'Cultural', 'Healthcare', 'Hospitality'];
const designOptions = ['Minimal', 'Contextual', 'Parametric', 'Corporate', 'Sustainable', 'Urban', 'Modernist', 'Contemporary', 'Luxury', 'Experimental', 'Climate-responsive'];
const technicalOptions = ['Technical-heavy', 'BIM-heavy', 'Site-heavy', 'Research-heavy', 'Design-heavy', 'Execution-heavy', 'Material-focused', 'Detail-driven'];
const bimOptions = ['Heavy', 'Moderate', 'Partial', 'None'];
const internshipOptions = ['High', 'Medium', 'Low'];

export default function AdminFirmsPage() {
  const [firms, setFirms] = useState<Firm[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [editingFirm, setEditingFirm] = useState<Firm | null>(null);
  const [showStats, setShowStats] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    principalArchitect: '',
    scaleCategory: 'Small',
    tierCategory: 'Regional',
    primaryTypology: 'Residential',
    secondaryTypology: '',
    designOrientation: 'Contemporary',
    technicalOrientation: 'Technical-heavy',
    bimIntensity: 'None',
    internshipPotential: 'Medium',
    website: '',
    officialEmail: '',
    notes: '',
  });
  
  // Fetch stats
  useEffect(() => {
    fetch('/api/firms/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);
  
  // Fetch firms
  useEffect(() => {
    let isMounted = true;
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', '10');
    if (search) params.set('search', search);
    
    async function fetchFirms() {
      try {
        const res = await fetch(`/api/firms?${params}`);
        const data = await res.json();
        if (isMounted) {
          setFirms(data.firms || []);
          setTotal(data.pagination?.total || 0);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    fetchFirms();
    return () => { isMounted = false; };
  }, [page, search]);
  
  // Open edit dialog
  const openEdit = (firm: Firm) => {
    setEditingFirm(firm);
    setFormData({
      name: firm.name,
      city: firm.city,
      state: firm.state,
      principalArchitect: firm.principalArchitect || '',
      scaleCategory: firm.scaleCategory,
      tierCategory: firm.tierCategory,
      primaryTypology: firm.primaryTypology,
      secondaryTypology: '',
      designOrientation: firm.designOrientation,
      technicalOrientation: firm.technicalOrientation,
      bimIntensity: firm.bimIntensity,
      internshipPotential: firm.internshipPotential || 'Medium',
      website: '',
      officialEmail: '',
      notes: '',
    });
    setShowDialog(true);
  };
  
  // Open add dialog
  const openAdd = () => {
    setEditingFirm(null);
    setFormData({
      name: '',
      city: '',
      state: '',
      principalArchitect: '',
      scaleCategory: 'Small',
      tierCategory: 'Regional',
      primaryTypology: 'Residential',
      secondaryTypology: '',
      designOrientation: 'Contemporary',
      technicalOrientation: 'Technical-heavy',
      bimIntensity: 'None',
      internshipPotential: 'Medium',
      website: '',
      officialEmail: '',
      notes: '',
    });
    setShowDialog(true);
  };
  
  // Save firm
  const handleSave = async () => {
    try {
      const url = editingFirm ? `/api/firms/${editingFirm.id}` : '/api/firms';
      const method = editingFirm ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setShowDialog(false);
        // Refresh list
        fetch(`/api/firms?page=${page}&limit=10`)
          .then(res => res.json())
          .then(data => {
            setFirms(data.firms || []);
            setTotal(data.pagination?.total || 0);
          });
      }
    } catch (error) {
      console.error('Error saving firm:', error);
    }
  };
  
  // Delete firm
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this firm?')) return;
    
    try {
      await fetch(`/api/firms/${id}`, { method: 'DELETE' });
      setFirms(firms.filter(f => f.id !== id));
    } catch (error) {
      console.error('Error deleting firm:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900">
                <Building2 className="h-5 w-5" />
                <span className="font-medium">Architecture Portfolio Manual</span>
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="font-semibold">Admin Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/firms">View Public Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Firm Management</h1>
          <p className="text-neutral-600">Manage the firm intelligence database</p>
        </div>
        
        {/* Stats Dashboard */}
        {showStats && stats && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Statistics</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowStats(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold">{stats.totalFirms}</div>
                  <div className="text-sm text-neutral-500">Total Firms</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-green-600">
                    {stats.byInternship.find(i => i.potential === 'High')?.count || 0}
                  </div>
                  <div className="text-sm text-neutral-500">High Internship Potential</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {stats.byBim.find(b => b.bim === 'Heavy')?.count || 0}
                  </div>
                  <div className="text-sm text-neutral-500">BIM-Heavy Firms</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold">{stats.byCity.length}</div>
                  <div className="text-sm text-neutral-500">Cities Covered</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">By Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.byScale.map(s => (
                      <div key={s.scale} className="flex justify-between text-sm">
                        <span>{s.scale}</span>
                        <span className="font-medium">{s.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">By Tier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.byTier.map(t => (
                      <div key={t.tier} className="flex justify-between text-sm">
                        <span>{t.tier}</span>
                        <span className="font-medium">{t.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Top Cities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stats.byCity.slice(0, 5).map(c => (
                      <div key={c.city} className="flex justify-between text-sm">
                        <span>{c.city}</span>
                        <span className="font-medium">{c.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
              placeholder="Search firms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import CSV
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button onClick={openAdd} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Firm
            </Button>
          </div>
        </div>
        
        {/* Firms Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Firm Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Scale</TableHead>
                  <TableHead>Typology</TableHead>
                  <TableHead>BIM</TableHead>
                  <TableHead>Internship</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  [...Array(5)].map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-32" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-24" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-16" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-20" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-12" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-12" /></TableCell>
                      <TableCell><div className="h-4 bg-neutral-200 rounded w-20" /></TableCell>
                    </TableRow>
                  ))
                ) : firms.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-neutral-500">
                      No firms found
                    </TableCell>
                  </TableRow>
                ) : (
                  firms.map((firm) => (
                    <TableRow key={firm.id} className={!firm.isActive ? 'opacity-50' : ''}>
                      <TableCell className="font-medium">{firm.name}</TableCell>
                      <TableCell>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-neutral-400" />
                          {firm.city}, {firm.state}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{firm.scaleCategory}</Badge>
                      </TableCell>
                      <TableCell>{firm.primaryTypology}</TableCell>
                      <TableCell>{firm.bimIntensity}</TableCell>
                      <TableCell>
                        <Badge className={firm.internshipPotential === 'High' ? 'bg-green-600' : ''}>
                          {firm.internshipPotential || 'N/A'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" onClick={() => openEdit(firm)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(firm.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-neutral-500">
            Showing {firms.length} of {total} firms
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={firms.length < 10}
              onClick={() => setPage(p => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      
      {/* Add/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingFirm ? 'Edit Firm' : 'Add New Firm'}</DialogTitle>
            <DialogDescription>
              {editingFirm ? 'Update firm information' : 'Add a new firm to the database'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid sm:grid-cols-2 gap-4 py-4">
            <div className="sm:col-span-2">
              <Label>Firm Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Firm name"
              />
            </div>
            
            <div>
              <Label>City *</Label>
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="City"
              />
            </div>
            
            <div>
              <Label>State *</Label>
              <Input
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="State"
              />
            </div>
            
            <div>
              <Label>Principal Architect</Label>
              <Input
                value={formData.principalArchitect}
                onChange={(e) => setFormData({ ...formData, principalArchitect: e.target.value })}
                placeholder="Principal architect name"
              />
            </div>
            
            <div>
              <Label>Scale Category *</Label>
              <Select value={formData.scaleCategory} onValueChange={(v) => setFormData({ ...formData, scaleCategory: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {scaleOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Tier Category *</Label>
              <Select value={formData.tierCategory} onValueChange={(v) => setFormData({ ...formData, tierCategory: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {tierOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Primary Typology *</Label>
              <Select value={formData.primaryTypology} onValueChange={(v) => setFormData({ ...formData, primaryTypology: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {typologyOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Design Orientation *</Label>
              <Select value={formData.designOrientation} onValueChange={(v) => setFormData({ ...formData, designOrientation: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {designOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Technical Orientation *</Label>
              <Select value={formData.technicalOrientation} onValueChange={(v) => setFormData({ ...formData, technicalOrientation: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {technicalOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>BIM Intensity *</Label>
              <Select value={formData.bimIntensity} onValueChange={(v) => setFormData({ ...formData, bimIntensity: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {bimOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Internship Potential</Label>
              <Select value={formData.internshipPotential} onValueChange={(v) => setFormData({ ...formData, internshipPotential: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {internshipOptions.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Website</Label>
              <Input
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://..."
              />
            </div>
            
            <div>
              <Label>Official Email</Label>
              <Input
                type="email"
                value={formData.officialEmail}
                onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                placeholder="email@firm.com"
              />
            </div>
            
            <div className="sm:col-span-2">
              <Label>Notes</Label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Internal notes..."
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editingFirm ? 'Update' : 'Add'} Firm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
